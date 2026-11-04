import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { PRESET_LOGOS } from '../../constants/data';

export default function QrCanvas({
  qrCodeInstanceRef,
  data,
  dotsType,
  dotsColor,
  dotsGradientEnable,
  dotsColor2,
  dotsGradientType,
  cornersFrameType,
  cornersFrameColor,
  cornersDotType,
  cornersDotColor,
  customEyesColor,
  bgColor,
  selectedLogoId,
  customLogoSrc,
  logoSize,
  logoMargin,
  logoBgShape,
  logoBgColor
}) {
  const ref = useRef(null);

  // Determine logo image source
  const getLogoSrc = () => {
    if (selectedLogoId === 'custom') return customLogoSrc;
    if (selectedLogoId === 'none') return null;
    const preset = PRESET_LOGOS.find(l => l.id === selectedLogoId);
    return preset ? preset.src : null;
  };

  useEffect(() => {
    // Determine image background options for logo shield cutout
    const logoSrc = getLogoSrc();
    const imageOptions = logoSrc ? {
      crossOrigin: 'anonymous',
      margin: logoMargin,
      imageSize: logoSize,
      hideBackgroundDots: logoBgShape !== 'none'
    } : {};

    const options = {
      width: 280,
      height: 280,
      type: 'canvas',
      data: data || 'https://wa.me/6281234567890',
      image: logoSrc,
      dotsOptions: {
        type: dotsType || 'square',
        color: dotsColor || '#000000',
        gradient: dotsGradientEnable ? {
          type: dotsGradientType || 'linear',
          rotation: 0,
          colorStops: [
            { offset: 0, color: dotsColor },
            { offset: 1, color: dotsColor2 || dotsColor }
          ]
        } : undefined
      },
      cornersSquareOptions: {
        type: cornersFrameType || 'square',
        color: customEyesColor ? cornersFrameColor : undefined
      },
      cornersDotOptions: {
        type: cornersDotType || 'square',
        color: customEyesColor ? cornersDotColor : undefined
      },
      backgroundOptions: {
        color: bgColor === 'transparent' ? 'transparent' : (bgColor || '#ffffff')
      },
      imageOptions: imageOptions,
      qrOptions: {
        errorCorrectionLevel: logoSrc ? 'H' : 'Q'
      }
    };

    if (!qrCodeInstanceRef.current) {
      qrCodeInstanceRef.current = new QRCodeStyling(options);
      if (ref.current) {
        ref.current.innerHTML = '';
        qrCodeInstanceRef.current.append(ref.current);
      }
    } else {
      qrCodeInstanceRef.current.update(options);
    }
  }, [
    data,
    dotsType,
    dotsColor,
    dotsGradientEnable,
    dotsColor2,
    dotsGradientType,
    cornersFrameType,
    cornersFrameColor,
    cornersDotType,
    cornersDotColor,
    customEyesColor,
    bgColor,
    selectedLogoId,
    customLogoSrc,
    logoSize,
    logoMargin,
    logoBgShape,
    logoBgColor
  ]);

  return (
    <div className="qr-canvas-container">
      <div ref={ref} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
    </div>
  );
}
