import React from 'react';
import { PRESET_THEMES } from '../../constants/data';
import { Sparkles, Check } from 'lucide-react';

export default function PresetsGallery({ currentPresetId, onSelectPreset }) {
  return (
    <div className="presets-gallery" style={{ marginBottom: '24px' }}>
      <div className="form-label" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Sparkles size={16} style={{ color: 'var(--accent-wa)' }} />
        Preset Desain Siap Pakai (1-Click Preset)
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
        {PRESET_THEMES.map((theme) => {
          const isActive = currentPresetId === theme.id;
          return (
            <div
              key={theme.id}
              onClick={() => onSelectPreset(theme)}
              style={{
                background: isActive ? 'rgba(37, 211, 102, 0.12)' : 'rgba(15, 23, 42, 0.5)',
                border: `1px solid ${isActive ? 'var(--accent-wa)' : 'var(--border-card)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: isActive ? 'var(--accent-wa)' : 'var(--text-main)' }}>
                  {theme.name}
                </span>
                {isActive && <Check size={16} style={{ color: 'var(--accent-wa)' }} />}
              </div>

              {/* Color Swatch Preview */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: theme.dotsColor, border: '1px solid rgba(255,255,255,0.2)' }} />
                {theme.dotsGradientEnable && (
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: theme.dotsColor2, border: '1px solid rgba(255,255,255,0.2)' }} />
                )}
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: theme.cornersFrameColor, border: '1px solid rgba(255,255,255,0.2)' }} />
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: theme.bgColor, border: '1px solid rgba(255,255,255,0.2)' }} />
              </div>

              <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                {theme.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
