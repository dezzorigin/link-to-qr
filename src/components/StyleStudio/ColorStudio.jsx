import React from 'react';
import { Palette, Eye } from 'lucide-react';

export default function ColorStudio({
  dotsColor,
  setDotsColor,
  dotsGradientEnable,
  setDotsGradientEnable,
  dotsColor2,
  setDotsColor2,
  dotsGradientType,
  setDotsGradientType,
  cornersFrameColor,
  setCornersFrameColor,
  cornersDotColor,
  setCornersDotColor,
  customEyesColor,
  setCustomEyesColor,
  bgColor,
  setBgColor
}) {
  return (
    <div className="color-studio" style={{ marginBottom: '24px' }}>
      {/* Foreground Body Color */}
      <div className="form-group">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <label className="form-label" style={{ margin: 0 }}>Warna Utama QR (Body Color)</label>
          <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <input
              type="checkbox"
              checked={dotsGradientEnable}
              onChange={(e) => setDotsGradientEnable(e.target.checked)}
              style={{ accentColor: 'var(--accent-wa)' }}
            />
            Gunakan Warna Gradasi
          </label>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(15, 23, 42, 0.6)', padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
            <input
              type="color"
              value={dotsColor}
              onChange={(e) => setDotsColor(e.target.value)}
              style={{ width: '32px', height: '32px', border: 'none', background: 'none', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '13px', fontFamily: 'monospace' }}>{dotsColor}</span>
          </div>

          {dotsGradientEnable && (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(15, 23, 42, 0.6)', padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
              <input
                type="color"
                value={dotsColor2}
                onChange={(e) => setDotsColor2(e.target.value)}
                style={{ width: '32px', height: '32px', border: 'none', background: 'none', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '13px', fontFamily: 'monospace' }}>{dotsColor2}</span>
            </div>
          )}
        </div>

        {dotsGradientEnable && (
          <div style={{ marginTop: '10px', display: 'flex', gap: '12px' }}>
            <select
              className="select-control"
              value={dotsGradientType}
              onChange={(e) => setDotsGradientType(e.target.value)}
              style={{ fontSize: '12px', padding: '6px 10px' }}
            >
              <option value="linear">Gradasi Linear (Menyamping)</option>
              <option value="radial">Gradasi Radial (Melingkar)</option>
            </select>
          </div>
        )}
      </div>

      {/* Eyes Colors Override */}
      <div className="form-group" style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <label className="form-label" style={{ margin: 0 }}>Warna Mata Sudut (Corner Eyes)</label>
          <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <input
              type="checkbox"
              checked={customEyesColor}
              onChange={(e) => setCustomEyesColor(e.target.checked)}
              style={{ accentColor: 'var(--accent-wa)' }}
            />
            Kustomisasi Warna Sudut
          </label>
        </div>

        {customEyesColor && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '8px' }}>
            <div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Frame Sudut</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(15, 23, 42, 0.6)', padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                <input
                  type="color"
                  value={cornersFrameColor}
                  onChange={(e) => setCornersFrameColor(e.target.value)}
                  style={{ width: '28px', height: '28px', border: 'none', background: 'none', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>{cornersFrameColor}</span>
              </div>
            </div>

            <div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Mata Dalam</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(15, 23, 42, 0.6)', padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                <input
                  type="color"
                  value={cornersDotColor}
                  onChange={(e) => setCornersDotColor(e.target.value)}
                  style={{ width: '28px', height: '28px', border: 'none', background: 'none', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>{cornersDotColor}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Background Color */}
      <div className="form-group" style={{ marginTop: '16px' }}>
        <label className="form-label">Warna Latar Belakang (Background)</label>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(15, 23, 42, 0.6)', padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
            <input
              type="color"
              value={bgColor === 'transparent' ? '#ffffff' : bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              disabled={bgColor === 'transparent'}
              style={{ width: '32px', height: '32px', border: 'none', background: 'none', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '13px', fontFamily: 'monospace' }}>
              {bgColor === 'transparent' ? 'Transparan' : bgColor}
            </span>
          </div>

          <button
            type="button"
            className={`btn ${bgColor === 'transparent' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setBgColor(bgColor === 'transparent' ? '#ffffff' : 'transparent')}
            style={{ fontSize: '12px', padding: '8px 14px' }}
          >
            {bgColor === 'transparent' ? 'Background Solid' : 'Set Transparan'}
          </button>
        </div>
      </div>
    </div>
  );
}
