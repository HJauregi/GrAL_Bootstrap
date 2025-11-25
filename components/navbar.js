// Detecta si estamos en /windows/ o en la raíz
const basePath = window.location.pathname.includes("/windows/") ? "../" : "";

// Inserta el navbar en el placeholder
document.getElementById("navbar-placeholder").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNavbar">
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
  #mainNavbar {
    padding: 1rem 1rem;
    transition: padding 0.3s ease;
  }
  
  #mainNavbar.navbar-scrolled {
    padding: 0.5rem 1rem;
  }
  
  @media (max-width: 991px) {
    .navbar-collapse {
      max-height: 80vh;
      overflow-y: auto;
    }
  }
</style>
`;

// Funtzio nagusia: body padding egokitzeko
function updateBodyPadding() {
  const navbar = document.getElementById("mainNavbar");
  if (navbar) {
    document.body.style.paddingTop = navbar.offsetHeight + "px";
  }
}

// Hasierako karga
updateBodyPadding();
setTimeout(updateBodyPadding, 50);

// Resize eta load eventetan
window.addEventListener("resize", updateBodyPadding);
window.addEventListener("load", updateBodyPadding);

// Navbar toggle (mobile)
document.addEventListener("DOMContentLoaded", function() {
  const toggler = document.querySelector(".navbar-toggler");
  if (toggler) {
    toggler.addEventListener("click", function() {
      setTimeout(updateBodyPadding, 350);
    });
  }
});

// Scroll efektua - optimizatuta
let scrolling = false;

window.addEventListener("scroll", function() {
  if (!scrolling) {
    window.requestAnimationFrame(function() {
      const navbar = document.getElementById("mainNavbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("navbar-scrolled");
        } else {
          navbar.classList.remove("navbar-scrolled");
        }
        updateBodyPadding();
      }
      scrolling = false;
    });
    scrolling = true;
  }
});