import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

// 1. Generate Career Text Textures (PNG)
const careerItems = [
    {
        name: 'careerIRLTeacher.png',
        title: 'FULL STACK DEVELOPER',
        sub: 'VYUHVERSE CAPITAL (DEC 2025 - PRESENT)'
    },
    {
        name: 'careerOnlineTeacher.png',
        title: 'WEB DEV INTERN',
        sub: 'BUGLE TECHNOLOGY (MAR 2025 - JUN 2025)'
    },
    {
        name: 'careerFreelancer.png',
        title: 'FREELANCE WEB DEVELOPER',
        sub: 'SELF-EMPLOYED (2023 - PRESENT)'
    },
    {
        name: 'careerHetic.png',
        title: 'BSc IN INFORMATION TECH',
        sub: 'GANPAT UNIVERSITY (COMPLETED MAY 2025)'
    },
    {
        name: 'careerImmersiveGarden.png',
        title: '5+ LIVE WEB PROJECTS',
        sub: 'ERP &amp; BUSINESS SOFTWARE SOLUTIONS'
    },
    {
        name: 'careerUzik.png',
        title: 'WEB SECURITY ENGINEER',
        sub: 'OWASP AUDITING &amp; PENTESTING'
    }
]

async function generate() {
    // Career Textures
    const careerStatic = path.resolve('static/career')
    const careerDist = path.resolve('dist/career')
    if (!fs.existsSync(careerStatic)) fs.mkdirSync(careerStatic, { recursive: true })
    if (!fs.existsSync(careerDist)) fs.mkdirSync(careerDist, { recursive: true })

    for (const item of careerItems) {
        const svg = `
        <svg width="2048" height="512" viewBox="0 0 2048 512" xmlns="http://www.w3.org/2000/svg">
            <rect width="2048" height="512" fill="transparent" />
            <rect x="30" y="30" width="1988" height="452" rx="40" fill="#07090e" fill-opacity="0.85" stroke="#ffffff" stroke-opacity="0.4" stroke-width="8" />
            <text x="1024" y="210" font-family="sans-serif" font-weight="900" font-size="115" fill="#ffffff" text-anchor="middle" stroke="#000000" stroke-width="8">
                ${item.title}
            </text>
            <text x="1024" y="365" font-family="sans-serif" font-weight="900" font-size="80" fill="#ffd700" text-anchor="middle" stroke="#000000" stroke-width="6">
                ${item.sub}
            </text>
        </svg>
        `
        const buffer = await sharp(Buffer.from(svg)).png().toBuffer()
        fs.writeFileSync(path.join(careerStatic, item.name), buffer)
        fs.writeFileSync(path.join(careerDist, item.name), buffer)
        console.log(`Generated career texture: ${item.name}`)
    }

    // 2. Generate Realistic Project Web App UI Mockups
    const projStatic = path.resolve('static/projects/images')
    const projDist = path.resolve('dist/projects/images')
    if (!fs.existsSync(projStatic)) fs.mkdirSync(projStatic, { recursive: true })
    if (!fs.existsSync(projDist)) fs.mkdirSync(projDist, { recursive: true })

    // Project 1: OmniRip AI
    const omniSvg = `
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="1080" fill="#0b0e14" />
        <!-- Top Navbar -->
        <rect width="1920" height="70" fill="#141923" />
        <circle cx="40" cy="35" r="10" fill="#ff5f56" /><circle cx="70" cy="35" r="10" fill="#ffbd2e" /><circle cx="100" cy="35" r="10" fill="#27c93f" />
        <rect x="150" y="15" width="600" height="40" rx="8" fill="#1f2736" />
        <text x="170" y="41" font-family="sans-serif" font-size="18" fill="#8a99ad">https://omnirip.ai/webgl-extractor</text>
        <text x="1600" y="43" font-family="sans-serif" font-weight="700" font-size="20" fill="#00ffff">PARAMVEER SINH ZALA</text>

        <!-- Left Sidebar -->
        <rect y="70" width="280" height="1010" fill="#11151f" />
        <text x="30" y="130" font-family="sans-serif" font-weight="900" font-size="24" fill="#00ffff">OmniRip AI</text>
        <rect x="20" y="160" width="240" height="45" rx="8" fill="#8a2be2" />
        <text x="40" y="189" font-family="sans-serif" font-weight="700" font-size="18" fill="#ffffff">⚡ 3D Model Ripper</text>
        <text x="40" y="240" font-family="sans-serif" font-size="18" fill="#64748b">📦 Asset Library</text>
        <text x="40" y="280" font-family="sans-serif" font-size="18" fill="#64748b">🔮 Shader Inspector</text>
        <text x="40" y="320" font-family="sans-serif" font-weight="700" font-size="18" fill="#8a2be2">🤖 AI Model Synthesizer</text>

        <!-- Main Viewport (3D Canvas Wireframe) -->
        <rect x="310" y="90" width="1180" height="720" rx="12" fill="#06080d" stroke="#8a2be2" stroke-width="2" />
        <!-- 3D Cube Wireframe Graphics -->
        <polygon points="900,250 1100,350 900,450 700,350" fill="none" stroke="#00ffff" stroke-width="4" />
        <polygon points="700,350 700,580 900,680 900,450" fill="none" stroke="#8a2be2" stroke-width="4" />
        <polygon points="1100,350 1100,580 900,680 900,450" fill="none" stroke="#00ffff" stroke-width="4" />
        <circle cx="900" cy="450" r="15" fill="#00ffff" />
        <text x="340" y="140" font-family="sans-serif" font-weight="700" font-size="22" fill="#00ffff">LIVE 3D WEBGL VIEWPORT</text>
        <text x="340" y="170" font-family="sans-serif" font-size="16" fill="#94a3b8">Vertices: 142,850 • Shaders: TSL Node Material • FPS: 60</text>

        <!-- Right Inspector Panel -->
        <rect x="1510" y="90" width="380" height="970" rx="12" fill="#141923" />
        <text x="1540" y="140" font-family="sans-serif" font-weight="700" font-size="22" fill="#ffffff">AI Asset Inspector</text>
        <rect x="1540" y="170" width="320" height="180" rx="8" fill="#0f172a" />
        <text x="1560" y="210" font-family="sans-serif" font-size="16" fill="#38bdf8">const shader = tslFn(() => {</text>
        <text x="1560" y="240" font-family="sans-serif" font-size="16" fill="#38bdf8">  return vec4(color("#ff0055"));</text>
        <text x="1560" y="270" font-family="sans-serif" font-size="16" fill="#38bdf8">});</text>

        <!-- Bottom AI Console -->
        <rect x="310" y="830" width="1180" height="230" rx="12" fill="#141923" />
        <text x="340" y="875" font-family="sans-serif" font-weight="700" font-size="20" fill="#a855f7">AI Prompt Matrix:</text>
        <rect x="340" y="900" width="1120" height="60" rx="8" fill="#0b0e14" stroke="#8a2be2" stroke-width="2" />
        <text x="360" y="938" font-family="sans-serif" font-size="18" fill="#e2e8f0">Extract GLTF 3D meshes &amp; generate PBR textures automatically...</text>
        <rect x="1340" y="908" width="110" height="44" rx="6" fill="#8a2be2" />
        <text x="1360" y="936" font-family="sans-serif" font-weight="700" font-size="16" fill="#ffffff">RUN</text>
    </svg>
    `

    // Project 2: Vyuhverse Capital
    const vyuhSvg = `
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="1080" fill="#06121e" />
        <!-- Top Navbar -->
        <rect width="1920" height="70" fill="#0c1d2d" />
        <text x="40" y="45" font-family="sans-serif" font-weight="900" font-size="26" fill="#00e676">VYUHVERSE CAPITAL</text>
        <text x="1600" y="43" font-family="sans-serif" font-weight="700" font-size="20" fill="#0052cc">Paramveer Sinh Zala</text>

        <!-- Stat Cards -->
        <rect x="40" y="100" width="420" height="160" rx="12" fill="#0c1d2d" stroke="#00e676" stroke-width="2" />
        <text x="70" y="145" font-family="sans-serif" font-size="18" fill="#94a3b8">TOTAL PORTFOLIO VALUE</text>
        <text x="70" y="200" font-family="sans-serif" font-weight="900" font-size="44" fill="#00e676">$2,845,920.50</text>
        <text x="70" y="235" font-family="sans-serif" font-weight="700" font-size="16" fill="#00e676">▲ +18.4% (+ $442,100)</text>

        <rect x="490" y="100" width="420" height="160" rx="12" fill="#0c1d2d" stroke="#0052cc" stroke-width="2" />
        <text x="520" y="145" font-family="sans-serif" font-size="18" fill="#94a3b8">INVESTMENT CAPITAL</text>
        <text x="520" y="200" font-family="sans-serif" font-weight="900" font-size="44" fill="#ffffff">$1,500,000.00</text>

        <rect x="940" y="100" width="420" height="160" rx="12" fill="#0c1d2d" stroke="#00e676" stroke-width="2" />
        <text x="970" y="145" font-family="sans-serif" font-size="18" fill="#94a3b8">YIELD &amp; ANNUAL RETURN</text>
        <text x="970" y="200" font-family="sans-serif" font-weight="900" font-size="44" fill="#00e676">24.8% ARR</text>

        <!-- Main Chart Area -->
        <rect x="40" y="290" width="1320" height="740" rx="12" fill="#0c1d2d" />
        <text x="80" y="340" font-family="sans-serif" font-weight="700" font-size="24" fill="#ffffff">Growth Analytics &amp; Market Trend</text>
        <!-- Candlestick / Area Line Graph -->
        <path d="M80 900 L250 820 L420 850 L600 700 L780 730 L960 550 L1140 580 L1300 420" fill="none" stroke="#00e676" stroke-width="6" />
        <path d="M80 900 L250 820 L420 850 L600 700 L780 730 L960 550 L1140 580 L1300 420 L1300 950 L80 950 Z" fill="#00e676" opacity="0.1" />

        <!-- Right Side Holdings Panel -->
        <rect x="1390" y="100" width="490" height="930" rx="12" fill="#0c1d2d" />
        <text x="1420" y="150" font-family="sans-serif" font-weight="700" font-size="24" fill="#ffffff">Top Holdings</text>
        <rect x="1420" y="180" width="430" height="75" rx="8" fill="#16293d" />
        <text x="1440" y="225" font-family="sans-serif" font-weight="700" font-size="20" fill="#00e676">AAPL • Apple Inc.</text>
        <text x="1750" y="225" font-family="sans-serif" font-weight="700" font-size="20" fill="#ffffff">$420K</text>
        
        <rect x="1420" y="270" width="430" height="75" rx="8" fill="#16293d" />
        <text x="1440" y="315" font-family="sans-serif" font-weight="700" font-size="20" fill="#00e676">NVDA • Nvidia Corp.</text>
        <text x="1750" y="315" font-family="sans-serif" font-weight="700" font-size="20" fill="#ffffff">$680K</text>
    </svg>
    `

    // Project 3: Vulnora Security Scanner
    const vulnSvg = `
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="1080" fill="#0f070a" />
        <!-- Top Security Header -->
        <rect width="1920" height="70" fill="#1f0d14" />
        <text x="40" y="45" font-family="sans-serif" font-weight="900" font-size="26" fill="#ff0055">VULNORA SECURITY AUDITOR</text>
        <text x="1500" y="43" font-family="sans-serif" font-weight="700" font-size="20" fill="#ff9900">Paramveer Sinh Zala (Pali)</text>

        <!-- Security Gauge Card -->
        <rect x="40" y="100" width="560" height="450" rx="14" fill="#1a0b12" stroke="#ff0055" stroke-width="3" />
        <circle cx="320" cy="300" r="140" fill="none" stroke="#ff0055" stroke-width="20" stroke-dasharray="700 200" />
        <text x="320" y="290" font-family="sans-serif" font-weight="900" font-size="72" fill="#ffffff" text-anchor="middle">98%</text>
        <text x="320" y="335" font-family="sans-serif" font-weight="700" font-size="22" fill="#ff0055" text-anchor="middle">SECURITY HEALTH</text>
        <text x="320" y="500" font-family="sans-serif" font-weight="700" font-size="20" fill="#00e676" text-anchor="middle">✔ OWASP Top 10 Audited</text>

        <!-- Vulnerability Stream -->
        <rect x="630" y="100" width="1250" height="930" rx="14" fill="#1a0b12" stroke="#331422" stroke-width="2" />
        <text x="670" y="150" font-family="sans-serif" font-weight="700" font-size="24" fill="#ffffff">Active Vulnerability &amp; Pentest Log</text>

        <rect x="670" y="180" width="1170" height="80" rx="8" fill="#2a101d" />
        <text x="700" y="228" font-family="sans-serif" font-weight="700" font-size="20" fill="#00e676">PASS: SQL Injection Prevention (Parameterized Queries)</text>
        
        <rect x="670" y="280" width="1170" height="80" rx="8" fill="#2a101d" />
        <text x="700" y="328" font-family="sans-serif" font-weight="700" font-size="20" fill="#00e676">PASS: Cross-Site Scripting (XSS) Sanitization Active</text>

        <rect x="670" y="380" width="1170" height="80" rx="8" fill="#2a101d" />
        <text x="700" y="428" font-family="sans-serif" font-weight="700" font-size="20" fill="#ff9900">INFO: Content-Security-Policy Header Configured</text>
    </svg>
    `

    // Project 4: Auro Edge AI
    const auroSvg = `
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="1080" fill="#0e0a05" />
        <rect width="1920" height="70" fill="#1f1407" />
        <text x="40" y="45" font-family="sans-serif" font-weight="900" font-size="26" fill="#f38020">AURO — EDGE AI PLATFORM</text>
        <text x="1500" y="43" font-family="sans-serif" font-weight="700" font-size="20" fill="#faad14">Cloudflare Workers Edge</text>

        <rect x="40" y="100" width="1200" height="930" rx="14" fill="#1a1106" stroke="#f38020" stroke-width="2" />
        <text x="80" y="160" font-family="sans-serif" font-weight="700" font-size="24" fill="#ffffff">Edge AI Prompt Studio</text>
        
        <rect x="80" y="200" width="1120" height="180" rx="10" fill="#0e0a05" stroke="#faad14" stroke-width="2" />
        <text x="110" y="250" font-family="sans-serif" font-size="20" fill="#fef08a">Generate high-throughput AI text responses via Workers AI API...</text>

        <rect x="80" y="410" width="1120" height="580" rx="10" fill="#0e0a05" />
        <text x="110" y="460" font-family="sans-serif" font-weight="700" font-size="22" fill="#f38020">AI Output (Edge Latency: 12ms):</text>
        <text x="110" y="510" font-family="sans-serif" font-size="18" fill="#e2e8f0">Auro Edge AI runs model inference directly on Cloudflare Workers edge nodes globally...</text>
    </svg>
    `

    // Project 5: BeCreative Learn
    const learnSvg = `
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="1080" fill="#09050f" />
        <rect width="1920" height="70" fill="#170c24" />
        <text x="40" y="45" font-family="sans-serif" font-weight="900" font-size="26" fill="#13c2c2">BeCreative Click to Learn</text>

        <rect x="40" y="100" width="1840" height="930" rx="14" fill="#150a21" />
        <rect x="80" y="140" width="850" height="850" rx="10" fill="#09050f" stroke="#722ed1" stroke-width="2" />
        <text x="110" y="190" font-family="sans-serif" font-weight="700" font-size="22" fill="#13c2c2">Interactive HTML/CSS Code Editor</text>
        <text x="110" y="240" font-family="sans-serif" font-size="18" fill="#a78bfa">&lt;div class="hero-header"&gt;</text>
        <text x="140" y="280" font-family="sans-serif" font-size="18" fill="#38bdf8">&lt;h1&gt;Welcome to BeCreative Learn&lt;/h1&gt;</text>
        <text x="110" y="320" font-family="sans-serif" font-size="18" fill="#a78bfa">&lt;/div&gt;</text>

        <rect x="960" y="140" width="920" height="850" rx="10" fill="#09050f" stroke="#13c2c2" stroke-width="2" />
        <text x="990" y="190" font-family="sans-serif" font-weight="700" font-size="22" fill="#00e676">Live Browser Preview</text>
        <rect x="990" y="220" width="860" height="200" rx="10" fill="#722ed1" />
        <text x="1030" y="330" font-family="sans-serif" font-weight="900" font-size="38" fill="#ffffff">Welcome to BeCreative Learn</text>
    </svg>
    `

    // Project 6: GlowDesk Dashboard
    const glowSvg = `
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="1080" fill="#050c17" />
        <rect width="1920" height="70" fill="#0d1b2a" />
        <text x="40" y="45" font-family="sans-serif" font-weight="900" font-size="26" fill="#1890ff">GLOWDESK WORKSPACE</text>
        <text x="1500" y="43" font-family="sans-serif" font-weight="700" font-size="20" fill="#52c41a">Paramveer Sinh Zala</text>

        <rect x="40" y="100" width="1840" height="930" rx="14" fill="#0b1726" />
        <rect x="80" y="140" width="560" height="850" rx="10" fill="#050c17" />
        <text x="110" y="190" font-family="sans-serif" font-weight="700" font-size="22" fill="#1890ff">Kanban Sprint Tasks</text>
        
        <rect x="110" y="220" width="500" height="100" rx="8" fill="#132438" />
        <text x="130" y="270" font-family="sans-serif" font-weight="700" font-size="18" fill="#52c41a">✔ Deploy WebGL Shaders to Edge</text>

        <rect x="680" y="140" width="1200" height="850" rx="10" fill="#050c17" />
        <text x="710" y="190" font-family="sans-serif" font-weight="700" font-size="22" fill="#52c41a">Team Analytics &amp; Productivity</text>
        <path d="M710 850 L880 700 L1050 740 L1220 520 L1390 600 L1560 450 L1730 480" fill="none" stroke="#1890ff" stroke-width="6" />
    </svg>
    `

    const list = [
        { name: 'omnirip-ai-1.png', svg: omniSvg },
        { name: 'vyuhverse-capital-1.png', svg: vyuhSvg },
        { name: 'vulnora-scanner-1.png', svg: vulnSvg },
        { name: 'auro-edge-ai-1.png', svg: auroSvg },
        { name: 'becreative-learn-1.png', svg: learnSvg },
        { name: 'glowdesk-1.png', svg: glowSvg }
    ]

    for (const proj of list) {
        const buffer = await sharp(Buffer.from(proj.svg)).png().toBuffer()
        fs.writeFileSync(path.join(projStatic, proj.name), buffer)
        fs.writeFileSync(path.join(projDist, proj.name), buffer)
        console.log(`Generated project web app mockup: ${proj.name}`)
    }
}

generate().catch(console.error)
