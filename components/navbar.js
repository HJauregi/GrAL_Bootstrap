// Detecta si estamos en /windows/ o en la raíz
const basePath = window.location.pathname.includes("/windows/") ? "../" : "";

// Inserta el navbar en el placeholder
document.getElementById("navbar-placeholder").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-custom" id="navbar">
  <a class="navbar-brand" href="${basePath}index.html">Gradu Amaierako Lana</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">

      <!-- Hasiera -->
      <li class="nav-item"><a class="nav-link" href="${basePath}index.html">Hasiera</a></li>

      <!-- Arautegia Dropdown -->
      <li class="nav-item dropdown">
        <div class="btn-group">
          <a class="nav-link" href="${basePath}windows/araudia.html">Arautegia</a>
          <a class="nav-link dropdown-toggle dropdown-toggle-split" href="#" id="arautegiaDropdown"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="arautegiaDropdown">
            <a class="dropdown-item" href="${basePath}windows/araudia-infor.html">Ingenieritza Informatikoa</a>
            <a class="dropdown-item" href="${basePath}windows/araudia-ia.html">Adimen Artifiziala</a>
          </div>
        </div>
      </li>

      <!-- Egutegia -->
      <li class="nav-item"><a class="nav-link" href="${basePath}windows/egutegia.html">Egutegia</a></li>

      <!-- Memoriak Dropdown -->
      <li class="nav-item dropdown">
        <div class="btn-group">
          <a class="nav-link" href="${basePath}windows/memoriak.html">GrAL Memoriak</a>
          <a class="nav-link dropdown-toggle dropdown-toggle-split" href="#" id="memoriakDropdown"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="memoriakDropdown">
            <a class="dropdown-item" href="${basePath}windows/memoriak-informatika.html">Ingenieritza Informatikako Memoriak</a>
            <a class="dropdown-item" href="${basePath}windows/memoriak-ia.html">Adimen Artifizialeko Memoriak</a>
          </div>
        </div>
      </li>

      <!-- About us -->
      <li class="nav-item"><a class="nav-link" href="${basePath}windows/about-us.html">About us</a></li>

      <!-- Autoebaluazioa -->
      <li class="nav-item"><a class="nav-link" href="${basePath}windows/galdetegia.html">Autoebaluazio galdetegia</a></li>

    </ul>
  </div>
</nav>

<style>
  /* PADDING FIJO PARA EL BODY */
  body {
    padding-top: 320px; /* Desktop: altura máxima de navbar (300px) + margen (20px) */
  }

  /* Desktop navbar */
  @media (min-width: 992px) {
    .navbar-custom { 
      transition: all 0.3s ease; 
      height: 300px;
    }
    .navbar-shrink { 
      height: 50px; 
    }
    .navbar-brand, .nav-link { 
      line-height: 2.5;
      font-size: 1.1rem;
    }
    .navbar-shrink .navbar-brand, .navbar-shrink .nav-link { 
      line-height: 1.5; 
      font-size: 1rem;
    }
    .navbar-brand {
      font-size: 1.5rem;
    }
    .navbar-shrink .navbar-brand {
      font-size: 1.25rem;
    }
  }
  
  /* Mobile navbar */
  @media (max-width: 991px) {
    /* Ajuste del padding para móvil */
    body {
      padding-top: 120px; /* Altura aproximada para navbar móvil expandida */
    }
    
    .navbar-custom {
      transition: all 0.3s ease;
      padding: 2.5rem 1rem;
    }
    .navbar-shrink {
      padding: 0.5rem 1rem;
    }
    .navbar-brand {
      font-size: 1.8rem;
      transition: font-size 0.3s ease;
    }
    .navbar-shrink .navbar-brand {
      font-size: 1.1rem;
    }
    .navbar-toggler {
      transition: all 0.3s ease;
      padding: 0.5rem 0.75rem;
    }
    .navbar-collapse {
      max-height: 80vh;
      overflow-y: auto;
    }
    .navbar-brand, .nav-link {
      line-height: 1.5;
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
        } else {
          navbar.classList.remove("navbar-shrink");
        }
      }
      ticking = false;
    });
    ticking = true;
  }
});