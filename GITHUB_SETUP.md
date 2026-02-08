# GitHub Repository Setup Guide

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right
3. Select "New repository"
4. Repository name: `himalayan-heritage-tea` (or your preferred name)
5. Description: "Website for Himalayan Heritage Wellness UK Limited - 150-year Kangra Valley tea legacy"
6. Choose **Public** (for free GitHub Pages) or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Himalayan Heritage Tea website"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/himalayan-heritage-tea.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify Upload

1. Go to your repository on GitHub
2. You should see all your files
3. The repository is now ready for deployment!

## Step 4: Deploy to Vercel/Netlify

### Option A: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your `himalayan-heritage-tea` repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Your site is live! 🎉

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Your site is live! 🎉

## Future Updates

Whenever you make changes:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

Vercel/Netlify will automatically deploy your updates!

## Troubleshooting

**If you get authentication errors:**
- Use GitHub Desktop (easier for beginners)
- Or set up SSH keys
- Or use Personal Access Token

**If files are too large:**
- Check `.gitignore` is working
- Make sure `node_modules` and `dist` are ignored
