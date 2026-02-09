# Cartoleria Dudù - Website

Un sito web moderno e responsive per una cartoleria locale, che combina design accogliente con funzionalità professionali.

![Website Preview](https://img.shields.io/badge/Status-Complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Descrizione

Sito web completo per **Cartoleria Dudù**, una cartoleria moderna con identità artigianale. Il progetto presenta un design accogliente e colorato che riflette la personalità del brand, con funzionalità complete per presentare prodotti, servizi e informazioni aziendali.

## Caratteristiche Principali

### Design & UX
- **Design responsive** - Ottimizzato per desktop, tablet e mobile
- **Palette colori armoniosa** - Verde salvia, crema e corallo caldo
- **Tipografia moderna** - Combinazione Playfair Display + Poppins
- **Animazioni fluide** - Transizioni CSS e animazioni scroll
- **Icone SVG personalizzate** - Sistema di icone vettoriali scalabili

### Funzionalità
- **Menu mobile hamburger** - Navigazione ottimizzata per dispositivi mobili
- **Form di contatto validato** - Validazione JavaScript lato client
- **Filtri prodotti dinamici** - Sistema di filtri per categorie prodotti
- **Animazioni on-scroll** - Elementi che si animano durante lo scroll
- **Sistema multilingua** - Base per espansione italiana/inglese

### Architettura
- **Codice modulare** - CSS e JavaScript organizzati e commentati
- **SEO ottimizzato** - Meta tag, struttura semantica, performance
- **Accessibilità** - Contrasti, focus states, navigazione keyboard
- **Performance** - CSS ottimizzato, immagini vettoriali, codice minificato

## Tecnologie Utilizzate

### Frontend Core
- **HTML5** - Struttura semantica e accessibile
- **CSS3** - Styling avanzato con Grid, Flexbox, Custom Properties
- **JavaScript ES6+** - Interattività e validazione form

### Librerie & Framework
- **Google Fonts** - Playfair Display & Poppins
- **SVG Icons** - Sistema di icone vettoriali personalizzate
- **CSS Grid & Flexbox** - Layout responsive moderno

### Strumenti di Sviluppo
- **CSS Custom Properties** - Sistema di variabili per colori e spacing
- **Intersection Observer API** - Animazioni scroll performanti
- **Local Storage** - Salvataggio preferenze utente
- **Form Validation API** - Validazione form nativa + custom

## Struttura del Progetto

```
Dudu Stationery/
├── index.html              # Homepage principale
├── chi-siamo.html          # Pagina chi siamo
├── prodotti.html           # Catalogo prodotti
├── servizi.html            # Servizi offerti
├── contatti.html           # Form contatti e info
├── css/
│   └── style.css           # Stylesheet principale (15KB)
├── js/
│   └── main.js             # JavaScript principale (12KB)
├── icons/                  # Icone SVG personalizzate
│   ├── binding.svg
│   ├── book.svg
│   ├── business-card.svg
│   ├── calendar.svg
│   ├── copy.svg
│   ├── creative.svg
│   ├── custom.svg
│   ├── email.svg
│   ├── gift.svg
│   ├── label.svg
│   ├── pen.svg
│   ├── pencils.svg
│   ├── phone.svg
│   ├── print.svg
│   ├── school-supplies.svg
│   └── shop.svg
└── README.md               # Documentazione progetto
```

## Installazione e Utilizzo

### Requisiti
- Browser moderno (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Server web locale (opzionale per sviluppo)

### Setup Rapido
1. **Clona o scarica** il repository
```bash
git clone https://github.com/DWeb-code/dudu-stationery.git
cd dudu-stationery
```

2. **Apri il progetto**
   - Apri `index.html` direttamente nel browser, oppure
   - Usa un server locale (Live Server, Python, Node.js)

3. **Per sviluppo locale**
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

4. **Visita** `http://localhost:8000`

## Pagine e Sezioni

### Homepage (`index.html`)
- **Hero Section** - Presentazione principale con CTA
- **Cosa Trovi da Dudù** - Categorie prodotti principali
- **Servizi Principali** - Overview servizi offerti
- **Bestseller** - Prodotti in evidenza
- **Call to Action** - Invito al contatto

### Chi Siamo (`chi-siamo.html`)
- **Storia aziendale** - Racconto della fondazione
- **Valori aziendali** - Qualità, creatività, attenzione cliente
- **Team** - Presentazione staff
- **Timeline** - Tappe importanti dell'azienda
- **Numeri** - Statistiche e risultati

### Prodotti (`prodotti.html`)
- **Filtri dinamici** - Per categoria prodotto
- **Griglia prodotti** - Layout responsive con prezzi
- **Categorie**: Scolastici, Creativi, Regalo, Stampa
- **Come ordinare** - Processo d'acquisto

### Servizi (`servizi.html`)
- **Stampe digitali** - Dettagli e prezzi
- **Fotocopie** - Servizi di riproduzione
- **Rilegature** - Servizi professionali
- **Articoli personalizzati** - Custom e merchandising
- **Processo** - Come funziona il servizio

### Contatti (`contatti.html`)
- **Form di contatto** - Validato con JavaScript
- **Informazioni** - Indirizzo, telefono, email, orari
- **Mappa** - Integrazione Google Maps
- **FAQ** - Domande frequenti
- **Social media** - Link ai profili social

## Sistema di Design

### Palette Colori
```css
--primary: #3B7C59;     /* Verde salvia */
--secondary: #FFF6E5;   /* Crema chiaro */
--accent: #E07A5F;      /* Corallo caldo */
--dark: #2C2C2C;        /* Grigio scuro */
--light: #FFFBF7;       /* Bianco caldo */
```

### Tipografia
- **Headings**: Playfair Display (serif, elegante)
- **Body**: Poppins (sans-serif, leggibile)
- **Gerarchia**: H1 (3rem) → H2 (2.2rem) → H3 (1.5rem)

### Componenti
- **Bottoni**: Stili primary/secondary con hover effects
- **Card**: Layout flessibile con ombre e transizioni
- **Form**: Validazione visiva e stati di errore/successo
- **Icone**: Sistema SVG scalabile e personalizzabile

## Responsive Design

### Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

### Ottimizzazioni Mobile
- Menu hamburger animato
- Touch-friendly buttons (44px min)
- Testo leggibile (16px+ su mobile)
- Immagini ottimizzate per retina

## Performance

### Ottimizzazioni
- **CSS**: Minificato e ottimizzato (15KB)
- **JavaScript**: Modulare e efficiente (12KB)
- **Immagini**: SVG vettoriali per icone
- **Font**: Google Fonts con display=swap
- **Animazioni**: CSS transforms per performance

### Metriche Target
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## Personalizzazione

### Colori
Modifica le variabili CSS in `style.css`:
```css
:root {
    --primary: #TUO_COLORE;
    --accent: #TUO_COLORE;
    /* ... */
}
```

### Contenuti
- Testi: Modifica direttamente nei file HTML
- Immagini: Sostituisci le icone SVG nella cartella `/icons/`
- Contatti: Aggiorna info in `contatti.html` e footer

### Funzionalità
- Form: Configura endpoint in `main.js`
- Lingue: Espandi oggetto `translations`
- Animazioni: Modifica timing in CSS

## SEO e Accessibilità

### SEO
- **Meta tag** ottimizzati per ogni pagina
- **Struttura semantica** HTML5
- **Schema markup** per business locale
- **Sitemap** e robots.txt ready

### Accessibilità
- **Contrasto** WCAG AA compliant
- **Navigazione keyboard** completa
- **Screen reader** friendly
- **Focus indicators** visibili

## Informazioni Legali

### Copyright
- **Contenuti**: © 2026 Cartoleria Dudù
- **Website**: © 2026 Dwebcoding
- **Codice**: Open source (MIT License)

### Compliance
- **GDPR**: Privacy policy template inclusa
- **Cookie Law**: Cookie policy template
- **Accessibilità**: WCAG 2.1 AA

## Sviluppatore

**DWeb-code**
- Email: [d.webcoding@gmail.com]
- GitHub: [DWeb-code](https://github.com/DWeb-code)
- LinkedIn: [dwebcoding](https://www.linkedin.com/in/dwebcoding/)

## Licenza
Questo progetto è rilasciato sotto licenza **MIT**. Vedi il file `LICENSE` per i dettagli.

---
