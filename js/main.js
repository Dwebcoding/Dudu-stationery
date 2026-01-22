/* ============================================
   CARTOLERIA DUDÙ - JAVASCRIPT PRINCIPALE
   Gestisce: Menu mobile, validazione form, animazioni scroll
   ============================================ */

// ===== LINGUAGGIO (BASE PER FUTURA ESPANSIONE MULTILINGUA) =====
const translations = {
    it: {
        nav_home: 'Home',
        nav_about: 'Chi Siamo',
        nav_products: 'Prodotti',
        nav_services: 'Servizi',
        nav_contacts: 'Contatti',
        form_name_error: 'Il nome è obbligatorio',
        form_email_error: 'Inserisci un email valido',
        form_message_error: 'Il messaggio è obbligatorio',
        form_success: 'Messaggio inviato con successo!',
        form_error: 'Errore nell\'invio. Riprova.',
    },
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_products: 'Products',
        nav_services: 'Services',
        nav_contacts: 'Contact',
        form_name_error: 'Name is required',
        form_email_error: 'Please enter a valid email',
        form_message_error: 'Message is required',
        form_success: 'Message sent successfully!',
        form_error: 'Error sending message. Try again.',
    }
};

let currentLanguage = 'it';

// Funzione per ottenere traduzioni
function t(key) {
    return translations[currentLanguage][key] || translations['it'][key];
}

// ===== INIZIALIZZAZIONE =====
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initAnimations();
    initFormValidation();
    initLanguageSwitcher();
    setActiveNavItem();
    initCookieBanner();
    
    console.log('✅ Cartoleria Dudù - Sistema inizializzato');
});

// ===== MENU MOBILE =====
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Chiudi menu quando clicchi su un link
    const navItems = document.querySelectorAll('.nav-item a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Chiudi menu quando clicchi fuori
    document.addEventListener('click', function(event) {
        if (hamburger && !hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ===== INDICATORE SEZIONE ATTIVA =====
function setActiveNavItem() {
    const currentPage = document.body.getAttribute('data-page');
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const link = item.querySelector('a');
        if (link) {
            const href = link.getAttribute('href').replace('.html', '').replace('index', '');
            if (currentPage === href || 
                (currentPage === '' && href === '') ||
                (currentPage === 'index' && href === '')) {
                item.classList.add('active');
            }
        }
    });
}

// ===== ANIMAZIONI ON SCROLL =====
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-fade');
                // Rimuovi l'attributo data-aos per evitare animazioni duplicate
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Osserva tutti gli elementi con classe scroll-animate
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Animazione per le card
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        observer.observe(card);
    });
    
    // Animazione per i servizi
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        observer.observe(item);
    });
}

// ===== VALIDAZIONE FORM =====
function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Raccogli i dati
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Valida
        const isValid = validateForm(name, email, phone, message);
        
        if (isValid) {
            // Simula invio (in futuro: invia al backend)
            showFormMessage('success', t('form_success'));
            form.reset();
            console.log('📧 Form data:', { name, email, phone, message });
            
            // Pulisci il messaggio dopo 5 secondi
            setTimeout(() => {
                const msgElement = document.getElementById('formMessage');
                if (msgElement) {
                    msgElement.classList.remove('success', 'error');
                }
            }, 5000);
        }
    });
}

function validateForm(name, email, phone, message) {
    const messageDiv = document.getElementById('formMessage');
    let isValid = true;
    
    // Pulisci messaggi precedenti
    messageDiv.classList.remove('success', 'error');
    messageDiv.textContent = '';
    
    // Valida nome
    if (!name) {
        showFormMessage('error', t('form_name_error'));
        return false;
    }
    
    // Valida email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('error', t('form_email_error'));
        return false;
    }
    
    // Valida messaggio
    if (!message) {
        showFormMessage('error', t('form_message_error'));
        return false;
    }
    
    return true;
}

function showFormMessage(type, message) {
    const messageDiv = document.getElementById('formMessage');
    if (!messageDiv) return;
    
    messageDiv.textContent = message;
    messageDiv.classList.remove('success', 'error');
    messageDiv.classList.add(type);
}

// ===== LINGUAGGIO (MULTILINGUA) =====
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('[data-lang]');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Salva la preferenza
    localStorage.setItem('preferredLanguage', lang);
    
    // Aggiorna testi (implementazione base)
    updatePageLanguage(lang);
    
    console.log(`🌍 Lingua cambiata a: ${lang}`);
}

function updatePageLanguage(lang) {
    // Questa funzione può essere espansa per tradurre dinamicamente contenuti
    // Per ora, manteniamo il sito principalmente in italiano
    // In futuro, puoi aggiungere un sistema di template HTML multilingue
    
    // Esempio: traduci placeholder form
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    if (nameInput) {
        nameInput.placeholder = lang === 'it' ? 'Il tuo nome' : 'Your name';
    }
    if (emailInput) {
        emailInput.placeholder = lang === 'it' ? 'La tua email' : 'Your email';
    }
    if (phoneInput) {
        phoneInput.placeholder = lang === 'it' ? 'Il tuo telefono' : 'Your phone';
    }
    if (messageInput) {
        messageInput.placeholder = lang === 'it' ? 'Il tuo messaggio' : 'Your message';
    }
}

// ===== FILTRI PRODOTTI =====
function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('[data-category]');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                    product.style.animation = 'fadeInUp 0.4s ease-out';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
}

// ===== SMOOTH SCROLL PER LINK INTERNI =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL TO TOP =====
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostra il bottone scroll-to-top quando scrolli
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

// ===== FUNZIONI UTILITY =====

/**
 * Valida un indirizzo email
 * @param {string} email - L'email da validare
 * @returns {boolean}
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Aggiunge una classe dopo un ritardo
 * @param {Element} element - L'elemento target
 * @param {string} className - La classe da aggiungere
 * @param {number} delay - Ritardo in ms
 */
function addClassWithDelay(element, className, delay = 0) {
    setTimeout(() => {
        element.classList.add(className);
    }, delay);
}

/**
 * Carica la lingua salvata al ricarico della pagina
 */
function loadSavedLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved) {
        currentLanguage = saved;
        updatePageLanguage(saved);
    }
}

// Carica lingua salvata al caricamento
loadSavedLanguage();

// ===== GESTIONE COOKIE BANNER =====
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;
    
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 1000);
    }
    
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            banner.classList.remove('show');
            console.log('🍪 Cookie accettati');
        });
    }
    
    if (declineBtn) {
        declineBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            banner.classList.remove('show');
            console.log('🍪 Cookie rifiutati');
        });
    }
}

function showCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        localStorage.removeItem('cookieConsent');
        banner.classList.add('show');
    }
}

// ===== DEBUG: LOGGING =====
console.log(`
╔══════════════════════════════════════╗
║   CARTOLERIA DUDÙ - INITIALIZED      ║
║   Version: 1.0.0                     ║
║   Language: ${currentLanguage.toUpperCase()}                         ║
╚══════════════════════════════════════╝
`);
