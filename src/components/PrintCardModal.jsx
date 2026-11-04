import React, { useState, useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { X, Printer, Download, Sparkles } from 'lucide-react';
import { PRESET_LOGOS } from '../constants/data';

export default function PrintCardModal({ isOpen, onClose, qrConfig, currentData }) {
  const [cardTitle, setCardTitle] = useState('SCAN UNTUK CHAT WHATSAPP');
  const [cardSubtitle, setCardSubtitle] = useState('Hubungi admin kami langsung untuk pemesanan & konsultasi gratis');
  const [cardFooter, setCardFooter] = useState('Buka Setiap Hari: 08.00 - 21.00 WIB');
  const [themeStyle, setThemeStyle] = useState('modern'); // modern, minimal, dark

  const cardQrRef = useRef(null);
  const cardQrInstance = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Render high-res version of the current QR inside the printable card
    const logoSrc = (() => {
      if (qrConfig.selectedLogoId === 'custom') return qrConfig.customLogoSrc;
      if (qrConfig.selectedLogoId === 'none') return null;
      const preset = PRESET_LOGOS.find(l => l.id === qrConfig.selectedLogoId);
      return preset ? preset.src : null;
    })();

    const options = {
      width: 220,
      height: 220,
      type: 'canvas',
      data: currentData || 'https://wa.me/6281234567890',
      image: logoSrc,
      dotsOptions: {
        type: qrConfig.dotsType,
        color: qrConfig.dotsColor
      },
      cornersSquareOptions: {
        type: qrConfig.cornersFrameType,
        color: qrConfig.customEyesColor ? qrConfig.cornersFrameColor : undefined
      },
      cornersDotOptions: {
        type: qrConfig.cornersDotType,
        color: qrConfig.customEyesColor ? qrConfig.cornersDotColor : undefined
      },
      backgroundOptions: {
        color: '#ffffff'
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: qrConfig.logoMargin,
        imageSize: qrConfig.logoSize,
        hideBackgroundDots: qrConfig.logoBgShape !== 'none'
      },
      qrOptions: {
        errorCorrectionLevel: 'H'
      }
    };

    if (cardQrRef.current) {
      cardQrRef.current.innerHTML = '';
      cardQrInstance.current = new QRCodeStyling(options);
      cardQrInstance.current.append(cardQrRef.current);
    }
  }, [isOpen, qrConfig, currentData]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Printer size={20} style={{ color: 'var(--accent-wa)' }} />
            <h3 className="font-heading" style={{ fontSize: '18px', fontWeight: '700' }}>
              Generator Display Standee / Kartu Meja Cetak
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Controls for Card */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Judul Utama Standee</label>
            <input
              type="text"
              className="input-control"
              value={cardTitle}
              onChange={(e) => setCardTitle(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Catatan Footer / Jam Buka</label>
            <input
              type="text"
              className="input-control"
              value={cardFooter}
              onChange={(e) => setCardFooter(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label className="form-label">Deskripsi / Subtitle Kartu</label>
          <input
            type="text"
            className="input-control"
            value={cardSubtitle}
            onChange={(e) => setCardSubtitle(e.target.value)}
          />
        </div>

        {/* Interactive Printable Standee Preview */}
        <div className="printable-card standee-card-preview">
          <div style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '1px',
            color: '#128C7E',
            textTransform: 'uppercase',
            marginBottom: '4px'
          }}>
            OFFICIAL WHATSAPP QR
          </div>
          <div className="standee-header">{cardTitle}</div>
          <div className="standee-sub">{cardSubtitle}</div>
          
          <div className="standee-qr-box" ref={cardQrRef} />

          {cardFooter && (
            <div className="standee-footer">
              {cardFooter}
            </div>
          )}
        </div>

        {/* Footer Modal Actions */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Batal
          </button>
          <button type="button" className="btn btn-primary" onClick={handlePrint}>
            <Printer size={16} /> Cetak / Save PDF
          </button>
        </div>
      </div>
    </div>
  );
}
