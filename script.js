/**
 * ============================================================================
 * VIHANGA WAGEESHA — PERSONAL PORTFOLIO SCRIPT & CENTRALIZED DATA
 * ============================================================================
 * You can customize ALL content, links, images, and text in the PORTFOLIO_DATA
 * object below. Any changes made here are instantly reflected across the site.
 * ============================================================================
 */

export const PORTFOLIO_DATA = {
  // Brand & Identity
  brand: {
    name: "VIHANGA WAGEESHA",
    shortName: "Vihanga Wageesha",
    initials: "VW",
    title: "CREATIVE DEVELOPER / DIGITAL CREATOR",
    tagline: "Building creative solutions for a better tomorrow.",
    heroGreeting: "HELLO, I'M",
    heroDescription: "I build modern web experiences, create stunning visuals and bring ideas to life through code, design and creativity. Turning imagination into digital reality.",
    aboutHeadline: "Turning Ideas into Digital Experiences",
    aboutDescription: "I'm a creative developer and digital creator with a passion for building modern websites, designing clean interfaces and creating visual content that tells a story. I enjoy exploring new technologies, learning new skills and turning creative ideas into real projects.",
    location: "Sri Lanka",
    availability: "Available for freelance projects & creative collaborations",
    quote: "Turning imagination into digital reality."
  },

  // Image Paths (Locked to your uploaded photos, relative for GitHub Pages)
  images: {
    // 1. Hero Photo (Locked to your original 5.jpeg portrait)
    hero: "./images/5.jpeg",
    heroFallbacks: [
      "./images/5.jpeg",
      "images/5.jpeg",
      "./images/hero-portrait.jpg",
      "./images/1.jpeg",
      "./public/images/5.jpeg"
    ],
    
    // 2. About Photo (Locked to 3.jpeg - 2+ Years Experience photo)
    about: "./images/3.jpeg",
    aboutFallbacks: [
      "./images/3.jpeg",
      "images/3.jpeg",
      "./images/about-portrait.jpg",
      "./public/images/3.jpeg",
      "./images/about-vihanga.svg"
    ],
    
    // 3. Contact Banner Background (Silhouette on cliff / cinematic night view)
    contactBanner: "./images/contact-banner.svg"
  },

  // Official Contact & Social Media Links
  contactLinks: {
    whatsapp: "https://wa.me/qr/3DULP4JFQVQPJ1",
    linkedin: "https://www.linkedin.com/in/vihanga-wageesha-bandara-a3a7173a7/",
    facebook: "https://www.facebook.com/share/1R18skZH4t/",
    // Editable email placeholder
    email: "vihangawageesha2005@gmail.com",
    github: "https://github.com/",
    instagram: "https://instagram.com/"
  },

  // Animated Key Statistics
  statistics: [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Passion & Dedication" }
  ],

  // Skills for Hero Floating Card
  heroSkills: [
    { name: "Web Development", icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
    { name: "UI/UX Design", icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>` },
    { name: "Graphic Design", icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>` },
    { name: "Photography & Videography", icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>` },
    { name: "Video Editing", icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>` },
    { name: "AI Tools", icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>` },
    { name: "Digital Marketing", icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>` },
    { name: "Creative Problem Solving", icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>` }
  ],

  // 6 Primary About Section Skills
  skillsMini: [
    {
      id: "web-dev",
      name: "Web Development",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>`
    },
    {
      id: "graphic-design",
      name: "Graphic Design",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>`
    },
    {
      id: "photography",
      name: "Photography",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`
    },
    {
      id: "video-editing",
      name: "Video Editing",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>`
    },
    {
      id: "ai-tools",
      name: "AI Tools",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>`
    }
  ],

  // Featured Selected Works
  projects: [
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      category: "Web Development",
      categorySlug: "web-dev",
      description: "Modern responsive portfolio website built with HTML, CSS, JavaScript and AI-assisted development.",
      fullDescription: "A custom personal branding platform engineered with high performance vanilla JavaScript, CSS custom properties, and glassmorphic micro-interactions. Features dynamic theme toggling, interactive case study previews, and smooth layout responsiveness across all screen breakpoints.",
      image: "./images/project-portfolio.svg",
      tags: ["HTML5", "CSS3", "JavaScript", "Vite", "Responsive"],
      linkText: "View Project"
    },
    {
      id: "mobile-app-ui",
      title: "Mobile App UI",
      category: "UI/UX Design",
      categorySlug: "ui-ux",
      description: "Clean and modern mobile app interface design for better user experience.",
      fullDescription: "A fintech and lifestyle companion application interface focusing on high-contrast neon data visualizations, intuitive swipe navigation, and biometric checkout flows. Designed using modern design tokens and human-centered design principles.",
      image: "./images/project-mobile-app.svg",
      tags: ["Figma", "Design Systems", "Prototyping", "iOS / Android"],
      linkText: "View Project"
    },
    {
      id: "cinematic-video",
      title: "Cinematic Video Edit",
      category: "Video Editing",
      categorySlug: "video",
      description: "Cinematic visual storytelling using modern editing, color grading and motion graphics.",
      fullDescription: "Short film and commercial showreel featuring custom cyberpunk LUT color grading, multi-track atmospheric sound design, speed ramping, and seamless motion graphics transitions engineered for digital platforms.",
      image: "./images/project-video.svg",
      tags: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Sound Design"],
      linkText: "View Project"
    },
    {
      id: "brand-identity",
      title: "Brand Identity",
      category: "Graphic Design",
      categorySlug: "design",
      description: "Logo, social media posts and branding design for a modern brand.",
      fullDescription: "Comprehensive brand identity system encompassing custom typographic monograms, responsive brand guidelines, 3D asset renders, and social media campaign collateral styled with futuristic neon green accents.",
      image: "./images/project-brand.svg",
      tags: ["Illustrator", "Photoshop", "Typography", "Brand Strategy"],
      linkText: "View Project"
    },
    {
      id: "ai-creative-project",
      title: "AI Creative Project",
      category: "AI / Creative Technology",
      categorySlug: "ai",
      description: "Creative digital content developed using modern AI tools and workflows.",
      fullDescription: "Exploration of generative AI pipelines integrating modern LLMs, Midjourney image generation, agentic coding workflows, and automated asset preparation for modern digital experiences.",
      image: "./images/project-ai.svg",
      tags: ["Generative AI", "Prompt Crafting", "Workflow Automation"],
      linkText: "View Project"
    },
    {
      id: "photography-showcase",
      title: "Photography Showcase",
      category: "Photography",
      categorySlug: "photo",
      description: "Collection of landscape, portrait and cinematic street photography.",
      fullDescription: "A photographic series exploring natural light, raw emotion, and high-contrast night aesthetics across Sri Lanka and urban environments. Shot on professional mirrorless gear and graded in Lightroom.",
      image: "./images/project-photo.svg",
      tags: ["Portrait", "Landscape", "Color Grading", "Lightroom"],
      linkText: "View Project"
    }
  ],

  // Professional Experience (Editable)
  experience: [
    {
      role: "Creative Developer",
      company: "Freelance / Personal Projects",
      years: "2022 – Present",
      description: "Engineering tailored digital experiences, responsive landing pages, and interactive web tools for international clients."
    },
    {
      role: "Web Developer",
      company: "Personal Projects & Open Source",
      years: "2021 – Present",
      description: "Building modern front-end applications, design prototypes, and experimenting with emerging web standards."
    },
    {
      role: "Digital Creator & Video Editor",
      company: "YouTube / Social Media",
      years: "2020 – Present",
      description: "Producing cinematic reels, high-engagement visual assets, graphic branding, and multi-platform media content."
    }
  ],

  // Full Services Offered ("WHAT I DO")
  services: [
    {
      num: "01",
      title: "Website Development",
      description: "High performance, fully responsive web applications built with clean semantic code, modern animations, and SEO excellence.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
    },
    {
      num: "02",
      title: "UI/UX Design",
      description: "User-focused interface design, wireframing, interactive prototyping, and modern design systems crafted in Figma.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/></svg>`
    },
    {
      num: "03",
      title: "Graphic Design",
      description: "Bold visual identities, logotypes, brand stationery, promotional posters, and social media creative assets.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>`
    },
    {
      num: "04",
      title: "Photography",
      description: "Artistic portraiture, landscape photography, product showcases, and color-graded editorial visual stories.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`
    },
    {
      num: "05",
      title: "Video Editing",
      description: "Cinematic commercial reels, YouTube storytelling, color grading, sound synchronization, and motion graphics.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>`
    },
    {
      num: "06",
      title: "AI Creative Solutions",
      description: "Modern generative AI workflows, intelligent prompt design, digital asset generation, and AI-assisted tooling.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>`
    },
    {
      num: "07",
      title: "Digital Content Creation",
      description: "Multi-format creative production, cross-platform social assets, digital strategy, and engaging creative media.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`
    }
  ],

  // 5-Step Creative Workflow Process
  process: [
    { num: "01", title: "DISCOVER", description: "Deep diving into the core vision, requirements, target audience, and brand objectives." },
    { num: "02", title: "PLAN", description: "Mapping out user flows, information architecture, wireframes, and aesthetic moodboards." },
    { num: "03", title: "CREATE", description: "Designing high-fidelity UI interfaces and writing clean, performant, responsive code." },
    { num: "04", title: "REFINE", description: "Testing responsiveness, perfecting typography, fine-tuning animations, and optimizing speed." },
    { num: "05", title: "LAUNCH", description: "Delivering the finalized product, deployment, and providing ongoing support." }
  ]
};

/**
 * ============================================================================
 * INTERACTIVE CLIENT APPLICATION LOGIC
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  renderDynamicContent();
  initInteractiveModals();
  initCounters();
  initProjectFiltering();
  initContactForm();
  initCustomCursor();
  initSmoothScroll();
});

/**
 * 1. Dark / Light Theme Switching
 */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("vw-portfolio-theme") || "dark";
  
  applyTheme(storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      showToast(nextTheme === "light" ? "Switched to Light Theme" : "Switched to Cinematic Dark Theme");
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("vw-portfolio-theme", theme);
  
  const iconWrap = document.getElementById("theme-icon-wrap");
  if (iconWrap) {
    if (theme === "light") {
      // Moon icon (to switch to dark)
      iconWrap.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    } else {
      // Sun icon (to switch to light)
      iconWrap.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    }
  }
}

/**
 * 2. Sticky Header & Mobile Drawer
 */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
    updateActiveNav();
  }, { passive: true });

  // Mobile drawer toggle
  if (mobileBtn && drawer) {
    mobileBtn.addEventListener("click", () => {
      const isOpen = drawer.classList.contains("open");
      if (isOpen) {
        drawer.classList.remove("open");
        mobileBtn.classList.remove("active");
        mobileBtn.setAttribute("aria-expanded", "false");
      } else {
        drawer.classList.add("open");
        mobileBtn.classList.add("active");
        mobileBtn.setAttribute("aria-expanded", "true");
      }
    });

    // Close on navigation link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        drawer.classList.remove("open");
        mobileBtn.classList.remove("active");
        mobileBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active link tracking with scroll position
  function updateActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY + 140;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll(`.nav-link[href="#${sectionId}"], .mobile-nav-link[href="#${sectionId}"]`).forEach(a => {
          a.classList.add("active");
        });
      } else {
        document.querySelectorAll(`.nav-link[href="#${sectionId}"], .mobile-nav-link[href="#${sectionId}"]`).forEach(a => {
          a.classList.remove("active");
        });
      }
    });
  }
}

/**
 * 3. Render Dynamic Content from PORTFOLIO_DATA
 */
function renderDynamicContent() {
  // A. Hero Skills List
  const heroSkillsList = document.getElementById("hero-skills-list");
  if (heroSkillsList) {
    heroSkillsList.innerHTML = PORTFOLIO_DATA.heroSkills.map(skill => `
      <li class="hero-skill-item">
        <div class="hero-skill-icon">${skill.icon}</div>
        <span>${skill.name}</span>
      </li>
    `).join("");
  }

  // B. About Mini Skills
  const skillsMiniGrid = document.getElementById("about-skills-grid");
  if (skillsMiniGrid) {
    skillsMiniGrid.innerHTML = PORTFOLIO_DATA.skillsMini.map(skill => `
      <div class="skill-mini-card" data-skill-id="${skill.id}">
        <div class="skill-mini-icon">${skill.icon}</div>
        <span class="skill-mini-name">${skill.name}</span>
      </div>
    `).join("");
  }

  // C. Projects Grid
  renderProjects("all");

  // D. Experience Timeline
  const experienceList = document.getElementById("experience-timeline-list");
  if (experienceList) {
    experienceList.innerHTML = PORTFOLIO_DATA.experience.map(item => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <h4 class="timeline-title">${item.role}</h4>
        <div class="timeline-meta">
          <span>${item.company}</span>
          <span class="timeline-year">${item.years}</span>
        </div>
        <p class="timeline-desc">${item.description}</p>
      </div>
    `).join("");
  }

  // F. Services List in 3-column layout
  const servicesTriList = document.getElementById("services-tri-list");
  if (servicesTriList) {
    servicesTriList.innerHTML = PORTFOLIO_DATA.services.slice(0, 6).map(s => `
      <div class="service-tri-item">
        <span class="service-tri-icon">${s.icon}</span>
        <span class="service-tri-title">${s.title}</span>
      </div>
    `).join("");
  }

  // G. Full Services Cards
  const fullServicesGrid = document.getElementById("full-services-grid");
  if (fullServicesGrid) {
    fullServicesGrid.innerHTML = PORTFOLIO_DATA.services.map(s => `
      <div class="service-card">
        <span class="service-number">${s.num}</span>
        <div class="service-icon-box">${s.icon}</div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-description">${s.description}</p>
      </div>
    `).join("");
  }

  // H. Creative Process Steps
  const processTimeline = document.getElementById("process-timeline");
  if (processTimeline) {
    processTimeline.innerHTML = PORTFOLIO_DATA.process.map(step => `
      <div class="process-card">
        <span class="process-step-num">${step.num}</span>
        <h4 class="process-step-title">${step.title}</h4>
        <p class="process-step-desc">${step.description}</p>
      </div>
    `).join("");
  }

  // I. Set Images with fallback handling
  setImageWithFallbacks("hero-portrait-img", PORTFOLIO_DATA.images.heroFallbacks || [PORTFOLIO_DATA.images.hero]);
  setImageWithFallbacks("about-portrait-img", PORTFOLIO_DATA.images.aboutFallbacks || [PORTFOLIO_DATA.images.about]);
  setImageSafe("contact-banner-img", PORTFOLIO_DATA.images.contactBanner);

  // Email copy setup
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      copyToClipboard(PORTFOLIO_DATA.contactLinks.email);
    });
  }
}

function setImageWithFallbacks(elementId, sources) {
  const el = document.getElementById(elementId);
  if (!el || !sources || sources.length === 0) return;

  let currentIndex = 0;
  function tryNext() {
    if (currentIndex >= sources.length) return;
    const testSrc = sources[currentIndex];
    const img = new Image();
    img.onload = () => {
      el.src = testSrc;
    };
    img.onerror = () => {
      currentIndex++;
      tryNext();
    };
    img.src = testSrc;
  }
  tryNext();
}

function setImageSafe(elementId, src) {
  const el = document.getElementById(elementId);
  if (el) {
    el.src = src;
    el.onerror = () => {
      console.warn(`Image at ${src} not found, displaying visual fallback.`);
    };
  }
}

/**
 * 4. Project Filtering and Rendering
 */
function renderProjects(filterSlug) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered = filterSlug === "all" 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.categorySlug === filterSlug);

  grid.innerHTML = filtered.map(project => `
    <article class="project-card" data-project-id="${project.id}">
      <div class="project-image-wrap">
        <img src="${project.image}" alt="${project.title}" class="project-thumb" loading="lazy" />
      </div>
      <div class="project-card-body">
        <span class="project-category-badge">${project.category}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-card-footer">
          <div class="project-tech-tags">
            ${project.tags.map(t => `<span class="project-tech-tag">${t}</span>`).join("")}
          </div>
          <button type="button" class="project-action-btn open-modal-btn" data-project-id="${project.id}" aria-label="View case study for ${project.title}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  // Re-attach modal listeners
  attachProjectModalListeners();
}

function initProjectFiltering() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter") || "all";
      renderProjects(filter);
    });
  });
}

/**
 * 5. Interactive Project Detail Modal
 */
function initInteractiveModals() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal) return;

  // Close on button click
  closeBtn?.addEventListener("click", closeModal);

  // Close on outside overlay click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function attachProjectModalListeners() {
  const openBtns = document.querySelectorAll(".open-modal-btn, .project-card");
  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Avoid firing twice if clicking inside the button
      const card = btn.closest(".project-card");
      const projectId = btn.getAttribute("data-project-id") || card?.getAttribute("data-project-id");
      if (projectId) {
        openProjectModal(projectId);
      }
    });
  });
}

function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalMedia = document.getElementById("modal-media-wrap");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalTags = document.getElementById("modal-tags");

  if (modalMedia) modalMedia.innerHTML = `<img src="${project.image}" alt="${project.title}" />`;
  if (modalCategory) modalCategory.textContent = project.category;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDesc) modalDesc.textContent = project.fullDescription;
  if (modalTags) {
    modalTags.innerHTML = project.tags.map(t => `<span class="project-tech-tag" style="padding: 4px 10px; font-size: 0.8rem;">${t}</span>`).join("");
  }

  modal?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal?.classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * 6. Animated Number Counters
 */
function initCounters() {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute("data-target") || "0", 10);
          const suffix = stat.getAttribute("data-suffix") || "";
          let count = 0;
          const duration = 1600;
          const stepTime = Math.max(20, Math.floor(duration / target));

          const timer = setInterval(() => {
            count += 1;
            stat.textContent = count + suffix;
            if (count >= target) {
              clearInterval(timer);
              stat.textContent = target + suffix;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById("about-stats-row");
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/**
 * 7. Copy to Clipboard Utility
 */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Email copied: ${text}`);
  }).catch(() => {
    showToast(`Contact email: ${text}`);
  });
}

/**
 * 8. Toast Notifications
 */
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-pill";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-out");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

/**
 * 9. Contact Form Handling
 */
function initContactForm() {
  const form = document.getElementById("quick-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const msgInput = document.getElementById("form-message");

    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const message = msgInput?.value.trim() || "";

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.");
      return;
    }

    // Direct mailto fallback link for user's convenience
    const mailtoLink = `mailto:${PORTFOLIO_DATA.contactLinks.email}?subject=${encodeURIComponent("Portfolio Message from " + name)}&body=${encodeURIComponent("Sender Email: " + email + "\n\nMessage:\n" + message)}`;
    window.location.href = mailtoLink;

    showToast("Opening your email client to send message... Thank you!");
    form.reset();
  });
}

/**
 * 10. Desktop Custom Cursor
 */
function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  const cursorDot = document.getElementById("custom-cursor-dot");

  if (!cursor || !cursorDot) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = "1";
    cursorDot.style.opacity = "1";
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  }, { passive: true });

  // Smooth follow loop
  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover scale trigger on interactive elements
  const interactives = "a, button, input, textarea, .project-card, .skill-mini-card, .service-card, .theme-toggle-btn";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactives)) {
      cursor.classList.add("hovering");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactives)) {
      cursor.classList.remove("hovering");
    }
  });
}

/**
 * 11. Smooth Scrolling for Navigation
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}
