// Footer component
function createFooter(currentPage) {
<footer class="footer bg-secondary text-dark py-14 mt-16">
  <div class="footer-container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10 border-b border-light-gray pb-10">
    <!-- Contatti cartoon -->
    <div class="footer-section flex flex-col gap-3 min-w-[180px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Contatti</span>
      <span class="text-xs flex items-center">
        <img src="${currentPage === 'index' ? 'assets/images/icons/info.png' : '../assets/images/icons/info.png'}" alt="Info" width="22" height="22" style="margin-right:8px;" /> Negozio
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
      </div>
    </div>
    <!-- Sviluppatore -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Sviluppatore</span>
      <div class="flex gap-4 mt-2">
        <a href="https://github.com/Dwebcoding" target="_blank" class="text-eco hover:text-accent" aria-label="GitHub">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#181717"/></svg>
        </a>
        <a href="https://dwebcoding.github.io/Portfolio/" target="_blank" class="text-eco hover:text-accent" aria-label="Portfolio">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="13" rx="2" fill="#4F46E5"/><rect x="7" y="2" width="10" height="5" rx="2" fill="#6366F1"/><rect x="9" y="10" width="6" height="2" rx="1" fill="#fff"/></svg>
        </a>
        <a href="mailto:d.webcoding@gmail.com" target="_blank" class="text-eco hover:text-accent" aria-label="Email">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#EA4335"/><path d="M4 8l8 5 8-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="8" width="16" height="8" rx="2" fill="#fff"/></svg>
        </a>
        <a href="https://wa.me/393882566019" target="_blank" class="text-eco hover:text-accent" aria-label="WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#25D366"/><path d="M16.7 13.3c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.1-.4-2-1.2-.7-.6-1.2-1.4-1.3-1.7-.1-.3 0-.4.2-.6.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.5-.5-.5-.7-.5-.2 0-.4 0-.6.1-.2.1-.5.5-.5 1.2 0 .7.5 1.4.6 1.5.1.1.9 1.4 2.2 2.2 1.3.8 1.5.7 1.8.7.3 0 .9-.4 1.1-.8.1-.2.1-.4.1-.5 0-.1-.1-.2-.2-.3z" fill="#fff"/></svg>
        </a>
      </div>
    </div>
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Sviluppatore</span>
      <div class="flex gap-4 mt-2">
        <a href="https://github.com/Dwebcoding" target="_blank" class="text-eco hover:text-accent" aria-label="GitHub">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#181717"/></svg>
        </a>
        <a href="https://dwebcoding.github.io/Portfolio/" target="_blank" class="text-eco hover:text-accent" aria-label="Portfolio">
      <div class="footer-section flex flex-col gap-2 min-w-[140px]">
        <span class="footer-title text-eco text-lg font-bold mb-2">Sviluppatore</span>
        <div class="flex gap-4 mt-2">
          <a href="https://github.com/Dwebcoding" target="_blank" class="text-eco hover:text-accent" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#181717"/></svg>
          </a>
          <a href="https://dwebcoding.github.io/Portfolio/" target="_blank" class="text-eco hover:text-accent" aria-label="Portfolio">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="13" rx="2" fill="#4F46E5"/><rect x="7" y="2" width="10" height="5" rx="2" fill="#6366F1"/><rect x="9" y="10" width="6" height="2" rx="1" fill="#fff"/></svg>
          </a>
          <a href="mailto:d.webcoding@gmail.com" target="_blank" class="text-eco hover:text-accent" aria-label="Email">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#EA4335"/><path d="M4 8l8 5 8-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="8" width="16" height="8" rx="2" fill="#fff"/></svg>
          </a>
          <a href="https://wa.me/393882566019" target="_blank" class="text-eco hover:text-accent" aria-label="WhatsApp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#25D366"/><path d="M16.7 13.3c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.1-.4-2-1.2-.7-.6-1.2-1.4-1.3-1.7-.1-.3 0-.4.2-.6.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.5-.5-.5-.7-.5-.2 0-.4 0-.6.1-.2.1-.5.5-.5 1.2 0 .7.5 1.4.6 1.5.1.1.9 1.4 2.2 2.2 1.3.8 1.5.7 1.8.7.3 0 .9-.4 1.1-.8.1-.2.1-.4.1-.5 0-.1-.1-.2-.2-.3z" fill="#fff"/></svg>
          </a>
        </div>
      </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="13" rx="2" fill="#4F46E5"/><rect x="7" y="2" width="10" height="5" rx="2" fill="#6366F1"/><rect x="9" y="10" width="6" height="2" rx="1" fill="#fff"/></svg>
        </a>
        <a href="mailto:d.webcoding@gmail.com" target="_blank" class="text-eco hover:text-accent" aria-label="Email">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#EA4335"/><path d="M4 8l8 5 8-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="8" width="16" height="8" rx="2" fill="#fff"/></svg>
        </a>
        <a href="https://wa.me/393882566019" target="_blank" class="text-eco hover:text-accent" aria-label="WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#25D366"/><path d="M16.7 13.3c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.1-.4-2-1.2-.7-.6-1.2-1.4-1.3-1.7-.1-.3 0-.4.2-.6.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.5-.5-.5-.7-.5-.2 0-.4 0-.6.1-.2.1-.5.5-.5 1.2 0 .7.5 1.4.6 1.5.1.1.9 1.4 2.2 2.2 1.3.8 1.5.7 1.8.7.3 0 .9-.4 1.1-.8.1-.2.1-.4.1-.5 0-.1-.1-.2-.2-.3z" fill="#fff"/></svg>
        </a>
      </div>
    </div>
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