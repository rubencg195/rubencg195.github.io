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

### Enhanced Markdown Viewer

The portfolio uses an enhanced markdown viewer with the following features:

#### Packages Used
- **react-markdown** - Core markdown rendering component (safe by default)
- **remark-gfm** - GitHub Flavored Markdown support (tables, strikethrough, task lists)
- **rehype-raw** - HTML support in markdown
- **mermaid** - Diagram and flowchart rendering

#### Features Enabled
✅ **GitHub Flavored Markdown (GFM)**
- Tables with hover effects and responsive overflow
- Strikethrough text (~~deleted text~~)
- Task lists with checkboxes
- Autolinks
- Footnotes

✅ **Custom Styled Components**
- Gradient headings with proper hierarchy
- Inline code with badges
- Block code with syntax containers
- Links that auto-open in new tab
- Lazy-loaded images with rounded corners and shadows
- Blockquotes with accent borders
- Lists with improved spacing

✅ **Mermaid Diagrams**
- Automatic rendering of Mermaid diagrams from code blocks
- Dark mode support for diagrams (theme switches automatically)
- Supports all Mermaid diagram types (flowcharts, sequence diagrams, gantt charts, etc.)
- Responsive diagram rendering with overflow scrolling
- Error handling with fallback to error message

✅ **Security & Accessibility**
- XSS protection (react-markdown is safe by default, no dangerouslySetInnerHTML)
- External links with `rel="noopener noreferrer"`
- Dark mode support for all elements
- Screen reader accessibility

#### Customizing Markdown Components

To customize markdown rendering, edit the `components` prop in `src/components/ProjectDetail.js`:

```javascript
<ReactMarkdown
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeRaw]}
  components={{
    h1: ({node, ...props}) => <h1 className="your-custom-classes" {...props} />,
    // ... customize other elements
  }}
>
  {readme}
</ReactMarkdown>
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

### Dual Hosting Strategy: Firebase + GitHub Pages

This project supports **dual hosting** for maximum redundancy and flexibility:

1. **Firebase Hosting**: Primary CDN with global distribution
2. **GitHub Pages**: Backup hosting directly from GitHub repository

#### Architecture Overview

```mermaid
graph TB
    subgraph Source["Source Code"]
        Master["master branch<br/>(React components, configs)"]
    end
    
    subgraph Build["Build Process"]
        Build_Step["npm run build<br/>(React build to /build)"]
    end
    
    subgraph Deployment["Deployment"]
        GitHub["npm run deploy:github<br/>(gh-pages → gh-pages branch)"]
        Firebase["npm run deploy:firebase<br/>(firebase deploy)"]
    end
    
    subgraph Hosting["Production Hosting"]
        GHP["GitHub Pages<br/>rubencg195.github.io"]
        FBH["Firebase Hosting<br/>YOUR_PROJECT.web.app"]
    end
    
    Master --> Build_Step
    Build_Step --> GitHub
    Build_Step --> Firebase
    GitHub --> GHP
    Firebase --> FBH
```

### Firebase Hosting Setup (One-Time)

#### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"** and follow the setup wizard
3. Select your preferred region
4. Enable Google Analytics (optional but recommended)

#### Step 2: Create Web App

1. In Firebase Console, click the **Web icon** (**</>**)
2. Enter your app name (e.g., `portfolio`)
3. Click **"Register app"**
4. Copy your Firebase config details

#### Step 3: Install Firebase Tools Locally

```bash
npm install firebase-tools -g
```

Then authenticate using **Git Bash** (Windows native terminal, not WSL):

```bash
firebase login
```

**Important**: Run `firebase login` in **Git Bash**, not WSL or PowerShell. This opens a browser for authentication. Follow the prompts.

#### Step 4: Initialize Firebase in Project

In WSL or Git Bash:

```bash
firebase init hosting
```

**When prompted:**
- **What do you want to use as your public directory?** → `build`
- **Configure as single-page app?** → `Yes`
- **Set up automatic builds and deploys with GitHub?** → `No` (we handle this with npm scripts)
- **File build/index.html already exists. Overwrite?** → `No`

This creates/updates:
- `.firebaserc` - Your Firebase project configuration
- `firebase.json` - Hosting rules and settings

#### Step 5: Update Firebase Configuration Files

**`.firebaserc`** - Replace `YOUR_FIREBASE_PROJECT_ID` with your actual project ID:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  },
  "targets": {},
  "etags": {}
}
```

**`firebase.json`** - Already configured with:
- Public directory: `build/`
- Single-page app rewrites
- Cache headers for optimal performance
- Security headers

### Deployment Scripts

#### Available Deployment Commands

```bash
# Build only (no deployment)
npm run build

# Deploy to GitHub Pages (includes build)
npm run deploy

# Deploy to Firebase Hosting (includes build, run in Git Bash after firebase login)
npm run deployFirebase
```

#### Complete Deployment Workflow

**For GitHub Pages:**
```bash
# Step 1: Make changes to source code
git add .
git commit -m "Your changes"

# Step 2: Push source code to master branch
git push origin master

# Step 3: Build and deploy to GitHub Pages
npm run deploy
```

**For Firebase Hosting:**
```bash
# Step 1: Make changes to source code
git add .
git commit -m "Your changes"

# Step 2: Push source code to master branch
git push origin master

# Step 3: Build and deploy to Firebase (run in Git Bash)
npm run deployFirebase
```

**What happens:**
1. `npm run build` (implicit) - Creates optimized production build in `/build`
2. `npm run deploy` - Pushes build to `gh-pages` branch (GitHub Pages)
3. `npm run deployFirebase` - Deploys build to Firebase Hosting (via Git Bash)
4. Both sites update within 1-2 minutes

### Deployment Checklist

- [ ] **Install Dependencies**: `npm install`
- [ ] **Firebase Setup** (in Git Bash): `firebase login` and `firebase init hosting`
- [ ] **Update `.firebaserc`**: Replace `YOUR_FIREBASE_PROJECT_ID` with your project ID
- [ ] **Make Changes**: Edit source code in `src/`, `public/`, or `constants.js`
- [ ] **Commit & Push**: `git add . && git commit -m "message" && git push origin master`
- [ ] **Deploy to GitHub Pages**: `npm run deploy`
- [ ] **Deploy to Firebase** (in Git Bash): `npm run deployFirebase`
- [ ] **Verify GitHub Pages**: https://rubencg195.github.io
- [ ] **Verify Firebase**: https://your-project-id.web.app

### GitHub Pages Configuration (One-Time Setup)

After your first deployment, configure GitHub Pages in your repository settings:

#### **Step-by-Step Setup:**

1. **Navigate to Repository Settings**
   - Go to: `https://github.com/rubencg195/rubencg195.github.io/settings/pages`
   - Or: Settings tab → "Pages" in left sidebar

2. **Configure Source**
   - **Source**: Select "Deploy from a branch"

3. **Select Branch and Folder**
   - **Branch**: Select `gh-pages` (this is where your production builds go)
   - **Folder**: Select `/ (root)` (build files are at the root level)

4. **Save**
   - Click "Save" button
   - GitHub shows: "Your site is ready to be published at https://rubencg195.github.io"

#### **Configuration Summary:**
```
Source:  Deploy from a branch
Branch:  gh-pages
Folder:  / (root)
```

#### **Why This Configuration?**

- **`master` branch**: Your source code (React components, etc.)
- **`gh-pages` branch**: Production build files (served by GitHub Pages)
- **Deploy from a branch**: GitHub Pages serves static files from a branch
- **`/ (root)` folder**: Build files (index.html, static/, etc.) are at branch root
- **Result**: Your React app is live at https://rubencg195.github.io

### Custom Domain (Optional)

To use a custom domain:

1. **Add CNAME** file in `public/` folder with your domain
2. **Configure DNS** with your domain provider
3. **Update homepage** in `package.json`

## 🏗️ AWS Architecture & Components

This section outlines the comprehensive, production-grade AWS architecture designed to support the portfolio's advanced MLOps projects, serverless analytics, and AI-powered capabilities. It includes both a high-level conceptual overview and a highly detailed, multi-AZ VPC infrastructure diagram.

### 1. High-Level Conceptual Overview

The high-level architecture showcases the serverless flow of user interactions, analytics collection, and integration with AWS Bedrock for intelligent features.

```mermaid
graph TD
    User([User / Browser]) -->|HTTPS| CF[Amazon CloudFront CDN]
    CF -->|Static Assets| S3[Amazon S3 Bucket]
    CF -->|API Requests| APIGW[Amazon API Gateway]
    APIGW -->|Trigger| Lambda[AWS Lambda]
    Lambda -->|Log Events| DDB[(Amazon DynamoDB)]
    Lambda -->|Query / RAG| Bedrock[Amazon Bedrock]
    
    subgraph MLOps Platform [AWS MLOps Platform]
        SM[Amazon SageMaker]
        Athena[Amazon Athena]
        RDS[(Amazon RDS pgvector)]
    end
    
    Bedrock -.->|Interact| MLOps Platform
```

### 2. Detailed AWS Infrastructure Architecture

This detailed diagram illustrates the multi-AZ VPC setup, secure networking, private endpoints, identity management, and MLOps components that power the end-to-end platform.

```mermaid
flowchart TB
    subgraph Route53_Sub["DNS & Traffic Routing"]
        R53[Amazon Route 53]
        ACM[AWS Certificate Manager]
    end

    subgraph Edge_Sub["Edge Network (CDN)"]
        CF[Amazon CloudFront Distribution]
        WAF[AWS WAF]
    end

    subgraph Cognito_Sub["Identity & Access Management"]
        Cognito[Amazon Cognito User Pool]
    end

    subgraph S3_Sub["Static Hosting & Storage"]
        S3_Bucket[Amazon S3 Bucket<br/>portfolio-frontend-prod]
        KMS[AWS KMS]
    end

    subgraph VPC["AWS VPC (Virtual Private Cloud) - 10.0.0.0/16"]
        subgraph Public_Subnets["Public Subnets (Multi-AZ)"]
            NAT[NAT Gateway]
            ALB[Application Load Balancer]
        end

        subgraph Private_Subnets["Private App Subnets (Multi-AZ)"]
            ECS[AWS ECS Fargate<br/>Portfolio API / MLOps App]
            Lambda[AWS Lambda Functions<br/>Analytics & Bedrock Handler]
        end

        subgraph Isolated_Subnets["Private Data Subnets (Multi-AZ)"]
            DDB[(Amazon DynamoDB<br/>Analytics Store)]
            RDS[(Amazon RDS PostgreSQL<br/>pgvector Knowledge Base)]
            Athena[(Amazon Athena<br/>Data Lake Query Engine)]
        end

        subgraph VPC_Endpoints["VPC Endpoints (PrivateLink)"]
            S3_VPCE[S3 Endpoint]
            SM_VPCE[SageMaker Endpoint]
            Bedrock_VPCE[Bedrock Endpoint]
        end
    end

    subgraph MLOps_Sub["AWS MLOps & AI Services"]
        Bedrock[Amazon Bedrock<br/>Claude 3.7 / Haiku]
        SM_Model[SageMaker Endpoint<br/>Fraud Detection Model]
        SM_Pipelines[SageMaker Pipelines]
        ECR[Amazon Elastic Container Registry]
    end

    %% Connections
    User([User / Browser]) -->|1. DNS Query| R53
    User -->|2. HTTPS Request| CF
    R53 -.->|Alias Record| CF
    ACM -->|SSL/TLS Certificate| CF
    CF -->|3. Inspect Traffic| WAF
    CF -->|4. Fetch Static Files| S3_Bucket
    S3_Bucket -.->|Encrypts with| KMS
    
    User -->|5. Authenticate| Cognito
    Cognito -->|JWT Token| User
    
    CF -->|6. API Requests with JWT| ALB
    ALB -->|7. Route Traffic| ECS
    ECS -->|8. Invoke Serverless| Lambda
    
    Lambda -->|9. Write Analytics| DDB
    Lambda -->|10. Query Vector DB| RDS
    Lambda -->|11. Query Data Lake| Athena
    
    Lambda -->|12. Private API Call| Bedrock_VPCE
    Bedrock_VPCE --> Bedrock
    
    Lambda -->|13. Private Model Inference| SM_VPCE
    SM_VPCE --> SM_Model
    
    SM_Pipelines -->|Deploy Model| SM_Model
    ECR -->|Pull GPU Containers| SM_Pipelines
    ECS -->|Pull App Images| ECR
    
    classDef aws fill:#FF9900,stroke:#333,stroke-width:2px,color:#fff;
    classDef security fill:#CC0000,stroke:#333,stroke-width:2px,color:#fff;
    classDef database fill:#1A5276,stroke:#333,stroke-width:2px,color:#fff;
    classDef compute fill:#196F3D,stroke:#333,stroke-width:2px,color:#fff;
    
    class R53,CF,S3_Bucket,ALB,ECS,Lambda,SM_Pipelines,ECR aws;
    class ACM,WAF,Cognito,KMS security;
    class DDB,RDS,Athena,SM_Model,Bedrock database;
```

### 3. AWS Component Breakdown

- **Amazon Route 53 & AWS Certificate Manager (ACM)**: Manages DNS routing and provisions SSL/TLS certificates for secure HTTPS communication.
- **Amazon CloudFront & AWS WAF**: Global CDN that caches static assets at edge locations for ultra-low latency. AWS WAF protects the application from common web exploits and DDoS attacks.
- **Amazon S3**: Hosts the static React build files securely, encrypted at rest using **AWS KMS** customer-managed keys.
- **Amazon Cognito**: Provides secure user authentication, issuing JSON Web Tokens (JWT) to authorize API requests.
- **AWS VPC (Virtual Private Cloud)**: Segmented into Public, Private App, and Isolated Data subnets across multiple Availability Zones (AZs) for high availability and fault tolerance.
- **Application Load Balancer (ALB) & AWS ECS Fargate**: Distributes incoming API traffic to secure, auto-scaling containerized backend services running on serverless Fargate instances.
- **AWS Lambda**: Executes lightweight serverless functions for analytics tracking and Bedrock orchestration.
- **Amazon DynamoDB**: Low-latency NoSQL database used to store real-time user interaction analytics and portfolio metrics.
- **Amazon RDS PostgreSQL with pgvector**: Relational database storing structured data and high-dimensional vector embeddings for Retrieval-Augmented Generation (RAG) applications.
- **Amazon Bedrock**: Serverless API access to foundation models like Claude 3.7 and Claude Haiku for natural language search and AI agents.
- **Amazon SageMaker**: Powers the model training, registry, and hosting pipelines (e.g., fraud detection models), integrated with **Amazon ECR** for GPU-optimized container management.
- **Amazon Athena**: Serverless query engine used to analyze large-scale datasets directly in the S3 data lake.

---

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
# Ensure: Source = "Deploy from a branch", Branch = "gh-pages", Folder = "/ (root)"
```

**GitHub Pages Not Loading**:
- ✅ **Check**: Repository Settings → Pages → Configuration matches above
- ✅ **Wait**: GitHub Pages can take 1-10 minutes to update
- ✅ **Verify**: gh-pages branch contains build files (index.html, static/, etc.)
- ✅ **Clear**: Browser cache and try incognito/private mode

**404 Error on Deployed Site**:
- ✅ **Check**: Homepage field in package.json matches your GitHub Pages URL
- ✅ **Verify**: Build files are at root level of gh-pages branch
- ✅ **Confirm**: GitHub Pages is serving from gh-pages branch / (root)

## 📊 Firebase Analytics Integration

### Overview

Firebase Analytics provides real-time and historical insights into how users interact with your portfolio. The app is a **React SPA** (home is one long page; project detail is a separate route). Tracking combines **route-level** events with **section-level** observers so you can answer: which pages were visited, which home sections were seen, which projects were clicked, and which cards were hovered most.

Tracked today:

| Question | Primary events | Key parameters |
|----------|----------------|----------------|
| Which **pages** were visited? | `page_view` | `page_location`, `page_type` (`home` \| `project` \| `other`) |
| Which **sections** on the home page were seen? | `section_view` | `section_id`: `home`, `about`, `skills`, `projects`, `experience`, `education`, `contact` |
| Did users **scroll** through the home page? | `scroll_depth` | `percent`: 25, 50, 75, 100 |
| Which **projects** were clicked? | `project_click` | `project_id`, `project_name`, `project_category` |
| Which **project pages** were opened? | `project_view`, `project_engagement` | `engagement_seconds` (≥3s on unmount) |
| Which **nav** items were used? | `navigation_click` | `section_id`, `source` (`navbar`, `mobile`, `navbar_logo`, …) |
| Which **cards** were hovered most? | `card_hover` | `card_type`, `card_id`, `card_label` |
| CTAs, theme, menu, 404 | `cta_click`, `theme_change`, `mobile_menu`, `page_not_found`, `scroll_to_top` | see event catalog below |

### Analytics architecture (SPA)

High-level flow:

```mermaid
flowchart LR
  User[Visitor] --> Router[React Router]
  Router --> Home["/ home SPA"]
  Router --> Project["/project/:id"]
  Home --> Observer[IntersectionObserver + scroll listener]
  Observer --> Firebase[Firebase Analytics / GA4]
  Project --> Firebase
  Router --> PageView[page_view on route change]
  PageView --> Firebase
```

Detailed instrumentation on the home route:

```mermaid
flowchart TB
  subgraph HomeRoute["pathname === '/'"]
    PV[logPageView home]
    SEC[section_view per section id]
    DEP[scroll_depth 25/50/75/100]
    NAV[navigation_click from Navbar]
    HOVER[card_hover about / experience / education / project grid]
    CTA[cta_click hero + contact]
  end
  subgraph ProjectRoute["pathname /project/:id"]
    PV2[logPageView + project_view]
    CLK[project_click from grid]
    ENG[project_engagement on leave]
    README[external_link_click type readme]
  end
  HomeRoute --> GA4[(GA4 via Firebase)]
  ProjectRoute --> GA4
```

Implementation files: `src/utils/firebaseConfig.js`, `src/hooks/usePortfolioAnalytics.js`, `src/utils/analyticsDedupe.js`, `src/hooks/useCardHoverTracking.js`.

### Setup Instructions

#### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"**
3. Enter a project name (e.g., `portfolio-analytics`)
4. Follow the setup wizard and click "Create project"

#### Step 2: Register a Web App

1. In Firebase Console, click the **Web icon** (</>) to add a web app
2. Enter an app nickname (e.g., `Portfolio`)
3. Click **"Register app"**
4. Copy the Firebase config object

#### Step 3: Enable Google Analytics

1. Go to **Project Settings** (gear icon)
2. Click the **"Integrations"** tab
3. Click **"Enable Google Analytics"**
4. Select your Google Analytics account (or create a new one)
5. Click **"Enable"**

#### Step 4: Configure Environment Variables

1. Create a `.env.local` file in the project root
2. Add your Firebase credentials:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=G-your_measurement_id
REACT_APP_ENABLE_ANALYTICS=true
```

To find these values, go to Firebase Console → Project Settings → Your apps → Click your web app → Copy the firebaseConfig object

#### Step 5: Restart Development Server

```bash
npm start
```

### Event catalog (wired in app)

| Event | When it fires | Where |
|-------|----------------|-------|
| `page_view` | Route change | `App.js` |
| `section_view` | Section ≥35% visible (once per session per section) | `usePortfolioAnalytics.js` |
| `scroll_depth` | Home scroll hits 25/50/75/100% (once each per session) | `usePortfolioAnalytics.js` |
| `navigation_click` | Navbar / logo / hash nav | `Navbar.js`, `App.js`, `ProjectDetail.js` |
| `project_click` | Project card click | `Projects.js` |
| `project_view` | Project detail loaded | `ProjectDetail.js` |
| `project_engagement` | Leave detail after ≥3s | `ProjectDetail.js` |
| `project_tab_select` | MLOps vs deep-tech tab | `Projects.js` |
| `card_hover` | Mouse enter on card (2s cooldown per card) | About, Timeline, Projects |
| `cta_click` | Hero / contact CTAs | `App.js` |
| `external_link_click` | GitHub, LinkedIn, README links | Multiple |
| `theme_change` | Light/dark toggle | `App.js` |
| `scroll_to_top` | Floating button | `ScrollToTopButton.js` |
| `mobile_menu` | `open` / `close` | `Navbar.js` |
| `page_not_found` | Unknown route | `App.js` |

### How to analyze in Firebase / GA4

1. **Pages visited**: Analytics → **Events** → `page_view` → breakdown by `page_location` or `page_type`.
2. **Sections visited (home)**: `section_view` → breakdown by `section_id`. Compare counts to `navigation_click` (intent) vs `section_view` (actually seen).
3. **Scroll engagement**: `scroll_depth` → `percent`. Funnel: 25 → 100 indicates how far readers go.
4. **Projects clicked**: `project_click` and `project_view` → `project_id` / `project_name`. Clicks without views may mean bounce; pair with `project_engagement`.
5. **Most hovered cards**: `card_hover` → sort by `card_label` or `card_id`, filter `card_type` = `experience`, `education`, `about`, or `project`. This is the best proxy for “interest without click” on timeline and about cards.

**SPA caveat**: Leaving `/` unmounts section observers and **resets session dedupe** (`analyticsDedupe.js`), so returning home can log `section_view` again in the same browser session. That is intentional for per-visit home analytics, not global lifetime uniqueness.

**Hover caveat**: `card_hover` uses `mouseenter` (desktop). Touch users without hover generate fewer events; use `section_view` and `project_click` for mobile.

### Post-implementation assessment

| Area | Before | After | Notes |
|------|--------|-------|-------|
| Route / page tracking | Partial | **Strong** | `page_view` + `page_type` for home vs project |
| Home section visibility | None | **Strong** | `section_view` for all seven sections |
| Scroll depth | None | **Good** | Milestones only; not continuous |
| Project funnel | Clicks only | **Strong** | click → view → engagement seconds |
| Card interest (hover) | None | **Good** | Debounced; desktop-biased |
| Nav vs scroll | Nav only | **Good** | Compare `navigation_click` vs `section_view` |
| Skills matrix | None | **Gap** | No per-skill hover (optional future) |
| Testimonials | None | **Gap** | Section not instrumented if present |

**Estimated analytics maturity**: ~**85%** of stated goals (pages, sections, projects, hovers on experience/education/about/projects). Remaining 15%: touch/hover parity, skills/testimonial cards, and optional GA4 BigQuery dashboards.

### API reference (main helpers)

```javascript
import {
  logPageView,
  logSectionView,
  logScrollDepth,
  logProjectClick,
  logProjectView,
  logCardHover,
  logNavigationClick,
  logCtaClick,
  logExternalLink,
  logCustomEvent
} from './utils/firebaseConfig';
```

### Viewing Analytics

1. Go to Firebase Console
2. Click **"Analytics"** in the left sidebar
3. Click **"Real-time"** to see live user activity
4. Click **"All events"** to view all tracked events with counts

### Debugging Firebase Analytics

#### Quick Start: Browser Console Debugging

Open your browser DevTools (**F12** or **Ctrl+Shift+I**) and run:

```javascript
// Check Firebase status
window.firebaseDebug.checkStatus()

// Test a custom event
window.firebaseDebug.testEvent('my_test_event')

// Test page view
window.firebaseDebug.testPageView()

// Test with custom data
window.firebaseDebug.testEvent('checkout', { items: 3, total: 99.99 })
```

#### Enable Firebase Debug Tools

By default, debug tools are **disabled**. To enable them:

1. Open `src/constants.js`
2. Set `ENABLE_FIREBASE_DEBUG = true`
3. Restart dev server: `npm start`
4. Debug tools will appear in browser console as `window.firebaseDebug`

#### Debugging Checklist

✅ **If Analytics is Working:**
- [ ] Console shows "Firebase Debug Tools Available!"
- [ ] `checkStatus()` shows all fields with ✅
- [ ] Test events appear in Firebase Console Real-time dashboard
- [ ] Project clicks are logged when you click project cards
- [ ] Page views logged when navigating between sections

❌ **If Analytics is NOT Working:**

**Problem: "Analytics: null or undefined"**
- Solution: Check `.env.local` exists in project root with all Firebase credentials set
- Solution: Set `REACT_APP_ENABLE_ANALYTICS=true`
- Solution: Restart dev server

**Problem: "FIREBASE_MEASUREMENT_ID is required"**
- Solution: Go to Firebase Console → Project Settings → Click your Web app
- Solution: Copy the `measurementId` value
- Solution: Add to `.env.local`: `REACT_APP_FIREBASE_MEASUREMENT_ID=G-XXXXX`

**Problem: "Error initializing analytics"**
- Solution: Open console: `window.firebaseDebug.checkStatus()`
- Solution: Verify credentials are correct
- Solution: Check Firebase project has Analytics enabled

**Problem: Events logged but not showing in Firebase Console**
- Solution: Events can take 5-10 minutes to appear initially
- Solution: Go to **Analytics → All events** not just Real-time
- Solution: Verify Google Analytics is enabled in Firebase Console
- Solution: Try clearing browser cache and refreshing

#### Troubleshooting Matrix

| Problem | Cause | Solution |
|---------|-------|----------|
| "Not Initialized" | No credentials | Create `.env.local` with Firebase config |
| "MEASUREMENT_ID required" | Missing ID | Add `REACT_APP_FIREBASE_MEASUREMENT_ID` |
| Events not appearing | Network blocked | Check firewall/CORS settings |
| Events delayed 10+ min | Normal behavior | Analytics batches events |
| Only seeing session_start | Other events disabled | Enable in Firebase Console |

### Firebase Console Navigation

**Real-time Dashboard:**
```
Firebase Console → Your Project → Analytics → Real-time
```
See live user activity as it happens

**All Events View:**
```
Firebase Console → Your Project → Analytics → All events
```
See all events with counts

### Useful Resources

- [Firebase Analytics Documentation](https://firebase.google.com/docs/analytics)
- [Google Analytics Help Center](https://support.google.com/analytics)
- [Firebase Console](https://console.firebase.google.com)
- [Firebase Pricing](https://firebase.google.com/pricing)

## 🛠️ Technologies Used

- **React 19** - Modern JavaScript library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Material Design** - Google's design system
- **React Router** - Client-side routing
- **React Markdown** - Markdown rendering with plugins (safe by default)
  - **remark-gfm** - GitHub Flavored Markdown support
  - **rehype-raw** - HTML in markdown support
- **Mermaid** - Diagram and flowchart rendering
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

- **Development Branch**: `master` (development code)
- **Production Branch**: `gh-pages` (production-ready code)
- **Feature Branches**: Use for major updates
- **Commit Messages**: Follow conventional commit format

## 📞 Contact & Support

**Professional Contact**: [LinkedIn - Ruben Chevez](https://linkedin.com/in/rubenchevez)

**Repository**: [https://github.com/rubencg195/rubencg195.github.io](https://github.com/rubencg195/rubencg195.github.io)

---

**Built with ❤️ and ☕ by Ruben Chevez**
*Director, Machine Learning Operations • Nasdaq Verafin*
