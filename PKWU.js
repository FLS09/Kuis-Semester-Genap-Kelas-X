// --- FILE: PKWU.js ---
// File terpisah khusus untuk data soal Prakarya dan Kewirausahaan

// Sistem injeksi otomatis (Auto-Inject)
// Menunggu sampai variabel 'subjects' dan 'quizData' dari file utama siap
function loadPKWUData() {
    // Pastikan variabel utama sudah ada di memori
    if (typeof subjects !== 'undefined' && typeof quizData !== 'undefined') {
        
        // Cek agar tidak terjadi duplikasi kalau fungsi ini terpanggil 2 kali
        const isAlreadyAdded = subjects.find(sub => sub.id === 'pkwu');
        if (!isAlreadyAdded) {
            
            // 1. Menambahkan Mata Pelajaran ke Menu Utama
            subjects.push({ 
                id: 'pkwu', 
                name: 'PKWU', 
                icon: 'ph-plant', 
                color: 'text-green-500 dark:text-green-400' 
            });

            // 2. Teks Cerita untuk Soal
            const storyText1 = "Farrel adalah seorang pelajar kelas X yang gemar membuat karya visual sinematik. Ia melihat peluang usaha dari tren action figure lokal seperti Gundala. Farrel kemudian berinovasi membuat action figure dan diorama miniatur yang terinspirasi dari cerita rakyat lokal, yaitu Legenda Pesut Mahakam. Untuk membuat dioramanya, ia mengaplikasikan motif ukiran khas Dayak pada elemen bangunannya. Dalam proses promosinya, Farrel menggunakan kamera mirrorless untuk membuat video iklan sinematik yang menargetkan kolektor mainan dan pecinta budaya lokal di media sosial.";

            const storyText2 = "Sebuah usaha kuliner rintisan memproduksi olahan pangan hewani bernama 'Yogurt Mahakam'. Dalam sebulan, mereka mengeluarkan Biaya Tetap (Sewa tempat, penyusutan alat) sebesar Rp 2.000.000. Biaya Variabel (Susu murni, kultur bakteri, kemasan botol, label) untuk memproduksi satu botol yogurt adalah Rp 10.000. Mereka menetapkan harga jual produk ke konsumen sebesar Rp 15.000 per botol. Untuk menjaga kualitas, mereka berinvestasi pada mesin pendingin (chiller) khusus agar suhu fermentasi dan penyimpanan tetap stabil.";

            const storyText3 = "Pengolahan bahan pangan hewani sangat rentan terhadap kerusakan (perishable food). Daging merah sapi dan ikan laut (seafood) mudah membusuk karena kandungan air dan proteinnya yang tinggi. Oleh karena itu, industri makanan sering menggunakan pengawetan biologi, fisika, maupun kimia. Pada produk susu, selain diolah menjadi yogurt, produsen juga menggunakan teknik UHT (Ultra High Temperature) dan pengemasan aseptik dengan label yang mencantumkan Informasi Nilai Gizi untuk menargetkan konsumen yang sedang diet tinggi protein.";

            // 3. Memasukkan Data Soal ke dalam quizData
            quizData['pkwu'] = [
                // --- Topik 1 & 2: Kerajinan Budaya Lokal Benda & Non-Benda (Soal 1 - 8) ---
                { 
                    story: storyText1, 
                    question: "Berdasarkan teks di atas, inspirasi desain action figure yang diambil dari Legenda Pesut Mahakam diklasifikasikan sebagai kerajinan budaya lokal...", 
                    options: ["Benda, karena wujud akhirnya berupa patung fisik.", "Non-benda, karena inspirasi utamanya berasal dari cerita rakyat/mitos.", "Artefak, karena meniru peninggalan sejarah kuno.", "Terapan, karena action figure memiliki fungsi pakai sehari-hari.", "Modern, karena menggunakan teknik pembuatan kekinian."], 
                    answer: 1, 
                    explanation: "Meskipun hasil akhirnya berupa benda fisik (action figure), sumber ide/inspirasinya (Legenda Pesut Mahakam) merupakan cerita rakyat atau tradisi lisan, yang tergolong dalam budaya lokal non-benda." 
                },
                { 
                    story: storyText1, 
                    question: "Penerapan motif ukiran khas Dayak pada diorama yang dibuat oleh Farrel merupakan bentuk integrasi budaya lokal kategori...", 
                    options: ["Non-benda", "Benda", "Lisan", "Tarian", "Ritual"], 
                    answer: 1, 
                    explanation: "Motif ukiran, arsitektur, pakaian adat, dan senjata tradisional adalah contoh artefak atau karya fisik yang digolongkan sebagai budaya lokal benda." 
                },
                { 
                    story: storyText1, 
                    question: "Tujuan utama Farrel membuat video iklan sinematik dengan kamera mirrorless dalam konteks kewirausahaan adalah untuk memenuhi unsur...", 
                    options: ["Man", "Material", "Machine", "Market", "Method"], 
                    answer: 3, 
                    explanation: "Pembuatan iklan promosi bertujuan untuk menjangkau target konsumen, membangun branding, dan meningkatkan penjualan, yang merupakan fokus dari unsur 'Market' (Pasar)." 
                },
                { 
                    story: null, 
                    question: "Batik motif Mega Mendung dari Cirebon memiliki filosofi tersendiri. Jika seorang wirausahawan menjadikan motif ini sebagai inspirasi tas kulit, langkah pertama dalam proses perancangannya adalah...", 
                    options: ["Mencari sumber pendanaan untuk modal awal.", "Melakukan riset bentuk, warna, dan makna filosofis motif tersebut.", "Membeli mesin jahit khusus kulit.", "Merekrut tenaga kerja yang ahli menjahit.", "Membuat strategi diskon harga jual tas."], 
                    answer: 1, 
                    explanation: "Dalam perancangan produk kerajinan berbasis budaya, langkah pertama (ideasi/brainstorming) adalah memahami objek budayanya melalui riset bentuk dan makna sebelum masuk ke aspek teknis atau bisnis." 
                },
                { 
                    story: null, 
                    question: "Salah satu contoh bentuk kerajinan budaya lokal non-benda yang ditransformasikan menjadi produk benda adalah...", 
                    options: ["Membuat miniatur rumah Gadang.", "Menjadikan kain ulos sebagai bahan dasar kemeja.", "Membuat kaos sablon dengan gambar tokoh pewayangan Gatotkaca.", "Membuat replika keris keraton.", "Memahat patung replika Candi Borobudur."], 
                    answer: 2, 
                    explanation: "Tokoh pewayangan (Gatotkaca) adalah bentuk cerita/mitos (non-benda). Mengaplikasikan gambarnya pada kaos berarti mentransformasi budaya non-benda menjadi produk fisik." 
                },
                { 
                    story: null, 
                    question: "Dalam pembuatan miniatur rumah adat, penggunaan bahan seperti stik es krim dan lem kayu sangat dominan. Kendala utama dalam pemilihan material ini jika diproduksi massal adalah...", 
                    options: ["Harga stik es krim yang sangat mahal di pasaran.", "Bahan mudah menyerap air dan rentan terhadap kelembapan.", "Sulitnya menemukan lem kayu di toko material.", "Bentuk stik es krim yang terlalu fleksibel dan mudah melengkung.", "Proses perakitannya membutuhkan mesin canggih."], 
                    answer: 1, 
                    explanation: "Kayu olahan/stik es krim rentan terhadap cuaca, rayap, dan kelembapan air (mudah berjamur/lapuk) jika tidak diberi finishing yang tepat." 
                },
                { 
                    story: null, 
                    question: "Fungsi utama kemasan (packaging) pada produk kerajinan yang dijual ke luar pulau, selain untuk melindungi produk dari benturan fisik adalah...", 
                    options: ["Menambah beban biaya produksi agar harga jual naik.", "Menutupi kecacatan produk yang terjadi saat produksi.", "Meningkatkan nilai estetika dan daya tarik (brand image) di mata konsumen.", "Membuat ukuran barang terlihat lebih besar dari aslinya.", "Menghindari pemeriksaan pajak barang di bandara."], 
                    answer: 2, 
                    explanation: "Kemasan memiliki fungsi proteksi, identitas, dan promosi. Desain kemasan yang baik akan menaikkan nilai jual, estetika, dan citra merek (brand image)." 
                },
                { 
                    story: null, 
                    question: "Sebuah tarian daerah menceritakan rasa syukur atas panen raya. Ide produk kerajinan apa yang paling relevan dan inovatif untuk merepresentasikan budaya non-benda tersebut?", 
                    options: ["Senjata tajam tiruan yang tidak ada hubungannya dengan panen.", "Lampu hias bermotif siluet gerakan tarian dengan ornamen padi.", "Kaos polos berwarna hitam.", "Gantungan kunci berbentuk kendaraan modern.", "Miniatur candi tempat tarian tersebut tidak pernah dipentaskan."], 
                    answer: 1, 
                    explanation: "Lampu hias dengan siluet tarian dan ornamen padi (simbol panen) secara langsung merepresentasikan narasi tarian (budaya non-benda) ke dalam bentuk visual yang fungsional." 
                },

                // --- Topik 3: Konsep 6M (Soal 9 - 12) ---
                { 
                    story: storyText2, 
                    question: "Dalam teks 'Yogurt Mahakam', keputusan pengusaha untuk berinvestasi pada mesin pendingin (chiller) khusus suhu fermentasi berkaitan langsung dengan unsur 6M, yaitu...", 
                    options: ["Man", "Material", "Machine", "Market", "Money"], 
                    answer: 2, 
                    explanation: "Mesin pendingin (chiller), inkubator, blender, atau alat produksi lainnya dikategorikan ke dalam sumber daya 'Machine' (mesin/peralatan)." 
                },
                { 
                    story: null, 
                    question: "Jika sebuah usaha kerajinan memiliki bahan baku yang melimpah dan alat yang canggih, namun produknya sering cacat karena pekerjanya tidak dilatih dengan baik, maka terjadi masalah pada unsur...", 
                    options: ["Method", "Machine", "Man", "Material", "Market"], 
                    answer: 2, 
                    explanation: "Kesalahan akibat kurangnya keahlian (skill), pelatihan, atau kelalaian pekerja adalah masalah pada Sumber Daya Manusia, yaitu unsur 'Man'." 
                },
                { 
                    story: null, 
                    question: "SOP (Standard Operating Procedure) pembuatan telur asin yang mengatur takaran garam, waktu perendaman, dan cara pembersihan telur masuk ke dalam unsur...", 
                    options: ["Money", "Material", "Method", "Market", "Machine"], 
                    answer: 2, 
                    explanation: "'Method' (Metode) merujuk pada tata cara, prosedur standar kerja (SOP), dan langkah-langkah sistematis dalam memproduksi barang." 
                },
                { 
                    story: null, 
                    question: "Dalam manajemen 6M, fungsi dari 'Money' tidak hanya sebagai modal awal (Capex), tetapi juga untuk...", 
                    options: ["Menentukan desain visual produk di media sosial.", "Membiayai operasional harian (Opex) seperti gaji dan bahan baku berjalan.", "Menjalankan mesin produksi secara otomatis.", "Melakukan riset perilaku konsumen pesaing secara langsung.", "Merancang prosedur standar kerja di pabrik."], 
                    answer: 1, 
                    explanation: "Unsur 'Money' (Uang) berfungsi sebagai alat tukar dan ukuran nilai. Ini mencakup modal investasi (alat) maupun modal kerja/operasional (membeli bahan baku, bayar listrik, dan gaji pekerja)." 
                },

                // --- Topik 4: Analisis SWOT (Soal 13 - 17) ---
                { 
                    story: null, 
                    question: "Dalam analisis SWOT, munculnya pesaing baru yang menjual produk kerajinan sejenis dengan harga jauh lebih murah dan diproduksi secara massal dari luar negeri dikategorikan sebagai...", 
                    options: ["Strength (Kekuatan)", "Weakness (Kelemahan)", "Opportunity (Peluang)", "Threat (Ancaman)", "Target (Sasaran)"], 
                    answer: 3, 
                    explanation: "Pesaing, perubahan tren yang tidak menguntungkan, atau regulasi yang menyulitkan adalah faktor EKSTERNAL yang berpotensi membahayakan bisnis, sehingga disebut Threat (Ancaman)." 
                },
                { 
                    story: null, 
                    question: "Kelemahan (Weakness) terbesar dari produk olahan pangan hewani tanpa pengawet buatan yang dipasarkan oleh usaha skala rumah tangga biasanya terletak pada aspek...", 
                    options: ["Nilai gizinya yang terlalu tinggi.", "Rasanya yang tidak bisa disesuaikan.", "Masa simpan (shelf life) yang sangat singkat.", "Bahan bakunya yang selalu mudah didapatkan.", "Tidak membutuhkan mesin canggih."], 
                    answer: 2, 
                    explanation: "Produk tanpa pengawet sangat mudah rusak oleh bakteri pembusuk, sehingga masa simpannya sangat pendek. Ini merupakan kelemahan internal produk tersebut." 
                },
                { 
                    story: null, 
                    question: "Sebuah brand susu lokal memiliki kekuatan (Strength) berupa desain kemasan yang sangat unik dan disukai remaja. Di saat yang sama, ada tren/Peluang (Opportunity) di media sosial di mana para remaja suka membagikan foto estetis. Strategi S-O (Strength-Opportunity) yang paling tepat adalah...", 
                    options: ["Menurunkan kualitas kemasan untuk menekan harga.", "Mengubah target pasar menjadi lansia.", "Mengadakan kampanye / lomba foto produk di Instagram atau TikTok.", "Menjual pabrik untuk mendapat untung besar.", "Mencari pinjaman bank untuk menutupi kelemahan mesin."], 
                    answer: 2, 
                    explanation: "Strategi S-O memaksimalkan Kekuatan untuk meraih Peluang. Kemasan yang estetis (Strength) dipadukan dengan tren foto di media sosial (Opportunity) paling pas dieksekusi dengan lomba foto/kampanye digital." 
                },
                { 
                    story: null, 
                    question: "Jika harga bahan baku daging sapi impor naik drastis akibat kurs dolar (Threat), namun usaha kita memiliki tim R&D yang handal dalam mengolah resep (Strength), strategi S-T yang tepat adalah...", 
                    options: ["Tutup usaha sementara sampai kurs dolar turun.", "Mengganti seluruh mesin produksi dengan yang lebih baru.", "Berinovasi menciptakan produk olahan daging sapi campur nabati (plant-based) atau beralih ke daging lokal dengan rasa tetap premium.", "Menaikkan harga jual 300% dan memecat karyawan.", "Menjual daging sapi mentah tanpa diolah."], 
                    answer: 2, 
                    explanation: "Strategi S-T menggunakan Kekuatan (tim R&D handal) untuk menghindari atau meminimalisir Ancaman (harga bahan mahal). Berinovasi mencampur atau mencari substitusi bahan yang mempertahankan kualitas adalah langkah tepat." 
                },
                { 
                    story: null, 
                    question: "Manakah pernyataan di bawah ini yang membedakan antara Weakness dan Threat?", 
                    options: ["Weakness bersumber dari luar perusahaan, Threat dari dalam perusahaan.", "Weakness dapat dikontrol oleh pemilik usaha, Threat berasal dari kondisi eksternal pasar yang tidak bisa dikontrol penuh.", "Weakness adalah kondisi positif, Threat adalah kondisi negatif.", "Weakness hanya berkaitan dengan modal, Threat berkaitan dengan mesin.", "Keduanya memiliki definisi dan fungsi yang sama persis."], 
                    answer: 1, 
                    explanation: "Weakness (Kelemahan) adalah faktor internal (bisa diperbaiki oleh manajemen). Threat (Ancaman) adalah faktor eksternal (seperti regulasi pemerintah, cuaca, pesaing) yang berada di luar kontrol perusahaan." 
                },

                // --- Topik 5 & 6: BEP, Harga Jual, Keuntungan & Strategi (Soal 18 - 23) ---
                { 
                    story: storyText2, 
                    question: "Berdasarkan data keuangan 'Yogurt Mahakam' pada teks di atas, berapakah Break Even Point (BEP) dalam unit yang harus dicapai agar perusahaan balik modal?", 
                    options: ["133 botol", "200 botol", "300 botol", "400 botol", "500 botol"], 
                    answer: 3, 
                    explanation: "BEP Unit = Biaya Tetap / (Harga Jual - Biaya Variabel) = 2.000.000 / (15.000 - 10.000) = 2.000.000 / 5.000 = 400 botol." 
                },
                { 
                    story: storyText2, 
                    question: "Berapakah Break Even Point (BEP) dalam Rupiah untuk usaha 'Yogurt Mahakam'?", 
                    options: ["Rp 2.000.000", "Rp 4.000.000", "Rp 6.000.000", "Rp 7.500.000", "Rp 10.000.000"], 
                    answer: 2, 
                    explanation: "BEP Rupiah = BEP Unit × Harga Jual per Unit = 400 unit × Rp 15.000 = Rp 6.000.000." 
                },
                { 
                    story: storyText2, 
                    question: "Jika dalam sebulan 'Yogurt Mahakam' berhasil menjual sebanyak 600 botol, bagaimanakah status keuangannya?", 
                    options: ["Rugi Rp 1.000.000", "Rugi Rp 500.000", "Impas (Balik Modal)", "Untung Rp 1.000.000", "Untung Rp 3.000.000"], 
                    answer: 3, 
                    explanation: "Total Pemasukan = 600 × 15.000 = Rp 9.000.000. Total Pengeluaran = FC + (VC × Q) = 2.000.000 + (10.000 × 600) = Rp 8.000.000. Laba = 9.000.000 - 8.000.000 = Untung Rp 1.000.000." 
                },
                { 
                    story: null, 
                    question: "Sebuah usaha menetapkan harga produk kerajinan dengan cara menghitung seluruh biaya produksi yang dikeluarkan, kemudian menambahkan persentase margin keuntungan yang diinginkan (misal ditambah 20%). Strategi penetapan harga ini disebut...", 
                    options: ["Market Based Pricing", "Cost Plus Pricing", "Penetration Pricing", "Skimming Pricing", "Psychological Pricing"], 
                    answer: 1, 
                    explanation: "Cost Plus Pricing (Penetapan Harga Biaya Plus) adalah metode penentuan harga dengan menghitung total biaya lalu ditambah mark-up/margin keuntungan tertentu." 
                },
                { 
                    story: null, 
                    question: "Untuk merebut pasar di awal peluncuran produk nugget ayam terbarunya, PT Pangan Makmur menjual produk tersebut dengan harga promo yang sangat murah. Rencananya harga akan dinaikkan bertahap setelah pelanggan terbiasa. Strategi ini dikenal sebagai...", 
                    options: ["Price Skimming", "Bundle Pricing", "Penetration Pricing", "Premium Pricing", "Loss Leader Pricing"], 
                    answer: 2, 
                    explanation: "Penetration Pricing adalah strategi menetapkan harga serendah mungkin di awal untuk 'menembus' pasar dan meraih pangsa pasar (market share) secara cepat." 
                },
                { 
                    story: null, 
                    question: "Penetapan harga jual sebesar Rp 99.900 alih-alih Rp 100.000 merupakan penerapan strategi harga yang memanfaatkan persepsi otak manusia. Strategi ini disebut...", 
                    options: ["Cost Based Pricing", "Bundle Pricing", "Psychological Pricing", "Premium Pricing", "Geographical Pricing"], 
                    answer: 2, 
                    explanation: "Psychological pricing (harga psikologis) memanipulasi persepsi kognitif pembeli sehingga angka Rp 99.900 dianggap berada di rentang 'sembilan puluhan' padahal selisihnya hanya Rp 100 dari seratus ribu." 
                },

                // --- Topik 7: Pangan Hewani, Mikroorganisme, Pengawetan, dll (Soal 24 - 40) ---
                { 
                    story: storyText3, 
                    question: "Berdasarkan asalnya, daging dibagi menjadi daging putih dan daging merah. Karakteristik utama yang membedakan daging merah dari daging putih secara nutrisi adalah...", 
                    options: ["Daging merah memiliki kandungan serat karbohidrat yang lebih tinggi.", "Daging merah memiliki kadar myoglobin dan zat besi yang lebih tinggi.", "Daging merah tidak mengandung kolesterol sama sekali.", "Daging putih lebih sulit dicerna oleh enzim lambung.", "Daging putih berasal dari hewan ternak besar seperti sapi."], 
                    answer: 1, 
                    explanation: "Daging merah (seperti sapi, kambing) kaya akan myoglobin (protein pengikat oksigen di otot) dan zat besi, yang memberikan warna merah gelap pada daging tersebut." 
                },
                { 
                    story: null, 
                    question: "Telur merupakan salah satu bahan pangan hewani yang memiliki nilai biologis protein sangat tinggi. Mengapa telur sering dijadikan referensi standar untuk kualitas protein makanan lain?", 
                    options: ["Karena telur sangat murah dan mudah ditemukan di mana saja.", "Karena telur mengandung asam amino esensial yang paling lengkap dan mudah diserap tubuh.", "Karena telur tidak memiliki cangkang keras.", "Karena telur mengandung vitamin C yang sangat tinggi.", "Karena telur tidak bisa diolah menjadi makanan tidak sehat."], 
                    answer: 1, 
                    explanation: "Telur memiliki profil asam amino esensial yang sangat lengkap dan daya cerna yang tinggi, sehingga sering dijadikan tolok ukur (biological value = 100) bagi protein makanan lain." 
                },
                { 
                    story: storyText3, 
                    question: "Dalam teks disebutkan penggunaan teknik pengemasan aseptik dan proses UHT pada susu. Tujuan utama proses pemanasan UHT (Ultra High Temperature) pada suhu 135-150°C selama beberapa detik adalah untuk...", 
                    options: ["Memperbaiki warna susu menjadi lebih putih cerah.", "Mengubah laktosa menjadi alkohol.", "Membunuh seluruh mikroorganisme patogen dan spora tanpa merusak nilai gizi secara signifikan.", "Mempercepat proses fermentasi keju.", "Menambah cita rasa manis pada susu sapi asli."], 
                    answer: 2, 
                    explanation: "UHT adalah pengawetan fisika (termal) yang bertujuan membunuh bakteri pembusuk, patogen, beserta sporanya dalam waktu singkat (2-5 detik) agar susu steril dan tahan lama di suhu ruang tanpa merusak nutrisi secara drastis." 
                },
                { 
                    story: null, 
                    question: "Pembuatan produk turunan susu seperti Yogurt membutuhkan agen hayati berupa bakteri asam laktat. Mikroorganisme yang paling umum digunakan dalam starter kultur yogurt adalah...", 
                    options: ["Rhizopus oligosporus dan Aspergillus wentii", "Saccharomyces cerevisiae dan Acetobacter xylinum", "Lactobacillus bulgaricus dan Streptococcus thermophilus", "Escherichia coli dan Salmonella typhi", "Penicillium camemberti dan Aspergillus niger"], 
                    answer: 2, 
                    explanation: "Lactobacillus bulgaricus dan Streptococcus thermophilus adalah dua bakteri asam laktat bersimbiosis yang wajib ada dalam proses fermentasi yogurt untuk menghasilkan rasa asam (asam laktat) dan tekstur kental." 
                },
                { 
                    story: null, 
                    question: "Proses fermentasi pada pembuatan yogurt tidak hanya mengubah tekstur dan rasa, tetapi juga memiliki keuntungan biologis, yaitu...", 
                    options: ["Menurunkan kandungan protein secara drastis.", "Mengubah karbohidrat kompleks menjadi serat.", "Menurunkan kadar laktosa sehingga lebih aman bagi penderita lactose intolerance.", "Menambah kadar lemak jenuh agar lebih awet.", "Mematikan seluruh vitamin yang terkandung dalam susu murni."], 
                    answer: 2, 
                    explanation: "Bakteri asam laktat memecah gula susu (laktosa) menjadi asam laktat. Hal ini membuat yogurt lebih mudah dicerna, terutama bagi orang yang tidak toleran terhadap laktosa (lactose intolerance)." 
                },
                { 
                    story: null, 
                    question: "Pengawetan bahan pangan hewani dapat dilakukan secara fisika, kimia, dan biologi. Contoh penerapan pengawetan secara kimiawi pada pengolahan daging sapi adalah...", 
                    options: ["Menyimpan daging di dalam freezer bersuhu -18°C.", "Pengasapan daging menggunakan panas kayu bakar.", "Melakukan iradiasi pada daging yang sudah dikemas.", "Penambahan garam (curing) dan senyawa nitrit untuk membuat kornet.", "Menambahkan bakteri pembusuk agar daging cepat hancur."], 
                    answer: 3, 
                    explanation: "Menambahkan bahan pengawet seperti garam (salting), gula, asam, atau bahan kimia sintetis (seperti nitrit pada kornet/sosis) merupakan teknik pengawetan kimiawi." 
                },
                { 
                    story: null, 
                    question: "Dalam menganalisis Informasi Nilai Gizi pada kemasan produk susu diet, jika seseorang ingin menurunkan berat badan dengan diet defisit kalori dan membesarkan massa otot, indikator makronutrien utama yang harus dicari adalah...", 
                    options: ["Tinggi Karbohidrat dan Rendah Serat.", "Tinggi Lemak Trans dan Rendah Protein.", "Tinggi Protein dan Rendah Gula/Lemak.", "Rendah Protein dan Rendah Kalsium.", "Tinggi Natrium dan Tinggi Gula Tambahan."], 
                    answer: 2, 
                    explanation: "Untuk keperluan diet pembentukan otot, tubuh memerlukan asupan Protein yang tinggi untuk hipertrofi otot, serta Gula/Lemak yang rendah untuk menjaga defisit kalori harian." 
                },
                { 
                    story: null, 
                    question: "Kemasan vakum (vacuum packaging) sangat efektif untuk memperpanjang umur simpan daging beku dan seafood. Prinsip kerja kemasan ini adalah...", 
                    options: ["Mengisi kemasan dengan gas nitrogen secara penuh.", "Menghilangkan oksigen dari dalam kemasan untuk menghambat pertumbuhan bakteri aerob.", "Memanaskan kemasan hingga meleleh dan menempel pada produk.", "Menambahkan cairan pengawet ke dalam plastik sebelum disegel.", "Memberikan ruang udara yang luas agar daging bisa bernapas."], 
                    answer: 1, 
                    explanation: "Bakteri pembusuk utama pada daging adalah bakteri aerob yang membutuhkan oksigen. Vakum bekerja dengan menyedot oksigen keluar, sehingga menekan oksidasi lemak dan pertumbuhan bakteri aerob." 
                },
                { 
                    story: null, 
                    question: "Label pada kemasan pangan olahan memiliki fungsi hukum dan perlindungan konsumen. Menurut BPOM, elemen yang WAJIB ada di kemasan produk olahan hewan, KECUALI...", 
                    options: ["Nama produk dan Daftar bahan yang digunakan.", "Tanggal kedaluwarsa (Expired Date).", "Nama dan alamat pihak yang memproduksi (Produsen).", "Foto pemilik pabrik beserta keluarganya.", "Berat bersih (Netto)."], 
                    answer: 3, 
                    explanation: "Foto pemilik pabrik bukan merupakan elemen wajib atau relevan dalam label keamanan dan informasi produk menurut standar BPOM." 
                },
                { 
                    story: null, 
                    question: "Pada produk olahan makanan laut seperti sarden kalengan, proses pengawetan utama yang digunakan agar bakteri Clostridium botulinum mati adalah teknik...", 
                    options: ["Pasteurisasi suhu rendah.", "Sterilisasi komersial menggunakan autoklaf/retort.", "Fermentasi asetat.", "Pengeringan sinar matahari.", "Pendinginan di dalam kulkas biasa."], 
                    answer: 1, 
                    explanation: "Makanan kalengan yang tingkat asamnya rendah (seperti daging/ikan) harus diproses dengan pemanasan tingkat tinggi bertekanan (sterilisasi retort > 121°C) untuk membunuh spora mematikan C. botulinum." 
                },
                { 
                    story: null, 
                    question: "Pembuatan telur asin dari telur bebek memanfaatkan proses difusi pada cangkang telur. Fungsi utama dari adonan abu gosok/batu bata merah dan garam adalah...", 
                    options: ["Garam menarik air keluar dari dalam telur dan masuk ke dalam pori-pori untuk menghambat pertumbuhan bakteri.", "Abu gosok berfungsi sebagai bumbu penyedap rasa gurih pada kuning telur.", "Garam membuat telur bebek menjadi lebih besar ukurannya.", "Abu gosok membersihkan cangkang agar berwarna putih bersih.", "Garam bereaksi dengan protein telur menghasilkan gas hidrogen."], 
                    answer: 0, 
                    explanation: "Garam berfungsi sebagai pengawet kimiawi. Melalui proses osmosis dan difusi, garam menyerap air dari telur dan meresap masuk, menurunkan Aktivitas Air (Aw) sehingga mikroba sulit tumbuh." 
                },
                { 
                    story: null, 
                    question: "Selain nilai ekonomisnya naik, keuntungan melakukan diversifikasi produk dari ayam segar menjadi nugget dan sosis adalah...", 
                    options: ["Kandungan vitamin C di dalam daging meningkat drastis.", "Harga pokok produksinya menjadi lebih murah daripada pakan ayam.", "Memperpanjang umur simpan karena produk telah mengalami pemasakan, pencampuran, dan siap dibekukan (frozen food).", "Menghilangkan seluruh kewajiban pelabelan BPOM.", "Konsumen tidak perlu lagi menyimpannya di kulkas."], 
                    answer: 2, 
                    explanation: "Nugget dan sosis adalah bentuk processed food (olahan). Proses pencampuran bumbu, perebusan/penggorengan setengah matang, lalu dibekukan membuat masa simpannya lebih panjang dan praktis (value added)." 
                },
                { 
                    story: null, 
                    question: "Kefir adalah minuman susu fermentasi yang mirip dengan yogurt. Perbedaan utama kultur mikroorganisme pada Kefir dibandingkan Yogurt adalah...", 
                    options: ["Kefir hanya menggunakan bakteri asam laktat saja.", "Kefir menggunakan kombinasi bakteri probiotik dan ragi (yeast) yang membentuk 'biji kefir'.", "Kefir difermentasi menggunakan jamur tempe (Rhizopus).", "Yogurt menggunakan ragi pembuat roti (Saccharomyces cerevisiae).", "Kultur kefir tidak perlu diinkubasi sama sekali."], 
                    answer: 1, 
                    explanation: "Kefir difermentasi menggunakan biji kefir (kefir grains) yang merupakan matriks simbiosis kompleks antara bakteri asam laktat, bakteri asam asetat, dan khamir/ragi (yeast), menghasilkan sedikit gas dan alkohol alami." 
                },
                { 
                    story: null, 
                    question: "Seseorang membeli susu pasteurisasi di minimarket, lalu menyimpannya di meja makan pada suhu ruang selama 12 jam. Apa yang paling mungkin terjadi pada susu tersebut secara ilmiah?", 
                    options: ["Susu akan menjadi lebih murni dan menyehatkan.", "Susu akan berubah menjadi keju dengan sendirinya tanpa starter.", "Susu mengalami denaturasi protein oleh bakteri pembusuk yang tersisa karena pasteurisasi tidak membunuh spora, sehingga basi/menggumpal.", "Suhu ruang akan meningkatkan jumlah vitamin D dalam susu.", "Susu akan menguap seluruhnya menjadi gas."], 
                    answer: 2, 
                    explanation: "Pasteurisasi (pemanasan suhu sedang) hanya membunuh bakteri patogen, bukan spora dan bakteri pembusuk yang termofilik. Oleh karena itu, susu pasteurisasi WAJIB disimpan di kulkas (chiller). Di suhu ruang, bakteri akan cepat berkembang biak dan merusak susu." 
                },
                { 
                    story: null, 
                    question: "Pengasapan (smoking) adalah metode pengawetan klasik untuk ikan maupun daging. Komponen kimia dari asap kayu pembakaran yang memiliki efek anti-mikroba dan antioksidan untuk mengawetkan daging tersebut adalah...", 
                    options: ["Karbon monoksida dan uap air", "Gas hidrogen dan sulfur", "Senyawa fenol, formaldehida alami, dan asam organik", "Asam sulfat pekat", "Klorofluorokarbon (CFC)"], 
                    answer: 2, 
                    explanation: "Asap mengandung senyawa fenol, asam organik, dan aldehida (seperti formaldehida dalam kadar sangat kecil namun aman) yang berfungsi sebagai bakterisida, antioksidan (mencegah tengik lemak), dan pembentuk warna/rasa asap." 
                },
                { 
                    story: null, 
                    question: "Jika Farrel mengamati kerusakan pada produk makanan hewani kemasan yang ditandai dengan kemasan kaleng yang menggembung, analisis penyebab yang paling tepat adalah...", 
                    options: ["Kaleng terlalu tebal sehingga memuai karena suhu dingin.", "Produksi gas oleh bakteri anaerob pembusuk di dalam kaleng akibat sterilisasi yang tidak sempurna.", "Proses vakum pada saat pengemasan kaleng yang terlalu kuat.", "Kelebihan isi produk saat pengisian di pabrik.", "Interaksi kimiawi antara label kertas dan besi kaleng."], 
                    answer: 1, 
                    explanation: "Kaleng menggembung (swells) adalah tanda pasti adanya aktivitas mikroba pembentuk gas (seringkali bakteri anaerob pembusuk atau patogen seperti C. botulinum) karena proses sterilisasi di pabrik yang kurang optimal atau kemasan bocor halus." 
                },
                { 
                    story: null, 
                    question: "Dalam merencanakan pembuatan makanan hewani untuk diet khusus Keto (Ketogenik), prinsip bahan pangan yang dipegang erat oleh wirausahawan adalah meracik resep yang...", 
                    options: ["Tinggi Gula, Sedang Lemak, Rendah Protein.", "Tinggi Lemak, Protein Sedang, dan Sangat Rendah Karbohidrat.", "Hanya terdiri dari buah-buahan manis dan sayur.", "Serba digoreng dengan tepung gandum tebal.", "Tanpa Lemak (Zero Fat) dan Tinggi Karbohidrat Kompleks."], 
                    answer: 1, 
                    explanation: "Diet Ketogenik berprinsip untuk membuat tubuh masuk ke fase ketosis dengan mengubah sumber energi dari karbohidrat menjadi lemak. Proporsinya: Tinggi Lemak (70-80%), Protein moderat (20%), Karbohidrat sangat rendah (5%). Olahan daging/telur berlemak sangat cocok untuk diet ini." 
                }
            ];

            // 4. Memicu Render Ulang UI
            // Kita coba semua kemungkinan nama fungsi yang kamu pakai di file utama
            if (typeof renderMataPelajaran === 'function') renderMataPelajaran();
            else if (typeof loadSubjects === 'function') loadSubjects();
            else if (typeof renderMenu === 'function') renderMenu();
            else if (typeof initApp === 'function') initApp();
            
            console.log("✅ Berhasil: Data Prakarya & Kewirausahaan (PKWU) sudah dimuat!");
        }
        return true; // Sukses!
    }
    return false; // Belum siap, file utama mungkin masih loading
}

// EKSEKUSI PINTAR:
// 1. Coba jalankan sekarang (kalau script ini dimuat paling akhir)
if (!loadPKWUData()) {
    // 2. Jika variabel utamanya belum ada, kita tunggu sampai seluruh HTML & Script selesai di-load
    window.addEventListener('DOMContentLoaded', loadPKWUData);
    window.addEventListener('load', loadPKWUData);
    
    // 3. Cadangan Terakhir: Beri waktu 1 detik lalu coba paksa masuk
    setTimeout(() => {
        if (!loadPKWUData()) {
            console.warn("⚠️ Data PKWU gagal dimuat! Pastikan variabel 'subjects' dan 'quizData' dideklarasikan dengan 'let' atau 'var' secara GLOBAL (tidak di dalam fungsi/kurung kurawal) di file utamamu.");
        }
    }, 1000);
}
