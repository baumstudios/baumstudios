# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static website for Baum Studios, a spatial practice/architecture firm founded by Sara Blekić in Zagreb, Croatia. The site is built with vanilla HTML/CSS and hosted on GitHub Pages with a custom domain (baumstudios.com).

## Repository Structure

```
baumstudios/
├── index.html          # Main HTML file with video background and content
├── style.css           # All styling including responsive design
├── favicon*.png        # Favicon files in different sizes
├── favicon.ico         # Main favicon
├── CNAME              # GitHub Pages custom domain configuration
└── README.md          # GitHub profile README
```

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (inline)
- **Video Hosting**: Vimeo (embedded background videos)
- **Fonts**: Google Fonts (Karla)
- **Hosting**: Vercel (with automatic deployments)
- **Domain**: Custom domain via Vercel (baumstudios.com)

## Common Development Commands

### Local Development

To preview the site locally:
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if http-server is installed globally)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open http://localhost:8000 in your browser.

### Git Operations & Deployment

```bash
# Check current status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Update description"

# Push to main branch (automatically deploys to production)
git push origin main

# Create a feature branch for testing (creates preview deployment)
git checkout -b feature-name
git push origin feature-name
# Preview URL will be generated automatically
```

### Testing Responsive Design

The site has specific breakpoints for responsive design:
- Desktop: > 768px
- Tablet: 768px
- Mobile: 480px
- Small Mobile: 380px

Test at these viewport widths to ensure proper layout.

## Architecture & Key Features

### Video Background System
- Uses Vimeo embedded videos with background autoplay
- Horizontal scroll container with 4 videos
- Scroll-snap for smooth video transitions
- Custom aspect ratio handling for different screen sizes

### Content Overlay Structure
- Fixed positioning overlay system
- Diagonal tagline with CSS rotation
- Dynamic text switching based on scroll position (JavaScript)
- Bottom-aligned brand and contact information

### Responsive Design
- Mobile-first approach with media queries
- Flexible font sizing using rem units
- Adjusted layouts for different screen sizes
- Hidden scrollbars with smooth scrolling

### Key CSS Classes
- `.video-scroll-container`: Horizontal scrolling video container
- `.content-overlay`: Fixed overlay for all text content
- `.brand-title` / `.brand-text`: Dynamic switching content
- `.tagline`: Diagonal centered text
- `.bottom-content`: Footer area with contact info

## Deployment Process

The site is hosted on Vercel with automatic deployments:
- **Production**: Pushes to `main` branch deploy to https://baumstudios.com
- **Preview**: Any other branch creates a preview deployment with a unique URL
- **Instant rollback**: Previous deployments can be instantly restored if needed

### Deployment Workflow
1. Test changes locally using a local server
2. Create a feature branch for testing: `git checkout -b feature-name`
3. Push to get a preview URL: `git push origin feature-name`
4. Test on the preview deployment
5. Merge to main or push directly to main for production
6. Production deploys instantly at https://baumstudios.com

### Vercel CLI Commands
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List recent deployments
vercel ls

# Check domain status
vercel domains ls
```

## Important Considerations

### Video Performance
- Videos are hosted on Vimeo to reduce repository size
- Background parameter ensures autoplay works
- Muted parameter required for autoplay in modern browsers
- Consider video loading times on slower connections

### Browser Compatibility
- Modern CSS features used (flexbox, CSS transforms, scroll-snap)
- Tested on Chrome, Safari, Firefox, Edge
- Webkit-specific scrollbar hiding for Safari
- Touch scrolling enabled for mobile devices

### SEO & Metadata
- Meta description and keywords included for SEO
- Open Graph tags could be added for better social sharing
- Consider adding structured data for business information

## Common Modifications

### Update Contact Information
Edit lines 52-54 in `index.html`:
```html
<a href="mailto:info@baumstudios.com" class="contact-email">info@baumstudios.com</a>
<a href="tel:+385989027051" class="contact-phone">+385 (0) 98 902 70 51</a>
```

### Change Videos
Replace Vimeo video IDs in the iframe src attributes (lines 22-31 in `index.html`).

### Modify Brand Text
Update the brand description on line 49 in `index.html`.

### Adjust Styling
All styles are in `style.css`. Key areas:
- Font sizes: Lines 119-133 (brand), 95-99 (tagline)
- Colors: Uses rgba for transparency
- Spacing: Bottom content positioning at line 103-111
- Mobile breakpoints: Lines 152-243
