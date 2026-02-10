// Footer component
function createFooter(currentPage) {
    const footerHTML = `
<footer class="footer bg-secondary text-dark py-14 mt-16">
  <div class="footer-container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10 border-b border-light-gray pb-10">
    <!-- Contatti cartoon -->
    <div class="footer-section flex flex-col gap-3 min-w-[180px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Contatti</span>
      <span class="text-xs flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/icons/info.png' : '../assets/images/icons/info.png'}" alt="Info" width="22" height="22" style="margin-right:8px;" /> Negozio
      </span>
      <span class="text-xs flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/icons/timetable.png' : '../assets/images/icons/timetable.png'}" alt="Orari" width="22" height="22" style="margin-right:8px;" /> Orari
      </span>
      <span class="text-xs flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/icons/mail.png' : '../assets/images/icons/mail.png'}" alt="Email" width="22" height="22" style="margin-right:8px;" /> Email
      </span>
      <span class="text-xs flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/social/whatsapp.png' : '../assets/images/social/whatsapp.png'}" alt="Whatsapp" width="22" height="22" style="margin-right:8px;" /> Whatsapp
      </span>
      <span class="text-xs flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/icons/paint-brush.png' : '../assets/images/icons/paint-brush.png'}" alt="Creatività" width="22" height="22" style="margin-right:8px;" /> Creatività
      </span>
    </div>
    <!-- Navigazione cartoon -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Navigazione</span>
      <a href="../index.html" class="hover:text-accent flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/icons/home.png' : '../assets/images/icons/home.png'}" alt="Home" width="22" height="22" style="margin-right:8px;" /> Home
      </a>
      <a href="chi-siamo.html" class="hover:text-accent flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/icons/star.png' : '../assets/images/icons/star.png'}" alt="Chi Siamo" width="22" height="22" style="margin-right:8px;" /> Chi Siamo
      </a>
      <a href="novita.html" class="hover:text-accent flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/icons/megaphone.png' : '../assets/images/icons/megaphone.png'}" alt="Novità" width="22" height="22" style="margin-right:8px;" /> Novità
      </a>
      <a href="servizi.html" class="hover:text-accent flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/icons/customer-review.png' : '../assets/images/icons/customer-review.png'}" alt="Servizi" width="22" height="22" style="margin-right:8px;" /> Servizi
      </a>
      <a href="contatti.html" class="hover:text-accent flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/icons/mail.png' : '../assets/images/icons/mail.png'}" alt="Contatti" width="22" height="22" style="margin-right:8px;" /> Contatti
      </a>
    </div>
    <!-- Legali cartoon -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Legali</span>
      <a href="../termini-servizio.html" class="hover:text-accent flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/legal pages/terms.png' : '../assets/images/legal pages/terms.png'}" alt="Termini di Servizio" width="22" height="22" style="margin-right:8px;" /> Termini di Servizio
      </a>
      <a href="../privacy-policy.html" class="hover:text-accent flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/legal pages/privacy.png' : '../assets/images/legal pages/privacy.png'}" alt="Privacy Policy" width="22" height="22" style="margin-right:8px;" /> Privacy Policy
      </a>
      <a href="../cookie-policy.html" class="hover:text-accent flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/legal pages/cookie.png' : '../assets/images/legal pages/cookie.png'}" alt="Cookie Policy" width="22" height="22" style="margin-right:8px;" /> Cookie Policy
      </a>
    </div>
    <!-- Social ufficiali -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Seguici</span>
      <div class="flex gap-4 mt-2">
          <a href="https://www.facebook.com/cartoleria.dudu/" target="_blank" class="text-eco hover:text-accent">
            <img src="${currentPage === 'index' ? 'assets/images/social/facebook.png' : '../assets/images/social/facebook.png'}" alt="Facebook" width="24" height="24" />
          </a>
          <a href="https://www.instagram.com/cartoleriadudu/" target="_blank" class="text-eco hover:text-accent">
            <img src="${currentPage === 'index' ? 'assets/images/social/instagram.png' : '../assets/images/social/instagram.png'}" alt="Instagram" width="24" height="24" />
          </a>
          <a href="https://wa.me/393317393337" target="_blank" class="text-eco hover:text-accent">
            <img src="${currentPage === 'index' ? 'assets/images/social/whatsapp.png' : '../assets/images/social/whatsapp.png'}" alt="Whatsapp" width="24" height="24" />
          </a>
        </a>
        </a>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center text-xs text-dark mt-8">
    © 2026 Cartoleria Dudù. Tutti i diritti riservati.
  </div>
</footer>
    `;
    return footerHTML;
}

// Function to insert footer
function insertFooter(currentPage) {
  const footerHTML = createFooter(currentPage);
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
    footerPlaceholder.style.width = '100vw';
    footerPlaceholder.style.position = 'relative';
    footerPlaceholder.style.left = '50%';
    footerPlaceholder.style.right = '50%';
    footerPlaceholder.style.marginLeft = '-50vw';
    footerPlaceholder.style.marginRight = '-50vw';
  } else {
    // Fallback: insert at the end of body
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerHTML;
    footerContainer.style.width = '100vw';
    footerContainer.style.position = 'relative';
    footerContainer.style.left = '50%';
    footerContainer.style.right = '50%';
    footerContainer.style.marginLeft = '-50vw';
    footerContainer.style.marginRight = '-50vw';
    document.body.appendChild(footerContainer.firstElementChild);
  }
}