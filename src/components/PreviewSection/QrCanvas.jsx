import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { buildQrOptions } from '../../utils/buildQrOptions';

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
  logoBgColor,
}) {
  const ref = useRef(null);

  const config = {
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
    logoBgColor,
  };

  useEffect(() => {
    const options = buildQrOptions(config, data, 280);

    if (!qrCodeInstanceRef.current) {
      qrCodeInstanceRef.current = new QRCodeStyling(options);
      if (ref.current) {
        ref.current.innerHTML = '';
        qrCodeInstanceRef.current.append(ref.current);
      }
    } else {
      qrCodeInstanceRef.current.update(options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    logoBgColor,
  ]);

  return (
    <div className="qr-canvas-container">
      <div
        ref={ref}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </div>
  );
}
