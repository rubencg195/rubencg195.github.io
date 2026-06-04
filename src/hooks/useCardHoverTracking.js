import { logCardHover } from '../utils/firebaseConfig';
import { shouldLogCardHover, slugifyCardId } from '../utils/analyticsDedupe';

/**
 * Returns a mouse-enter handler that logs card_hover (debounced per card per session).
 */
export const createCardHoverHandler = (cardType, cardLabel, cardIdOverride) => {
  const cardId = cardIdOverride || slugifyCardId(cardLabel);

  return () => {
    const key = `${cardType}:${cardId}`;
    if (!shouldLogCardHover(key)) return;
    logCardHover(cardType, cardId, cardLabel);
  };
};
