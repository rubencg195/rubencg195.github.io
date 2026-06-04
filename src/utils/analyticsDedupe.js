/**
 * Per-session dedupe for SPA analytics (resets when portfolio analytics hook cleans up).
 */
const sectionViewsLogged = new Set();
const scrollDepthLogged = new Set();
const hoverLastLogged = {};

export const resetPortfolioSessionAnalytics = () => {
  sectionViewsLogged.clear();
  scrollDepthLogged.clear();
  Object.keys(hoverLastLogged).forEach((key) => delete hoverLastLogged[key]);
};

export const shouldLogSectionView = (sectionId) => {
  if (sectionViewsLogged.has(sectionId)) return false;
  sectionViewsLogged.add(sectionId);
  return true;
};

export const shouldLogScrollDepth = (percent) => {
  if (scrollDepthLogged.has(percent)) return false;
  scrollDepthLogged.add(percent);
  return true;
};

export const shouldLogCardHover = (key, cooldownMs = 2000) => {
  const now = Date.now();
  if (hoverLastLogged[key] && now - hoverLastLogged[key] < cooldownMs) return false;
  hoverLastLogged[key] = now;
  return true;
};

export const slugifyCardId = (text = '') =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
