# Ruben Chevez - Professional MLOps Portfolio

A modern, professional portfolio website showcasing Machine Learning Operations expertise, built with React, Tailwind CSS, and Material Design principles.

## 🚀 Live Portfolio

**Live Site**: [https://rubencg195.github.io](https://rubencg195.github.io)

## ✨ Features

- **🤖 Advanced MLOps Projects**: AWS Bedrock, Claude 3.7, and cutting-edge AI implementations
- **🎨 Material Design**: Professional FAANG-ready styling with Tailwind CSS
- **📱 Fully Responsive**: Mobile-first design optimized for all devices
- **🔒 Privacy-Focused**: Secure contact methods with hidden personal details
- **⚡ Performance Optimized**: Fast loading with production-grade optimization
- **🧩 Modular Architecture**: Reusable components for easy maintenance
- **🌙 Dark/Light Theme**: Toggle between themes with persistent preference
- **📊 Professional Timeline**: Interactive experience and education sections
- **🔗 Dynamic Project Loading**: Automatic GitHub repository integration

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/) for version control

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/rubencg195/rubencg195.github.io.git
cd rubencg195.github.io
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
src/
├── App.js                      # Main application with routing
├── index.js                    # Application entry point
├── index.css                   # Global styles and Tailwind directives
├── components/
│   ├── index.js                # Central component exports
│   ├── Navbar.js               # Reusable navigation component
│   ├── HeroSection.js          # Flexible hero section component
│   ├── Section.js              # Section wrapper with backgrounds
│   ├── SectionHeader.js        # Consistent section headers
│   ├── Button.js               # Button variants (Primary, Secondary, Action)
│   ├── Projects.js             # Projects grid container
│   ├── ProjectCard.js          # Individual project cards
│   ├── ProjectDetail.js        # Detailed project view with README
│   ├── Timeline.js             # Reusable timeline component
│   ├── ExperienceEducation.js  # Experience and education sections
│   └── UnicodeIcons.js         # Simple emoji-based icons
├── contexts/
│   └── ThemeContext.js         # Global theme management
├── utils/
│   └── githubUtils.js          # GitHub API utilities
└── constants.js                # Configuration and data constants

public/
├── index.html                  # HTML template with SEO meta tags
├── images/
│   └── profile/
│       └── profile.jpeg        # Professional profile image
└── favicon.ico                 # Website icon

tailwind.config.js              # Tailwind CSS configuration with Material Design
postcss.config.js               # PostCSS configuration
package.json                    # Dependencies and deployment scripts
```

## 🎯 Managing Your Portfolio

### Adding New Projects

1. **Add Repository Information** in `src/constants.js`:
```javascript
export const REPOSITORIES = [
  {
    id: 'your-new-project',
    name: 'Your Project Name',
    description: 'Detailed description of your project and its impact',
    url: 'https://github.com/yourusername/your-project',
    owner: 'yourusername',
    repo: 'your-project',
    technologies: ['Technology1', 'Technology2', 'Technology3']
  },
  // ... existing projects
];
```

2. **Project Order**: Projects appear in the order listed (newest first recommended)

3. **README Integration**: The portfolio automatically fetches and displays your GitHub README files

### Updating Professional Experience

1. **Edit Experience Data** in `src/constants.js`:
```javascript
export const EXPERIENCE_FALLBACK = [
  {
    title: 'Your New Position',
    company: 'Company Name',
    period: 'Start Date – End Date'
  },
  // ... existing experience
];
```

2. **Timeline Descriptions**: Update in `src/components/ExperienceEducation.js`:
```javascript
<Timeline 
  data={data.experience}
  title="Professional Experience"
  description="Your professional summary and focus areas"
/>
```

### Updating Education & Certifications

1. **Edit Education Data** in `src/constants.js`:
```javascript
export const EDUCATION_FALLBACK = [
  {
    title: 'Your Degree/Certification',
    institution: 'Institution Name',
    year: 'Year or Date Range'
  },
  // ... existing education
];
```

### Updating Personal Information

1. **Hero Section**: Edit `src/App.js` hero section content
2. **About Section**: Update the professional summary in `src/App.js`
3. **Contact Information**: Modify LinkedIn URL and email in `src/App.js`
4. **Meta Tags**: Update SEO information in `public/index.html`

### LinkedIn Parsing (Optional)

LinkedIn parsing is disabled by default for reliability. To enable:

1. **Enable Parsing** in `src/constants.js`:
```javascript
export const ENABLE_LINKEDIN_PARSING = true;
```

2. **Update Profile URL**:
```javascript
export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/yourprofile/';
```

**Note**: Client-side LinkedIn parsing may be unreliable due to CORS restrictions.

## 🎨 Customization

### Theme & Colors

The portfolio uses a Material Design color system. Customize in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#e3f2fd',   // Light blue
        600: '#1976d2',  // Primary blue
        700: '#1565c0',  // Dark blue
        // ... customize your brand colors
      }
    }
  }
}
```

### Typography & Spacing

- **Font**: Inter font family (loaded from Google Fonts)
- **Spacing**: Material Design spacing scale
- **Typography**: Responsive text sizing with Tailwind utilities

### Adding New Sections

1. **Create Component** in `src/components/`
2. **Import and Use** in `src/App.js`
3. **Follow Pattern**:
```javascript
<Section id="new-section" background="white">
  <SectionHeader 
    title="Section Title"
    description="Section description"
  />
  {/* Your content */}
</Section>
```

## 🧪 Testing

### Local Development
```bash
npm start          # Development server
npm test           # Run tests
npm run build      # Production build
```

### Testing Checklist

- [ ] **Responsive Design**: Test on mobile, tablet, desktop
- [ ] **Theme Toggle**: Verify dark/light theme switching
- [ ] **Navigation**: Test all navigation links and routing
- [ ] **Project Details**: Verify GitHub README loading
- [ ] **Contact Forms**: Test mailto and LinkedIn links
- [ ] **Performance**: Check loading speeds and optimization

### Browser Testing

Test in major browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Deploy to GitHub Pages (Master Branch)

The portfolio is configured to deploy directly from the master branch:

```bash
npm run deploy
```

This command:
1. Builds the production version (`npm run build`)
2. Pushes build files to master branch (`gh-pages -d build -b master`)
3. Updates your live site at `https://rubencg195.github.io`

**Note**: This deployment strategy pushes the built files directly to the master branch, replacing the source code temporarily during deployment.

### Master Branch Deployment Strategy

This approach differs from the typical gh-pages branch deployment:

**Advantages:**
- ✅ Simple GitHub Pages configuration (master branch / root)
- ✅ No need for separate gh-pages branch
- ✅ Direct deployment to main branch

**How it works:**
1. Your source code exists locally and in commits
2. `npm run deploy` builds and pushes only build files to master
3. GitHub Pages serves from master branch root
4. Source code is preserved in git history

**Important**: Always commit your source code changes before deploying, as the deploy command will overwrite the master branch with build files.

### Deployment Checklist

- [ ] **Commit Source Changes**: `git add . && git commit -m "Update portfolio"`
- [ ] **Push Source to GitHub**: `git push origin master`
- [ ] **Deploy Built Files**: `npm run deploy`
- [ ] **Configure GitHub Pages**: Follow the GitHub Pages setup below
- [ ] **Verify**: Check live site functionality at https://rubencg195.github.io

### GitHub Pages Configuration (One-Time Setup)

After your first deployment, configure GitHub Pages in your repository settings:

#### **Step-by-Step GitHub Pages Setup:**

1. **Navigate to Repository Settings**
   - Go to your GitHub repository: `https://github.com/rubencg195/rubencg195.github.io`
   - Click the "Settings" tab (far right in the repository navigation)
   - Scroll down to "Pages" in the left sidebar

2. **Configure Build and Deployment**
   - **Source**: Select "Deploy from a branch"
     - This tells GitHub to serve your site from files in a branch
     - ✅ **Correct choice** for our master branch deployment strategy
   
3. **Select Branch and Folder**
   - **Branch**: Select "master" from the dropdown
     - ✅ **Why**: Our `npm run deploy` pushes build files to the master branch
     - ❌ **Not**: Don't select "gh-pages" (we're not using that branch)
   
   - **Folder**: Select "/ (root)" from the dropdown  
     - ✅ **Why**: Build files are placed at the root level of master branch
     - ❌ **Not**: Don't select "/docs" (build files aren't in a docs folder)

4. **Save Configuration**
   - Click the "Save" button
   - GitHub will show: "Your site is ready to be published at https://rubencg195.github.io"

5. **Wait for Deployment**
   - GitHub Pages takes 1-10 minutes to build and deploy
   - You'll see a green checkmark when ready
   - Visit https://rubencg195.github.io to verify

#### **Configuration Summary:**
```
Source: Deploy from a branch
Branch: master
Folder: / (root)
```

#### **Why This Configuration?**

- **Deploy from a branch**: We're serving static files from the master branch
- **master branch**: Our deployment script pushes build files here
- **/ (root) folder**: Build files (index.html, static/, etc.) are at the branch root
- **Result**: GitHub Pages serves your React app from https://rubencg195.github.io

### Custom Domain (Optional)

To use a custom domain:

1. **Add CNAME** file in `public/` folder with your domain
2. **Configure DNS** with your domain provider
3. **Update homepage** in `package.json`

## 📊 Performance Optimization

### Current Build Stats
- **Main JS**: ~122KB (gzipped)
- **CSS**: ~6KB (gzipped)
- **Images**: Optimized and compressed

### Optimization Tips

1. **Image Optimization**: Compress images before adding
2. **Code Splitting**: Components are already split for optimal loading
3. **Caching**: GitHub Pages provides automatic caching
4. **Minification**: Production builds are automatically minified

## 🔧 Troubleshooting

### Common Issues

**Port 3000 in use**:
```bash
# Kill existing processes
taskkill //PID [process-id] //F
# Or use different port
npm start -- --port 3001
```

**Build Errors**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Deployment Issues**:
```bash
# Clear cache and redeploy
npm run deploy

# Check GitHub Pages configuration
# Ensure: Source = "Deploy from a branch", Branch = "master", Folder = "/ (root)"
```

**GitHub Pages Not Loading**:
- ✅ **Check**: Repository Settings → Pages → Configuration matches above
- ✅ **Wait**: GitHub Pages can take 1-10 minutes to update
- ✅ **Verify**: Master branch contains build files (index.html, static/, etc.)
- ✅ **Clear**: Browser cache and try incognito/private mode

**404 Error on Deployed Site**:
- ✅ **Check**: Homepage field in package.json matches your GitHub Pages URL
- ✅ **Verify**: Build files are at root level of master branch
- ✅ **Confirm**: GitHub Pages is serving from master branch / (root)

## 🛠️ Technologies Used

- **React 19** - Modern JavaScript library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Material Design** - Google's design system
- **React Router** - Client-side routing
- **React Markdown** - Markdown rendering
- **GitHub API** - Dynamic project loading
- **GitHub Pages** - Static site hosting
- **gh-pages** - Deployment automation

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material Design Guidelines](https://material.io/design)
- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub API Documentation](https://docs.github.com/en/rest)

## 🔄 Maintenance

### Regular Updates

1. **Dependencies**: `npm audit` and `npm update` monthly
2. **Content**: Keep projects and experience current
3. **Performance**: Monitor build sizes and loading speeds
4. **Security**: Review and update contact information privacy

### Version Control

- **Main Branch**: `master` (production-ready code)
- **Feature Branches**: Use for major updates
- **Commit Messages**: Follow conventional commit format

## 📞 Contact & Support

**Professional Contact**: [LinkedIn - Ruben Chevez](https://linkedin.com/in/rubenchevez)

**Repository**: [https://github.com/rubencg195/rubencg195.github.io](https://github.com/rubencg195/rubencg195.github.io)

---

**Built with ❤️ and ☕ by Ruben Chevez**
*Director, Machine Learning Operations • Nasdaq Verafin*