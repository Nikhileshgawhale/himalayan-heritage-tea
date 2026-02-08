# Deployment Guide for Himalayan Heritage Tea Website

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - FREE & Easiest)
**Best for:** Quick deployment, automatic HTTPS, custom domains

#### Steps:
1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - It will ask if you want to link to existing project (say no for first time)
   - It will detect Vite automatically

4. **Or use Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

**Free tier includes:**
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Automatic deployments on git push
- ✅ Global CDN
- ✅ 100GB bandwidth/month

---

### Option 2: Netlify (FREE - Great Alternative)
**Best for:** Simple drag-and-drop or Git integration

#### Steps:
1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Option A - Drag & Drop:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for free
   - Drag the `dist` folder to Netlify dashboard
   - Your site is live!

3. **Option B - Git Integration:**
   - Push your code to GitHub
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

**Free tier includes:**
- ✅ Free SSL
- ✅ Custom domains
- ✅ 100GB bandwidth/month
- ✅ Form handling (useful for your contact form!)

---

### Option 3: GitHub Pages (FREE)
**Best for:** If you already use GitHub

#### Steps:
1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js:**
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/' // Replace with your GitHub repo name
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: gh-pages branch
   - Your site will be at: `username.github.io/repo-name`

**Note:** Requires public repository for free tier

---

### Option 4: Cloudflare Pages (FREE)
**Best for:** Fast global CDN, great performance

#### Steps:
1. Push code to GitHub/GitLab
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Sign up/login
4. Click "Create a project"
5. Connect repository
6. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
7. Click "Save and Deploy"

**Free tier includes:**
- ✅ Unlimited bandwidth
- ✅ Free SSL
- ✅ Custom domains
- ✅ Fast global CDN

---

## 🌐 Getting a Domain Name

### Option 1: Namecheap (Recommended)
**Price:** ~$10-15/year for .com domains

1. Go to [namecheap.com](https://namecheap.com)
2. Search for your desired domain
3. Add to cart and checkout
4. After purchase, go to Domain List > Manage
5. Add DNS records or transfer to your hosting provider

### Option 2: Google Domains
**Price:** ~$12/year for .com domains

1. Go to [domains.google](https://domains.google)
2. Search and purchase domain
3. Easy integration with various services

### Option 3: Cloudflare Registrar
**Price:** At-cost pricing (often cheapest)

1. Go to [cloudflare.com](https://cloudflare.com)
2. Register domain through Cloudflare
3. Free privacy protection included
4. Easy to connect to Cloudflare Pages

### Option 4: GoDaddy
**Price:** ~$12-20/year (often has first-year discounts)

1. Go to [godaddy.com](https://godaddy.com)
2. Search and purchase
3. Popular but can be more expensive after first year

---

## 🔗 Connecting Domain to Your Deployment

### For Vercel:
1. Go to your project dashboard
2. Click "Settings" > "Domains"
3. Add your domain
4. Follow DNS instructions:
   - Add A record: `@` → `76.76.21.21`
   - Or CNAME: `www` → `cname.vercel-dns.com`
5. Wait for DNS propagation (5-60 minutes)

### For Netlify:
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS instructions:
   - Add A record: `@` → Netlify IP
   - Or CNAME: `www` → `your-site.netlify.app`
5. SSL certificate auto-provisions

### For Cloudflare Pages:
1. Go to Pages > Your project > Custom domains
2. Add domain
3. Update DNS at your registrar:
   - Point to Cloudflare nameservers (if using Cloudflare DNS)
   - Or add CNAME record

---

## 📋 Pre-Deployment Checklist

- [ ] Test the build locally: `npm run build`
- [ ] Check all images load correctly
- [ ] Test contact form functionality
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check browser console for errors
- [ ] Optimize images (if needed)
- [ ] Add analytics (optional - Google Analytics)

---

## 🎯 Recommended Complete Setup (Easiest Path)

1. **Deploy to Vercel:**
   - Push code to GitHub
   - Connect to Vercel
   - Get free subdomain: `your-site.vercel.app`

2. **Buy Domain:**
   - Purchase from Namecheap or Cloudflare
   - Connect to Vercel (takes 5 minutes)

3. **Total Cost:** ~$10-15/year (just domain)

---

## 🔧 Additional Enhancements (Optional)

### Add Analytics:
```bash
npm install @vercel/analytics
```

### Add Contact Form Backend:
- Use Netlify Forms (if on Netlify)
- Or Formspree.io (free tier available)
- Or EmailJS (free tier available)

### SEO Optimization:
- Already included in your HTML meta tags
- Consider adding sitemap.xml
- Add robots.txt

---

## 📞 Need Help?

Common issues:
- **Build fails:** Check Node version (should be 18+)
- **Images not loading:** Ensure paths start with `/`
- **404 errors:** Check base path in vite.config.js
- **Domain not connecting:** Wait 24-48 hours for DNS propagation

---

## 🚀 Quick Start Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (after installing CLI)
vercel

# Deploy to Netlify (after installing CLI)
netlify deploy --prod
```
