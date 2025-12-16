// Detecta si estamos en /windows/ o en la raíz
const basePath = window.location.pathname.includes("/windows/") ? "../" : "";

// Inserta el navbar en el placeholder
document.getElementById("navbar-placeholder").innerHTML = `
<nav class="navbar navbar-expand-lg fixed-top navbar-modern" id="navbar">
  <div class="container-fluid px-4">
    <a class="navbar-brand d-flex align-items-center" href="${basePath}index.html">
      <div class="brand-icon">
        <i class="bi bi-mortarboard-fill"></i>
      </div>
      <span class="brand-text">Gradu Amaierako Lana</span>
    </a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon-custom">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">

        <!-- Hasiera -->
        <li class="nav-item">
          <a class="nav-link" href="${basePath}index.html">
            <i class="bi bi-house-fill"></i>
            <span>Hasiera</span>
          </a>
        </li>

        <!-- Arautegia Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="${basePath}windows/araudia.html" id="arautegiaDropdown"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="bi bi-file-text-fill"></i>
            <span>Arautegia</span>
          </a>
          <div class="dropdown-menu dropdown-menu-modern" aria-labelledby="arautegiaDropdown">
            <a class="dropdown-item" href="${basePath}windows/araudia_infor.html">
              <i class="bi bi-cpu"></i> Ingenieritza Informatikoa
            </a>
            <a class="dropdown-item" href="${basePath}windows/araudia_ia.html">
              <i class="bi bi-robot"></i> Adimen Artifiziala
            </a>
          </div>
        </li>

        <!-- Egutegia -->
        <li class="nav-item">
          <a class="nav-link" href="${basePath}windows/egutegia.html">
            <i class="bi bi-calendar-check-fill"></i>
            <span>Egutegia</span>
          </a>
        </li>

        <!-- Memoriak Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="${basePath}windows/memoriak.html" id="memoriakDropdown"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="bi bi-journal-text"></i>
            <span>GrAL Memoriak</span>
          </a>
          <div class="dropdown-menu dropdown-menu-modern" aria-labelledby="memoriakDropdown">
            <a class="dropdown-item" href="${basePath}windows/memoriak-informatika.html">
              <i class="bi bi-cpu"></i> Ingenieritza Informatikako Memoriak
            </a>
            <a class="dropdown-item" href="${basePath}windows/memoriak-ia.html">
              <i class="bi bi-robot"></i> Adimen Artifizialeko Memoriak
            </a>
          </div>
        </li>

        <!-- About us -->
        <li class="nav-item">
          <a class="nav-link" href="${basePath}windows/about-us.html">
            <i class="bi bi-people-fill"></i>
            <span>About us</span>
          </a>
        </li>

        <!-- Autoebaluazioa -->
        <li class="nav-item">
          <a class="nav-link nav-link-cta" href="${basePath}windows/galdetegia.html">
            <i class="bi bi-clipboard-check-fill"></i>
            <span>Autoebaluazioa</span>
          </a>
        </li>

      </ul>
    </div>
  </div>
</nav>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">

<style>
  /* RESET Y BASE */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding-top: 100px;
    transition: padding-top 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* NAVBAR PRINCIPAL */
  .navbar-modern {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .navbar-shrink {
    padding: 0.5rem 0 !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  /* BRAND */
  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: white !important;
    font-weight: 700;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    padding: 0;
  }

  .navbar-brand:hover {
    transform: translateX(5px);
    color: #ffd700 !important;
  }

  .brand-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }

  .navbar-shrink .brand-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .brand-text {
    transition: font-size 0.3s ease;
  }

  .navbar-shrink .brand-text {
    font-size: 1.2rem;
  }

  /* NAV LINKS */
  .navbar-nav {
    gap: 0.5rem;
  }

  .nav-link {
    color: rgba(255, 255, 255, 0.9) !important;
    font-weight: 500;
    padding: 0.75rem 1.25rem !important;
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #ffd700;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white !important;
    transform: translateY(-2px);
  }

  .nav-link:hover::before {
    width: 80%;
  }

  .nav-link i {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  .nav-link:hover i {
    transform: scale(1.2);
  }

  /* CTA BUTTON */
  .nav-link-cta {
    background: rgba(255, 215, 0, 0.2) !important;
    border: 2px solid #ffd700;
    color: #ffd700 !important;
    font-weight: 600;
  }

  .nav-link-cta:hover {
    background: #ffd700 !important;
    color: #667eea !important;
    transform: translateY(-3px) scale(1.05);
  }

  /* DROPDOWN */
  .dropdown-menu-modern {
    background: white;
    border: none;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    padding: 0.5rem;
    margin-top: 0.5rem;
    min-width: 280px;
  }

  .dropdown-item {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #343a40;
    font-weight: 500;
  }

  .dropdown-item i {
    font-size: 1.2rem;
    color: #667eea;
    transition: transform 0.3s ease;
  }

  .dropdown-item:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateX(5px);
  }

  .dropdown-item:hover i {
    color: white;
    transform: scale(1.2);
  }

  /* TOGGLER PERSONALIZADO */
  .navbar-toggler {
    border: none;
    padding: 0.5rem;
    position: relative;
    z-index: 1000;
  }

  .navbar-toggler:focus {
    outline: none;
    box-shadow: none;
  }

  .navbar-toggler-icon-custom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 22px;
    cursor: pointer;
  }

  .navbar-toggler-icon-custom span {
    display: block;
    height: 3px;
    background: white;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon-custom span:nth-child(1) {
    transform: rotate(45deg) translateY(10px);
  }

  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon-custom span:nth-child(2) {
    opacity: 0;
  }

  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon-custom span:nth-child(3) {
    transform: rotate(-45deg) translateY(-10px);
  }

  /* RESPONSIVE */
  @media (max-width: 991px) {
    body {
      padding-top: 80px;
    }

    .navbar-modern {
      padding: 1rem 0;
    }

    .navbar-collapse {
      background: rgba(102, 126, 234, 0.98);
      backdrop-filter: blur(10px);
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 12px;
      max-height: 70vh;
      overflow-y: auto;
    }

    .navbar-nav {
      gap: 0.25rem;
    }

    .nav-link {
      padding: 1rem !important;
      justify-content: flex-start;
    }

    .dropdown-menu-modern {
      background: rgba(255, 255, 255, 0.95);
      border: none;
      margin-left: 1rem;
    }

    .brand-icon {
      width: 45px;
      height: 45px;
    }

    .navbar-shrink .brand-icon {
      width: 35px;
      height: 35px;
    }
  }

  /* ANIMACIONES */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .navbar-collapse.show {
    animation: fadeIn 0.3s ease;
  }

  /* SCROLL BAR PERSONALIZADO */
  .navbar-collapse::-webkit-scrollbar {
    width: 6px;
  }

  .navbar-collapse::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  .navbar-collapse::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  .navbar-collapse::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
</style>
`;

// Efecto shrink al hacer scroll con mejor performance
let ticking = false;
window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.pageYOffset > 50) {
          navbar.classList.add("navbar-shrink");
          document.body.style.paddingTop = "80px";
        } else {
          navbar.classList.remove("navbar-shrink");
          document.body.style.paddingTop = "100px";
        }
      }
      ticking = false;
    });
    ticking = true;
  }
});