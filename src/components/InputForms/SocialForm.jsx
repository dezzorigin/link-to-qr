import React, { useState, useEffect } from 'react';
import { Share2, Send, Globe } from 'lucide-react';

const SOCIAL_PLATFORMS = [
  { id: 'instagram', name: 'Instagram', prefix: 'https://instagram.com/', placeholder: 'username' },
  { id: 'tiktok', name: 'TikTok', prefix: 'https://tiktok.com/@', placeholder: 'username' },
  { id: 'youtube', name: 'YouTube Channel', prefix: 'https://youtube.com/@', placeholder: 'channelname' },
  { id: 'telegram', name: 'Telegram Chat/Channel', prefix: 'https://t.me/', placeholder: 'username' },
  { id: 'linkedin', name: 'LinkedIn Profile', prefix: 'https://linkedin.com/in/', placeholder: 'username' },
  { id: 'facebook', name: 'Facebook Page', prefix: 'https://facebook.com/', placeholder: 'page_name' }
];

export default function SocialForm({ onChange }) {
  const [platform, setPlatform] = useState('instagram');
  const [handle, setHandle] = useState('tokoku_official');

  useEffect(() => {
    const current = SOCIAL_PLATFORMS.find(p => p.id === platform) || SOCIAL_PLATFORMS[0];
    const cleanHandle = handle.replace(/^@/, '').trim();
    const finalUrl = `${current.prefix}${cleanHandle}`;
    onChange(finalUrl, { type: 'social', platform: current.name, handle: cleanHandle });
  }, [platform, handle]);

  const currentPlatform = SOCIAL_PLATFORMS.find(p => p.id === platform) || SOCIAL_PLATFORMS[0];

  return (
    <div className="social-form">
      <div className="form-group">
        <label className="form-label">Pilih Platform Media Sosial</label>
        <select
          className="select-control"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          {SOCIAL_PLATFORMS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Username / Handle</label>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
            {currentPlatform.prefix}
          </span>
          <input
            type="text"
            className="input-control"
            placeholder={currentPlatform.placeholder}
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
