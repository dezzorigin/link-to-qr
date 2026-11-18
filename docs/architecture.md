# Arsitektur — Link to QR

## Ringkasan

Aplikasi **React 19 + Vite 8 murni client-side**. Tidak ada backend, database,
API, atau akun. Semua — dari membangun isi QR sampai me-render PNG 4K —
terjadi di browser pengguna.

```
Pengguna → Landing (SaaS) → Studio → qr-code-styling → Canvas/SVG/PNG
                              ↘ localStorage (riwayat desain)
```

Diagram alur lengkap: [diagrams/app-flow.svg](diagrams/app-flow.svg).

## Alur Data

1. **Landing** (`src/components/LandingPage.jsx`) — halaman pertama.
   Navbar sticky, hero dengan pratinjau QR live (instance `qr-code-styling`
   kecil dengan preset WhatsApp), fitur, cara kerja, footer. CTA
   "Buat QR Gratis" mengganti `view` di `App.jsx` menjadi `studio`.
2. **Studio** (`src/App.jsx`) — semua state QR terpusat di sini:
   isi (`currentData`), gaya titik/frame/warna/logo, preset aktif, dan
   status modal. Form konten (6 jenis) hanya memanggil `onChange(data)`.
3. **Opsi QR** (`src/utils/buildQrOptions.js`) — satu fungsi yang membangun
   objek opsi `qr-code-styling` dari state + isi + ukuran yang diminta.
   Dipakai bersama oleh pratinjau dan export, sehingga file yang diunduh
   selalu sama persis dengan yang tampil di layar.
4. **Pratinjau** (`QrCanvas.jsx`) — satu instance `qr-code-styling`
   (280px) yang di-`update()` setiap state berubah. Logo di tengah menaikkan
   error correction ke level H; tanpa logo level Q.
5. **Export** (`ExportControls.jsx`) — `download()` di `qr-code-styling`
   hanya menerima nama + ekstensi, bukan ukuran. Karena itu export PNG
   me-render instance baru pada resolusi yang dipilih (512–4096px).
   SVG adalah vektor, ukurannya tidak berpengaruh.
6. **Riwayat** (`HistoryModal.jsx`) — konfigurasi disimpan sebagai JSON di
   `localStorage` (`qr_studio_history`) dan bisa dimuat ulang ke studio.

## Modul

| Modul | Tanggung jawab |
|---|---|
| `src/App.jsx` | View landing/studio, state QR, handler preset & riwayat |
| `src/components/LandingPage.jsx` | Landing SaaS + pratinjau hero |
| `src/components/Header.jsx` | Header studio (Beranda, Reset, Tersimpan) |
| `src/components/InputForms/*` | 6 form konten → string isi QR |
| `src/components/StyleStudio/*` | Bentuk titik/frame, warna & gradasi, logo, preset |
| `src/components/PreviewSection/*` | Canvas QR, badge keterbacaan, export |
| `src/components/PrintCardModal.jsx` | Kartu display / standee siap cetak |
| `src/components/HistoryModal.jsx` | Simpan/muat konfigurasi (localStorage) |
| `src/constants/data.js` | Kode negara, template pesan WA, logo SVG, 6 preset tema |
| `src/utils/buildQrOptions.js` | Pembangun opsi QR (dipakai preview + export) |

## Keputusan Desain

- **Satu sumber opsi QR.** Duplikasi logika opsi antara pratinjau dan export
  adalah penyebab bug export 280px di v1.0.0. Sejak v1.1.0 keduanya memakai
  `buildQrOptions()` yang sama.
- **Tanpa routing.** Dua view (landing/studio) cukup memakai state `view`;
  tidak perlu `react-router` untuk satu halaman.
- **Font eksternal opsional.** Inter/Outfit dimuat dari Google Fonts via
  `@import`; bila gagal, fallback font sistem tetap membuat tampilan utuh.
- **Tidak ada data keluar.** Tidak ada fetch ke server mana pun saat aplikasi
  dipakai. Satu-satunya penyimpanan adalah localStorage di perangkat sendiri.

## Build & Deploy

- `npm run build` → `dist/` (Vite). Bundle JS ±317 KB (gzip ±96 KB).
- CI: `oxlint` + `vite build` + smoke check `dist/index.html`.
- Deploy: Cloudflare Pages direct upload, project `qr-link`
  → https://qr-link.pages.dev.

## Batasan yang Diketahui

- Salin gambar ke clipboard butuh Clipboard API + izin browser; bila tidak
  didukung, aplikasi menampilkan pesan error inline (bukan `alert()`).
- Pratinjau memakai canvas 280px; ketajaman penuh hanya terlihat di file export.
