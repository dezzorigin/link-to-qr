import React from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ScannabilityBadge({ hasLogo, logoSize, bgColor, dotsColor }) {
  const isHighRatio = logoSize > 0.35;
  const isTransparent = bgColor === 'transparent';

  return (
    <div className={`scannability-badge ${isHighRatio ? 'scannability-warn' : 'scannability-good'}`}>
      {isHighRatio ? (
        <>
          <AlertTriangle size={15} />
          <span>Perhatian: Ukuran logo cukup besar ({Math.round(logoSize * 100)}%). Rekomendasi di bawah 32%.</span>
        </>
      ) : (
        <>
          <ShieldCheck size={15} />
          <span>100% Siap Scan! (Error Correction High H - Berfungsi dengan Logo)</span>
        </>
      )}
    </div>
  );
}
