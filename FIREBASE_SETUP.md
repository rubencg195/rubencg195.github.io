# Firebase Hosting Setup Guide

This document provides a quick reference for setting up Firebase Hosting for the portfolio project.

## Quick Start

### 1. Prerequisites
- Node.js 18+ installed
- npm installed
- Git configured
- Firebase account

### 2. Global Firebase Tools Installation

```bash
npm install firebase-tools -g
firebase --version
```

### 3. Authenticate with Firebase

```bash
firebase login
```

This opens your browser. Log in with your Firebase account and grant permissions.

### 4. Create a Firebase Project

1. Visit [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"**
3. Enter project name: `rubencg195-portfolio` (or your choice)
4. Choose region (e.g., `us-central1`)
5. Enable or disable Google Analytics (optional)
6. Click **"Create project"**

### 5. Initialize Firebase in Your Project

From the project root:

```bash
firebase init hosting
```

**Prompts and Answers:**
```
? What do you want to use as your public directory? → build
? Configure as a single-page app (rewrite all urls to /index.html)? → Yes
? Set up automatic builds and deploys with GitHub? → No
? File build/index.html already exists. Overwrite? → No
```

### 6. Update `.firebaserc`

After initialization, edit `.firebaserc`:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  },
  "targets": {},
  "etags": {}
}
```

Replace `your-firebase-project-id` with your actual Firebase project ID from:
- Firebase Console → Project Settings → Project ID

### 7. Verify `firebase.json`

The file should already be configured correctly:

```json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "index.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=0, must-revalidate"
          }
        ]
      }
    ]
  }
}
```

## Deployment

### First Time Deployment

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

### Regular Deployments (Both Firebase + GitHub Pages)

```bash
# Make changes, commit
git add .
git commit -m "Your changes"
git push origin master

# Deploy to both Firebase and GitHub Pages
npm run deploy
```

### Individual Deployments

```bash
# Deploy only to Firebase
npm run deploy:firebase

# Deploy only to GitHub Pages
npm run deploy:github

# Build only
npm run build
```

## Verify Deployment

### Check Firebase Hosting

1. Visit Firebase Console → Your Project → Hosting
2. You'll see:
   - Deployed version with timestamp
   - Hosting URL: `https://your-project-id.web.app`
   - Alternative URL: `https://your-project-id.firebaseapp.com`

### Check GitHub Pages

1. Visit your GitHub Pages URL: `https://rubencg195.github.io`
2. Both sites should show the same content

## Custom Domain (Optional)

### Add Custom Domain to Firebase

1. Firebase Console → Hosting → Connect Domain
2. Enter your domain (e.g., `yourdomain.com`)
3. Follow verification steps
4. Add DNS records as instructed

### Point GitHub Pages to Custom Domain

1. In repository, create `CNAME` file in `public/` folder:
   ```
   yourdomain.com
   ```
2. In GitHub Settings → Pages, enter your custom domain

## Troubleshooting

### Deploy Fails with "public directory doesn't exist"

```bash
# Build first
npm run build

# Then deploy
npm run deploy:firebase
```

### Firebase Project ID Not Found

```bash
# List your projects
firebase list

# Set default project
firebase use your-project-id
```

### Permission Denied

```bash
# Re-authenticate
firebase logout
firebase login
```

### Clear Firebase Cache

```bash
# Remove Firebase directories and reinitialize
rm -rf .firebase
firebase init hosting
```

## Project IDs Reference

Your Firebase project IDs can be found:

1. **Firebase Console**: Project Settings (⚙️) → Project ID
2. **`.firebaserc` file**: Under `projects.default`
3. **Command line**:
   ```bash
   firebase projects:list
   firebase projects:info
   ```

## Security Notes

- ✅ `.firebaserc` is in `.gitignore` on public repos (update manually with your project ID)
- ✅ `.firebase/` directory is ignored
- ✅ Never commit `.firebase/` or sensitive credentials
- ✅ Use environment variables for sensitive data

## Next Steps

1. ✅ Set up Firebase project
2. ✅ Initialize Firebase locally
3. ✅ Build the project: `npm run build`
4. ✅ Deploy: `npm run deploy:firebase`
5. ✅ Visit your Firebase hosting URL
6. ✅ Verify both GitHub Pages and Firebase work

## Support

For issues:
- Firebase Docs: https://firebase.google.com/docs/hosting
- Firebase CLI Reference: https://firebase.google.com/docs/cli
- Project Issues: Check GitHub repository
