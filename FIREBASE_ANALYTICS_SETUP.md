# Firebase Analytics Integration

This document explains how to set up and use Firebase Analytics to track traffic and user interactions on the portfolio website.

## Overview

Firebase Analytics provides real-time and historical insights into how users interact with your application. This integration tracks:

- **Page Views**: When users navigate to different sections
- **Project Clicks**: When users click on portfolio projects
- **External Links**: When users click external links (GitHub, LinkedIn, etc.)
- **Custom Events**: Any other interactions you want to track

## Prerequisites

- A Google account
- Access to Firebase Console

## Setup Instructions

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"**
3. Enter a project name (e.g., `portfolio-analytics`)
4. Follow the setup wizard:
   - Disable "Enable Google Analytics for this project" (we'll use Firebase Analytics instead)
   - Select or create a Google Cloud project
   - Click "Create project"

### Step 2: Register a Web App

1. In Firebase Console, click the **Web icon** (</>) to add a web app
2. Enter an app nickname (e.g., `Portfolio`)
3. Check **"Also set up Firebase Hosting for this app"** (optional)
4. Click **"Register app"**
5. Copy the Firebase config object

### Step 3: Enable Google Analytics

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Click the **"Integrations"** tab
3. Click **"Enable Google Analytics"** on the Google Analytics card
4. Select your Google Analytics account (or create a new one)
5. Accept the data sharing settings
6. Click **"Enable"**

### Step 4: Configure Environment Variables

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

To find these values:
- Go to Firebase Console → Project Settings
- Scroll to "Your apps"
- Click your web app
- Copy the firebaseConfig object

### Step 5: Restart Development Server

```bash
npm start
```

The application will now track analytics events.

## Available Tracking Functions

### `logPageView(pageName, pagePath)`

Logs when a user navigates to a new page.

```javascript
import { logPageView } from './utils/firebaseConfig';

logPageView('Home', '/');
logPageView('Project Detail', '/project/aws-langchain');
```

**Tracked automatically in App.js**

### `logProjectClick(projectId, projectName)`

Logs when a user clicks on a project card.

```javascript
import { logProjectClick } from './utils/firebaseConfig';

logProjectClick('aws-langchain', 'AWS LangChain Project');
```

**Tracked automatically in Projects.js**

### `logExternalLink(linkUrl, linkType)`

Logs when a user clicks an external link.

```javascript
import { logExternalLink } from './utils/firebaseConfig';

logExternalLink('https://github.com/rubencg195', 'github');
logExternalLink('https://linkedin.com/in/rubenchevez', 'linkedin');
```

**Can be added to navigation links**

### `logCustomEvent(eventName, eventParams)`

Logs a custom event with any parameters.

```javascript
import { logCustomEvent } from './utils/firebaseConfig';

logCustomEvent('download_resume', {
  timestamp: new Date().toISOString()
});
```

## Viewing Analytics

### Real-time Dashboard

1. Go to Firebase Console
2. Click **"Analytics"** in the left sidebar
3. Click **"Real-time"**
4. You'll see live user activity as it happens

### Events Dashboard

1. Go to **"Analytics"** → **"All events"**
2. View all tracked events with counts and parameters
3. Custom events will appear in the list

### User Insights

1. Go to **"Analytics"** → **"Users"**
2. View user counts, sessions, and engagement metrics

## Custom Events Tracked

### Page View Event
```
Event: page_view
Parameters:
- page_title: string
- page_location: string
- timestamp: ISO string
```

### Project Click Event
```
Event: project_click
Parameters:
- project_id: string
- project_name: string
- timestamp: ISO string
```

### External Link Event
```
Event: external_link_click
Parameters:
- url: string
- link_type: string ('github', 'linkedin', 'email', etc.)
- timestamp: ISO string
```

## Production Deployment

Firebase Analytics is automatically enabled in production builds. The environment variable `REACT_APP_ENABLE_ANALYTICS` is ignored in production.

When you deploy to production:

1. Analytics will start collecting data immediately
2. Data appears in Firebase Console within seconds
3. No additional configuration needed

## Troubleshooting

### Analytics Not Showing Data

1. Check that `REACT_APP_FIREBASE_MEASUREMENT_ID` is correctly set
2. Ensure Google Analytics is enabled in Firebase project
3. Check browser console for errors: `console.log(analytics)`
4. Wait 5-10 minutes for data to appear in Firebase Console

### Events Not Being Tracked

1. Verify Firebase config is correct
2. Check that `REACT_APP_ENABLE_ANALYTICS=true`
3. Verify functions are being called correctly
4. Check browser console for warning messages

### Privacy Concerns

- Firebase respects user privacy settings
- Consider adding a privacy notice about analytics
- Users can opt-out through browser settings
- Follow GDPR/CCPA requirements in your region

## Useful Resources

- [Firebase Analytics Documentation](https://firebase.google.com/docs/analytics)
- [Google Analytics Help Center](https://support.google.com/analytics)
- [Firebase Console](https://console.firebase.google.com)
- [Firebase Pricing](https://firebase.google.com/pricing)

## Next Steps

1. Add external link tracking to Navbar.js
2. Add event tracking for contact form submissions
3. Set up Google Analytics 4 for more advanced reporting
4. Create custom dashboards and alerts
5. Integrate with Data Studio for visualization
