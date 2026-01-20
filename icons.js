// SVG Line Icons for indulgence items
const ICONS = {
    // Smoking & Vaping
    cigarettes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="14" width="16" height="5" rx="1"/>
        <line x1="18" y1="14" x2="18" y2="19"/>
        <path d="M20 14v-2a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2V6"/>
        <path d="M22 14v-2a2 2 0 0 0-4 0v2"/>
    </svg>`,

    vape: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="8" y="6" width="8" height="14" rx="2"/>
        <line x1="10" y1="10" x2="14" y2="10"/>
        <circle cx="12" cy="16" r="1.5"/>
        <path d="M10 6V4a2 2 0 0 1 4 0v2"/>
        <path d="M9 2c0 1-1 2-1 3"/>
        <path d="M15 2c0 1 1 2 1 3"/>
    </svg>`,

    // Alcohol
    beer_pub: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 11h1a3 3 0 0 1 0 6h-1"/>
        <path d="M5 8h12v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8Z"/>
        <path d="M5 8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4"/>
        <line x1="8" y1="12" x2="8" y2="16"/>
        <line x1="12" y1="11" x2="12" y2="17"/>
    </svg>`,

    beer_store: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 22V7l-2-2V3h12v2l-2 2v15"/>
        <path d="M8 7h8"/>
        <path d="M10 3v4"/>
        <path d="M14 3v4"/>
        <ellipse cx="12" cy="14" rx="3" ry="2"/>
    </svg>`,

    wine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 22h8"/>
        <path d="M12 15v7"/>
        <path d="M5.5 9c.3 3.3 2 6 6.5 6s6.2-2.7 6.5-6"/>
        <path d="M5 3h14l-.5 6H5.5L5 3z"/>
    </svg>`,

    shot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 22h12"/>
        <path d="M7 22l1-12h8l1 12"/>
        <path d="M6 10h12"/>
        <path d="M10 6l1-4h2l1 4"/>
    </svg>`,

    cocktail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 22h8"/>
        <path d="M12 15v7"/>
        <path d="M4 3h16l-6 12H10L4 3z"/>
        <line x1="6" y1="6" x2="18" y2="6"/>
        <circle cx="15" cy="4" r="1"/>
        <path d="M17 2l2 3"/>
    </svg>`,

    // Coffee & Drinks
    coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="2" x2="6" y2="4"/>
        <line x1="10" y1="2" x2="10" y2="4"/>
        <line x1="14" y1="2" x2="14" y2="4"/>
    </svg>`,

    cappuccino: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
        <ellipse cx="10" cy="12" rx="4" ry="2"/>
        <path d="M8 12c0-1 .9-2 2-2s2 1 2 2"/>
    </svg>`,

    energy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="4" width="12" height="18" rx="2"/>
        <line x1="6" y1="8" x2="18" y2="8"/>
        <path d="M13 12l-2 4h3l-2 4"/>
    </svg>`,

    soda: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 6h12l-1 16H7L6 6z"/>
        <path d="M6 6l1-4h10l1 4"/>
        <ellipse cx="12" cy="11" rx="3" ry="1.5"/>
        <line x1="12" y1="12.5" x2="12" y2="16"/>
    </svg>`,

    // Food
    bigmac: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 15h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        <path d="M5 15V9a7 7 0 0 1 14 0v6"/>
        <line x1="4" y1="12" x2="20" y2="12"/>
        <path d="M4 18h16a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4z"/>
        <circle cx="7" cy="10" r="0.5" fill="currentColor"/>
        <circle cx="12" cy="10" r="0.5" fill="currentColor"/>
        <circle cx="17" cy="10" r="0.5" fill="currentColor"/>
    </svg>`,

    fastfood: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 12h16l-2 10H6L4 12z"/>
        <path d="M4 12c0-4 3.5-8 8-8s8 4 8 8"/>
        <path d="M8 18l1-4"/>
        <path d="M12 18v-4"/>
        <path d="M16 18l-1-4"/>
    </svg>`,

    candy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="7" width="14" height="10" rx="2"/>
        <path d="M5 10l-3-2v4l3-2"/>
        <path d="M19 10l3-2v4l-3-2"/>
        <line x1="9" y1="7" x2="9" y2="17"/>
        <line x1="15" y1="7" x2="15" y2="17"/>
    </svg>`,

    chips: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
        <path d="M4 8h16"/>
        <path d="M8 12c1 1 2 2 4 2s3-1 4-2"/>
        <path d="M8 16c1 .5 2 1 4 1s3-.5 4-1"/>
    </svg>`,

    // Gambling
    lottery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <circle cx="8" cy="15" r="2"/>
        <circle cx="16" cy="15" r="2"/>
        <path d="M12 10v4"/>
        <path d="M10 12h4"/>
    </svg>`,

    // Gen Z Items
    monster: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 2h8l1 4H7L8 2z"/>
        <rect x="6" y="6" width="12" height="16" rx="2"/>
        <path d="M9 10l2 4-2 4"/>
        <path d="M15 10l-2 4 2 4"/>
    </svg>`,

    zyn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="12" cy="12" r="2"/>
    </svg>`,

    netflix: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2"/>
        <path d="M8 7v10l4-5 4 5V7"/>
    </svg>`,

    spotify: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 9c2.5-.5 5.5-.5 8 1"/>
        <path d="M8 12c2-.4 4.5-.4 6.5.8"/>
        <path d="M9 15c1.5-.3 3.5-.3 5 .6"/>
    </svg>`,

    uber_eats: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <path d="M12 11V8"/>
        <circle cx="12" cy="5" r="3"/>
        <path d="M7 16h2"/>
        <path d="M15 16h2"/>
    </svg>`,

    kratom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2c-4 4-6 8-6 12a6 6 0 0 0 12 0c0-4-2-8-6-12z"/>
        <path d="M12 8v8"/>
        <path d="M9 12h6"/>
    </svg>`,

    weed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22v-8"/>
        <path d="M12 14c-4 0-7-3-7-7 3 0 5 1 7 4 2-3 4-4 7-4 0 4-3 7-7 7z"/>
        <path d="M12 10c0-4 0-6 0-8"/>
        <path d="M8 6c2 1 3 3 4 4"/>
        <path d="M16 6c-2 1-3 3-4 4"/>
    </svg>`,

    cocaine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 14h16"/>
        <path d="M6 10h12"/>
        <path d="M8 6h8"/>
        <path d="M20 18l-3-3"/>
        <path d="M17 18h3v-3"/>
    </svg>`
};

// Category definitions
const CATEGORIES = {
    smoking: {
        id: 'smoking',
        items: ['cigarettes', 'vape', 'zyn']
    },
    alcohol: {
        id: 'alcohol',
        items: ['beer_pub', 'beer_store', 'wine', 'shot', 'cocktail']
    },
    caffeine: {
        id: 'caffeine',
        items: ['coffee', 'cappuccino', 'energy', 'monster', 'soda']
    },
    food: {
        id: 'food',
        items: ['bigmac', 'fastfood', 'candy', 'chips', 'uber_eats']
    },
    subscriptions: {
        id: 'subscriptions',
        items: ['netflix', 'spotify']
    },
    substances: {
        id: 'substances',
        items: ['weed', 'kratom', 'cocaine']
    },
    gambling: {
        id: 'gambling',
        items: ['lottery']
    }
};

// Category translations
const CATEGORY_TRANSLATIONS = {
    CZ: { all: 'Vše', smoking: 'Kouření', alcohol: 'Alkohol', caffeine: 'Kofein', food: 'Jídlo', subscriptions: 'Předplatné', substances: 'Drogy', gambling: 'Hazard' },
    US: { all: 'All', smoking: 'Smoking', alcohol: 'Alcohol', caffeine: 'Caffeine', food: 'Food', subscriptions: 'Subs', substances: 'Substances', gambling: 'Gambling' },
    GB: { all: 'All', smoking: 'Smoking', alcohol: 'Alcohol', caffeine: 'Caffeine', food: 'Food', subscriptions: 'Subs', substances: 'Substances', gambling: 'Gambling' },
    EU: { all: 'All', smoking: 'Smoking', alcohol: 'Alcohol', caffeine: 'Caffeine', food: 'Food', subscriptions: 'Subs', substances: 'Substances', gambling: 'Gambling' },
    FR: { all: 'Tout', smoking: 'Tabac', alcohol: 'Alcool', caffeine: 'Caféine', food: 'Nourriture', subscriptions: 'Abos', substances: 'Drogues', gambling: 'Jeux' },
    IT: { all: 'Tutti', smoking: 'Fumo', alcohol: 'Alcol', caffeine: 'Caffeina', food: 'Cibo', subscriptions: 'Abbonamenti', substances: 'Sostanze', gambling: 'Gioco' },
    PL: { all: 'Wszystko', smoking: 'Palenie', alcohol: 'Alkohol', caffeine: 'Kofeina', food: 'Jedzenie', subscriptions: 'Subskrypcje', substances: 'Używki', gambling: 'Hazard' },
    DE: { all: 'Alle', smoking: 'Rauchen', alcohol: 'Alkohol', caffeine: 'Koffein', food: 'Essen', subscriptions: 'Abos', substances: 'Drogen', gambling: 'Glücksspiel' },
    SK: { all: 'Všetko', smoking: 'Fajčenie', alcohol: 'Alkohol', caffeine: 'Kofeín', food: 'Jedlo', subscriptions: 'Predplatné', substances: 'Drogy', gambling: 'Hazard' },
    HU: { all: 'Összes', smoking: 'Dohányzás', alcohol: 'Alkohol', caffeine: 'Koffein', food: 'Étel', subscriptions: 'Előfizetések', substances: 'Szerek', gambling: 'Szerencsejáték' }
};

// Export for use in main app
window.ICONS = ICONS;
window.CATEGORIES = CATEGORIES;
window.CATEGORY_TRANSLATIONS = CATEGORY_TRANSLATIONS;
