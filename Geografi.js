// =========================================================================
// DATA SOAL: GEOGRAFI KELAS X (FULL 40 SOAL)
// =========================================================================

// Safety Check & Auto-Inject Pintar
function injectGeografiData() {
    // 1. Cek apakah variabel utama (subjects & quizData) dari file utamamu sudah siap
    if (typeof subjects === 'undefined' || typeof quizData === 'undefined') {
        setTimeout(injectGeografiData, 500);
        return;
    }

    // 2. Tambahkan Mata Pelajaran Geografi ke Menu Utama jika belum ada
    const isSubjectExists = subjects.some(sub => sub.id === 'geografi');
    if (!isSubjectExists) {
        subjects.push({
            id: 'geografi',
            name: 'Geografi',
            icon: 'ph-globe', // Menggunakan Phosphor Icon seperti contoh Bahasa Inggris
            color: 'text-green-500 dark:text-green-400' // Format warna mengikuti contoh
        });
    }

    // 3. Masukkan 40 Data Soal Geografi
    quizData['geografi'] = [
        // --- BAGIAN A: LITOSFER (Soal 1 - 13) ---
        {
            question: "Lapisan mantel bumi (astenosfer) memiliki wujud material yang plastis dan kental. Karakteristik ini sangat berpengaruh terhadap dinamika litosfer karena...",
            options: [
                "Menjadi tempat terbentuknya batuan beku intrusif",
                "Mencegah perambatan gelombang seismik ke inti bumi",
                "Memungkinkan lempeng tektonik di atasnya bergerak akibat arus konveksi",
                "Menghasilkan medan magnet bumi yang melindungi atmosfer",
                "Menyimpan cadangan air tanah dalam (artesis)"
            ],
            answer: 2, // C
            explanation: "Astenosfer yang plastis memungkinkan terjadinya arus konveksi yang menjadi motor penggerak lempeng-lempeng tektonik (litosfer) di atasnya."
        },
        {
            question: "Proses pendinginan magma yang sangat cepat di permukaan bumi akan menghasilkan batuan beku luar (ekstrusif). Ciri-ciri batuan beku luar ditunjukkan oleh nomor:\n(1) Kristalnya besar-besar (holokristalin)\n(2) Struktur batuan berongga atau kaca (amorf)\n(3) Contoh batuannya adalah granit dan diorit\n(4) Contoh batuannya adalah obsidian dan pumice (batu apung)",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 2, // C
            explanation: "Batuan beku luar mendingin cepat sehingga kristalnya tidak terbentuk sempurna (amorf) atau berongga. Contohnya obsidian, andesit, dan pumice. Granit adalah batuan intrusif."
        },
        {
            question: "Batu pualam (marmer) memiliki nilai ekonomi yang tinggi dan sering digunakan sebagai lantai atau ornamen bangunan kelas atas.\n\nSEBAB\n\nBatu pualam merupakan batuan sedimen klastik yang terbentuk dari pelapukan batuan beku yang terendapkan di laut dangkal.",
            options: [
                "Pernyataan Benar, Alasan Benar, Keduanya berhubungan sebab-akibat",
                "Pernyataan Benar, Alasan Benar, Tidak berhubungan",
                "Pernyataan Benar, Alasan Salah",
                "Pernyataan Salah, Alasan Benar",
                "Pernyataan Salah, Alasan Salah"
            ],
            answer: 2, // C
            explanation: "Marmer memang bernilai ekonomi tinggi, tetapi marmer adalah batuan metamorf (malihan) dari batu gamping yang terkena suhu dan tekanan tinggi, bukan batuan sedimen."
        },
        {
            question: "Terbentuknya Palung Mariana di Samudra Pasifik dan deretan pegunungan Sirkum Pasifik merupakan hasil dari pergerakan lempeng tektonik secara...",
            options: [
                "Divergen antara lempeng benua dan benua",
                "Konvergen antara lempeng samudra dan samudra",
                "Sesar mendatar (transform) lempeng benua",
                "Konvergen antara lempeng samudra dan benua",
                "Divergen antara lempeng samudra dan benua"
            ],
            answer: 3, // D
            explanation: "Palung Mariana dan pegunungan sirkum pasifik (zona subduksi) terbentuk akibat tumbukan (konvergen) antara lempeng samudra (Pasifik) yang menunjam ke bawah lempeng benua/kepulauan di sekitarnya."
        },
        {
            question: "Epirogenesa negatif ditandai dengan turunnya permukaan laut sehingga daratan seolah-olah naik.\n\nSEBAB\n\nGerak orogenetik merupakan gerak pembentuk pegunungan yang berlangsung relatif cepat dan meliputi wilayah yang sempit.",
            options: [
                "Pernyataan Benar, Alasan Benar, Keduanya berhubungan sebab-akibat",
                "Pernyataan Benar, Alasan Benar, Tidak berhubungan",
                "Pernyataan Benar, Alasan Salah",
                "Pernyataan Salah, Alasan Benar",
                "Pernyataan Salah, Alasan Salah"
            ],
            answer: 1, // B
            explanation: "Keduanya adalah definisi yang benar tentang epirogenetik negatif dan orogenetik, namun tidak memiliki hubungan sebab akibat (keduanya adalah jenis tektonisme yang berbeda)."
        },
        {
            question: "Intrusi magma merupakan pergerakan magma yang tidak sampai ke permukaan bumi. Bentukan intrusi magma meliputi:\n(1) Batolit\n(2) Lakolit\n(3) Sill\n(4) Maar",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 0, // A
            explanation: "Batolit, lakolit, sill, dan dike adalah intrusi. Maar adalah bentuk gunung api (ekstrusi) hasil erupsi eksplosif."
        },
        {
            question: "Material vulkanik berupa debu dan abu yang menyebar ke atmosfer akibat letusan gunung api pada awalnya merugikan penerbangan dan pernapasan. Namun dalam jangka panjang, material ini bermanfaat untuk...",
            options: [
                "Memperlebar area hutan primer",
                "Menyediakan cadangan mineral logam berat",
                "Mengurangi efek rumah kaca secara global",
                "Meningkatkan unsur hara tanah menjadi sangat subur",
                "Menurunkan suhu inti bumi"
            ],
            answer: 3, // D
            explanation: "Abu vulkanik (tuff) mengandung mineral hara tinggi yang dalam jangka panjang membuat tanah di sekitar gunung api (tanah andosol/vulkanik) menjadi sangat subur."
        },
        {
            question: "Titik pusat gempa yang berada di kedalaman bumi disebut episentrum.\n\nSEBAB\n\nGelombang seismik primer (P-wave) lebih cepat merambat mencapai permukaan dibandingkan gelombang sekunder (S-wave).",
            options: [
                "Pernyataan Benar, Alasan Benar, Keduanya berhubungan sebab-akibat",
                "Pernyataan Benar, Alasan Benar, Tidak berhubungan",
                "Pernyataan Benar, Alasan Salah",
                "Pernyataan Salah, Alasan Benar",
                "Pernyataan Salah, Alasan Salah"
            ],
            answer: 3, // D
            explanation: "Pusat gempa di dalam bumi disebut Hiposentrum. Episentrum adalah titik di permukaan bumi. Alasan benar, gelombang P memang lebih cepat dari gelombang S."
        },
        {
            question: "Lembah sungai yang berbentuk huruf 'V' umumnya ditemukan pada bagian hulu sungai. Bentukan ini merupakan hasil dari proses eksogen yaitu...",
            options: [
                "Erosi lateral yang kuat",
                "Erosi vertikal yang dominan",
                "Sedimentasi fluvial",
                "Erosi glasial (eksarasi)",
                "Pelapukan kimiawi"
            ],
            answer: 1, // B
            explanation: "Di hulu sungai, arus air sangat deras sehingga erosi terjadi secara vertikal (ke bawah) memotong batuan dasar membentuk lembah V."
        },
        {
            question: "Berikut ini adalah bentang alam hasil proses sedimentasi:\n(1) Delta\n(2) Tombolo\n(3) Sand dune (gumuk pasir)\n(4) Meander",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 0, // A
            explanation: "Delta (sungai), tombolo (laut), dan gumuk pasir (angin) adalah hasil sedimentasi. Meander adalah bentuk sungai yang berkelok, terbentuk dari kombinasi erosi dan sedimentasi yang berjalan seimbang di bagian hilir."
        },
        {
            question: "Tanah di wilayah karst (pegunungan kapur) umumnya kurang subur untuk pertanian intensif karena lapisan topsoilnya tipis dan didominasi mineral kapur. Jenis tanah ini dinamakan...",
            options: [
                "Tanah Aluvial",
                "Tanah Andosol",
                "Tanah Grumusol",
                "Tanah Mediteran (Terra Rosa)",
                "Tanah Gambut"
            ],
            answer: 3, // D
            explanation: "Tanah mediteran atau terra rosa merupakan tanah merah hasil pelapukan batuan kapur (karst)."
        },
        {
            question: "Metode konservasi tanah secara vegetatif dapat dilakukan melalui:\n(1) Reboisasi\n(2) Pembuatan terasering (sengkedan)\n(3) Crop rotation (pergiliran tanaman)\n(4) Pembuatan cekdam (bendungan kecil)",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 1, // B
            explanation: "Reboisasi dan crop rotation menggunakan tanaman (vegetatif). Terasering dan cekdam adalah metode mekanik/sipil."
        },
        {
            question: "Erosi oleh tenaga angin (korasi) dominan terjadi di daerah gurun. Bentukan batuan yang menyerupai jamur akibat erosi bagian bawah batuan oleh pasir yang tertiup angin disebut...",
            options: [
                "Stalaktit",
                "Batu jamur (Mushroom rock)",
                "Cliff",
                "Dolina",
                "Moraine"
            ],
            answer: 1, // B
            explanation: "Batu jamur terbentuk karena angin lebih banyak membawa partikel pasir di dekat permukaan tanah, sehingga mengerosi bagian bawah batuan lebih cepat."
        },

        // --- BAGIAN B: ATMOSFER (Soal 14 - 27) ---
        {
            question: "Di stratosfer terdapat lapisan ozon (O3). Fungsi utama dari keberadaan ozon di lapisan ini bagi kehidupan di bumi adalah...",
            options: [
                "Menyerap gelombang radio untuk komunikasi",
                "Menahan radiasi sinar ultraviolet dari matahari",
                "Tempat pembentukan awan dan hujan",
                "Mencegah meteor jatuh ke permukaan bumi",
                "Menyerap gas rumah kaca seperti CO2"
            ],
            answer: 1, // B
            explanation: "Lapisan ozon berfungsi sebagai pelindung bumi dengan menyerap paparan sinar ultraviolet (UV) yang berbahaya."
        },
        {
            question: "Suhu udara di lapisan troposfer semakin menurun seiring dengan bertambahnya ketinggian (lapse rate).\n\nSEBAB\n\nTroposfer menyerap panas bumi langsung dari radiasi matahari bukan dari panas yang dipantulkan oleh permukaan bumi.",
            options: [
                "Pernyataan Benar, Alasan Benar, Keduanya berhubungan sebab-akibat",
                "Pernyataan Benar, Alasan Benar, Tidak berhubungan",
                "Pernyataan Benar, Alasan Salah",
                "Pernyataan Salah, Alasan Benar",
                "Pernyataan Salah, Alasan Salah"
            ],
            answer: 2, // C
            explanation: "Suhu turun di troposfer memang benar. Tapi alasannya salah. Troposfer dipanaskan dari bawah ke atas oleh permukaan bumi yang menyerap dan memancarkan kembali panas matahari secara radiasi, konduksi, dan konveksi."
        },
        {
            question: "Faktor yang memengaruhi besarnya tekanan udara di suatu wilayah adalah:\n(1) Ketinggian tempat\n(2) Temperatur udara\n(3) Lintang geografis tempat tersebut\n(4) Kecepatan rotasi bumi",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 0, // A
            explanation: "Semakin tinggi tempat, tekanan makin rendah. Suhu panas membuat udara renggang (tekanan rendah). Lintang memengaruhi suhu rata-rata. Rotasi bumi (Gaya Coriolis) memengaruhi arah angin, bukan besarnya tekanan atmosfer dasar."
        },
        {
            question: "Angin Fohn adalah angin yang bertiup turun menuruni lereng pegunungan. Sifat dari angin ini adalah...",
            options: [
                "Dingin dan lembap",
                "Panas dan lembap",
                "Kering dan panas",
                "Dingin dan membawa badai salju",
                "Kering dan sejuk"
            ],
            answer: 2, // C
            explanation: "Angin Fohn (seperti angin Gending, Kumbang, Wambrau) adalah angin jatuh yang sifatnya panas dan kering karena uap airnya sudah habis saat naik di lereng pegunungan sebelahnya."
        },
        {
            question: "Awan yang pertumbuhannya vertikal menjulang tinggi, berwarna gelap, dan sering menyebabkan hujan deras disertai petir adalah...",
            options: [
                "Cirrus",
                "Stratus",
                "Altocumulus",
                "Cumulonimbus",
                "Nimbostratus"
            ],
            answer: 3, // D
            explanation: "Cumulonimbus adalah awan badai (vertikal besar) pemicu cuaca ekstrem."
        },
        {
            question: "Kelembaban udara relatif yang mencapai 100% selalu menghasilkan hujan badai secara langsung di daratan.\n\nSEBAB\n\nKelembaban nisbi/relatif merupakan perbandingan jumlah uap air aktual dengan kapasitas maksimal udara menampung uap air pada suhu tertentu.",
            options: [
                "Pernyataan Benar, Alasan Benar, Keduanya berhubungan sebab-akibat",
                "Pernyataan Benar, Alasan Benar, Tidak berhubungan",
                "Pernyataan Benar, Alasan Salah",
                "Pernyataan Salah, Alasan Benar",
                "Pernyataan Salah, Alasan Salah"
            ],
            answer: 3, // D
            explanation: "Kelembaban 100% berarti udara jenuh (titik embun), ini menghasilkan kondensasi (awan, embun, atau kabut), tapi tidak selalu langsung menghasilkan badai. Alasannya adalah definisi kelembaban relatif yang benar."
        },
        {
            question: "Berdasarkan klasifikasi iklim W. Koppen, wilayah dengan tipe iklim Af (Hutan Hujan Tropis) memiliki ciri-ciri:\n(1) Curah hujan tinggi sepanjang tahun\n(2) Amplitudo suhu tahunan kecil\n(3) Terdapat banyak vegetasi hutan heterogen\n(4) Memiliki musim kemarau yang sangat panjang",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 0, // A
            explanation: "Iklim Af tidak memiliki musim kemarau yang panjang (bulan terkering > 60 mm curah hujan)."
        },
        {
            question: "Sistem klasifikasi iklim Schmidt-Ferguson mengelompokkan iklim berdasarkan rasio Q. Rasio Q diperoleh dari...",
            options: [
                "Perbandingan rata-rata bulan basah dengan rata-rata bulan kering",
                "Perbandingan curah hujan tahunan dengan suhu tahunan",
                "Perbandingan curah hujan maksimum dan minimum",
                "Perbandingan rata-rata bulan kering dengan rata-rata bulan basah",
                "Jumlah penguapan dibagi curah hujan"
            ],
            answer: 3, // D
            explanation: "Rumus Schmidt-Ferguson: Q = (Jumlah rata-rata bulan kering / Jumlah rata-rata bulan basah) x 100%."
        },
        {
            question: "Jika di wilayah Nusa Tenggara Timur banyak dijumpai bioma Sabana, maka menurut klasifikasi iklim Koppen, wilayah tersebut beriklim...",
            options: [
                "Af (Tropis Basah)",
                "Am (Muson Tropis)",
                "Aw (Tropis Sabana)",
                "Cw (Subtropis Kering)",
                "Bs (Stepa/Semi-arid)"
            ],
            answer: 2, // C
            explanation: "Aw adalah iklim sabana tropis, ciri khas daerah timur Indonesia karena curah hujan rendah."
        },
        {
            question: "Wilayah Indonesia dipengaruhi oleh angin muson timur yang membawa sifat basah sehingga terjadi musim penghujan.\n\nSEBAB\n\nAngin muson timur bergerak dari Benua Australia menuju Asia melewati perairan dan samudra yang sangat luas.",
            options: [
                "Pernyataan Benar, Alasan Benar, Keduanya berhubungan sebab-akibat",
                "Pernyataan Benar, Alasan Benar, Tidak berhubungan",
                "Pernyataan Benar, Alasan Salah",
                "Pernyataan Salah, Alasan Benar",
                "Pernyataan Salah, Alasan Salah"
            ],
            answer: 4, // E
            explanation: "Pernyataan salah: Muson Timur justru membawa musim kemarau. Alasan salah: Muson Timur berasal dari daratan kering gurun Australia (tekanan tinggi musim dingin) dan melewati laut dangkal/sempit, sehingga membawa sedikit uap air."
        },
        {
            question: "Fenomena El Nino memberikan dampak yang signifikan terhadap kondisi cuaca di Indonesia, yaitu:\n(1) Berkurangnya intensitas curah hujan\n(2) Meningkatnya potensi kebakaran hutan\n(3) Menurunnya suhu muka laut di perairan Indonesia barat\n(4) Terjadinya bencana banjir di pesisir utara Jawa",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 0, // A
            explanation: "El Nino memicu kemarau panjang di Indonesia (hujan turun, kebakaran naik, suhu laut lokal mendingin sementara di pasifik timur memanas)."
        },
        {
            question: "Fenomena efek rumah kaca secara alami sesungguhnya bermanfaat bagi kehidupan di bumi karena...",
            options: [
                "Mempercepat proses kondensasi di lapisan troposfer",
                "Mengubah sinar UV menjadi cahaya tampak",
                "Menjaga suhu rata-rata permukaan bumi agar tetap hangat",
                "Menekan pertumbuhan badai tropis (siklon)",
                "Mengurangi kadar gas beracun di atmosfer"
            ],
            answer: 2, // C
            explanation: "Efek rumah kaca alami (tanpa campur tangan polusi manusia yang berlebihan) diperlukan untuk menjaga suhu bumi tidak membeku."
        },
        {
            question: "Hujan zenithal atau hujan konveksi sering terjadi di daerah tropis pada siang atau sore hari.\n\nSEBAB\n\nDaerah tropis menerima pemanasan matahari yang intens sehingga massa udara memuai, naik ke atas, dan mengalami kondensasi membentuk awan hujan.",
            options: [
                "Pernyataan Benar, Alasan Benar, Keduanya berhubungan sebab-akibat",
                "Pernyataan Benar, Alasan Benar, Tidak berhubungan",
                "Pernyataan Benar, Alasan Salah",
                "Pernyataan Salah, Alasan Benar",
                "Pernyataan Salah, Alasan Salah"
            ],
            answer: 0, // A
            explanation: "Pemanasan intens di ekuator menyebabkan udara naik secara konveksi dan menjatuhkan hujan zenithal."
        },
        {
            question: "Alat ukur cuaca yang digunakan untuk mengukur kecepatan angin disebut...",
            options: [
                "Barometer",
                "Anemometer",
                "Higrometer",
                "Altimeter",
                "Pluviometer"
            ],
            answer: 1, // B
            explanation: "Barometer (tekanan), Higrometer (kelembaban), Altimeter (ketinggian), Pluviometer (curah hujan)."
        },

        // --- BAGIAN C: HIDROSFER (Soal 28 - 40) ---
        {
            question: "Siklus hidrologi melibatkan proses perubahan wujud air yang berulang. Termasuk di dalamnya proses:\n(1) Evaporasi (penguapan air permukaan)\n(2) Transpirasi (penguapan dari tumbuhan)\n(3) Infiltrasi (peresapan air ke dalam tanah)\n(4) Presipitasi (jatuhnya air dari atmosfer)",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 4, // E
            explanation: "Keempatnya adalah proses utama dalam siklus hidrologi."
        },
        {
            question: "Air tanah yang terjebak di antara dua lapisan batuan kedap air (impermeabel) dan biasanya memiliki tekanan besar sehingga jika dibor airnya akan memancar dinamakan...",
            options: [
                "Air tanah freatik",
                "Air tanah vados",
                "Air tanah artesis",
                "Mata air panas",
                "Danau karst"
            ],
            answer: 2, // C
            explanation: "Air tanah dalam (Artesis) terkurung di antara lapisan akuiklud/impermeabel, menghasilkan tekanan hidrostatik kuat."
        },
        {
            question: "Pola aliran sungai trelis umumnya terdapat di daerah dengan topografi pegunungan lipatan.\n\nSEBAB\n\nBentuk sungai trelis memiliki ciri anak-anak sungainya bermuara ke sungai induk dengan membentuk sudut siku-siku, mengikuti jalur batuan lunak di antara antiklin.",
            options: [
                "Pernyataan Benar, Alasan Benar, Keduanya berhubungan sebab-akibat",
                "Pernyataan Benar, Alasan Benar, Tidak berhubungan",
                "Pernyataan Benar, Alasan Salah",
                "Pernyataan Salah, Alasan Benar",
                "Pernyataan Salah, Alasan Salah"
            ],
            answer: 0, // A
            explanation: "Pegunungan lipatan (antiklin-sinklin) memaksa air mengalir secara sejajar dan anak sungainya masuk tegak lurus (trelis)."
        },
        {
            question: "Bagian hilir sebuah sungai memiliki karakteristik sebagai berikut:\n(1) Arus air deras dan lembah curam\n(2) Erosi yang dominan adalah erosi lateral (ke samping)\n(3) Banyak terdapat batuan berukuran boulder (batu besar)\n(4) Mulai terbentuk meander dan danau tapal kuda (oxbow lake)",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 2, // C
            explanation: "Hulu cirinya arus deras dan batu besar (1, 3). Hilir cirinya aliran lambat, erosi pelebaran (lateral), meander, dan oxbow lake (2, 4)."
        },
        {
            question: "Danau Toba di Sumatera Utara merupakan danau vulkano-tektonik. Proses pembentukannya berawal dari erupsi gunung api super yang membentuk kaldera raksasa, kemudian disusul oleh...",
            options: [
                "Pelapukan kimiawi batuan kapur",
                "Terbendungnya sungai oleh lava",
                "Runtuhnya atap gua bawah tanah",
                "Amblesnya dasar kaldera karena tenaga tektonik (sesar)",
                "Mencairnya gletser di puncak gunung"
            ],
            answer: 3, // D
            explanation: "Disebut vulkano-tektonik karena awalnya meletus (vulkanik), lalu dasar kawah/kaldera mengalami amblesan/patahan (tektonik) lalu terisi air."
        },
        {
            question: "Morfologi dasar laut berupa daratan dangkal yang merupakan perpanjangan dari benua dengan kedalaman kurang dari 200 meter disebut...",
            options: [
                "Ambang laut",
                "Landas kontinen (Continental Shelf)",
                "Lereng benua (Continental Slope)",
                "Lubuk laut (Basin)",
                "Palung laut (Trench)"
            ],
            answer: 1, // B
            explanation: "Landas kontinen seperti Dangkalan Sunda dan Dangkalan Sahul merupakan paparan laut dangkal pinggiran benua."
        },
        {
            question: "Zona laut fotik (neritik) kaya akan keanekaragaman hayati dan terumbu karang.\n\nSEBAB\n\nZona ini mendapatkan sinar matahari yang cukup sehingga fitoplankton dapat berfotosintesis dengan maksimal.",
            options: [
                "Pernyataan Benar, Alasan Benar, Keduanya berhubungan sebab-akibat",
                "Pernyataan Benar, Alasan Benar, Tidak berhubungan",
                "Pernyataan Benar, Alasan Salah",
                "Pernyataan Salah, Alasan Benar",
                "Pernyataan Salah, Alasan Salah"
            ],
            answer: 0, // A
            explanation: "Cahaya matahari (fotik) hanya tembus maksimal hingga ~200 m (zona neritik), sangat ideal untuk rantai makanan laut dan koral."
        },
        {
            question: "Berdasarkan batas wilayah laut Indonesia menurut UNCLOS, ketetapan yang berlaku adalah:\n(1) Batas Laut Teritorial ditarik 12 mil dari garis pangkal\n(2) Zona Ekonomi Eksklusif ditarik 200 mil dari garis pangkal\n(3) Indonesia memiliki hak eksplorasi dan eksploitasi penuh di ZEE\n(4) Batas landas kontinen dibatasi sejauh 5 mil ke arah laut lepas",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 0, // A
            explanation: "Batas landas kontinen bisa mencapai lebih dari 200 mil atau hingga tepian benua, bukan 5 mil."
        },
        {
            question: "Laut Jawa bagian dari Dangkalan Sunda terbentuk akibat es di kutub mencair pada akhir zaman es (Pleistosen) yang menyebabkan daratan rendah tergenang air laut. Laut jenis ini disebut...",
            options: [
                "Laut Transgresi",
                "Laut Ingresi",
                "Laut Regresi",
                "Laut Tepi",
                "Laut Pedalaman"
            ],
            answer: 0, // A
            explanation: "Laut transgresi adalah laut yang terbentuk karena daratan tergenang akibat naiknya permukaan laut secara global."
        },
        {
            question: "Arus Kuroshio adalah arus laut yang bergerak dari perairan Filipina menyusuri pantai timur Jepang. Pengaruh arus ini bagi Jepang adalah...",
            options: [
                "Menurunkan suhu sehingga pelabuhan Jepang membeku",
                "Menyebabkan pantai Jepang sangat kering dan gersang",
                "Membawa massa air panas sehingga Jepang bagian selatan tetap hangat di musim dingin",
                "Mencegah pertemuan ikan di pesisir utara Jepang",
                "Menciptakan badai salju permanen di laut Jepang"
            ],
            answer: 2, // C
            explanation: "Arus Kuroshio adalah arus hangat. Lawannya Arus Oyashio (arus dingin). Pertemuan keduanya menghasilkan area penangkapan ikan (fishing ground) terbaik."
        },
        {
            question: "Pertemuan arus hangat Gulf Stream dan arus dingin Labrador di sekitar pesisir Newfoundland, Kanada, menciptakan wilayah penangkapan ikan yang sangat kaya.\n\nSEBAB\n\nPertemuan dua jenis arus ini mengaduk air (upwelling) dan mengumpulkan banyak plankton yang menjadi makanan utama ikan.",
            options: [
                "Pernyataan Benar, Alasan Benar, Keduanya berhubungan sebab-akibat",
                "Pernyataan Benar, Alasan Benar, Tidak berhubungan",
                "Pernyataan Benar, Alasan Salah",
                "Pernyataan Salah, Alasan Benar",
                "Pernyataan Salah, Alasan Salah"
            ],
            answer: 0, // A
            explanation: "Ini adalah prinsip dasar perikanan laut di zona konvergensi arus laut."
        },
        {
            question: "Pemanfaatan potensi wilayah pesisir dan laut secara berkelanjutan dapat dilakukan dengan cara:\n(1) Menggunakan pukat harimau untuk tangkapan maksimal\n(2) Konservasi hutan mangrove di pesisir\n(3) Penambangan karang untuk reklamasi pantai\n(4) Pengembangan ekowisata bahari",
            options: [
                "Jika (1), (2), dan (3) benar",
                "Jika (1) dan (3) benar",
                "Jika (2) dan (4) benar",
                "Jika hanya (4) yang benar",
                "Jika semuanya benar"
            ],
            answer: 2, // C
            explanation: "Pukat harimau (1) merusak dasar laut dan karang (3) jelas destruktif dan tidak berkelanjutan."
        },
        {
            question: "Pemompaan air tanah dangkal secara berlebihan dan masif di kota-kota besar yang terletak di dekat pesisir pantai dapat memicu bencana...",
            options: [
                "Tsunami lokal",
                "Erosi pesisir (abrasi)",
                "Angin puting beliung (waterspout)",
                "Intrusi air laut ke dalam sumur warga",
                "Longsor bawah laut"
            ],
            answer: 3, // D
            explanation: "Kosongnya rongga akuifer akibat eksploitasi air tanah menyebabkan air laut merembes masuk mengisi rongga tersebut, mencemari air tawar menjadi payau/asin (Intrusi laut)."
        }
    ];

    console.log("✅ Berhasil: Data Geografi (40 Soal) sudah dimuat secara penuh!");

    // 4. Render ulang UI jika fungsi rendernya tersedia di main script kamu
    if (typeof renderMataPelajaran === 'function') {
        renderMataPelajaran();
    }
}

// Jalankan sistem Auto-Inject
injectGeografiData();
