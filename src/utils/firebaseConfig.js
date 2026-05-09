import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

// Firebase configuration - Update these with your Firebase project credentials
// You can get these from Firebase Console: https://console.firebase.google.com
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (only if not in development mode or if explicitly enabled)
let analytics = null;
try {
  if (process.env.REACT_APP_ENABLE_ANALYTICS === 'true' || process.env.NODE_ENV === 'production') {
    analytics = getAnalytics(app);
  }
} catch (error) {
  console.warn('Firebase Analytics initialization skipped:', error.message);
}

/**
 * Log a custom event to Firebase Analytics
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Event parameters
 */
export const logCustomEvent = (eventName, eventParams = {}) => {
  if (analytics) {
    try {
      logEvent(analytics, eventName, eventParams);
    } catch (error) {
      console.warn('Error logging event to Firebase Analytics:', error);
    }
  }
};

/**
 * Log page view event
 * @param {string} pageName - Name of the page
 * @param {string} pagePath - Path of the page
 */
export const logPageView = (pageName, pagePath) => {
  logCustomEvent('page_view', {
    page_title: pageName,
    page_location: pagePath,
    timestamp: new Date().toISOString()
  });
};

/**
 * Log project click event
 * @param {string} projectId - ID of the project clicked
 * @param {string} projectName - Name of the project clicked
 */
export const logProjectClick = (projectId, projectName) => {
  logCustomEvent('project_click', {
    project_id: projectId,
    project_name: projectName,
    timestamp: new Date().toISOString()
  });
};

/**
 * Log external link click event
 * @param {string} linkUrl - URL of the external link
 * @param {string} linkType - Type of link (e.g., 'github', 'linkedin', 'email')
 */
export const logExternalLink = (linkUrl, linkType) => {
  logCustomEvent('external_link_click', {
    url: linkUrl,
    link_type: linkType,
    timestamp: new Date().toISOString()
  });
};

export { app, analytics };
