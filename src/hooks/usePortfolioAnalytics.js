import { useEffect } from 'react';
import { logSectionView, logScrollDepth } from '../utils/firebaseConfig';
import { resetPortfolioSessionAnalytics, shouldLogScrollDepth, shouldLogSectionView } from '../utils/analyticsDedupe';

const HOME_SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
const SCROLL_THRESHOLDS = [25, 50, 75, 100];

/**
 * Tracks section visibility and scroll depth on the single-page home route.
 */
export const usePortfolioAnalytics = (enabled) => {
  useEffect(() => {
    if (!enabled) return undefined;

    const observers = [];

    HOME_SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            if (shouldLogSectionView(sectionId)) {
              logSectionView(sectionId);
            }
          }
        },
        { threshold: [0.35, 0.5] }
      );

      observer.observe(element);
      observers.push(observer);
    });

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight <= 0) return;

      const percent = Math.round((scrollTop / scrollHeight) * 100);
      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (percent >= threshold && shouldLogScrollDepth(threshold)) {
          logScrollDepth(threshold);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener('scroll', handleScroll);
      resetPortfolioSessionAnalytics();
    };
  }, [enabled]);
};
