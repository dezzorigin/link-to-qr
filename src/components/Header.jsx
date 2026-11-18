import React from 'react';
import { QrCode, Bookmark, RotateCcw, ArrowLeft } from 'lucide-react';

export default function Header({ onOpenHistory, onResetDefault, onBackToLanding }) {
  return (
    <header className="app-header">
      <div className="brand-group">
        <div className="brand-icon">
          <QrCode size={26} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h1 className="brand-title">QR WhatsApp & Link Studio</h1>
            <span className="brand-badge">Open Source</span>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
            Generator QR Code Link WhatsApp, Custom Shape, & Logo Tengah/Sisi Terbaik
          </p>
        </div>
      </div>

      <div className="header-actions">
        {onBackToLanding && (
          <button type="button" className="btn btn-secondary" onClick={onBackToLanding}>
            <ArrowLeft size={15} /> Beranda
          </button>
        )}
        <button type="button" className="btn btn-secondary" onClick={onResetDefault}>
          <RotateCcw size={15} /> Reset Desain
        </button>
        <button type="button" className="btn btn-secondary" onClick={onOpenHistory}>
          <Bookmark size={15} style={{ color: 'var(--accent-wa)' }} /> Tersimpan
        </button>
      </div>
    </header>
  );
}
