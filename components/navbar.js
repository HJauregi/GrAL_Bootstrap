// Detecta si estamos en /windows/ o en la raíz
const basePath = window.location.pathname.includes("/windows/") ? "../" : "";

// Inserta el navbar en el placeholder
document.getElementById("navbar-placeholder").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-custom" id="navbar">
  <div class="container-fluid navbar-content">
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
  </div>
</nav>

<style>
/* Desktop navbar */
@media (min-width: 992px) {
  .navbar-custom { transition: all 0.3s ease; height: 300px; }
  .navbar-custom .navbar-content { display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%; padding: 1rem 0; }
  .navbar-custom .navbar-brand { font-size: 2.5rem; order: 2; margin: auto 0; }
  .navbar-custom .navbar-collapse { order: 1; flex-grow: 0; }
  .navbar-custom .navbar-toggler { display: none; }
  .navbar-shrink { height: 60px; }
  .navbar-shrink .navbar-content { flex-direction: row !important; justify-content: space-between !important; padding: 0; }
  .navbar-shrink .navbar-brand { font-size: 1.25rem !important; order: 0 !important; margin: 0 !important; }
  .navbar-shrink .navbar-collapse { order: 0 !important; }
}

/* Mobile navbar */
@media (max-width: 991px) {
  .navbar-custom { transition: all 0.3s ease; padding: 2.5rem 1rem; }
  .navbar-shrink { padding: 0.5rem 1rem; }
  .navbar-brand { font-size: 1.8rem; transition: font-size 0.3s ease; }
  .navbar-shrink .navbar-brand { font-size: 1.1rem; }
  .navbar-toggler { transition: all 0.3s ease; padding: 0.5rem 0.75rem; }
  .navbar-collapse { max-height: 80vh; overflow-y: auto; }
}
</style>
`;

// Función para ajustar padding según altura de navbar
function adjustBodyPadding() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  document.body.style.paddingTop = navbar.offsetHeight + "px";
}

// Scroll shrink effect
function handleNavbarShrink() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  if (window.pageYOffset > 50) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }

  adjustBodyPadding();
}

// Ejecutar al cargar
window.addEventListener("DOMContentLoaded", adjustBodyPadding);
window.addEventListener("load", adjustBodyPadding);
window.addEventListener("resize", adjustBodyPadding);
window.addEventListener("scroll", handleNavbarShrink);

// Ajustar padding cuando se abre/cierra el menú móvil
document.addEventListener("DOMContentLoaded", function() {
  const toggler = document.querySelector('.navbar-toggler');
  if (toggler) {
    toggler.addEventListener('click', function() {
      setTimeout(adjustBodyPadding, 350);
    });
  }
});

// Scroll suave para enlaces internos que respeta navbar fija
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = document.getElementById('navbar').offsetHeight;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});
