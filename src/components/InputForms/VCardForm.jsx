import React, { useState, useEffect } from 'react';
import { User, Building, Phone, Mail, Globe, MapPin } from 'lucide-react';

export default function VCardForm({ onChange }) {
  const [firstName, setFirstName] = useState('Budi');
  const [lastName, setLastName] = useState('Santoso');
  const [org, setOrg] = useState('PT Usaha Maju');
  const [title, setTitle] = useState('CEO / Founder');
  const [phone, setPhone] = useState('+6281234567890');
  const [email, setEmail] = useState('budi@usamaju.com');
  const [url, setUrl] = useState('https://usamaju.com');

  useEffect(() => {
    // Standard vCard 3.0 string
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
ORG:${org}
TITLE:${title}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
URL:${url}
END:VCARD`;

    onChange(vcard, { type: 'vcard', name: `${firstName} ${lastName}` });
  }, [firstName, lastName, org, title, phone, email, url]);

  return (
    <div className="vcard-form">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="form-group">
          <label className="form-label">Nama Depan</label>
          <input
            type="text"
            className="input-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Nama Belakang</label>
          <input
            type="text"
            className="input-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="form-group">
          <label className="form-label">Perusahaan / Toko</label>
          <input
            type="text"
            className="input-control"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Jabatan</label>
          <input
            type="text"
            className="input-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="form-group">
          <label className="form-label">No. Telepon / WA</label>
          <input
            type="tel"
            className="input-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="input-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Website Perusahaan</label>
        <input
          type="url"
          className="input-control"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
    </div>
  );
}
