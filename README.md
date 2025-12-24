# CYBER_BLOG

A minimalist retro cyberpunk blog built with React and Vite, inspired by terminal aesthetics and cyberpunk design principles.

## Features

- **Minimalist Design**: Clean, focused interface with no unnecessary chrome
- **Cyberpunk Aesthetics**: Hot pink/cyan color scheme with glassmorphism effects
- **Terminal-Inspired**: Command line style interface elements
- **Retro Computing**: Monospace fonts and terminal-style navigation
- **Responsive**: Works on all screen sizes with adaptive grid layouts
- **Fast**: Built with Vite for lightning-fast development and builds

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd retro-cyber-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

The blog will be available at `http://localhost:5173/`

### Building for Production

```bash
# Build the static site
npm run build

# Preview the production build
npm run preview
```

## Adding New Posts

Posts are stored in `src/data/posts.js`. Each post object has the following structure:

```javascript
{
  slug: 'unique-post-slug',
  title: 'Post Title',
  excerpt: 'Brief description for the homepage',
  content: '<p>Full HTML content of the post</p>',
  date: '2024-12-01',
  tags: ['tag1', 'tag2', 'optional']
}
```

### Adding a New Post

1. Open `src/data/posts.js`
2. Add a new post object to the array
3. Use a unique `slug` for the URL
4. Write your post content in HTML format
5. Posts are automatically sorted by date (newest first)

## Customization

### Colors

The color scheme is defined in CSS custom properties in `src/style.css`:

```css
:root {
  --cyan: #ff69b4;        /* Hot pink accent */
  --blue-bright: #ff1493; /* Bright pink for links */
  --bg: #0b0b0c;          /* Dark background */
  --ink: #c8d0d4;         /* Light text */
}
```

### Fonts

- **Display**: Workbench (for headers)
- **Body**: Doto (monospace for terminal feel)

### Components

- `Navigation.jsx`: Sidebar navigation with active state
- `Header.jsx`: Main blog header with terminal effect
- `Home.jsx`: Homepage with post grid
- `BlogPost.jsx`: Individual post view with markdown support

## Deployment

### Static Hosting

The build process creates a static site in the `dist/` folder that can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

### Example: GitHub Pages

```bash
# Build
npm run build

# Deploy dist/ folder to your gh-pages branch
```

## Browser Support

- Modern browsers (Chrome 88+, Firefox 85+, Safari 14+)
- Uses CSS features like backdrop-filter and CSS Grid
- Degrades gracefully on older browsers

## License

MIT License - feel free to use and modify for your own projects.

---

// TRANSMISSION_COMPLETE