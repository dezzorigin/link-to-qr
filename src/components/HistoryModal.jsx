import React, { useState, useEffect } from 'react';
import { Bookmark, Trash2, FolderCheck, X, Plus } from 'lucide-react';

export default function HistoryModal({ isOpen, onClose, currentConfig, onLoadConfig }) {
  const [savedItems, setSavedItems] = useState([]);
  const [saveName, setSaveName] = useState('');

  useEffect(() => {
    if (isOpen) {
      const existing = localStorage.getItem('qr_studio_history');
      if (existing) {
        try {
          setSavedItems(JSON.parse(existing));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveCurrent = () => {
    const title = saveName.trim() || `QR Code #${savedItems.length + 1}`;
    const newItem = {
      id: Date.now(),
      title,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
      config: currentConfig
    };
    const updated = [newItem, ...savedItems];
    setSavedItems(updated);
    localStorage.setItem('qr_studio_history', JSON.stringify(updated));
    setSaveName('');
  };

  const handleDelete = (id) => {
    const updated = savedItems.filter(item => item.id !== id);
    setSavedItems(updated);
    localStorage.setItem('qr_studio_history', JSON.stringify(updated));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '540px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bookmark size={20} style={{ color: 'var(--accent-wa)' }} />
            <h3 className="font-heading" style={{ fontSize: '18px', fontWeight: '700' }}>
              Riwayat & QR Code Tersimpan
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Save current config form */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', background: 'rgba(15, 23, 42, 0.6)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
          <input
            type="text"
            className="input-control"
            placeholder="Nama Simpan (contoh: WA Admin Toko Utama)"
            value={saveName}
            onChange={(e) => setSaveName(e.target.value)}
          />
          <button type="button" className="btn btn-primary" onClick={handleSaveCurrent} style={{ flexShrink: 0 }}>
            <Plus size={16} /> Simpan
          </button>
        </div>

        {/* List of saved QR items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '350px', overflowY: 'auto' }}>
          {savedItems.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '30px 0', fontSize: '13px' }}>
              Belum ada QR Code yang tersimpan di memori browser.
            </div>
          ) : (
            savedItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-card)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '2px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    Tipe: {item.config?.activeTab?.toUpperCase()} • {item.date}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      onLoadConfig(item.config);
                      onClose();
                    }}
                    style={{ fontSize: '12px', padding: '6px 12px' }}
                  >
                    Muat Desain
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '6px' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
