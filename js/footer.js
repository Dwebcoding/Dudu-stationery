// Footer component
function createFooter(currentPage) {
    const footerHTML = `
<footer class="footer bg-secondary text-dark py-14 mt-16">
  <div class="footer-container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10 border-b border-light-gray pb-10">
    <!-- Contatti -->
    <div class="footer-section flex flex-col gap-3 min-w-[180px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Contatti</span>
      <span class="text-xs flex items-center"><svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2C5.13 2 2 5.13 2 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#3B7C59"/></svg> Via Lodi, 36, Canonica d'Adda (BG)</span>
      <span class="text-xs flex items-center"><svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#E07A5F"/></svg> <a href="tel:+39 02 90 96 5028" class="hover:text-accent">+39 02 90 96 5028</a></span>
      <span class="text-xs flex items-center"><svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" fill="#25D366"/></svg> <a href="https://wa.me/393317393337" class="hover:text-accent">+39 331 73 93 337</a></span>
      <span class="text-xs flex items-center"><svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#6C63FF"/></svg> <a href="mailto:cartoleriadudu36@hotmail.it" class="hover:text-accent">cartoleriadudu36@hotmail.it</a></span>
      <span class="text-xs flex items-center"><svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#F9C784"/></svg> Lun 15.30-19.30 | Mar-Sab 08.00-12.30 & 15.30-19.30</span>
    </div>
    <!-- Navigazione -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Navigazione</span>
      <a href="../index.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L2 8h2v6h4v-4h2v4h4V8h2L8 2z" fill="#3B7C59"/></svg> Home</a>
      <a href="chi-siamo.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7" stroke="#E07A5F" stroke-width="2"/><path d="M8 10c2 0 3-1.5 3-3S10 4 8 4 5 5.5 5 7s1 3 3 3z" fill="#E07A5F"/></svg> Chi Siamo</a>
      <a href="prodotti.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="12" height="8" rx="2" fill="#6C63FF"/></svg> Prodotti</a>
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
    } else {
        // Fallback: insert at the end of body
        const footerContainer = document.createElement('div');
        footerContainer.innerHTML = footerHTML;
        document.body.appendChild(footerContainer.firstElementChild);
    }
}