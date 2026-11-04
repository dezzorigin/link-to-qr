// Data constants for WhatsApp Country Codes, Preset Themes, and SVG Logos

export const COUNTRY_CODES = [
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭' },
  { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
];

export const WA_MESSAGE_TEMPLATES = [
  { label: 'Tanya Produk / Order', text: 'Halo Admin, saya tertarik untuk pesan produk ini. Boleh minta detailnya?' },
  { label: 'Minta Pricelist / Katalog', text: 'Halo, bisakah saya minta katalog dan daftar harga terbaru?' },
  { label: 'Customer Service / Bantuan', text: 'Halo CS, saya perlu bantuan terkait layanan/layanan pesan saya.' },
  { label: 'Booking / Reservasi', text: 'Halo, saya mau buat reservasi untuk tanggal...' },
  { label: 'Tanya Alamat / Lokasi', text: 'Halo, boleh tau alamat lengkap dan lokasi terdekat?' },
];

// SVG Logo string presets
export const PRESET_LOGOS = [
  {
    id: 'none',
    name: 'Tanpa Logo',
    icon: 'x',
    src: null
  },
  {
    id: 'whatsapp-green',
    name: 'WhatsApp Hijau',
    icon: 'message-circle',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="%2325D366"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>`
  },
  {
    id: 'whatsapp-white',
    name: 'WhatsApp Putih',
    icon: 'message-circle',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="%23FFFFFF"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>`
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'instagram',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="%23E1306C"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>`
  },
  {
    id: 'globe',
    name: 'Website / Globe',
    icon: 'globe',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%233B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
  },
  {
    id: 'wifi',
    name: 'Wi-Fi Icon',
    icon: 'wifi',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2310B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`
  },
  {
    id: 'store',
    name: 'Toko / Shop',
    icon: 'shopping-bag',
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`
  }
];

export const PRESET_THEMES = [
  {
    id: 'wa-official',
    name: 'WhatsApp Official',
    description: 'Hijau khas WhatsApp dengan titik halus dan logo pusat',
    dotsType: 'rounded',
    dotsColor: '#25D366',
    dotsGradientEnable: false,
    cornersFrameType: 'extra-rounded',
    cornersFrameColor: '#128C7E',
    cornersDotType: 'dot',
    cornersDotColor: '#25D366',
    bgColor: '#ffffff',
    logoId: 'whatsapp-green',
    logoSize: 0.28,
    logoBgShape: 'circle',
    logoBgColor: '#ffffff'
  },
  {
    id: 'emerald-luxury',
    name: 'Emerald Dark',
    description: 'Nuansa gelap elegan dengan hijau zamrud menyala',
    dotsType: 'classy-rounded',
    dotsColor: '#10B981',
    dotsGradientEnable: true,
    dotsColor2: '#059669',
    dotsGradientType: 'linear',
    cornersFrameType: 'circle',
    cornersFrameColor: '#34D399',
    cornersDotType: 'dot',
    cornersDotColor: '#10B981',
    bgColor: '#0F172A',
    logoId: 'whatsapp-white',
    logoSize: 0.25,
    logoBgShape: 'circle',
    logoBgColor: '#0F172A'
  },
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk Neon',
    description: 'Gradasi ungu dan cyan futuristik',
    dotsType: 'extra-rounded',
    dotsColor: '#EC4899',
    dotsGradientEnable: true,
    dotsColor2: '#06B6D4',
    dotsGradientType: 'linear',
    cornersFrameType: 'extra-rounded',
    cornersFrameColor: '#06B6D4',
    cornersDotType: 'dot',
    cornersDotColor: '#F43F5E',
    bgColor: '#0B0F19',
    logoId: 'whatsapp-white',
    logoSize: 0.25,
    logoBgShape: 'rounded-square',
    logoBgColor: '#0B0F19'
  },
  {
    id: 'gold-deluxe',
    name: 'Gold Deluxe',
    description: 'Mewah bermotif emas dengan frame melengkung',
    dotsType: 'classy',
    dotsColor: '#F59E0B',
    dotsGradientEnable: true,
    dotsColor2: '#D97706',
    dotsGradientType: 'linear',
    cornersFrameType: 'extra-rounded',
    cornersFrameColor: '#FBBF24',
    cornersDotType: 'square',
    cornersDotColor: '#D97706',
    bgColor: '#18181B',
    logoId: 'store',
    logoSize: 0.25,
    logoBgShape: 'circle',
    logoBgColor: '#18181B'
  },
  {
    id: 'minimal-monochrome',
    name: 'Minimal Classic',
    description: 'Hitam putih bersih dan kontras tinggi',
    dotsType: 'square',
    dotsColor: '#000000',
    dotsGradientEnable: false,
    cornersFrameType: 'square',
    cornersFrameColor: '#000000',
    cornersDotType: 'square',
    cornersDotColor: '#000000',
    bgColor: '#FFFFFF',
    logoId: 'whatsapp-green',
    logoSize: 0.24,
    logoBgShape: 'circle',
    logoBgColor: '#FFFFFF'
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Gradient',
    description: 'Gradasi biru laut yang menyegarkan',
    dotsType: 'rounded',
    dotsColor: '#3B82F6',
    dotsGradientEnable: true,
    dotsColor2: '#06B6D4',
    dotsGradientType: 'linear',
    cornersFrameType: 'circle',
    cornersFrameColor: '#2563EB',
    cornersDotType: 'dot',
    cornersDotColor: '#0284C7',
    bgColor: '#FFFFFF',
    logoId: 'globe',
    logoSize: 0.25,
    logoBgShape: 'circle',
    logoBgColor: '#FFFFFF'
  }
];
