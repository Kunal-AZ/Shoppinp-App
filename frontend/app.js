const heroImages = [
  "images/home-slide0.jpg",
  "images/home-slide1.jpg",
  "images/home-slide2.jpg",
  "images/banner1.jpg"
];

const products = [
  {
    id: 1,
    title: "Cinder Wool Coat",
    price: 6890,
    gender: "women",
    category: "outerwear",
    image: "images/products/0-0.jpg",
    images: ["images/products/0-0.jpg", "images/products/0-1.jpg", "images/products/0-2.jpg"],
    badge: "Best Seller",
    shortDescription: "Structured winter coat with a clean city silhouette.",
    description: "A polished outerwear layer with a soft wool feel, button-front closure, and a tailored shape that works from office hours to evening plans.",
    details: ["Regular fit", "Button front", "Soft textured finish", "Ideal for workwear layering"]
  },
  {
    id: 2,
    title: "Studio Trench",
    price: 7490,
    gender: "women",
    category: "outerwear",
    image: "images/products/1-0.jpg",
    images: ["images/products/1-0.jpg", "images/products/1-1.jpg", "images/products/1-2.jpg"],
    badge: "New In",
    shortDescription: "Modern trench styling with a lightweight flow.",
    description: "This trench brings a sharper retail look to the catalog with a relaxed drape, waist belt, and versatile neutral color palette.",
    details: ["Relaxed fit", "Waist tie", "Lightweight fabric", "Travel-ready layer"]
  },
  {
    id: 3,
    title: "Blush Garden Dress",
    price: 4590,
    gender: "women",
    category: "dresses",
    image: "images/products/2-0.jpg",
    images: ["images/products/2-0.jpg"],
    badge: "Fresh Print",
    shortDescription: "Soft floral dressing with a light romantic finish.",
    description: "A printed day dress designed to bring a softer mood to the catalog, with airy fabric, gentle gathers, and easy all-day styling.",
    details: ["Lightweight feel", "Floral print", "Relaxed silhouette", "Easy day-to-evening wear"]
  },
  {
    id: 4,
    title: "Ivory Daily Shirt",
    price: 3490,
    gender: "women",
    category: "tops",
    image: "images/products/3-0.jpg",
    images: ["images/products/3-0.jpg", "images/products/3-1.jpg", "images/products/3-2.jpg"],
    badge: "Classic",
    shortDescription: "An elevated essential for everyday wardrobes.",
    description: "A crisp shirt with a clean collar and easy shape that fits into casual, office, and occasion styling with minimal effort.",
    details: ["Classic collar", "Easy-care fabric", "Smart casual styling", "Soft hand feel"]
  },
  {
    id: 5,
    title: "Nightfall Blazer",
    price: 5990,
    gender: "women",
    category: "occasion",
    image: "images/products/4-0.jpg",
    images: ["images/products/4-0.jpg", "images/products/4-1.jpg", "images/products/4-2.jpg"],
    badge: "Editor Pick",
    shortDescription: "A tailored blazer for dressed-up evenings.",
    description: "Designed to create a fashion-forward retail look, this blazer pairs structured shoulders with a sleek silhouette for sharper styling.",
    details: ["Tailored fit", "Clean lapel design", "Occasion-ready finish", "Works with co-ord styling"]
  },
  {
    id: 6,
    title: "Gallery Knit",
    price: 4290,
    gender: "women",
    category: "tops",
    image: "images/products/5-0.jpg",
    images: ["images/products/5-0.jpg", "images/products/5-1.jpg", "images/products/5-2.jpg"],
    badge: "Soft Knit",
    shortDescription: "Minimal knitwear with a refined shape.",
    description: "A soft-touch knit essential made for clean layering, everyday comfort, and a premium-looking storefront presentation.",
    details: ["Soft knit texture", "Regular fit", "Layering essential", "Easy to style"]
  },
  {
    id: 7,
    title: "Sunbeam Tailored Suit",
    price: 7990,
    gender: "men",
    category: "occasion",
    image: "images/products/6-0.jpg",
    images: ["images/products/6-0.jpg", "images/products/6-1.jpg", "images/products/6-2.jpg"],
    badge: "Statement Set",
    shortDescription: "Bold tailoring that brings a bright editorial look.",
    description: "A striking tailored set with clean lines, structured finishing, and standout color that gives the storefront a stronger occasionwear edit.",
    details: ["Tailored silhouette", "Statement color", "Structured finish", "Event-ready styling"]
  },
  {
    id: 8,
    title: "Golden Escape Jumpsuit",
    price: 6190,
    gender: "women",
    category: "occasion",
    image: "images/products/7-0.jpg",
    images: ["images/products/7-0.jpg", "images/products/7-1.jpg", "images/products/7-2.jpg"],
    badge: "Vacation Edit",
    shortDescription: "An easy statement jumpsuit with warm getaway energy.",
    description: "Designed for festive plans and holiday styling, this jumpsuit adds playful shape, standout color, and a one-piece polished finish.",
    details: ["One-piece styling", "Soft structured fit", "Travel-friendly look", "Occasion-ready silhouette"]
  },
  {
    id: 9,
    title: "After Hours Dress",
    price: 8290,
    gender: "women",
    category: "dresses",
    image: "images/products/8-0.jpg",
    images: ["images/products/8-0.jpg", "images/products/8-1.jpg", "images/products/8-2.jpg"],
    badge: "Party Ready",
    shortDescription: "A fluid dress designed for standout evenings.",
    description: "An occasion piece with flowing structure, soft sheen, and an event-ready silhouette that strengthens the premium storefront feel.",
    details: ["Occasion fit", "Elegant drape", "Evening texture", "Statement styling"]
  },
  {
    id: 10,
    title: "Emerald Coast Maxi",
    price: 7090,
    gender: "women",
    category: "dresses",
    image: "images/products/9-0.jpg",
    images: ["images/products/9-0.jpg", "images/products/9-1.jpg", "images/products/9-2.jpg"],
    badge: "Resort Ready",
    shortDescription: "A sweeping printed maxi for standout summer dressing.",
    description: "This full-length dress adds movement, print, and a more elevated occasion mood, making it a strong fit for festive and resort-led edits.",
    details: ["Maxi length", "Printed finish", "Cutout detail", "Flowing silhouette"]
  },
  {
    id: 11,
    title: "City Layer Vest",
    price: 3890,
    gender: "women",
    category: "outerwear",
    image: "images/products/10-0.jpg",
    images: ["images/products/10-0.jpg", "images/products/10-1.jpg", "images/products/10-2.jpg", "images/products/10-3.jpg"],
    badge: "Layering",
    shortDescription: "A flexible layering vest for transitional weather.",
    description: "A street-to-smart layering piece with a practical feel, modern cut, and enough structure to sit confidently inside the catalog.",
    details: ["Layering-friendly", "Sleeveless structure", "Urban styling", "Lightweight build"]
  },
  {
    id: 12,
    title: "Rose Wrap Mini",
    price: 4890,
    gender: "women",
    category: "dresses",
    image: "images/products/11-0.jpg",
    images: ["images/products/11-0.jpg", "images/products/11-1.jpg", "images/products/11-2.jpg"],
    badge: "Date Night",
    shortDescription: "Printed wrap styling with a soft party-ready drape.",
    description: "A playful mini dress with a wrap front, fluid sleeves, and a polished floral print that suits day events and evening plans alike.",
    details: ["Wrap-style shape", "Mini length", "Long sleeves", "Soft printed fabric"]
  },
  {
    id: 13,
    title: "Coastal Graphic Kurta",
    price: 3290,
    gender: "men",
    category: "tops",
    image: "images/products/12-0.jpg",
    images: ["images/products/12-0.jpg", "images/products/12-1.jpg", "images/products/12-3.jpg"],
    badge: "Easy Wear",
    shortDescription: "A relaxed printed kurta-inspired top for everyday wear.",
    description: "A lightweight casual top with a clean neckline, subtle statement print, and easy comfort that broadens the catalog with a more laid-back option.",
    details: ["Relaxed fit", "Graphic print accent", "Breathable fabric feel", "Casual everyday styling"]
  },
  {
    id: 14,
    title: "Tailored Satin Set",
    price: 7690,
    gender: "women",
    category: "occasion",
    image: "images/products/13-1.jpg",
    images: ["images/products/13-0.avif", "images/products/13-1.jpg", "images/products/13-2.jpg"],
    badge: "Limited Drop",
    shortDescription: "Satin co-ord styling with elevated polish.",
    description: "A striking set for statement dressing, with a subtle sheen, stronger presence, and a premium retail mood similar to curated festive edits.",
    details: ["Co-ord inspired look", "Smooth satin finish", "Dressy silhouette", "Limited drop styling"]
  }
];

const latestCollection = [
  {
    title: "Spring Transit",
    subtitle: "Layered neutrals for weekday movement",
    image: "images/lookbook4.jpg",
    price: 6890
  },
  {
    title: "After Dark",
    subtitle: "Clean evening looks with polished textures",
    image: "images/lookbook5.jpg",
    price: 5990
  },
  {
    title: "Soft Structure",
    subtitle: "Everyday staples with sharper tailoring",
    image: "images/lookbook2.jpg",
    price: 3490
  }
];

const pageProducts = {
  home: products.slice(0, 4),
  collections: products,
  latest: products,
  arrivals: products,
  browse: products
};

const footerColumns = [
  {
    title: "Women",
    links: ["Dresses", "Tops", "Outerwear", "Occasion Wear", "Accessories"]
  },
  {
    title: "Men",
    links: ["Shirts", "Kurtas", "Tailored Looks", "Outerwear", "Essentials"]
  },
  {
    title: "Explore",
    links: ["New Arrivals", "Best Sellers", "Workwear", "Partywear", "Summer Styles", "Winter Layers"]
  },
  {
    title: "Support",
    links: ["About Us", "Track Order", "FAQs", "Customer Support", "Returns & Exchange Policy", "Shipping Policy"]
  }
];

const infoPages = {
  "about-us": "Sitara Grace is a fashion shopping experience for both women and men, focused on cleaner browsing and a smoother cart-to-payment flow.",
  "track-order": "Track your order with shipment updates, dispatch tracking, and delivery progress from checkout to doorstep.",
  faqs: "Browse quick answers about orders, sizing, cart behavior, returns, and delivery support.",
  "customer-support": "Need help with your order or product selection? This page is the support destination for shopper questions.",
  "returns-exchange-policy": "Read the return and exchange guidelines for eligible products, timelines, and support steps.",
  "shipping-policy": "See shipping timelines, dispatch rules, and expected delivery windows for your selected products.",
  "privacy-policy": "We value customer privacy and use data only to support browsing, shopping, order processing, and service communication.",
  "terms-conditions": "These terms outline shopping conditions, cart handling, product browsing, and service use across the website."
};

const CART_STORAGE_KEY = "project3-cart";

const heroImageEl = document.getElementById("hero-image");
const nextHeroButton = document.getElementById("next-hero");
const productGridEl = document.getElementById("product-grid");
const latestGridEl = document.getElementById("latest-grid");
const filtersEl = document.getElementById("filters");
const cartItemsEl = document.getElementById("cart-items");
const summaryCountEl = document.getElementById("summary-count");
const summarySubtotalEl = document.getElementById("summary-subtotal");
const proceedToCartEls = document.querySelectorAll("[data-proceed-cart]");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const productDetailEl = document.getElementById("product-detail");
const toastEl = document.getElementById("cart-toast");
const siteFooterEl = document.getElementById("site-footer");
const browseHeaderEl = document.getElementById("browse-header");
const browseDescriptionEl = document.getElementById("browse-description");
const infoTitleEl = document.getElementById("info-title");
const infoDescriptionEl = document.getElementById("info-description");
const searchInputs = document.querySelectorAll("[data-site-search]");
const genderSwitcherEls = document.querySelectorAll("[data-gender-switcher]");
const paymentMethodEl = document.getElementById("payment-method");
const paymentPromptEl = document.getElementById("payment-prompt");
const cardFieldsEl = document.getElementById("card-fields");
const upiFieldsEl = document.getElementById("upi-fields");
const bankFieldsEl = document.getElementById("bank-fields");
const codFieldsEl = document.getElementById("cod-fields");
const loginFormEl = document.getElementById("login-form");
const registerFormEl = document.getElementById("register-form");
const payNowButtonEl = document.getElementById("pay-now-button");
const loginStatusEl = document.getElementById("login-status");
const registerStatusEl = document.getElementById("register-status");
const paymentFormStatusEl = document.getElementById("payment-form-status");
const paymentNameInputEl = document.getElementById("payment-name");
const paymentPhoneInputEl = document.getElementById("payment-phone");
const cardNumberInputEl = document.getElementById("card-number");
const cardHolderInputEl = document.getElementById("card-holder");
const cardExpiryInputEl = document.getElementById("card-expiry");
const cardCvvInputEl = document.getElementById("card-cvv");
const upiIdInputEl = document.getElementById("upi-id");
const bankNameInputEl = document.getElementById("bank-name");
const successMessageEl = document.getElementById("success-message");
const orderSuccessDetailsEl = document.getElementById("order-success-details");
const profileCardEl = document.getElementById("profile-card");
const headerActionsEl = document.querySelector(".header-actions");

let heroIndex = 0;
let cart = loadCart();
let currentFilter = "all";
let currentGenderFilter = "all";
let currentSearch = "";
const AUTH_STORAGE_KEY = "aurelia-muse-user";
const LAST_ORDER_STORAGE_KEY = "sitara-grace-last-order";
const CONTACT_API_URL = new URL("../backend/contact.php", window.location.href);
const AUTH_API_URL = new URL("../backend/auth.php", window.location.href);
const CHECKOUT_API_URL = new URL("../backend/checkout.php", window.location.href);

function slugify(text) {
  return text.toLowerCase().replace(/&/g, "and").replace(/,/g, "").replace(/\s+/g, "-");
}

function loadCart() {
  try {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    return [];
  }
}

function getCurrentUser() {
  try {
    const savedUser = window.localStorage.getItem(AUTH_STORAGE_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  } catch (error) {
    return null;
  }
}

function saveCurrentUser(user) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

function clearCurrentUser() {
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}

function saveCart() {
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function clearCart() {
  cart = [];
  window.localStorage.removeItem(CART_STORAGE_KEY);
}

function saveLastOrder(order) {
  window.localStorage.setItem(LAST_ORDER_STORAGE_KEY, JSON.stringify(order));
}

function loadLastOrder() {
  try {
    const savedOrder = window.localStorage.getItem(LAST_ORDER_STORAGE_KEY);
    return savedOrder ? JSON.parse(savedOrder) : null;
  } catch (error) {
    return null;
  }
}

function clearLastOrder() {
  window.localStorage.removeItem(LAST_ORDER_STORAGE_KEY);
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function getProductById(id) {
  return products.find((item) => item.id === id);
}

function getProductUrl(id) {
  return `product.html?id=${id}`;
}

function getCartTotals() {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  return { itemCount, subtotal };
}

function updateCartCountDisplays() {
  const { itemCount } = getCartTotals();
  document.querySelectorAll("[data-cart-count]").forEach((element) => {
    element.textContent = itemCount;
  });
}

function renderHeaderActions() {
  if (!headerActionsEl) {
    return;
  }

  const user = getCurrentUser();
  if (!user) {
    headerActionsEl.innerHTML = `
      <a class="auth-link" href="login.html">Login</a>
      <a class="auth-link" href="register.html">Register</a>
      <a class="nav-cta" href="cart.html">Cart <span class="cart-badge" data-cart-count>0</span></a>
    `;
    return;
  }

  const firstName = user.name.split(" ").filter(Boolean)[0] || "Profile";
  headerActionsEl.innerHTML = `
    <a class="auth-link auth-user-link" href="profile.html">${firstName}</a>
    <button class="auth-link auth-logout-button" type="button" data-logout>Logout</button>
    <a class="nav-cta" href="cart.html">Cart <span class="cart-badge" data-cart-count>0</span></a>
  `;
}

function showCartToast(productTitle) {
  if (!toastEl) {
    return;
  }

  toastEl.innerHTML = `
    <div>
      <strong>Added to cart</strong>
      <p>${productTitle} is now in your bag.</p>
    </div>
    <a class="button button-primary" href="cart.html">View Cart</a>
  `;
  toastEl.classList.add("is-visible");

  window.clearTimeout(showCartToast.timeoutId);
  showCartToast.timeoutId = window.setTimeout(() => {
    toastEl.classList.remove("is-visible");
  }, 2800);
}

function getPostAuthRedirect() {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");
  if (!redirect || redirect === "index.html" || redirect === "./index.html" || redirect === "/") {
    return "profile.html";
  }

  return `profile.html?redirect=${encodeURIComponent(redirect)}`;
}

function createProductCard(product) {
  const isHomePage = (document.body.dataset.page || "home") === "home";

  return `
    <article class="product-card" data-product-card="${product.id}">
      <a class="product-link" href="${getProductUrl(product.id)}">
        <img src="${product.image}" alt="${product.title}">
      </a>
      <div class="product-body">
        <span class="tag">${product.badge}</span>
        <a class="product-title-link" href="${getProductUrl(product.id)}">
          <h3>${product.title}</h3>
        </a>
        <p class="product-copy">${product.shortDescription}</p>
        <div class="product-meta">
          <span>${product.gender} / ${product.category}</span>
          <strong>${formatPrice(product.price)}</strong>
        </div>
        ${isHomePage ? "" : `
        <div class="product-actions">
          <a class="inline-link product-view-link" href="${getProductUrl(product.id)}">View Product</a>
          <button class="product-action" type="button" data-add-to-cart="${product.id}">Add to Cart</button>
        </div>
        `}
      </div>
    </article>
  `;
}

function renderProducts(container, items) {
  if (!container) {
    return;
  }
  container.innerHTML = items.map(createProductCard).join("");
}

function getVisiblePageProducts() {
  const page = document.body.dataset.page || "home";
  const items = pageProducts[page] || products;
  return items.filter((product) => {
    const matchesFilter = currentFilter === "all" || product.category === currentFilter;
    const matchesGender = currentGenderFilter === "all" || product.gender === currentGenderFilter;
    const query = currentSearch.trim().toLowerCase();
    const matchesSearch = !query
      || product.title.toLowerCase().includes(query)
      || product.gender.toLowerCase().includes(query)
      || product.category.toLowerCase().includes(query)
      || product.shortDescription.toLowerCase().includes(query);
    return matchesFilter && matchesGender && matchesSearch;
  });
}

function syncGenderButtons() {
  genderSwitcherEls.forEach((container) => {
    container.querySelectorAll("[data-gender-filter]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.genderFilter === currentGenderFilter);
    });
  });
}

function updateGenderUrl() {
  const url = new URL(window.location.href);
  if (currentGenderFilter === "all") {
    url.searchParams.delete("gender");
  } else {
    url.searchParams.set("gender", currentGenderFilter);
  }
  window.history.replaceState({}, "", url);
}

function setGenderFilter(gender, options = {}) {
  const nextGender = gender === "men" || gender === "women" ? gender : "all";
  currentGenderFilter = nextGender;
  syncGenderButtons();

  if (options.updateUrl !== false) {
    updateGenderUrl();
  }

  renderPageProducts();
  renderBrowsePage();
}

function initializeGenderFilter() {
  const gender = new URLSearchParams(window.location.search).get("gender");
  currentGenderFilter = gender === "men" || gender === "women" ? gender : "all";
  syncGenderButtons();
}

function renderLatestCollection() {
  if (!latestGridEl) {
    return;
  }

  latestGridEl.innerHTML = latestCollection.map((item, index) => `
    <article class="latest-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="latest-content">
        <span class="tag">Latest Collection</span>
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
        <div class="latest-meta">
          <strong>${formatPrice(item.price)}</strong>
          <a class="button button-secondary" href="${getProductUrl(index + 2)}">Shop Edit</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderPageProducts() {
  renderProducts(productGridEl, getVisiblePageProducts());
}

function renderCart() {
  updateCartCountDisplays();

  if (!cartItemsEl) {
    return;
  }

  const { itemCount, subtotal } = getCartTotals();

  if (summaryCountEl) {
    summaryCountEl.textContent = itemCount;
  }

  if (summarySubtotalEl) {
    summarySubtotalEl.textContent = formatPrice(subtotal);
  }

  if (!cart.length) {
    cartItemsEl.innerHTML = `
      <div class="empty-cart">
        <h3>Your cart is empty</h3>
        <p>Add products from the shopping pages to see them here.</p>
        <a class="button button-primary" href="arrivals.html">Continue Shopping</a>
      </div>
    `;
    return;
  }

  cartItemsEl.innerHTML = cart.map((item) => `
    <article class="cart-item">
      <a href="${getProductUrl(item.id)}">
        <img src="${item.image}" alt="${item.title}">
      </a>
      <div>
        <div class="cart-item-head">
          <div>
            <a class="cart-product-link" href="${getProductUrl(item.id)}"><h3>${item.title}</h3></a>
            <p>${item.gender} / ${item.category}</p>
          </div>
          <strong>${formatPrice(item.price * item.quantity)}</strong>
        </div>
        <span class="tag">${formatPrice(item.price)} each</span>
        <div class="cart-controls">
          <button class="quantity-button" type="button" data-quantity-change="${item.id}" data-direction="decrease">-</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-button" type="button" data-quantity-change="${item.id}" data-direction="increase">+</button>
          <button class="remove-item" type="button" data-remove-item="${item.id}">Remove</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderProductDetail() {
  if (!productDetailEl) {
    return;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const productId = Number(searchParams.get("id"));
  const product = getProductById(productId);

  if (!product) {
    productDetailEl.innerHTML = `
      <div class="content-card">
        <h2>Product not found</h2>
        <p>The product you selected is not available right now.</p>
        <a class="button button-primary" href="arrivals.html">Back to Arrivals</a>
      </div>
    `;
    return;
  }

  document.title = `${product.title} | Sitara Grace`;
  const galleryImages = product.images && product.images.length ? product.images : [product.image];
  productDetailEl.innerHTML = `
    <div class="product-detail-shell">
      <div class="product-detail-media">
        <img class="product-detail-main-image" src="${galleryImages[0]}" alt="${product.title}">
        <div class="product-detail-gallery">
          ${galleryImages.map((image, index) => `
            <img src="${image}" alt="${product.title} view ${index + 1}">
          `).join("")}
        </div>
      </div>
      <div class="product-detail-copy">
        <span class="tag">${product.badge}</span>
        <h1>${product.title}</h1>
        <p class="product-detail-audience">${product.gender} / ${product.category}</p>
        <p class="product-detail-price">${formatPrice(product.price)}</p>
        <p class="product-detail-description">${product.description}</p>
        <div class="detail-actions">
          <button class="button button-primary" type="button" data-add-to-cart="${product.id}">Add to Cart</button>
          <a class="button button-secondary" href="payment.html">Proceed to Payment</a>
        </div>
        <div class="detail-panel">
          <h3>Product details</h3>
          <ul class="feature-list">
            ${product.details.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function renderBrowsePage() {
  if (!browseHeaderEl || !browseDescriptionEl) {
    return;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const section = searchParams.get("section") || "all categories";
  const readable = section.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  browseHeaderEl.textContent = readable;
  browseDescriptionEl.textContent = `Explore ${readable} through a shopping page built for both men's and women's categories.`;
  renderProducts(productGridEl, getVisiblePageProducts());
}

function renderInfoPage() {
  if (!infoTitleEl || !infoDescriptionEl) {
    return;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const page = searchParams.get("page") || "about-us";
  const readable = page.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  infoTitleEl.textContent = readable;
  infoDescriptionEl.textContent = infoPages[page] || "This information page is available from the footer navigation and can be expanded with more details anytime.";
}

function renderFooter() {
  if (!siteFooterEl) {
    return;
  }

  siteFooterEl.innerHTML = `
    <footer class="mega-footer">
      <div class="container mega-footer-shell">
        <div class="footer-grid">
          ${footerColumns.map((column) => `
            <div class="footer-column">
              ${column.links.map((link) => {
                const slug = slugify(link);
                const href = column.title === "Support"
                  ? `info.html?page=${slug}`
                  : `browse.html?section=${slug}`;
                return `<a href="${href}">${link}</a>`;
              }).join("")}
            </div>
          `).join("")}
        </div>
        <div class="footer-bottom">
          <a href="info.html?page=privacy-policy">Privacy Policy</a>
          <p>Copyright Sitara Grace. All Rights Reserved.</p>
          <a href="info.html?page=terms-conditions">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  `;
}

function renderPaymentMethodFields() {
  if (!paymentMethodEl) {
    return;
  }

  const method = paymentMethodEl.value;
  const fieldGroups = [cardFieldsEl, upiFieldsEl, bankFieldsEl, codFieldsEl];
  fieldGroups.forEach((group) => group?.classList.add("is-hidden"));

  if (!method) {
    if (paymentPromptEl) {
      paymentPromptEl.textContent = "Select a payment method to continue.";
    }
    return;
  }

  if (paymentPromptEl) {
    const prompts = {
      card: "Enter your card details to complete payment.",
      upi: "Enter your UPI ID to continue with UPI payment.",
      banking: "Choose your bank to continue with net banking.",
      cod: "Cash on Delivery selected. No extra payment details are needed."
    };
    paymentPromptEl.textContent = prompts[method];
  }

  if (method === "card") {
    cardFieldsEl?.classList.remove("is-hidden");
  }

  if (method === "upi") {
    upiFieldsEl?.classList.remove("is-hidden");
  }

  if (method === "banking") {
    bankFieldsEl?.classList.remove("is-hidden");
  }

  if (method === "cod") {
    codFieldsEl?.classList.remove("is-hidden");
  }
}

function addToCart(productId) {
  if (!getCurrentUser()) {
    window.location.href = `login.html?redirect=${encodeURIComponent(window.location.pathname.split("/").pop() || "index.html")}`;
    return;
  }

  const product = getProductById(productId);
  if (!product) {
    return;
  }

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  renderCart();
  updateCartCountDisplays();
  showCartToast(product.title);
}

async function handleAuthSubmit(mode) {
  const redirect = getPostAuthRedirect();
  const isRegister = mode === "register";
  const nameInput = document.getElementById(isRegister ? "register-name" : "login-name");
  const emailInput = document.getElementById(isRegister ? "register-email" : "login-email");
  const passwordInput = document.getElementById(isRegister ? "register-password" : "login-password");
  const statusElement = isRegister ? registerStatusEl : loginStatusEl;

  setElementStatus(statusElement, isRegister ? "Creating your account..." : "Checking your login...", "");

  try {
    const result = await postJson(AUTH_API_URL, {
      action: isRegister ? "register" : "login",
      name: nameInput?.value?.trim() || "",
      email: emailInput?.value?.trim() || "",
      password: passwordInput?.value || ""
    });

    saveCurrentUser(result.user);
    setElementStatus(statusElement, result.message, "success");
    window.setTimeout(() => {
      window.location.href = redirect;
    }, 350);
  } catch (error) {
    clearCurrentUser();
    setElementStatus(statusElement, error.message || "Unable to complete authentication.", "error");
  }
}

function updateCartQuantity(productId, direction) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) {
    return;
  }

  item.quantity += direction === "increase" ? 1 : -1;
  cart = cart.filter((entry) => entry.quantity > 0);
  saveCart();
  renderCart();
  updateCartCountDisplays();
}

function removeCartItem(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
  updateCartCountDisplays();
}

function updateHero() {
  if (heroImageEl) {
    heroImageEl.src = heroImages[heroIndex];
  }
}

function setStatus(message, type) {
  if (!formStatus) {
    return;
  }

  setElementStatus(formStatus, message, type);
}

function setElementStatus(element, message, type) {
  if (!element) {
    return;
  }

  element.textContent = message;
  element.className = "form-status";
  if (type) {
    element.classList.add(`is-${type}`);
  }
}

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  let result;
  try {
    result = await response.json();
  } catch (error) {
    result = null;
  }

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "The request could not be completed.");
  }

  return result;
}

function validatePaymentFields(method) {
  if (!paymentNameInputEl?.value.trim() || !paymentPhoneInputEl?.value.trim()) {
    return "Full name and phone number are required.";
  }

  if (method === "card") {
    if (!cardNumberInputEl?.value.trim() || !cardHolderInputEl?.value.trim() || !cardExpiryInputEl?.value.trim() || !cardCvvInputEl?.value.trim()) {
      return "Please complete all card details.";
    }
  }

  if (method === "upi" && !upiIdInputEl?.value.trim()) {
    return "Please enter your UPI ID.";
  }

  if (method === "banking" && (!bankNameInputEl?.value || bankNameInputEl.value === "Choose your bank")) {
    return "Please select your bank.";
  }

  return "";
}

function renderSuccessPage() {
  if (!successMessageEl || !orderSuccessDetailsEl) {
    return;
  }

  const order = loadLastOrder();
  if (!order) {
    successMessageEl.textContent = "Your latest order details are not available in this browser session.";
    orderSuccessDetailsEl.innerHTML = "";
    return;
  }

  successMessageEl.textContent = "Thank you for shopping with Sitara Grace. Your order has been saved and is now being processed.";
  orderSuccessDetailsEl.innerHTML = `
    <div class="detail-panel">
      <h3>Order summary</h3>
      <ul class="feature-list">
        <li>Order number: ${order.orderNumber}</li>
        <li>Name: ${order.customerName}</li>
        <li>Payment method: ${order.paymentMethod.toUpperCase()}</li>
        <li>Payment status: ${order.paymentStatus.replace(/_/g, " ")}</li>
        <li>Total: ${formatPrice(order.total)}</li>
      </ul>
    </div>
  `;
}

function renderProfilePage() {
  if (!profileCardEl) {
    return;
  }

  const user = getCurrentUser();
  if (!user) {
    profileCardEl.innerHTML = `
      <article class="dashboard-main-card">
        <p class="eyebrow">Dashboard Access</p>
        <h2>Please log in first</h2>
        <p>Your account dashboard will appear here after login or registration.</p>
        <div class="profile-actions">
          <a class="button button-primary" href="login.html">Go to Login</a>
          <a class="button button-secondary" href="register.html">Create Account</a>
        </div>
      </article>
    `;
    return;
  }

  const lastOrder = loadLastOrder();
  const redirect = new URLSearchParams(window.location.search).get("redirect");
  const hasFlowRedirect = Boolean(redirect);
  const primaryLink = hasFlowRedirect ? redirect : "arrivals.html";
  const primaryLabel = redirect === "payment.html"
    ? "Continue to Payment"
    : redirect === "cart.html"
      ? "Back to Cart"
      : "Start Shopping";
  const { itemCount, subtotal } = getCartTotals();
  const initials = user.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");

  profileCardEl.innerHTML = `
    <section class="dashboard-main-card">
      <div class="dashboard-welcome">
        <div class="dashboard-avatar">${initials || "SG"}</div>
        <div>
          <p class="eyebrow">Welcome Back</p>
          <h2>${user.name}</h2>
          <p>${user.email}</p>
        </div>
      </div>
      <div class="dashboard-stats">
        <article class="dashboard-stat-card">
          <span>Cart Items</span>
          <strong>${itemCount}</strong>
        </article>
        <article class="dashboard-stat-card">
          <span>Cart Value</span>
          <strong>${formatPrice(subtotal)}</strong>
        </article>
        <article class="dashboard-stat-card">
          <span>Account Status</span>
          <strong>Active</strong>
        </article>
      </div>
      <div class="profile-actions">
        <a class="button button-primary" href="${primaryLink}">${primaryLabel}</a>
        <a class="button button-secondary" href="cart.html">View Cart</a>
        <a class="button button-secondary" href="collections.html">Shop Collections</a>
      </div>
    </section>
    <aside class="dashboard-side-card">
      <div class="detail-panel">
        <h3>Account Overview</h3>
        <ul class="feature-list">
          <li>Name: ${user.name}</li>
          <li>Email: ${user.email}</li>
          <li>Saved cart items: ${itemCount}</li>
        </ul>
      </div>
      <div class="detail-panel">
        <h3>Latest Order</h3>
        ${lastOrder ? `
          <ul class="feature-list">
            <li>Order number: ${lastOrder.orderNumber}</li>
            <li>Payment method: ${lastOrder.paymentMethod.toUpperCase()}</li>
            <li>Status: ${lastOrder.paymentStatus.replace(/_/g, " ")}</li>
            <li>Total: ${formatPrice(lastOrder.total)}</li>
          </ul>
        ` : `
          <p>No order has been placed yet. Your next checkout will appear here.</p>
        `}
      </div>
      <div class="detail-panel">
        <h3>Quick Links</h3>
        <ul class="feature-list">
          <li><a href="collections.html">Browse collections</a></li>
          <li><a href="latest.html">See latest edits</a></li>
          <li><a href="contact.html">Contact support</a></li>
        </ul>
      </div>
    </aside>
  `;
}

nextHeroButton?.addEventListener("click", () => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  updateHero();
});

if (heroImageEl) {
  window.setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    updateHero();
  }, 6000);
}

filtersEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (button) {
    currentFilter = button.dataset.filter;
    filtersEl.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderPageProducts();
  }

  const genderButton = event.target.closest("[data-gender-filter]");
  if (!genderButton) {
    return;
  }

  setGenderFilter(genderButton.dataset.genderFilter);
});

genderSwitcherEls.forEach((container) => {
  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gender-filter]");
    if (!button) {
      return;
    }

    setGenderFilter(button.dataset.genderFilter);
  });
});

searchInputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    currentSearch = event.target.value;
    renderPageProducts();
    renderBrowsePage();
  });
});

paymentMethodEl?.addEventListener("change", renderPaymentMethodFields);
loginFormEl?.addEventListener("submit", (event) => {
  event.preventDefault();
  void handleAuthSubmit("login");
});

registerFormEl?.addEventListener("submit", (event) => {
  event.preventDefault();
  void handleAuthSubmit("register");
});

payNowButtonEl?.addEventListener("click", async () => {
  if (!getCurrentUser()) {
    window.location.href = `login.html?redirect=${encodeURIComponent("payment.html")}`;
    return;
  }

  if (!cart.length) {
    setElementStatus(paymentFormStatusEl, "Your cart is empty. Add items before payment.", "error");
    return;
  }

  if (!paymentMethodEl?.value) {
    renderPaymentMethodFields();
    setElementStatus(paymentFormStatusEl, "Please choose a payment method.", "error");
    return;
  }

  const validationMessage = validatePaymentFields(paymentMethodEl.value);
  if (validationMessage) {
    setElementStatus(paymentFormStatusEl, validationMessage, "error");
    return;
  }

  setElementStatus(paymentFormStatusEl, "Placing your order...", "");

  try {
    const result = await postJson(CHECKOUT_API_URL, {
      customerName: paymentNameInputEl?.value.trim() || "",
      customerPhone: paymentPhoneInputEl?.value.trim() || "",
      paymentMethod: paymentMethodEl.value,
      user: getCurrentUser(),
      items: cart
    });

    saveLastOrder(result.order);
    clearCart();
    renderCart();
    updateCartCountDisplays();
    setElementStatus(paymentFormStatusEl, result.message, "success");
    window.location.href = "success.html";
  } catch (error) {
    setElementStatus(paymentFormStatusEl, error.message || "Unable to place your order.", "error");
  }
});

proceedToCartEls.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "payment.html";
  });
});

document.addEventListener("click", (event) => {
  const logoutButton = event.target.closest("[data-logout]");
  if (logoutButton) {
    clearCurrentUser();
    clearLastOrder();
    renderHeaderActions();
    updateCartCountDisplays();
    if (profileCardEl) {
      renderProfilePage();
    }
    if (window.location.pathname.endsWith("profile.html")) {
      window.location.href = "index.html";
    }
    return;
  }

  const addButton = event.target.closest("[data-add-to-cart]");
  if (addButton) {
    event.preventDefault();
    addToCart(Number(addButton.dataset.addToCart));
    return;
  }

  const quantityButton = event.target.closest("[data-quantity-change]");
  if (quantityButton) {
    updateCartQuantity(Number(quantityButton.dataset.quantityChange), quantityButton.dataset.direction);
    return;
  }

  const removeButton = event.target.closest("[data-remove-item]");
  if (removeButton) {
    removeCartItem(Number(removeButton.dataset.removeItem));
  }
});

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus("Sending message...", "");

  const formData = new FormData(contactForm);
  const payload = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Unable to send the message.");
    }

    contactForm.reset();
    setStatus(result.message, "success");
  } catch (error) {
    setStatus(error.message || "Something went wrong while submitting the form.", "error");
  }
});

initializeGenderFilter();
renderLatestCollection();
renderPageProducts();
renderCart();
renderProductDetail();
renderBrowsePage();
renderInfoPage();
renderFooter();
renderHeaderActions();
renderPaymentMethodFields();
updateHero();
updateCartCountDisplays();
renderSuccessPage();
renderProfilePage();
