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
          <div class="dropdown-menu" aria-labelledby="arautegiaDropdown">
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
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="memoriakDropdown">
            <a class="dropdown-item" href="${basePath}windows/memoriak-informatika.html">Ingenieritza Informatikako Memoriak</a>
            <a class="dropdown-item" href="${basePath}windows/memoriak-ia.html">Adimen Artifizialeko Memoriak</a>
          </div>
        </div>
      </li>

      <li class="nav-item"><a class="nav-link" href="${basePath}windows/about-us.html">About us</a></li>
      <li class="nav-item"><a class="nav-link" href="${basePath}windows/galdetegia.html">Autoebaluazio galdetegia</a></li>
    </ul>
  </div>
</nav>

<style>
  .navbar-custom {
    transition: height 0.3s ease, padding 0.3s ease;
    height: 250px;
    padding: 1rem 1rem;
  }
  .navbar-brand, .nav-link {
    line-height: 1;
  }
  body {
    transition: padding-top 0.3s ease;
  }
</style>
`;

// Configuración de altura
const navbar = document.getElementById("navbar");
const maxHeight = 250; // altura inicial
const minHeight = 50;  // altura mínima al hacer scroll

// Función para ajustar la altura del navbar según el scroll de manera progresiva
function adjustNavbar() {
  const scroll = window.pageYOffset;
  const targetHeight = Math.max(minHeight, maxHeight - scroll);
  
  // Animación suave usando requestAnimationFrame
  const currentHeight = parseFloat(navbar.style.height) || maxHeight;
  const diff = targetHeight - currentHeight;
  if (Math.abs(diff) > 0.5) { // evitar microajustes innecesarios
    navbar.style.height = currentHeight + diff * 0.2 + "px"; // 0.2 = velocidad de transición
    document.body.style.paddingTop = navbar.offsetHeight + 10 + "px";
    requestAnimationFrame(adjustNavbar);
  } else {
    navbar.style.height = targetHeight + "px";
    document.body.style.paddingTop = navbar.offsetHeight + 10 + "px";
  }
}

// Inicializar
adjustNavbar();
window.addEventListener("scroll", adjustNavbar);
window.addEventListener("resize", adjustNavbar);
