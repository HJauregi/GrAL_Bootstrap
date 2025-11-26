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

      <li class="nav-item"><a class="nav-link" href="${basePath}index.html">Hasiera</a></li>

      <li class="nav-item dropdown">
        <div class="btn-group">
          <a class="nav-link" href="${basePath}windows/araudia.html">Arautegia</a>
          <a class="nav-link dropdown-toggle dropdown-toggle-split" href="#" id="arautegiaDropdown"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="${basePath}windows/araudia-infor.html">Ingenieritza Informatikoa</a>
            <a class="dropdown-item" href="${basePath}windows/araudia-ia.html">Adimen Artifiziala</a>
          </div>
        </div>
      </li>

      <li class="nav-item"><a class="nav-link" href="${basePath}windows/egutegia.html">Egutegia</a></li>

      <li class="nav-item dropdown">
        <div class="btn-group">
          <a class="nav-link" href="${basePath}windows/memoriak.html">GrAL Memoriak</a>
          <a class="nav-link dropdown-toggle dropdown-toggle-split" href="#" id="memoriakDropdown"
             data-toggle="dropdown">
            <span class="sr-only">Toggle Dropdown</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="memoriakDropdown">
            <a class="dropdown-item" href="${basePath}windows/memoriak_informatika.html">Ingenieritza Informatikako Memoriak</a>
            <a class="dropdown-item" href="${basePath}windows/memoriak_ia.html">Adimen Artifizialeko Memoriak</a>
          </div>
        </div>
      </li>

      <li class="nav-item"><a class="nav-link" href="${basePath}windows/about-us.html">About us</a></li>

      <li class="nav-item"><a class="nav-link" href="${basePath}windows/galdetegia.html">Autoebaluazio galdetegia</a></li>

    </ul>
  </div>
</nav>

<style>
  /* Desktop */
  @media (min-width: 992px) {
    .navbar-custom {
      transition: all 0.3s ease;
      height: 300px;
    }
    .navbar-shrink {
      height: 50px;
    }
    .navbar-brand { font-size: 1.5rem; }
    .navbar-shrink .navbar-brand { font-size: 1.25rem; }
  }

  /* Mobile */
  @media (max-width: 991px) {
    .navbar-custom {
      transition: all 0.3s ease;
      padding: 2.5rem 1rem;
    }
    .navbar-shrink {
      padding: 0.5rem 1rem;
    }
    .navbar-brand { font-size: 1.8rem; }
    .navbar-shrink .navbar-brand { font-size: 1.1rem; }
    .navbar-collapse {
      max-height: 80vh;
      overflow-y: auto;
    }
  }
</style>
`;

// FUNCIÓN: Ajusta padding del body siempre según ALTURA REAL de la navbar
function adjustBodyPadding() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const navHeight = navbar.getBoundingClientRect().height;
  document.body.style.paddingTop = navHeight + "px";
}

// Calcular después de cargar todo el contenido
window.addEventListener("load", () => {
  setTimeout(adjustBodyPadding, 50);
});

// Recalcular si cambia el tamaño o se hace scroll (por shrink)
window.addEventListener("resize", adjustBodyPadding);
window.addEventListener("scroll", adjustBodyPadding);

// Ajustar cuando se abre/cierra el menú móvil
document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".navbar-toggler");
  if (toggler) {
    toggler.addEventListener("click", () =>
      setTimeout(adjustBodyPadding, 300) // Esperar a animación
    );
  }
});

// Efecto shrink
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  if (window.pageYOffset > 50) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
});
