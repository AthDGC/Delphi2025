# Deployment Guide

## Deploy to GitHub Pages

### Quick Deploy (Automatic)

1. **Create GitHub Repository**
   ```bash
   # On GitHub.com, create a new repository named: delphi2025
   # Organization: AthDiaCorpus
   # Make it public
   ```

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Digital Diachrony Workshop 2025"
   git branch -M main
   git remote add origin https://github.com/AthDiaCorpus/delphi2025.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on every push!

4. **Your Site Will Be Live At:**
   https://athdiacorpus.github.io/delphi2025

### Manual Deploy (Alternative)

If you prefer manual deployment:

```bash
# Build the site
npm run build

# The static files are in the 'out' directory
# Deploy the 'out' folder to any static hosting service
```

### Deployment Options

- **GitHub Pages** (Recommended - Free)
- **Netlify** - Drag & drop the `out` folder
- **Vercel** - Connect GitHub repo
- **Any static host** - Upload `out` folder

### Update the Site

Simply push changes to the main branch:

```bash
git add .
git commit -m "Update workshop information"
git push
```

The GitHub Action will automatically rebuild and redeploy!

---

## Troubleshooting

### 404 Error
- Make sure GitHub Pages is enabled in Settings
- Check that the source is set to "GitHub Actions"
- Wait 1-2 minutes for deployment to complete

### Build Fails
- Run `npm run build` locally first to check for errors
- Make sure all dependencies are in package.json
- Check the Actions tab on GitHub for error logs

### Styling Issues
- Clear browser cache
- Check that all Tailwind classes are properly configured
- Verify postcss.config.js and tailwind.config.js are present

---

**Note:** The `.nojekyll` file in the `public` folder ensures GitHub Pages serves the site correctly with Next.js routing.
