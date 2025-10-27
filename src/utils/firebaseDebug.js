import { analytics, logCustomEvent } from './firebaseConfig';
import { ENABLE_FIREBASE_DEBUG } from '../constants';

/**
 * Firebase Debug Utilities
 * Use these functions to test and verify Firebase Analytics is working
 */

/**
 * Check if Firebase Analytics is properly initialized
 */
export const checkFirebaseStatus = () => {
  console.group('🔥 Firebase Analytics Status');
  
  // Check environment variables
  console.log('Environment Variables:');
  console.log('  API Key:', process.env.REACT_APP_FIREBASE_API_KEY ? '✅ Set' : '❌ Missing');
  console.log('  Auth Domain:', process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ? '✅ Set' : '❌ Missing');
  console.log('  Project ID:', process.env.REACT_APP_FIREBASE_PROJECT_ID ? '✅ Set' : '❌ Missing');
  console.log('  Measurement ID:', process.env.REACT_APP_FIREBASE_MEASUREMENT_ID ? '✅ Set' : '❌ Missing');
  console.log('  Enable Analytics:', process.env.REACT_APP_ENABLE_ANALYTICS);
  
  // Check analytics instance
  console.log('\nAnalytics Instance:');
  console.log('  Status:', analytics ? '✅ Initialized' : '❌ Not Initialized');
  console.log('  Instance:', analytics);
  
  // Check environment
  console.log('\nEnvironment:');
  console.log('  Node Env:', process.env.NODE_ENV);
  console.log('  URL:', window.location.href);
  
  console.groupEnd();
};

/**
 * Test event logging
 */
export const testEventLogging = (eventName = 'test_event') => {
  console.log(`📤 Testing event log: ${eventName}`);
  
  logCustomEvent(eventName, {
    test: true,
    timestamp: new Date().toISOString(),
    url: window.location.href
  });
  
  console.log(`✅ Event "${eventName}" logged (check Firebase Console in 5-10 seconds)`);
};

/**
 * Test page view logging
 */
export const testPageView = () => {
  console.log('📄 Testing page view');
  
  logCustomEvent('test_page_view', {
    page_title: 'Debug Test',
    page_location: window.location.pathname,
    timestamp: new Date().toISOString()
  });
  
  console.log('✅ Page view logged (check Firebase Console)');
};

/**
 * Monitor all events being sent
 * Add to window for easy access in console
 */
export const enableEventMonitoring = () => {
  if (typeof window !== 'undefined' && ENABLE_FIREBASE_DEBUG) {
    window.firebaseDebug = {
      checkStatus: checkFirebaseStatus,
      testEvent: testEventLogging,
      testPageView: testPageView,
      analytics: analytics
    };
    
    console.log('✅ Firebase Debug Tools Available!');
    console.log('Available commands:');
    console.log('  window.firebaseDebug.checkStatus()     - Check Firebase status');
    console.log('  window.firebaseDebug.testEvent()       - Test event logging');
    console.log('  window.firebaseDebug.testPageView()    - Test page view');
    console.log('  window.firebaseDebug.analytics         - Firebase Analytics instance');
  }
};

/**
 * Get Firebase config status
 */
export const getFirebaseConfig = () => {
  return {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ? '✅ Set' : '❌ Missing',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ? '✅ Set' : '❌ Missing',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ? '✅ Set' : '❌ Missing',
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ? '✅ Set' : '❌ Missing',
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ? '✅ Set' : '❌ Missing',
    appId: process.env.REACT_APP_FIREBASE_APP_ID ? '✅ Set' : '❌ Missing',
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID ? '✅ Set' : '❌ Missing',
    enableAnalytics: process.env.REACT_APP_ENABLE_ANALYTICS,
    analyticsInitialized: analytics ? '✅ Yes' : '❌ No',
    nodeEnv: process.env.NODE_ENV
  };
};
