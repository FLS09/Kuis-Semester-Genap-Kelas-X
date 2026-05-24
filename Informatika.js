// --- DATA MATA PELAJARAN INFORMATIKA ---
if (typeof window.subjects === "undefined") {
    window.subjects = [];
}

window.subjects.push({
    id: "informatika",
    name: "Informatika",
    icon: "ph-desktop", 
    color: "text-blue-500 dark:text-blue-400" 
});

if (typeof window.quizData === "undefined") {
    window.quizData = {};
}

// Opsi Standar untuk tipe soal khusus (Diberi akhiran 'Info' agar tidak bentrok dengan mapel lain)
const opsiKompleksInfo = [
    "A. Pernyataan (1), (2), dan (3) benar",
    "B. Pernyataan (1) dan (3) benar",
    "C. Pernyataan (2) dan (4) benar",
    "D. Hanya pernyataan (4) yang benar",
    "E. Semua pernyataan benar"
];

const opsiSebabAkibatInfo = [
    "A. Pernyataan Benar, Alasan Benar, ADA hubungan",
    "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan",
    "C. Pernyataan Benar, Alasan Salah",
    "D. Pernyataan Salah, Alasan Benar",
    "E. Keduanya Salah"
];

// --- DATA SOAL INFORMATIKA KELAS X FASE E ---
window.quizData["informatika"] = [
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Berpikir komputasional (Computational Thinking) merupakan salah satu kemampuan dasar yang harus dimiliki di era digital. Makna yang paling tepat dari berpikir komputasional adalah...",
        options: [
            "Cara manusia berpikir persis seperti sebuah mesin atau komputer beroperasi.",
            "Cara manusia memecahkan masalah kompleks dengan pendekatan logis agar bisa dieksekusi oleh mesin atau manusia.",
            "Kemampuan manusia dalam merakit hardware dan memperbaiki software komputer yang rusak.",
            "Proses menghafal berbagai bahasa pemrograman untuk membuat aplikasi.",
            "Teknik mencari solusi masalah dengan cara mengandalkan kecerdasan buatan (AI)."
        ],
        answer: 1, 
        explanation: "Berpikir komputasional bukan berarti kita berpikir 'seperti komputer', melainkan cara manusia memecahkan masalah dengan logika dan sistematis, sehingga solusinya bisa dijalankan baik oleh manusia maupun komputer."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Terdapat 4 fondasi utama (pilar) dalam berpikir komputasional yang saling berkaitan. Pilar-pilar tersebut antara lain:<br><br>(1) Dekomposisi<br>(2) Pengenalan Pola<br>(3) Abstraksi<br>(4) Algoritma",
        options: opsiKompleksInfo,
        answer: 4, 
        explanation: "Semua benar. Keempat pilar utama Computational Thinking adalah Dekomposisi, Pengenalan Pola, Abstraksi, dan Berpikir Algoritma."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Proses memecah produksi sebuah film pendek menjadi tahap pra-produksi, produksi, dan pasca-produksi merupakan contoh penerapan teknik Dekomposisi.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Dekomposisi adalah metode mengabaikan detail-detail kecil yang tidak penting dalam suatu masalah dan hanya fokus pada inti besarnya saja.",
        options: opsiSebabAkibatInfo,
        answer: 2, 
        explanation: "Pernyataan BENAR (memecah tugas film adalah dekomposisi). Namun Alasan SALAH, karena pengertian mengabaikan detail kecil dan fokus pada inti adalah definisi dari 'Abstraksi', bukan 'Dekomposisi'."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Seorang desainer grafis menyadari bahwa dengan mengetik prompt 'cinematic lighting' dan '8k resolution' pada mesin AI Generatif, ia selalu mendapatkan gaya gambar yang tajam dan realistis. Kemampuan desainer tersebut dalam mengenali tren input-output ini disebut...",
        options: [
            "Dekomposisi",
            "Pengenalan Pola (Pattern Recognition)",
            "Abstraksi",
            "Algoritma",
            "Debugging"
        ],
        answer: 1, 
        explanation: "Mencari kesamaan, tren, atau keteraturan dalam suatu masalah (seperti input prompt yang selalu menghasilkan gaya gambar serupa) adalah penerapan dari Pengenalan Pola."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Peta digital untuk navigasi (seperti Google Maps) sangat menerapkan konsep Abstraksi dalam desainnya.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Peta digital menyaring informasi dengan membuang detail yang tidak penting (seperti bentuk atap rumah atau jumlah pohon) dan hanya menampilkan garis jalan serta rute yang relevan.",
        options: opsiSebabAkibatInfo,
        answer: 0, 
        explanation: "Pernyataan BENAR, Alasan BENAR, dan keduanya BERHUBUNGAN. Peta digital adalah contoh sempurna abstraksi karena ia menyembunyikan detail rumit demi mempermudah pengguna."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Dalam membuat alur kerja deployment (peluncuran) kode aplikasi di server, seorang programmer menulis urutan: '1. Push kode, 2. Jalankan script testing, 3. Deploy ke server'. Karakteristik dari konsep Algoritma yang tecermin dalam hal ini adalah...<br><br>(1) Memiliki urutan langkah yang jelas.<br>(2) Bersifat logis dan sistematis.<br>(3) Urutannya tidak boleh ditukar-tukar.<br>(4) Menyembunyikan informasi yang tidak penting.",
        options: opsiKompleksInfo,
        answer: 0, 
        explanation: "Pernyataan 1, 2, dan 3 adalah ciri Algoritma (langkah sistematis yang terurut/instruksi runtut). Pernyataan 4 salah karena itu adalah definisi Abstraksi."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Agar sebuah sistem komputer dapat beroperasi secara normal dan utuh, dibutuhkan sinergi dari tiga elemen utama, yaitu...",
        options: [
            "Hardware, Input, Output",
            "Software, Sistem Operasi, Hardware",
            "Hardware, Software, Brainware",
            "CPU, GPU, RAM",
            "Programmer, Administrator, Hardware"
        ],
        answer: 2, 
        explanation: "Sistem komputer yang utuh wajib memiliki wujud fisik (Hardware), program yang dijalankan (Software), dan manusia yang mengoperasikannya (Brainware)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Perangkat keras (Hardware) pada komputer terbagi menjadi beberapa fungsi. Sebuah kamera mirrorless yang disambungkan ke PC untuk merekam podcast digolongkan sebagai perangkat...",
        options: [
            "Process",
            "Storage",
            "Output",
            "Input",
            "Brainware"
        ],
        answer: 3, 
        explanation: "Kamera berfungsi untuk menangkap atau 'memasukkan' data visual/video ke dalam sistem komputer, sehingga ia adalah perangkat Input."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> CPU (Central Processing Unit) dan GPU (Graphics Processing Unit) memiliki fungsi yang sama persis dan bisa saling menggantikan secara total tanpa ada perbedaan performa.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> CPU berfungsi memproses instruksi dan logika dasar secara umum, sedangkan GPU dikhususkan untuk merender grafik visual yang berat.",
        options: opsiSebabAkibatInfo,
        answer: 3, 
        explanation: "Pernyataan SALAH (CPU dan GPU tidak sama persis dan tidak bisa menggantikan fungsi spesifik satu sama lain secara total). Alasan BENAR (menjelaskan perbedaan fungsi keduanya secara tepat)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Perangkat penyimpanan (Storage) sekunder bersifat Non-Volatile. Berikut ini yang termasuk dalam kelompok perangkat penyimpanan sekunder adalah:<br><br>(1) Hard Disk Drive (HDD)<br>(2) Solid State Drive (SSD)<br>(3) Flashdisk<br>(4) Random Access Memory (RAM)",
        options: opsiKompleksInfo,
        answer: 0, 
        explanation: "Nomor 1, 2, dan 3 adalah penyimpanan sekunder permanen (non-volatile). RAM (nomor 4) adalah penyimpanan primer yang bersifat Volatile (data hilang saat mati listrik)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Karakteristik utama dari RAM (Random Access Memory) yang menjadikannya sebagai memori Volatile adalah...",
        options: [
            "Bisa menyimpan file video dan dokumen secara permanen meskipun komputer dimatikan.",
            "Ukurannya jauh lebih besar dibandingkan SSD.",
            "Hanya menyimpan data sementara saat aplikasi berjalan, dan datanya akan hilang jika arus listrik terputus.",
            "Berfungsi merender grafik game 3D dengan kecepatan tinggi.",
            "Merupakan jembatan antara software dan brainware."
        ],
        answer: 2, 
        explanation: "Volatile berarti memori yang membutuhkan daya listrik untuk mempertahankan datanya. Jika komputer mati, seluruh data di dalam RAM akan terhapus bersih."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Dalam hierarki perangkat lunak (Software), terdapat Sistem Operasi (OS) dan Aplikasi Program. Manakah dari pilihan berikut yang semuanya merupakan contoh Sistem Operasi?",
        options: [
            "Microsoft Word, Excel, PowerPoint",
            "Windows, Linux, macOS, Android",
            "Google Chrome, Safari, Mozilla Firefox",
            "Adobe Premiere, Photoshop, Illustrator",
            "SSD, HDD, RAM, ROM"
        ],
        answer: 1, 
        explanation: "Windows, Linux, macOS, dan Android adalah Sistem Operasi yang berfungsi sebagai jembatan/fondasi antara hardware dan aplikasi program."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Seorang siswa kelas X yang menggunakan laptop untuk mengetik tugas sekolah di Microsoft Word dikategorikan sebagai Administrator dalam elemen Brainware.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Administrator adalah orang yang bertugas mengelola sistem jaringan atau kelangsungan server, bukan sekadar memakai aplikasi biasa.",
        options: opsiSebabAkibatInfo,
        answer: 3, 
        explanation: "Pernyataan SALAH (siswa yang hanya memakai aplikasi disebut End-User / Operator, bukan Administrator). Alasan BENAR."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Elemen Brainware diklasifikasikan ke dalam beberapa tingkatan fungsi, di antaranya adalah:<br><br>(1) Programmer (menulis kode software)<br>(2) End-User (pengguna akhir)<br>(3) System Administrator (pengelola server/jaringan)<br>(4) Sistem Operasi (pengelola hardware)",
        options: opsiKompleksInfo,
        answer: 0, 
        explanation: "Nomor 1, 2, dan 3 adalah bagian dari Brainware (manusia). Nomor 4 salah karena Sistem Operasi adalah Software, bukan manusia (Brainware)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Seorang panitia acara sekolah ditugaskan membuat 500 sertifikat. Format sertifikatnya sama persis, tetapi nama dan asal kelas penerimanya berbeda-beda. Fitur paling efisien di Microsoft Word untuk menyelesaikan tugas ini adalah...",
        options: [
            "Table of Contents",
            "Mail Merge",
            "Page Layout",
            "Find and Replace",
            "References (Citation)"
        ],
        answer: 1, 
        explanation: "Mail Merge (Surat Massal) adalah fitur yang dirancang untuk menggabungkan dokumen Word dengan database (seperti tabel Excel) untuk mencetak banyak dokumen dengan data yang beda-beda secara otomatis."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Fitur Table of Contents di Word mengharuskan penggunanya untuk mengetik daftar isi satu per satu beserta nomor halamannya secara manual.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Table of Contents akan ter-generate secara otomatis jika pengguna sebelumnya sudah menggunakan format Styles (seperti Heading 1 dan Heading 2) pada judul bab dan subbab.",
        options: opsiSebabAkibatInfo,
        answer: 3, 
        explanation: "Pernyataan SALAH (fitur ini justru membuat daftar isi secara otomatis tanpa ketik manual). Alasan BENAR (cara kerjanya mendeteksi format Heading)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Pada menu Page Layout di aplikasi Word, pengaturan yang berkaitan dengan bentuk kertas (memanjang ke bawah atau melebar ke samping) dan batas tepi ketikan kosong pada kertas secara berturut-turut disebut dengan fitur:<br><br>(1) Orientation<br>(2) Page Break<br>(3) Margins<br>(4) Watermark",
        options: opsiKompleksInfo,
        answer: 1, 
        explanation: "Bentuk kertas memanjang/melebar adalah Orientation (1), dan batas tepi kosong kertas adalah Margins (3). Jadi yang benar (1) dan (3)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Struktur dasar pada lembar kerja (worksheet) Microsoft Excel terdiri dari kolom dan baris. Pertemuan antara kolom B dan baris ke-4 dinamakan sebagai...",
        options: [
            "Sheet B4",
            "Cell B4",
            "Range B4",
            "Column B4",
            "Formula B4"
        ],
        answer: 1, 
        explanation: "Pertemuan antara kolom (vertikal) dan baris (horizontal) di Excel disebut Sel (Cell)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Seorang wali kelas memiliki data kehadiran siswa dalam rentang sel C2 sampai C30. Untuk menghitung berapa banyak sel di rentang tersebut yang benar-benar berisi angka absen (bukan kosong), rumus yang paling tepat digunakan adalah...",
        options: [
            "=SUM(C2:C30)",
            "=AVERAGE(C2:C30)",
            "=MAX(C2:C30)",
            "=COUNT(C2:C30)",
            "=VLOOKUP(C2:C30)"
        ],
        answer: 3, 
        explanation: "Fungsi =COUNT() digunakan khusus untuk menghitung jumlah sel yang berisi angka di dalam sebuah range/rentang tertentu."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Rumus =IF(A1>=75, \"Lulus\", \"Remedial\") akan menghasilkan teks \"Remedial\" apabila sel A1 diisi dengan nilai 80.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Fungsi logika IF akan mengeksekusi parameter kedua (Jika Benar) apabila syarat kondisinya terpenuhi.",
        options: opsiSebabAkibatInfo,
        answer: 3, 
        explanation: "Pernyataan SALAH (80 >= 75 itu benar, maka harusnya hasilnya \"Lulus\", bukan \"Remedial\"). Alasan BENAR (struktur IF memang IF(Kondisi, Benar, Salah))."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Dalam Excel, kita sering kali perlu menarik (copy-drag) sebuah rumus ke bawah. Agar referensi tabel atau sel acuan di dalam rumus tidak ikut bergeser secara berantakan, kita perlu menguncinya menggunakan simbol...",
        options: [
            "& (Ampersand)",
            "@ (At)",
            "# (Hash)",
            "$ (Dollar)",
            "% (Percent)"
        ],
        answer: 3, 
        explanation: "Tanda $ (Absolute Reference) digunakan pada Excel untuk mengunci alamat kolom atau baris agar posisinya absolut/tidak bergeser."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Terkait dengan fungsi pencarian (Lookup) di Excel, pernyataan yang tepat di bawah ini adalah:<br><br>(1) VLOOKUP digunakan untuk mencari data dari tabel referensi yang tersusun secara vertikal (kolom).<br>(2) VLOOKUP mencari nilai di baris pertama tabel mendatar.<br>(3) HLOOKUP digunakan untuk mencari data dari tabel referensi yang tersusun secara horizontal (baris).<br>(4) Struktur rumus VLOOKUP tidak membutuhkan urutan indeks kolom ke berapa yang datanya ingin diambil.",
        options: opsiKompleksInfo,
        answer: 1, 
        explanation: "Pernyataan (1) dan (3) benar. Pernyataan (2) salah karena itu fungsi HLOOKUP. Pernyataan (4) salah karena VLOOKUP wajib menggunakan 'Kolom_ke_Berapa' (col_index_num) untuk menentukan data yang diambil."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Pada penulisan rumus =VLOOKUP(D5, DataSiswa, 3, FALSE), parameter kata 'FALSE' di bagian akhir memiliki fungsi utama untuk...",
        options: [
            "Mengabaikan rumus jika error.",
            "Mengharuskan Excel mencari kecocokan data yang sama persis (Exact Match).",
            "Mencari nilai yang mendekati saja jika yang sama persis tidak ada (Approximate Match).",
            "Mengunci tabel referensi 'DataSiswa'.",
            "Mengubah teks menjadi angka."
        ],
        answer: 1, 
        explanation: "Parameter FALSE (atau 0) pada VLOOKUP/HLOOKUP memberitahu Excel untuk hanya mengembalikan data jika menemukan kecocokan yang 100% sama (Exact Match)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Terdapat data nilai ulangan di sel A1=70, A2=80, A3=90, dan A4=60. Apabila sebuah sel ditulis rumus =SUM(A1:A4), berapakah hasil yang akan ditampilkan?",
        options: [
            "70",
            "300",
            "90",
            "60",
            "75"
        ],
        answer: 1, 
        explanation: "Fungsi SUM menjumlahkan semua angka. 70 + 80 + 90 + 60 = 300."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Menggunakan fitur References (Citation & Bibliography) di Microsoft Word sangat direkomendasikan saat menyusun karya ilmiah atau skripsi.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Fitur tersebut dapat memasukkan sumber kutipan dan menyusun daftar pustaka secara otomatis sesuai standar akademis (seperti format APA atau IEEE).",
        options: opsiSebabAkibatInfo,
        answer: 0, 
        explanation: "Pernyataan BENAR, Alasan BENAR, dan keduanya BERHUBUNGAN. Fitur References diciptakan agar penulis tidak perlu mengetik detail sitasi dan daftar pustaka secara manual dan mencegah salah ketik format."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Seorang System Administrator sedang melacak kendala di jaringan sekolah. Aktivitasnya ini mengkategorikan posisinya dalam sistem komputer sebagai...",
        options: [
            "Software",
            "Hardware",
            "Brainware",
            "Middleware",
            "Freeware"
        ],
        answer: 2, 
        explanation: "Manusia yang mengoperasikan, merancang, atau mengelola (Administrator) perangkat komputer selalu disebut sebagai Brainware."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Perangkat pemroses (Process) adalah otak dari komputer. Berikut ini manakah yang termasuk fungsi utama dari komponen tersebut?<br><br>(1) Menyimpan data instalasi Windows selamanya.<br>(2) Memproses instruksi algoritma dasar (oleh CPU).<br>(3) Mencetak dokumen fisik di atas kertas.<br>(4) Merender grafik tiga dimensi atau video resolusi tinggi (oleh GPU).",
        options: opsiKompleksInfo,
        answer: 2, 
        explanation: "Pernyataan 2 dan 4 adalah fungsi perangkat pemroses (CPU dan GPU). Pernyataan 1 adalah fungsi HDD/SSD (Storage). Pernyataan 3 adalah fungsi Printer (Output)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Manakah urutan proses kerja (Alur Data) yang paling benar dalam mekanisme kerja sebuah sistem komputer standar?",
        options: [
            "Input -> Storage -> Process -> Output",
            "Input -> Process -> Storage -> Output",
            "Output -> Process -> Input -> Storage",
            "Process -> Output -> Storage -> Input",
            "Storage -> Input -> Output -> Process"
        ],
        answer: 1, 
        explanation: "Alur kerja komputer standar adalah: Data dimasukkan (Input), lalu diolah di otak (Process), data tersebut bisa disimpan (Storage) atau langsung ditampilkan ke pengguna (Output)."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Abstraksi adalah metode memecah sebuah aplikasi utuh menjadi bagian menu, database, dan antarmuka (UI).<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Dekomposisi dilakukan untuk membuang detail yang tidak penting sehingga fokus pada masalah utama.",
        options: opsiSebabAkibatInfo,
        answer: 4, 
        explanation: "Keduanya SALAH. Pernyataan pertama itu pengertian Dekomposisi (memecah). Sedangkan alasan kedua itu pengertian dari Abstraksi (membuang detail)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Untuk menghitung nilai rata-rata ujian dari sejumlah besar sel di lembar Excel, rumus yang tepat dan paling efisien adalah...",
        options: [
            "=SUM()",
            "=COUNT()",
            "=AVERAGE()",
            "=MAX()",
            "=IF()"
        ],
        answer: 2, 
        explanation: "Fungsi AVERAGE digunakan secara eksklusif untuk mencari nilai tengah atau rata-rata dari rentang (range) sel berisikan angka."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Berpikir Algoritma menuntut pembuatan instruksi yang logis. Contoh penerapan Algoritma dalam kehidupan sehari-hari selain di dunia coding adalah:<br><br>(1) Membaca berita gosip selebriti di media sosial.<br>(2) Membaca resep masakan dan mengikuti langkah memasaknya urut dari 1 sampai 5.<br>(3) Menggambar secara acak di buku sketsa.<br>(4) Menyusun panduan atau buku manual perakitan lemari meja.",
        options: opsiKompleksInfo,
        answer: 2, 
        explanation: "Pernyataan (2) dan (4) adalah algoritma karena melibatkan urutan instruksi/langkah yang sistematis dan jelas untuk menyelesaikan sebuah tugas/masalah."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Microsoft Excel memberikan kemudahan bagi penggunanya untuk mencari nilai terendah dan tertinggi dari ribuan baris angka penjualan. Fungsi statistik yang mewakili pencarian kedua nilai tersebut secara berurutan adalah...",
        options: [
            "MAX dan SUM",
            "MIN dan MAX",
            "AVERAGE dan COUNT",
            "IF dan VLOOKUP",
            "MIN dan AVERAGE"
        ],
        answer: 1, 
        explanation: "MIN digunakan untuk mencari angka paling rendah, sedangkan MAX untuk mencari angka yang paling tinggi dari suatu data range."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Penyimpanan primer (Primary Storage) selalu lebih lambat dalam membaca data dibandingkan dengan penyimpanan sekunder (Secondary Storage) seperti Harddisk.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Penyimpanan primer seperti RAM berlokasi sangat dekat dengan CPU sehingga jalur pengantaran datanya sangat sempit.",
        options: opsiSebabAkibatInfo,
        answer: 4, 
        explanation: "Keduanya SALAH. RAM (Primary) justru bekerja super cepat dibanding Harddisk agar tidak terjadi perlambatan pada CPU. Alasan bahwa jarak dekat membuat lambat juga keliru secara logika arsitektur komputer."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Sebuah program editing video profesional memerlukan tenaga komputasi ekstra keras untuk mengubah jutaan piksel warna dalam waktu nyata (real-time rendering). Komponen hardware apa yang harus difokuskan agar proses ini berjalan lancar?",
        options: [
            "Microphone (Input)",
            "GPU (Graphics Processing Unit)",
            "HDD (Hard Disk Drive)",
            "Sistem Operasi",
            "Printer"
        ],
        answer: 1, 
        explanation: "GPU adalah perangkat pemroses yang dikhususkan (dedicated) untuk mengalkulasi dan merender matriks grafis visual berat seperti yang terjadi pada video editing 4K atau game 3D."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Dalam implementasi Mail Merge di Microsoft Word, data penerima undangan yang berbeda-beda dapat diambil dari database yang bersumber dari:<br><br>(1) Microsoft Excel (Tabel Worksheet)<br>(2) Microsoft Access (Database)<br>(3) Daftar Kontak Outlook<br>(4) Microsoft Paint (Gambar)",
        options: opsiKompleksInfo,
        answer: 0, 
        explanation: "Pernyataan 1, 2, dan 3 adalah format basis data (database teks/angka) yang dapat diintegrasikan dengan Word Mail Merge. Paint (4) adalah aplikasi gambar, tidak memiliki database relasional untuk Mail Merge."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Apa singkatan yang benar dan tepat dari kepanjangan CPU di dalam sistem anatomi perangkat keras komputer?",
        options: [
            "Computer Processing Unit",
            "Central Processing Unit",
            "Control Program Unit",
            "Center Programmer Utility",
            "Common Process Union"
        ],
        answer: 1, 
        explanation: "CPU merupakan kepanjangan dari Central Processing Unit, yakni unit pemroses sentral yang menjadi otak kendali dari seluruh sistem."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Ketika menggunakan fitur HLOOKUP di Excel untuk mencari data dari tabel gaji karyawan, struktur tabel gajinya dipastikan harus berbentuk...",
        options: [
            "Menurun (Vertikal) dari atas ke bawah",
            "Diagonal",
            "Mendatar (Horizontal) dari kiri ke kanan",
            "Tanpa baris atau kolom",
            "Tabel pivot kompleks 3 Dimensi"
        ],
        answer: 2, 
        explanation: "Huruf 'H' pada HLOOKUP merupakan singkatan dari Horizontal, yang berarti mencari data pada basis tabel referensi yang memanjang/mendatar dari kiri ke kanan."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Kemampuan mengabstraksi dalam Computational Thinking memungkinkan programmer membuat fungsi-fungsi efisien dengan membuang ratusan baris kode yang tak lagi diperlukan.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Abstraksi berfokus hanya pada pengambilan informasi yang penting/relevan terhadap tujuan program dan memfilter semua variabel acak lainnya.",
        options: opsiSebabAkibatInfo,
        answer: 0, 
        explanation: "Pernyataan BENAR dan Alasan BENAR serta BERHUBUNGAN. Penerapan praktis dari metode abstraksi (menyaring hal penting) akan melahirkan baris logika atau kode aplikasi yang bersih, ringan, dan cepat."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Di bawah ini, perangkat mana yang perannya bertindak ganda, yakni bisa sebagai Input sekaligus Output (I/O Device) secara bersamaan pada perangkat teknologi modern?",
        options: [
            "Mouse",
            "Keyboard mekanikal",
            "Layar Sentuh (Touchscreen) pada Smartphone",
            "Speaker eksternal",
            "Printer klasik"
        ],
        answer: 2, 
        explanation: "Touchscreen bertindak sebagai Input karena menerima sentuhan/perintah jari, sekaligus bertindak sebagai Output karena layarnya memancarkan gambar antarmuka."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Beberapa contoh konkret implementasi dari berpikir komputasional dalam disiplin di luar ilmu komputer antara lain:<br><br>(1) Dokter menganalisis rekam medis pasien untuk mengenali pola awal gejala penyakit tertentu.<br>(2) Chef memecah proses membuat kue tart ke dalam urutan langkah penyiapan bahan kering dan basah.<br>(3) Montir menyaring bagian mesin yang tidak bermasalah untuk mencari akar masalah utama mobil (abstraksi).<br>(4) Programmer membuat aplikasi game memakai bahasa C++.",
        options: opsiKompleksInfo,
        answer: 0, 
        explanation: "Pernyataan 1, 2, dan 3 adalah implementasi CT (Pola, Dekomposisi, Abstraksi) di LUAR ilmu komputer. Pilihan ke-4 salah secara logika soal karena itu adalah implementasi DI DALAM ilmu komputer murni."
    }
];