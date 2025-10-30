# Interactive Portfolio Website

A modern, interactive portfolio website built with pure HTML, CSS, and JavaScript. Features stunning animations, responsive design, and advanced front-end techniques perfect for competition submissions.

## Features

- **Animated Particle Background** - Interactive particle network using Particles.js
- **Typewriter Effect** - Dynamic text animation cycling through multiple roles
- **Smooth Scroll Animations** - Elements reveal on scroll using Intersection Observer API
- **Responsive Navigation** - Mobile-friendly hamburger menu with smooth transitions
- **Project Showcase** - Interactive cards with hover effects and overlays
- **Animated Skills Section** - Progress bars with percentage animations
- **Contact Form** - Simulated form submission with feedback
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Modern Design** - Gradient colors, smooth transitions, and micro-interactions

## Technologies Used

- HTML5 - Semantic markup and structure
- CSS3 - Flexbox, Grid, animations, and custom properties
- JavaScript (ES6+) - Intersection Observer, DOM manipulation, event handling
- Particles.js - Animated background effects
- Font Awesome - Icon library
- Google Fonts (Poppins) - Typography

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Local Development

To run this website locally:

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. Open `index.html` in your browser, or use a simple HTTP server:
   ```bash
   # Using Python 3
   python -m http.server 5000
   
   # Using Node.js (if you have http-server installed)
   npx http-server -p 5000
   ```

3. Open your browser and navigate to `http://localhost:5000`

## Deployment

### Deploy to Vercel

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Initialize it without README (since you already have one)

2. **Push Your Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Competition portfolio website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in (you can use your GitHub account)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a static site
   - Click "Deploy"
   - Your site will be live in seconds!

4. **Get Your Live Link**
   - After deployment, Vercel will provide a URL like: `https://your-project.vercel.app`
   - Use this link for your competition submission

### Deploy to Netlify

1. **Create a GitHub Repository** (same as Vercel step 1-2 above)

2. **Deploy to Netlify**
   - Go to [Netlify](https://www.netlify.com)
   - Sign up or log in
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: (leave empty or put `.`)
   - Click "Deploy site"

3. **Get Your Live Link**
   - After deployment, Netlify will provide a URL like: `https://your-project.netlify.app`
   - You can customize this URL in site settings
   - Use this link for your competition submission

## Customization

To personalize this portfolio:

1. **Update Personal Information** - Edit `index.html`:
   - Change name from "Alex Johnson" to your name
   - Update email, phone, location in contact section
   - Modify project descriptions and technologies

2. **Change Colors** - Edit `styles.css` CSS variables:
   ```css
   :root {
       --primary-color: #6366f1;
       --secondary-color: #8b5cf6;
       --accent-color: #ec4899;
       /* Modify these to match your brand */
   }
   ```

3. **Add Your Projects** - Replace placeholder projects with your actual work
4. **Update Skills** - Modify the skills percentages and add/remove technologies
5. **Add Your Social Links** - Update the social media links in the contact section

## Competition Submission Checklist

- [ ] Customized all personal information
- [ ] Updated project showcase with your work
- [ ] Tested on multiple devices (desktop, tablet, mobile)
- [ ] Verified all animations work smoothly
- [ ] Pushed code to GitHub repository
- [ ] Deployed to Vercel or Netlify
- [ ] Tested the live hosted link
- [ ] GitHub repository is public
- [ ] README.md is updated with your information

## Submission Links

When submitting for the competition, provide:
1. **GitHub Repository**: `https://github.com/your-username/your-repo-name`
2. **Live Website**: `https://your-project.vercel.app` or `https://your-project.netlify.app`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- CSS animations using GPU acceleration
- Efficient scroll event handling with Intersection Observer
- Optimized particle count for smooth performance
- Minimal external dependencies
- Fast load times

## License

This project is open source and available for use in competitions and personal portfolios.

## Credits

- Design & Development: Built with HTML, CSS, and JavaScript
- Particles.js: [particles.js](https://github.com/VincentGarreau/particles.js/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)

---

**Good luck with your competition submission!** 🚀
