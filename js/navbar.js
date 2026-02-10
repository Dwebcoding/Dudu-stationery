// Navbar component
function createNavbar(currentPage) {
    let navbarHTML = '';
    if (currentPage === 'index') {
        navbarHTML = `
<nav class="navbar bg-white shadow-lg border-b border-gray-200">
    <div class="navbar-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <a href="index.html" class="logo flex items-center space-x-2 text-xl font-bold text-eco hover:text-accent transition-colors">
            <img src="assets/images/logo/logo dudu.png" alt="Logo Cartoleria Dudù" style="height: 40px; width: auto; display: block;" />
            Dudù
        </a>
        <button class="hamburger block md:hidden focus:outline-none" id="navbar-hamburger" aria-label="Apri menu">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
        </button>
        <ul class="nav-menu flex gap-8 mx-auto md:flex hidden flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent z-50" id="navbar-menu">
            <li class="nav-item active"><a href="index.html" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a></li>
            <li class="nav-item"><a href="html/chi-siamo.html" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Chi Siamo</a></li>
            <li class="nav-item"><a href="html/novita.html" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Novità</a></li>
            <li class="nav-item"><a href="html/servizi.html" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Servizi</a></li>
            <li class="nav-item"><a href="html/contatti.html" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Contatti</a></li>
        </ul>
        <div class="navbar-social flex gap-4">
            <a href="https://www.facebook.com/cartoleria.dudu/" target="_blank" class="text-eco hover:text-accent">
                <img src="./assets/images/social/facebook.png" alt="Facebook" width="24" height="24" />
            </a>
            <a href="https://www.instagram.com/cartoleriadudu/" target="_blank" class="text-eco hover:text-accent">
                <img src="./assets/images/social/instagram.png" alt="Instagram" width="24" height="24" />
            </a>
            <a href="https://wa.me/393317393337" target="_blank" class="text-eco hover:text-accent">
                <img src="./assets/images/social/whatsapp.png" alt="Whatsapp" width="24" height="24" />
            </a>
        </div>
    </div>
</nav>
        `;
    } else {
        navbarHTML = `
<nav class="navbar bg-white shadow-lg border-b border-gray-200">
    <div class="navbar-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <a href="../index.html" class="logo flex items-center space-x-2 text-xl font-bold text-eco hover:text-accent transition-colors">
            <img src="../assets/images/logo/logo dudu.png" alt="Logo Cartoleria Dudù" style="height: 40px; width: auto; display: block;" />
            Dudù
        </a>
        <button class="hamburger block md:hidden focus:outline-none" id="navbar-hamburger" aria-label="Apri menu">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
        </button>
        <ul class="nav-menu flex gap-8 mx-auto md:flex hidden flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent z-50" id="navbar-menu">
            <li class="nav-item"><a href="../index.html" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a></li>
            <li class="nav-item"><a href="chi-siamo.html" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Chi Siamo</a></li>
            <li class="nav-item"><a href="novita.html" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Novità</a></li>
            <li class="nav-item"><a href="servizi.html" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Servizi</a></li>
            <li class="nav-item"><a href="contatti.html" class="text-eco hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Contatti</a></li>
        </ul>
        <div class="navbar-social flex gap-4">
            <a href="https://www.facebook.com/cartoleria.dudu/" target="_blank" class="text-eco hover:text-accent">
                <img src="../assets/images/social/facebook.png" alt="Facebook" width="24" height="24" />
            </a>
            <a href="https://www.instagram.com/cartoleriadudu/" target="_blank" class="text-eco hover:text-accent">
                <img src="../assets/images/social/instagram.png" alt="Instagram" width="24" height="24" />
            </a>
            <a href="https://wa.me/393317393337" target="_blank" class="text-eco hover:text-accent">
                <img src="../assets/images/social/whatsapp.png" alt="Whatsapp" width="24" height="24" />
            </a>
        </div>
    </div>
</nav>
        `;
    }

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

    // Hamburger menu toggle
    const hamburger = document.getElementById('navbar-hamburger');
    const menu = document.getElementById('navbar-menu');
    if (hamburger && menu) {
        hamburger.addEventListener('click', function () {
            menu.classList.toggle('hidden');
        });
    }
}