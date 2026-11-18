import { PRESET_LOGOS } from '../constants/data';

/**
 * Build the qr-code-styling options object from the studio config.
 * Shared by QrCanvas (live preview) and ExportControls (high-res export),
 * so the exported file is always exactly what the preview shows.
 */
export function resolveLogoSrc(selectedLogoId, customLogoSrc) {
  if (selectedLogoId === 'custom') return customLogoSrc;
  if (selectedLogoId === 'none') return null;
  const preset = PRESET_LOGOS.find((l) => l.id === selectedLogoId);
  return preset ? preset.src : null;
}

export function buildQrOptions(config, data, size = 280) {
  const logoSrc = resolveLogoSrc(config.selectedLogoId, config.customLogoSrc);
  return {
    width: size,
    height: size,
    type: 'canvas',
    data: data || 'https://wa.me/6281234567890',
    image: logoSrc,
    dotsOptions: {
      type: config.dotsType || 'square',
      color: config.dotsColor || '#000000',
      gradient: config.dotsGradientEnable
        ? {
            type: config.dotsGradientType || 'linear',
            rotation: 0,
            colorStops: [
              { offset: 0, color: config.dotsColor },
              { offset: 1, color: config.dotsColor2 || config.dotsColor },
            ],
          }
        : undefined,
    },
    cornersSquareOptions: {
      type: config.cornersFrameType || 'square',
      color: config.customEyesColor ? config.cornersFrameColor : undefined,
    },
    cornersDotOptions: {
      type: config.cornersDotType || 'square',
      color: config.customEyesColor ? config.cornersDotColor : undefined,
    },
    backgroundOptions: {
      color:
        config.bgColor === 'transparent'
          ? 'transparent'
          : config.bgColor || '#ffffff',
    },
    imageOptions: logoSrc
      ? {
          crossOrigin: 'anonymous',
          margin: config.logoMargin,
          imageSize: config.logoSize,
          hideBackgroundDots: config.logoBgShape !== 'none',
        }
      : {},
    qrOptions: {
      errorCorrectionLevel: logoSrc ? 'H' : 'Q',
    },
  };
}
