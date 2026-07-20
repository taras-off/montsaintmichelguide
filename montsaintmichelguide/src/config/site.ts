// Single source of commercial/config truth (MASTER SPEC §5). Edit here only.
export const site = {
  attraction: 'Mont-Saint-Michel',
  domain: 'montsaintmichelguide.com',
  baseUrl: 'https://montsaintmichelguide.com',
  poweredBy: 'TouringBee',
  // Product / commerce
  product: {
    url: 'https://touringbee.com/product/mont-saint-michel-audioguide/',
    price: '9.99',
    currency: 'EUR',
    rating: 4.8,
    reviewCount: 128,        // TODO: real count
    bokunChannel: '138300de-1767-4a3a-acec-eeb95ea97610',
    bokunProduct: '835075',
  },
  affiliate: { wpam_id: '40' },
  audioPreview: 'https://touringbee.com/wp-content/uploads/normandyt1_en_intro-1.mp3',
  // hreflang languages (public site, 8 langs). "path" is the locale prefix.
  languages: [
    { code: 'en', label: 'English',    path: '' },
    { code: 'fr', label: 'Français',   path: '/fr' },
    { code: 'de', label: 'Deutsch',    path: '/de' },
    { code: 'es', label: 'Español',    path: '/es' },
    { code: 'it', label: 'Italiano',   path: '/it' },
    { code: 'pt', label: 'Português',  path: '/pt' },
    { code: 'pl', label: 'Polski',     path: '/pl' },
    { code: 'ru', label: 'Русский',    path: '/ru' },
  ],
};

// Build a TouringBee product CTA URL with BOTH affiliate (?wpam_id) and UTM (per Eugene 2026-07-20).
export function ctaUrl(position: string) {
  const u = new URL(site.product.url);
  u.searchParams.set('wpam_id', site.affiliate.wpam_id);
  u.searchParams.set('utm_source', site.domain);
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', 'msm_pillar');
  u.searchParams.set('utm_content', position);
  return u.toString();
}
