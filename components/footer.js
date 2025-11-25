// footer.js
document.addEventListener('DOMContentLoaded', function() {
  const footerHTML = `
    <footer class="footer mt-auto py-3 bg-dark text-white">
      <div class="container">
        <div class="footer-warning text-center">
          <strong>⚠️ Abisua:</strong> Web orri hau ez da ofiziala. PKE2.02 taldeak hezkuntza xedeengatik sortutako informazio-gunea da.
        </div>
        <div class="text-center footer-info">
          <p class="mb-2">
            <strong>PKE2.02 Taldea</strong> - Euskal Herriko Unibertsitatea (UPV/EHU)
          </p>
          <p class="mb-0">
            &copy; 2025 PKE2.02. Gradu Amaierako Lanaren inguruko informazio-gunea.
          </p>
        </div>
      </div>
    </footer>
  `;
  
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
});