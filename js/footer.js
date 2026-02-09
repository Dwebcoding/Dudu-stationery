// Footer component
function createFooter(currentPage) {
    const footerHTML = `
<footer class="footer bg-secondary text-dark py-14 mt-16">
  <div class="footer-container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10 border-b border-light-gray pb-10">
    <!-- Contatti cartoon -->
    <div class="footer-section flex flex-col gap-3 min-w-[180px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Contatti</span>
      <span class="text-xs flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <path d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h4l-1 16H4L3 4h4z" fill="#F9C784" opacity="0.9"/>
          <path d="M9 8v2M15 8v2" stroke="#E07A5F" stroke-width="2" stroke-linecap="round"/>
          <rect x="8" y="2" width="8" height="2" fill="#6C63FF"/>
        </svg> Negozio
      </span>
      <span class="text-xs flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <rect x="4" y="6" width="16" height="14" rx="2" fill="#E07A5F" opacity="0.8"/>
          <rect x="4" y="4" width="16" height="4" rx="2" fill="#F9C784" opacity="0.9"/>
          <rect x="7" y="2" width="2" height="4" rx="1" fill="#6C63FF"/>
          <rect x="15" y="2" width="2" height="4" rx="1" fill="#6C63FF"/>
          <path d="M8 10h2M8 13h2M8 16h2M12 10h2M12 13h2M16 10h2M16 13h2" stroke="#3B7C59" stroke-width="1"/>
        </svg> Orari
      </span>
      <span class="text-xs flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <rect x="2" y="6" width="20" height="12" rx="2" fill="#6C63FF" opacity="0.8"/>
          <path d="M2 8l10 6 10-6" stroke="#E07A5F" stroke-width="2" fill="none"/>
          <path d="M2 6l10 6 10-6" fill="#F9C784"/>
        </svg> Email
      </span>
      <span class="text-xs flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <circle cx="12" cy="12" r="10" fill="#25D366"/>
          <path d="M16.5 13.5c-.3-.2-1.8-.9-2-.9-.2-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3-.1-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5 0 1.5 1.1 2.9 1.2 3.1.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" fill="#fff"/>
        </svg> Whatsapp
      </span>
      <span class="text-xs flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <path d="M6 2l12 12-2 2L4 4z" fill="#E07A5F" opacity="0.7"/>
          <path d="M8 2l12 12-2 2L6 4z" fill="#F9C784" opacity="0.8"/>
          <path d="M10 2l12 12-2 2L8 4z" fill="#6C63FF" opacity="0.9"/>
          <circle cx="5" cy="3" r="1" fill="#3B7C59"/>
          <circle cx="7" cy="3" r="1" fill="#3B7C59"/>
          <circle cx="9" cy="3" r="1" fill="#3B7C59"/>
          <path d="M16 16l4 4-1 1-4-4z" fill="#E07A5F" opacity="0.6"/>
        </svg> Creatività
      </span>
    </div>
    <!-- Navigazione cartoon -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Navigazione</span>
      <a href="../index.html" class="hover:text-accent flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" fill="#F9C784"/>
        </svg> Home
      </a>
      <a href="chi-siamo.html" class="hover:text-accent flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <circle cx="12" cy="12" r="10" fill="#E07A5F"/>
          <circle cx="12" cy="12" r="6" fill="#fff"/>
        </svg> Chi Siamo
      </a>
      <a href="novita.html" class="hover:text-accent flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <rect x="4" y="8" width="16" height="8" rx="2" fill="#6C63FF"/>
          <rect x="4" y="4" width="16" height="4" rx="2" fill="#F9C784"/>
        </svg> Novità
      </a>
      <a href="servizi.html" class="hover:text-accent flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <rect x="6" y="6" width="12" height="12" rx="3" fill="#3B7C59"/>
          <path d="M12 10v4" stroke="#fff" stroke-width="2"/>
        </svg> Servizi
      </a>
      <a href="contatti.html" class="hover:text-accent flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <rect x="4" y="4" width="16" height="16" rx="4" fill="#E07A5F"/>
          <circle cx="12" cy="12" r="6" fill="#fff"/>
        </svg> Contatti
      </a>
    </div>
    <!-- Legali cartoon -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Legali</span>
      <a href="../termini-servizio.html" class="hover:text-accent flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <rect x="4" y="4" width="16" height="16" rx="4" fill="#3B7C59"/>
          <rect x="8" y="8" width="8" height="8" rx="2" fill="#fff"/>
        </svg> Termini e condizioni
      </a>
      <a href="../privacy-policy.html" class="hover:text-accent flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <circle cx="12" cy="12" r="10" fill="#E07A5F"/>
          <circle cx="12" cy="12" r="6" fill="#fff"/>
        </svg> Privacy Policy
      </a>
      <a href="../cookie-policy.html" class="hover:text-accent flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;margin-right:8px;">
          <rect x="4" y="4" width="16" height="16" rx="4" fill="#F9C784"/>
          <circle cx="12" cy="12" r="6" fill="#fff"/>
        </svg> Cookie Policy
      </a>
    </div>
    <!-- Social cartoon -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Seguici</span>
      <div class="flex gap-4 mt-2">
        <a href="https://www.facebook.com/cartoleria.dudu/" target="_blank" class="text-eco hover:text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;">
            <circle cx="12" cy="12" r="10" fill="#1877F2"/>
            <rect x="10" y="7" width="4" height="10" rx="2" fill="#fff"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/cartoleriadudu/" target="_blank" class="text-eco hover:text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;">
            <circle cx="12" cy="12" r="10" fill="#DD2A7B"/>
            <circle cx="12" cy="12" r="6" fill="#fff"/>
            <circle cx="17" cy="7" r="2" fill="#DD2A7B"/>
          </svg>
        </a>
        <a href="https://wa.me/393317393337" target="_blank" class="text-eco hover:text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:22px;width:22px;">
            <circle cx="12" cy="12" r="10" fill="#25D366"/>
            <path d="M16.5 13.5c-.3-.2-1.8-.9-2-.9-.2-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3-.1-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5 0 1.5 1.1 2.9 1.2 3.1.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" fill="#fff"/>
          </svg>
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