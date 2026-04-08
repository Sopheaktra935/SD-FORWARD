// ─── DATA ───
const brands = [
    { name: 'Mindray', Image: 'img/brand/Mindray.png'},
    { name: 'Excbio', Image: 'img/brand/EXCBIO.png'},
    { name: 'Zijian', Image: 'img/brand/ZIJIAN.png'},
    { name: 'Forward', Image: 'img/brand/Forward.png'},
    { name: 'OUMAN', Image: 'img/brand/OUMAN.jpg'},
    // { name: 'Philips', Image: 'img/brand/Philips.png'},
    // { name: 'GE Healthcare', Image: 'img/brand/GE Healthcare.png'},
    // { name: 'Siemens', Image: 'img/siemens.png'},
];

const catIcons = {
    'Hematology': 'fas fa-tint',
    'Electrolyte Analyzer': 'fas fa-atom',
    'Full Auto Chemistry Analyzer': 'fas fa-flask',
    'Semi-Auto Chemistry Analyzer': 'fas fa-vial',
    'ECG Machine': 'fas fa-wave-square',
    'Patient Monitor': 'fas fa-heartbeat',
};

const productDescriptions = {
    'Excbio EH8300': {
        desc: 'The Excbio EH8300 is a high-performance 5-part differential hematology analyzer designed for clinical laboratories requiring high throughput and precision CBC analysis.',
        features: ['5-part differential WBC', 'Up to 80 samples/hour', '22 parameters reported', 'Automatic quality control', 'Large color touch screen', 'Low maintenance design']
    },
    'For-9001': {
        desc: 'The For-9001 hematology analyzer provides reliable 3-part differential blood cell analysis, suitable for small to medium-sized clinics and hospitals.',
        features: ['3-part differential WBC', '60 samples/hour throughput', '18 parameters', 'Reagent status monitoring', 'USB data export', 'Compact design']
    },
    'Mindray BC-3000': {
        desc: 'Mindray BC-3000 delivers accurate and efficient CBC + 3-part differential results with Mindray\'s trusted reliability and ease of use.',
        features: ['3-part differential', 'Automatic sample mixing', '18 parameters', 'Barcode scanner support', 'Bi-directional LIS interface', 'Low sample volume required']
    },
    'Excbio EA-5400': {
        desc: 'The Excbio EA-5400 Electrolyte Analyzer measures critical electrolyte levels including Na⁺, K⁺, Cl⁻, Ca²⁺ and pH with high accuracy.',
        features: ['Measures Na⁺, K⁺, Cl⁻, Ca²⁺, pH', 'Ion-selective electrode technology', 'Automatic calibration', 'Small sample volume (120μL)', 'Built-in thermal printer', 'Memory for 1000 results']
    },
    'Excbio EC 9002 B': {
        desc: 'A fully automated chemistry analyzer delivering high-speed photometric analysis for clinical biochemistry tests in busy hospital laboratories.',
        features: ['Up to 400 tests/hour', 'ISE module available', '180 sample positions', 'Auto-dilution and rerun', 'Continuous loading', 'LIS connectivity']
    },
    'Mindray': {
        desc: 'Mindray\'s full auto chemistry analyzer platform offers clinical laboratories exceptional speed, flexibility, and reliability with comprehensive test menus.',
        features: ['High throughput analysis', 'Open reagent system', 'Automated QC management', 'Intuitive software interface', 'Remote diagnostics capability', 'STAT mode available']
    },
    'Mini-CLIA RL-C200': {
        desc: 'The Mini-CLIA RL-C200 is a compact fully automated biochemistry analyzer ideal for small laboratories and point-of-care settings.',
        features: ['200 tests/hour', 'Compact benchtop design', '80 reagent positions', 'Automatic washing system', 'Photometric measurement', 'Easy reagent management']
    },
    'Excbio SK6100': {
        desc: 'The Excbio SK6100 chemistry analyzer combines high throughput with excellent analytical performance for comprehensive biochemistry testing.',
        features: ['600 tests/hour', 'ISE electrolyte module', 'Continuous sample loading', '45 onboard reagent positions', 'Advanced QC features', 'Multi-calibration support']
    },
    'ZIJIAN BAS-10s': {
        desc: 'The ZIJIAN BAS-10s is a reliable semi-automatic biochemistry analyzer for cost-effective clinical chemistry testing in routine laboratories.',
        features: ['Semi-automatic operation', 'Wide wavelength range 340–700nm', 'Kinetic and endpoint measurement', 'Built-in memory', 'Low maintenance cost', 'Simple operation interface']
    },
    'Excbio EC-9005': {
        desc: 'Excbio EC-9005 semi-auto chemistry analyzer offers professional accuracy with a straightforward workflow for medium-volume laboratories.',
        features: ['Open reagent platform', 'Multiple measurement modes', 'Temperature control 37°C', 'Built-in printer', 'Stable photometry', 'Cost-effective reagent use']
    },
    'PE-E12A ECG Machine 12 Channel': {
        desc: 'The PE-E12A is a professional 12-channel ECG machine offering high-resolution cardiac signal acquisition with automatic interpretation.',
        features: ['12-lead simultaneous acquisition', 'Auto ECG interpretation', '7-inch color LCD display', 'Thermal print output', 'Patient data management', 'Lightweight and portable']
    },
    'ECG-1206A': {
        desc: 'The ECG-1206A delivers clinical-grade 12-lead ECG recording with a large display and comprehensive rhythm analysis for hospital use.',
        features: ['12 simultaneous leads', 'Large 10-inch display', 'Built-in rhythm analysis', 'Digital signal filtering', 'USB/LAN connectivity', 'Long battery life']
    },
    'Defibrillator Monitor 7000D': {
        desc: 'The 7000D Defibrillator Monitor combines life-saving defibrillation with comprehensive patient monitoring for emergency and critical care environments.',
        features: ['Biphasic defibrillation up to 360J', 'ECG, SpO₂, NIBP, EtCO₂', 'AED and manual modes', 'Synchronized cardioversion', '10-inch color display', 'Long battery operation']
    },
    'S8 Monitor Defibrillator': {
        desc: 'The S8 is an advanced modular monitor defibrillator designed for ICU, operating rooms, and emergency departments requiring comprehensive monitoring.',
        features: ['Multi-parameter monitoring', 'High-energy defibrillation', 'Waveform data storage', 'Touch screen interface', 'Network connectivity', 'Modular parameter expansion']
    },
    'YK-8000D': {
        desc: 'The YK-8000D patient monitor provides reliable multi-parameter monitoring with clear display and user-friendly interface for general ward and ICU use.',
        features: ['ECG, SpO₂, NIBP, Temp, Resp', '15-inch HD color display', 'Alarm management system', 'Trend data analysis', 'Network LAN/WiFi', 'Bedside and central monitoring']
    },
};

const products = [
    { id: 1, name: 'Excbio EH8300', cat: 'Hematology', price: '$2,800', priceNum: 2800 },
    { id: 2, name: 'For-9001', cat: 'Hematology', price: '$1,950', priceNum: 1950 },
    { id: 3, name: 'Mindray BC-3000', cat: 'Hematology', price: '$3,200', priceNum: 3200 },
    { id: 4, name: 'Excbio EA-5400', cat: 'Electrolyte Analyzer', price: '$1,600', priceNum: 1600 },
    { id: 5, name: 'Excbio EC 9002 B', cat: 'Full Auto Chemistry Analyzer', price: '$15,000', priceNum: 15000 },
    { id: 6, name: 'Mindray', cat: 'Full Auto Chemistry Analyzer', price: '$18,500', priceNum: 18500 },
    { id: 7, name: 'Mini-CLIA RL-C200', cat: 'Full Auto Chemistry Analyzer', price: '$8,900', priceNum: 8900 },
    { id: 8, name: 'Excbio SK6100', cat: 'Full Auto Chemistry Analyzer', price: '$22,000', priceNum: 22000 },
    { id: 9, name: 'ZIJIAN BAS-10s', cat: 'Semi-Auto Chemistry Analyzer', price: '$1,200', priceNum: 1200 },
    { id: 10, name: 'Excbio EC-9005', cat: 'Semi-Auto Chemistry Analyzer', price: '$2,100', priceNum: 2100 },
    { id: 11, name: 'PE-E12A ECG Machine 12 Channel', cat: 'ECG Machine', price: '$1,800', priceNum: 1800 },
    { id: 12, name: 'ECG-1206A', cat: 'ECG Machine', price: '$2,400', priceNum: 2400 },
    { id: 13, name: 'Defibrillator Monitor 7000D', cat: 'Patient Monitor', price: '$9,500', priceNum: 9500 },
    { id: 14, name: 'S8 Monitor Defibrillator', cat: 'Patient Monitor', price: '$12,000', priceNum: 12000 },
    { id: 15, name: 'YK-8000D', cat: 'Patient Monitor', price: '$4,800', priceNum: 4800 },
];

const catIconsMap = {
    'Hematology': 'fas fa-tint',
    'Electrolyte Analyzer': 'fas fa-atom',
    'Full Auto Chemistry Analyzer': 'fas fa-flask',
    'Semi-Auto Chemistry Analyzer': 'fas fa-vial',
    'ECG Machine': 'fas fa-wave-square',
    'Patient Monitor': 'fas fa-heartbeat',
};

const productImages = {
    icon: {
        'Hematology': 'fas fa-vials',
        'Electrolyte Analyzer': 'fas fa-atom',
        'Full Auto Chemistry Analyzer': 'fas fa-flask',
        'Semi-Auto Chemistry Analyzer': 'fas fa-vial',
        'ECG Machine': 'fas fa-wave-square',
        'Patient Monitor': 'fas fa-heartbeat',
    }
};

// ─── BUILD BRAND SLIDER ───
// function buildBrands() {
//     const track = document.getElementById('brandSlider');
//     // Duplicate for infinite loop
//     const allBrands = [...brands, ...brands];
//     allBrands.forEach(b => {
//         const card = document.createElement('div');
//         card.className = 'brand-card';
//         card.innerHTML = `
//       <div class="brand-img-wrap">
//         <div class="brand-placeholder" style="color:${b.color}">
//           <i class="${b.icon}"></i>
//           <span style="font-size:11px;">${b.name}</span>
//         </div>
//       </div>
//       <div class="brand-name">${b.name}</div>
//     `;
//         track.appendChild(card);
//     });
// }
function buildBrands() {
    const track = document.getElementById('brandSlider');
    const allBrands = [...brands, ...brands];
    allBrands.forEach(b => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.innerHTML = `
            <div class="brand-img-wrap">
                <img src="${b.Image}" alt="${b.name}" />
            </div>
            <div class="brand-name">${b.name}</div>
        `;
        track.appendChild(card);
    });
}

// ─── BUILD PRODUCTS ───
function buildProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    const categories = [...new Set(products.map(p => p.cat))];

    categories.forEach(cat => {
        const catProds = products.filter(p => p.cat === cat);
        if (filter !== 'all' && filter !== cat) return;

        // Category header
        const header = document.createElement('div');
        header.className = 'cat-section-title';
        header.innerHTML = `<i class="${catIconsMap[cat]}"></i> ${cat}`;
        grid.appendChild(header);

        catProds.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card fade-up';
            const icon = productImages.icon[prod.cat] || 'fas fa-box';
            card.innerHTML = `
        <div class="product-img-wrap">
          <div class="product-placeholder">
            <i class="${icon}"></i>
            <span>${prod.name}</span>
          </div>
          <div class="product-badge">In Stock</div>
        </div>
        <div class="product-info">
          <div class="product-category">${prod.cat}</div>
          <div class="product-name">${prod.name}</div>
          <div class="product-price">${prod.price} <span>USD</span></div>
          <button class="btn-buy" onclick="openModal(${prod.id})">
            <i class="fas fa-shopping-cart"></i> Buy Now
          </button>
        </div>
      `;
            grid.appendChild(card);
        });
    });

    // Re-observe new cards
    observeFadeUps();
}

// ─── CATEGORY FILTER ───
document.getElementById('catSelect').addEventListener('change', e => {
    buildProducts(e.target.value);
});

// ─── MODAL ───
function openModal(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    const info = productDescriptions[prod.name] || {
        desc: `The ${prod.name} is a high-quality medical device designed for professional clinical use.`,
        features: ['Professional grade quality', 'Easy operation', 'Reliable performance', 'Warranty included', 'Technical support available']
    };

    const icon = productImages.icon[prod.cat] || 'fas fa-box';
    const bigIconHTML = `<i class="fas ${icon.replace('fas ', '')} big-icon"></i>`;
    const thumbIconHTML = `<i class="${icon}" style="font-size:22px;color:var(--gray-300)"></i>`;

    document.getElementById('modalCat').textContent = prod.cat;
    document.getElementById('modalName').textContent = prod.name;
    document.getElementById('modalPrice').innerHTML = `<span class="currency">$</span>${prod.price.replace('$', '')} <span style="font-size:14px;color:var(--gray-400);font-weight:400;">USD</span>`;
    document.getElementById('modalDesc').textContent = info.desc;

    const featList = document.getElementById('modalFeatures');
    featList.innerHTML = info.features.map(f => `<li>${f}</li>`).join('');

    // Main image
    document.getElementById('modalMainImg').innerHTML = bigIconHTML;

    // Thumbs (3 placeholders)
    const thumbs = document.getElementById('modalThumbs');
    thumbs.innerHTML = ['View 1', 'View 2', 'View 3'].map((label, i) => `
    <div class="modal-thumb ${i === 0 ? 'active' : ''}" onclick="selectThumb(this)">
      ${thumbIconHTML}
    </div>
  `).join('');

    const overlay = document.getElementById('modalOverlay');
    overlay.style.display = 'flex';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function selectThumb(el) {
    document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

function handleOverlayClick(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ─── NAVBAR ───
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── HAMBURGER ───
document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('mobileMenu').classList.toggle('open');
});

function closeMobile() {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
}

// ─── FADE UP OBSERVER ───
function observeFadeUps() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 60);
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => io.observe(el));
}

// ─── SLIDE NAVIGATION ───
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    updateButtons();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function updateButtons() {
    const prevBtn = document.querySelector('.slide-btn.prev');
    const nextBtn = document.querySelector('.slide-btn.next');
    if (slides.length <= 1) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

// ─── INIT ───
buildBrands();
buildProducts();
observeFadeUps();
showSlide(currentSlide);



