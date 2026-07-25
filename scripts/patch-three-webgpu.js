import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filesToPatch = [
    path.join(__dirname, '../node_modules/three/src/renderers/webgpu/WebGPUBackend.js'),
    path.join(__dirname, '../node_modules/three/src/renderers/webgpu/utils/WebGPUBindingUtils.js'),
    path.join(__dirname, '../node_modules/three/src/renderers/webgpu/utils/WebGPUAttributeUtils.js'),
    path.join(__dirname, '../node_modules/three/build/three.webgpu.js'),
    path.join(__dirname, '../node_modules/three/build/three.webgpu.nodes.js')
]

for(const filePath of filesToPatch)
{
    if(fs.existsSync(filePath))
    {
        let content = fs.readFileSync(filePath, 'utf8')
        
        // 1. Safety guard drawIndexed (regular mesh)
        content = content.replace(
            /passEncoderGPU\.drawIndexed\(\s*indexCount\s*,\s*instanceCount\s*,\s*firstIndex\s*,\s*0\s*,\s*0\s*\);/g,
            'passEncoderGPU.drawIndexed( ( indexCount || 0 ) | 0, ( instanceCount || 1 ) | 0, ( firstIndex || 0 ) | 0, 0, 0 );'
        )

        // 2. Safety guard draw (regular mesh)
        content = content.replace(
            /passEncoderGPU\.draw\(\s*vertexCount\s*,\s*instanceCount\s*,\s*firstVertex\s*,\s*0\s*\);/g,
            'passEncoderGPU.draw( ( vertexCount || 0 ) | 0, ( instanceCount || 1 ) | 0, ( firstVertex || 0 ) | 0, 0 );'
        )

        // 3. Safety guard drawIndexed (batched mesh)
        content = content.replace(
            /passEncoderGPU\.drawIndexed\(\s*counts\[\s*i\s*\]\s*,\s*count\s*,\s*starts\[\s*i\s*\]\s*\/\s*bytesPerElement\s*,\s*0\s*,\s*firstInstance\s*\);/g,
            'passEncoderGPU.drawIndexed( ( counts[ i ] || 0 ) | 0, ( count || 1 ) | 0, ( ( starts[ i ] / bytesPerElement ) || 0 ) | 0, 0, ( firstInstance || 0 ) | 0 );'
        )

        // 4. Safety guard draw (batched mesh)
        content = content.replace(
            /passEncoderGPU\.draw\(\s*counts\[\s*i\s*\]\s*,\s*count\s*,\s*starts\[\s*i\s*\]\s*,\s*firstInstance\s*\);/g,
            'passEncoderGPU.draw( ( counts[ i ] || 0 ) | 0, ( count || 1 ) | 0, ( starts[ i ] || 0 ) | 0, ( firstInstance || 0 ) | 0 );'
        )

        // 5. 64-byte minimum WebGPU uniform buffer byteLength guard (mat4x4 / WGSL uniform struct requirement)
        content = content.replace(
            /const\s+byteLength\s*=\s*(?:Math\.max\([^)]+\)|binding\.byteLength);/g,
            'const byteLength = Math.max( 64, Math.ceil( ( binding.byteLength || 64 ) / 16 ) * 16 );'
        )

        // 6. Non-zero WebGPU attribute buffer size guard
        content = content.replace(
            /const\s+size\s*=\s*(?:Math\.max\([^)]+\)|byteLength\s*\+\s*\(\s*\(\s*4\s*-\s*\(\s*byteLength\s*%\s*4\s*\)\s*\)\s*%\s*4\s*\));/g,
            'const size = Math.max( 64, byteLength + ( ( 4 - ( byteLength % 4 ) ) % 4 ) );'
        )

        fs.writeFileSync(filePath, content, 'utf8')
        console.log(`[Patch WebGPU] Successfully patched ${path.basename(filePath)}`)
    }
}
