import React from 'react';
import { Square, Circle, Sparkles, Box, ShieldAlert } from 'lucide-react';

const MODULE_TYPES = [
  { id: 'square', name: 'Persegi Classic', desc: 'Standar' },
  { id: 'dots', name: 'Dots / Lingkaran', desc: 'Bulat Halus' },
  { id: 'rounded', name: 'Rounded', desc: 'Sudut Tumpul' },
  { id: 'extra-rounded', name: 'Extra Rounded', desc: 'Sangat Bulat' },
  { id: 'classy', name: 'Classy', desc: 'Artistik' },
  { id: 'classy-rounded', name: 'Classy Rounded', desc: 'Elegan' },
];

export default function ModuleStylePicker({ value, onChange }) {
  return (
    <div className="module-style-picker">
      <label className="form-label" style={{ marginBottom: '12px' }}>
        Bentuk Titik Body (Dot Style)
      </label>
      <div className="shape-grid">
        {MODULE_TYPES.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`shape-card ${value === t.id ? 'active' : ''}`}
            onClick={() => onChange(t.id)}
          >
            <div style={{
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {t.id === 'square' && <div style={{ width: '20px', height: '20px', background: 'currentColor' }} />}
              {t.id === 'dots' && <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'currentColor' }} />}
              {t.id === 'rounded' && <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'currentColor' }} />}
              {t.id === 'extra-rounded' && <div style={{ width: '20px', height: '20px', borderRadius: '8px', background: 'currentColor' }} />}
              {t.id === 'classy' && <div style={{ width: '20px', height: '20px', borderRadius: '8px 0 8px 0', background: 'currentColor' }} />}
              {t.id === 'classy-rounded' && <div style={{ width: '20px', height: '20px', borderRadius: '10px 2px 10px 2px', background: 'currentColor' }} />}
            </div>
            <span>{t.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
