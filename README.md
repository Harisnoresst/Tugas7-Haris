# Aplikasi Katalog Produk (React + Vite)

Muhammad Haris Nur Fadillah 1247050090

Aplikasi web katalog produk sederhana menggunakan **React** dan **Vite** yang mendukung fitur pencarian, filter kategori, pengurutan produk, daftar favorit (*wishlist*), serta keranjang belanja interaktif.

---

## 1. Arsitektur Komponen React

Antarmuka aplikasi dipecah menjadi beberapa komponen modular di dalam folder `src/components/` agar kode lebih terstruktur dan mudah digunakan ulang (*reusable*):

| Komponen | Fungsi Utama |
| :--- | :--- |
| **`App.jsx`** | Komponen induk (*root*) yang mengelola data utama, *state* global aplikasi, logika filter/pencarian, dan menyalurkan data ke komponen anak. |
| **`Navbar.jsx`** | Menampilkan bilah navigasi bagian atas, nama toko, tautan menu, serta tombol keranjang beserta jumlah total item. |
| **`Hero.jsx`** | Menampilkan *banner* utama halaman beserta judul, deskripsi singkat, dan tombol aksi menuju katalog. |
| **`CategoryFilter.jsx`** | Menampilkan daftar tombol (*chips*) kategori produk untuk menyaring katalog berdasarkan kategori tertentu. |
| **`SearchBar.jsx`** | Menyediakan kolom pencarian berdasarkan kata kunci, dropdown pengurutan produk, dan jumlah hasil yang ditemukan. |
| **`ProductGrid.jsx`** | Mengatur tata letak (*grid*) daftar produk menggunakan `.map()` untuk merender `ProductCard`, atau menampilkan `EmptyState` jika hasil kosong. |
| **`ProductCard.jsx`** | Menampilkan kartu satu produk (foto, kategori, nama, harga, rating, indikator stok, detail deskripsi, tombol favorit, dan tombol tambah ke keranjang). |
| **`Badge.jsx`** | Komponen kecil yang digunakan ulang untuk menampilkan label kategori produk maupun indikator sisa stok. |
| **`EmptyState.jsx`** | Menampilkan pesan informasi ketika tidak ada produk yang cocok dengan pencarian atau filter yang dipilih. |
| **`CartDrawer.jsx`** | Menampilkan panel geser (*slide-over drawer*) keranjang belanja beserta daftar item dan total harga. |
| **`CartItem.jsx`** | Menampilkan satu baris item di dalam keranjang lengkap dengan tombol ubah jumlah (`+` / `-`) dan hapus item. |
| **`Footer.jsx`** | Menampilkan bagian kaki halaman (*footer*). |

---

## 2. Penggunaan Props

**Props** (*properties*) digunakan untuk mengalirkan data serta fungsi *callback* secara searah dari komponen induk ke komponen anak agar setiap komponen bersifat dinamis:

* **Data Produk & Status (`ProductGrid` → `ProductCard`):** Meneruskan objek `product` (nama, harga, gambar, stok, deskripsi) dan status boolean `liked` untuk menentukan apakah ikon hati aktif atau tidak.
* **Fungsi Aksi (*Callback Props*):** `App.jsx` meneruskan fungsi seperti `onWish`, `onAdd`, pengubah kategori, dan pengubah jumlah item di keranjang agar komponen anak dapat memicu perubahan data di komponen induk.
* **Komponen Reusable (`Badge`):** Menerima props `tone` untuk penyesuaian gaya dan `children` untuk menampilkan teks dinamis (seperti nama kategori atau teks `"Sisa 5"`).
* **Data Keranjang & Filter (`Navbar`, `CategoryFilter`, `SearchBar`, `CartDrawer`, `CartItem`):** Menerima daftar kategori aktif, kata kunci pencarian, daftar item keranjang, serta total belanja yang dihitung di `App.jsx`.

---

## 3. Penggunaan State (`useState`)

**State** digunakan untuk menyimpan data yang dapat berubah selama pengguna berinteraksi dengan aplikasi sehingga tampilan diperbarui otomatis (*re-render*):

* **State Tingkat Aplikasi (di `App.jsx`):**
  * **Filter & Pencarian:** Menyimpan kategori yang sedang dipilih, teks pencarian, dan opsi pengurutan produk.
  * **Keranjang Belanja:** Menyimpan array daftar item yang ditambahkan beserta kuantitasnya (`qty`), serta state boolean untuk membuka/menutup `CartDrawer`.
  * **Favorit (*Wishlist*):** Menyimpan daftar ID produk yang disukai pengguna.
* **State Lokal Komponen (di `ProductCard.jsx`):**
  * `open`: State boolean untuk membuka dan menyembunyikan teks deskripsi detail produk (*Lihat detail* / *Sembunyikan*).
  * `added`: State boolean sementara (dengan `setTimeout` 1,2 detik) untuk menampilkan umpan balik visual `"Ditambahkan ✓"` setelah produk dimasukkan ke keranjang.

---

## 4. Penggunaan Event Handling

**Event Handling** digunakan untuk merespons aksi pengguna melalui *event listener* bawaan React seperti `onClick` dan `onChange`:

* **Klik Tombol (`onClick`):**
  * Menambahkan produk ke keranjang (`handleAdd` di `ProductCard.jsx`) yang sekaligus memanggil `onAdd(product.id)` dan mengaktifkan status tombol `"Ditambahkan ✓"`.
  * Menandai atau menghapus produk favorit melalui `onClick={() => onWish(product.id)}`.
  * Membuka/menutup deskripsi produk dengan `onClick={() => setOpen(!open)}`.
  * Memilih kategori pada `CategoryFilter`, membuka/menutup `CartDrawer`, serta menambah (`+`), mengurangi (`-`), atau menghapus item pada `CartItem`.
* **Perubahan Input (`onChange`):**
  * Menangkap ketikan pengguna secara langsung (*real-time*) pada kolom pencarian dan menangkap perubahan pilihan pada dropdown urutan di `SearchBar.jsx` untuk langsung memfilter daftar produk yang tampil.

---

## Cara Menjalankan Proyek

```bash
npm install
npm run dev