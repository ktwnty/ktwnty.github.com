// =========================================
// ABADI MOTOR - FINAL COMPLETE JAVASCRIPT
// ========================================= */

const CONFIG = {
    whatsappNumber: '6281234567890',
    email: 'info@abadimotor.com',
    phone: '+62 812-3456-7890',
    address: 'Jl. Ahmad Yani No. 45, Batam'
};

const carData = [
    {id:1,name:'Toyota Avanza 1.3 G',brand:'toyota',type:'mpv',year:2024,price:250000000,transmission:'Manual',fuel:'Bensin',mileage:'15.000 km',status:'available',image:'Toyota Avanza 1.3 G.png',description:'Toyota Avanza kondisi prima, terawat dengan baik',features:['7 Penumpang','ABS','Airbags','Power Steering','AC','Touchscreen']},
    {id:2,name:'Honda CR-V Turbo',brand:'honda',type:'suv',year:2024,price:650000000,transmission:'CVT',fuel:'Bensin',mileage:'5.000 km',status:'available',image:'Honda CR-V Turbo.jpeg',description:'Honda CR-V Turbo premium, full option',features:['Sunroof','Leather Seats','Honda Sensing','LED Headlights','Cruise Control','Parking Sensor']},
    {id:3,name:'Mitsubishi Pajero Sport',brand:'mitsubishi',type:'suv',year:2024,price:580000000,transmission:'Auto',fuel:'Diesel',mileage:'10.000 km',status:'rented',image:'Mitsubishi Pajero Sport.jpg',description:'Pajero Sport 4x4, tangguh di segala medan',features:['4WD','7 Seats','Paddle Shift','Premium Audio','360 Camera','Hill Start Assist']},
    {id:4,name:'Suzuki Ertiga Sport',brand:'suzuki',type:'mpv',year:2023,price:220000000,transmission:'Auto',fuel:'Bensin',mileage:'30.000 km',status:'available',image:'Suzuki Ertiga Sport.jpg',description:'Ertiga Sport irit dan nyaman untuk keluarga',features:['7 Seats','Sport Mode','Touchscreen','Rear Camera','Alloy Wheels','Fog Lamp']},
    {id:5,name:'Toyota Fortuner VRZ',brand:'toyota',type:'suv',year:2025,price:620000000,transmission:'Auto',fuel:'Bensin',mileage:'2.000 km',status:'available',image:'Toyota Fortuner VRZ.jpg',description:'Fortuner VRZ terbaru, like new condition',features:['Panoramic Roof','JBL Sound','LED Package','4WD','Smart Parking','Keyless Entry']},
    {id:6,name:'Honda Brio RS',brand:'honda',type:'hatchback',year:2023,price:180000000,transmission:'CVT',fuel:'Bensin',mileage:'20.000 km',status:'available',image:'Honda Brio RS.jpg',description:'Brio RS sporty dan irit BBM',features:['Alloy Wheels','Touchscreen','Rear Camera','Keyless','Sport Suspension','ABS+EBD']},
    {id:7,name:'Toyota Rush TRD',brand:'toyota',type:'suv',year:2024,price:280000000,transmission:'Auto',fuel:'Bensin',mileage:'12.000 km',status:'available',image:'Toyota Rush TRD.jpeg',description:'Rush TRD, cocok untuk adventure',features:['7 Seats','TRD Body Kit','Rear Camera','Fog Lamp','Audio System','Power Window']},
    {id:8,name:'Mitsubishi Xpander Cross',brand:'mitsubishi',type:'mpv',year:2024,price:290000000,transmission:'Auto',fuel:'Bensin',mileage:'8.000 km',status:'available',image:'Mitsubishi Xpander Cross.jpg',description:'Xpander Cross stylish dengan ground clearance tinggi',features:['7 Seats','Panoramic Roof','Touchscreen','Paddle Shift','LED','Cruise Control']},
    {id:9,name:'Daihatsu Xenia 1.3',brand:'daihatsu',type:'mpv',year:2022,price:180000000,transmission:'Manual',fuel:'Bensin',mileage:'45.000 km',status:'available',image:'Daihatsu Xenia 1.3.jpg',description:'Xenia terawat, siap pakai',features:['7 Seats','Power Window','Audio System','AC Double Blower','Central Lock','Dual Airbags']}
];

let displayedCars = 6;
let filteredCars = [...carData];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let selectedTenor = 36;
let currentFilter = 'all';

// INIT
document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    initBackgroundSlideshow();
    initCustomCursor();
    initNavigation();
    initTypingEffect();
    initScrollProgress();
    initBackToTop();
    initCounters();
    initParticles();
    initCatalog();
    initCalculator();
    initContactForm();
    initTestimonials();
    updateFavoriteCounter();

    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }

    console.log('🚀 Abadi Motor Website Fully Loaded!');
});

function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
}

function initBackgroundSlideshow() {
    const slides = document.querySelectorAll('.bg-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 2000);
}

function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');

    if (!cursor || !cursorDot) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        dotX += (mouseX - dotX) * 0.15;
        dotY += (mouseY - dotY) * 0.15;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const hoverElements = document.querySelectorAll('a, button, .nav-link, .btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '60px';
            cursor.style.height = '60px';
            cursor.style.borderWidth = '3px';
            cursorDot.style.width = '0px';
            cursorDot.style.height = '0px';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.borderWidth = '2px';
            cursorDot.style.width = '8px';
            cursorDot.style.height = '8px';
        });
    });
}

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navbar) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (navMenu) {
                navMenu.classList.remove('active');
                hamburger && hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const target = link.getAttribute('href');
            if (target && target.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(target);
                if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

function initTypingEffect() {
    const element = document.getElementById('typingText');
    if (!element) return;

    const texts = [
        'Jual Beli Mobil',
        'Rental Kendaraan',
        'Service Profesional',
        'Cicilan Mudah 0%',
        'Trade-In Terpercaya'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = texts[textIndex];

        if (isDeleting) {
            element.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 30 : 80;

        if (!isDeleting && charIndex === current.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 500;
        }

        setTimeout(type, speed);
    }

    type();
}

function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.dataset.target);
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 16);

                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(227, 24, 55, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `particleFloat ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// CATALOG
function initCatalog() {
    renderCatalog();
    initFilterTabs();
}

function renderCatalog() {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;

    catalogGrid.innerHTML = '';

    const carsToShow = filteredCars.slice(0, displayedCars);

    carsToShow.forEach(car => {
        const isFavorite = favorites.includes(car.id);
        const carCard = `
            <div class="car-card" data-type="${car.type}">
                <div class="car-image">
                    <img src="${car.image}" alt="${car.name}">
                    <div class="car-badge">${car.status === 'available' ? 'Tersedia' : 'Disewa'}</div>
                    <button class="favorite-icon ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${car.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="car-info">
                    <h3 class="car-title">${car.name}</h3>
                    <div class="car-price">Rp ${formatPrice(car.price)}</div>
                    <div class="car-specs">
                        <div class="spec-item">
                            <i class="fas fa-calendar"></i>
                            <span>${car.year}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-cog"></i>
                            <span>${car.transmission}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-gas-pump"></i>
                            <span>${car.fuel}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>${car.mileage}</span>
                        </div>
                    </div>
                    <div class="car-actions">
                        <button class="detail-btn" onclick="showCarDetail(${car.id})">
                            <i class="fas fa-info-circle"></i> Detail
                        </button>
                        <button class="whatsapp-btn" onclick="contactWhatsApp(${car.id})">
                            <i class="fab fa-whatsapp"></i> Chat
                        </button>
                    </div>
                </div>
            </div>
        `;
        catalogGrid.innerHTML += carCard;
    });

    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedCars >= filteredCars.length ? 'none' : 'block';
    }
}

function initFilterTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            currentFilter = tab.dataset.filter;
            filterCars();
        });
    });
}

function filterCars() {
    if (currentFilter === 'all') {
        filteredCars = [...carData];
    } else {
        filteredCars = carData.filter(car => car.type === currentFilter);
    }

    displayedCars = 6;
    renderCatalog();
}

function loadMoreCars() {
    displayedCars += 3;
    renderCatalog();
}

function showCarDetail(carId) {
    const car = carData.find(c => c.id === carId);
    if (!car) return;

    const modalBody = document.getElementById('carModalBody');
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <img src="${car.image}" alt="${car.name}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 20px; margin-bottom: 2rem;">
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">${car.name}</h2>
            <div style="font-size: 2rem; color: var(--primary); font-weight: 900; margin-bottom: 2rem;">
                Rp ${formatPrice(car.price)}
            </div>
            <p style="color: var(--gray-light); line-height: 1.8; margin-bottom: 2rem;">
                ${car.description}
            </p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem; text-align: left;">
                <div style="padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 15px;">
                    <strong>Transmisi:</strong> ${car.transmission}
                </div>
                <div style="padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 15px;">
                    <strong>Bahan Bakar:</strong> ${car.fuel}
                </div>
                <div style="padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 15px;">
                    <strong>Tahun:</strong> ${car.year}
                </div>
                <div style="padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 15px;">
                    <strong>Jarak Tempuh:</strong> ${car.mileage}
                </div>
                <div style="padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 15px;">
                    <strong>Status:</strong> ${car.status === 'available' ? 'Tersedia' : 'Disewa'}
                </div>
                <div style="padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 15px;">
                    <strong>Tipe:</strong> ${car.type.toUpperCase()}
                </div>
            </div>
            <div style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem;">Fitur Unggulan:</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                    ${car.features.map(f => `
                        <div style="display: flex; align-items: center; gap: 0.8rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--primary);"></i>
                            <span>${f}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <button onclick="contactWhatsApp(${car.id})" style="width: 100%; padding: 1.5rem; background: linear-gradient(135deg, #25D366, #128C7E); border: none; border-radius: 20px; color: white; font-size: 1.2rem; font-weight: 700; cursor: pointer;">
                <i class="fab fa-whatsapp"></i> Hubungi via WhatsApp
            </button>
        </div>
    `;

    openModal('carModal');
}

function contactWhatsApp(carId) {
    const car = carData.find(c => c.id === carId);
    const message = `Halo, saya tertarik dengan ${car.name} (Rp ${formatPrice(car.price)}). Bisa info lebih lanjut?`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// CALCULATOR
function initCalculator() {
    const carPrice = document.getElementById('carPrice');
    const dpRange = document.getElementById('dpRange');
    const dpValue = document.getElementById('dpValue');
    const tenorBtns = document.querySelectorAll('.tenor-btn');

    if (!carPrice || !dpRange) return;

    carPrice.addEventListener('input', () => {
        dpRange.max = carPrice.value;
        if (parseFloat(dpRange.value) > parseFloat(carPrice.value)) {
            dpRange.value = carPrice.value * 0.3;
        }
        updateDpValue();
        calculateLoan();
    });

    dpRange.addEventListener('input', () => {
        updateDpValue();
        calculateLoan();
    });

    tenorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tenorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedTenor = parseInt(btn.dataset.tenor);
            calculateLoan();
        });
    });

    function updateDpValue() {
        const price = parseFloat(carPrice.value);
        const dp = parseFloat(dpRange.value);
        const percent = ((dp / price) * 100).toFixed(1);
        dpValue.textContent = `Rp ${formatPrice(dp)} (${percent}%)`;
    }

    updateDpValue();
    calculateLoan();
}

function calculateLoan() {
    const carPrice = document.getElementById('carPrice');
    const dpRange = document.getElementById('dpRange');

    if (!carPrice || !dpRange) return;

    const price = parseFloat(carPrice.value);
    const dp = parseFloat(dpRange.value);
    const principal = price - dp;
    const annualRate = 0.08;
    const monthlyRate = annualRate / 12;
    const totalMonths = selectedTenor;

    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                          (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalPayment = dp + (monthlyPayment * totalMonths);
    const totalInterest = totalPayment - price;

    document.getElementById('monthlyPayment').textContent = `Rp ${formatPrice(Math.round(monthlyPayment))}`;
    document.getElementById('totalPayment').textContent = `Rp ${formatPrice(Math.round(totalPayment))}`;
    document.getElementById('totalInterest').textContent = `Rp ${formatPrice(Math.round(totalInterest))}`;
}

// CONTACT FORM
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const phone = document.getElementById('contactPhone').value;
        const subject = document.getElementById('contactSubject').value;
        const message = document.getElementById('contactMessage').value;

        const waMessage = `*Pesan dari Website*\n\nNama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nSubjek: ${subject}\n\nPesan:\n${message}`;

        window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waMessage)}`, '_blank');

        form.reset();
        alert('Terima kasih! Kami akan segera menghubungi Anda.');
    });
}

// TESTIMONIALS
function initTestimonials() {
    if (typeof Swiper === 'undefined') return;

    new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

// SEARCH
function searchCars() {
    const brand = document.getElementById('searchBrand')?.value || 'all';
    const type = document.getElementById('searchType')?.value || 'all';
    const year = document.getElementById('searchYear')?.value || 'all';
    const price = document.getElementById('searchPrice')?.value || 'all';

    displayedCars = 6;
    filteredCars = carData.filter(car => {
        let match = true;
        if (brand !== 'all' && car.brand !== brand) match = false;
        if (type !== 'all' && car.type !== type) match = false;
        if (year !== 'all' && car.year.toString() !== year) match = false;

        if (price !== 'all') {
            const ranges = {
                'under200': [0, 200000000],
                '200-400': [200000000, 400000000],
                'above400': [400000000, Infinity]
            };
            const [min, max] = ranges[price];
            if (car.price < min || car.price > max) match = false;
        }

        return match;
    });

    currentFilter = 'all';
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        if (tab.dataset.filter === 'all') {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    renderCatalog();

    const catalog = document.getElementById('catalog');
    if (catalog) {
        window.scrollTo({
            top: catalog.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// FAVORITES
function toggleFavorite(carId) {
    const index = favorites.indexOf(carId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(carId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteCounter();
    renderCatalog();
}

function updateFavoriteCounter() {
    const counter = document.getElementById('favoriteCounter');
    if (counter) {
        counter.textContent = favorites.length;
        counter.style.display = favorites.length > 0 ? 'flex' : 'none';
    }
}

function showFavorites() {
    const favCars = carData.filter(car => favorites.includes(car.id));

    if (favCars.length === 0) {
        alert('Belum ada mobil favorit. Klik icon ❤️ pada mobil untuk menambahkan!');
        return;
    }

    const favoriteList = document.getElementById('favoriteList');
    favoriteList.innerHTML = favCars.map(car => `
        <div style="display: flex; align-items: center; gap: 1.5rem; padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 15px; margin-bottom: 1rem;">
            <img src="${car.image}" alt="${car.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px;">
            <div style="flex: 1;">
                <h4 style="font-size: 1.3rem; margin-bottom: 0.5rem;">${car.name}</h4>
                <p style="color: var(--primary); font-size: 1.2rem; font-weight: 700;">Rp ${formatPrice(car.price)}</p>
            </div>
            <button onclick="toggleFavorite(${car.id}); showFavorites();" style="padding: 0.8rem 1.5rem; background: rgba(227,24,55,0.2); border: 2px solid var(--primary); border-radius: 10px; color: white; cursor: pointer;">
                <i class="fas fa-trash"></i> Hapus
            </button>
        </div>
    `).join('');

    openModal('favoriteModal');
}

// MODAL
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// UTILS
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID').format(price);
}

// PARTICLE ANIMATION
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        100% {
            transform: translateY(-200px) translateX(-50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// EXPORT
window.searchCars = searchCars;
window.toggleFavorite = toggleFavorite;
window.showFavorites = showFavorites;
window.loadMoreCars = loadMoreCars;
window.showCarDetail = showCarDetail;
window.contactWhatsApp = contactWhatsApp;
window.openModal = openModal;
window.closeModal = closeModal;

console.log('✨ All features loaded!');
console.log('🚗 Total cars:', carData.length);
console.log('💾 Favorites:', favorites.length);