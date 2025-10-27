# Firebase Analytics Debugging Guide

This guide helps you verify that Firebase Analytics is properly configured and working correctly.

## Quick Start: Browser Console Debugging

### Step 1: Open Browser Console
1. Open your browser DevTools: **F12** or **Ctrl+Shift+I**
2. Go to the **Console** tab
3. You should see Firebase debug messages

### Step 2: Check Firebase Status
In the console, run:

```javascript
window.firebaseDebug.checkStatus()
```

This will show:
```
🔥 Firebase Analytics Status

Environment Variables:
  API Key: ✅ Set (or ❌ Missing)
  Auth Domain: ✅ Set
  Project ID: ✅ Set
  Measurement ID: ✅ Set
  Enable Analytics: true/false

Analytics Instance:
  Status: ✅ Initialized (or ❌ Not Initialized)
  
Environment:
  Node Env: development
  URL: http://localhost:3000
```

**What it means:**
- ✅ All "Set" = Everything configured correctly
- ❌ Any "Missing" = Check your `.env.local` file
- ❌ "Not Initialized" = No Firebase credentials or analytics disabled

### Step 3: Test Event Logging
Run in console:

```javascript
// Test a custom event
window.firebaseDebug.testEvent('my_test_event')

// Test page view
window.firebaseDebug.testPageView()

// Test with custom data
window.firebaseDebug.testEvent('checkout', { items: 3, total: 99.99 })
```

You'll see in console:
```
📤 Testing event log: my_test_event
✅ Event "my_test_event" logged (check Firebase Console in 5-10 seconds)
```

### Step 4: View in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Click **Analytics** in the left sidebar
4. Click **Real-time**
5. You should see your test events within 5-10 seconds!

## Debugging Checklist

### ✅ If Analytics is Working

You should see:
- [ ] Console shows "Firebase Debug Tools Available!"
- [ ] `checkStatus()` shows all fields with ✅
- [ ] Test events appear in Firebase Console Real-time dashboard
- [ ] Project clicks are logged when you click project cards
- [ ] Page views logged when navigating between sections
- [ ] No errors in console (only warnings about deprecated options are OK)

### ❌ If Analytics is NOT Working

**Problem: "Analytics: null or undefined"**
```javascript
window.firebaseDebug.checkStatus()
// Shows: Status: ❌ Not Initialized
```

**Solution:**
1. Check `.env.local` exists in project root
2. Verify all Firebase credentials are set
3. Set `REACT_APP_ENABLE_ANALYTICS=true`
4. Restart dev server: `npm start`

---

**Problem: "FIREBASE_MEASUREMENT_ID is required"**

**Solution:**
1. Go to Firebase Console → Project Settings
2. Click your Web app
3. Copy the `measurementId` value
4. Add to `.env.local`: `REACT_APP_FIREBASE_MEASUREMENT_ID=G-XXXXX`
5. Restart dev server

---

**Problem: "Error initializing analytics"**

**Solution:**
1. Open console: `window.firebaseDebug.checkStatus()`
2. Look for error messages
3. Verify credentials are correct
4. Check Firebase project is correctly set up with Analytics enabled
5. Look for CORS errors (may indicate wrong domain)

---

**Problem: Events logged but not showing in Firebase Console**

**Solution:**
1. Events can take 5-10 minutes to appear initially
2. Make sure you're viewing the correct project in Firebase Console
3. Go to **Analytics → All events** not just Real-time
4. Check that Google Analytics is enabled:
   - Firebase Console → Project Settings
   - Click **Integrations** tab
   - Verify Google Analytics is enabled
5. Try clearing browser cache and refreshing

---

## Advanced Debugging

### Monitor Events in Real-time

Add this to browser console to log all events:

```javascript
// Monitor analytics events (if available)
import { analytics } from '/src/utils/firebaseConfig.js';

// Log to console before sending
const originalLogEvent = analytics.logEvent;
if (originalLogEvent) {
  analytics.logEvent = function(eventName, eventParams) {
    console.log('📊 Analytics Event:', eventName, eventParams);
    return originalLogEvent.call(this, eventName, eventParams);
  };
}
```

### Check Measurement ID

The measurement ID is crucial for data collection:

```javascript
// Check measurement ID
console.log('Measurement ID:', process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)

// It should look like: G-XXXXXXXXXXXXX
```

### Test Network Requests

1. Open DevTools Network tab
2. Filter for: `google-analytics` or `firebaselogging`
3. Trigger an event: `window.firebaseDebug.testEvent()`
4. You should see network requests being made
5. Check response status is 200 or 204 (success)

## Events Being Tracked

### Automatically Tracked:
- **page_view**: When navigating to different pages
- **project_click**: When clicking on a project card
- **session_start**: When user first arrives

### Test Events:
- **test_event**: Generic test event (use `testEvent()`)
- **test_page_view**: Page view test (use `testPageView()`)

### Example Event Payloads:

**Page View:**
```javascript
{
  page_title: "/",
  page_location: "/",
  timestamp: "2025-10-26T12:34:56.789Z"
}
```

**Project Click:**
```javascript
{
  project_id: "aws-langchain",
  project_name: "AWS LangChain Project",
  timestamp: "2025-10-26T12:34:56.789Z"
}
```

**External Link:**
```javascript
{
  url: "https://github.com/rubencg195",
  link_type: "github",
  timestamp: "2025-10-26T12:34:56.789Z"
}
```

## Troubleshooting Matrix

| Problem | Cause | Solution |
|---------|-------|----------|
| "Not Initialized" | No credentials | Create `.env.local` with Firebase config |
| "MEASUREMENT_ID required" | Missing ID | Add `REACT_APP_FIREBASE_MEASUREMENT_ID` |
| Events not appearing | Network blocked | Check firewall/CORS settings |
| Events delayed 10+ min | Normal behavior | Analytics batches events |
| Only seeing session_start | Other events disabled | Enable in Firebase Console |
| Measurement ID warning | Old Firebase SDK | Update Firebase packages |

## Firebase Console Navigation

### Real-time Dashboard
```
Firebase Console 
  → Your Project
    → Analytics
      → Real-time
```
See live user activity as it happens

### All Events View
```
Firebase Console 
  → Your Project
    → Analytics
      → All events
```
See all events with counts

### Event Parameters
```
Firebase Console 
  → Your Project
    → Analytics
      → All events
        → Click event name
          → View event details & parameters
```

## Best Practices

1. **Test Before Deploy**: Always test analytics locally before deploying
2. **Use Debug Mode**: Keep analytics debug mode on during development
3. **Check Regularly**: Review analytics weekly for data collection issues
4. **Monitor Storage**: Keep Firebase credentials in `.env.local` only
5. **Update SDK**: Keep Firebase SDK updated for security and features

## Useful Commands

```javascript
// Check entire config
console.table(window.firebaseDebug.checkStatus())

// Quick status
window.firebaseDebug.analytics ? '✅ Ready' : '❌ Not Ready'

// Test multiple events
for(let i = 0; i < 5; i++) {
  window.firebaseDebug.testEvent(`test_${i}`)
}

// Get environment
console.log(process.env.NODE_ENV)
console.log(process.env.REACT_APP_ENABLE_ANALYTICS)
```

## Resources

- [Firebase Analytics Documentation](https://firebase.google.com/docs/analytics)
- [Firebase Console](https://console.firebase.google.com)
- [Google Analytics Help](https://support.google.com/analytics)
- [Firebase GitHub Issues](https://github.com/firebase/firebase-js-sdk/issues)

## Still Not Working?

1. Check browser console for errors
2. Run `window.firebaseDebug.checkStatus()` and screenshot
3. Review Firebase Console → Project Settings → Service Accounts for credential validity
4. Test on different browser (Chrome, Firefox, Safari)
5. Check if VPN/Proxy is blocking analytics requests
6. Review `.env.local` for typos (common issue!)

Remember: Analytics data can take 5-10 minutes to appear in Firebase Console. Be patient! 🚀
