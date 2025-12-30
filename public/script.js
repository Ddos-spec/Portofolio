// Data Proyek untuk konten modal
const projectData = [
    // Proyek 1
    { role: "Bertanggung jawab penuh untuk memvisualisasikan data geografis kompleks menjadi sebuah grafik jaringan (force-directed graph) yang interaktif, sesuai dengan tantangan dari freeCodeCamp.", process: "Mengambil dataset JSON eksternal, lalu memproses dan merendernya menggunakan pustaka D3.js. Setiap negara direpresentasikan sebagai sebuah 'node' yang menampilkan benderanya, dan hubungan perbatasan antar negara digambarkan sebagai 'link'. Mengimplementasikan fitur drag, zoom, dan pan untuk eksplorasi jaringan yang intuitif.", learned: "Proyek ini secara signifikan meningkatkan pemahaman saya tentang manipulasi data asinkron (API calls), cara kerja force-directed graph di D3.js, serta teknik untuk mengintegrasikan elemen visual (seperti spritesheet bendera) ke dalam visualisasi data SVG." },
    // Proyek 2
    { role: "Mengembangkan aplikasi visualisasi data geospasial untuk memetakan semua pendaratan meteorit yang tercatat di seluruh dunia, berdasarkan spesifikasi proyek dari freeCodeCamp.", process: "Menggunakan data JSON dari API, kemudian memetakannya ke dalam peta dunia menggunakan pustaka D3.js dan TopoJSON. Ukuran setiap titik meteorit dibuat proporsional dengan massanya untuk representasi visual yang cepat dipahami. Menambahkan fungsionalitas tooltip yang muncul saat kursor diarahkan ke sebuah titik untuk menampilkan data tambahan.", learned: "Belajar secara mendalam tentang proyeksi geografis dan cara menggambar data titik (latitude/longitude) di atas peta menggunakan D3.js. Proyek ini juga mengasah kemampuan dalam merepresentasikan data kuantitatif (massa meteorit) secara visual dan membuat antarmuka yang informatif melalui interaksi pengguna (hover)." },
    // Proyek 3
    { role: "Merancang dan membangun sistem informasi manajemen laundry berbasis web. Bertanggung jawab penuh atas seluruh siklus pengembangan, mulai dari perancangan skema database, pengembangan sisi server (backend) dan sisi klien (frontend), hingga implementasi fitur-fitur utama seperti manajemen transaksi dan pembuatan laporan.", process: "Aplikasi dikembangkan dengan PHP native untuk logika backend dan MySQL sebagai basis data. Antarmuka pengguna dibangun menggunakan HTML, CSS (Bootstrap & Materialize), serta JavaScript (AJAX) untuk interaktivitas dinamis. Untuk fitur pembuatan laporan dan invoice, sistem mengintegrasikan pustaka spipu/html2pdf melalui Composer untuk mengonversi data HTML ke dalam format PDF.", learned: "Proyek ini meningkatkan pemahaman mendalam mengenai siklus pengembangan aplikasi web full-stack. Saya memperoleh keahlian praktis dalam merancang skema basis data, mengimplementasikan operasi CRUD, serta membangun sistem autentikasi dan manajemen sesi untuk hak akses pengguna yang bertingkat. Selain itu, saya juga menjadi terampil dalam mengintegrasikan pustaka pihak ketiga menggunakan Composer untuk menambahkan fungsionalitas kompleks seperti pembuatan laporan PDF." },
    // Proyek 4
    { role: "Bertanggung jawab penuh atas perancangan dan pengembangan aplikasi To-Do List yang fungsional dari awal, dengan fokus pada antarmuka pengguna yang bersih dan intuitif.", process: "Aplikasi dibangun menggunakan HTML untuk struktur, CSS untuk penataan visual termasuk mode gelap, dan JavaScript untuk logika inti. Fungsionalitas utamanya mencakup operasi CRUD (Create, Read, Update, Delete) pada daftar tugas. Data disimpan di localStorage browser untuk persistensi sesi. Fitur tambahan yang diimplementasikan adalah filter status tugas (all, completed, pending) dan bilah kemajuan (progress bar) visual.", learned: "Proyek ini secara signifikan meningkatkan pemahaman praktis mengenai manipulasi DOM dinamis dan event handling menggunakan JavaScript. Saya juga memperoleh pengalaman dalam manajemen status (state management) sisi klien dengan localStorage serta menerapkan struktur kode modular untuk meningkatkan keterbacaan dan kemudahan pemeliharaan proyek." },
    // Proyek 5
    { role: "Bertanggung jawab penuh atas proses rekayasa balik (reverse engineering) dan replikasi detail dari situs web resmi wimcycle.com. Proyek ini bertujuan untuk menciptakan salinan statis yang identik dengan aslinya, mencakup seluruh struktur halaman, aset visual, dan fungsionalitas front-end.", process: "Situs web direplikasi dengan mengunduh seluruh komponennya, termasuk struktur HTML, stylesheets (CSS), skrip (JavaScript), gambar, dan dokumen (PDF). Proses ini memastikan bahwa hierarki direktori dan penamaan file dipertahankan secara akurat sesuai dengan situs sumber. Tujuannya adalah untuk menganalisis dan mendokumentasikan arsitektur front-end dari sebuah platform e-commerce dan corporate yang sudah mapan dalam lingkungan offline.", learned: "Proyek ini memberikan pemahaman praktis yang mendalam mengenai arsitektur situs web berbasis WordPress yang kompleks. Saya memperoleh wawasan tentang bagaimana sebuah situs komersial mengelola ribuan aset dan dependensi. Selain itu, proyek ini mengasah kemampuan dalam analisis struktur DOM, penelusuran aset, dan pentingnya ketelitian dalam mereplikasi sebuah sistem digital untuk tujuan analisis dan pembelajaran." }
];

// Data untuk Story Viewer
const stories = ['ig story1.mp4', 'ig story2.mp4', 'ig story3.mp4'];
let currentStoryIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    
    // =================================================================
    // THEME TOGGLE LOGIC
    // =================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    const htmlElement = document.documentElement;

    // Check for saved user preference, if any, on load
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            if (themeIcon) {
                themeIcon.classList.toggle('fa-moon');
                themeIcon.classList.toggle('fa-sun');
            }
        });
    }

    // =================================================================
    // TYPING EFFECT
    // =================================================================
    const typingElement = document.getElementById('typing-text');
    const phrases = ["Frontend Developer", "UI/UX Enthusiast", "Fast Learner", "Problem Solver"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        if (!typingElement) return;

        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Lebih cepat saat menghapus
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Normal saat mengetik
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Tunggu sebentar setelah selesai mengetik
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Tunggu sebentar sebelum mengetik kata baru
        }

        setTimeout(type, typeSpeed);
    }

    // Mulai efek typing
    if (typingElement) type();

    // Daftarkan plugin GSAP


    // =================================================================
    // NAVIGASI (Updated for Native Smooth Scroll)
    // =================================================================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    // Close mobile menu when a link is clicked
    const allNavLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a, .cta-button');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && mobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // =================================================================
    // INISIALISASI LIBRARY & FITUR SECTION
    // =================================================================
    new Swiper('.project-swiper', {
        loop: true, centeredSlides: true, spaceBetween: 30,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    viewMoreBtn?.addEventListener('click', () => {
        document.getElementById('certificatesGrid')?.classList.add('expanded');
        document.getElementById('viewMoreOverlay')?.classList.add('hidden');
    });

    // =================================================================
    // STORY VIEWER LOGIC
    // =================================================================
    const profilePicture = document.querySelector('.profile-picture');
    const storyViewer = document.getElementById('storyViewer');
    const storyVideo = document.getElementById('storyVideo');
    const storyProgressBarsContainer = document.getElementById('storyProgressBars');
    const storyClose = document.getElementById('storyClose');
    const storyNavPrev = document.getElementById('storyNavPrev');
    const storyNavNext = document.getElementById('storyNavNext');

    function playStory(index) {
        if (index < 0 || index >= stories.length) {
            closeStoryViewer();
            return;
        }
        currentStoryIndex = index;
        
        const progressBars = storyProgressBarsContainer.querySelectorAll('.progress-bar-fill');
        progressBars.forEach((bar, i) => {
            if (i < index) bar.style.width = '100%';
            else bar.style.width = '0%';
        });

        storyVideo.src = stories[index];
        storyVideo.play().catch(error => console.error("Video play failed:", error));
    }

    function nextStory() {
        playStory(currentStoryIndex + 1);
    }

    function prevStory() {
        playStory(currentStoryIndex - 1);
    }
    
    function updateProgressBar() {
        if (!storyVideo.duration) return;
        const progress = (storyVideo.currentTime / storyVideo.duration) * 100;
        const progressBarFill = storyProgressBarsContainer.querySelectorAll('.progress-bar-fill')[currentStoryIndex];
        if (progressBarFill) {
            progressBarFill.style.width = `${progress}%`;
        }
    }
    
    function openStoryViewer() {
        storyProgressBarsContainer.innerHTML = '';
        stories.forEach(() => {
            const barContainer = document.createElement('div');
            barContainer.className = 'progress-bar';
            const barFill = document.createElement('div');
            barFill.className = 'progress-bar-fill';
            barContainer.appendChild(barFill);
            storyProgressBarsContainer.appendChild(barContainer);
        });
        
        storyViewer.classList.add('active');
        document.body.classList.add('modal-open');
        playStory(0);
    }

    function closeStoryViewer() {
        storyViewer.classList.remove('active');
        document.body.classList.remove('modal-open');
        storyVideo.pause();
        storyVideo.src = '';
    }

    if (profilePicture) profilePicture.addEventListener('click', openStoryViewer);
    if (storyClose) storyClose.addEventListener('click', closeStoryViewer);
    if (storyVideo) {
        storyVideo.addEventListener('timeupdate', updateProgressBar);
        storyVideo.addEventListener('ended', nextStory);
    }
    if (storyNavNext) storyNavNext.addEventListener('click', nextStory);
    if (storyNavPrev) storyNavPrev.addEventListener('click', prevStory);


    // =================================================================
    // MODAL PROYEK LOGIC
    // =================================================================
    const projectModal = document.getElementById('projectModal');
    const modalCloseBtn = document.getElementById('modalClose');
    let currentModalProjectIndex = 0;

    function openProjectModal(index) {
        if (index < 0 || index >= projectData.length) return;
        updateProjectModalContent(index);
        projectModal?.classList.add('active');
        document.body.classList.add('modal-open');
    }

    function closeProjectModal() {
        projectModal?.classList.remove('active');
        if (!storyViewer.classList.contains('active')) {
             document.body.classList.remove('modal-open');
        }
    }

    // --- FUNGSI YANG DIPERBAIKI ---
    function updateProjectModalContent(index) {
        currentModalProjectIndex = index;
        const project = projectData[index];

        // CARA BARU & LEBIH AMAN MENCARI GAMBAR
        // Kita cari slide asli berdasarkan atribut 'data-swiper-slide-index'
        const realSlide = document.querySelector(`.swiper-slide[data-swiper-slide-index="${index}"]`);
        
        if (project && realSlide) {
            const imageInSlide = realSlide.querySelector('.project-card img');
            
            document.getElementById('modalRole').textContent = project.role;
            document.getElementById('modalProcess').textContent = project.process;
            document.getElementById('modalLearned').textContent = project.learned;
            if (imageInSlide) {
                document.getElementById('modalProjectImage').src = imageInSlide.src;
            }
        }
    }
    
    document.querySelectorAll('.project-button-detail').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectIndex = parseInt(this.getAttribute('data-project'));
            openProjectModal(projectIndex);
        });
    });

    if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    document.getElementById('modalPrev')?.addEventListener('click', () => {
        const newIndex = (currentModalProjectIndex - 1 + projectData.length) % projectData.length;
        updateProjectModalContent(newIndex);
    });
    document.getElementById('modalNext')?.addEventListener('click', () => {
        const newIndex = (currentModalProjectIndex + 1) % projectData.length;
        updateProjectModalContent(newIndex);
    });

    // --- FORM SUBMIT SIMULATION REMOVED FOR NETLIFY ---
});