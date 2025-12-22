# Daniella Williams - Professional Portfolio

A stunning, interactive portfolio website built with TypeScript and modern web technologies, showcasing Daniella Williams' professional journey as a Growth and Identity Consultant.

## Features

- **Fully Responsive Design**: Works beautifully on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Beautiful scroll animations and interactive hover effects
- **Modern Tech Stack**: Built with TypeScript, Vite, and vanilla CSS
- **Professional Sections**:
  - Hero section with dynamic stats
  - Brands carousel with smooth sliding animation
  - About section with professional story
  - Timeline-based experience showcase
  - Projects & initiatives
  - Speaking engagements
  - Certifications & training
  - Services offered
  - Contact section with direct links

## Brand Colors

- **Gold**: `#FFD700` (Primary), `#B88746` (Secondary)
- **Red**: `#FF0800` (Primary), `#800000` (Secondary)
- **Black**: `#191919` (Primary), `#050505` (Secondary)
- **White**: `#FFFFFF`

## Project Structure

```
Daniell-portfolio/
├── public/
│   ├── images/
│   │   ├── brands/        # Brand logo images
│   │   └── profile/       # Daniella's profile images
│   └── TDW Brand - 10.PNG # Main logo
├── src/
│   ├── components/        # TypeScript component classes
│   │   ├── Navbar.ts
│   │   ├── Hero.ts
│   │   ├── Brands.ts
│   │   ├── About.ts
│   │   ├── Experience.ts
│   │   ├── Projects.ts
│   │   ├── Speaking.ts
│   │   ├── Certifications.ts
│   │   ├── Services.ts
│   │   ├── Contact.ts
│   │   └── Footer.ts
│   ├── utils/
│   │   ├── dom.ts         # DOM helper functions
│   │   └── animations.ts  # Animation utilities
│   ├── types/
│   │   └── index.ts       # TypeScript interfaces
│   └── main.ts            # Main application entry
├── styles.css             # Global styles
├── index.html             # HTML template
├── package.json
├── tsconfig.json
└── vite.config.js

```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Daniell-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Key Interactive Features

### 1. **Logo Interaction**
- Clicking the logo in the navbar opens WhatsApp directly

### 2. **Smooth Scrolling**
- All navigation links smoothly scroll to their respective sections

### 3. **Animated Brand Carousel**
- Infinite loop animation showcasing brands Daniella has worked with
- Hover effects that bring logos to full color

### 4. **Timeline Experience**
- Alternating timeline layout for professional experience
- Hover effects that highlight each position

### 5. **Floating Particles**
- Subtle background particle animation for visual interest

### 6. **Custom Cursor**
- Unique cursor effect (desktop only)

### 7. **Contact Links**
- Direct clickable links to:
  - WhatsApp: +234 916 040 4063
  - Phone: Call directly
  - Email: sheisdaniellawilliams@gmail.com

## Technologies Used

- **TypeScript**: Type-safe JavaScript
- **Vite**: Lightning-fast build tool
- **CSS3**: Modern styling with animations
- **Vanilla JavaScript**: No framework dependencies for optimal performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Optimized Images**: All images are served from the public directory
- **Code Splitting**: Vite automatically splits code for optimal loading
- **CSS Optimization**: Minified and optimized CSS in production
- **TypeScript Compilation**: Compiled to efficient JavaScript

## Customization

### Updating Content

1. **Profile Images**: Add images to `public/images/profile/`
2. **Brand Logos**: Add logos to `public/images/brands/`
3. **Experience Data**: Edit `src/components/Experience.ts`
4. **Projects**: Edit `src/components/Projects.ts`
5. **Speaking Engagements**: Edit `src/components/Speaking.ts`

### Styling

- Global styles are in `styles.css`
- Colors are defined as CSS custom properties in `:root`
- Responsive breakpoints are at 768px and 968px

## Contact

For any questions or support, contact:

- **Email**: sheisdaniellawilliams@gmail.com
- **WhatsApp**: +234 916 040 4063
- **Location**: Nigeria (Available for Global Engagements)

## License

© 2025 Daniella Williams. All rights reserved.

---

Built with ❤️ using TypeScript and modern web technologies.
