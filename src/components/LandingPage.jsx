import React, { useRef } from 'react';
import {
  QrCode,
  MessageCircle,
  Globe,
  Wifi,
  UserCheck,
  Share2,
  FileText,
  Palette,
  Download,
  Printer,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
} from 'lucide-react';
import QrCanvas from './PreviewSection/QrCanvas';

const GITHUB_URL = 'https://github.com/dezzorigin/link-to-qr';

function GithubMark({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}

const FEATURES = [
  {
    icon: MessageCircle,
    title: '6 Jenis Konten',
    text: 'WhatsApp Direct, Website/Link, Wi-Fi, kontak vCard, Media Sosial, dan Teks Bebas — semua jadi QR dalam satu tempat.',
  },
  {
    icon: Palette,
    title: 'Style Studio Lengkap',
    text: 'Bentuk titik, frame sudut, gradasi warna, dan logo di tengah. Atur sampai cocok dengan identitasmu.',
  },
  {
    icon: Sparkles,
    title: '6 Preset Desain',
    text: 'WhatsApp Official, Emerald Dark, Cyberpunk Neon, Gold Deluxe, Minimal Classic, dan Ocean Gradient. Sekali klik, langsung jadi.',
  },
  {
    icon: Download,
    title: 'Export PNG 4K & SVG',
    text: 'Unduh PNG sampai 4096px atau SVG vektor yang tetap tajam di ukuran apa pun. Salin gambar langsung ke clipboard juga bisa.',
  },
  {
    icon: Printer,
    title: 'Standee Meja Siap Cetak',
    text: 'Cetak display kartu / standee meja untuk toko atau kasir langsung dari aplikasi, lengkap dengan QR yang sudah diatur.',
  },
  {
    icon: ShieldCheck,
    title: 'Privasi Penuh',
    text: 'Semua diproses di browser kamu. Tidak ada akun, tidak ada server, tidak ada data yang dikirim ke mana pun.',
  },
];

const STEPS = [
  {
    n: '1',
    title: 'Isi konten',
    text: 'Pilih jenisnya — nomor WhatsApp, link website, Wi-Fi, atau teks — lalu isi datanya.',
  },
  {
    n: '2',
    title: 'Atur gaya',
    text: 'Pilih preset atau atur sendiri: bentuk, warna, gradasi, dan logo di tengah QR.',
  },
  {
    n: '3',
    title: 'Download & pakai',
    text: 'Unduh PNG high-res atau SVG, cetak standee, atau tempel di mana saja. Selesai.',
  },
];

export default function LandingPage({ onEnterStudio }) {
  const heroQrRef = useRef(null);

  return (
    <div className="landing">
      {/* Navbar */}
      <header className="landing-nav">
        <div className="landing-nav-inner">
          <button
            type="button"
            className="landing-brand"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="landing-brand-icon">
              <QrCode size={20} />
            </span>
            <span>
              Link to <strong>QR</strong>
            </span>
          </button>
          <nav className="landing-nav-links">
            <a href="#fitur">Fitur</a>
            <a href="#cara-kerja">Cara Kerja</a>
          </nav>
          <div className="landing-nav-actions">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="landing-github"
              aria-label="Lihat di GitHub"
              title="Lihat di GitHub"
            >
              <GithubMark size={22} />
            </a>
            <button
              type="button"
              className="btn btn-primary landing-nav-cta"
              onClick={onEnterStudio}
            >
              Buat QR Gratis
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-hero-text">
          <span className="landing-badge">
            <Zap size={14} /> 100% gratis · tanpa akun · tanpa server
          </span>
          <h1>
            QR WhatsApp &amp; link,
            <br />
            rapi dan <span className="landing-accent">siap cetak.</span>
          </h1>
          <p>
            Bikin QR code untuk nomor WhatsApp, link website, Wi-Fi, atau kartu
            nama — atur bentuk, warna, dan logo di tengahnya, lalu unduh
            sampai 4K atau cetak jadi standee meja.
          </p>
          <div className="landing-hero-ctas">
            <button
              type="button"
              className="btn btn-primary landing-cta-big"
              onClick={onEnterStudio}
            >
              Buat QR Gratis <ArrowRight size={18} />
            </button>
            <a href="#cara-kerja" className="btn btn-secondary landing-cta-big">
              Lihat cara kerja
            </a>
          </div>
          <p className="landing-proof">
            6 jenis konten · 6 preset desain · Export PNG 4K &amp; SVG
          </p>
        </div>
        <div className="landing-hero-visual">
          <div className="landing-browser">
            <div className="landing-browser-bar">
              <span className="landing-dot" />
              <span className="landing-dot" />
              <span className="landing-dot" />
              <span className="landing-browser-url">Pratinjau langsung</span>
            </div>
            <div className="landing-qr-wrap">
              <QrCanvas
                qrCodeInstanceRef={heroQrRef}
                data="https://wa.me/6281234567890"
                dotsType="rounded"
                dotsColor="#25D366"
                dotsGradientEnable={false}
                dotsColor2="#128C7E"
                dotsGradientType="linear"
                cornersFrameType="extra-rounded"
                cornersFrameColor="#128C7E"
                cornersDotType="dot"
                cornersDotColor="#25D366"
                customEyesColor={false}
                bgColor="#ffffff"
                selectedLogoId="whatsapp-green"
                customLogoSrc={null}
                logoSize={0.28}
                logoMargin={5}
                logoBgShape="circle"
                logoBgColor="#ffffff"
              />
              <p className="landing-qr-caption">
                Contoh: QR WhatsApp dengan logo di tengah
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="fitur" className="landing-section">
        <h2>Semua yang kamu butuhkan untuk satu QR</h2>
        <p className="landing-section-sub">
          Bukan sekadar generator link jadi kotak hitam-putih. Ini studio
          kecil untuk QR yang enak dilihat dan tetap mudah di-scan.
        </p>
        <div className="landing-features">
          {FEATURES.map((f) => (
            <article key={f.title} className="landing-feature-card">
              <span className="landing-feature-icon">
                <f.icon size={22} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="cara-kerja" className="landing-section">
        <h2>Cara kerja</h2>
        <p className="landing-section-sub">
          Tiga langkah, tanpa daftar, tanpa instalasi.
        </p>
        <div className="landing-steps">
          {STEPS.map((s) => (
            <article key={s.n} className="landing-step-card">
              <span className="landing-step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Privacy + CTA band */}
      <section className="landing-cta-band">
        <ShieldCheck size={28} />
        <h2>Datamu tidak pernah keluar dari browser</h2>
        <p>
          QR dibuat sepenuhnya di perangkatmu. Riwayat desain tersimpan lokal
          di browser — bukan di server kami, karena memang tidak ada server.
        </p>
        <button
          type="button"
          className="btn btn-primary landing-cta-big"
          onClick={onEnterStudio}
        >
          Mulai buat QR <ArrowRight size={18} />
        </button>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-brand">
          <span className="landing-brand-icon">
            <QrCode size={18} />
          </span>
          <span>
            Link to <strong>QR</strong>
          </span>
        </div>
        <div className="landing-footer-links">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="landing-footer-github"
          >
            <GithubMark size={16} /> GitHub
          </a>
          <span>MIT License</span>
          <span>Open Source</span>
        </div>
      </footer>
    </div>
  );
}
