import React, { useState, useEffect } from 'react';

export default function TextForm({ onChange }) {
  const [text, setText] = useState('Selamat datang di Toko Kami! Gunakan voucher KAFE10 untuk diskon 10%.');

  useEffect(() => {
    onChange(text || 'Teks sampel QR code', { type: 'text' });
  }, [text]);

  return (
    <div className="text-form">
      <div className="form-group">
        <label className="form-label">Teks Bebas / Catatan Singkat</label>
        <textarea
          className="textarea-control"
          placeholder="Tuliskan teks, serial number, atau pengumuman di sini..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ minHeight: '120px' }}
        />
      </div>
    </div>
  );
}
