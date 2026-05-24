// --- DATA MATA PELAJARAN FISIKA ---
if (typeof window.subjects === "undefined") {
    window.subjects = [];
}

window.subjects.push({
    id: "fisika",
    name: "Fisika",
    icon: "ph-atom", 
    color: "text-blue-500 dark:text-blue-400" 
});

if (typeof window.quizData === "undefined") {
    window.quizData = {};
}

// Opsi Standar untuk tipe soal khusus
const opsiKompleks = [
    "A. Pernyataan (1), (2), dan (3) benar",
    "B. Pernyataan (1) dan (3) benar",
    "C. Pernyataan (2) dan (4) benar",
    "D. Hanya pernyataan (4) yang benar",
    "E. Semua pernyataan benar"
];

const opsiSebabAkibat = [
    "A. Pernyataan Benar, Alasan Benar, ADA hubungan",
    "B. Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan",
    "C. Pernyataan Benar, Alasan Salah",
    "D. Pernyataan Salah, Alasan Benar",
    "E. Keduanya Salah"
];

const opsiBenarSalah = ["BENAR", "SALAH"];

// --- DATA SOAL FISIKA KELAS X SEMESTER GENAP ---
window.quizData["fisika"] = [
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Menurut Hukum Gravitasi Universal Newton, gaya tarik-menarik antara dua benda bermassa berbanding lurus dengan hasil kali kedua massa dan berbanding terbalik dengan kuadrat jarak antara kedua pusat massanya. Jika jarak antara dua planet diperbesar menjadi dua kali lipat, maka gaya gravitasi antara keduanya menjadi...",
        options: [
            "Dua kali lipat lebih besar",
            "Sama seperti semula",
            "Setengah kali dari semula",
            "Seperempat kali dari semula",
            "Seperdelapan kali dari semula"
        ],
        answer: 3, 
        explanation: "Gaya gravitasi sebanding dengan 1/r². Jika jarak (r) menjadi 2 kali lipat, maka gaya gravitasi menjadi 1/(2)² = 1/4 (seperempat) kali dari gaya semula."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Percepatan gravitasi (g) di daerah khatulistiwa (ekuator) lebih kecil dibandingkan dengan percepatan gravitasi di daerah kutub utara maupun selatan.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Bentuk bumi tidak bulat sempurna melainkan pepat di kutub dan menggelembung di khatulistiwa, sehingga jari-jari bumi di khatulistiwa lebih besar.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta saling berhubungan. Percepatan gravitasi (g = GM/R²) berbanding terbalik dengan kuadrat jari-jari (R). Jari-jari khatulistiwa lebih besar dari jari-jari kutub, sehingga gravitasi di khatulistiwa lebih kecil."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Perhatikan pernyataan tentang Hukum Kepler berikut ini!<br><br>(1) Semua planet bergerak dalam lintasan elips dengan matahari berada di salah satu titik fokusnya.<br>(2) Garis hubung planet ke matahari menyapu luasan yang sama dalam selang waktu yang sama.<br>(3) Kuadrat periode planet sebanding dengan pangkat tiga jarak rata-ratanya ke matahari.<br>(4) Planet bergerak lebih cepat saat berada di titik aphelion (terjauh) dibanding perihelion (terdekat).",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Pernyataan (1), (2), dan (3) adalah Hukum Kepler I, II, dan III yang benar. Pernyataan (4) salah, karena menurut Hukum Kepler II, planet justru bergerak lebih cepat saat berada di titik perihelion (titik terdekat dengan matahari) agar luas sapuan areanya tetap sama."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Benda bermassa 5 kg ditarik dengan gaya tetap 20 N yang membentuk sudut 60 derajat terhadap arah horizontal. Jika benda berpindah sejauh 4 meter, besarnya usaha yang dilakukan gaya tersebut adalah... (cos 60° = 0,5)",
        options: [
            "20 Joule",
            "40 Joule",
            "60 Joule",
            "80 Joule",
            "100 Joule"
        ],
        answer: 1, 
        explanation: "Usaha (W) = F . s . cos(θ) = 20 N . 4 m . cos(60°) = 80 . 0,5 = 40 Joule."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Seseorang yang mengangkat barbel bermassa 20 kg dari lantai dan menahannya di atas kepala selama 5 menit tanpa bergerak dikatakan telah melakukan usaha yang sangat besar menurut konsep fisika.",
        options: opsiBenarSalah,
        answer: 1, 
        explanation: "SALAH. Dalam fisika, Usaha (W) = Gaya (F) × Perpindahan (s). Karena orang tersebut hanya 'menahan' barbel (tidak ada perpindahan, s = 0), maka usaha fisika yang dilakukan selama 5 menit tersebut adalah 0 Joule."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Perhatikan konsep gaya konservatif dan non-konservatif berikut!<br><br>(1) Usaha yang dilakukan oleh gaya konservatif tidak bergantung pada lintasan yang dilalui benda.<br>(2) Gaya gravitasi bumi merupakan salah satu contoh gaya konservatif.<br>(3) Usaha oleh gaya konservatif pada lintasan tertutup selalu bernilai nol.<br>(4) Gaya gesek kinetis antara benda dan lantai adalah contoh gaya konservatif.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Pernyataan 1, 2, dan 3 adalah ciri mutlak gaya konservatif. Pernyataan 4 salah, karena gaya gesek bergantung pada panjang lintasan dan usahanya mengurangi energi mekanik sistem, sehingga tergolong gaya non-konservatif."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Sebuah mobil bermassa 1.000 kg awalnya diam. Kemudian mesin mobil mengerahkan gaya sehingga mobil melaju dengan kecepatan 20 m/s. Sesuai Teorema Usaha-Energi, berapakah usaha total yang dilakukan terhadap mobil tersebut?",
        options: [
            "100.000 Joule",
            "200.000 Joule",
            "400.000 Joule",
            "10.000 Joule",
            "20.000 Joule"
        ],
        answer: 1, 
        explanation: "Teorema Usaha-Energi: Usaha = Perubahan Energi Kinetik (ΔEK). W = ½ m(v_t² - v_0²) = ½ (1000)(20² - 0²) = 500 × 400 = 200.000 Joule."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Bola yang dilempar lurus ke atas akan memiliki energi potensial maksimum saat berada di puncak ketinggiannya.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Saat berada di puncak ketinggiannya, bola memiliki kecepatan nol sehingga energi kinetiknya bernilai minimum (nol) dan seluruh energi mekaniknya berupa energi potensial.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan BENAR dan Alasan BENAR serta ada hubungan sebab-akibat. Berdasarkan Hukum Kekekalan Energi Mekanik, saat bola di puncak, kecepatan v=0 (EK=0), sehingga Energi Potensial (EP = mgh) mencapai nilai maksimumnya yang setara dengan total EM."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Peluru A bermassa m ditembakkan dengan kecepatan v. Peluru B bermassa m ditembakkan dengan kecepatan 2v. Perbandingan energi kinetik peluru A terhadap peluru B adalah...",
        options: [
            "1 : 1",
            "1 : 2",
            "1 : 4",
            "2 : 1",
            "4 : 1"
        ],
        answer: 2, 
        explanation: "Energi Kinetik (EK) berbanding lurus dengan kuadrat kecepatan (v²). EK_B = ½ m (2v)² = ½ m 4v² = 4 EK_A. Jadi perbandingannya 1 : 4."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Seorang petinju memukul samsak dengan gaya konstan 500 N selama 0,1 sekon. Besarnya impuls yang diberikan petinju terhadap samsak adalah...",
        options: [
            "5 N.s",
            "50 N.s",
            "500 N.s",
            "5.000 N.s",
            "0,5 N.s"
        ],
        answer: 1, 
        explanation: "Impuls (I) adalah hasil kali gaya dengan selang waktu sentuh. I = F . Δt = 500 N × 0,1 s = 50 N.s."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Benda bermassa 2 kg bergerak dengan kecepatan 10 m/s menabrak tembok lalu memantul berlawanan arah dengan kecepatan 6 m/s. Besarnya perubahan momentum (impuls) yang dialami benda adalah...",
        options: [
            "8 kg.m/s",
            "12 kg.m/s",
            "20 kg.m/s",
            "32 kg.m/s",
            "0 kg.m/s"
        ],
        answer: 3, 
        explanation: "Kecepatan awal v1 = 10 m/s, kecepatan akhir memantul v2 = -6 m/s (arah berlawanan). Perubahan momentum Δp = m(v2 - v1) = 2(-6 - 10) = 2(-16) = -32 kg.m/s. Besarnya mutlak adalah 32 kg.m/s."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Pada bagian depan dan belakang mobil-mobil modern sengaja didesain mudah ringsek/penyok saat terjadi tabrakan (crumple zone).<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Zona ringsek ini berfungsi memperlama selang waktu sentuh tumbukan, sehingga gaya impulsif rata-rata yang mengenai penumpang menjadi lebih kecil.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta saling berhubungan. Dari rumus F = I / Δt, jika waktu sentuh (Δt) diperbesar (diperlambat dengan membuat body ringsek), maka gaya hancur (F) yang menimpa penumpang akan makin kecil."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Terdapat tiga jenis tumbukan dalam fisika: lenting sempurna, lenting sebagian, dan tidak lenting sama sekali. Ciri utama dari tumbukan tidak lenting sama sekali adalah...",
        options: [
            "Berlaku hukum kekekalan energi kinetik.",
            "Koefisien restitusi (e) sama dengan 1.",
            "Setelah bertumbukan, kedua benda berpisah dengan kecepatan sama.",
            "Setelah bertumbukan, kedua benda menyatu dan bergerak dengan kecepatan yang sama.",
            "Tidak berlaku hukum kekekalan momentum."
        ],
        answer: 3, 
        explanation: "Pada tumbukan tidak lenting sama sekali, energi kinetik banyak yang hilang, koefisien restitusi e = 0, dan setelah bertumbukan kedua benda menempel (bergabung) sehingga bergerak dengan kecepatan akhir yang sama."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Hukum Kekekalan Momentum hanya berlaku pada tumbukan lenting sempurna, dan tidak berlaku pada tumbukan lenting sebagian atau tidak lenting sama sekali.",
        options: opsiBenarSalah,
        answer: 1, 
        explanation: "SALAH. Hukum Kekekalan Momentum SELALU BERLAKU pada SEMUA jenis tumbukan, selama tidak ada gaya eksternal yang memengaruhi sistem. Yang membedakan lenting sempurna dan tidak lenting adalah energi kinetiknya yang kekal atau hilang."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Dua buah benda A bermassa m bergerak ke kanan dengan kecepatan v bertumbukan lenting sempurna dengan benda B bermassa m (massa identik) yang diam. Setelah tumbukan, kecepatan benda A dan benda B adalah...",
        options: [
            "Benda A diam (v=0), benda B bergerak dengan kecepatan v.",
            "Keduanya bergerak bersama dengan kecepatan 0,5 v.",
            "Benda A berbalik arah dengan kecepatan v, benda B tetap diam.",
            "Keduanya berbalik arah menjauhi satu sama lain dengan kecepatan v.",
            "Kecepatan keduanya menjadi nol (berhenti)."
        ],
        answer: 0, 
        explanation: "Pada tumbukan lenting sempurna dengan massa yang identik (mA = mB), kedua benda akan bertukar kecepatan. Karena A awalnya v dan B diam (0), setelah tumbukan A menjadi diam (0) dan B melesat dengan kecepatan v."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Gerak Harmonis Sederhana (GHS) adalah gerak bolak-balik di sekitar titik kesetimbangan. Syarat utama agar suatu benda mengalami GHS adalah...<br><br>(1) Adanya gaya pemulih (restoring force) yang selalu mengarah ke titik setimbang.<br>(2) Besarnya gaya pemulih berbanding lurus dengan besarnya simpangan.<br>(3) Berlaku persamaan F = -kx.<br>(4) Kecepatannya selalu konstan di setiap titik.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Syarat GHS adalah gaya pemulih sebanding dengan simpangan dan arahnya berlawanan dengan arah simpangan menuju titik setimbang (1, 2, 3 benar). Pernyataan 4 salah karena kecepatan pada GHS berubah-ubah (maks di tengah, nol di ujung simpangan)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Pada suatu ayunan bandul sederhana (bandul matematis), periode ayunan (T) bergantung pada faktor-faktor berikut, kecuali...",
        options: [
            "Panjang tali (L)",
            "Percepatan gravitasi (g)",
            "Massa beban (m)",
            "Sudut simpangan awal yang kecil (kurang dari 10 derajat)",
            "Tempat di mana ayunan tersebut diletakkan"
        ],
        answer: 2, 
        explanation: "Rumus periode bandul sederhana adalah T = 2π√(L/g). Dari rumus tersebut terlihat bahwa periode hanya bergantung pada panjang tali (L) dan gravitasi (g). Massa beban (m) sama sekali tidak memengaruhi periode ayunan."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Sebuah pegas memiliki konstanta pegas k. Jika sebuah massa m digantungkan padanya, pegas bergetar dengan frekuensi f. Jika massa beban diganti menjadi 4m, maka frekuensi getaran pegas menjadi...",
        options: [
            "Dua kali lebih besar (2f)",
            "Sama (f)",
            "Setengah kali dari semula (0,5f)",
            "Seperempat kali dari semula (0,25f)",
            "Empat kali lebih besar (4f)"
        ],
        answer: 2, 
        explanation: "Frekuensi pegas f = 1/(2π) × √(k/m). Frekuensi berbanding terbalik dengan akar massa (√m). Jika m menjadi 4 kali, maka penyebutnya menjadi √4 = 2. Sehingga frekuensi barunya menjadi 1/2 f."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Pada saat benda yang melakukan Gerak Harmonis Sederhana berada di titik simpangan terjauh (amplitudo), kecepatan benda bernilai nol.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Pada saat benda berada di simpangan terjauh, gaya pemulih dan percepatan benda berada pada nilai maksimumnya.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan BENAR dan alasan BENAR serta memiliki hubungan sebab-akibat. Di ujung ayunan/simpangan, benda sesaat berhenti (v=0) sebelum berbalik arah. Sesaat berbalik itu disebabkan tarikan gaya pemulih yang nilainya paling maksimal (F dan a maksimal di simpangan terjauh)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Satuan dari Energi Potensial, Energi Kinetik, dan Usaha dalam sistem SI (Satuan Internasional) adalah sama, yaitu...",
        options: [
            "Newton",
            "Watt",
            "Joule",
            "Pascal",
            "Hertz"
        ],
        answer: 2, 
        explanation: "Usaha (W) dan segala bentuk Energi (EK, EP, Energi Panas, dll) memiliki dimensi yang sama dan satuannya di dalam sistem SI adalah Joule (J) atau kg.m²/s²."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Besarnya impuls dari gaya yang grafiknya berbentuk segitiga siku-siku dengan alas mendatar 0,4 sekon dan tinggi gaya maksimum 100 N adalah...",
        options: [
            "10 N.s",
            "20 N.s",
            "40 N.s",
            "80 N.s",
            "100 N.s"
        ],
        answer: 1, 
        explanation: "Impuls dapat dihitung dari Luas daerah di bawah kurva grafik F-t. Luas segitiga = ½ × alas × tinggi = ½ × 0,4 s × 100 N = 0,2 × 100 = 20 N.s."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Ketika seorang pelompat indah terjun dari tebing ke dalam air laut, sesaat sebelum menyentuh air energi potensialnya bernilai nol, sedangkan energi mekaniknya berubah menjadi dua kali lipat energi kinetik.",
        options: opsiBenarSalah,
        answer: 1, 
        explanation: "SALAH. Hukum Kekekalan Energi Mekanik menyatakan EM (EK + EP) selalu KONSTAN/TETAP. Sesaat sebelum menyentuh air, EP bernilai nol, sehingga seluruh EM berubah menjadi EK (EM = EK). Energi mekanik tidak menjadi 'dua kali lipat'."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Satelit geosinkron (geostasioner) adalah satelit komunikasi yang posisinya selalu tetap berada di atas titik yang sama di khatulistiwa bumi. Syarat satelit ini dapat terjadi adalah...",
        options: [
            "Massanya harus sama persis dengan massa bumi.",
            "Periode revolusinya harus sama dengan periode rotasi bumi (24 jam).",
            "Tidak memiliki kecepatan sama sekali di luar angkasa.",
            "Berada di lapisan troposfer.",
            "Hanya dipengaruhi gaya dorong roket secara konstan."
        ],
        answer: 1, 
        explanation: "Satelit geostasioner harus bergerak mengelilingi bumi dengan periode yang persis sama dengan periode putaran (rotasi) bumi pada porosnya, yaitu sekitar 24 jam, agar tampak 'diam' jika dilihat dari pengamat di bumi."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Kekuatan sebuah mesin motor mampu memindahkan barang dengan usaha sebesar 6.000 Joule dalam waktu 2 menit. Besar daya yang dihasilkan mesin tersebut adalah...",
        options: [
            "50 Watt",
            "120 Watt",
            "3.000 Watt",
            "12.000 Watt",
            "500 Watt"
        ],
        answer: 0, 
        explanation: "Daya (P) = Usaha (W) / Waktu (t). Waktu harus dalam sekon. 2 menit = 120 sekon. P = 6.000 J / 120 s = 50 Watt."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Seorang penari balet es (ice skater) yang sedang berputar (spin) akan merapatkan kedua lengannya ke dada agar putarannya menjadi jauh lebih cepat.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Dengan merapatkan lengan, momen inersianya menjadi lebih kecil sehingga sesuai Hukum Kekekalan Momentum Sudut, kecepatan sudutnya (kecepatan putar) harus membesar.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan BENAR dan alasan BENAR serta memiliki hubungan sebab-akibat. Momentum sudut L = I × ω (Inersia × Kecepatan Sudut). L konstan, jadi jika lengan dirapatkan (I mengecil), maka ω harus membesar agar seimbang."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Apabila pada seutas pegas digantungkan beban bermassa 2 kg, pegas tersebut bertambah panjang 10 cm (0,1 m). Konstanta pegas (k) tersebut adalah... (g = 10 m/s²)",
        options: [
            "2 N/m",
            "20 N/m",
            "50 N/m",
            "200 N/m",
            "2000 N/m"
        ],
        answer: 3, 
        explanation: "Gaya berat benda W = mg = 2 × 10 = 20 N. Sesuai Hukum Hooke, F = k.Δx. Jadi k = F / Δx = 20 N / 0,1 m = 200 N/m."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Pernyataan yang tepat mengenai Energi pada Gerak Harmonis Sederhana (GHS) ayunan bandul adalah...<br><br>(1) Energi kinetik maksimum terjadi di titik kesetimbangan.<br>(2) Energi potensial minimum terjadi di simpangan terjauh.<br>(3) Energi mekanik sistem selalu konstan di setiap titik.<br>(4) Jumlah energi kinetik dan energi potensial selalu berubah-ubah setiap saat.",
        options: opsiKompleks,
        answer: 1, 
        explanation: "Pernyataan 1 benar (v max di tengah, EK max). Pernyataan 2 salah (EP max ada di ujung terjauh). Pernyataan 3 benar (EM konstan). Pernyataan 4 salah (Jumlah EK+EP adalah EM yang sifatnya tetap)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Dalam suatu senapan bermassa 4 kg ditembakkan peluru bermassa 0,02 kg dengan kecepatan 400 m/s. Kecepatan pental senapan ke arah belakang adalah...",
        options: [
            "0,5 m/s",
            "2 m/s",
            "4 m/s",
            "8 m/s",
            "200 m/s"
        ],
        answer: 1, 
        explanation: "Berlaku Hukum Kekekalan Momentum (awal = akhir). 0 = m_s.v_s' + m_p.v_p'. 0 = 4.v_s' + (0,02)(400). 4.v_s' = -8. v_s' = -2 m/s. Tanda minus berarti berlawanan arah (pental). Besarnya 2 m/s."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Pesawat luar angkasa yang terbang mengitari bumi tidak perlu menyalakan mesin jet terus menerus karena gaya sentripetal dari gravitasi bumi berfungsi mempertahankan pesawat pada orbit melingkarnya.",
        options: opsiBenarSalah,
        answer: 0, 
        explanation: "BENAR. Gaya gravitasi bumi berfungsi sebagai gaya sentripetal yang secara alami akan menarik dan membelokkan arah pesawat secara konstan sehingga lintasannya melingkar sempurna tanpa perlu dorongan mesin maju secara konstan."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Hukum III Newton merumuskan konsep Aksi-Reaksi. Syarat dari sepasang gaya disebut gaya Aksi-Reaksi adalah...<br><br>(1) Besarnya gaya sama.<br>(2) Arahnya berlawanan.<br>(3) Bekerja pada dua benda yang berbeda.<br>(4) Hanya terjadi pada benda yang bergerak.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Syarat Aksi-Reaksi: (1) Besar sama, (2) Arah berlawanan, (3) Bekerja saling silang pada dua benda beda (misal A dorong B, B balas dorong A). Pernyataan 4 salah karena aksi-reaksi juga terjadi saat benda diam."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Gaya yang diperlukan oleh sebuah balok besi bermassa 10 kg untuk bergerak melingkar dengan jari-jari 2 meter dengan kecepatan linier 4 m/s adalah...",
        options: [
            "20 N",
            "40 N",
            "80 N",
            "160 N",
            "320 N"
        ],
        answer: 2, 
        explanation: "Gaya sentripetal Fs = m.v²/r. Fs = 10 × (4²) / 2 = 10 × 16 / 2 = 160 / 2 = 80 Newton."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Ketinggian maksimal dari sebuah bola yang dilempar lurus ke atas dengan kecepatan awal 20 m/s (g = 10 m/s²) jika mengabaikan hambatan udara adalah...",
        options: [
            "10 meter",
            "20 meter",
            "40 meter",
            "80 meter",
            "100 meter"
        ],
        answer: 1, 
        explanation: "Menggunakan persamaan gerak atau kekekalan energi mekanik: ½ m v0² = m g h. Maka h = v0² / 2g = 20² / 2(10) = 400 / 20 = 20 meter."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Dua astronot yang melayang sejauhan di ruang angkasa hampa udara tidak dapat melakukan gaya tarik gravitasi satu sama lain.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Gaya gravitasi mutlak membutuhkan medium rambat perantara berupa udara atau gas untuk bisa menghantarkan gaya.",
        options: opsiSebabAkibat,
        answer: 4, 
        explanation: "Keduanya SALAH. Gaya gravitasi Newton (F = G.m1.m2/r²) bergantung HANYA pada massa benda dan jarak, BUKAN pada medium/udara. Astronaut punya massa, jadi mereka tetap tarik menarik dengan gaya gravitasi (walau sangat kecil tak terasa)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Koefisien restitusi (e) mendeskripsikan jenis kelentingan tumbukan. Nilai e = 0,5 menggambarkan peristiwa...",
        options: [
            "Dua mobil yang bertabrakan dan saling menyatu menempel.",
            "Bola biliar yang bertumbukan dan saling terpental keras tanpa kehilangan energi kinetik.",
            "Sebuah bola basket memantul ke lantai dengan ketinggian pantulan yang makin lama makin mengecil.",
            "Asteroid menabrak bumi dan meledak lenyap.",
            "Gas helium yang bertumbukan partikelnya dalam ruang tertutup."
        ],
        answer: 2, 
        explanation: "Nilai e di antara 0 dan 1 (0 < e < 1) disebut tumbukan lenting sebagian, cirinya ada energi yang hilang, contohnya bola memantul tak kembali ke tinggi semula."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Jika sebuah pegas yang digantungi beban ditarik ke bawah lalu dilepaskan, pegas tersebut mengalami gerak harmonis sederhana. Pada saat benda melewati titik kesetimbangan (x = 0), besaran yang memiliki nilai nol adalah...",
        options: [
            "Kecepatan benda",
            "Energi kinetik benda",
            "Percepatan dan gaya pemulih",
            "Energi mekanik total",
            "Massa benda"
        ],
        answer: 2, 
        explanation: "Di titik kesetimbangan (tengah), simpangan pegas x = 0. Sesuai F = -kx dan F = ma, maka gaya pemulih dan percepatan bernilai nol. Sebaliknya, kecepatannya justru mencapai nilai maksimum di titik ini."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Terdapat grafik yang menunjukkan hubungan antara perpanjangan pegas (Δx) pada sumbu x dan gaya (F) pada sumbu y. Grafik yang menunjukkan pegas mematuhi Hukum Hooke akan berbentuk...",
        options: [
            "Garis lurus konstan mendatar (horizontal)",
            "Garis lengkung parabola",
            "Garis lurus miring ke atas (gradien positif konstan)",
            "Garis asimtot (mendekati tak terhingga)",
            "Garis zigzag"
        ],
        answer: 2, 
        explanation: "Hukum Hooke menyatakan gaya F sebanding/linear dengan pertambahan panjang Δx (F = k.Δx). Maka grafiknya adalah garis lurus yang miring proporsional dari titik 0,0."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Daya mekanik merupakan laju perubahan usaha. Seorang kuli panggul memindahkan semen 500 N ke truk yang tingginya 1,5 meter dalam waktu 5 detik. Daya yang dikerahkan kuli tersebut adalah...",
        options: [
            "75 Watt",
            "150 Watt",
            "500 Watt",
            "750 Watt",
            "3750 Watt"
        ],
        answer: 1, 
        explanation: "Usaha (W) yang dilakukan untuk mengangkat sejajar gravitasi: W = F × s = 500 N × 1,5 m = 750 J. Daya P = W / t = 750 J / 5 s = 150 Watt."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Seseorang bermain ayunan di halaman. Jika panjang tali ayunan digandakan menjadi 4 kali lipat dari ukuran semula, maka periode ayunan orang tersebut akan...",
        options: [
            "Menjadi 2 kali lipat lebih lama",
            "Menjadi 4 kali lipat lebih lama",
            "Tetap sama tidak berubah",
            "Menjadi setengah kali lebih singkat",
            "Menjadi seperempat kali lebih singkat"
        ],
        answer: 0, 
        explanation: "Rumus periode bandul matematis: T = 2π√(L/g). Periode berbanding lurus dengan akar panjang tali (√L). Jika L baru = 4L, maka T baru = √4 = 2 kali T awal."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Sebuah bola tanah liat basah dilemparkan ke tembok batu dan menempel padanya. Tumbukan ini digolongkan sebagai tumbukan tidak lenting sama sekali.<br><br><b>SEBAB</b><br><br><b>Alasan:</b> Seluruh energi kinetik awal bola tanah liat berubah total menjadi bentuk energi lain (panas/suara) karena kecepatan bola setelah menabrak menjadi nol.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan BENAR (menempel dan bergabung/diam bersama objek besar artinya e=0). Alasan BENAR (Energi Kinetik hilang total dikonversi menjadi kerusakan benda/panas/suara). Dan saling berhubungan."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Usaha bernilai negatif terjadi apabila gaya yang bekerja pada suatu benda...<br><br>(1) Berlawanan arah dengan arah perpindahan benda.<br>(2) Membentuk sudut tumpul (di atas 90 derajat) terhadap perpindahan.<br>(3) Bekerja sebagai gaya gesekan yang menghambat laju benda.<br>(4) Mengangkat benda tegak lurus melawan gravitasi bumi.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Usaha negatif (W < 0) bermakna gaya menghambat gerak benda. Gaya berlawanan arah perpindahan (1) cos(180°) = -1, sudut tumpul (2), gaya gesek kinetik (3). Pernyataan 4 salah, kalau kita mengangkat benda, gaya tangan kita SAMA ARAH dengan perpindahan (atas), usahanya positif."
    }
];
