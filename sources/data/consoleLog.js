import * as THREE from 'three/webgpu'

const text = `
██████╗  █████╗ ██╗     ██╗    ██████╗  █████╗  ██████╗ ███╗   ██╗███████╗
██╔══██╗██╔══██╗██║     ██║    ██╔══██╗██╔══██╗██╔═══██╗████╗  ██║██╔════╝
██████╔╝███████║██║     ██║    ██████╔╝███████║██║   ██║██╔██╗ ██║███████╗
██╔═══╝ ██╔══██║██║     ██║    ██╔═══╝ ██╔══██║██║   ██║██║╚██╗██║╚════██║
██║     ██║  ██║███████╗██║    ██║     ██║  ██║╚██████╔╝██║ ╚████║███████║
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝    ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝

╔═ Intro ═══════════════╗
║ Welcome to Paramveer Sinh Zala (Pali)'s 3D Portfolio!
║ Full-Stack Developer, 3D WebGL Shader Specialist & Web Security Engineer.
╚═══════════════════════╝

╔═ Personal Details ════╗
║ Full Name  ⇒ Paramveer Sinh Zala (Pali)
║ Location   ⇒ Gandhinagar, Gujarat, India
║ Email      ⇒ zalaparamveer113@gmail.com
║ WhatsApp   ⇒ +91 8511542571 (https://wa.me/918511542571)
║ GitHub     ⇒ https://github.com/pali2410
║ LinkedIn   ⇒ https://www.linkedin.com/in/paramveer-sinh-zala-601114423/
║ Live Site  ⇒ https://portflio.paramveerzala42.workers.dev/
╚═══════════════════════╝

╔═ Key Projects ════════╗
║ 1. OmniRip AI        ⇒ 3D WebGL & AI Asset Extraction
║ 2. Vyuhverse Capital ⇒ Financial & Investment Capital Platform
║ 3. Vulnora Scanner   ⇒ Web Security & Vulnerability Audit
║ 4. Auro Edge AI      ⇒ Cloudflare Edge AI Application
║ 5. BeCreative Learn  ⇒ Interactive Educational Platform
║ 6. GlowDesk          ⇒ Workspace & Team Productivity Dashboard
╚═══════════════════════╝

╔═ Debug ═══════════════╗
║ You can access the debug mode by adding #debug at the end of the URL and reloading.
║ Press [V] to toggle the free camera.
╚═══════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]