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

const withTimestamp = (params = {}) => ({
  ...params,
  timestamp: new Date().toISOString()
});

/**
 * Log a custom event to Firebase Analytics
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
 */
export const logPageView = (pageName, pagePath) => {
  const pageType = pagePath.startsWith('/project/')
    ? 'project'
    : pagePath === '/'
      ? 'home'
      : 'other';

  logCustomEvent('page_view', withTimestamp({
    page_title: pageName,
    page_location: pagePath,
    page_type: pageType
  }));
};

/**
 * Log project card click (list → detail)
 */
export const logProjectClick = (projectId, projectName, category = '') => {
  logCustomEvent('project_click', withTimestamp({
    project_id: projectId,
    project_name: projectName,
    project_category: category
  }));
};

/**
 * Log project detail page view
 */
export const logProjectView = (projectId, projectName, category = '') => {
  logCustomEvent('project_view', withTimestamp({
    project_id: projectId,
    project_name: projectName,
    project_category: category
  }));
};

/**
 * Log projects tab change
 */
export const logProjectTabSelect = (tabId) => {
  logCustomEvent('project_tab_select', withTimestamp({
    tab_id: tabId
  }));
};

/**
 * Log section / nav navigation
 */
export const logNavigationClick = (sectionId, source = 'unknown') => {
  logCustomEvent('navigation_click', withTimestamp({
    section_id: sectionId,
    source
  }));
};

/**
 * Log hero or prominent CTA clicks
 */
export const logCtaClick = (ctaId, target = '') => {
  logCustomEvent('cta_click', withTimestamp({
    cta_id: ctaId,
    target
  }));
};

/**
 * Log external link click
 */
export const logExternalLink = (linkUrl, linkType, extra = {}) => {
  logCustomEvent('external_link_click', withTimestamp({
    url: linkUrl,
    link_type: linkType,
    ...extra
  }));
};

/** Section entered viewport on home SPA (once per section per session) */
export const logSectionView = (sectionId) => {
  logCustomEvent('section_view', withTimestamp({
    section_id: sectionId
  }));
};

/** Scroll depth milestone on home page */
export const logScrollDepth = (percent) => {
  logCustomEvent('scroll_depth', withTimestamp({
    percent
  }));
};

/** Card hover — experience, education, about, project cards */
export const logCardHover = (cardType, cardId, cardLabel = '') => {
  logCustomEvent('card_hover', withTimestamp({
    card_type: cardType,
    card_id: cardId,
    card_label: cardLabel
  }));
};

export const logThemeChange = (theme) => {
  logCustomEvent('theme_change', withTimestamp({ theme }));
};

export const logScrollToTop = (source = 'button') => {
  logCustomEvent('scroll_to_top', withTimestamp({ source }));
};

export const logPageNotFound = (path) => {
  logCustomEvent('page_not_found', withTimestamp({
    attempted_path: path
  }));
};

export const logMobileMenu = (action) => {
  logCustomEvent('mobile_menu', withTimestamp({ action }));
};

/** Seconds spent on project detail before leaving */
export const logProjectEngagement = (projectId, seconds, projectName = '') => {
  logCustomEvent('project_engagement', withTimestamp({
    project_id: projectId,
    project_name: projectName,
    engagement_seconds: seconds
  }));
};

/** External link inside project README markdown */
export const logReadmeLinkClick = (url, projectId) => {
  logExternalLink(url, 'readme', { project_id: projectId, source: 'readme' });
};

export { app, analytics };
