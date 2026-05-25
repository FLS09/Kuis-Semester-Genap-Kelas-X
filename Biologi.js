// --- DATA MATA PELAJARAN BIOLOGI ---
if (typeof window.subjects === "undefined") {
    window.subjects = [];
}

window.subjects.push({
    id: "biologi",
    name: "Biologi",
    icon: "ph-plant", // Ikon tanaman/daun untuk melambangkan Biologi
    color: "text-green-500 dark:text-green-400" 
});

if (typeof window.quizData === "undefined") {
    window.quizData = {};
}

// Opsi Standar untuk tipe soal khusus
const opsiKompleksBio = [
    "Jika (1), (2), dan (3) yang benar.",
    "Jika (1) dan (3) yang benar.",
    "Jika (2) dan (4) yang benar.",
    "Jika HANYA (4) yang benar.",
    "Jika SEMUA pernyataan benar."
];

const opsiSebabAkibatBio = [
    "Pernyataan BENAR, Alasan BENAR, dan ADA hubungan sebab-akibat.",
    "Pernyataan BENAR, Alasan BENAR, tetapi TIDAK ADA hubungan.",
    "Pernyataan BENAR, Alasan SALAH.",
    "Pernyataan SALAH, Alasan BENAR.",
    "Keduanya SALAH."
];

const opsiBenarSalahBio = ["Benar", "Salah"];

// --- DATA SOAL BIOLOGI KELAS X SEMESTER GENAP ---
window.quizData["biologi"] = [
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Hutan hujan tropis di Indonesia memiliki tingkat keanekaragaman hayati yang sangat tinggi. Berdasarkan tingkatannya, perbedaan warna bunga mawar (merah, putih, kuning) yang tumbuh di taman merupakan contoh keanekaragaman hayati tingkat...",
        options: [
            "Gen",
            "Spesies",
            "Populasi",
            "Komunitas",
            "Ekosistem"
        ],
        answer: 0, 
        explanation: "Perbedaan warna pada bunga mawar (Rosa sinensis) terjadi karena variasi susunan gen di dalam satu spesies yang sama. Ini adalah contoh klasik dari keanekaragaman tingkat gen."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Harimau sumatera (Panthera tigris sumatrae) dan harimau benggala (Panthera tigris tigris) dapat disilangkan secara alami dan menghasilkan keturunan yang fertil (subur).<br><br><b>Sebab</b><br><br><b>Alasan:</b> Harimau sumatera dan harimau benggala masih berada di dalam satu spesies yang sama, mereka hanya berbeda subspesies/ras akibat isolasi geografis.",
        options: opsiSebabAkibatBio,
        answer: 0, 
        explanation: "Pernyataan BENAR dan Alasan BENAR serta ada hubungan sebab-akibat. Syarat dua individu disebut satu spesies adalah mampu kawin secara alami dan menghasilkan keturunan fertil. Kedua harimau ini masih satu spesies (Panthera tigris)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Perhatikan fauna berikut ini!<br><br>(1) Anoa<br>(2) Babi rusa<br>(3) Burung maleo<br>(4) Komodo<br><br>Fauna di atas merupakan kelompok hewan endemik yang menempati zona persebaran...",
        options: [
            "Oriental (Asiatis)",
            "Peralihan (Wallacea)",
            "Australis",
            "Paleartik",
            "Neotropik"
        ],
        answer: 1, 
        explanation: "Anoa, babi rusa, burung maleo, dan komodo adalah ciri khas fauna endemik wilayah Indonesia bagian tengah (Sulawesi dan Kep. Nusa Tenggara) yang dikenal sebagai kawasan Peralihan atau Wallacea."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Salah satu upaya pelestarian keanekaragaman hayati adalah konservasi eks situ. Manakah dari pernyataan berikut yang merupakan contoh konservasi eks situ?",
        options: [
            "Melindungi komodo di Taman Nasional Komodo.",
            "Melestarikan bunga Rafflesia arnoldii di Cagar Alam Bengkulu.",
            "Menjaga habitat badak bercula satu di Ujung Kulon.",
            "Membiakkan harimau sumatera di Kebun Binatang Ragunan.",
            "Menetapkan kawasan Raja Ampat sebagai taman laut yang dilindungi."
        ],
        answer: 3, 
        explanation: "Konservasi eks situ adalah pelestarian flora/fauna yang dilakukan di luar habitat aslinya. Kebun binatang, kebun raya, dan bank sperma/biji adalah contoh konservasi eks situ."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Garis Weber adalah garis khayal yang memisahkan fauna tipe Asiatis (Indonesia Barat) dengan fauna tipe Peralihan (Indonesia Tengah).",
        options: opsiBenarSalahBio,
        answer: 1, 
        explanation: "SALAH. Garis yang memisahkan tipe Asiatis (Barat) dengan Peralihan (Tengah) adalah Garis Wallace. Sedangkan Garis Weber memisahkan tipe Peralihan (Tengah) dengan Australis (Timur)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Sistem klasifikasi binomial nomenklatur yang dicetuskan oleh Carolus Linnaeus memiliki aturan penulisan tertentu. Penulisan nama ilmiah untuk tanaman padi yang paling tepat sesuai kaidah taksonomi adalah...",
        options: [
            "Oryza Sativa",
            "oryza Sativa",
            "<i>Oryza sativa</i>",
            "<i>Oryza Sativa</i>",
            "<u>oryza sativa</u>"
        ],
        answer: 2, 
        explanation: "Aturan binomial nomenklatur: kata pertama adalah genus (diawali huruf kapital), kata kedua adalah penunjuk spesies (huruf kecil semua). Keduanya harus dicetak miring (italic) atau digarisbawahi secara terpisah jika ditulis tangan."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Pengelompokan makhluk hidup modern menggunakan sistem 5 Kingdom yang dikemukakan oleh R.H. Whittaker. Dasar utama pemisahan jamur (Fungi) dari kingdom tumbuhan (Plantae) dalam sistem ini adalah...",
        options: [
            "Jamur memiliki dinding sel yang tersusun dari selulosa.",
            "Jamur tidak memiliki klorofil sehingga bersifat heterotrof.",
            "Jamur berkembang biak secara aseksual dengan tunas.",
            "Jamur merupakan organisme prokariotik bersel satu.",
            "Jamur dapat melakukan fotosintesis di tempat yang gelap."
        ],
        answer: 1, 
        explanation: "Tumbuhan (Plantae) bersifat autotrof (punya klorofil, bisa fotosintesis), sedangkan jamur (Fungi) bersifat heterotrof (tidak punya klorofil, hidup menyerap zat organik/saprofit atau parasit)."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Virus tidak dimasukkan ke dalam sistem klasifikasi 5 Kingdom makhluk hidup.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Virus bersifat aseluler (tidak tersusun atas sel) dan hanya dapat bereplikasi jika berada di dalam sel inang yang hidup.",
        options: opsiSebabAkibatBio,
        answer: 0, 
        explanation: "Pernyataan BENAR dan Alasan BENAR serta ada hubungan sebab-akibat. Virus dikategorikan sebagai benda peralihan antara tak hidup dan hidup karena ia tidak memiliki organel sel (aseluler) dan menjadi parasit obligat (harus punya sel inang untuk bereproduksi)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Perhatikan ciri-ciri tumbuhan berikut!<br><br>(1) Mengalami pergiliran keturunan (metagenesis).<br>(2) Fase sporofit lebih dominan daripada fase gametofit.<br>(3) Belum memiliki akar, batang, dan daun sejati (Thallophyta).<br>(4) Berkembang biak dengan spora.<br><br>Ciri-ciri yang dimiliki oleh tumbuhan paku (Pteridophyta) ditunjukkan oleh nomor...",
        options: opsiKompleksBio,
        answer: 2, 
        explanation: "Tumbuhan paku memiliki fase sporofit yang dominan (2) dan berkembang biak dengan spora (4). Paku sudah memiliki akar, batang, daun sejati (Cormophyta/nomor 3 salah untuk paku). Metagenesis paku dan lumut sama-sama ada (1), tetapi yang paling membedakan paku dari lumut adalah poin 2 dan wujud Cormophyta-nya."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Gymnospermae (Tumbuhan Berbiji Terbuka) memiliki ciri khas di mana bijinya tidak dilindungi oleh bakal buah (ovarium). Manakah dari tumbuhan berikut yang <b>bukan</b> merupakan kelompok Gymnospermae?",
        options: [
            "Melinjo (Gnetum gnemon)",
            "Pinus (Pinus merkusii)",
            "Pakis haji (Cycas rumphii)",
            "Mangga (Mangifera indica)",
            "Damar (Agathis alba)"
        ],
        answer: 3, 
        explanation: "Mangga (Mangifera indica) adalah Angiospermae (Berbiji Tertutup), lebih spesifiknya kelompok Dikotil. Bijinya terlindungi di dalam daging buah."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Pada siklus hidup tumbuhan lumut (Bryophyta), sel spora yang jatuh di tempat lembap akan berkecambah membentuk struktur berupa benang-benang berwarna hijau yang disebut...",
        options: [
            "Protalium",
            "Protonema",
            "Sporogonium",
            "Anteridium",
            "Arkegonium"
        ],
        answer: 1, 
        explanation: "Spora lumut tumbuh menjadi Protonema (fase muda lumut/gametofit). Sedangkan spora paku tumbuh menjadi Protalium."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Tumbuhan monokotil dan dikotil dapat dibedakan dengan mudah dari struktur perakarannya.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Tumbuhan monokotil memiliki sistem perakaran serabut, sedangkan tumbuhan dikotil memiliki sistem perakaran tunggang.",
        options: opsiSebabAkibatBio,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta saling berhubungan. Perbedaan sistem perakaran (serabut vs tunggang) merupakan salah satu ciri morfologis utama pembeda monokotil dan dikotil."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Kingdom Animalia diklasifikasikan berdasarkan keberadaan tulang belakang (Vertebrata dan Invertebrata). Kelompok Invertebrata di bawah ini yang memiliki tubuh beruas-ruas, kerangka luar (eksoskeleton) dari zat kitin, dan kaki bersendi adalah...",
        options: [
            "Mollusca",
            "Echinodermata",
            "Arthropoda",
            "Porifera",
            "Annelida"
        ],
        answer: 2, 
        explanation: "Arthropoda berarti 'kaki bersendi'. Ciri utamanya adalah tubuh dan kaki beruas-ruas serta memiliki kerangka luar keras yang terbuat dari kitin (contoh: serangga, kepiting, udang, laba-laba)."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Semua hewan mamalia berkembang biak dengan cara melahirkan (vivipar).",
        options: opsiBenarSalahBio,
        answer: 1, 
        explanation: "SALAH. Ada pengecualian pada mamalia bertelur (ordo Monotremata), contohnya Platipus dan Echidna. Mereka menyusui anaknya, tetapi bertelur (ovipar)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Cacing tanah (Lumbricus terrestris) berperan penting dalam ekosistem tanah karena kemampuannya menggemburkan tanah. Hewan ini dimasukkan ke dalam filum...",
        options: [
            "Platyhelminthes",
            "Nemathelminthes",
            "Annelida",
            "Mollusca",
            "Coelenterata"
        ],
        answer: 2, 
        explanation: "Cacing tanah bertubuh bulat panjang dengan segmen-segmen yang menyerupai cincin berderet. Bentuk ini adalah ciri khas dari filum Annelida (cacing gelang)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Perhatikan ciri-ciri vertebrata berikut!<br><br>(1) Berdarah dingin (poikiloterm).<br>(2) Bernapas dengan insang saat fase larva dan paru-paru/kulit saat dewasa.<br>(3) Mengalami metamorfosis sempurna.<br>(4) Pembuahan (fertilisasi) umumnya terjadi di luar tubuh (eksternal).<br><br>Ciri-ciri tersebut secara spesifik mendeskripsikan kelas...",
        options: [
            "Pisces",
            "Amphibia",
            "Reptilia",
            "Aves",
            "Mammalia"
        ],
        answer: 1, 
        explanation: "Ciri-ciri tersebut (metamorfosis, bernapas dengan insang saat berudu, pembuahan eksternal di air) adalah deskripsi dari kelas Amphibia (Amfibi) seperti katak."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Hewan Vertebrata yang memiliki suhu tubuh tetap (homoioterm) tidak terpengaruh oleh suhu lingkungannya adalah kelompok...",
        options: [
            "Amphibia dan Reptilia",
            "Pisces dan Amphibia",
            "Aves dan Mammalia",
            "Reptilia dan Aves",
            "Pisces dan Reptilia"
        ],
        answer: 2, 
        explanation: "Hanya kelompok burung (Aves) dan mamalia (Mammalia) yang berdarah panas (homoioterm). Pisces, amfibi, dan reptil adalah hewan berdarah dingin (poikiloterm)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Dalam suatu ekosistem padang rumput, terdapat rumput, belalang, katak, ular, dan burung elang. Apabila populasi katak menurun drastis akibat perburuan berlebihan, dampak yang akan terjadi secara langsung pada jaring-jaring makanan tersebut adalah...",
        options: [
            "Populasi rumput akan meningkat pesat.",
            "Populasi ular akan meningkat karena mencari mangsa lain.",
            "Populasi belalang akan meningkat tajam.",
            "Burung elang akan memakan rumput untuk bertahan hidup.",
            "Populasi belalang akan menurun drastis."
        ],
        answer: 2, 
        explanation: "Dalam rantai makanan (Rumput -> Belalang -> Katak -> Ular -> Elang), jika predator (katak) punah, maka mangsanya (belalang) akan berkembang biak tanpa kendali, sehingga populasinya meningkat tajam."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Jamur dan bakteri memegang peran sebagai dekomposer (pengurai) yang sangat penting di dasar jaring-jaring makanan ekosistem.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Dekomposer bertugas merombak zat organik dari sisa makhluk hidup yang mati menjadi zat anorganik sederhana yang dapat diserap kembali oleh tumbuhan (produsen).",
        options: opsiSebabAkibatBio,
        answer: 0, 
        explanation: "Pernyataan BENAR dan alasan BENAR serta memiliki hubungan sebab-akibat. Fungsi dekomposer adalah mendaur ulang materi di alam, mengembalikan nutrisi dari bangkai ke dalam tanah untuk fotosintesis tumbuhan."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Tumbuhan paku epifit (misalnya paku tanduk rusa) yang menempel pada batang pohon inang yang besar menunjukkan bentuk interaksi simbiosis...",
        options: [
            "Mutualisme",
            "Komensalisme",
            "Parasitisme",
            "Amensalisme",
            "Kompetisi"
        ],
        answer: 1, 
        explanation: "Simbiosis komensalisme adalah interaksi di mana satu pihak diuntungkan (paku mendapat tempat tinggi untuk fotosintesis), dan pihak lain tidak dirugikan maupun diuntungkan (pohon inang tidak terganggu karena paku epifit tidak mencuri nutrisinya)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Siklus biogeokimia yang tidak memiliki fase gas/atmosfer dan perputarannya hanya terjadi di daratan dan perairan saja adalah daur...",
        options: [
            "Karbon",
            "Nitrogen",
            "Oksigen",
            "Fosfor",
            "Air"
        ],
        answer: 3, 
        explanation: "Daur fosfor bersumber dari pelapukan batuan (litosfer) dan diserap tumbuhan, lalu masuk tubuh hewan, membusuk, dan kembali ke tanah/air. Fosfor tidak pernah menguap menjadi gas di atmosfer, berbeda dengan C, N, O, dan H2O."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Gas nitrogen di atmosfer (N2) yang sangat melimpah (sekitar 78%) dapat langsung diserap dan dimanfaatkan oleh daun tumbuhan untuk sintesis protein.",
        options: opsiBenarSalahBio,
        answer: 1, 
        explanation: "SALAH. Gas nitrogen (N2) bebas tidak bisa diserap langsung oleh tumbuhan. Nitrogen harus difiksasi (diikat) terlebih dahulu oleh bakteri pengikat nitrogen di tanah (misal Rhizobium) menjadi wujud nitrat/nitrit barulah bisa diserap akar tumbuhan."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Bencana eutrofikasi yang melanda perairan rawa atau danau ditandai dengan ledakan populasi tanaman air seperti eceng gondok (blooming). Penyebab utama fenomena perubahan lingkungan ini adalah...",
        options: [
            "Limbah logam berat dari pabrik yang beracun.",
            "Tumpahan minyak mentah dari kapal tanker.",
            "Pencemaran limbah pertanian yang mengandung pupuk kaya fosfat dan nitrat.",
            "Kenaikan suhu perairan akibat global warming.",
            "Penangkapan ikan menggunakan pukat harimau."
        ],
        answer: 2, 
        explanation: "Eutrofikasi disebabkan oleh limpasan pupuk kaya fosfor dan nitrogen dari darat ke perairan. Nutrisi ini memicu pertumbuhan tanaman permukaan air secara gila-gilaan, yang berujung memblokir cahaya dan oksigen untuk biota di dasar perairan."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Terjadinya fenomena efek rumah kaca (greenhouse effect) pada dasarnya merupakan fenomena alamiah yang sangat penting bagi keberlangsungan hidup di bumi karena...",
        options: [
            "Menghasilkan gas oksigen untuk pernapasan hewan.",
            "Menghalangi sinar ultraviolet dari matahari agar tidak merusak kulit manusia.",
            "Menjaga suhu rata-rata permukaan bumi tetap hangat sehingga air berwujud cair.",
            "Mengurangi curah hujan berlebih di wilayah ekuator.",
            "Membersihkan polusi udara dari asap kendaraan bermotor."
        ],
        answer: 2, 
        explanation: "Secara alami, efek rumah kaca sangat krusial karena ia menahan sebagian panas bumi agar suhu global rata-rata tetap sekitar 15°C. Tanpa ini, bumi akan bersuhu -18°C (beku). Yang berbahaya adalah 'Pemanasan Global', yaitu efek rumah kaca yang berlebihan akibat aktivitas manusia."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Konsentrasi zat racun/polutan (seperti DDT atau merkuri) di dalam ekosistem perairan akan terakumulasi dan mencapai puncaknya pada tubuh predator tingkat tertinggi (trofik teratas).<br><br><b>Sebab</b><br><br><b>Alasan:</b> Polutan kimiawi ini tidak dapat dicerna dan dibuang oleh sistem metabolisme organisme, sehingga terus menumpuk di rantai makanan (Biomagnifikasi).",
        options: opsiSebabAkibatBio,
        answer: 0, 
        explanation: "Pernyataan BENAR dan alasan BENAR serta memiliki hubungan. Ini dinamakan Biological Magnification. Ikan kecil memakan racun sedikit, ikan sedang makan 10 ikan kecil (racun dikali 10), elang makan 10 ikan sedang (racun dikali 100), dst."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Apabila kadar gas karbon dioksida (CO2) di atmosfer bumi terus mengalami peningkatan secara drastis, dampak ekologis paling besar yang akan dialami biosfer secara langsung adalah...",
        options: [
            "Meningkatnya kejadian gempa bumi tektonik.",
            "Menurunnya kadar salinitas air sungai.",
            "Terjadinya pemanasan global yang memicu perubahan iklim esktrem dan mencairnya es kutub.",
            "Terjadinya penipisan lapisan ozon yang menyebabkan kanker kulit.",
            "Populasi ganggang laut akan musnah terbakar."
        ],
        answer: 2, 
        explanation: "CO2 adalah Gas Rumah Kaca (GRK) utama penyumbang Pemanasan Global. Penipisan ozon itu karena CFC, bukan CO2."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Interaksi antara dua spesies yang berbeda di mana pihak satu menghasilkan zat yang bersifat toksik/menghambat pertumbuhan pihak lainnya disebut...",
        options: [
            "Kompetisi",
            "Predasi",
            "Amensalisme (Alelopati)",
            "Mutualisme",
            "Simbiosis komensalisme"
        ],
        answer: 2, 
        explanation: "Amensalisme (atau antibiosis/alelopati) adalah interaksi di mana organisme A mengeluarkan zat yang membunuh/menghambat organisme B, sementara A tidak mendapat untung/rugi. Contoh: Jamur Penicillium yang membunuh bakteri."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Organisme tingkat produsen pada ekosistem laut lepas yang menyumbang produksi oksigen terbesar di bumi adalah...",
        options: [
            "Terumbu karang",
            "Fitoplankton",
            "Rumput laut",
            "Paus biru",
            "Hutan bakau (mangrove)"
        ],
        answer: 1, 
        explanation: "Fitoplankton adalah ganggang/alga mikroskopis yang melayang di lautan lepas. Meski kecil, jumlah mereka sangat miliaran di seluruh lautan dan mereka bertanggung jawab atas lebih dari 50% produksi oksigen bumi melalui fotosintesis."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Suksesi primer merupakan proses kemunculan ekosistem baru yang terjadi pada substrat yang sebelumnya memang sudah memiliki kehidupan (misalnya hutan yang pulih pasca kebakaran).",
        options: opsiBenarSalahBio,
        answer: 1, 
        explanation: "SALAH. Pemulihan hutan pasca kebakaran/penebangan yang tanah aslinya masih ada disebut Suksesi Sekunder. Suksesi Primer adalah kemunculan ekosistem baru di area yang sama sekali kosong kehidupan (misal: di atas lahar beku letusan gunung berapi)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Penggolongan tipe-tipe ekosistem darat (Bioma) di dunia, seperti Gurun, Sabana, Hutan Hujan Tropis, Tundra, dan Taiga sangat ditentukan oleh letak astronomis dan dua faktor iklim utama, yaitu...",
        options: [
            "Suhu dan Curah hujan",
            "Suhu dan Ketinggian tempat",
            "Intensitas angin dan Cahaya matahari",
            "Kandungan garam dan Curah hujan",
            "Ketinggian tempat dan Garis bujur"
        ],
        answer: 0, 
        explanation: "Suhu (temperatur rata-rata) dan Presipitasi (curah hujan rata-rata) adalah dua faktor abiotik determinan utama pembentuk dan penentu batas wilayah suatu Bioma darat."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Keseimbangan ekosistem (homeostatis) akan tercapai apabila...",
        options: [
            "Jumlah produsen jauh lebih sedikit daripada konsumen tingkat I.",
            "Tidak terjadi fluktuasi (perubahan) sama sekali pada populasi makhluk hidup.",
            "Jumlah aliran energi dari produsen ke konsumen puncak semakin besar.",
            "Setiap tingkat trofik menjalankan perannya dengan stabil sehingga membentuk piramida ekologi yang ideal.",
            "Manusia membasmi seluruh predator alami di alam liar."
        ],
        answer: 3, 
        explanation: "Ekosistem yang seimbang adalah yang memiliki piramida ekologi ideal (produsen > konsumen I > konsumen II, dst). Fluktuasi pasti ada secara alami, tapi tetap terjaga dalam batas stabil."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Dampak langsung dari terjadinya Hujan Asam (Acid Rain) yang pH air hujannya mencapai di bawah 5,6 bagi lingkungan perairan darat adalah...",
        options: [
            "Ikan-ikan di danau tumbuh lebih besar karena asam nitrat berfungsi sebagai pupuk.",
            "Penurunan pH air menyebabkan kematian telur ikan dan merusak jaringan insang biota air.",
            "Air sungai menjadi sangat jernih dan steril dari seluruh mikroorganisme.",
            "Meningkatkan suhu air sungai sehingga banyak uap air terbentuk.",
            "Menimbulkan blooming algae yang menyumbat aliran sungai."
        ],
        answer: 1, 
        explanation: "Hujan asam mencemari air danau/sungai menjadi asam. Kondisi masam merusak jaringan mukosa/insang ikan, mematikan telurnya, dan melarutkan logam berat beracun dari tanah ke dalam air."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Sampah plastik merupakan jenis pencemaran yang sangat berbahaya bagi ekosistem tanah dan perairan.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Plastik adalah material anorganik sintetis yang bersifat non-biodegradable (tidak dapat/sangat sulit diuraikan oleh dekomposer alami).",
        options: opsiSebabAkibatBio,
        answer: 0, 
        explanation: "Pernyataan BENAR, alasan BENAR, dan saling berhubungan. Mikroplastik tidak bisa diurai bakteri, sehingga ia akan bertahan ratusan tahun menumpuk di tanah/laut dan masuk termakan oleh hewan."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Ciri-ciri kingdom Protista yang membedakannya dengan kingdom Monera (bakteri) secara definitif adalah...",
        options: [
            "Protista hanya terdiri dari organisme bersel tunggal (uniseluler), sedangkan Monera multiseluler.",
            "Protista memiliki membran inti sel (Eukariotik), sedangkan Monera tidak memiliki membran inti sel (Prokariotik).",
            "Semua Protista mampu berfotosintesis, Monera tidak.",
            "Monera dapat bergerak bebas (motil), Protista tidak bisa.",
            "Protista bereproduksi secara seksual saja, Monera secara aseksual saja."
        ],
        answer: 1, 
        explanation: "Ciri pembeda utama Monera adalah Prokariotik (inti sel tidak dibungkus membran). Sedangkan Protista, Fungi, Plantae, dan Animalia semuanya sudah bertipe Eukariotik (inti sel terbungkus membran sejati)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Pada ekosistem savana di Afrika, singa dan cheetah sering kali memburu dan memperebutkan spesies mangsa yang sama, yaitu rusa atau zebra. Pola interaksi antar kedua predator ini disebut...",
        options: [
            "Predasi",
            "Parasitisme",
            "Komensalisme",
            "Kompetisi Interspesifik",
            "Kompetisi Intraspesifik"
        ],
        answer: 3, 
        explanation: "Persaingan memperebutkan sumber daya/mangsa yang sama antara DUA SPESIES yang berbeda (Singa vs Cheetah) disebut kompetisi interspesifik. (Kalau Singa vs Singa = intraspesifik)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Peran utama hewan avertebrata yang tergolong dalam kelas Insecta (seperti lebah dan kupu-kupu) di dalam ekosistem darat hutan hujan tropis adalah...<br><br>(1) Sebagai penyerbuk (polinator) tanaman berbunga.<br>(2) Sebagai produsen tingkat pertama.<br>(3) Sebagai konsumen tingkat pertama dalam rantai makanan.<br>(4) Sebagai dekomposer utama bangkai.",
        options: opsiKompleksBio,
        answer: 1, 
        explanation: "Lebah dan kupu-kupu mengambil nektar sekaligus membantu proses polinasi bunga (1 benar). Saat mengambil nektar/daun (fase ulat), mereka memakan produsen, jadi mereka konsumen I (3 benar). Insecta bukan produsen (2 salah) dan yang jadi dekomposer utama adalah jamur/bakteri (4 salah)."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Burung unta, burung kasuari, dan burung pinguin digolongkan ke dalam kelompok Mamalia karena mereka tidak bisa terbang layaknya burung pada umumnya.",
        options: opsiBenarSalahBio,
        answer: 1, 
        explanation: "SALAH. Berdiri di darat atau tidak bisa terbang bukanlah ciri Mamalia. Ketiga hewan tersebut tetap termasuk kelas Aves (burung) karena berkembang biak dengan bertelur dan tubuhnya ditutupi bulu (bukan rambut)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Metode pemberian dua nama ilmiah untuk semua makhluk hidup disebut Binomial Nomenklatur. Siapakah tokoh bapak taksonomi dunia yang mempopulerkan sistem ini?",
        options: [
            "Charles Darwin",
            "Gregor Mendel",
            "Carolus Linnaeus",
            "Antonie van Leeuwenhoek",
            "Louis Pasteur"
        ],
        answer: 2, 
        explanation: "Carolus Linnaeus (Carl von Linné) asal Swedia adalah bapak taksonomi modern yang membakukan sistem klasifikasi hirarki dan tata nama ganda (binomial nomenklatur)."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Mengurangi penggunaan bahan bakar fosil dan beralih ke energi surya/angin merupakan salah satu solusi mitigasi Perubahan Iklim Global.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Pembakaran bahan bakar fosil (seperti batu bara, minyak bumi, dan gas alam) merupakan penyumbang emisi gas karbon dioksida terbesar ke atmosfer.",
        options: opsiSebabAkibatBio,
        answer: 0, 
        explanation: "Pernyataan BENAR, alasan BENAR, dan saling berhubungan. Peralihan ke energi terbarukan menekan laju akumulasi CO2 yang diproduksi oleh emisi fosil, sehingga mengerem efek rumah kaca (pemanasan global)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Berikut ini yang BUKAN merupakan alasan mengapa hilangnya terumbu karang laut (coral bleaching) dianggap sebagai bencana ekologi laut yang fatal adalah...",
        options: [
            "Terumbu karang adalah tempat pemijahan dan asuhan jutaan spesies ikan.",
            "Hilangnya terumbu karang memutus rantai makanan ekosistem laut dangkal.",
            "Terumbu karang berfungsi sebagai pemecah gelombang alami pelindung pantai.",
            "Terumbu karang adalah produsen oksigen terbesar melebihi fitoplankton.",
            "Banyaknya keanekaragaman hayati laut yang bergantung pada karang akan punah."
        ],
        answer: 3, 
        explanation: "A, B, C, dan E adalah fungsi vital karang. D SALAH karena produsen oksigen terbesar di laut lepas BUKANLAH terumbu karang, melainkan organisme mikroskopis bernama Fitoplankton."
    }
];
