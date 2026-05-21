subjects.push({ 
    id: 'ind', 
    name: 'Bahasa Indonesia', 
    icon: 'ph-book-open-text', 
    color: 'text-rose-500 dark:text-rose-400' 
});

quizData['ind'] = [
    // --- BAGIAN A: HIKAYAT ---
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Dalam sebuah kutipan hikayat tertulis, \"Hatta, sebermula maka sang raja pun memberikan titah kepada panglima...\" Penggunaan kata-kata yang digarisbawahi menunjukkan bahwa hikayat memiliki karakteristik...",
        options: ["Pralogis", "Istanasentris", "Arkais", "Kesaktian", "Anonim"],
        answer: 2,
        explanation: "Kata-kata seperti hatta, sebermula, titah adalah contoh bahasa kuno (arkais) yang sudah usang dan jarang dipakai sekarang."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Berikut ini yang termasuk ke dalam ciri-ciri dari Hikayat sebagai sastra epik lama adalah:<br><br>(1) Istanasentris (pusat cerita di lingkungan kerajaan)<br>(2) Memiliki pengarang yang jelas (tidak anonim)<br>(3) Mengandung unsur pralogis (kemustahilan)<br>(4) Ditulis menggunakan bahasa Indonesia modern",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 1,
        explanation: "Hikayat itu anonim (pengarang tidak diketahui karena disebarkan secara lisan) sehingga pernyataan 2 salah, dan menggunakan bahasa arkais/kuno sehingga pernyataan 4 salah."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Kisah dalam hikayat sering kali menampilkan tokoh yang memiliki kesaktian.<br><b>SEBAB</b><br><b>Alasan:</b> Hikayat selalu menceritakan kejadian yang sangat logis dan sesuai dengan hukum alam.",
        options: [
            "A. Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "C. Pernyataan Benar, Alasan Salah", 
            "D. Pernyataan Salah, Alasan Benar", 
            "E. Keduanya Salah"
        ],
        answer: 2,
        explanation: "Tokoh hikayat memang punya kekuatan super (kesaktian), tetapi alasannya salah karena hikayat justru bersifat pralogis (melanggar hukum alam/mustahil)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "\"Masyarakat di desa itu bergotong-royong membantu memadamkan api yang membakar lumbung padi.\"<br><br>Kutipan di atas mengandung nilai...",
        options: ["Agama", "Moral", "Sosial", "Budaya", "Politik"],
        answer: 2,
        explanation: "Nilai sosial berkaitan dengan hubungan antarmanusia dan kepedulian di dalam masyarakat, seperti kegiatan bergotong-royong."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Contoh kemustahilan (pralogis) yang sering ditemukan dalam teks hikayat adalah:<br><br>(1) Seorang bayi lahir langsung membawa pedang<br>(2) Seorang putri lahir dari gendang<br>(3) Kerajaan dibangun dalam semalam oleh jin<br>(4) Pangeran yang berlatih pedang setiap pagi",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 0,
        explanation: "Pilihan 1, 2, dan 3 sangat melanggar hukum alam (pralogis). Sedangkan pilihan 4 adalah hal lumrah yang masuk akal sehat."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Hikayat pada zaman dahulu tidak diketahui siapa pencipta awalnya (anonim).<br><b>SEBAB</b><br><b>Alasan:</b> Cerita hikayat disampaikan dari mulut ke mulut secara lisan pada kebudayaan Melayu klasik.",
        options: [
            "A. Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "C. Pernyataan Benar, Alasan Salah", 
            "D. Pernyataan Salah, Alasan Benar", 
            "E. Keduanya Salah"
        ],
        answer: 0,
        explanation: "Tradisi lisan dari mulut ke mulut membuat suatu cerita menyebar tanpa ada catatan tertulis mengenai siapa pencipta aslinya (bersifat anonim)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Jika sebuah teks hikayat menceritakan sang pangeran yang tetap menghormati pengemis walaupun bajunya lusuh, maka teks tersebut sedang menonjolkan nilai...",
        options: ["Agama", "Sosial", "Moral", "Budaya", "Estetika"],
        answer: 2,
        explanation: "Nilai moral sangat berkaitan dengan adab, sopan santun, atau sikap baik dan buruk seseorang secara etika."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "\"Raja mengadakan pesta tujuh hari tujuh malam untuk menyambut kelahiran putranya.\"<br><br>Berdasarkan cara menganalisis hikayat, kalimat tersebut merupakan representasi dari nilai...",
        options: ["Agama", "Moral", "Sosial", "Budaya", "Kesaktian"],
        answer: 3,
        explanation: "Nilai budaya berkaitan erat dengan adat, tradisi, atau kebiasaan turun-temurun suatu daerah (seperti pesta penyambutan besar-besaran/selamatan)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Karakteristik istanasentris dalam hikayat dibuktikan dengan hadirnya tokoh-tokoh sentral seperti:<br><br>(1) Raja<br>(2) Pangeran<br>(3) Permaisuri<br>(4) Panglima perang",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 4,
        explanation: "Istanasentris berarti pusat cerita dan konfliknya selalu berada di lingkungan dalam kerajaan beserta para elit di dalamnya."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Kata \"upeti\" dalam hikayat merupakan contoh dari karakteristik arkais.<br><b>SEBAB</b><br><b>Alasan:</b> Upeti berarti pajak atau persembahan yang lazim digunakan dalam sistem kerajaan masa lalu.",
        options: [
            "A. Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "C. Pernyataan Benar, Alasan Salah", 
            "D. Pernyataan Salah, Alasan Benar", 
            "E. Keduanya Salah"
        ],
        answer: 0,
        explanation: "\"Upeti\" adalah salah satu kosakata usang (arkais) yang maknanya sangat identik dengan pembayaran/persembahan kepada seorang raja."
    },

    // --- BAGIAN B: CERPEN ---
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Gagasan utama yang menjadi \"roh\" dalam sebuah cerita pendek dinamakan...",
        options: ["Judul", "Tema", "Alur", "Penokohan", "Amanat"],
        answer: 1,
        explanation: "Tema adalah gagasan utama yang mendasari jalannya cerita, sedangkan judul hanyalah nama luar dari cerita tersebut."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "\"Kamar itu berantakan, baju kotor menumpuk di sudut, dan sisa makanan dibiarkan di meja.\"<br><br>Berdasarkan kutipan di atas, teknik penokohan yang digunakan penulis memiliki ciri:<br><br>(1) Disebut sebagai teknik penokohan dramatik<br>(2) Menyiratkan watak tokoh yang jorok atau pemalas<br>(3) Penulis tidak menyebutkan watak tokoh secara langsung<br>(4) Disebut sebagai teknik penokohan analitik",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 0,
        explanation: "Ini adalah contoh nyata penokohan dramatik (secara tidak langsung), di mana watak pemalas/jorok disiratkan lewat deskripsi lingkungan fisik kamar tokoh."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Sudut pandang orang pertama selalu menggunakan nama tokoh secara eksplisit seperti Budi atau Siti.<br><b>SEBAB</b><br><b>Alasan:</b> Pada sudut pandang orang pertama, penulis bertindak sebagai \"Aku\" atau \"Saya\" dalam cerita tersebut.",
        options: [
            "A. Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "C. Pernyataan Benar, Alasan Salah", 
            "D. Pernyataan Salah, Alasan Benar", 
            "E. Keduanya Salah"
        ],
        answer: 3,
        explanation: "Pernyataan bernilai salah karena sudut pandang orang pertama mutlak menggunakan kata ganti \"Aku\" atau \"Saya\", bukan menyebut nama tokoh pihak ketiga (seperti Budi/Siti)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Bagian dalam struktur cerpen di mana mulai bermunculan percikan masalah yang dialami tokoh (misalnya: Tokoh A tiba-tiba menyadari ia kehilangan uang bayaran sekolahnya) disebut...",
        options: ["Orientasi", "Komplikasi", "Evaluasi", "Klimaks", "Resolusi"],
        answer: 1,
        explanation: "Komplikasi adalah tahap awal di mana masalah/konflik mulai muncul sebelum akhirnya meruncing dan mencapai puncaknya (Klimaks)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Dalam sebuah cerpen, diceritakan masa lalu sang kakek saat masih berjuang di medan perang, lalu secara halus cerita kembali ke masa kini. Alur yang digunakan adalah...",
        options: ["Progresif", "Mundur (Regresif)", "Maju", "Lurus", "Campuran"],
        answer: 1,
        explanation: "Cerita yang mengambil awalan di masa kini lalu mundur jauh untuk menceritakan kisah masa lalu disebut alur mundur (flashback/regresif)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Struktur penyusun teks cerpen meliputi tahapan secara urut:<br><br>(1) Orientasi<br>(2) Komplikasi<br>(3) Evaluasi (Klimaks)<br>(4) Resolusi",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 4,
        explanation: "Keempat bagian tersebut adalah tulang punggung struktur pembangun alur sebuah cerita pendek secara definitif."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Tahap resolusi adalah puncak ketegangan di mana masalah paling ruwet terjadi (misal: tokoh A dituduh mencuri dan hampir dikeluarkan).<br><b>SEBAB</b><br><b>Alasan:</b> Resolusi merupakan tahap akhir dari struktur cerpen yang khusus berisi pengenalan tokoh.",
        options: [
            "A. Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "C. Pernyataan Benar, Alasan Salah", 
            "D. Pernyataan Salah, Alasan Benar", 
            "E. Keduanya Salah"
        ],
        answer: 4,
        explanation: "Puncak ketegangan disebut Evaluasi/Klimaks. Resolusi justru adalah jalan keluar atau penyelesaian masalah. Sementara pengenalan tokoh mutlak berada di tahap awal (Orientasi)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Jika penulis cerita seolah bertindak layaknya sutradara serba tahu yang mengerti segala isi hati, pikiran, hingga rahasia terdalam dari tokoh Budi, maka penulis menggunakan sudut pandang...",
        options: ["Orang pertama pelaku utama", "Orang pertama pelaku sampingan", "Orang ketiga serba tahu", "Orang ketiga pengamat", "Campuran"],
        answer: 2,
        explanation: "Sudut pandang orang ketiga serba tahu bisa mendeskripsikan secara totalitas isi hati dan pikiran karakter (menyebut \"Dia\"/Budi), tidak terbatas pada apa yang tampak secara fisik."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Penulis dapat menanamkan dan menggambarkan watak tokoh secara dramatik (tidak langsung) melalui:<br><br>(1) Dialog antartokoh<br>(2) Tingkah laku dan perbuatan tokoh<br>(3) Pendeskripsian lingkungan fisik tokoh<br>(4) Menyebutkan secara lugas watak tokoh",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 0,
        explanation: "Metode menyebutkan secara lugas/gamblang (nomor 4) adalah ciri murni dari penokohan analitik (langsung), bukan dramatik."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Bagian orientasi pada cerpen yang membangun fondasi suasana biasanya diletakkan pada...",
        options: ["Akhir cerita sebagai jalan keluar", "Puncak masalah", "Awal paragraf (1-2)", "Percikan masalah pertama", "Dialog penutup tokoh utama"],
        answer: 2,
        explanation: "Orientasi selalu berada di paragraf awal (1-2) yang berisi deskripsi fondasi seperti pengenalan tokoh, waktu, dan suasana tempat (setting)."
    },

    // --- BAGIAN C: BIOGRAFI ---
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Perbedaan paling fundamental antara teks biografi dan autobiografi terletak pada...",
        options: ["Tokoh pahlawan yang diceritakan", "Panjang pendeknya halaman cerita", "Siapa penulis cerita tersebut", "Penggunaan bahasa baku arkais", "Latar tempat dan kejadian"],
        answer: 2,
        explanation: "Biografi ditulis oleh pihak ketiga (orang lain), sedangkan autobiografi ditulis oleh tokoh subjek itu sendiri."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Bagian \"Kejadian Penting / Peristiwa dan Masalah\" dalam teks biografi memiliki fungsi penting karena biasanya mendeskripsikan hal-hal berikut:<br><br>(1) Kronologi perjalanan hidup<br>(2) Riwayat pendidikan dan karier<br>(3) Kegagalan dan rintangan yang dialami tokoh<br>(4) Kesuksesan yang akhirnya diraih tokoh",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 4,
        explanation: "Bagian inti/isi biografi secara definitif memuat perjalanan hidup tokoh secara utuh, melingkupi pendidikan, fase jatuh/gagal, hingga fase puncaknya (sukses)."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Bagian reorientasi dalam teks biografi bersifat opsional (boleh dilampirkan atau tidak sama sekali).<br><b>SEBAB</b><br><b>Alasan:</b> Reorientasi murni hanya berisi pandangan, simpulan, atau komentar pribadi sang penulis terhadap tokoh tersebut.",
        options: [
            "A. Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "C. Pernyataan Benar, Alasan Salah", 
            "D. Pernyataan Salah, Alasan Benar", 
            "E. Keduanya Salah"
        ],
        answer: 0,
        explanation: "Karena sifatnya yang hanya berupa opini, simpulan, atau pesan tambahan dari penulis, reorientasi tidak diwajibkan ada dalam merangkai kronologi sejarah tokoh."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "\"Ki Hajar Dewantara adalah sosok pejuang sejati yang pantang menyerah.\"\n\nCara penulis dalam menggambarkan karakter unggul tokoh pada kalimat di atas menggunakan metode...",
        options: ["Deskripsi tindakan", "Langsung", "Dialog tokoh", "Reorientasi", "Pralogis"],
        answer: 1,
        explanation: "Penulis secara \"Langsung\" menyebutkan sifat/watak tokoh secara gamblang di dalam kalimat (pantang menyerah)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Dalam menyusun struktur biografi, pengenalan latar belakang tokoh secara umum seperti nama lengkap, asal orang tua, dan masa kecil harus terdapat pada bagian...",
        options: ["Resolusi", "Orientasi", "Komplikasi", "Reorientasi", "Kejadian Penting"],
        answer: 1,
        explanation: "Orientasi atau bagian pendahuluan adalah gerbang awal yang selalu digunakan untuk pengenalan dasar seorang tokoh."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Sebuah teks biografi yang baik ditulis dengan tujuan edukatif agar pembaca dapat:<br><br>(1) Menemukan ragam nilai keteladanan<br>(2) Menganalisis struktur pola kehidupannya<br>(3) Mengambil pelajaran dari karakter unggul tokoh<br>(4) Mencari kemustahilan cerita layaknya fiksi",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 0,
        explanation: "Biografi adalah teks faktual yang berbasis riwayat nyata, sehingga tidak boleh ada kemustahilan/pralogis di dalamnya (karena nomor 4 adalah ciri murni hikayat)."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> \"Meski diasingkan ke Belanda dalam udara dingin, ia tetap menulis kritik untuk membela rakyatnya.\" Kutipan ini jelas menggambarkan karakter patriotik melalui teknik deskripsi tindakan.<br><b>SEBAB</b><br><b>Alasan:</b> Sang penulis tidak menyebutkan kata \"patriotik\" secara harfiah, melainkan menunjukkannya lewat gestur dan perbuatan berani sang tokoh.",
        options: [
            "A. Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "C. Pernyataan Benar, Alasan Salah", 
            "D. Pernyataan Salah, Alasan Benar", 
            "E. Keduanya Salah"
        ],
        answer: 0,
        explanation: "Ini adalah contoh teknis yang sempurna mengenai analisis keteladanan yang memanfaatkan pendekatan \"Deskripsi Tindakan\"."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "\"Dari panjangnya perjalanan jatuh bangun B.J. Habibie, kita dapat belajar bahwa tingginya kecerdasan akal harus selalu diimbangi dengan dalamnya cinta tanah air.\"\n\nKutipan penuh makna di atas paling tepat digolongkan ke dalam bagian...",
        options: ["Orientasi", "Peristiwa", "Reorientasi", "Klimaks", "Resolusi"],
        answer: 2,
        explanation: "Bagian yang sarat pesan tersebut merupakan bentuk simpulan/komentar dari penulis yang diletakkan di akhir cerita biografi (Reorientasi)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Biografi memfokuskan penceritaan pada figur tokoh nyata di dunia. Sudut pandang yang mutlak digunakan oleh penulis biografi adalah...",
        options: ["Orang pertama", "Orang ketiga", "Orang kedua", "Campuran", "Serba tahu mutlak"],
        answer: 1,
        explanation: "Karena ditulis oleh pihak eksternal, ceritanya mutlak menggunakan sudut pandang orang ketiga (dengan menyebut nama tokoh secara utuh atau menggunakan kata ganti \"Ia/Beliau\")."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Teks biografi ditopang oleh bagian isi yang merupakan porsi terpanjang (badan utama) dari teks. Bagian krusial ini dinamakan:<br><br>(1) Kejadian Penting<br>(2) Peristiwa<br>(3) Masalah<br>(4) Orientasi Utama",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 0,
        explanation: "Secara definitif, teks menyebutkan bagian isi ini sebagai \"Kejadian Penting / Peristiwa dan Masalah\". Orientasi adalah murni sebatas pendahuluan cerita."
    },

    // --- BAGIAN D: NEGOSIASI ---
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Orientasi paling mendasar dan tujuan utama dari pelaksanaan sebuah negosiasi yang sehat adalah untuk mencapai...",
        options: ["Kemenangan mutlak sepihak", "Win-win solution (kesepakatan yang adil dan menguntungkan kedua belah pihak)", "Kesepakatan yang dicapai secara terpaksa", "Adu argumen terkuat tanpa solusi", "Kekalahan telak pihak yang mengajukan proposal"],
        answer: 1,
        explanation: "Negosiasi sejatinya bertujuan untuk mencari titik temu dan kesepakatan damai (win-win solution)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Secara prosedural, tahapan struktur teks negosiasi yang berurutan meliputi kerangka berikut:<br><br>(1) Orientasi<br>(2) Pengajuan<br>(3) Penawaran<br>(4) Persetujuan",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 4,
        explanation: "Struktur komprehensif negosiasi memang dibentuk dari urutan baku: Orientasi &rarr; Pengajuan &rarr; Penawaran &rarr; Persetujuan &rarr; Penutup."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Proses negosiasi yang baik tidak boleh sedikit pun mengandung unsur paksaan atau ancaman secara verbal.<br><b>SEBAB</b><br><b>Alasan:</b> Tindakan negosiasi yang menekan justru akan menjadi bumerang dan menghambat terjadinya persetujuan atau win-win solution.",
        options: [
            "A. Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "C. Pernyataan Benar, Alasan Salah", 
            "D. Pernyataan Salah, Alasan Benar", 
            "E. Keduanya Salah"
        ],
        answer: 0,
        explanation: "Kaidah kebahasaan utama dari negosiasi adalah \"Tidak Menekan\" demi mendapat solusi terbaik tanpa ada pihak yang merasa dirugikan."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "\"Kami mewakili rekan OSIS ingin meminjam aula ini untuk pergelaran Pensi akbar bulan depan, Bapak Kepala Sekolah.\"\n\nDalam anatomi struktur teks negosiasi, ucapan tersebut tepat dimasukkan ke dalam tahapan...",
        options: ["Orientasi", "Pengajuan", "Penawaran", "Persetujuan", "Penutup"],
        answer: 1,
        explanation: "Tahap Pengajuan merupakan saat yang spesifik di mana seseorang secara resmi menyampaikan maksud permintaan atau kepentingannya."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "\"Tolong dipertimbangkan kembali keputusannya ya, Pak, karena acara Pensi mandiri ini rekam jejaknya sangat bagus untuk mengangkat akreditasi sekolah kita.\"\n\nKalimat di atas mengaplikasikan kaidah kebahasaan negosiasi yang bersifat...",
        options: ["Deklaratif", "Persuasif", "Interogatif", "Memaksa (Koersif)", "Imperatif"],
        answer: 1,
        explanation: "Kalimat persuasif murni berfungsi sebagai sarana untuk membujuk dan meluluhkan hati lawan bicara secara halus dan bernada rasional."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Ciri-ciri kaidah kebahasaan yang esensial dan wajib tersemat dalam praktik teks negosiasi adalah:<br><br>(1) Argumen yang terbangun Logis<br>(2) Menggunakan Bahasa Persuasif<br>(3) Memiliki Pasangan Tuturan bersahut<br>(4) Terdiri dari Kalimat Deklaratif yang lugas",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 4,
        explanation: "Seluruh poin-poin tersebut (1 sampai 4) adalah pilar-pilar penting pembangun strategi kebahasaan khusus untuk teks negosiasi."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Argumen yang dilontarkan saat panasnya proses tawar-menawar (penawaran) tidak boleh disajikan sekadar seperti mengemis belas kasihan.<br><b>SEBAB</b><br><b>Alasan:</b> Nilai sebuah argumen diuji dari akal sehat (logis) dan berbasis pada fakta empiris agar pihak lawan mau menyetujui tanpa keraguan.",
        options: [
            "A. Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "C. Pernyataan Benar, Alasan Salah", 
            "D. Pernyataan Salah, Alasan Benar", 
            "E. Keduanya Salah"
        ],
        answer: 0,
        explanation: "Argumen logis yang tidak berdasar pada rasa belas kasih (emosi) menjadi faktor penentu dan kunci utama suksesnya perundingan negosiasi."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "\"Selamat pagi sejahtera, Pak Budi. Maksud kedatangan kami yang jauh ke kantor ini sejatinya ingin bersilaturahmi menyambung tali persaudaraan...\"\n\nTahapan berbasa-basi yang brilian ini memegang fungsi sebagai pembuka obrolan yang dinamakan...",
        options: ["Orientasi", "Pengajuan", "Persetujuan", "Pasangan Tuturan", "Resolusi Dinamis"],
        answer: 0,
        explanation: "Orientasi merupakan gerbang salam pembuka (ice breaking) sebelum memasuki bagian inti tuntutan dalam sebuah negosiasi."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Kegiatan negosiasi selalu memancing interaksi dialogis berupa aksi dan reaksi secara konstan, seperti 'meminta &rarr; menolak secara halus / menerima'. Hal unik ini di dalam kajian kebahasaan dikenal sebagai...",
        options: ["Kalimat Deklaratif", "Argumen Logis", "Pasangan Tuturan", "Struktur Komplikasi", "Bahasa Persuasif"],
        answer: 2,
        explanation: "Pasangan tuturan merupakan istilah baku untuk interaksi dua arah (aksi-reaksi yang berbalasan) antar pihak yang sedang berdiskusi."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Keterampilan mengolah teks negosiasi dapat diaplikasikan langsung dalam kehidupan nyata sehari-hari, tecermin pada situasi:<br><br>(1) Dramatika tawar-menawar harga di los pasar tradisional<br>(2) Dewan OSIS yang mempresentasikan proposal izin acara kepada jajaran Kepala Sekolah<br>(3) Perwakilan serikat karyawan yang menuntut kesejahteraan/kenaikan gaji kepada atasan<br>(4) Khidmatnya membacakan riwayat dan jejak hidup para pahlawan kemerdekaan",
        options: ["A. (1), (2), dan (3) benar", "B. (1) dan (3) benar", "C. (2) dan (4) benar", "D. Hanya (4) yang benar", "E. Semuanya benar"],
        answer: 0,
        explanation: "Nomor 1, 2, dan 3 adalah representasi nyata situasi yang membutuhkan negosiasi dan kesepakatan dua belah pihak. Sementara nomor 4 adalah bentuk kegiatan pasif membaca teks biografi."
    }
];
