import React, { useState, useEffect } from 'react';
import { COUNTRY_CODES, WA_MESSAGE_TEMPLATES } from '../../constants/data';
import { Phone, MessageSquare, Copy, ExternalLink, Check, Sparkles } from 'lucide-react';

export default function WhatsAppForm({ onChange }) {
  const [countryDial, setCountryDial] = useState('+62');
  const [phoneNumber, setPhoneNumber] = useState('81234567890');
  const [message, setMessage] = useState('Halo Admin, saya tertarik untuk pesan produk ini. Boleh minta detailnya?');
  const [copied, setCopied] = useState(false);

  // Clean phone number (strip spaces, dashes, leading zero if country code is present)
  const getCleanPhone = () => {
    let raw = phoneNumber.replace(/[^0-9]/g, '');
    if (raw.startsWith('0')) {
      raw = raw.substring(1);
    }
    const dial = countryDial.replace('+', '');
    return `${dial}${raw}`;
  };

  const fullWaUrl = `https://wa.me/${getCleanPhone()}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  useEffect(() => {
    onChange(fullWaUrl, {
      type: 'whatsapp',
      phone: getCleanPhone(),
      displayPhone: `${countryDial} ${phoneNumber}`,
      message: message
    });
  }, [countryDial, phoneNumber, message]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullWaUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="wa-form-wrapper">
      <div className="form-group">
        <label className="form-label">
          Nomor WhatsApp
          <span className="form-label-hint">(Pilih kode negara & nomor tanpa angka 0 di depan)</span>
        </label>
        <div className="phone-input-group">
          <div className="country-select-wrapper">
            <select 
              className="select-control"
              value={countryDial}
              onChange={(e) => setCountryDial(e.target.value)}
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.dialCode}>
                  {c.flag} {c.dialCode} ({c.name})
                </option>
              ))}
            </select>
          </div>
          <div style={{ flex: 1, position: 'relative' }}>
            <input
              type="tel"
              className="input-control"
              placeholder="81234567890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          Pesan Otomatis (Pre-filled Message)
          <span className="form-label-hint">(Opsional - Teks pesan pertama saat chat dibuka)</span>
        </label>
        <textarea
          className="textarea-control"
          placeholder="Tulis pesan otomatis yang muncul saat pelanggan scan QR..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        <div style={{ marginTop: '10px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkles size={13} style={{ color: 'var(--accent-wa)' }} /> Template Pesan Cepat:
          </div>
          <div className="template-pills">
            {WA_MESSAGE_TEMPLATES.map((tmpl, idx) => (
              <button
                key={idx}
                type="button"
                className="template-pill"
                onClick={() => setMessage(tmpl.text)}
              >
                {tmpl.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Generated WhatsApp Link Card Preview */}
      <div style={{
        background: 'rgba(37, 211, 102, 0.08)',
        border: '1px solid rgba(37, 211, 102, 0.25)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 16px',
        marginTop: '20px'
      }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-wa)', marginBottom: '6px' }}>
          LINK WHATSAPP DIHASILKAN:
        </div>
        <div style={{
          fontSize: '13px',
          color: 'var(--text-main)',
          wordBreak: 'break-all',
          fontFamily: 'monospace',
          marginBottom: '12px',
          background: 'rgba(0,0,0,0.3)',
          padding: '8px 12px',
          borderRadius: '6px'
        }}>
          {fullWaUrl}
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="button" 
            className="btn btn-secondary" 
            style={{ fontSize: '12px', padding: '6px 12px' }}
            onClick={handleCopyLink}
          >
            {copied ? <Check size={14} style={{ color: 'var(--accent-wa)' }} /> : <Copy size={14} />}
            {copied ? 'Tersalin!' : 'Salin Link'}
          </button>
          <a
            href={fullWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: '12px', padding: '6px 12px', textDecoration: 'none' }}
          >
            <ExternalLink size={14} /> Uji Coba Chat
          </a>
        </div>
      </div>
    </div>
  );
}
