import React, { useState, useEffect } from 'react';
import { Wifi, Eye, EyeOff } from 'lucide-react';

export default function WifiForm({ onChange }) {
  const [ssid, setSsid] = useState('WiFi-Kafe-Gratis');
  const [password, setPassword] = useState('kopi12345');
  const [encryption, setEncryption] = useState('WPA'); // WPA, WEP, nopass
  const [hidden, setHidden] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    // Format: WIFI:S:SSID;T:WPA;P:PASSWORD;H:false;;
    const wifiString = `WIFI:S:${ssid};T:${encryption};P:${password};H:${hidden ? 'true' : 'false'};;`;
    onChange(wifiString, {
      type: 'wifi',
      ssid,
      encryption
    });
  }, [ssid, password, encryption, hidden]);

  return (
    <div className="wifi-form">
      <div className="form-group">
        <label className="form-label">Nama Wi-Fi (SSID)</label>
        <input
          type="text"
          className="input-control"
          placeholder="Nama Wi-Fi Toko / Rumah"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
        />
      </div>

      {encryption !== 'nopass' && (
        <div className="form-group">
          <label className="form-label">Password Wi-Fi</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPass ? 'text' : 'password'}
              className="input-control"
              placeholder="Masukkan password Wi-Fi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="form-group">
          <label className="form-label">Tipe Keamanan</label>
          <select
            className="select-control"
            value={encryption}
            onChange={(e) => setEncryption(e.target.value)}
          >
            <option value="WPA">WPA / WPA2 / WPA3</option>
            <option value="WEP">WEP</option>
            <option value="nopass">Tanpa Password (Open)</option>
          </select>
        </div>

        <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginTop: '24px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: 'var(--text-main)' }}>
            <input
              type="checkbox"
              checked={hidden}
              onChange={(e) => setHidden(e.target.checked)}
              style={{ accentColor: 'var(--accent-wa)' }}
            />
            Jaringan Wi-Fi Tersembunyi (Hidden)
          </label>
        </div>
      </div>
    </div>
  );
}
