const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// 1. Hero Silhouette / Portrait SVG
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <radialGradient id="greenGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#2ee56b" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#22c55e" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#07090a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e2429"/>
      <stop offset="50%" stop-color="#12171a"/>
      <stop offset="100%" stop-color="#080b0d"/>
    </linearGradient>
    <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2ee56b" stop-opacity="0.6"/>
      <stop offset="15%" stop-color="#2ee56b" stop-opacity="0"/>
      <stop offset="85%" stop-color="#2ee56b" stop-opacity="0"/>
      <stop offset="100%" stop-color="#2ee56b" stop-opacity="0.6"/>
    </linearGradient>
    <linearGradient id="skinGrad" x1="30%" y1="20%" x2="70%" y2="80%">
      <stop offset="0%" stop-color="#d49e7b"/>
      <stop offset="60%" stop-color="#b87f5d"/>
      <stop offset="100%" stop-color="#7d5038"/>
    </linearGradient>
    <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40"/>
    </filter>
  </defs>

  <!-- Dark Atmospheric Background -->
  <rect width="800" height="1000" fill="#07090a"/>
  <circle cx="400" cy="380" r="320" fill="url(#greenGlow)" filter="url(#blurFilter)"/>
  
  <!-- Subtle Grid Pattern in background -->
  <g opacity="0.05" stroke="#2ee56b" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="1000"/>
    <line x1="200" y1="0" x2="200" y2="1000"/>
    <line x1="300" y1="0" x2="300" y2="1000"/>
    <line x1="500" y1="0" x2="500" y2="1000"/>
    <line x1="600" y1="0" x2="600" y2="1000"/>
    <line x1="700" y1="0" x2="700" y2="1000"/>
    <line x1="0" y1="200" x2="800" y2="200"/>
    <line x1="0" y1="400" x2="800" y2="400"/>
    <line x1="0" y1="600" x2="800" y2="600"/>
    <line x1="0" y1="800" x2="800" y2="800"/>
  </g>

  <!-- Decorative Green Accent Rings -->
  <circle cx="400" cy="360" r="260" fill="none" stroke="#2ee56b" stroke-width="1.5" stroke-opacity="0.25" stroke-dasharray="8 12"/>
  <circle cx="400" cy="360" r="230" fill="none" stroke="#2ee56b" stroke-width="1" stroke-opacity="0.15"/>

  <!-- Character Silhouette (Vihanga Wageesha Portrait Representation) -->
  <!-- Shoulders & Torso / Black Shirt & Blazer -->
  <path d="M 160 980 C 180 820, 240 680, 310 610 L 400 660 L 490 610 C 560 680, 620 820, 640 980 Z" fill="url(#suitGrad)"/>
  <!-- Rim glow on blazer shoulders -->
  <path d="M 160 980 C 180 820, 240 680, 310 610 L 325 625 C 265 690, 205 825, 185 980 Z" fill="#2ee56b" opacity="0.4"/>
  <path d="M 640 980 C 620 820, 560 680, 490 610 L 475 625 C 535 690, 595 825, 615 980 Z" fill="#2ee56b" opacity="0.4"/>
  
  <!-- Collar & Shirt buttons -->
  <path d="M 360 620 L 400 700 L 440 620 Z" fill="#0d1013"/>
  <circle cx="400" cy="740" r="3" fill="#374151"/>
  <circle cx="400" cy="790" r="3" fill="#374151"/>
  <circle cx="400" cy="840" r="3" fill="#374151"/>
  <path d="M 400 680 L 400 950" stroke="#1f2937" stroke-width="2"/>

  <!-- Neck -->
  <path d="M 350 560 C 350 630, 450 630, 450 560 L 445 480 L 355 480 Z" fill="url(#skinGrad)"/>
  
  <!-- Head & Face -->
  <ellipse cx="400" cy="380" rx="105" ry="135" fill="url(#skinGrad)"/>
  
  <!-- Hair (Clean styled modern cut) -->
  <path d="M 285 360 C 280 270, 320 220, 400 215 C 480 220, 520 270, 515 360 C 510 310, 480 250, 400 245 C 320 250, 290 310, 285 360 Z" fill="#14171a"/>
  <path d="M 300 280 C 340 230, 450 225, 500 265 C 470 240, 370 235, 310 275 Z" fill="#222831"/>
  
  <!-- Ears -->
  <ellipse cx="295" cy="385" rx="14" ry="25" fill="#a86e4d"/>
  <ellipse cx="505" cy="385" rx="14" ry="25" fill="#a86e4d"/>

  <!-- Eyeglasses (Signature clean wireframe glasses) -->
  <rect x="325" y="345" width="60" height="42" rx="12" fill="rgba(255,255,255,0.08)" stroke="#9ca3af" stroke-width="2.5"/>
  <rect x="415" y="345" width="60" height="42" rx="12" fill="rgba(255,255,255,0.08)" stroke="#9ca3af" stroke-width="2.5"/>
  <path d="M 385 365 L 415 365" stroke="#9ca3af" stroke-width="2.5"/>
  <path d="M 325 360 L 295 365" stroke="#9ca3af" stroke-width="2"/>
  <path d="M 475 360 L 505 365" stroke="#9ca3af" stroke-width="2"/>
  <!-- Glasses lens reflection -->
  <line x1="335" y1="352" x2="355" y2="380" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.3"/>
  <line x1="425" y1="352" x2="445" y2="380" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.3"/>

  <!-- Eyes & Eyebrows -->
  <path d="M 335 332 Q 355 326 375 334" stroke="#1f2937" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M 425 334 Q 445 326 465 332" stroke="#1f2937" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <circle cx="355" cy="365" r="7" fill="#1f2937"/>
  <circle cx="445" cy="365" r="7" fill="#1f2937"/>
  <circle cx="357" cy="363" r="2" fill="#ffffff"/>
  <circle cx="447" cy="363" r="2" fill="#ffffff"/>

  <!-- Nose & Warm Smile -->
  <path d="M 398 360 L 396 395 Q 402 402 408 398" stroke="#8c5838" stroke-width="2" fill="none"/>
  <path d="M 368 430 Q 400 452 432 430" stroke="#713f28" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M 374 432 Q 400 445 426 432" stroke="#ffffff" stroke-width="2" fill="none"/>

  <!-- Green rim light outline on face profile -->
  <path d="M 295 360 C 290 420, 340 480, 400 495" stroke="#2ee56b" stroke-width="2" fill="none" opacity="0.3"/>
  <path d="M 505 360 C 510 420, 460 480, 400 495" stroke="#2ee56b" stroke-width="2" fill="none" opacity="0.3"/>

  <!-- Handwritten script "Ideas into Reality" overlay on right -->
  <g transform="translate(560, 260) rotate(-6)">
    <text x="0" y="0" font-family="'Caveat', cursive, sans-serif" font-size="44" font-weight="bold" fill="#2ee56b" filter="drop-shadow(0 0 8px rgba(46,229,107,0.6))">Ideas</text>
    <text x="15" y="45" font-family="'Caveat', cursive, sans-serif" font-size="34" font-weight="bold" fill="#2ee56b" opacity="0.9">into</text>
    <text x="0" y="98" font-family="'Caveat', cursive, sans-serif" font-size="52" font-weight="bold" fill="#2ee56b" filter="drop-shadow(0 0 10px rgba(46,229,107,0.7))">Reality</text>
    <path d="M 5 112 Q 50 120 120 105" stroke="#2ee56b" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
</svg>`;

// 2. About Section Image (Mountain view portrait matching Image 2)
const aboutSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="600" height="700">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2c3e50"/>
      <stop offset="40%" stop-color="#4a6984"/>
      <stop offset="70%" stop-color="#d4a373"/>
      <stop offset="100%" stop-color="#faedcd"/>
    </linearGradient>
    <linearGradient id="sunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff3b0" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#e07a5f" stop-opacity="0"/>
    </linearGradient>
  </defs>
  
  <!-- Sky -->
  <rect width="600" height="700" fill="url(#skyGrad)"/>
  <!-- Sun glow on horizon -->
  <circle cx="180" cy="300" r="140" fill="url(#sunGlow)"/>

  <!-- Distant Mountains -->
  <polygon points="0,380 150,310 280,360 420,290 600,370 600,700 0,700" fill="#3d5a80" opacity="0.5"/>
  <polygon points="0,420 190,340 330,410 480,320 600,400 600,700 0,700" fill="#293241" opacity="0.7"/>

  <!-- Misty Forest Valley -->
  <polygon points="0,480 160,430 350,470 520,410 600,460 600,700 0,700" fill="#1b263b"/>
  <polygon points="0,550 200,500 400,530 600,490 600,700 0,700" fill="#0d1b2a"/>

  <!-- Foreground Traveler / Subject (Side-Profile Looking toward horizon, matching reference photo 2) -->
  <g transform="translate(80, 180)">
    <!-- Back & Dark Jacket -->
    <path d="M 20 520 C 30 360, 70 280, 140 230 L 190 225 C 240 270, 270 340, 280 520 Z" fill="#0b0e11"/>
    <!-- Shoulder rim light from sunset -->
    <path d="M 140 230 L 190 225 C 205 240, 215 270, 220 310" stroke="#f4a261" stroke-width="4" fill="none" opacity="0.6"/>
    <!-- Head in profile looking left towards sunset -->
    <ellipse cx="145" cy="140" rx="45" ry="55" fill="#9c6644"/>
    <!-- Hair -->
    <path d="M 115 135 C 110 85, 140 70, 185 85 C 195 110, 195 145, 185 160 C 175 140, 160 110, 125 125 Z" fill="#111417"/>
    <!-- Wireframe glasses temple and bridge -->
    <line x1="110" y1="135" x2="155" y2="135" stroke="#d1d5db" stroke-width="2.5"/>
    <ellipse cx="112" cy="137" rx="14" ry="12" fill="none" stroke="#d1d5db" stroke-width="2.5"/>
    <!-- Jawline looking thoughtfully over valley -->
    <path d="M 110 148 Q 120 175 145 185 L 145 220" stroke="#7f4f34" stroke-width="3" fill="none"/>
  </g>

  <!-- Atmospheric Forest foreground silhouettes -->
  <path d="M 0 650 Q 50 610 120 660 Q 200 600 280 670 Q 400 590 500 660 Q 560 620 600 640 L 600 700 L 0 700 Z" fill="#05080a"/>

  <!-- Subtle aesthetic neon green frame accent on corner -->
  <rect x="20" y="20" width="560" height="660" rx="16" fill="none" stroke="#2ee56b" stroke-width="1.5" stroke-opacity="0.3"/>
</svg>`;

// 3. Project 01: Portfolio Website
const projPortfolio = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <rect width="800" height="500" fill="#0c1014"/>
  <!-- Laptop device frame -->
  <rect x="120" y="50" width="560" height="340" rx="14" fill="#182026" stroke="#2ee56b" stroke-width="1.5" stroke-opacity="0.4"/>
  <!-- Screen display -->
  <rect x="135" y="65" width="530" height="310" rx="8" fill="#07090a"/>
  <!-- Header inside laptop preview -->
  <rect x="135" y="65" width="530" height="40" fill="#0e1317"/>
  <circle cx="160" cy="85" r="5" fill="#ef4444"/>
  <circle cx="175" cy="85" r="5" fill="#eab308"/>
  <circle cx="190" cy="85" r="5" fill="#22c55e"/>
  <text x="215" y="90" font-family="sans-serif" font-size="12" fill="#9ca3af">portfolio.vihangawageesha.com</text>

  <!-- Screen Content preview -->
  <text x="170" y="160" font-family="sans-serif" font-size="28" font-weight="900" fill="#ffffff">VIHANGA <tspan fill="#2ee56b">WAGEESHA</tspan></text>
  <text x="170" y="190" font-family="sans-serif" font-size="13" fill="#9ca3af">CREATIVE DEVELOPER &amp; DIGITAL CREATOR</text>
  <rect x="170" y="215" width="130" height="32" rx="16" fill="#2ee56b"/>
  <text x="195" y="236" font-family="sans-serif" font-size="12" font-weight="bold" fill="#07090a">View Portfolio</text>

  <!-- Visual preview graphics in laptop -->
  <rect x="420" y="130" width="210" height="210" rx="12" fill="#12181d" stroke="#2ee56b" stroke-width="1" stroke-opacity="0.3"/>
  <circle cx="525" cy="235" r="60" fill="none" stroke="#2ee56b" stroke-width="2" stroke-dasharray="6 6"/>
  <text x="495" y="243" font-family="sans-serif" font-size="24" font-weight="bold" fill="#2ee56b">VW</text>

  <!-- Laptop base -->
  <path d="M 80 390 L 720 390 L 680 415 L 120 415 Z" fill="#242c33"/>
  <rect x="360" y="392" width="80" height="8" rx="4" fill="#141a20"/>
</svg>`;

// 4. Project 02: Mobile App UI
const projMobile = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <rect width="800" height="500" fill="#090d10"/>
  <!-- Grid background -->
  <g opacity="0.08" stroke="#2ee56b">
    <line x1="0" y1="100" x2="800" y2="100"/>
    <line x1="0" y1="250" x2="800" y2="250"/>
    <line x1="0" y1="400" x2="800" y2="400"/>
    <line x1="200" y1="0" x2="200" y2="500"/>
    <line x1="400" y1="0" x2="400" y2="500"/>
    <line x1="600" y1="0" x2="600" y2="500"/>
  </g>

  <!-- Phone 1 (Angled left) -->
  <g transform="translate(180, 50) rotate(-6)">
    <rect width="210" height="400" rx="30" fill="#151b20" stroke="#374151" stroke-width="3"/>
    <rect x="10" y="15" width="190" height="370" rx="22" fill="#07090a"/>
    <!-- UI Elements -->
    <text x="25" y="55" font-family="sans-serif" font-size="18" font-weight="bold" fill="#ffffff">VO <tspan fill="#2ee56b">Pay</tspan></text>
    <rect x="25" y="80" width="160" height="90" rx="14" fill="#1b242a" stroke="#2ee56b" stroke-width="1"/>
    <text x="40" y="115" font-family="sans-serif" font-size="11" fill="#9ca3af">Total Balance</text>
    <text x="40" y="145" font-family="sans-serif" font-size="20" font-weight="bold" fill="#2ee56b">$18,420.50</text>
    
    <!-- Action buttons -->
    <circle cx="55" cy="205" r="20" fill="#2ee56b"/>
    <circle cx="105" cy="205" r="20" fill="#1f2937"/>
    <circle cx="155" cy="205" r="20" fill="#1f2937"/>
    <rect x="25" y="250" width="160" height="40" rx="10" fill="#12181d"/>
    <rect x="25" y="300" width="160" height="40" rx="10" fill="#12181d"/>
  </g>

  <!-- Phone 2 (Centered front) -->
  <g transform="translate(420, 40) rotate(4)">
    <rect width="220" height="420" rx="32" fill="#192128" stroke="#2ee56b" stroke-width="2" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.8))"/>
    <rect x="10" y="15" width="200" height="390" rx="24" fill="#0a0e11"/>
    <!-- Dynamic island -->
    <rect x="75" y="24" width="70" height="18" rx="9" fill="#000000"/>
    
    <text x="30" y="75" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Activity Tracker</text>
    <!-- Circular progress ring in UI -->
    <circle cx="110" cy="165" r="55" fill="none" stroke="#1f2937" stroke-width="12"/>
    <circle cx="110" cy="165" r="55" fill="none" stroke="#2ee56b" stroke-width="12" stroke-dasharray="260 360" stroke-linecap="round"/>
    <text x="92" y="165" font-family="sans-serif" font-size="20" font-weight="bold" fill="#ffffff">84%</text>
    <text x="85" y="185" font-family="sans-serif" font-size="10" fill="#2ee56b">Completed</text>

    <!-- Cards below -->
    <rect x="25" y="250" width="170" height="50" rx="12" fill="#141c22" stroke="#2ee56b" stroke-width="0.8"/>
    <rect x="25" y="315" width="170" height="50" rx="12" fill="#141c22"/>
  </g>
</svg>`;

// 5. Project 03: Cinematic Video Edit
const projVideo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="neonCity" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050510"/>
      <stop offset="50%" stop-color="#0b172a"/>
      <stop offset="100%" stop-color="#09281a"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#neonCity)"/>
  
  <!-- Cyberpunk City Skyline -->
  <polygon points="40,500 40,250 110,250 110,500" fill="#0b0f19"/>
  <polygon points="120,500 120,180 200,180 200,500" fill="#0d1424"/>
  <polygon points="210,500 210,280 280,280 280,500" fill="#0b0f19"/>
  <polygon points="520,500 520,200 600,200 600,500" fill="#0d1424"/>
  <polygon points="610,500 610,160 700,160 700,500" fill="#08101a"/>
  <polygon points="710,500 710,290 770,290 770,500" fill="#0b0f19"/>

  <!-- Neon Window Dots -->
  <g fill="#2ee56b" opacity="0.6">
    <rect x="135" y="200" width="8" height="12"/>
    <rect x="155" y="230" width="8" height="12"/>
    <rect x="175" y="270" width="8" height="12"/>
    <rect x="630" y="190" width="8" height="12"/>
    <rect x="660" y="240" width="8" height="12"/>
  </g>
  <g fill="#38bdf8" opacity="0.6">
    <rect x="155" y="200" width="8" height="12"/>
    <rect x="175" y="240" width="8" height="12"/>
    <rect x="630" y="220" width="8" height="12"/>
    <rect x="650" y="290" width="8" height="12"/>
  </g>

  <!-- Wet Street Reflections -->
  <ellipse cx="400" cy="460" rx="280" ry="25" fill="#2ee56b" opacity="0.15"/>
  <ellipse cx="200" cy="470" rx="150" ry="15" fill="#38bdf8" opacity="0.1"/>

  <!-- Cinematic Hooded Figure in Center -->
  <path d="M 370 500 C 375 420, 360 360, 385 300 C 390 285, 410 285, 415 300 C 440 360, 425 420, 430 500 Z" fill="#05080c"/>
  <circle cx="400" cy="275" r="22" fill="#020406"/>
  <!-- Neon green rim light on silhouette -->
  <path d="M 370 500 C 375 420, 360 360, 385 300" stroke="#2ee56b" stroke-width="2.5" fill="none"/>
  <path d="M 430 500 C 425 420, 440 360, 415 300" stroke="#38bdf8" stroke-width="2.5" fill="none"/>

  <!-- Cinematic Letterbox bars -->
  <rect width="800" height="50" fill="#000000"/>
  <rect y="450" width="800" height="50" fill="#000000"/>

  <!-- Play Reel Button overlay -->
  <circle cx="400" cy="250" r="45" fill="rgba(7,9,10,0.7)" stroke="#2ee56b" stroke-width="2"/>
  <polygon points="392,235 418,250 392,265" fill="#2ee56b"/>
  <text x="360" y="325" font-family="sans-serif" font-size="12" letter-spacing="2" fill="#e5e7eb">4K CINEMATIC</text>
</svg>`;

// 6. Project 04: Brand Identity
const projBrand = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <rect width="800" height="500" fill="#06090c"/>
  <!-- Studio Podium -->
  <ellipse cx="400" cy="380" rx="260" ry="70" fill="#12181d" stroke="#2ee56b" stroke-width="1.5" stroke-opacity="0.3"/>
  <ellipse cx="400" cy="380" rx="180" ry="45" fill="#19222a"/>

  <!-- 3D Glowing VW Monogram Logo Symbol -->
  <g transform="translate(260, 100)" filter="drop-shadow(0 10px 25px rgba(46,229,107,0.4))">
    <!-- Left 'V' stroke -->
    <path d="M 40 40 L 100 200 L 140 200 L 80 40 Z" fill="#2ee56b"/>
    <!-- Center 'W' strokes interlock -->
    <path d="M 120 40 L 170 170 L 210 60 L 240 60 L 190 200 L 150 200 Z" fill="#ffffff"/>
    <path d="M 220 40 L 260 160 L 290 60 L 320 60 L 270 200 L 240 200 Z" fill="#2ee56b"/>
  </g>

  <!-- Typography underneath -->
  <text x="400" y="340" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="900" letter-spacing="6" fill="#ffffff">VIHANGA WAGEESHA</text>
  <text x="400" y="365" text-anchor="middle" font-family="sans-serif" font-size="12" letter-spacing="3" fill="#2ee56b">BRAND IDENTITY &amp; VISUAL DESIGN</text>
</svg>`;

// 7. Project 05: AI Creative Project
const projAi = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <rect width="800" height="500" fill="#080c10"/>
  <!-- Neural Network Constellation -->
  <g stroke="#2ee56b" stroke-opacity="0.25" stroke-width="1.5">
    <line x1="200" y1="150" x2="350" y2="100"/>
    <line x1="200" y1="150" x2="300" y2="250"/>
    <line x1="350" y1="100" x2="480" y2="180"/>
    <line x1="300" y1="250" x2="480" y2="180"/>
    <line x1="300" y1="250" x2="420" y2="350"/>
    <line x1="480" y1="180" x2="600" y2="150"/>
    <line x1="480" y1="180" x2="580" y2="300"/>
    <line x1="420" y1="350" x2="580" y2="300"/>
  </g>

  <!-- Glowing Neural Nodes -->
  <g fill="#2ee56b">
    <circle cx="200" cy="150" r="10"/>
    <circle cx="350" cy="100" r="14"/>
    <circle cx="300" cy="250" r="12"/>
    <circle cx="480" cy="180" r="22" fill="#ffffff" stroke="#2ee56b" stroke-width="4"/>
    <circle cx="420" cy="350" r="12"/>
    <circle cx="600" cy="150" r="10"/>
    <circle cx="580" cy="300" r="16"/>
  </g>

  <text x="480" y="186" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#07090a">AI</text>
  <text x="400" y="440" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" letter-spacing="4" fill="#ffffff">GENERATIVE WORKFLOWS &amp; AGENTS</text>
</svg>`;

// 8. Project 06: Photography
const projPhoto = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="photoSunset" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="35%" stop-color="#3b1d3d"/>
      <stop offset="65%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#photoSunset)"/>
  
  <!-- Glowing golden sun -->
  <circle cx="400" cy="320" r="80" fill="#fef08a" opacity="0.9"/>
  <!-- Mountain silhouettes -->
  <polygon points="0,320 180,240 320,300 480,210 650,310 800,250 800,500 0,500" fill="#1e1322"/>
  <polygon points="0,380 150,330 350,370 550,310 750,360 800,340 800,500 0,500" fill="#09050b"/>

  <!-- Camera Viewfinder Overlay -->
  <g stroke="#ffffff" stroke-width="2" opacity="0.6">
    <!-- Corners -->
    <path d="M 60 90 L 60 60 L 90 60"/>
    <path d="M 740 90 L 740 60 L 710 60"/>
    <path d="M 60 410 L 60 440 L 90 440"/>
    <path d="M 740 410 L 740 440 L 710 440"/>
    <!-- Focus Center Box -->
    <rect x="360" y="210" width="80" height="80" fill="none" stroke="#2ee56b" stroke-width="2"/>
    <line x1="400" y1="200" x2="400" y2="210" stroke="#2ee56b" stroke-width="2"/>
    <line x1="400" y1="290" x2="400" y2="300" stroke="#2ee56b" stroke-width="2"/>
    <line x1="350" y1="250" x2="360" y2="250" stroke="#2ee56b" stroke-width="2"/>
    <line x1="440" y1="250" x2="450" y2="250" stroke="#2ee56b" stroke-width="2"/>
  </g>
  <text x="80" y="430" font-family="monospace" font-size="14" fill="#2ee56b">RAW 24FPS ISO 100 f/1.8</text>
</svg>`;

// 9. Contact Banner (Cliff Silhouette matching Image 2)
const contactSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 450" width="1200" height="450">
  <defs>
    <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#04070a"/>
      <stop offset="60%" stop-color="#091319"/>
      <stop offset="100%" stop-color="#0f261c"/>
    </linearGradient>
    <radialGradient id="aurora" cx="25%" cy="60%" r="50%">
      <stop offset="0%" stop-color="#2ee56b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#07090a" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="450" fill="url(#nightSky)"/>
  <circle cx="300" cy="260" r="300" fill="url(#aurora)"/>

  <!-- Distant mountain ridges -->
  <polygon points="0,280 200,240 450,290 700,220 950,270 1200,230 1200,450 0,450" fill="#081016" opacity="0.6"/>
  <polygon points="0,320 180,280 380,310 650,260 900,300 1200,270 1200,450 0,450" fill="#050a0e"/>

  <!-- Left: Big Mountain Cliff with Silhouette of Person Looking Out -->
  <path d="M 0 450 L 0 260 C 80 270, 180 290, 240 310 C 280 325, 310 350, 360 450 Z" fill="#020406"/>
  
  <!-- Silhouette of Vihanga sitting on rock ledge -->
  <g transform="translate(230, 240)">
    <circle cx="35" cy="20" r="14" fill="#020406"/>
    <path d="M 20 70 C 20 40, 30 32, 45 32 C 55 32, 65 42, 60 70 Z" fill="#020406"/>
    <path d="M 35 70 L 25 100 L 5 95" stroke="#020406" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M 50 70 L 65 100 L 80 100" stroke="#020406" stroke-width="12" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Green Handwritten Script on left -->
  <g transform="translate(60, 130) rotate(-7)">
    <text x="0" y="0" font-family="'Caveat', cursive, sans-serif" font-size="52" font-weight="bold" fill="#2ee56b" filter="drop-shadow(0 0 10px rgba(46,229,107,0.7))">Let's</text>
    <text x="10" y="55" font-family="'Caveat', cursive, sans-serif" font-size="52" font-weight="bold" fill="#2ee56b" filter="drop-shadow(0 0 10px rgba(46,229,107,0.7))">Create</text>
    <text x="5" y="115" font-family="'Caveat', cursive, sans-serif" font-size="64" font-weight="bold" fill="#2ee56b" filter="drop-shadow(0 0 12px rgba(46,229,107,0.8))">Together</text>
  </g>
</svg>`;

// Write files
fs.writeFileSync(path.join(imgDir, 'hero-vihanga.svg'), heroSvg);
fs.writeFileSync(path.join(imgDir, 'about-vihanga.svg'), aboutSvg);
fs.writeFileSync(path.join(imgDir, 'project-portfolio.svg'), projPortfolio);
fs.writeFileSync(path.join(imgDir, 'project-mobile-app.svg'), projMobile);
fs.writeFileSync(path.join(imgDir, 'project-video.svg'), projVideo);
fs.writeFileSync(path.join(imgDir, 'project-brand.svg'), projBrand);
fs.writeFileSync(path.join(imgDir, 'project-ai.svg'), projAi);
fs.writeFileSync(path.join(imgDir, 'project-photo.svg'), projPhoto);
fs.writeFileSync(path.join(imgDir, 'contact-banner.svg'), contactSvg);

console.log('Successfully generated all placeholder SVG visual assets into public/images/');
