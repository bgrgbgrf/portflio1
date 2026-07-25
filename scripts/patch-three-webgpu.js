import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filesToPatch = [
    path.join(__dirname, '../node_modules/three/src/renderers/webgpu/WebGPUBackend.js'),
    path.join(__dirname, '../node_modules/three/build/three.webgpu.js'),
    path.join(__dirname, '../node_modules/three/build/three.webgpu.nodes.js')
]

for(const filePath of filesToPatch)
{
    if(fs.existsSync(filePath))
    {
        let content = fs.readFileSync(filePath, 'utf8')
        
        // Safety guard drawIndexed
        content = content.replace(
            /passEncoderGPU\.drawIndexed\(\s*indexCount\s*,\s*instanceCount\s*,\s*firstIndex\s*,\s*0\s*,\s*0\s*\);/g,
            'passEncoderGPU.drawIndexed( ( indexCount || 0 ) | 0, ( instanceCount || 1 ) | 0, ( firstIndex || 0 ) | 0, 0, 0 );'
        )

        // Safety guard draw
        content = content.replace(
            /passEncoderGPU\.draw\(\s*vertexCount\s*,\s*instanceCount\s*,\s*firstVertex\s*,\s*0\s*\);/g,
            'passEncoderGPU.draw( ( vertexCount || 0 ) | 0, ( instanceCount || 1 ) | 0, ( firstVertex || 0 ) | 0, 0 );'
        )

        fs.writeFileSync(filePath, content, 'utf8')
        console.log(`[Patch WebGPU] Successfully patched ${path.basename(filePath)}`)
    }
}
