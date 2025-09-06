// Utility to parse and render Unicode icons from README content

/**
 * Parse Unicode characters and convert them to proper React elements
 */
export const parseUnicodeIcons = (text) => {
  if (!text) return text;

  // Common Unicode icon mappings
  const unicodeIconMap = {
    '🔒': '🔒', // lock
    '🛡️': '🛡️', // shield
    '⚡': '⚡', // lightning
    '🚀': '🚀', // rocket
    '💻': '💻', // laptop
    '🌐': '🌐', // globe
    '📱': '📱', // mobile phone
    '🔧': '🔧', // wrench
    '⚙️': '⚙️', // gear
    '📊': '📊', // bar chart
    '🎯': '🎯', // target
    '✅': '✅', // check mark
    '❌': '❌', // cross mark
    '⚠️': '⚠️', // warning
    'ℹ️': 'ℹ️', // information
    '🔍': '🔍', // magnifying glass
    '📝': '📝', // memo
    '🔗': '🔗', // link
    '📦': '📦', // package
    '🏗️': '🏗️', // building construction
    '🔐': '🔐', // locked with key
    '🌍': '🌍', // earth globe
    '💡': '💡', // light bulb
    '🎨': '🎨', // artist palette
    '📈': '📈', // trending up
    '🔒': '🔒', // lock
    '🔓': '🔓', // unlocked
    '🎪': '🎪', // circus tent
    '🏆': '🏆', // trophy
    '⭐': '⭐', // star
    '🔥': '🔥', // fire
    '💎': '💎', // gem stone
    '🎉': '🎉', // party popper
    '🚨': '🚨', // police car light
    '📋': '📋', // clipboard
    '🔔': '🔔', // bell
    '🎁': '🎁', // wrapped gift
    '🏁': '🏁', // chequered flag
    '🎊': '🎊', // confetti ball
    '🎈': '🎈', // balloon
    '🎀': '🎀', // ribbon
    '🎂': '🎂', // birthday cake
    '🍰': '🍰', // shortcake
    '🎃': '🎃', // jack-o-lantern
    '🎄': '🎄', // christmas tree
    '🎆': '🎆', // fireworks
    '🎇': '🎇', // sparkler
    '🎪': '🎪', // circus tent
    '🎭': '🎭', // performing arts
    '🎨': '🎨', // artist palette
    '🎩': '🎩', // top hat
    '🎪': '🎪', // circus tent
    '🎫': '🎫', // admission tickets
    '🎬': '🎬', // clapper board
    '🎭': '🎭', // performing arts
    '🎮': '🎮', // video game
    '🎯': '🎯', // direct hit
    '🎰': '🎰', // slot machine
    '🎱': '🎱', // billiards
    '🎲': '🎲', // game die
    '🎳': '🎳', // bowling
    '🎴': '🎴', // flower playing cards
    '🎵': '🎵', // musical note
    '🎶': '🎶', // musical notes
    '🎷': '🎷', // saxophone
    '🎸': '🎸', // guitar
    '🎹': '🎹', // musical keyboard
    '🎺': '🎺', // trumpet
    '🎻': '🎻', // violin
    '🎼': '🎼', // musical score
    '🎽': '🎽', // running shirt
    '🎾': '🎾', // tennis
    '🎿': '🎿', // skis
    '🏀': '🏀', // basketball
    '🏁': '🏁', // chequered flag
    '🏂': '🏂', // snowboarder
    '🏃': '🏃', // runner
    '🏄': '🏄', // surfer
    '🏅': '🏅', // sports medal
    '🏆': '🏆', // trophy
    '🏇': '🏇', // horse racing
    '🏈': '🏈', // american football
    '🏉': '🏉', // rugby football
    '🏊': '🏊', // swimmer
    '🏋': '🏋', // weight lifter
    '🏌': '🏌', // golfer
    '🏍': '🏍', // racing motorcycle
    '🏎': '🏎', // racing car
    '🏏': '🏏', // cricket bat and ball
    '🏐': '🏐', // volleyball
    '🏑': '🏑', // field hockey
    '🏒': '🏒', // ice hockey
    '🏓': '🏓', // table tennis
    '🏔': '🏔', // snow capped mountain
    '🏕': '🏕', // camping
    '🏖': '🏖', // beach with umbrella
    '🏗': '🏗', // building construction
    '🏘': '🏘', // house buildings
    '🏙': '🏙', // cityscape
    '🏚': '🏚', // derelict house
    '🏛': '🏛', // classical building
    '🏜': '🏜', // desert
    '🏝': '🏝', // desert island
    '🏞': '🏞', // national park
    '🏟': '🏟', // stadium
    '🏠': '🏠', // house
    '🏡': '🏡', // house with garden
    '🏢': '🏢', // office building
    '🏣': '🏣', // japanese post office
    '🏤': '🏤', // european post office
    '🏥': '🏥', // hospital
    '🏦': '🏦', // bank
    '🏧': '🏧', // automated teller machine
    '🏨': '🏨', // hotel
    '🏩': '🏩', // love hotel
    '🏪': '🏪', // convenience store
    '🏫': '🏫', // school
    '🏬': '🏬', // department store
    '🏭': '🏭', // factory
    '🏮': '🏮', // izakaya lantern
    '🏯': '🏯', // japanese castle
    '🏰': '🏰', // european castle
    '🏳': '🏳', // white flag
    '🏴': '🏴', // black flag
    '🏵': '🏵', // rosette
    '🏶': '🏶', // label
    '🏷': '🏷', // label
    '🏸': '🏸', // badminton
    '🏹': '🏹', // bow and arrow
    '🏺': '🏺', // amphora
    '🏻': '🏻', // light skin tone
    '🏼': '🏼', // medium-light skin tone
    '🏽': '🏽', // medium skin tone
    '🏾': '🏾', // medium-dark skin tone
    '🏿': '🏿', // dark skin tone
  };

  // Replace Unicode characters with proper React elements
  let processedText = text;
  
  // Handle common Unicode patterns
  Object.keys(unicodeIconMap).forEach(unicode => {
    const regex = new RegExp(unicode, 'g');
    processedText = processedText.replace(regex, unicode);
  });

  return processedText;
};

/**
 * Create a React component that renders Unicode icons properly
 */
export const UnicodeIcon = ({ unicode, className = "", size = "1em" }) => {
  return (
    <span 
      className={`unicode-icon ${className}`}
      style={{ 
        fontSize: size,
        display: 'inline-block',
        lineHeight: 1,
        verticalAlign: 'middle'
      }}
      role="img"
      aria-label="icon"
    >
      {unicode}
    </span>
  );
};

/**
 * Parse text and extract Unicode icons
 */
export const extractUnicodeIcons = (text) => {
  if (!text) return [];
  
  // Unicode emoji regex pattern
  const unicodeRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu;
  
  const matches = text.match(unicodeRegex);
  return matches || [];
};
