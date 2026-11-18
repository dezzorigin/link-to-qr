# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> Catatan jujur: CHANGELOG lama adalah template fiktif — mengklaim Next.js,
> URL shortener, dan perbaikan bug yang tidak pernah ada. Entri di bawah ini
> ditulis dari kode yang sebenarnya.

## [1.1.0] - 2026-11-18

### Added
- Landing page ala SaaS: navbar sticky dengan logo GitHub (link ke repo),
  hero dua kolom dengan pratinjau QR live, grid 6 fitur, cara kerja 3 langkah,
  dan footer.
- `src/utils/buildQrOptions.js`: satu fungsi pembangun opsi QR yang dipakai
  bersama oleh pratinjau dan export.
- Dokumentasi lengkap: README ditulis ulang, PRD v2.0, `docs/architecture.md`,
  diagram alur `docs/diagrams/app-flow.svg`, screenshot + video demo.
- CI GitHub Actions: `oxlint` + `vite build` + smoke check hasil build.

### Fixed
- **Export PNG high-res benar-benar high-res.** Sebelumnya tombol
  "Download PNG High-Res (4096px)" mengunduh canvas pratinjau 280px, karena
  `qr-code-styling` tidak menerima ukuran di `download()`. Sekarang export
  me-render instance QR baru pada resolusi yang dipilih (terverifikasi:
  pilihan 2048px menghasilkan file 2048×2048).
- **Tab konten tanpa status aktif.** Tab Wi-Fi, vCard, Media Sosial, dan Teks
  memakai class `tab-active` yang tidak ada di CSS, sehingga tab yang dipilih
  tidak tampak aktif. Semua tab kini memakai class `active`.
- **Layout meluber di desktop.** Grid utama memaksa lebar minimum konten
  sehingga panel pratinjau terpotong di viewport 1280px. Grid kini
  `minmax(0, 1fr) 400px` + `min-width: 0`, baris tab bisa di-scroll, dan tidak
  ada horizontal overflow di 390px maupun 1280px.
- Badge "100% Siap Scan! (Error Correction High H)" tampil bahkan tanpa logo
  (padahal tanpa logo level-nya Q). Badge kini menampilkan level yang benar:
  H bila ada logo, Q bila tidak.
- `alert()` saat salin gambar gagal diganti pesan error inline.
- Badge header "PRO LOGO ENGINE" (menyesatkan — tidak ada tier berbayar)
  diganti "Open Source".

### Changed
- README, PRD, dan CHANGELOG lama (template generik dengan klaim Next.js /
  API / database / URL shortener) ditulis ulang sesuai kode yang sebenarnya.
- Ikon tab konten diperkecil (16 → 14) agar keenam tab muat di viewport 1280px.

## [1.0.0] - 2026-11-05

### Added
- Studio QR awal (Vite + React): 6 form konten, style studio, preset tema,
  pratinjau live, export PNG/SVG, standee meja, riwayat localStorage.
