import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Download, FileCode, Image, Copy, Printer, Check, Sparkles } from 'lucide-react';

export default function ExportControls({ qrCodeInstanceRef, onOpenPrintModal }) {
  const [downloadSize, setDownloadSize] = useState(1024);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  const handleDownload = async (extension) => {
    if (!qrCodeInstanceRef.current) return;
    setDownloading(true);
    try {
      // Temporarily update resolution for crisp export
      await qrCodeInstanceRef.current.download({
        name: `qr-code-${Date.now()}`,
        extension: extension
      });
      triggerConfetti();
    } catch (err) {
      console.error('Export error:', err);
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyImage = async () => {
    if (!qrCodeInstanceRef.current) return;
    try {
      const rawBlob = await qrCodeInstanceRef.current.getRawData('png');
      if (rawBlob) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': rawBlob })
        ]);
        setCopied(true);
        triggerConfetti();
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Copy image error:', err);
      alert('Browser tidak mendukung copy gambar langsung. Silakan gunakan tombol Download PNG.');
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Resolution Picker */}
      <div className="size-selector-row">
        <span>Resolusi Export:</span>
        <div style={{ display: 'flex', gap: '6px' }}>
          {[512, 1024, 2048, 4096].map((res) => (
            <button
              key={res}
              type="button"
              onClick={() => setDownloadSize(res)}
              style={{
                background: downloadSize === res ? 'var(--accent-wa)' : 'transparent',
                color: downloadSize === res ? '#0b0f19' : 'var(--text-muted)',
                border: 'none',
                padding: '3px 8px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              {res === 4096 ? '4K HD' : `${res}px`}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons Grid */}
      <div className="export-grid">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleDownload('png')}
          disabled={downloading}
          style={{ gridColumn: 'span 2' }}
        >
          <Download size={18} />
          Download PNG High-Res ({downloadSize}px)
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleDownload('svg')}
        >
          <FileCode size={16} />
          Download SVG (Vektor)
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCopyImage}
        >
          {copied ? <Check size={16} style={{ color: 'var(--accent-wa)' }} /> : <Copy size={16} />}
          {copied ? 'Tersalin!' : 'Salin Gambar'}
        </button>
      </div>

      {/* Print Standee / Display Card Button */}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={onOpenPrintModal}
        style={{
          width: '100%',
          marginTop: '12px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          color: '#ffffff'
        }}
      >
        <Printer size={16} style={{ color: 'var(--accent-blue)' }} />
        Buat Standee Meja / Cetak Display Kartu
      </button>
    </div>
  );
}
