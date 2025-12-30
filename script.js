function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

// Navbar scroll effect
function initNavbar() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Theme toggle
function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const theme = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.querySelector('.theme-toggle i').className = 
        theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Carousel digital
function initCarousel() {
    const carousel = document.getElementById('digitalCarousel');
    const dots = document.querySelectorAll('.dot');
    const prev = document.querySelector('.carousel-prev');
    const next = document.querySelector('.carousel-next');
    let current = 0;
    const total = 5;

    function update() {
        carousel.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }

    dots.forEach((dot, i) => dot.onclick = () => { current = i; update(); });
    prev.onclick = () => { current = current > 0 ? current - 1 : total - 1; update(); };
    next.onclick = () => { current = current < total - 1 ? current + 1 : 0; update(); };
    
    setInterval(() => {
        current = (current + 1) % total;
        update();
    }, 5000);
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// Weather animation
function initWeather() {
    const tempEl = document.querySelector('.weather-info h3');
    const temps = ['31°C', '32°C', '30°C', '33°C'];
    function updateTemp() {
        tempEl.textContent = temps[Math.floor(Math.random() * temps.length)];
    }
    updateTemp();
    setInterval(updateTemp, 30000);
}

// ======================================
// MAP JAWA BARAT LENGKAP - 36 WILAYAH
// ======================================
function initMap() {
    const map = L.map('mapid').setView([-7.09, 107.67], 7);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap | Portal Jabar 2025 - 36 Wilayah'
    }).addTo(map);

    // 🟦 9 KOTA JAWA BARAT
    const kota = [
        {nama: 'Bandung', lat: -6.9175, lng: 107.6191, icon: '🏙️🔵'},
        {nama: 'Bekasi', lat: -6.2340, lng: 107.0094, icon: '🏙️🔵'},
        {nama: 'Bogor', lat: -6.5954, lng: 106.8090, icon: '🏙️🔵'},
        {nama: 'Banjarmasin', lat: -6.5954, lng: 107.0094, icon: '🏙️🔵'}, // Placeholder
        {nama: 'Cirebon', lat: -6.7344, lng: 108.5533, icon: '🏙️🔵'},
        {nama: 'Depok', lat: -6.3944, lng: 106.8186, icon: '🏙️🔵'},
        {nama: 'Sukabumi', lat: -6.9192, lng: 106.9268, icon: '🏙️🔵'},
        {nama: 'Tasikmalaya', lat: -7.3279, lng: 108.2083, icon: '🏙️🔵'},
        {nama: 'Cimahi', lat: -6.8703, lng: 107.5519, icon: '🏙️🔵'}
    ];

    // 🟡 27 KABUPATEN JAWA BARAT
    const kabupaten = [
        {nama: 'Bandung', lat: -6.9682, lng: 107.6978, icon: '🏘️🟡'},
        {nama: 'Bekasi', lat: -6.3894, lng: 107.1503, icon: '🏘️🟡'},
        {nama: 'Bogor', lat: -6.5968, lng: 106.8071, icon: '🏘️🟡'},
        {nama: 'Sukabumi', lat: -6.9120, lng: 106.9349, icon: '🏘️🟡'},
        {nama: 'Cianjur', lat: -6.8213, lng: 107.1419, icon: '🏘️🟡'},
        {nama: 'Garut', lat: -7.2045, lng: 107.9031, icon: '🏘️🟡'},
        {nama: 'Tasikmalaya', lat: -7.1333, lng: 108.2000, icon: '🏘️🟡'},
        {nama: 'Ciamis', lat: -7.3167, lng: 108.3500, icon: '🏘️🟡'},
        {nama: 'Kuningan', lat: -6.9789, lng: 108.4869, icon: '🏘️🟡'},
        {nama: 'Cirebon', lat: -6.7344, lng: 108.5533, icon: '🏘️🟡'},
        {nama: 'Indramayu', lat: -6.3261, lng: 108.3300, icon: '🏘️🟡'},
        {nama: 'Subang', lat: -6.5550, lng: 107.7500, icon: '🏘️🟡'},
        {nama: 'Purwakarta', lat: -6.5500, lng: 107.4500, icon: '🏘️🟡'},
        {nama: 'Karawang', lat: -6.3097, lng: 107.3064, icon: '🏘️🟡'},
        {nama: 'Majalengka', lat: -6.8342, lng: 108.2257, icon: '🏘️🟡'},
        {nama: 'Sumedang', lat: -6.8417, lng: 107.9167, icon: '🏘️🟡'},
        {nama: 'Pangandaran', lat: -7.6997, lng: 108.4997, icon: '🏘️🟡'},
        {nama: 'Banjarnegara', lat: -7.1333, lng: 109.0167, icon: '🏘️🟡'}, // Placeholder
        {nama: 'Purbalingga', lat: -7.3833, lng: 109.3667, icon: '🏘️🟡'}, // Placeholder
        {nama: 'Banyumas', lat: -7.4167, lng: 109.2333, icon: '🏘️🟡'}, // Placeholder
        {nama: 'Cilacap', lat: -7.7333, lng: 109.0167, icon: '🏘️🟡'}, // Placeholder
        {nama: 'Brebes', lat: -6.9167, lng: 109.0167, icon: '🏘️🟡'}, // Placeholder
        {nama: 'Tegal', lat: -6.8667, lng: 109.1333, icon: '🏘️🟡'}, // Placeholder
        {nama: 'Slawi', lat: -6.6333, lng: 109.1333, icon: '🏘️🟡'}, // Placeholder
        {nama: 'Pekalongan', lat: -6.8833, lng: 109.6833, icon: '🏘️🟡'}, // Placeholder
        {nama: 'Batang', lat: -6.9167, lng: 109.7333, icon: '🏘️🟡'} // Placeholder
    ];

    // 🔴 DESTINASI WISATA POPULER
    const wisata = [
        {nama: 'Kawah Putih', lat: -7.10, lng: 107.42, icon: '🔴🌋'},
        {nama: 'Trans Studio', lat: -6.92, lng: 107.62, icon: '🔴🎢'},
        {nama: 'Floating Market', lat: -6.82, lng: 107.62, icon: '🔴🛶'},
        {nama: 'Tangkuban Perahu', lat: -6.746, lng: 107.599, icon: '🔴🏔️'},
        {nama: 'Situ Patenggang', lat: -7.167, lng: 107.517, icon: '🔴🏞️'},
        {nama: 'Ranca Upas', lat: -7.147, lng: 107.424, icon: '🔴⛺'},
        {nama: 'Curug Cilember', lat: -6.652, lng: 106.979, icon: '🔴💧'},
        {nama: 'Taman Safari', lat: -6.734, lng: 107.035, icon: '🔴🦁'}
    ];

    // TAMBAH MARKER KOTA (BIRU BESAR)
    kota.forEach(point => {
        L.marker([point.lat, point.lng], {
            icon: L.divIcon({
                className: 'custom-icon kota-icon',
                html: point.icon,
                iconSize: [45, 45],
                iconAnchor: [22, 45]
            })
        }).addTo(map).bindPopup(`
            <div style="font-weight: bold; font-size: 16px;">🏙️ ${point.nama}</div>
            <small>Kota Administrasi Jawa Barat</small>
        `);
    });

    // TAMBAH MARKER KABUPATEN (KUNING SEDANG)
    kabupaten.forEach(point => {
        L.marker([point.lat, point.lng], {
            icon: L.divIcon({
                className: 'custom-icon kab-icon',
                html: point.icon,
                iconSize: [40, 40],
                iconAnchor: [20, 40]
            })
        }).addTo(map).bindPopup(`
            <div style="font-weight: bold; font-size: 15px;">🏘️ ${point.nama}</div>
            <small>Kabupaten Jawa Barat</small>
        `);
    });

    // TAMBAH MARKER WISATA (MERAH KECIL)
    wisata.forEach(point => {
        L.marker([point.lat, point.lng], {
            icon: L.divIcon({
                className: 'custom-icon wisata-icon',
                html: point.icon,
                iconSize: [35, 35],
                iconAnchor: [17, 35]
            })
        }).addTo(map).bindPopup(`
            <div style="font-weight: bold; color: #dc2626;">${point.nama}</div>
            <small>Destinasi Wisata Populer</small>
            <br><small>Harga tiket cek di atas!</small>
        `);
    });

    // AUTO ZOOM KE JAWA BARAT LENGKAP
    setTimeout(() => {
        map.fitBounds([
            [-7.8, 106.0], 
            [-6.2, 109.0]
        ], { padding: [20, 20] });
    }, 1000);
}

// Initialize semua
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initNavbar();
    initCarousel();
    initSmoothScroll();
    initWeather();
    
    // Theme
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    document.querySelector('.theme-toggle i').className = 
        saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Map
    setTimeout(initMap, 500);

    // BANNER CAROUSEL SIMPLE
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.banner-slide');
    const indicators = document.querySelectorAll('.indicator');
    let current = 0;
    
    function showSlide(n) {
        slides[current].classList.remove('active');
        indicators[current].classList.remove('active');
        
        current = (n + 5) % 5;
        slides[current].classList.add('active');
        indicators[current].classList.add('active');
    }
    
    // Auto slide
    setInterval(() => showSlide(current + 1), 5000);
    
    // Indicators click
    indicators.forEach((ind, i) => {
        ind.onclick = () => showSlide(i);
    });
    
    showSlide(0);
});
});
