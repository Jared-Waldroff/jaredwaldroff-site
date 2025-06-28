# Jared Waldroff DJ Website

A professional, single-page website for DJ services with integrated music platform embeds and contact functionality.

## Quick Start

### 1. GitHub Pages Setup

1. Create a new repository named `jaredwaldroff-site`
2. Upload all files to the repository
3. Go to **Settings** → **Pages**
4. Under **Source**, select "Deploy from a branch"
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### 2. Custom Domain Setup (GoDaddy)

1. In your GitHub repo, go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `jaredwaldroff.com`
3. Check **Enforce HTTPS**

In your GoDaddy DNS settings:
- Add **CNAME** record: `www` → `yourgithubusername.github.io`
- Add **A** records for apex domain:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

## Customization Guide

### Adding Your Photo
1. Add your photo to the `images/` folder as `jared-photo.jpg`
2. Recommended size: 600x600px, square format
3. Keep file size under 1MB for fast loading

### Music Platform Embeds

#### Spotify
1. Go to your Spotify playlist/track
2. Click **Share** → **Embed**
3. Copy the iframe code
4. Replace the placeholder Spotify embed in `index.html` (around line 45)

#### SoundCloud
1. Go to your SoundCloud track/playlist
2. Click **Share** → **Embed**
3. Choose your preferred size (recommend 300px height)
4. Copy the iframe code
5. Replace the placeholder SoundCloud embed in `index.html` (around line 53)

#### Mixcloud
1. Go to your Mixcloud show
2. Click the **Share** button
3. Copy the embed code
4. Replace the placeholder Mixcloud embed in `index.html` (around line 61)

### Contact Form Setup

1. Sign up for a free [Formspree](https://formspree.io) account
2. Create a new form
3. Copy your form endpoint URL
4. In `index.html`, replace `your-form-id` with your actual Formspree form ID (line 104)

Example: `action="https://formspree.io/f/xzbqvnyr"`

### Updating Contact Information
In `index.html`, update these sections:
- **Email**: Line 96 - Replace `booking@jaredwaldroff.com`
- **Phone**: Line 97 - Replace `(123) 456-7890`

### Customizing Colors and Styling

All colors and main styling variables are at the top of `css/style.css`:

```css
:root {
    --primary-color: #1a1a1a;      /* Main dark color */
    --secondary-color: #f39c12;    /* Orange accent */
    --accent-color: #e74c3c;       /* Red accent */
    /* ... more variables */
}
```

Change these values to customize your entire site's color scheme.

## Content Updates

### Services Section
Edit the services in `index.html` around lines 70-85. Each service has:
- **Title** (`<h3>`)
- **Description** (`<p>`)

### Hero Section Text
Update your bio and tagline in `index.html`:
- **Main heading**: Line 33
- **Bio paragraph**: Line 34
- **Header tagline**: Line 16

## File Structure
```
jaredwaldroff-site/
├── index.html          # Main website file
├── css/
│   └── style.css      # All styling
├── js/
│   └── main.js        # Interactive features
├── images/
│   └── jared-photo.jpg # Your profile photo
└── README.md          # This file
```

## Features Included

- **Responsive design** - Works on all devices
- **Smooth scrolling** navigation
- **Contact form** with validation
- **Music platform embeds** for Spotify, SoundCloud, Mixcloud
- **Professional styling** with easy customization
- **SEO optimized** with proper meta tags
- **Fast loading** with optimized code

## Maintenance

### Regular Updates
1. **Music embeds** - Update with your latest tracks/mixes
2. **Photo** - Replace with current professional photos
3. **Services** - Add or modify services as needed
4. **Contact info** - Keep phone/email current

### Adding New Sections
To add new sections:
1. Add HTML in `index.html`
2. Add corresponding CSS in `style.css`
3. Update navigation if needed

## Troubleshooting

### Site Not Loading
- Check GitHub Pages settings
- Verify domain configuration in GoDaddy
- Wait 24-48 hours for DNS propagation

### Forms Not Working
- Verify Formspree setup
- Check form action URL
- Test with a different email

### Embeds Not Showing
- Verify embed codes are correct
- Check platform privacy settings
- Ensure tracks/playlists are public

## Support

For technical issues:
- Check GitHub Pages documentation
- Verify all file paths are correct
- Test locally before uploading changes

---

**© 2025 Jared Waldroff. Professional DJ Website Template.**
