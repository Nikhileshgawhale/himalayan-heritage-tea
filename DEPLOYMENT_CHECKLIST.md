# Pre-Deployment Checklist ✅

Use this checklist before deploying your website to ensure everything is ready.

## Code Quality

- [ ] All components render without errors
- [ ] No console errors or warnings
- [ ] Build completes successfully (`npm run build`)
- [ ] Preview works correctly (`npm run preview`)
- [ ] All images load correctly
- [ ] All links work (internal and external)
- [ ] Contact form functions properly

## Content

- [ ] Update `sitemap.xml` with your actual domain
- [ ] Update `robots.txt` with your actual domain
- [ ] Update meta tags in `index.html` with your domain
- [ ] Replace "yourdomain.com" in all files with your actual domain
- [ ] Verify all contact information is correct
- [ ] Check all PDFs and images are in `public/` folder
- [ ] Verify business hours and company info

## SEO & Performance

- [ ] Meta descriptions are filled in
- [ ] Open Graph tags are updated
- [ ] Twitter card tags are updated
- [ ] Sitemap.xml is updated
- [ ] Robots.txt is configured
- [ ] Images are optimized (if needed)
- [ ] Fonts are loading correctly

## Testing

- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Test contact form submission
- [ ] Test all navigation links
- [ ] Test gallery modal functionality
- [ ] Test PDF downloads
- [ ] Test video playback
- [ ] Test on slow network connection

## Security

- [ ] No sensitive data in code
- [ ] Environment variables are in `.env` (not committed)
- [ ] `.gitignore` includes `.env` files
- [ ] No API keys exposed

## Deployment Setup

- [ ] Git repository is initialized
- [ ] Code is pushed to GitHub
- [ ] Deployment platform is configured (Vercel/Netlify)
- [ ] Domain is purchased (if using custom domain)
- [ ] DNS is configured correctly
- [ ] SSL certificate is active (auto on Vercel/Netlify)

## Post-Deployment

- [ ] Website loads correctly
- [ ] HTTPS is working
- [ ] All pages are accessible
- [ ] Contact form sends emails correctly
- [ ] Analytics is tracking (if enabled)
- [ ] Test on multiple devices
- [ ] Share with team for final review

## Optional Enhancements

- [ ] Add Google Analytics
- [ ] Set up form backend (Formspree, EmailJS, etc.)
- [ ] Add social media links
- [ ] Create favicon set (favicon.ico, apple-touch-icon, etc.)
- [ ] Add structured data (JSON-LD)
- [ ] Set up monitoring (UptimeRobot, etc.)

---

## Quick Commands

```bash
# Test build
npm run build
npm run preview

# Check for issues
npm run build 2>&1 | grep -i error

# Verify file sizes
du -sh dist/

# Check git status
git status
```

---

**Ready to deploy?** Follow the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)!
