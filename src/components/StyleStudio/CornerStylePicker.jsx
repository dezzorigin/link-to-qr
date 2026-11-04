import React from 'react';

const FRAME_TYPES = [
  { id: 'square', name: 'Square' },
  { id: 'extra-rounded', name: 'Extra Rounded' },
  { id: 'circle', name: 'Circle' },
];

const EYE_TYPES = [
  { id: 'square', name: 'Square' },
  { id: 'dot', name: 'Dot / Circle' },
];

export default function CornerStylePicker({ frameValue, eyeValue, onFrameChange, onEyeChange }) {
  return (
    <div className="corner-style-picker" style={{ marginBottom: '20px' }}>
      <div className="form-group">
        <label className="form-label" style={{ marginBottom: '10px' }}>
          Bentuk Frame Sudut (Corner Square)
        </label>
        <div className="shape-grid">
          {FRAME_TYPES.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`shape-card ${frameValue === f.id ? 'active' : ''}`}
              onClick={() => onFrameChange(f.id)}
            >
              <div style={{
                width: '24px',
                height: '24px',
                border: '3px solid currentColor',
                borderRadius: f.id === 'square' ? '0' : f.id === 'extra-rounded' ? '6px' : '50%'
              }} />
              <span>{f.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" style={{ marginBottom: '10px' }}>
          Bentuk Mata Sudut (Corner Dot)
        </label>
        <div className="shape-grid">
          {EYE_TYPES.map((e) => (
            <button
              key={e.id}
              type="button"
              className={`shape-card ${eyeValue === e.id ? 'active' : ''}`}
              onClick={() => onEyeChange(e.id)}
            >
              <div style={{
                width: '14px',
                height: '14px',
                background: 'currentColor',
                borderRadius: e.id === 'square' ? '0' : '50%'
              }} />
              <span>{e.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
