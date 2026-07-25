import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const projects = [
    {
        name: 'omnirip-ai-1.png',
        title: 'OmniRip AI',
        category: '3D WebGL &amp; AI Asset Extraction',
        desc: 'Intelligent website asset extraction engine capturing WebGL 3D models, shaders, media, and code modules into an AI interactive workspace.',
        accent1: '#8a2be2',
        accent2: '#00ffff'
    },
    {
        name: 'vyuhverse-capital-1.png',
        title: 'Vyuhverse Capital',
        category: 'Financial &amp; Investment Capital Platform',
        desc: 'Institutional-grade financial capital analytics, investment growth charts, dark mode UI, and asset management tools.',
        accent1: '#0052cc',
        accent2: '#00e676'
    },
    {
        name: 'vulnora-scanner-1.png',
        title: 'Vulnora Security Scanner',
        category: 'Web Security &amp; Vulnerability Audit',
        desc: 'Automated web security scanner auditing websites for OWASP Top 10 vulnerabilities, misconfigurations, and threat vectors.',
        accent1: '#ff0055',
        accent2: '#ff9900'
    },
    {
        name: 'auro-edge-ai-1.png',
        title: 'Auro — Edge AI Prompt Platform',
        category: 'Full-Stack Cloudflare Edge AI Application',
        desc: 'Interactive full-stack AI prompt engineering and community post-sharing web app deployed on Cloudflare Workers edge architecture.',
        accent1: '#f38020',
        accent2: '#faad14'
    },
    {
        name: 'becreative-learn-1.png',
        title: 'BeCreative Click to Learn',
        category: 'Educational Web Platform',
        desc: 'Interactive digital learning platform offering custom HTML modules, hands-on web development courses, and digital skill building.',
        accent1: '#722ed1',
        accent2: '#13c2c2'
    },
    {
        name: 'glowdesk-1.png',
        title: 'GlowDesk Engineering',
        category: 'Workspace Management Dashboard',
        desc: 'Modern workspace management and productivity tracking dashboard built for remote engineering teams.',
        accent1: '#1890ff',
        accent2: '#52c41a'
    }
]

async function generate() {
    const staticDir = path.resolve('static/projects/images')
    const distDir = path.resolve('dist/projects/images')

    if (!fs.existsSync(staticDir)) fs.mkdirSync(staticDir, { recursive: true })
    if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true })

    for (const proj of projects) {
        const svg = `
        <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#0c0e14" />
                    <stop offset="50%" stop-color="#141824" />
                    <stop offset="100%" stop-color="#07090e" />
                </linearGradient>
                <linearGradient id="cardGrad_${proj.name.replace('.png','')}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${proj.accent1}" stop-opacity="0.25" />
                    <stop offset="100%" stop-color="${proj.accent2}" stop-opacity="0.1" />
                </linearGradient>
                <linearGradient id="accent_${proj.name.replace('.png','')}" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="${proj.accent1}" />
                    <stop offset="100%" stop-color="${proj.accent2}" />
                </linearGradient>
            </defs>

            <!-- Background -->
            <rect width="1920" height="1080" fill="url(#bg)" />

            <!-- Glowing Grid lines -->
            <path d="M0 270 H1920 M0 540 H1920 M0 810 H1920 M480 0 V1080 M960 0 V1080 M1440 0 V1080" stroke="#ffffff" stroke-opacity="0.04" stroke-width="2" />

            <!-- Decorative Glow Orbs -->
            <circle cx="300" cy="300" r="250" fill="${proj.accent1}" opacity="0.15" />
            <circle cx="1600" cy="800" r="300" fill="${proj.accent2}" opacity="0.12" />

            <!-- Central Card container -->
            <rect x="160" y="140" width="1600" height="800" rx="24" fill="url(#cardGrad_${proj.name.replace('.png','')})" stroke="url(#accent_${proj.name.replace('.png','')})" stroke-width="4" />

            <!-- Top Header Bar -->
            <rect x="160" y="140" width="1600" height="100" rx="24" fill="#ffffff" fill-opacity="0.05" />
            <circle cx="220" cy="190" r="12" fill="#ff5f56" />
            <circle cx="260" cy="190" r="12" fill="#ffbd2e" />
            <circle cx="300" cy="190" r="12" fill="#27c93f" />

            <text x="360" y="198" font-family="sans-serif" font-weight="700" font-size="28" fill="#ffffff" opacity="0.7">
                PARAMVEER SINH ZALA (PALI) — PROJECT SHOWCASE
            </text>

            <!-- Main Title -->
            <text x="240" y="380" font-family="sans-serif" font-weight="900" font-size="82" fill="url(#accent_${proj.name.replace('.png','')})">
                ${proj.title}
            </text>

            <!-- Category Badge -->
            <rect x="240" y="420" width="650" height="54" rx="12" fill="url(#accent_${proj.name.replace('.png','')})" opacity="0.9" />
            <text x="260" y="456" font-family="sans-serif" font-weight="700" font-size="26" fill="#ffffff">
                ${proj.category}
            </text>

            <!-- Description Box -->
            <text x="240" y="550" font-family="sans-serif" font-weight="400" font-size="34" fill="#e2e8f0">
                ${proj.desc}
            </text>

            <!-- Bottom Stats / Tech Stack Bar -->
            <rect x="240" y="740" width="1440" height="120" rx="16" fill="#000000" fill-opacity="0.4" stroke="#ffffff" stroke-opacity="0.1" stroke-width="2" />
            <text x="280" y="810" font-family="sans-serif" font-weight="700" font-size="30" fill="${proj.accent2}">
                DEVELOPER: Paramveer Sinh Zala (Pali)
            </text>
            <text x="1100" y="810" font-family="sans-serif" font-weight="700" font-size="28" fill="#a0aec0">
                Production Project • Active Live
            </text>
        </svg>
        `

        const buffer = await sharp(Buffer.from(svg)).png().toBuffer()

        fs.writeFileSync(path.join(staticDir, proj.name), buffer)
        fs.writeFileSync(path.join(distDir, proj.name), buffer)
        console.log(`Generated: ${proj.name}`)
    }
}

generate().catch(console.error)
