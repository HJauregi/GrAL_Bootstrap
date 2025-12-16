// footer.js
document.addEventListener('DOMContentLoaded', function() {
  const footerHTML = `
    <footer class="footer-modern mt-auto">
      <div class="container py-5">
        <!-- Warning Banner -->
        <div class="footer-warning">
          <div class="warning-icon">
            <i class="bi bi-exclamation-triangle-fill"></i>
          </div>
          <div class="warning-content">
            <strong>Abisua:</strong> Web orri hau ez da ofiziala. PKE2.02 taldeak hezkuntza xedeengatik sortutako informazio-gunea da.
          </div>
        </div>

        <!-- Divider -->
        <div class="footer-divider"></div>

        <!-- Main Content -->
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="footer-brand">
              <div class="brand-icon-footer">
                <i class="bi bi-mortarboard-fill"></i>
              </div>
              <div>
                <h5 class="mb-1">PKE2.02 Taldea</h5>
                <p class="mb-0 text-light-gray">Euskal Herriko Unibertsitatea (UPV/EHU)</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="footer-info-box">
              <i class="bi bi-info-circle-fill"></i>
              <p class="mb-0">Gradu Amaierako Lanaren inguruko informazio-gunea</p>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
          <p class="mb-0">&copy; 2025-Gradu Amaierako Lanaren gida.</p>
        </div>
      </div>
    </footer>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">

    <style>
      .footer-modern {
        background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
        color: white;
        position: relative;
        overflow: hidden;
      }

      .footer-modern::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, 
          transparent, 
          rgba(255, 255, 255, 0.3) 50%, 
          transparent
        );
      }

      /* Warning Banner */
      .footer-warning {
        background: rgba(255, 193, 7, 0.15);
        border-left: 4px solid #ffc107;
        border-radius: 12px;
        padding: 1.25rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
      }

      .footer-warning:hover {
        background: rgba(255, 193, 7, 0.25);
        transform: translateX(5px);
      }

      .warning-icon {
        font-size: 1.5rem;
        color: #ffc107;
        flex-shrink: 0;
      }

      .warning-content {
        color: rgba(255, 255, 255, 0.95);
        font-size: 0.95rem;
        line-height: 1.5;
      }

      .warning-content strong {
        color: #ffc107;
        margin-right: 0.5rem;
      }

      /* Divider */
      .footer-divider {
        height: 1px;
        background: linear-gradient(90deg, 
          transparent, 
          rgba(255, 255, 255, 0.2) 50%, 
          transparent
        );
        margin: 2rem 0;
      }

      /* Brand Section */
      .footer-brand {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .brand-icon-footer {
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        color: white;
        transition: all 0.3s ease;
      }

      .brand-icon-footer:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: rotate(5deg) scale(1.05);
      }

      .footer-brand h5 {
        font-weight: 700;
        color: white;
        margin: 0;
      }

      .text-light-gray {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
      }

      /* Info Box */
      .footer-info-box {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 1.25rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 100%;
        transition: all 0.3s ease;
      }

      .footer-info-box:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateY(-3px);
      }

      .footer-info-box i {
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.7);
        flex-shrink: 0;
      }

      .footer-info-box p {
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.5;
      }

      /* Bottom */
      .footer-bottom {
        text-align: center;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .footer-warning {
          flex-direction: column;
          text-align: center;
        }

        .warning-icon {
          font-size: 2rem;
        }

        .footer-brand {
          flex-direction: column;
          text-align: center;
        }

        .brand-icon-footer {
          width: 70px;
          height: 70px;
          font-size: 2rem;
        }
      }
    </style>
  `;
  
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
});