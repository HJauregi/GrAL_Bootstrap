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
        <li class="nav-item">
          <a class="nav-link" href="${basePath}index.html">
            <i class="bi bi-house-fill"></i>
            <span>Hasiera</span>
          </a>
        </li>

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

        <li class="nav-item">
          <a class="nav-link" href="${basePath}windows/egutegia.html">
            <i class="bi bi-calendar-check-fill"></i>
            <span>Egutegia</span>
          </a>
        </li>

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

        <li class="nav-item">
          <a class="nav-link" href="${basePath}windows/about-us.html">
            <i class="bi bi-people-fill"></i>
            <span>About us</span>
          </a>
        </li>

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
  body {
    padding-top: 100px;
    transition: padding-top 0.3s ease;
  }

  /* NAVBAR */
  .navbar-modern {
    background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    padding: 1rem 0;
  }

  .navbar-shrink {
    padding: 1rem 0 !important;
  }

  /* BRAND */
  .navbar-brand {
    color: white !important;
    font-weight: 700;
    font-size: 1.5rem;
    gap: 0.75rem;
  }

  .navbar-brand:hover {
    transform: translateX(5px);
  }

  .brand-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .brand-text {
    white-space: nowrap;
  }

  /* NAV LINKS */
  .navbar-nav {
    gap: 0.5rem;
  }

  .nav-link {
    color: rgba(255, 255, 255, 0.85) !important;
    font-weight: 500;
    padding: 0.75rem 1rem !important;
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white !important;
    transform: translateY(-2px);
  }

  .nav-link i {
    font-size: 1.1rem;
  }

  /* CTA BUTTON */
  .nav-link-cta {
    background: rgba(255, 255, 255, 0.15) !important;
    border: 2px solid white;
    color: white !important;
    font-weight: 600;
  }

  .nav-link-cta:hover {
    background: white !important;
    color: #1a1a1a !important;
  }

  /* DROPDOWN */
  .dropdown-menu-modern {
    background: #2a2a2a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
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
    color: rgba(255, 255, 255, 0.85);
    font-weight: 500;
  }

  .dropdown-item i {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .dropdown-item:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    transform: translateX(5px);
  }

  .dropdown-item:hover i {
    color: white;
  }

  /* TOGGLER */
  .navbar-toggler {
    border: none;
    padding: 0.5rem;
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
  }

  .navbar-toggler-icon-custom span {
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
    .navbar-modern {
      padding: 1rem 0;
    }

    .navbar-brand {
      font-size: 1.1rem;
      max-width: calc(100% - 60px);
    }

    .brand-icon {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }

    .brand-text {
      font-size: 1rem;
    }

    .navbar-toggler {
      flex-shrink: 0;
    }

    .navbar-collapse {
      background: rgba(26, 26, 26, 0.98);
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 12px;
      max-height: 80vh;
      overflow-y: auto;
    }

    .nav-link {
      padding: 1rem !important;
    }

    .dropdown-menu-modern {
      background: rgba(42, 42, 42, 0.95);
      margin-left: 1rem;
    }
  }

  @media (max-width: 576px) {
    .navbar-brand {
      font-size: 0.95rem;
    }

    .brand-icon {
      width: 35px;
      height: 35px;
      font-size: 1rem;
    }

    .brand-text {
      font-size: 0.9rem;
    }
  }
</style>
`;

// Efecto shrink al hacer scroll
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