import React, { useState, useEffect } from 'react';
import { Globe, Link as LinkIcon } from 'lucide-react';

export default function UrlForm({ onChange }) {
  const [url, setUrl] = useState('https://tokoku.com');

  useEffect(() => {
    let finalUrl = url.trim();
    if (finalUrl && !/^https?:\/\//i.test(finalUrl)) {
      finalUrl = 'https://' + finalUrl;
    }
    onChange(finalUrl || 'https://example.com', { type: 'url' });
  }, [url]);

  return (
    <div className="url-form">
      <div className="form-group">
        <label className="form-label">Alamat URL Website / Landing Page</label>
        <div style={{ position: 'relative' }}>
          <input
            type="url"
            className="input-control"
            placeholder="https://websiteanda.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </div>
      <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', gap: '6px', alignItems: 'center' }}>
        <Globe size={14} style={{ color: 'var(--accent-blue)' }} /> Masukkan URL lengkap untuk mengarahkan pengguna ke situs web, Google Drive, atau marketplace Anda.
      </div>
    </div>
  );
}
