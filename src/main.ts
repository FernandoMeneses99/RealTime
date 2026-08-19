import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<!-- ===== HEADER ===== -->
<header class="header" role="banner">
  <div class="container header-inner">
    <a href="#" class="logo">
      <img src="/img/logo.png" alt="RT - Soluciones de Ciberseguridad y Ciberresiliencia en Colombia" width="140" height="40" />
    </a>
    <nav class="nav-links" aria-label="Navegación principal">
      <a href="#soluciones">Soluciones</a>
      <a href="#servicios">Servicios</a>
      <a href="#experiencia">Nosotros</a>
      <a href="#novedades">Novedades</a>
      <a href="#contacto" class="nav-cta">Contáctenos</a>
    </nav>
    <button class="menu-toggle" aria-label="Abrir menú de navegación">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<!-- ===== HERO ===== -->
<section class="hero" id="inicio" aria-label="Bienvenida a RT - Ciberseguridad">
  <div class="hero-slides">
    <div class="hero-slide active">
      <img src="/img/hero-1.jpg" alt="Infraestructura de ciberseguridad protegida por RT" loading="eager" width="1920" height="1080" />
    </div>
    <div class="hero-slide">
      <img src="/img/hero-2.jpg" alt="Equipo de expertos en ciberresiliencia de RT" loading="eager" width="1920" height="1080" />
    </div>
  </div>

  <div class="container hero-content">
    <div class="hero-badge">
      <span class="hero-badge-dot"></span>
      +18 años de experiencia en Ciberseguridad
    </div>
    <h1>
      Ciberseguridad y<br/>
      <span class="highlight">Ciberresiliencia</span>
    </h1>
    <p class="hero-text">
      Soluciones innovadoras en seguridad digital con tecnología avanzada, inteligencia cibernética y un equipo altamente especializado para proteger su organización.
    </p>
    <div class="hero-actions">
      <a href="#soluciones" class="btn-primary">
        Explorar Soluciones
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="#contacto" class="btn-outline">
        Hablar con un experto
      </a>
    </div>
    <div class="hero-stats">
      <div>
        <div class="hero-stat-number">18<span class="accent">+</span></div>
        <div class="hero-stat-label">Años de trayectoria</div>
      </div>
      <div>
        <div class="hero-stat-number">200<span class="accent">+</span></div>
        <div class="hero-stat-label">Clientes atendidos</div>
      </div>
      <div>
        <div class="hero-stat-number">50<span class="accent">+</span></div>
        <div class="hero-stat-label">Profesionales expertos</div>
      </div>
    </div>
  </div>

  <div class="hero-indicators">
    <button class="hero-indicator active" data-slide="0" aria-label="Slide 1"></button>
    <button class="hero-indicator" data-slide="1" aria-label="Slide 2"></button>
  </div>
</section>

<!-- ===== VALUE PROPOSITION ===== -->
<main>
<section class="value-prop" id="soluciones">
  <div class="container">
    <div class="value-prop-header">
      <div class="section-label">Nuestra Oferta de Valor</div>
      <h2 class="section-title">Un completo conjunto de soluciones TIC</h2>
      <p class="section-subtitle">
        Productos y servicios que conforman nuestra oferta de valor, diseñados para impulsar la transformación digital de su organización.
      </p>
    </div>

    <div class="value-grid">
      <div class="value-card">
        <div class="value-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h3>Soluciones</h3>
        <p>Integración de Soluciones de Tecnologías de Informaciones y Comunicaciones complejas, que incorporan los más actuales desarrollos.</p>
      </div>

      <div class="value-card">
        <div class="value-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3>Servicios</h3>
        <p>Amplio conjunto de Servicios Gestionados, que apoyan o sustentan la operación de los recursos TIC de nuestros clientes.</p>
      </div>

      <div class="value-card">
        <div class="value-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <h3>SOC</h3>
        <p>Servicios de SOC de altos estándares y operación integral para la seguridad continua de su infraestructura tecnológica.</p>
      </div>

      <div class="value-card">
        <div class="value-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3>Consultoría</h3>
        <p>Servicios de Consultoría TIC en un amplio espectro de aplicaciones que apoyan las operaciones de nuestros clientes.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== ABOUT / NUESTRA ORGANIZACIÓN ===== -->
<section class="about" id="experiencia">
  <div class="container">

    <!-- Misión + Propósito -->
    <div class="about-header">
      <div class="about-header-text">
        <div class="section-label">Nuestra Organización</div>
        <h2 class="section-title">Ciberseguridad y Ciberresiliencia</h2>
      </div>
    </div>

    <div class="about-mission-grid">
      <div class="about-mission-card">
        <div class="about-mission-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <h3>Nuestra Misión</h3>
        <p>Ofrecemos soluciones innovadoras en Ciberseguridad y Ciberresiliencia. A través de tecnología avanzada, inteligencia cibernética y un equipo altamente especializado, garantizamos la prevención, detección y respuesta efectiva ante amenazas y aseguramos la continuidad operativa y la confianza digital de nuestros clientes.</p>
      </div>

      <div class="about-mission-card">
        <div class="about-mission-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <h3>Nuestro Propósito</h3>
        <p>Proporcionamos soluciones estratégicas que fortalezcan las capacidades digitales de las organizaciones. Nos comprometemos a crear un entorno cibernético más seguro, impulsando la innovación, la formación y la colaboración, para mitigar riesgos, fortalecer las capacidades de anticipación frente a amenazas y garantizar la resiliencia de nuestros clientes. Lideramos la transformación de la Ciberseguridad y la Ciberresiliencia en Colombia.</p>
      </div>
    </div>

    <!-- Valores -->
    <div class="about-values">
      <h3 class="about-values-title">Nuestros Valores</h3>
      <div class="about-values-grid">
        <div class="about-value-item">
          <div class="about-value-dot"></div>
          <div>
            <h4>Confianza y Transparencia</h4>
            <p>Construimos relaciones sólidas basadas en la honestidad y la claridad en cada interacción.</p>
          </div>
        </div>
        <div class="about-value-item">
          <div class="about-value-dot"></div>
          <div>
            <h4>Resiliencia y Adaptabilidad</h4>
            <p>Nos adaptamos con agilidad a los cambios del entorno tecnológico y de seguridad.</p>
          </div>
        </div>
        <div class="about-value-item">
          <div class="about-value-dot"></div>
          <div>
            <h4>Innovación Continua</h4>
            <p>Buscamos constantemente nuevas y mejores formas de proteger a nuestros clientes.</p>
          </div>
        </div>
        <div class="about-value-item">
          <div class="about-value-dot"></div>
          <div>
            <h4>Excelencia y Profesionalismo</h4>
            <p>Entregamos servicios de la más alta calidad con estándares internacionales.</p>
          </div>
        </div>
        <div class="about-value-item">
          <div class="about-value-dot"></div>
          <div>
            <h4>Responsabilidad y Servicio</h4>
            <p>Asumimos el compromiso de proteger la operación y los datos de nuestros clientes.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Socio de Negocios -->
    <div class="about-partner">
      <div class="about-partner-content">
        <h3>Su Socio de Negocios en Ciberseguridad</h3>
        <p>Una organización Ciber-Resiliente no solo resiste ataques, sino que se adapta, responde y evoluciona. En un mundo digital en constante cambio, la verdadera fortaleza está en anticiparse y recuperarse más rápido que las amenazas.</p>
      </div>
    </div>

    <!-- Stats highlights -->
    <div class="about-highlights">
      <div class="about-highlight">
        <div class="about-highlight-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h4>Foco en</h4>
        <span>Ciberseguridad</span>
      </div>
      <div class="about-highlight">
        <div class="about-highlight-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h4>Canal Reconocido</h4>
        <span>por Fabricantes</span>
      </div>
      <div class="about-highlight">
        <div class="about-highlight-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <h4>Certificaciones</h4>
        <span>Internacionales</span>
      </div>
      <div class="about-highlight">
        <div class="about-highlight-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <h4>18 Años de</h4>
        <span>Experiencia</span>
      </div>
    </div>

  </div>
</section>

<!-- ===== CLIENT LOGOS CAROUSEL ===== -->
<section class="logos-section">
  <div class="container">
    <div class="logos-section-header">
      <div class="section-label">Tecnologías que Dominamos</div>
      <h2 class="section-title">Nuestros Socios Tecnológicos</h2>
    </div>
  </div>
  <div class="logos-track-wrapper">
    <div class="logos-track">
      <div class="logo-item"><img src="/img/FORTINET_LOGO_01.png" alt="Fortinet" /></div>
      <div class="logo-item"><img src="/img/VEEAM_LOGO_01.png" alt="Veeam" /></div>
      <div class="logo-item"><img src="/img/SOLARWINDS_LOGO_01-1.png" alt="SolarWinds" /></div>
      <div class="logo-item"><img src="/img/RIVERBED_LOGO_01-1-2048x444.avif" alt="Riverbed" /></div>
      <div class="logo-item"><img src="/img/VICARIUS_LOGO_01.png" alt="Vicarius" /></div>
      <div class="logo-item"><img src="/img/EXAGRID_LOGO_01-1.png" alt="ExaGrid" /></div>
      <!-- Duplicate set for infinite scroll -->
      <div class="logo-item"><img src="/img/FORTINET_LOGO_01.png" alt="Fortinet" /></div>
      <div class="logo-item"><img src="/img/VEEAM_LOGO_01.png" alt="Veeam" /></div>
      <div class="logo-item"><img src="/img/SOLARWINDS_LOGO_01-1.png" alt="SolarWinds" /></div>
      <div class="logo-item"><img src="/img/RIVERBED_LOGO_01-1-2048x444.avif" alt="Riverbed" /></div>
      <div class="logo-item"><img src="/img/VICARIUS_LOGO_01.png" alt="Vicarius" /></div>
      <div class="logo-item"><img src="/img/EXAGRID_LOGO_01-1.png" alt="ExaGrid" /></div>
    </div>
  </div>
</section>

<!-- ===== LATEST NEWS ===== -->
<section class="news-section" id="novedades" aria-label="Últimas novedades de ciberseguridad">
  <div class="container">
    <div class="news-header">
      <div>
        <div class="section-label">Últimas Novedades</div>
        <h2 class="section-title">Noticias y Actualidad</h2>
        <p class="section-subtitle">Manténgase informado sobre las últimas tendencias y novedades del sector tecnológico.</p>
      </div>
      <div class="news-nav">
        <button class="news-nav-btn" id="news-prev" aria-label="Noticia anterior">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="news-nav-btn" id="news-next" aria-label="Siguiente noticia">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>

    <div class="news-carousel-wrapper">
      <div class="news-carousel" id="news-carousel">
        <article class="news-card">
          <div class="news-card-image">
            <img src="/img/transformacion-digital-low-code-400x200.jpeg" alt="Nuevas amenazas cibernéticas y estrategias de protección en 2026" loading="lazy" width="380" height="220" />
            <span class="news-card-tag">Seguridad</span>
          </div>
          <div class="news-card-body">
            <h3 class="news-card-title">Innovación y Transformación Digital</h3>
            <p class="news-card-excerpt">La Ciber-Resiliencia es clave para la continuidad y el éxito de cualquier organización en un entorno digital lleno de amenazas.

No se limita a la prevención de ataques, sino de asegurar que la organización pueda anticiparlos, detectarlos, responder y recuperarse rápidamente con el menor impacto posible.</p>
          </div>
        </article>

        <article class="news-card">
          <div class="news-card-image">
            <img src="/img/gdaae70b6cd506905c7a4d70abd194cd5c88af3448dc746753115b56bc0b8e0bcb62e42635f7745a0efdeb5a0bf0795687517552340263434b7673822cf09e4af_1280-8512976-edited-400x200.jpg" alt="SOC como servicio para seguridad empresarial" loading="lazy" width="380" height="220" />
            <span class="news-card-tag">SOC</span>
          </div>
          <div class="news-card-body">
            <h3 class="news-card-title">Enfoque Ciber-Resiliente</h3>
            <p class="news-card-excerpt">Un enfoque Ciber-Resiliente protege no solo la infraestructura tecnológica, sino también la reputación, la confianza del cliente y la estabilidad operativa. Las organizaciones que integran la ciber-resiliencia en su estrategia minimizan riesgos, reducen costos por incidentes y mantienen su ventaja competitiva.

En un mundo donde las ciberamenazas son inevitables, la resiliencia marca la diferencia entre sobrevivir y prosperar.</p>
          </div>
        </article>

        <article class="news-card">
          <div class="news-card-image">
            <img src="/img/pexels-photo-665214-665214-scaled-400x200.jpg" alt="Estrategias de migración al cloud para empresas" loading="lazy" width="380" height="220" />
            <span class="news-card-tag">Cloud</span>
          </div>
          <div class="news-card-body">
            <h3 class="news-card-title">Seguridad y Resiliencia</h3>
            <p class="news-card-excerpt">En un mundo cada vez más digitalizado, la ciberseguridad y la ciberresiliencia son pilares fundamentales para la continuidad y estabilidad de las organizaciones.</p>
          </div>
        </article>

        <article class="news-card">
          <div class="news-card-image">
            <img src="/img/g80909799196cc523f0e108213f461e2c06b5e27fc89ac154875200ecdf356c384b308b3e520a8405dcacba44794866f9059bd2e0aa4a1f4ae41700dc82dcd4b4_1280-6657322-400x200.jpg" alt="Infraestructura híbrida on-premise y cloud" loading="lazy" width="380" height="220" />
            <span class="news-card-tag">Infraestructura</span>
          </div>
          <div class="news-card-body">
            <h3 class="news-card-title">Infraestructura híbrida: el equilibrio perfecto entre on-premise y cloud</h3>
            <p class="news-card-excerpt">Somos respetuosos de los datos personales e información que gestionamos en nuestro ecosistema, de las personas, clientes actuales, pasados y potenciales, aliados comerciales y posibles interesados en los servicios y/o productos de la Compañía; cumpliendo con la regulación internacional y de nuestro país, con completo cumplimiento de las normas y mejores prácticas.</p>
          </div>
        </article>

        <article class="news-card">
          <div class="news-card-image">
            <img src="/img/dan-nelson-ah-HeguOe9k-unsplash.jpg" alt="Metodologías de transformación digital empresarial" loading="lazy" width="380" height="220" />
            <span class="news-card-tag">Consultoría</span>
          </div>
          <div class="news-card-body">
            <h3 class="news-card-title">Política de Privacidad y Tratamiento de Datos Personales</h3>
            <p class="news-card-excerpt">Implemente una estrategia de transformación digital efectiva que impulse el crecimiento y la competitividad.</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
</main>

<!-- ===== FOOTER ===== -->
<footer class="footer" id="contacto" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#" class="logo">
          <img src="/img/logo.png" alt="RT - Soluciones de Ciberseguridad y Ciberresiliencia" width="140" height="40" />
        </a>
        <p>Soluciones de Ciberseguridad y Ciberresiliencia con más de 18 años de experiencia protegiendo la operación digital de nuestros clientes.</p>
      </div>

      <div class="footer-col">
        <h4>Soluciones</h4>
        <ul>
          <li><a href="#">Integración TIC</a></li>
          <li><a href="#">Servicios Gestionados</a></li>
          <li><a href="#">SOC</a></li>
          <li><a href="#">Consultoría</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Empresa</h4>
        <ul>
          <li><a href="#experiencia">Sobre Nosotros</a></li>
          <li><a href="#">Nuestro Equipo</a></li>
          <li><a href="#">Carreras</a></li>
          <li><a href="#novedades">Blog</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contacto</h4>
        <ul>
          <li><a href="mailto:info@rt.com.co">info@rt.com.co</a></li>
          <li><a href="#">Bogotá, Colombia</a></li>
          <li><a href="tel:+5717943337">+57 17943337</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} RT. Todos los derechos reservados. <a href="https://rt.com.co/wp-content/uploads/2025/09/POLITICA-DE-PRIVACIDAD-Y-TRATAMIENTO-DE-DATOS.pdf" class="footer-privacy-link">Política de Privacidad</a></p>
      <div class="footer-socials">
        <a href="#" class="footer-social-link" aria-label="LinkedIn">in</a>
        <a href="#" class="footer-social-link" aria-label="Twitter">X</a>
        <a href="#" class="footer-social-link" aria-label="Facebook">f</a>
      </div>
    </div>
  </div>
</footer>
`

/* ============================================
   HERO CAROUSEL - Auto-rotate every 3 seconds
   ============================================ */
function initHeroCarousel() {
  const slides = document.querySelectorAll<HTMLDivElement>('.hero-slide')
  const indicators = document.querySelectorAll<HTMLButtonElement>('.hero-indicator')
  let currentSlide = 0

  function goToSlide(index: number) {
    slides[currentSlide].classList.remove('active')
    indicators[currentSlide].classList.remove('active')
    currentSlide = index
    slides[currentSlide].classList.add('active')
    indicators[currentSlide].classList.add('active')
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length)
  }

  setInterval(nextSlide, 3000)

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      const slideIndex = parseInt(indicator.dataset.slide || '0')
      goToSlide(slideIndex)
    })
  })
}

/* ============================================
   NEWS CAROUSEL - Navigation buttons
   ============================================ */
function initNewsCarousel() {
  const carousel = document.getElementById('news-carousel') as HTMLDivElement
  const prevBtn = document.getElementById('news-prev') as HTMLButtonElement
  const nextBtn = document.getElementById('news-next') as HTMLButtonElement

  if (!carousel || !prevBtn || !nextBtn) return

  const scrollAmount = 380

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  })

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  })
}

/* ============================================
   HEADER SCROLL EFFECT
   ============================================ */
function initHeaderScroll() {
  const header = document.querySelector<HTMLDivElement>('.header')
  if (!header) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(10, 22, 40, 0.95)'
    } else {
      header.style.background = 'rgba(10, 22, 40, 0.85)'
    }
  })
}

/* ============================================
   SMOOTH SCROLL for anchor links
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute('href') || '')
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

/* ============================================
   SCROLL ANIMATIONS - Intersection Observer
   ============================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll<HTMLElement>('.value-card, .about-mission-card, .about-value-item, .about-highlight, .news-card').forEach((el) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(el)
  })
}

/* Add visible state */
const style = document.createElement('style')
style.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`
document.head.appendChild(style)

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel()
  initNewsCarousel()
  initHeaderScroll()
  initSmoothScroll()
  initScrollAnimations()
  injectDynamicJSONLD()
})

/* ============================================
   DYNAMIC JSON-LD - Services & FAQ
   ============================================ */
function injectDynamicJSONLD() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Ciberseguridad y Ciberresiliencia",
    "provider": {
      "@type": "Organization",
      "name": "RT",
      "url": "https://rt.com.co"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Soluciones TIC",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integración de Soluciones TIC",
            "description": "Integración de soluciones de tecnologías de información y comunicaciones complejas con los más actuales desarrollos."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Servicios Gestionados",
            "description": "Amplio conjunto de servicios gestionados que apoyan la operación de los recursos TIC de nuestros clientes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SOC como Servicio",
            "description": "Servicios de SOC de altos estándares y operación integral para la seguridad continua de su infraestructura tecnológica."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría TIC",
            "description": "Servicios de consultoría TIC en un amplio espectro de aplicaciones que apoyan las operaciones de nuestros clientes."
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué servicios de ciberseguridad ofrece RT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RT ofrece integración de soluciones TIC, servicios gestionados, SOC como servicio y consultoría TIC. Contamos con más de 18 años de experiencia protegiendo la operación digital de empresas en Colombia."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuántos años de experiencia tiene RT en ciberseguridad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RT cuenta con más de 18 años de experiencia en el sector de ciberseguridad y ciberresiliencia, atendiendo a más de 200 clientes con un equipo de más de 50 profesionales expertos."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué ciudades de Colombia opera RT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RT tiene su sede principal en Bogotá, Colombia, y presta servicios de ciberseguridad a empresas en todo el territorio nacional."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es un SOC y por qué es importante?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un SOC (Security Operations Center) es un centro de operaciones de seguridad que monitorea y responde a incidentes de seguridad 24/7. RT ofrece SOC como servicio con altos estándares para la seguridad continua de su infraestructura."
        }
      },
      {
        "@type": "Question",
        "name": "¿Con qué fabricantes de tecnología trabaja RT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RT es canal reconocido por los principales fabricantes de tecnología incluyendo Fortinet, Veeam, SolarWinds, Riverbed, Vicarius y ExaGrid, entre otros."
        }
      }
    ]
  }

  const serviceScript = document.createElement('script')
  serviceScript.type = 'application/ld+json'
  serviceScript.text = JSON.stringify(serviceSchema)
  document.head.appendChild(serviceScript)

  const faqScript = document.createElement('script')
  faqScript.type = 'application/ld+json'
  faqScript.text = JSON.stringify(faqSchema)
  document.head.appendChild(faqScript)
}
