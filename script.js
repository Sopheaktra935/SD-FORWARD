// ─── DATA ───
const brands = [
  { name: "Mindray", Image: "img/brand/Mindray.png" },
  { name: "Excbio", Image: "img/brand/EXCBIO.png" },
  { name: "Zijian", Image: "img/brand/ZIJIAN.png" },
  { name: "Forward", Image: "img/brand/Forward.png" },
  { name: "OUMAN", Image: "img/brand/OUMAN.jpg" },
];

const catIconsMap = {
  Hematology: "fas fa-tint",
  "Electrolyte Analyzer": "fas fa-atom",
  "Full Auto Chemistry Analyzer": "fas fa-flask",
  "Semi-Auto Chemistry Analyzer": "fas fa-vial",
  "ECG Machine": "fas fa-wave-square",
  "Patient Monitor": "fas fa-heartbeat",
};

// ─── PRODUCT IMAGES ───
// Each product has:
//   card: image shown on the product card
//   images: array of up to 4 images shown in modal [main, thumb1, thumb2, thumb3]
// Replace the paths below with your actual image paths.
const productImages = {
  "Excbio EH8300": {
    card: "img/product/Excbio EH8300_3.png",
    images: [
      "img/product/Excbio EH8300_3.png",
      "img/product/Excbio EH8300 .png",
      "img/product/Excbio EH8300_2.png",
      // "img/products/eh8300-4.png",
    ],
  },
  "For-9001": {
    card: "img/product/Forward FOR-9001_2.png",
    images: [
      "img/product/Forward FOR-9001_2.png",
      "img/product/Forward FOR-9001.png",
      "img/product/Forward FOR-9001_3.png",
    ],
  },
  "Mindray BC-3000": {
    card: "img/product/Mindray BC 3000Plus.png",
    images: [
      "img/product/Mindray BC 3000Plus.png",
      "img/products/bc-3000-2.png",
      "img/products/bc-3000-3.png",
      "img/products/bc-3000-4.png",
    ],
  },
  "Excbio EA-5400": {
    card: "img/product/Excbio EA-5400.png",
    images: [
      "img/product/Excbio EA-5400.png",
      "img/products/ea-5400-2.png",
      "img/products/ea-5400-3.png",
      "img/products/ea-5400-4.png",
    ],
  },
  "Excbio EC 9002 B": {
    card: "img/product/Excbio EC 9002 B Auto Chemistry Analyzer.png",
    images: [
      "img/product/Excbio EC 9002 B Auto Chemistry Analyzer.png",
      "img/products/ec-9002b-2.png",
      "img/products/ec-9002b-3.png",
      "img/products/ec-9002b-4.png",
    ],
  },
  Mindray: {
    card: "img/products/mindray-chem.png",
    images: [
      "img/products/mindray-chem.png",
      "img/products/mindray-chem-2.png",
      "img/products/mindray-chem-3.png",
      "img/products/mindray-chem-4.png",
    ],
  },
  "Mini-CLIA RL-C200": {
    card: "img/product/mini-clia ri-c2000.png",
    images: [
      "img/product/mini-clia ri-c2000.png",
      "img/products/rl-c200-2.png",
      "img/products/rl-c200-3.png",
      "img/products/rl-c200-4.png",
    ],
  },
  "Excbio SK6100": {
    card: "img/product/Excbio SK6100.png",
    images: [
      "img/product/Excbio SK6100.png",
      "img/products/sk6100-2.png",
      "img/products/sk6100-3.png",
      "img/products/sk6100-4.png",
    ],
  },
  "ZIJIAN BAS-10s": {
    card: "img/product/ZIJIAN BAS-10s.png",
    images: [
      "img/product/ZIJIAN BAS-10s.png",
      "img/products/bas-10s-2.png",
      "img/products/bas-10s-3.png",
      "img/products/bas-10s-4.png",
    ],
  },
  "Excbio EC-9005": {
    card: "img/product/Excbio EC-9005.png",
    images: [
      "img/product/Excbio EC-9005.png",
      "img/products/ec-9005-2.png",
      "img/products/ec-9005-3.png",
      "img/products/ec-9005-4.png",
    ],
  },
  "PE-E12A ECG Machine 12 Channel": {
    card: "img/product/PE-E12A ECG Machine 12 Channel.png",
    images: [
      "img/product/PE-E12A ECG Machine 12 Channel.png",
      "img/products/pe-e12a-2.png",
      "img/products/pe-e12a-3.png",
      "img/products/pe-e12a-4.png",
    ],
  },
  "ECG-1206A": {
    card: "img/product/ECG machine _ECG-1206A.png",
    images: [
      "img/product/ECG machine _ECG-1206A.png",
      "img/products/ecg-1206a-2.png",
      "img/products/ecg-1206a-3.png",
      "img/products/ecg-1206a-4.png",
    ],
  },
  "Defibrillator Monitor 7000D": {
    card: "img/product/Defibrillator Monitor 7000D.png",
    images: [
      "img/product/Defibrillator Monitor 7000D.png",
      "img/products/7000d-2.png",
      "img/products/7000d-3.png",
      "img/products/7000d-4.png",
    ],
  },
  "S8 Monitor Defibrillator": {
    card: "img/product/S8 Monitor Defibrillator.png",
    images: [
      "img/product/S8 Monitor Defibrillator.png",
      "img/products/s8-2.png",
      "img/products/s8-3.png",
      "img/products/s8-4.png",
    ],
  },
  "YK-8000D": {
    card: "img/product/YK-8000D.png",
    images: [
      "img/product/YK-8000D.png",
      "img/products/yk-8000d-2.png",
      "img/products/yk-8000d-3.png",
      "img/products/yk-8000d-4.png",
    ],
  },
};

const productDescriptions = {
  "Excbio EH8300": {
    desc: "The EXCBIO EH8300 is a high-performance automatic hematology analyzer designed for clinics, laboratories, and hospitals needing reliable and efficient Complete Blood Count (CBC) diagnostics. With a 3-part differential and 23-24 reportable parameters plus 3 histograms, this model balances speed, accuracy, and budget.",
    features: [
      "24 parameters including WBC, RBC, HGB, HCT, MCV, MCH, MCHC, PLT and others, with 3 histograms for detailed analysis.",
      "3-part WBC differential (neutrophils, lymphocytes, monocytes).",
      "Throughput: ~60 samples per hour  ideal for moderate-volume labs.",
      "Low sample volume: approx 9.6 µL whole blood.",
      "Large color touch screenMultiple sample modes: whole blood, pre-diluted capillary/venous blood.",
      "10-inch color touch screen for easy operation.",
      "Data output / connectivity: (confirm with supplier) USB / LAN / RS-232, LIS compatibility.",
    ],
  },
  "For-9001": {
    desc: "The For-9001 hematology analyzer provides reliable 3-part differential blood cell analysis, suitable for small to medium-sized clinics and hospitals.",
    features: [
      "3-part differential WBC",
      "60 samples/hour throughput",
      "18 parameters",
      "Reagent status monitoring",
      "USB data export",
      "Compact design",
    ],
  },
  "Mindray BC-3000": {
    desc: "Mindray BC-3000 delivers accurate and efficient CBC + 3-part differential results with Mindray's trusted reliability and ease of use.",
    features: [
      "3-part differential",
      "Automatic sample mixing",
      "18 parameters",
      "Barcode scanner support",
      "Bi-directional LIS interface",
      "Low sample volume required",
    ],
  },
  "Excbio EA-5400": {
    desc: "The Excbio EA-5400 Electrolyte Analyzer measures critical electrolyte levels including Na⁺, K⁺, Cl⁻, Ca²⁺ and pH with high accuracy.",
    features: [
      "Measures Na⁺, K⁺, Cl⁻, Ca²⁺, pH",
      "Ion-selective electrode technology",
      "Automatic calibration",
      "Small sample volume (120μL)",
      "Built-in thermal printer",
      "Memory for 1000 results",
    ],
  },
  "Excbio EC 9002 B": {
    desc: "A fully automated chemistry analyzer delivering high-speed photometric analysis for clinical biochemistry tests in busy hospital laboratories.",
    features: [
      "Up to 400 tests/hour",
      "ISE module available",
      "180 sample positions",
      "Auto-dilution and rerun",
      "Continuous loading",
      "LIS connectivity",
    ],
  },
  Mindray: {
    desc: "Mindray's full auto chemistry analyzer platform offers clinical laboratories exceptional speed, flexibility, and reliability with comprehensive test menus.",
    features: [
      "High throughput analysis",
      "Open reagent system",
      "Automated QC management",
      "Intuitive software interface",
      "Remote diagnostics capability",
      "STAT mode available",
    ],
  },
  "Mini-CLIA RL-C200": {
    desc: "The Mini-CLIA RL-C200 is a compact fully automated biochemistry analyzer ideal for small laboratories and point-of-care settings.",
    features: [
      "200 tests/hour",
      "Compact benchtop design",
      "80 reagent positions",
      "Automatic washing system",
      "Photometric measurement",
      "Easy reagent management",
    ],
  },
  "Excbio SK6100": {
    desc: "The Excbio SK6100 chemistry analyzer combines high throughput with excellent analytical performance for comprehensive biochemistry testing.",
    features: [
      "600 tests/hour",
      "ISE electrolyte module",
      "Continuous sample loading",
      "45 onboard reagent positions",
      "Advanced QC features",
      "Multi-calibration support",
    ],
  },
  "ZIJIAN BAS-10s": {
    desc: "The ZIJIAN BAS-10s is a reliable semi-automatic biochemistry analyzer for cost-effective clinical chemistry testing in routine laboratories.",
    features: [
      "Semi-automatic operation",
      "Wide wavelength range 340–700nm",
      "Kinetic and endpoint measurement",
      "Built-in memory",
      "Low maintenance cost",
      "Simple operation interface",
    ],
  },
  "Excbio EC-9005": {
    desc: "Excbio EC-9005 semi-auto chemistry analyzer offers professional accuracy with a straightforward workflow for medium-volume laboratories.",
    features: [
      "Open reagent platform",
      "Multiple measurement modes",
      "Temperature control 37°C",
      "Built-in printer",
      "Stable photometry",
      "Cost-effective reagent use",
    ],
  },
  "PE-E12A ECG Machine 12 Channel": {
    desc: "The PE-E12A is a professional 12-channel ECG machine offering high-resolution cardiac signal acquisition with automatic interpretation.",
    features: [
      "12-lead simultaneous acquisition",
      "Auto ECG interpretation",
      "7-inch color LCD display",
      "Thermal print output",
      "Patient data management",
      "Lightweight and portable",
    ],
  },
  "ECG-1206A": {
    desc: "The ECG-1206A delivers clinical-grade 12-lead ECG recording with a large display and comprehensive rhythm analysis for hospital use.",
    features: [
      "12 simultaneous leads",
      "Large 10-inch display",
      "Built-in rhythm analysis",
      "Digital signal filtering",
      "USB/LAN connectivity",
      "Long battery life",
    ],
  },
  "Defibrillator Monitor 7000D": {
    desc: "The 7000D Defibrillator Monitor combines life-saving defibrillation with comprehensive patient monitoring for emergency and critical care environments.",
    features: [
      "Biphasic defibrillation up to 360J",
      "ECG, SpO₂, NIBP, EtCO₂",
      "AED and manual modes",
      "Synchronized cardioversion",
      "10-inch color display",
      "Long battery operation",
    ],
  },
  "S8 Monitor Defibrillator": {
    desc: "The S8 is an advanced modular monitor defibrillator designed for ICU, operating rooms, and emergency departments requiring comprehensive monitoring.",
    features: [
      "Multi-parameter monitoring",
      "High-energy defibrillation",
      "Waveform data storage",
      "Touch screen interface",
      "Network connectivity",
      "Modular parameter expansion",
    ],
  },
  "YK-8000D": {
    desc: "The YK-8000D patient monitor provides reliable multi-parameter monitoring with clear display and user-friendly interface for general ward and ICU use.",
    features: [
      "ECG, SpO₂, NIBP, Temp, Resp",
      "15-inch HD color display",
      "Alarm management system",
      "Trend data analysis",
      "Network LAN/WiFi",
      "Bedside and central monitoring",
    ],
  },
};

const products = [
  {
    id: 1,
    name: "Excbio EH8300",
    cat: "Hematology",
    price: "$2,800",
    priceNum: 2800,
  },
  {
    id: 2,
    name: "For-9001",
    cat: "Hematology",
    price: "$1,950",
    priceNum: 1950,
  },
  {
    id: 3,
    name: "Mindray BC-3000",
    cat: "Hematology",
    price: "$3,200",
    priceNum: 3200,
  },
  {
    id: 4,
    name: "Excbio EA-5400",
    cat: "Electrolyte Analyzer",
    price: "$1,600",
    priceNum: 1600,
  },
  {
    id: 5,
    name: "Excbio EC 9002 B",
    cat: "Full Auto Chemistry Analyzer",
    price: "$15,000",
    priceNum: 15000,
  },
  {
    id: 6,
    name: "Mindray",
    cat: "Full Auto Chemistry Analyzer",
    price: "$18,500",
    priceNum: 18500,
  },
  {
    id: 7,
    name: "Mini-CLIA RL-C200",
    cat: "Full Auto Chemistry Analyzer",
    price: "$8,900",
    priceNum: 8900,
  },
  {
    id: 8,
    name: "Excbio SK6100",
    cat: "Full Auto Chemistry Analyzer",
    price: "$22,000",
    priceNum: 22000,
  },
  {
    id: 9,
    name: "ZIJIAN BAS-10s",
    cat: "Semi-Auto Chemistry Analyzer",
    price: "$1,200",
    priceNum: 1200,
  },
  {
    id: 10,
    name: "Excbio EC-9005",
    cat: "Semi-Auto Chemistry Analyzer",
    price: "$2,100",
    priceNum: 2100,
  },
  {
    id: 11,
    name: "PE-E12A ECG Machine 12 Channel",
    cat: "ECG Machine",
    price: "$1,800",
    priceNum: 1800,
  },
  {
    id: 12,
    name: "ECG-1206A",
    cat: "ECG Machine",
    price: "$2,400",
    priceNum: 2400,
  },
  {
    id: 13,
    name: "Defibrillator Monitor 7000D",
    cat: "Patient Monitor",
    price: "$9,500",
    priceNum: 9500,
  },
  {
    id: 14,
    name: "S8 Monitor Defibrillator",
    cat: "Patient Monitor",
    price: "$12,000",
    priceNum: 12000,
  },
  {
    id: 15,
    name: "YK-8000D",
    cat: "Patient Monitor",
    price: "$4,800",
    priceNum: 4800,
  },
];

// ─── BUILD BRAND SLIDER ───
function buildBrands() {
  const track = document.getElementById("brandSlider");
  const allBrands = [...brands, ...brands];
  allBrands.forEach((b) => {
    const card = document.createElement("div");
    card.className = "brand-card";
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
function buildProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  const categories = [...new Set(products.map((p) => p.cat))];

  categories.forEach((cat) => {
    const catProds = products.filter((p) => p.cat === cat);
    if (filter !== "all" && filter !== cat) return;

    // Category header
    const header = document.createElement("div");
    header.className = "cat-section-title";
    header.innerHTML = `<i class="${catIconsMap[cat]}"></i> ${cat}`;
    grid.appendChild(header);

    catProds.forEach((prod) => {
      const card = document.createElement("div");
      card.className = "product-card fade-up";

      // Use product image if available, else fallback icon
      const imgData = productImages[prod.name];
      const cardImgHTML = imgData
        ? `<img src="${imgData.card}" alt="${prod.name}" class="product-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="product-placeholder" style="display:none"><i class="${catIconsMap[prod.cat] || "fas fa-box"}"></i><span>${prod.name}</span></div>`
        : `<div class="product-placeholder"><i class="${catIconsMap[prod.cat] || "fas fa-box"}"></i><span>${prod.name}</span></div>`;

      card.innerHTML = `
        <div class="product-img-wrap">
          ${cardImgHTML}
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

  observeFadeUps();
}

// ─── CATEGORY FILTER ───
document.getElementById("catSelect").addEventListener("change", (e) => {
  buildProducts(e.target.value);
});

// ─── MODAL ───
function openModal(id) {
  const prod = products.find((p) => p.id === id);
  if (!prod) return;

  const info = productDescriptions[prod.name] || {
    desc: `The ${prod.name} is a high-quality medical device designed for professional clinical use.`,
    features: [
      "Professional grade quality",
      "Easy operation",
      "Reliable performance",
      "Warranty included",
      "Technical support available",
    ],
  };

  document.getElementById("modalCat").textContent = prod.cat;
  document.getElementById("modalName").textContent = prod.name;
  document.getElementById("modalPrice").innerHTML =
    `<span class="currency">$</span>${prod.price.replace("$", "")} <span style="font-size:14px;color:var(--gray-400);font-weight:400;">USD</span>`;
  document.getElementById("modalDesc").textContent = info.desc;

  const featList = document.getElementById("modalFeatures");
  featList.innerHTML = info.features.map((f) => `<li>${f}</li>`).join("");

  // ── Gallery ──
  const imgData = productImages[prod.name];
  const fallbackIcon = catIconsMap[prod.cat] || "fas fa-box";

  const mainImgEl = document.getElementById("modalMainImg");
  const thumbsEl = document.getElementById("modalThumbs");

  if (imgData && imgData.images && imgData.images.length > 0) {
    // Show first image as main
    mainImgEl.innerHTML = `<img id="modalMainImgTag" src="${imgData.images[0]}" alt="${prod.name}"
      onerror="this.parentElement.innerHTML='<i class=\\'${fallbackIcon} big-icon\\'></i>'"
      style="width:100%;height:100%;object-fit:contain;border-radius:8px;" />`;

    // Show up to 3 thumbnails (images[1], [2], [3])
    const thumbSrcs = imgData.images.slice(0, 4); // all 4 including main
    thumbsEl.innerHTML = thumbSrcs
      .map(
        (src, i) => `
        <div class="modal-thumb ${i === 0 ? "active" : ""}" onclick="selectThumb(this, '${src}', '${prod.name}', '${fallbackIcon}')">
          <img src="${src}" alt="View ${i + 1}"
            onerror="this.parentElement.innerHTML='<i class=\\'${fallbackIcon}\\' style=\\'font-size:22px;color:var(--gray-300)\\'></i>'"
            style="width:100%;height:100%;object-fit:contain;border-radius:4px;" />
        </div>`,
      )
      .join("");
  } else {
    // Fallback to icons
    mainImgEl.innerHTML = `<i class="${fallbackIcon} big-icon"></i>`;
    thumbsEl.innerHTML = ["View 1", "View 2", "View 3"]
      .map(
        (label, i) => `
        <div class="modal-thumb ${i === 0 ? "active" : ""}" onclick="selectThumb(this, null, '', '')">
          <i class="${fallbackIcon}" style="font-size:22px;color:var(--gray-300)"></i>
        </div>`,
      )
      .join("");
  }

  const overlay = document.getElementById("modalOverlay");
  overlay.style.display = "flex";
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

// ─── THUMBNAIL SELECT ───
function selectThumb(el, src, productName, fallbackIcon) {
  document
    .querySelectorAll(".modal-thumb")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");

  if (src) {
    document.getElementById("modalMainImg").innerHTML = `
      <img src="${src}" alt="${productName}"
        onerror="this.parentElement.innerHTML='<i class=\\'${fallbackIcon} big-icon\\'></i>'"
        style="width:100%;height:100%;object-fit:contain;border-radius:8px;" />`;
  }
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  overlay.style.display = "none";
  document.body.style.overflow = "";
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ─── NAVBAR ───
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

// ─── HAMBURGER ───
document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
  document.getElementById("mobileMenu").classList.toggle("open");
});

function closeMobile() {
  document.getElementById("hamburger").classList.remove("open");
  document.getElementById("mobileMenu").classList.remove("open");
}

// ─── FADE UP OBSERVER ───
function observeFadeUps() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 60);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll(".fade-up:not(.visible)")
    .forEach((el) => io.observe(el));
}

// ─── SLIDE NAVIGATION ───
let currentSlide = 0;
const slides = document.querySelectorAll(".slide-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
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
  const prevBtn = document.querySelector(".slide-btn.prev");
  const nextBtn = document.querySelector(".slide-btn.next");
  if (slides.length <= 1) {
    prevBtn && (prevBtn.disabled = true);
    nextBtn && (nextBtn.disabled = true);
  } else {
    prevBtn && (prevBtn.disabled = false);
    nextBtn && (nextBtn.disabled = false);
  }
}

// ─── INIT ───
buildBrands();
buildProducts();
observeFadeUps();
showSlide(currentSlide);
