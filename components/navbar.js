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

      <!-- Arautegia Dropdown como botón principal + split -->
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
            <a class="dropdown-item" href="${basePath}windows/memoriak_informatika.html">Ingenieritza Informatikako Memoriak</a>
            <a class="dropdown-item" href="${basePath}windows/memoriak_ia.html">Adimen Artifizialeko Memoriak</a>
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
  .navbar-custom { 
    transition: padding 0.3s ease;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
  .navbar-shrink { 
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  
  .navbar-brand, .nav-link { 
    line-height: 1; 
  }

  /* Asegurar que el menú colapsado funcione bien */
  @media (max-width: 991px) {
    .navbar-collapse {
      max-height: 80vh;
      overflow-y: auto;
    }
  }
</style>
`;

// Ajusta el padding del body según la altura del navbar
function adjustBodyPadding() {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const navbarHeight = navbar.offsetHeight;
    document.body.style.paddingTop = navbarHeight + 10 + "px";
  }
}

// Ejecutar al cargar y después de un pequeño delay para asegurar renderizado
adjustBodyPadding();
setTimeout(adjustBodyPadding, 100);

window.addEventListener("resize", adjustBodyPadding);
window.addEventListener("load", adjustBodyPadding);

// Ajustar padding cuando se abre/cierra el menú móvil
const navbarToggler = document.querySelector('.navbar-toggler');
if (navbarToggler) {
  navbarToggler.addEventListener('click', function() {
    setTimeout(adjustBodyPadding, 350); // Esperar a que termine la animación
  });
}

// Efecto shrink al hacer scroll Y ajustar padding
let lastScrollPos = 0;
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  
  const currentScrollPos = window.pageYOffset;
  
  if (currentScrollPos > 50) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
  
  // Ajustar padding si hay cambio significativo
  if (Math.abs(currentScrollPos - lastScrollPos) > 10) {
    adjustBodyPadding();
    lastScrollPos = currentScrollPos;
  }
});