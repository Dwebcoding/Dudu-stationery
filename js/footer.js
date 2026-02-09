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
          <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#25D366" opacity="0.9"/>
        </svg> Telefono
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
    <!-- Navigazione -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Navigazione</span>
      <a href="../index.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L2 8h2v6h4v-4h2v4h4V8h2L8 2z" fill="#3B7C59"/></svg> Home</a>
      <a href="chi-siamo.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7" stroke="#E07A5F" stroke-width="2"/><path d="M8 10c2 0 3-1.5 3-3S10 4 8 4 5 5.5 5 7s1 3 3 3z" fill="#E07A5F"/></svg> Chi Siamo</a>
      <a href="novita.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="12" height="8" rx="2" fill="#6C63FF"/></svg> Novità</a>
      <a href="servizi.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v12M2 8h12" stroke="#F9C784" stroke-width="2"/></svg> Servizi</a>
      <a href="contatti.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2h12v12H2V2z" stroke="#E07A5F" stroke-width="2"/></svg> Contatti</a>
    </div>
    <!-- Legali -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Legali</span>
      <a href="../termini-servizio.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" fill="#3B7C59"/></svg> Termini e condizioni</a>
      <a href="../privacy-policy.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7" stroke="#E07A5F" stroke-width="2"/></svg> Privacy Policy</a>
      <a href="../cookie-policy.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" fill="#F9C784"/></svg> Cookie Policy</a>
    </div>
    <!-- Social -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Seguici</span>
      <div class="flex gap-4 mt-2">
        <a href="https://www.facebook.com/cartoleria.dudu/" target="_blank" class="text-eco hover:text-accent"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 10.073c0-5.523-4.477-10-10-10S0 4.55 0 10.073c0 4.99 3.663 9.104 8.438 9.854v-6.96H5.898v-2.894h2.54V7.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.243 0-1.632.772-1.632 1.563v1.88h2.773l-.443 2.894h-2.33v6.96C16.337 19.177 20 15.063 20 10.073z" fill="#1877F2"/></svg></a>
        <a href="https://www.instagram.com/cartoleriadudu/" target="_blank" class="text-eco hover:text-accent"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" stroke="#DD2A7B" stroke-width="2"/><circle cx="10" cy="10" r="5" stroke="#DD2A7B" stroke-width="2"/><circle cx="15" cy="5" r="1" fill="#DD2A7B"/></svg></a>
        <a href="https://wa.me/393317393337" target="_blank" class="text-eco hover:text-accent"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" stroke="#25D366" stroke-width="2"/><path d="M7 10c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z" fill="#25D366"/></svg></a>
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