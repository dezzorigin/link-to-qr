import React, { useRef } from 'react';
import { PRESET_LOGOS } from '../../constants/data';
import { Image, Upload, X, ShieldAlert, Sparkles } from 'lucide-react';

export default function LogoStudio({
  selectedLogoId,
  setSelectedLogoId,
  customLogoSrc,
  setCustomLogoSrc,
  logoSize,
  setLogoSize,
  logoMargin,
  setLogoMargin,
  logoBgShape,
  setLogoBgShape,
  logoBgColor,
  setLogoBgColor
}) {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file maksimal 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomLogoSrc(event.target.result);
        setSelectedLogoId('custom');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPreset = (logo) => {
    if (logo.id === 'none') {
      setSelectedLogoId('none');
      setCustomLogoSrc(null);
    } else {
      setSelectedLogoId(logo.id);
    }
  };

  return (
    <div className="logo-studio" style={{ marginBottom: '24px' }}>
      {/* Preset Icons & Upload */}
      <div className="form-group">
        <label className="form-label" style={{ marginBottom: '10px' }}>
          Pilih Logo Tengah (Custom Logo)
        </label>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px', marginBottom: '14px' }}>
          {PRESET_LOGOS.map((logo) => (
            <button
              key={logo.id}
              type="button"
              className={`shape-card ${selectedLogoId === logo.id && !customLogoSrc ? 'active' : ''}`}
              onClick={() => handleSelectPreset(logo)}
              style={{ padding: '10px 6px' }}
            >
              {logo.id === 'none' ? (
                <X size={20} style={{ color: 'var(--text-muted)' }} />
              ) : (
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                />
              )}
              <span style={{ fontSize: '11px' }}>{logo.name}</span>
            </button>
          ))}

          {/* Upload Custom File Button */}
          <button
            type="button"
            className={`shape-card ${selectedLogoId === 'custom' ? 'active' : ''}`}
            onClick={() => fileInputRef.current?.click()}
            style={{ padding: '10px 6px', borderStyle: 'dashed' }}
          >
            {customLogoSrc ? (
              <img
                src={customLogoSrc}
                alt="Custom Logo"
                style={{ width: '24px', height: '24px', objectFit: 'contain', borderRadius: '4px' }}
              />
            ) : (
              <Upload size={20} style={{ color: 'var(--accent-wa)' }} />
            )}
            <span style={{ fontSize: '11px', color: customLogoSrc ? 'var(--text-main)' : 'var(--accent-wa)' }}>
              {customLogoSrc ? 'Ganti Logo' : 'Upload File'}
            </span>
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/png, image/jpeg, image/svg+xml, image/webp"
            style={{ display: 'none' }}
          />
        </div>
      </div>

      {/* If Logo Selected, Show Adjustments */}
      {(selectedLogoId !== 'none' || customLogoSrc) && (
        <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
          {/* Logo Size Slider */}
          <div className="form-group" style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-main)', marginBottom: '6px' }}>
              <span>Ukuran Logo:</span>
              <span style={{ fontWeight: '600' }}>{Math.round(logoSize * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="0.4"
              step="0.02"
              value={logoSize}
              onChange={(e) => setLogoSize(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-wa)' }}
            />
          </div>

          {/* Logo Margin Slider */}
          <div className="form-group" style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-main)', marginBottom: '6px' }}>
              <span>Margin / Jarak Pinggir Logo:</span>
              <span style={{ fontWeight: '600' }}>{logoMargin} px</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={logoMargin}
              onChange={(e) => setLogoMargin(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-wa)' }}
            />
          </div>

          {/* Background Badge Shield shape & color */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '12px' }}>Bentuk Pelindung Logo</label>
              <select
                className="select-control"
                value={logoBgShape}
                onChange={(e) => setLogoBgShape(e.target.value)}
                style={{ fontSize: '12px', padding: '8px' }}
              >
                <option value="circle">Lingkaran (Circle Badge)</option>
                <option value="rounded-square">Persegi Tumpul (Rounded)</option>
                <option value="none">Tanpa Pelindung (Transparan)</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '12px' }}>Warna Pelindung</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 0, 0, 0.4)', padding: '4px 10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)' }}>
                <input
                  type="color"
                  value={logoBgColor}
                  onChange={(e) => setLogoBgColor(e.target.value)}
                  style={{ width: '26px', height: '26px', border: 'none', background: 'none', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '11px', fontFamily: 'monospace' }}>{logoBgColor}</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '14px', fontSize: '11px', color: 'var(--text-muted)', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <Sparkles size={13} style={{ color: 'var(--accent-wa)', flexShrink: 0 }} /> Pelindung logo otomatis memotong titik-titik QR agar logo tampak bersih dan QR mudah di-scan!
          </div>
        </div>
      )}
    </div>
  );
}
