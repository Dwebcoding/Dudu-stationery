# Cartoleria Dudù - Website

A modern and responsive website for a local stationery shop, combining welcoming design with professional functionality.

![Website Preview](https://img.shields.io/badge/Status-Complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Description

Complete website for **Cartoleria Dudù**, a modern stationery shop with artisanal identity. The project features a welcoming and colorful design that reflects the brand's personality, with comprehensive functionality to showcase products, services, and business information.

## Key Features

### Design & UX
- **Responsive design** - Optimized for desktop, tablet, and mobile
- **Harmonious color palette** - Sage green, cream, and warm coral
- **Modern typography** - Playfair Display + Poppins combination
- **Smooth animations** - CSS transitions and scroll animations
- **Custom SVG icons** - Scalable vector icon system

### Functionality
- **Mobile hamburger menu** - Mobile-optimized navigation
- **Validated contact form** - Client-side JavaScript validation
- **Dynamic product filters** - Filter system for product categories
- **On-scroll animations** - Elements animate during scroll
- **Multilingual system** - Base for Italian/English expansion

### Architecture
- **Modular code** - Organized and commented CSS and JavaScript
- **SEO optimized** - Meta tags, semantic structure, performance
- **Accessibility** - Contrasts, focus states, keyboard navigation
- **Performance** - Optimized CSS, vector images, minified code

## Technologies Used

### Frontend Core
- **HTML5** - Semantic and accessible structure
- **CSS3** - Advanced styling with Grid, Flexbox, Custom Properties
- **JavaScript ES6+** - Interactivity and form validation

### Libraries & Frameworks
- **Google Fonts** - Playfair Display & Poppins
- **SVG Icons** - Custom vector icon system
- **CSS Grid & Flexbox** - Modern responsive layout

### Development Tools
- **CSS Custom Properties** - Variable system for colors and spacing
- **Intersection Observer API** - Performant scroll animations
- **Local Storage** - User preference storage
- **Form Validation API** - Native + custom form validation

## Project Structure

```
Dudu Stationery/
├── index.html              # Main homepage
├── chi-siamo.html          # About us page
├── prodotti.html           # Products catalog
├── servizi.html            # Services offered
├── contatti.html           # Contact form and info
├── 📁 css/
│   └── style.css           # Main stylesheet (15KB)
├── 📁 js/
│   └── main.js             # Main JavaScript (12KB)
├── 📁 icons/                  # Custom SVG icons
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
└── README.md               # Project documentation
```

## Installation and Usage

### Requirements
- Modern browser (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Local web server (optional for development)

### Quick Setup
1. **Clone or download** the repository
```bash
git clone https://github.com/DWeb-code/dudu-stationery.git
cd dudu-stationery
```

2. **Open the project**
   - Open `index.html` directly in browser, or
   - Use a local server (Live Server, Python, Node.js)

3. **For local development**
```bash
# With Python 3
python -m http.server 8000

# With Node.js (http-server)
npx http-server

# With PHP
php -S localhost:8000
```

4. **Visit** `http://localhost:8000`

## Pages and Sections

### Homepage (`index.html`)
- **Hero Section** - Main presentation with CTA
- **What You Find at Dudù** - Main product categories
- **Main Services** - Services overview
- **Bestsellers** - Featured products
- **Call to Action** - Contact invitation

### About Us (`chi-siamo.html`)
- **Company history** - Foundation story
- **Company values** - Quality, creativity, customer care
- **Team** - Staff presentation
- **Timeline** - Important company milestones
- **Numbers** - Statistics and results

### Products (`prodotti.html`)
- **Dynamic filters** - By product category
- **Product grid** - Responsive layout with prices
- **Categories**: School supplies, Creative, Gifts, Printing
- **How to order** - Purchase process

### Services (`servizi.html`)
- **Digital printing** - Details and prices
- **Photocopies** - Reproduction services
- **Binding** - Professional services
- **Custom items** - Custom and merchandising
- **Process** - How the service works

### Contact (`contatti.html`)
- **Contact form** - JavaScript validated
- **Information** - Address, phone, email, hours
- **Map** - Google Maps integration
- **FAQ** - Frequently asked questions
- **Social media** - Social profile links

## Design System

### Color Palette
```css
--primary: #3B7C59;     /* Sage green */
--secondary: #FFF6E5;   /* Light cream */
--accent: #E07A5F;      /* Warm coral */
--dark: #2C2C2C;        /* Dark gray */
--light: #FFFBF7;       /* Warm white */
```

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Poppins (sans-serif, readable)
- **Hierarchy**: H1 (3rem) → H2 (2.2rem) → H3 (1.5rem)

### Components
- **Buttons**: Primary/secondary styles with hover effects
- **Cards**: Flexible layout with shadows and transitions
- **Forms**: Visual validation and error/success states
- **Icons**: Scalable and customizable SVG system

## Responsive Design

### Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

### Mobile Optimizations
- Animated hamburger menu
- Touch-friendly buttons (44px min)
- Readable text (16px+ on mobile)
- Retina-optimized images

## Performance

### Optimizations
- **CSS**: Minified and optimized (15KB)
- **JavaScript**: Modular and efficient (12KB)
- **Images**: Vector SVG for icons
- **Fonts**: Google Fonts with display=swap
- **Animations**: CSS transforms for performance

### Target Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## Customization

### Colors
Modify CSS variables in `style.css`:
```css
:root {
    --primary: #YOUR_COLOR;
    --accent: #YOUR_COLOR;
    /* ... */
}
```

### Content
- Text: Modify directly in HTML files
- Images: Replace SVG icons in `/icons/` folder
- Contact: Update info in `contatti.html` and footer

### Functionality
- Forms: Configure endpoint in `main.js`
- Languages: Expand `translations` object
- Animations: Modify timing in CSS

## SEO and Accessibility

### SEO
- **Meta tags** optimized for each page
- **Semantic structure** HTML5
- **Schema markup** for local business
- **Sitemap** and robots.txt ready

### Accessibility
- **Contrast** WCAG AA compliant
- **Keyboard navigation** complete
- **Screen reader** friendly
- **Focus indicators** visible

## Legal Information

### Copyright
- **Content**: © 2026 Cartoleria Dudù
- **Website**: © 2026 DWeb-code
- **Code**: Open source (MIT License)

### Compliance
- **GDPR**: Privacy policy template included
- **Cookie Law**: Cookie policy template
- **Accessibility**: WCAG 2.1 AA

## Developer

**DWeb-code**
- Email: [d.webcoding@gmail.com]
- GitHub: [@DWeb-code](https://github.com/DWeb-code)
- LinkedIn: [dwebcoding](https://www.linkedin.com/in/dwebcoding/)

## License
This project is released under **MIT** license. See the `LICENSE` file for details.

---