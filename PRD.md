# PRD — Link to QR v2.0

## 1. Informasi Proyek

| Field | Nilai |
|---|---|
| Nama Proyek | Link to QR |
| Live | https://qr-link.pages.dev |
| Tech Stack | Vite 8 + React 19, qr-code-styling 1.9 |
| Status | v1.1.0 — proper, live |
| Penanggung Jawab | Nabil Aulia Dika (dezzorigin) |
| Versi Dokumen | 2.0 (ditulis ulang jujur dari kode, 18 Nov 2026) |

> Catatan: PRD v1.0 adalah template generik — mengklaim Next.js, API Routes, database, dan URL shortener yang tidak pernah ada. Dokumen ini menggantikannya dengan fakta dari kode yang sebenarnya.

## 2. Latar Belakang

Toko dan UMKM butuh QR WhatsApp / link yang enak dilihat dan siap cetak — bukan kotak hitam-putih bawaan. Kebutuhan nyata: QR untuk chat WhatsApp dengan pesan terisi otomatis, QR Wi-Fi untuk pelanggan, dan QR yang bisa ditempel logo toko, lalu dicetak sebagai standee meja.

## 3. Masalah yang Diselesaikan

- Membuat QR WhatsApp dengan nomor + pesan otomatis tanpa mengetik format `wa.me` manual.
- Mengubah link / Wi-Fi / kontak menjadi QR yang tetap terbaca meski diberi logo dan warna.
- Menghasilkan file cetak (PNG high-res / SVG) tanpa aplikasi desain.

## 4. Tujuan & Sasaran

- Semua 6 jenis konten menghasilkan QR yang benar dan bisa di-scan.
- Export PNG benar-benar pada resolusi yang dipilih (512–4096px).
- Tidak ada data pengguna yang keluar dari browser.

## 5. Ruang Lingkup

### In Scope
- Landing page ala SaaS + studio QR lengkap (6 form konten, style studio, preset, export, standee, riwayat).
- Build Vite, CI (oxlint + build), deploy Cloudflare Pages.
- Dokumentasi (README, PRD, arsitektur, diagram alur).

### Out of Scope
- Backend / akun / database — tidak ada; aplikasi 100% client-side.
- URL shortener — tidak ada dan tidak direncanakan.
- Analitik / pelacakan pengunjung — tidak ada.

## 6. Fitur & Persyaratan Fungsional

| # | Fitur | Perilaku |
|---|---|---|
| 1 | Landing SaaS | Navbar (logo GitHub → repo), hero + pratinjau QR live, fitur, cara kerja, footer. CTA masuk ke studio. |
| 2 | WhatsApp Direct | Pilih kode negara (19 negara), nomor, pesan otomatis + 5 template cepat → link `wa.me` dengan `text` ter-encode. |
| 3 | Website / Link | Input URL; skema `https://` ditambahkan otomatis bila tidak ada. |
| 4 | Wi-Fi | SSID, password, enkripsi, hidden → string `WIFI:T:...`. |
| 5 | Kontak vCard | Nama, telepon, email, organisasi → vCard 3.0. |
| 6 | Media Sosial | Pilih platform + username → URL profil. |
| 7 | Teks Bebas | Teks apa pun menjadi isi QR. |
| 8 | Bentuk & frame | Tipe titik, tipe frame sudut, tipe mata sudut. |
| 9 | Warna & gradasi | Warna titik (opsional gradasi 2 warna, linear/radial), warna frame/mata (opsional per-mata), warna latar. |
| 10 | Logo tengah | 6 logo bawaan + upload sendiri; ukuran, margin, bentuk latar. Logo → error correction naik ke H. |
| 11 | Preset desain | 6 tema sekali klik (lihat README). |
| 12 | Pratinjau live | QR diperbarui setiap perubahan input; badge keterbacaan (peringatan bila logo > 35%). |
| 13 | Export | PNG 512/1024/2048/4096px (render ulang pada resolusi itu), SVG vektor, salin gambar (Clipboard API + pesan error inline bila tidak didukung). |
| 14 | Standee meja | Modal kartu display siap cetak. |
| 15 | Riwayat | Simpan konfigurasi ke localStorage (`qr_studio_history`), muat ulang dari modal Tersimpan. |

## 7. Persyaratan Non-Fungsional

- **Performa:** build JS ±317 KB (gzip ±96 KB); tidak ada request runtime kecuali font Google (opsional, ada fallback sistem).
- **Keamanan:** tidak ada secret; `.env` di-`.gitignore`; tidak ada data yang dikirim keluar (semua di browser).
- **Aksesibilitas:** semua tombol `type="button"`, label form jelas, pesan error inline (bukan `alert()`).
- **Responsif:** layout menumpuk di bawah 1080px; tidak ada horizontal overflow di 390px maupun 1280px.

## 8. Arsitektur & Tech Stack

Vite 8 + React 19 (SPA, tanpa routing). State QR terpusat di `App.jsx`; opsi `qr-code-styling` dibangun satu fungsi bersama (`src/utils/buildQrOptions.js`) agar preview dan export selalu identik. Detail: [docs/architecture.md](docs/architecture.md).

## 9. Milestone

| Fase | Status |
|---|---|
| Inisialisasi & scaffolding | ✅ (Nov 2026) |
| Fitur inti (6 konten, studio, export, standee, riwayat) | ✅ |
| Rebuild proper: landing SaaS, perbaikan export 4K, perbaikan layout | ✅ (v1.1.0, 18 Nov 2026) |
| CI + deploy Pages | ✅ |
| Dokumentasi lengkap | ✅ |

## 10. Risiko & Mitigasi

| Risiko | Mitigasi |
|---|---|
| QR tidak terbaca karena logo/warna | Badge peringatan + error correction H saat logo dipakai |
| Export buram (resolusi salah) | Render ulang instance QR pada resolusi yang dipilih (diperbaiki v1.1.0 — sebelumnya selalu 280px) |
| Font Google gagal dimuat (offline) | Fallback font sistem; tidak memblokir render |

## 11. Kriteria Keberhasilan

- Aplikasi berjalan tanpa console error; play-test end-to-end lolos (isi link → QR tampil → download PNG 2048 terverifikasi).
- README & PRD jujur dan up-to-date; tidak ada secret ter-commit.
- CI hijau; live di Cloudflare Pages.

## 12. Lampiran

- Struktur: lihat README.md
- Lisensi: MIT (LICENSE)
