// =========================================================================
// DATA SOAL: SEJARAH KELAS X
// =========================================================================

// Safety Check & Auto-Inject Pintar
function injectSejarahData() {
    // 1. Cek apakah variabel utama (subjects & quizData) dari file utamamu sudah siap
    if (typeof subjects === 'undefined' || typeof quizData === 'undefined') {
        // Kalau belum siap, tunggu 500ms lalu coba lagi
        setTimeout(injectSejarahData, 500);
        return;
    }

    // 2. Tambahkan Mata Pelajaran Sejarah ke Menu Utama jika belum ada
    const isSubjectExists = subjects.some(sub => sub.id === 'sejarah');
    if (!isSubjectExists) {
        subjects.push({ 
            id: 'sejarah',
            name: 'Sejarah',
            icon: 'ph-bank', // Menggunakan Phosphor Icon (ikon bangunan klasik/museum)
            color: 'text-amber-600 dark:text-amber-500' // Format warna teks menyesuaikan Bahasa Inggris
        });
    }

    // 3. Masukkan 40 Data Soal Sejarah
    quizData['sejarah'] = [
        {
            question: "Keberadaan Kerajaan Kutai sebagai kerajaan tertua di Nusantara dibuktikan dengan penemuan prasasti Yupa. Salah satu Yupa menyebutkan bahwa Raja Mulawarman memberikan sedekah 20.000 ekor sapi kepada para Brahmana. Berdasarkan pendekatan analitis historis, fakta ini menunjukkan bahwa...",
            options: [
                "Masyarakat Kutai merupakan penganut Buddha yang sangat taat.",
                "Kutai memiliki sistem irigasi pertanian yang sangat maju untuk pakan ternak.",
                "Mata pencaharian utama masyarakat Kutai sangat didukung oleh sektor peternakan yang maju.",
                "Sapi merupakan alat tukar utama dalam perdagangan maritim di Sungai Mahakam.",
                "Para Brahmana di Kutai memiliki tugas utama sebagai peternak kerajaan."
            ],
            answer: 2, // C
            explanation: "Jumlah 20.000 ekor sapi adalah angka yang sangat besar, mengindikasikan bahwa peternakan (terutama sapi) merupakan salah satu tulang punggung ekonomi dan mata pencaharian masyarakat Kutai saat itu."
        },
        {
            question: "Raja Purnawarman dari Tarumanegara memerintahkan penggalian saluran Gomati sepanjang 6.112 tombak (sekitar 12 km) dalam waktu 21 hari. Jika dianalisis dari sudut pandang ekologi dan ekonomi masa itu, tujuan utama proyek raksasa ini adalah...",
            options: [
                "Membangun jalur perdagangan laut untuk bersaing dengan Sriwijaya.",
                "Mengendalikan banjir di musim hujan dan mengairi lahan pertanian di musim kemarau.",
                "Menciptakan batas pertahanan alami dari serangan kerajaan di Jawa Tengah.",
                "Memenuhi syarat ritual keagamaan Hindu aliran Waisnawa.",
                "Membuka jalur ekspansi militer ke wilayah timur Pulau Jawa."
            ],
            answer: 1, // B
            explanation: "Saluran Gomati dan Candrabaga digali di wilayah yang rawan banjir (sekarang sekitar Bekasi/Jakarta). Fungsinya adalah mitigasi bencana (pengendalian banjir) dan irigasi untuk mendukung ekonomi agraris."
        },
        {
            question: "Wilayah kekuasaan Tarumanegara membentang dari Banten hingga Cirebon, namun pusat pemerintahannya diperkirakan berada di pedalaman (sekitar Bogor saat ini). Alasan logis pemilihan wilayah pedalaman sebagai pusat pemerintahan adalah...",
            options: [
                "Kedekatan dengan pelabuhan internasional Sunda Kelapa.",
                "Mengandalkan pajak dari jalur perdagangan Selat Malaka.",
                "Menghindari wabah penyakit yang sering melanda pesisir pantai.",
                "Mengutamakan basis ekonomi agraris dan kemudahan pertahanan geografis.",
                "Kontur tanah pesisir yang tidak stabil untuk pembangunan candi."
            ],
            answer: 3, // D
            explanation: "Bogor memiliki tanah yang subur untuk pertanian (basis ekonomi Tarumanegara) serta letak geografis yang lebih aman dari ancaman invasi maritim dibandingkan wilayah pesisir."
        },
        {
            question: "Prasasti peninggalan Kerajaan Sriwijaya seringkali berisi ancaman atau kutukan bagi mereka yang tidak tunduk kepada raja. Prasasti yang memiliki karakteristik tersebut sekaligus membuktikan penguasaan Sriwijaya atas wilayah strategis adalah...",
            options: [
                "Prasasti Kedukan Bukit dan Talang Tuo",
                "Prasasti Telaga Batu dan Kota Kapur",
                "Prasasti Ligor dan Nalanda",
                "Prasasti Canggal dan Mantyasih",
                "Prasasti Kebon Kopi dan Tugu"
            ],
            answer: 1, // B
            explanation: "Prasasti Telaga Batu berisi kutukan bagi pejabat yang berkhianat, sedangkan Prasasti Kota Kapur (ditemukan di Pulau Bangka) berisi kutukan sekaligus bukti penaklukan Sriwijaya atas wilayah Bangka dan upaya menyerang Jawa."
        },
        {
            question: "I-Tsing, seorang musafir Tiongkok, mencatat kondisi Sriwijaya pada abad ke-7 Masehi. Berdasarkan catatannya, peran Sriwijaya dalam konstelasi agama Buddha di Asia adalah...",
            options: [
                "Tempat lahirnya aliran Buddha Theravada yang disebarkan ke India.",
                "Pusat penerjemahan kitab suci Hindu ke dalam bahasa Melayu Kuno.",
                "Pusat studi dan transit bagi biksu yang ingin memperdalam bahasa Sanskerta sebelum ke Nalanda (India).",
                "Pelabuhan militer bagi armada perang Tiongkok penyebar agama Buddha.",
                "Tempat perumusan ajaran Buddha Tantrayana pertama di dunia."
            ],
            answer: 2, // C
            explanation: "I-Tsing menyarankan para biksu Tiongkok untuk singgah dan belajar bahasa Sanskerta serta aturan agama Buddha di Sriwijaya selama beberapa tahun sebelum melanjutkan perjalanan ke Universitas Nalanda di India."
        },
        {
            question: "Pada masa Kerajaan Mataram Kuno, sempat terjadi dualisme kepemimpinan antara Dinasti Sanjaya (Hindu) dan Dinasti Syailendra (Buddha). Peristiwa politik yang menjadi momentum unifikasi (penyatuan) kedua dinasti tersebut adalah...",
            options: [
                "Pembangunan Candi Borobudur oleh Raja Samaratungga.",
                "Kemenangan Balaputradewa atas kekuasaan Rakai Pikatan.",
                "Pernikahan politik antara Rakai Pikatan dengan Pramodhawardhani.",
                "Pemindahan ibu kota Mataram ke Jawa Timur oleh Mpu Sindok.",
                "Penyerangan Sriwijaya ke ibu kota Mataram Kuno."
            ],
            answer: 2, // C
            explanation: "Rakai Pikatan (Sanjaya/Hindu) menikahi Pramodhawardhani (putri Samaratungga dari Syailendra/Buddha), yang mengakhiri rivalitas dan menyatukan kekuasaan keluarga kerajaan di Jawa Tengah."
        },
        {
            question: "Kerajaan Mataram Kuno pada awalnya kesulitan mengembangkan sektor perdagangan maritim. Jika dikaji dari pendekatan geografi sejarah, faktor utama penghambatnya adalah...",
            options: [
                "Masyarakat Jawa Kuno memiliki tabu terhadap pelayaran di lautan.",
                "Letak ibu kota di pedalaman yang dikelilingi pegunungan berapi serta tidak adanya pelabuhan laut dalam di pesisir utara pada masa itu.",
                "Blokade ketat yang dilakukan oleh angkatan laut Kerajaan Tarumanegara.",
                "Cuaca buruk dan angin muson yang tidak pernah berhembus melintasi Jawa Tengah.",
                "Seluruh hasil panen digunakan untuk pembangunan candi, sehingga tidak ada barang ekspor."
            ],
            answer: 1, // B
            explanation: "Mataram Kuno di Jawa Tengah berpusat di pedalaman (dikelilingi Gunung Merapi, Merbabu, Sumbing, Sindoro). Mereka sangat agraris dan sulit mengakses laut sebelum akhirnya sungai-sungai besar seperti Bengawan Solo digunakan untuk akses ke pesisir."
        },
        {
            question: "Raja Kertanegara dari Singasari tidak hanya berambisi meluaskan wilayah, tetapi juga memajukan perekonomian. Kebijakan strategis Kertanegara dalam bidang ekonomi maritim diwujudkan melalui...",
            options: [
                "Mewajibkan seluruh pedagang asing membayar pajak menggunakan koin emas Singasari.",
                "Menaklukkan Kerajaan Pajajaran untuk menguasai pelabuhan Sunda Kelapa.",
                "Melaksanakan Ekspedisi Pamalayu untuk melemahkan Sriwijaya dan mengontrol jalur perdagangan Selat Malaka.",
                "Membangun waduk besar di aliran Sungai Brantas untuk irigasi massal.",
                "Mengusir pedagang Tiongkok agar monopoli perdagangan dipegang pribumi."
            ],
            answer: 2, // C
            explanation: "Ekspedisi Pamalayu (1275 M) bertujuan menaklukkan kerajaan-kerajaan di Sumatera (seperti Dharmasraya) untuk memutus monopoli Sriwijaya dan menguasai jalur perdagangan internasional di Selat Malaka."
        },
        {
            question: "Runtuhnya Kerajaan Kediri dan berdirinya Kerajaan Singasari memiliki hubungan kausalitas (sebab-akibat) yang kuat. Konflik utama yang memicu transisi kekuasaan ini adalah...",
            options: [
                "Perselisihan antara Kertajaya dengan kaum Brahmana yang kemudian meminta perlindungan Ken Arok.",
                "Serangan armada Mongol yang menghancurkan pertahanan pesisir Kediri.",
                "Kegagalan Kediri dalam menahan laju penyebaran Islam di pedalaman Jawa.",
                "Pemberontakan petani yang dipimpin oleh Gajah Mada terhadap Raja Jayabaya.",
                "Perebutan takhta antara Jayakatwang dengan Tunggul Ametung."
            ],
            answer: 0, // A
            explanation: "Raja Kediri, Kertajaya, memaksa kaum Brahmana untuk menyembahnya. Para Brahmana menolak dan meminta bantuan Ken Arok (penguasa Tumapel). Ken Arok akhirnya mengalahkan Kertajaya di Pertempuran Ganter (1222 M) dan mendirikan Singasari."
        },
        {
            question: "\"Sira Gajah Madapatih Amangkubhumi tan ayun amuktia palapa...\" Momentum bersejarah diucapkannya Sumpah Palapa oleh Gajah Mada terjadi pada masa pemerintahan Ratu Tribhuwana Tunggadewi, tepatnya pada saat...",
            options: [
                "Majapahit berhasil menaklukkan Kerajaan Sunda di Perang Bubat.",
                "Upacara pengangkatan Gajah Mada sebagai Mahapatih Amangkubhumi.",
                "Perayaan kemenangan pasukan Majapahit atas pemberontakan Ra Kuti.",
                "Hayam Wuruk resmi dinobatkan sebagai Raja Majapahit.",
                "Gajah Mada berhasil menumpas pemberontakan Sadeng dan Keta."
            ],
            answer: 1, // B
            explanation: "Sumpah Palapa diucapkan Gajah Mada pada tahun 1336 M saat ia resmi dilantik menjadi Mahapatih Amangkubhumi Majapahit oleh Ratu Tribhuwana Tunggadewi."
        },
        {
            question: "Berdasarkan catatan perjalanan Marco Polo (1292 M) saat singgah di Kerajaan Perlak, dapat disimpulkan fakta menarik mengenai kondisi sosial-keagamaan di wilayah tersebut, yaitu...",
            options: [
                "Seluruh penduduk Perlak, baik di pesisir maupun pedalaman, telah memeluk Islam sepenuhnya.",
                "Penduduk kota pelabuhan (Ferlec) sudah beragama Islam, sedangkan masyarakat pedalaman masih menganut kepercayaan lokal/animisme.",
                "Perlak merupakan pusat penyebaran agama Katolik pertama di Nusantara.",
                "Terjadi perang agama antara penduduk pesisir dengan masyarakat pedalaman.",
                "Penduduk setempat menolak kehadiran pedagang muslim dari Timur Tengah."
            ],
            answer: 1, // B
            explanation: "Marco Polo mencatat bahwa di wilayah \"Ferlec\" (Perlak), penduduk kota yang sering berinteraksi dengan pedagang asing sudah memeluk Islam, sementara penduduk pedalaman di pegunungan masih hidup dengan kepercayaan asli/animisme."
        },
        {
            question: "Kerajaan Perlak dikenal sebagai salah satu kerajaan Islam tertua di Nusantara yang berkembang sangat pesat. Faktor utama yang menyebabkan pesatnya perkembangan Islam di Perlak adalah...",
            options: [
                "Penaklukan militer yang dilakukan oleh Kesultanan Turki Utsmani.",
                "Letaknya yang strategis di ujung utara Sumatera sehingga menjadi titik transit kapal-kapal dagang internasional dari Arab dan Gujarat.",
                "Ditemukannya tambang emas yang besar untuk membiayai dakwah para wali.",
                "Adanya asimilasi budaya antara Islam dengan tradisi Hindu-Buddha Kerajaan Sriwijaya yang kuat.",
                "Perpindahan ulama-ulama besar dari Kerajaan Demak ke Sumatera."
            ],
            answer: 1, // B
            explanation: "Perlak terletak di Selat Malaka, jalur pelayaran utama dunia. Posisi ini membuatnya menjadi tempat pertama yang disinggahi para pedagang sekaligus penyebar agama Islam dari Timur Tengah dan India."
        },
        {
            question: "Di bawah kepemimpinan Sultan Iskandar Muda, Kesultanan Aceh Darussalam mencapai puncak kejayaan. Strategi utama Iskandar Muda dalam sektor militer dan ekonomi ekonomi adalah...",
            options: [
                "Bekerja sama dengan Portugis untuk memonopoli perdagangan lada.",
                "Memusatkan pertahanan di darat dan menghindari peperangan maritim melawan VOC.",
                "Menaklukkan pelabuhan-pelabuhan pesaing di Semenanjung Malaya (Johor, Pahang) dan memperketat monopoli komoditas lada.",
                "Memindahkan ibu kota Kesultanan ke wilayah pedalaman untuk menghindari serangan meriam Eropa.",
                "Menyerahkan urusan perdagangan kepada syahbandar asing dari Tiongkok."
            ],
            answer: 2, // C
            explanation: "Sultan Iskandar Muda membangun armada laut yang kuat, pasukan gajah, dan melakukan ekspansi ke Semenanjung Malaya serta pesisir Sumatera untuk menguasai daerah penghasil lada dan timah, sehingga memonopoli perdagangan."
        },
        {
            question: "Kemunduran Kerajaan Demak terjadi dengan cepat pasca-wafatnya Sultan Trenggono. Konsekuensi politik terburuk dari peristiwa tersebut adalah...",
            options: [
                "Jatuhnya pelabuhan Demak ke tangan armada laut Portugis.",
                "Terjadinya perang saudara yang berlarut-larut antara Sunan Prawoto dan Arya Penangsang memperebutkan takhta.",
                "Pemberontakan rakyat yang dipimpin oleh para Wali Songo menuntut kemerdekaan daerah.",
                "Kembalinya Majapahit mengambil alih kekuasaan di pesisir utara Jawa.",
                "Perekonomian Demak beralih total dari maritim menjadi agraris tertutup."
            ],
            answer: 1, // B
            explanation: "Setelah Sultan Trenggono wafat (1546), terjadi kekosongan kekuasaan yang memicu konflik suksesi berdarah antara keturunan Pangeran Sekar Seda Lepen (Arya Penangsang) dan putra Trenggono (Sunan Prawoto), yang berujung pada runtuhnya Demak."
        },
        {
            question: "Sultan Hasanuddin dari Kerajaan Gowa-Tallo mendapat julukan \"De Haantjes van Het Oosten\" (Ayam Jantan dari Timur) dari pihak Belanda (VOC). Alasan historis penyematan julukan ini adalah...",
            options: [
                "Kemenangan mutlak Sultan Hasanuddin dalam Perjanjian Bongaya.",
                "Kebiasaannya menggunakan simbol ayam jantan dalam bendera kerajaan.",
                "Kegigihan, keberanian, dan semangat pantang menyerahnya dalam menentang monopoli perdagangan rempah oleh VOC.",
                "Strateginya yang licik dan sulit diprediksi dalam perang gerilya di lautan.",
                "Kemampuannya menyatukan seluruh kerajaan di Indonesia timur dalam satu komando."
            ],
            answer: 2, // C
            explanation: "Belanda sangat kewalahan menghadapi perlawanan militer Sultan Hasanuddin yang gigih menolak monopoli VOC di perairan Maluku dan Sulawesi, sehingga memberinya julukan penghormatan sekaligus ketakutan tersebut."
        },
        {
            question: "Konflik antara Kesultanan Gowa-Tallo (Makassar) dan VOC memuncak pada Perang Makassar. Latar belakang utama serangan VOC di bawah pimpinan Cornelis Speelman ke Makassar adalah...",
            options: [
                "Makassar menerapkan sistem pelabuhan tertutup (monopoli) yang merugikan pedagang Belanda.",
                "Penolakan Gowa-Tallo terhadap prinsip Mare Liberum (Laut Bebas) yang diajukan VOC.",
                "VOC berambisi menghancurkan Pelabuhan Somba Opu yang menerapkan perdagangan bebas (free trade) yang menggagalkan monopoli VOC di Maluku.",
                "Makassar menyita seluruh kapal dagang milik Kesultanan Bone yang merupakan sekutu VOC.",
                "Sultan Hasanuddin memaksa kapal-kapal Belanda membayar pajak dengan rempah-rempah."
            ],
            answer: 2, // C
            explanation: "Makassar menerapkan prinsip laut bebas yang mengizinkan bangsa Eropa lain (Inggris, Portugis, Denmark) dan pedagang Asia berdagang di Somba Opu. Hal ini merusak monopoli rempah-rempah VOC di Maluku, sehingga VOC ingin menghancurkannya."
        },
        {
            question: "Wilayah Kepulauan Maluku mendapat julukan \"The Spicy Island\" oleh bangsa Eropa pada abad penjelajahan samudra. Julukan ini diberikan karena...",
            options: [
                "Masyarakat Maluku memiliki tradisi kuliner yang didominasi rasa pedas.",
                "Maluku adalah satu-satunya wilayah penghasil lada hitam terbesar di dunia.",
                "Maluku merupakan kepulauan endemik penghasil komoditas cengkeh dan pala bernilai tinggi di pasar Eropa.",
                "Cuaca dan suhu di Kepulauan Maluku sangat panas menyerupai rempah.",
                "Hubungan diplomasi kerajaan-kerajaan Maluku yang selalu diwarnai konflik tajam (spicy)."
            ],
            answer: 2, // C
            explanation: "Ternate, Tidore, Banda, dan sekitarnya adalah satu-satunya habitat alami pohon cengkeh dan pala di dunia pada masa itu, yang harganya setara emas di Eropa."
        },
        {
            question: "Untuk memperkuat posisinya, kerajaan-kerajaan di Maluku membentuk persekutuan. Wilayah yang termasuk ke dalam persekutuan Uli Siwa (Persekutuan Sembilan) yang dipimpin oleh Kerajaan Tidore adalah...",
            options: [
                "Ternate, Ambon, Bacan, Seram, dan Obi.",
                "Makian, Jailolo, Halmahera, dan pulau-pulau hingga ke Papua.",
                "Banda, Hitu, Ternate, dan Gowa.",
                "Ternate, Tidore, Bacan, dan Jailolo.",
                "Sulawesi Utara, Halmahera Barat, dan Kepulauan Sula."
            ],
            answer: 1, // B
            explanation: "Uli Siwa dipimpin Tidore meliputi wilayah Makian, Jailolo, Halmahera, dan daerah pesisir barat Papua. Sedangkan saingannya, Uli Lima, dipimpin Ternate meliputi Ambon, Bacan, Obi, dan Seram."
        },
        {
            question: "Masuknya Islam membawa pergeseran dalam corak penulisan sejarah (historiografi) di Nusantara. Pengaruh pergeseran hegemoni politik Hindu ke Islam terhadap historiografi terlihat pada...",
            options: [
                "Dihapuskannya konsep penulisan silsilah karena bertentangan dengan ajaran agama.",
                "Konsep dewa-raja (titisan dewa) memudar, digantikan dengan penelusuran nasab/silsilah raja yang dikaitkan dengan Nabi, tokoh Islam, atau Wali Songo.",
                "Historiografi Islam sepenuhnya bersifat rasional dan meninggalkan unsur mitos atau keajaiban.",
                "Penulisan sejarah tidak lagi ditulis oleh pujangga keraton, melainkan oleh pedagang asing.",
                "Karya sejarah ditulis menggunakan bahasa Arab murni tanpa campuran bahasa lokal."
            ],
            answer: 1, // B
            explanation: "Legitimasi kekuasaan raja berubah. Di masa Islam raja melegitimasi kekuasaannya (sebagai Khalifatullah) dengan menarik silsilahnya ke Nabi Muhammad, Iskandar Zulkarnain, atau para Wali."
        },
        {
            question: "Penulisan sejarah masa kolonial Belanda (historiografi kolonial) memiliki tujuan memperkuat legitimasi penjajahan. Kelemahan paling fatal dari historiografi kolonial apabila digunakan sebagai sumber sejarah nasional adalah...",
            options: [
                "Data arsip yang digunakan sama sekali tidak valid dan merupakan rekayasa penuh.",
                "Ditulis menggunakan bahasa Belanda kuno yang sudah tidak bisa diterjemahkan.",
                "Bersifat Neerlando-sentris dan Eropa-sentris, sehingga bangsa Indonesia hanya diposisikan sebagai objek pelengkap atau pihak pemberontak.",
                "Mengabaikan penggunaan metode sejarah dan hanya berisi karya fiksi sastra.",
                "Terlalu banyak memuji kehebatan pahlawan lokal untuk mengambil hati rakyat."
            ],
            answer: 2, // C
            explanation: "Historiografi kolonial ditulis dari sudut pandang kepentingan Belanda (Neerlando-sentris). Aktor utamanya adalah orang Belanda, sedangkan pejuang lokal dianggap \"pemberontak\" atau \"ekstremis\"."
        },
        {
            question: "Setelah kemerdekaan, sejarawan Indonesia mulai menyusun Historiografi Modern. Indikator utama yang menunjukkan sifat \"Indonesia-sentris\" dalam historiografi modern adalah...",
            options: [
                "Menggunakan arsip lokal dan sepenuhnya membuang arsip dari Belanda.",
                "Menempatkan bangsa Indonesia sebagai subjek (aktor utama) pencipta sejarahnya sendiri, bukan sekadar penonton.",
                "Menuliskan sejarah kekalahan penjajah secara berlebihan tanpa verifikasi fakta.",
                "Mengharuskan setiap karya sejarah ditulis dalam bahasa daerah masing-masing.",
                "Menolak penggunaan teori-teori ilmu sosial dari Barat."
            ],
            answer: 1, // B
            explanation: "Indonesia-sentris berarti cara pandang (perspektif) difokuskan pada peran, pengalaman, dan kepentingan bangsa Indonesia sebagai agen utama (subject) dalam alur sejarah."
        },
        {
            question: "Dalam tahap pemilihan topik metodologi sejarah, seorang peneliti harus memperhatikan istilah practicable. Syarat ini berkaitan dengan...",
            options: [
                "Ketertarikan emosional peneliti terhadap topik sejarah.",
                "Kegunaan topik sejarah tersebut bagi kepentingan politik masa kini.",
                "Ketersediaan sumber dan data (literatur, arsip, saksi) yang memungkinkan penelitian tersebut dikerjakan dan diselesaikan.",
                "Orisinalitas atau kebaruan topik yang belum pernah diteliti siapapun.",
                "Kemampuan peneliti untuk mempublikasikan jurnalnya di ranah internasional."
            ],
            answer: 2, // C
            explanation: "Practicable berarti dapat dilaksanakan. Sebuah topik betapapun bagusnya, jika data, arsip, atau sumbernya tidak ada atau tidak bisa diakses, maka tidak bisa diteliti."
        },
        {
            question: "Seorang mahasiswa sejarah asal Bali sangat bersemangat meneliti tentang \"Perang Puputan Margarana\". Selain karena ia menguasai bahasa lokal dan budaya Bali, ia juga merasa bangga akan patriotisme pahlawannya. Dalam syarat pemilihan topik, hal ini menunjukkan...",
            options: [
                "Kedekatan geografis dan jarak waktu.",
                "Kedekatan intelektual (penguasaan budaya/bahasa) dan kedekatan emosional (keterikatan batin/minat).",
                "Subjektivitas ekstrem yang akan merusak validitas penelitian.",
                "Keharusan historiografi lokal untuk ditulis oleh warga asli.",
                "Pemenuhan unsur heuristik secara apriori."
            ],
            answer: 1, // B
            explanation: "Kedekatan emosional membuat peneliti termotivasi (tertarik, punya ikatan batin), sementara kedekatan intelektual berarti peneliti punya bekal pengetahuan dasar (seperti bahasa atau pemahaman kultur) untuk meneliti topik tersebut."
        },
        {
            question: "Setelah seorang sejarawan selesai mengumpulkan tumpukan dokumen kuno, arsip, dan rekaman wawancara (tahap heuristik), langkah metodologi sejarah mutlak berikutnya yang harus ia lakukan adalah...",
            options: [
                "Historiografi, untuk langsung menuliskannya menjadi buku.",
                "Interpretasi, untuk menafsirkan makna tersembunyi dari dokumen.",
                "Kritik sumber (verifikasi), untuk menguji keaslian fisik dan kebenaran isi dari dokumen-dokumen tersebut.",
                "Periodisasi, membagi dokumen berdasarkan tahun kejadian.",
                "Publikasi, meminta pendapat publik atas dokumen tersebut."
            ],
            answer: 2, // C
            explanation: "Tahapan metode sejarah: Heuristik (pengumpulan) -> Kritik (pengujian keaslian/kredibilitas) -> Interpretasi (penafsiran) -> Historiografi (penulisan)."
        },
        {
            question: "Dalam struktur karya tulis sejarah (historiografi), komponen-komponen tertentu wajib diletakkan pada Bab Pendahuluan agar pembaca memahami arah penelitian. Komponen tersebut antara lain...",
            options: [
                "Latar belakang masalah, rumusan masalah, tujuan penelitian, dan tinjauan pustaka (teori/metode).",
                "Kritik eksternal, kritik internal, dan daftar informan.",
                "Kesimpulan, saran, dan daftar pustaka.",
                "Narasi kronologis peristiwa, analisis data, dan profil tokoh utama.",
                "Abstrak, glosarium, dan indeks nama."
            ],
            answer: 0, // A
            explanation: "Bab Pendahuluan dalam karya ilmiah/sejarah umumnya memuat Latar Belakang, Rumusan Masalah, Tujuan dan Manfaat Penelitian, serta Tinjauan Pustaka/Kerangka Teori."
        },
        {
            question: "Ilmu sejarah dan ilmu sosial (sosiologi, antropologi, ekonomi) memiliki pendekatan yang berbeda terhadap dimensi ruang dan waktu. Perbedaan mendasar tersebut adalah...",
            options: [
                "Sejarah bersifat sinkronis (meluas dalam ruang), ilmu sosial bersifat diakronis (memanjang dalam waktu).",
                "Sejarah bersifat diakronis (memanjang dan menitikberatkan pada proses waktu), sedangkan ilmu sosial bersifat sinkronis (meluas dan menitikberatkan pada struktur ruang/sistem).",
                "Sejarah mengabaikan dimensi ruang, ilmu sosial mengabaikan dimensi waktu.",
                "Sejarah murni fiksi imajinatif, ilmu sosial didasarkan pada data kuantitatif.",
                "Sejarah hanya mempelajari masa depan, ilmu sosial mempelajari masa lalu."
            ],
            answer: 1, // B
            explanation: "Sejarah melihat peristiwa sebagai sebuah proses yang bergerak seiring waktu (diakronis). Ilmu-ilmu sosial biasanya memotret kondisi masyarakat pada satu waktu tertentu namun menganalisisnya secara luas/mendalam terkait strukturnya (sinkronis)."
        },
        {
            question: "Pendekatan ilmu-ilmu sosial modern mulai banyak diadaptasi oleh sejarawan. Kegunaan utama konsep dan teori ilmu sosial dalam memperdalam analisis sejarah adalah...",
            options: [
                "Menghapus unsur kausalitas (sebab-akibat) dalam sejarah politik.",
                "Membuat sejarah menjadi sekadar kumpulan angka dan statistik yang rigid.",
                "Mengubah penulisan sejarah yang awalnya hanya naratif-kronologis menjadi analisis yang bersifat multi-dimensional (menjelaskan fenomena dari sisi ekonomi, sosial, budaya).",
                "Memudahkan sejarawan untuk mereka ulang fakta masa lalu tanpa bukti.",
                "Mengganti metodologi sejarah heuristik menjadi kuesioner."
            ],
            answer: 2, // C
            explanation: "Ilmu sosial memberikan pisau analisis (teori sosiologi, politik, ekonomi) sehingga sejarah tidak hanya bercerita \"siapa, kapan, di mana\", tetapi mampu menjawab \"mengapa dan bagaimana struktur masyarakatnya\" (Sejarah Analitis/Multi-dimensional)."
        },
        {
            question: "Bukti konkret dan monumental dari perpaduan analisis ilmu sejarah yang menggunakan pendekatan ilmu sosial (sosiologi) di Indonesia dapat dilihat pada mahakarya historiografi yang berjudul...",
            options: [
                "Nagarakretagama karya Mpu Prapanca.",
                "Sejarah Nasional Indonesia karya Marwati Djoened Poesponegoro.",
                "Pemberontakan Petani Banten 1888 karya Sartono Kartodirdjo.",
                "Max Havelaar karya Multatuli.",
                "Babad Tanah Jawi."
            ],
            answer: 2, // C
            explanation: "Prof. Sartono Kartodirdjo adalah pelopor penulisan sejarah menggunakan pendekatan ilmu sosial. Dalam bukunya, ia menganalisis pemberontakan Banten tidak hanya dari kejadian perangnya, tapi dari struktur kelas, ekonomi, milenariarisme, dan kondisi sosiologis petani."
        },
        {
            question: "Meskipun pendekatan ilmu sosial sangat membantu analisis sejarah, sebagian sejarawan ortodoks membatasi atau menolak penggunaannya. Alasan utama kekhawatiran mereka adalah...",
            options: [
                "Takut karya sejarah mereka tidak laku dijual di pasaran.",
                "Khawatir ilmu sejarah akan kehilangan ruh \"humaniora\"-nya, kehilangan seni narasinya, dan berubah menjadi ilmu pasti yang kaku.",
                "Pendekatan ilmu sosial dilarang oleh aturan pemerintah kolonial.",
                "Teori sosial belum terbukti keilmiahannya di dunia akademis.",
                "Sejarawan merasa ilmu sejarah lebih superior dan tidak membutuhkan ilmu lain."
            ],
            answer: 1, // B
            explanation: "Sejarawan tradisional (naratif) mengkhawatirkan jika sejarah terlalu sarat dengan teori sosiologi/ekonomi yang kaku, maka nilai estetik, unsur manusiawi (emosi, karakter tokoh), dan alur penceritaannya (seni sejarah) akan hilang."
        },
        {
            question: "Periodisasi sangat penting untuk memudahkan pemahaman sejarah kronologis. Dalam penyusunan periodisasi sejarah politik Indonesia, aspek dasar yang paling sering digunakan sebagai pembatas babak/periode adalah...",
            options: [
                "Pergantian tren budaya dan kesenian daerah.",
                "Perubahan iklim dan letusan gunung berapi besar.",
                "Jatuh bangunnya rezim kekuasaan, sistem pemerintahan, atau dinasti penguasa.",
                "Pergantian mata uang yang digunakan oleh masyarakat.",
                "Tingkat kepadatan penduduk di pulau Jawa."
            ],
            answer: 2, // C
            explanation: "Sejarah politik selalu menggunakan rezim atau kekuasaan sebagai penanda periode. Misalnya: Masa Kerajaan Hindu-Buddha, Masa Islam, Masa Kolonial Belanda, Masa Pendudukan Jepang, Orde Lama, Orde Baru, Reformasi."
        },
        {
            question: "Saat meneliti tema tentang stratifikasi warga pribumi pada masa kolonial Hindia Belanda, seorang peneliti menggunakan teori sosiologi. Fungsi teori sosial pada tema sejarah sosial tersebut adalah...",
            options: [
                "Mencari tanggal pasti lahirnya tokoh-tokoh pahlawan nasional.",
                "Mempertajam analisis mengenai relasi kuasa, diskriminasi kelas, dan mobilitas struktur masyarakat pada masa kolonial.",
                "Membenarkan tindakan eksploitasi ekonomi yang dilakukan VOC.",
                "Memastikan penulisan sejarah tidak menyinggung isu SARA.",
                "Mengubah fakta sejarah agar sesuai dengan teori hierarki kebutuhan."
            ],
            answer: 1, // B
            explanation: "Teori sosiologi (seperti struktur kelas sosial, rasialisme) sangat berguna bagi sejarah sosial untuk membedah bagaimana masyarakat kolonial dibagi (Eropa, Timur Asing, Inlander) dan dampaknya bagi interaksi keseharian mereka."
        },
        {
            question: "Hubungan kausalitas (sebab-akibat) keruntuhan Kerajaan Singasari erat kaitannya dengan kebijakan ambisiusnya sendiri. Faktor internal dan eksternal yang menyebabkan runtuhnya Singasari secara tiba-tiba adalah...",
            options: [
                "Kertanegara mengirim sebagian besar pasukan elite untuk Ekspedisi Pamalayu, sehingga ibu kota kosong dan mudah diserang pemberontakan Jayakatwang.",
                "Rakyat Singasari melakukan revolusi agraria menggulingkan Kertanegara.",
                "Bencana kelaparan massal akibat lahar dingin Gunung Kelud.",
                "Serangan mematikan langsung dari pasukan Tartar pimpinan Kubilai Khan ke keraton Singasari.",
                "Meninggalnya Kertanegara karena penyakit epidemi dan tidak memiliki penerus."
            ],
            answer: 0, // A
            explanation: "Saat fokus mengirim pasukan ke luar Jawa (Pamalayu), Kertanegara lengah. Jayakatwang (keturunan Kediri) memanfaatkan kekosongan pasukan keraton untuk memberontak, menyerang Singasari, dan membunuh Kertanegara (1292 M)."
        },
        {
            question: "Majapahit dikenal memiliki peradaban yang tinggi dan toleransi yang baik. Indikator kemajuan peradaban sosial-kultural ini dapat dibuktikan melalui peninggalan karya sastra, salah satunya adalah...",
            options: [
                "Kitab Bratayuda yang mendeskripsikan teknik pelayaran Majapahit.",
                "Kitab Sutasoma karya Mpu Tantular yang memuat konsep \"Bhinneka Tunggal Ika\" tentang toleransi Hindu-Siwa dan Buddha.",
                "Kitab Pararaton yang memuat cetak biru pembangunan Candi Prambanan.",
                "Kitab Arjunawiwaha yang berisi undang-undang hukum maritim Amangkubhumi.",
                "Prasasti Tugu yang menceritakan tingginya karya seni pahat emas."
            ],
            answer: 1, // B
            explanation: "Semboyan Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa (berbeda-beda namun satu, tidak ada kebenaran yang mendua) menunjukkan tingginya toleransi beragama dan kemajuan peradaban pemikiran pada masa Majapahit."
        },
        {
            question: "Keberadaan Kerajaan Perlak sebagai entitas politik Islam di masa lampau tidak sekadar mitos. Bukti tekstual dan artefak historis yang menguatkan eksistensi Perlak adalah...",
            options: [
                "Ditemukannya stempel emas bertuliskan huruf Pallawa dan bahasa Sanskerta.",
                "Catatan Marco Polo dan ditemukannya mata uang dirham Perlak serta makam raja Sultan Alauddin Sayyid Maulana Abdul Aziz Syah.",
                "Ditemukannya meriam raksasa peninggalan Perlak di Benteng Inong Balee.",
                "Relief candi di pegunungan Aceh yang menceritakan penyebaran Islam.",
                "Kitab Tajussalatin yang menyebutkan Perlak menaklukkan Majapahit."
            ],
            answer: 1, // B
            explanation: "Mata uang koin Dirham Perlak adalah bukti artefak majunya ekonomi mereka, sementara nisan/makam raja dan catatan musafir asing (Marco Polo) menjadi bukti historis valid atas keberadaan kerajaan ini."
        },
        {
            question: "Selain penaklukan wilayah, indikator keberhasilan Sultan Iskandar Muda dari Kesultanan Aceh di bidang militer dan ekonomi diwujudkan melalui...",
            options: [
                "Pembentukan armada perang laut (kapal galyas) bersenjata meriam dan dominasi cukai perdagangan Selat Malaka.",
                "Beraliansi militer dengan Spanyol untuk mengusir Portugis dari Malaka.",
                "Penghapusan sistem pajak untuk meringankan beban petani rempah.",
                "Mempekerjakan tentara bayaran dari Jepang secara massal.",
                "Menjual pulau-pulau strategis kepada pedagang Inggris."
            ],
            answer: 0, // A
            explanation: "Militer Aceh sangat ditakuti (armada laut besar dan pasukan darat bergajah), yang digunakan Iskandar Muda untuk mengontrol pelabuhan-pelabuhan pesaing dan memaksakan sistem monopoli perdagangan serta cukai di perairan Sumatera dan Malaya."
        },
        {
            question: "Dampak paling merusak dari suksesi berdarah pasca wafatnya Sultan Trenggono (Kerajaan Demak) adalah...",
            options: [
                "Adanya invasi militer secara tiba-tiba dari VOC yang memanfaatkan kelemahan keraton.",
                "Melemahnya kekuasaan pusat yang memicu bupati-bupati pesisir (daerah bawahan) melepaskan diri, dan pusat kekuasaan bergeser ke pedalaman (Pajang).",
                "Keruntuhan total Islam di pesisir utara Jawa dan kembali ke agama Buddha.",
                "Penutupan masjid-masjid peninggalan Wali Songo oleh penguasa yang baru.",
                "Perekonomian Demak diserahkan sepenuhnya kepada saudagar Tiongkok."
            ],
            answer: 1, // B
            explanation: "Konflik keluarga (Arya Penangsang vs Sunan Prawoto/Joko Tingkir) membuat para adipati daerah kehilangan respek pada keraton. Joko Tingkir (Hadiwijaya) akhirnya menang dan memindahkan pusat kerajaan ke Pajang (pedalaman)."
        },
        {
            question: "Transisi kekuasaan dari Kesultanan Demak ke Kesultanan Pajang tidak dipandang sebagai hancurnya budaya lama, melainkan terdapat kontinuitas (keberlanjutan) politik dan kultur kultural. Kesimpulan ini didasarkan pada peristiwa...",
            options: [
                "Joko Tingkir mempertahankan hukum laut peninggalan Raden Patah.",
                "Pemindahan pusaka-pusaka keraton Demak ke Pajang sebagai simbol pengesahan/legitimasi perpindahan wahyu kedaton.",
                "Rakyat Pajang menolak berbaur dengan kaum pesisir.",
                "Pajang dan Demak akhirnya sepakat untuk membagi wilayah Jawa menjadi dua kesultanan kembar.",
                "Penobatan Joko Tingkir dilakukan oleh perwakilan dari Kerajaan Majapahit."
            ],
            answer: 1, // B
            explanation: "Dalam tradisi politik Jawa, siapa yang menguasai pusaka kerajaan pendahulunya, maka ia memiliki legitimasi (wahyu kedaton). Pemindahan pusaka dari Demak ke Pajang menandakan Pajang adalah penerus sah (kontinuitas) dari takhta Demak."
        },
        {
            question: "Peristiwa perpindahan pusat Kerajaan Mataram Kuno dari Jawa Tengah ke Jawa Timur oleh Mpu Sindok (pendiri Dinasti Isyana) adalah contoh nyata pendekatan geografi dalam ilmu sejarah. Faktor pemicu perubahan historis ruang bumi tersebut adalah...",
            options: [
                "Kesuburan tanah di Jawa Tengah habis akibat penanaman padi sistem paksa.",
                "Ancaman banjir tsunami yang terus menerus menyapu ibu kota Mataram.",
                "Bencana alam letusan maha dahsyat Gunung Merapi yang menghancurkan ibu kota dan infrastruktur candi.",
                "Cuaca ekstrem yang menyebabkan terhentinya perdagangan dengan kapal Tiongkok.",
                "Wabah nyamuk malaria di kawasan hutan Jawa Tengah."
            ],
            answer: 2, // C
            explanation: "Bencana alam mematikan berupa erupsi Gunung Merapi (pendekatan geografi historis) membuat tanah Jawa Tengah tertutup abu tebal (menghancurkan candi dan lahan), memaksa Mpu Sindok memindahkan pusat kerajaannya ke timur (lembah Sungai Brantas)."
        },
        {
            question: "Kerajaan Kalingga di Jawa Tengah (abad ke-7) tidak hanya dikenal karena Ratu Sima yang tegas, tetapi juga sebagai pusat keagamaan Buddha. Bukti keterlibatan cendekiawan lokal Kalingga dalam perkembangan agama Buddha adalah...",
            options: [
                "Pengiriman ribuan biksu Kalingga untuk menyerang pusat-pusat Hindu di India.",
                "Peran pendeta Jnanabhadra yang membantu musafir Tiongkok, Hwining, dalam menerjemahkan kitab Buddha dari bahasa Sanskerta ke bahasa Mandarin.",
                "Pembangunan Universitas Buddha tertua di Nusantara yang melampaui kebesaran Nalanda.",
                "Penulisan kitab undang-undang hukum pidana yang mengadopsi ajaran Siddharta Gautama.",
                "Ditemukannya stupa raksasa di pesisir Jepara yang dibangun oleh arsitek Kalingga."
            ],
            answer: 1, // B
            explanation: "Hwining (biksu Tiongkok) datang ke Kalingga (Holo-ting) dan bermukim di sana untuk menerjemahkan kitab suci Buddha ke bahasa Mandarin. Ia sangat dibantu oleh pendeta/cendekiawan Buddha lokal yang sangat cerdas bernama Jnanabhadra."
        },
        {
            question: "Selain faktor maritim, Sriwijaya masyhur karena tingginya kualitas keilmuan akademis Buddha di kerajaannya. Bukti kuat yang menunjukkan tingginya kualitas keilmuan tersebut melalui peran tokoh lokalnya adalah...",
            options: [
                "Mahasiswa Nalanda yang diwajibkan belajar di Sriwijaya agar mendapat gelar kebangsawanan.",
                "Keberadaan Sakyakirti dan Dharmakirti, maha guru Buddha dari Sriwijaya, yang karya dan ajarannya sangat dihormati serta menjadi rujukan para biksu mancanegara.",
                "Sriwijaya memonopoli pencetakan naskah kitab suci untuk dijual ke seluruh Asia Tenggara.",
                "Raja Balaputradewa yang menulis sendiri tafsir Tripitaka dan menyebarkannya ke Tiongkok.",
                "Pembangunan asrama khusus bagi biksu lokal yang melarang biksu asing untuk ikut campur."
            ],
            answer: 1, // B
            explanation: "Dharmakirti (atau Serlingpa Dharmakirti) adalah tokoh/guru besar agama Buddha yang sangat termasyhur di Sriwijaya. Bahkan Atisha (seorang pendeta besar Buddha pembaru agama di Tibet) sengaja datang ke Sriwijaya untuk berguru padanya selama belasan tahun."
        }
    ];

    console.log("✅ Berhasil: Data Sejarah (40 Soal) sudah dimuat secara penuh!");

    // 4. Render ulang UI jika fungsi rendernya tersedia di main script kamu
    if (typeof renderMataPelajaran === 'function') {
        renderMataPelajaran();
    }
}

// Jalankan sistem Auto-Inject
injectSejarahData();
