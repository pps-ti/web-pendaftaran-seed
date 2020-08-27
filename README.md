# Web Pendaftaran SEED (Dalam Pengerjaan)

_Repository_ ini berisi website untuk pendaftaran acara SEED Universitas Pembangunan Nasional "Veteran" Jawa Timur. Website dibangun menggunakan Nuxt.js dan Netlify Functions dengan Vuesax sebagai pustaka komponen _front-end_ nya.

## Untuk Para Kontributor dan _Maintainer_

#### Tentang Ekstensi

- Dimohon untuk memasang Prettier di _text editor_ masing - masing. Untuk pengguna VSCode silakan memasang ekstensi Prettier yang tersedia di _marketplace_, lalu aktifkan opsi _"format on save"_ pada _setting_ VSCode anda.

- Juga dianjurkan untuk memasang ekstensi ESLint untuk pengguna VSCode, karena proyek ini memiliki _hook pre-commit_ yang menjalankan ESLint untuk menjaga kualitas dan konsistensi kode.

#### Tentang _commit_

- Dimohon untuk tidak melakukan _commit_ langsung ke _branch master_. Dimohon untuk membuat _branch_ baru untuk setiap pekerjaan anda, lalu _push_ branch tersebut ke _repository_ ini dan lakukan _pull request_ ke _branch master_.

---

## Panduan _Setup_ Lokal

```bash
# Install dependency
$ npm ci

# Jalankan website, dapat diakses di localhost:3000
$ npm run dev

# Build untuk production dan jalankan server
$ npm run build
$ npm run start

# Build menjadi website statis
$ npm run generate

# Jalankan cloud functions, dapat di akses di localhost:9000/{nama file fungsi}
$ npm run lambda:serve

# Build cloud functions, hasilnya akan berada pada folder cloud-functions
$ npm run lambda:build
```

****
Lisensi MIT
