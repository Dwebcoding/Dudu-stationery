// Navbar component
function createNavbar(currentPage) {
    const navbarHTML = `
<nav class="navbar bg-white shadow-lg border-b border-gray-200">
    <div class="navbar-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <a href="${currentPage === 'index' ? 'index.html' : '../index.html'}" class="logo flex items-center space-x-2 text-xl font-bold text-eco hover:text-accent transition-colors">
            <div class="logo-icon custom-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="currentColor" opacity="0.8"/>
                    <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor" opacity="0.9"/>
                    <circle cx="5" cy="19" r="0.8" fill="rgba(255,255,255,0.6)"/>
                    <circle cx="7" cy="17" r="0.6" fill="rgba(255,255,255,0.5)"/>
                    <circle cx="9" cy="15" r="0.4" fill="rgba(255,255,255,0.4)"/>
                    <path d="M14 10l3 3" stroke="rgba(255,255,255,0.3)" stroke-width="0.8" stroke-linecap="round"/>
                </svg>
            </div>
            Dudù
        </a>
        <ul class="nav-menu flex gap-8 mx-auto">
            <li class="nav-item ${currentPage === 'index' ? 'active' : ''}"><a href="${currentPage === 'index' ? 'index.html' : '../index.html'}" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a></li>
            <li class="nav-item ${currentPage === 'chi-siamo' ? 'active' : ''}"><a href="${currentPage === 'index' ? 'html/chi-siamo.html' : 'chi-siamo.html'}" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Chi Siamo</a></li>
            <li class="nav-item ${currentPage === 'prodotti' ? 'active' : ''}"><a href="${currentPage === 'index' ? 'html/prodotti.html' : 'prodotti.html'}" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Prodotti</a></li>
            <li class="nav-item ${currentPage === 'servizi' ? 'active' : ''}"><a href="${currentPage === 'index' ? 'html/servizi.html' : 'servizi.html'}" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Servizi</a></li>
            <li class="nav-item ${currentPage === 'contatti' ? 'active' : ''}"><a href="${currentPage === 'index' ? 'html/contatti.html' : 'contatti.html'}" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Contatti</a></li>
        </ul>
        <div class="navbar-social flex gap-4">
            <a href="https://www.facebook.com/" target="_blank" class="text-eco hover:text-accent"><i class="fab fa-facebook-f fa-lg"></i></a>
            <a href="https://www.instagram.com/" target="_blank" class="text-eco hover:text-accent"><i class="fab fa-instagram fa-lg"></i></a>
            <a href="https://www.pinterest.com/" target="_blank" class="text-eco hover:text-accent"><i class="fab fa-pinterest-p fa-lg"></i></a>
        </div>
    </div>
</nav>
    `;

    return navbarHTML;
}

// Function to insert navbar
function insertNavbar(currentPage) {
    const navbarHTML = createNavbar(currentPage);
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;
    } else {
        // Fallback: insert at the beginning of body
        const navbarContainer = document.createElement('div');
        navbarContainer.innerHTML = navbarHTML;
        document.body.insertBefore(navbarContainer.firstElementChild, document.body.firstElementChild);
    }
}