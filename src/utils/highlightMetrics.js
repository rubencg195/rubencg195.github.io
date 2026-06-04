import React from 'react';

// Dollar amounts, percentages, N+, and spelled-out team sizes from resume bullets
const METRIC_PATTERN =
  /(?:over\s+)?\$[\d,]+[KkMm]?\+?|\d+(?:\.\d+)?%|\d+\+|\bsix developers\b|\bone co-op student\b/gi;

/**
 * Splits achievement copy and wraps metrics (values, %, $, counts) in <strong>.
 */
export function renderAchievementWithMetrics(text) {
  if (!text || typeof text !== 'string') {
    return text;
  }

  const parts = [];
  let lastIndex = 0;
  const regex = new RegExp(METRIC_PATTERN.source, METRIC_PATTERN.flags);
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong
        key={`${match.index}-${match[0]}`}
        className="font-semibold text-surface-900 dark:text-white"
      >
        {match[0]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
