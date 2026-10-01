
// Toggle Contact & Helpline Modal
function toggleContactModal(open = true, e = null) {
  if (!open && e && e.target && e.target.id !== 'contact-modal-overlay' && !e.target.classList.contains('btn-close-contact-modal')) {
    return;
  }
  const modal = document.getElementById('contact-modal-overlay');
  if (!modal) return;

  if (open) {
    modal.classList.add('active');
    attachFormValidations();
    document.body.style.overflow = 'hidden';
  } else {
    modal.classList.remove('active');
    // Restore overflow if other modals are closed
    const drawer = document.getElementById('cart-drawer');
    const invModal = document.getElementById('invoice-modal-overlay');
    const delModal = document.getElementById('delivery-modal-overlay');
    const lpModal = document.getElementById('line-picker-modal');
    const anyOpen = (drawer && drawer.classList.contains('active')) ||
                    (invModal && invModal.classList.contains('active')) ||
                    (delModal && delModal.classList.contains('active')) ||
                    (lpModal && lpModal.classList.contains('active'));
    if (!anyOpen) {
      document.body.style.overflow = '';
    }
  }
}

/**
 * RASESHWARI SPICES (Raseshwari Foods Pvt. Ltd., Sitamarhi, Bihar)
 * E-Commerce Catalog & Direct WhatsApp / Email / Call Ordering Engine
 * English Edition
 */

const PRODUCTS = [
  {
    id: "turmeric-powder",
    name: "Raseshwari Turmeric Powder (हल्दी)",
    subTitle: "High Curcumin • Cold Stone-Ground • 100% Pure & Natural",
    category: "pure",
    image: "https://lh3.googleusercontent.com/d/1xi-PXJp8ldhnOSVLTfF0TIo9lbTcxCRT",
    driveLink: "https://drive.google.com/file/d/1xi-PXJp8ldhnOSVLTfF0TIo9lbTcxCRT/view",
    rating: 4.9,
    reviews: 148,
    isBestseller: true,
    desc: "100% Pure & Natural Haldi from Sitamarhi. High natural curcumin content, vibrant golden colour, zero synthetic additives.",
    sizes: {
      "50g": { price: 28, mrp: 35, discount: "20% OFF" },
      "100g": { price: 52, mrp: 65, discount: "20% OFF" },
      "200g": { price: 99, mrp: 125, discount: "21% OFF" },
      "500g": { price: 235, mrp: 299, discount: "21% OFF" },
      "1kg": { price: 449, mrp: 580, discount: "23% OFF" }
    }
  },
  {
    id: "red-chilli-powder",
    name: "Raseshwari Red Chilli Powder (लाल मिर्च)",
    subTitle: "Natural Crimson • Bold & Spicy • Cold Stone-Ground",
    category: "pure",
    image: "https://lh3.googleusercontent.com/d/1WcVmKbVW3BLv9rzZlV5CtJuHNCbxynxk",
    driveLink: "https://drive.google.com/file/d/1WcVmKbVW3BLv9rzZlV5CtJuHNCbxynxk/view",
    rating: 4.9,
    reviews: 162,
    isBestseller: true,
    desc: "Sun-ripened premium red chillies. Rich natural crimson colour, sharp punch, completely adulteration-free with natural essential oils.",
    sizes: {
      "50g": { price: 32, mrp: 40, discount: "20% OFF" },
      "100g": { price: 60, mrp: 75, discount: "20% OFF" },
      "200g": { price: 115, mrp: 145, discount: "21% OFF" },
      "500g": { price: 275, mrp: 350, discount: "21% OFF" },
      "1kg": { price: 520, mrp: 680, discount: "24% OFF" }
    }
  },
  {
    id: "coriander-powder",
    name: "Raseshwari Coriander Powder (धनिया)",
    subTitle: "Aromatic Whole Seed Dhaniya • Retains Essential Oils",
    category: "pure",
    image: "https://lh3.googleusercontent.com/d/16OWudiqQ7x-TeLgtuR7ZTGjMXJ3NXV6E",
    driveLink: "https://drive.google.com/file/d/16OWudiqQ7x-TeLgtuR7ZTGjMXJ3NXV6E/view",
    rating: 4.8,
    reviews: 124,
    isBestseller: true,
    desc: "Carefully selected whole coriander seeds, cold ground to retain refreshing natural aroma and rich culinary flavour.",
    sizes: {
      "50g": { price: 26, mrp: 32, discount: "19% OFF" },
      "100g": { price: 48, mrp: 60, discount: "20% OFF" },
      "200g": { price: 92, mrp: 115, discount: "20% OFF" },
      "500g": { price: 220, mrp: 280, discount: "21% OFF" },
      "1kg": { price: 420, mrp: 540, discount: "22% OFF" }
    }
  },
  {
    id: "garam-masala",
    name: "Raseshwari Royal Garam Masala (गरम मसाला)",
    subTitle: "Master 16-Whole Spice Blend with Natural Oils",
    category: "blend",
    image: "https://lh3.googleusercontent.com/d/14aZ2Ag24t49QJ-blT80kVFgq3Ads7yQ5",
    driveLink: "https://drive.google.com/file/d/14aZ2Ag24t49QJ-blT80kVFgq3Ads7yQ5/view",
    rating: 4.9,
    reviews: 98,
    isBestseller: true,
    desc: "Traditional heritage blend of 16 premium whole spices. Provides authentic royal aroma, warm complexity and rich gravy depth.",
    sizes: {
      "50g": { price: 45, mrp: 55, discount: "18% OFF" },
      "100g": { price: 85, mrp: 105, discount: "19% OFF" },
      "200g": { price: 165, mrp: 210, discount: "21% OFF" },
      "500g": { price: 390, mrp: 499, discount: "22% OFF" },
      "1kg": { price: 750, mrp: 950, discount: "21% OFF" }
    }
  },
  {
    id: "raseshwari-premium-rice",
    name: "Raseshwari Premium Quality Rice (चावल)",
    subTitle: "Shuddh • Swadisht • Behtareen - 100% Pure Rice",
    category: "staples",
    image: "https://lh3.googleusercontent.com/d/157Q2SmvBZz0uN6hBqAHJxTeDPvhpJ7R8",
    driveLink: "https://drive.google.com/file/d/157Q2SmvBZz0uN6hBqAHJxTeDPvhpJ7R8/view",
    rating: 4.9,
    reviews: 184,
    isBestseller: true,
    desc: "100% Pure authentic premium quality grain rice from Sitamarhi, Bihar. Shuddh, swadisht aur behtareen for everyday meals and royal feasts.",
    sizes: {
      "1kg": { price: 85, mrp: 110, discount: "23% OFF" },
      "5kg": { price: 399, mrp: 499, discount: "20% OFF" },
      "10kg": { price: 780, mrp: 980, discount: "20% OFF" },
      "25kg": { price: 1899, mrp: 2350, discount: "19% OFF" }
    }
  },
  {
    id: "raseshwari-aata",
    name: "Raseshwari Pure Chakki Fresh Aata (आटा)",
    subTitle: "100% Whole Wheat Chakki Atta • Soft & Fluffy Rotis (होल व्हीट आटा)",
    category: "staples",
    image: "https://lh3.googleusercontent.com/d/1OK87dPW4XwIUz4qFmbuKdiQREmJERFtV",
    driveLink: "https://drive.google.com/file/d/1OK87dPW4XwIUz4qFmbuKdiQREmJERFtV/view",
    rating: 4.9,
    reviews: 168,
    isBestseller: false,
    desc: "100% pure whole wheat flour ground on traditional stone chakki. Rich in natural dietary fiber and essential nutrients for soft, delicious rotis. Sitamarhi, Bihar.",
    sizes: {
      "5kg": { price: 210, mrp: 260, discount: "19% OFF" },
      "10kg": { price: 399, mrp: 499, discount: "20% OFF" },
      "25kg": { price: 950, mrp: 1200, discount: "21% OFF" }
    }
  },
  {
    id: "raseshwari-rice-trio",
    name: "Raseshwari Rice Trio Festive Combo (3-Bags)",
    subTitle: "Royal, Classic & Heritage Selected Long Grain Rice",
    category: "staples",
    image: "https://lh3.googleusercontent.com/d/10FusmXLe-S22J5RKYBD9ZYW3kTxCprWH",
    driveLink: "https://drive.google.com/file/d/10FusmXLe-S22J5RKYBD9ZYW3kTxCprWH/view",
    rating: 4.9,
    reviews: 76,
    isBestseller: false,
    desc: "Signature collection of Raseshwari premium rice trio (Royal Maroon, Forest Green & Golden Harvest). Perfect for family gatherings, weddings and celebrations.",
    sizes: {
      "3 x 1kg": { price: 250, mrp: 330, discount: "24% OFF" },
      "3 x 5kg": { price: 1180, mrp: 1499, discount: "21% OFF" }
    }
  },
  {
    id: "tadka-hing",
    name: "Raseshwari Tadka Hing (कंपाउंडेड हींग)",
    subTitle: "Strong Royal Aroma • Authentic Compounded Asafoetida",
    category: "blend",
    image: "https://lh3.googleusercontent.com/d/1G43MMBUZUMYpey4zVdvcLrgzQWeL24kN",
    driveLink: "https://drive.google.com/file/d/1G43MMBUZUMYpey4zVdvcLrgzQWeL24kN/view",
    rating: 4.9,
    reviews: 135,
    isBestseller: true,
    desc: "Potent aromatic compounded asafoetida. Just a pinch gives extraordinary digestive aroma and traditional flavor to dal tadka, sambar and curries.",
    sizes: {
      "25g": { price: 45, mrp: 55, discount: "18% OFF" },
      "50g": { price: 85, mrp: 105, discount: "19% OFF" },
      "100g": { price: 160, mrp: 200, discount: "20% OFF" }
    }
  },
  {
    id: "kasuri-methi",
    name: "Raseshwari Fragrant Kasuri Methi (कसूरी मेथी)",
    subTitle: "Sun-Dried Whole Fragrant Fenugreek Leaves",
    category: "pure",
    image: "https://lh3.googleusercontent.com/d/1yA8bDXeOJGuzcRzMrGKu9qQBjsURhk5F",
    driveLink: "https://drive.google.com/file/d/1yA8bDXeOJGuzcRzMrGKu9qQBjsURhk5F/view",
    rating: 4.8,
    reviews: 94,
    isBestseller: true,
    desc: "Sun-dried green kasuri methi with intense herbal aroma. Adds restaurant-style royal flavor to paneer, gravies, and parathas.",
    sizes: {
      "25g": { price: 25, mrp: 32, discount: "22% OFF" },
      "50g": { price: 45, mrp: 58, discount: "22% OFF" },
      "100g": { price: 85, mrp: 110, discount: "23% OFF" },
      "250g": { price: 199, mrp: 260, discount: "23% OFF" }
    }
  },
  {
    id: "moong-papad",
    name: "Raseshwari Crispy Moong Papad (मूंग पापड़)",
    subTitle: "Perfect Crunch, Perfect Flavour • Traditional Recipe",
    category: "staples",
    image: "https://lh3.googleusercontent.com/d/1t12Nszbk2yAgUMUaRptUyIC3Xk3XFqCu",
    driveLink: "https://drive.google.com/file/d/1t12Nszbk2yAgUMUaRptUyIC3Xk3XFqCu/view",
    rating: 4.9,
    reviews: 112,
    isBestseller: false,
    desc: "Handcrafted traditional moong dal papad seasoned with black pepper and authentic spices. Crispy, crunchy and delicious roasted or fried.",
    sizes: {
      "200g": { price: 55, mrp: 70, discount: "21% OFF" },
      "400g": { price: 105, mrp: 135, discount: "22% OFF" },
      "1kg": { price: 250, mrp: 320, discount: "22% OFF" }
    }
  },
  {
    id: "spice-gift-box",
    name: "Raseshwari Royal Festive Spice Gift Box",
    subTitle: "Signature Gift Box with Luxury Spices & Jars",
    category: "blend",
    image: "https://lh3.googleusercontent.com/d/1HFxRxy4T5nX5S3FTXvbNKt0AGtsC2BqF",
    driveLink: "https://drive.google.com/file/d/1HFxRxy4T5nX5S3FTXvbNKt0AGtsC2BqF/view",
    rating: 5.0,
    reviews: 88,
    isBestseller: false,
    desc: "Grand festive gift box containing Haldi, Mirch, Dhaniya, Garam Masala, Kitchen King, Hing, Kasuri Methi and Whole Spices in luxury jars.",
    sizes: {
      "6 Spices Pack": { price: 599, mrp: 799, discount: "25% OFF" },
      "Grand 8-Box": { price: 899, mrp: 1199, discount: "25% OFF" }
    }
  },
  {
    id: "jeera-powder",
    name: "Raseshwari Roasted Jeera Powder (जीरा पाउडर)",
    subTitle: "Slow-Roasted Earthy Cumin • Fresh Digestive Aroma",
    category: "pure",
    image: "https://lh3.googleusercontent.com/d/1cvmuCSDSeokmymvIMZZmZ8lC77obgZEh",
    driveLink: "https://drive.google.com/file/d/1cvmuCSDSeokmymvIMZZmZ8lC77obgZEh/view",
    rating: 4.7,
    reviews: 82,
    isBestseller: true,
    desc: "Evenly slow-roasted cumin seeds ground fresh. Unbeatable digestive freshness and earthy taste for curries, raita and beverages.",
    sizes: {
      "50g": { price: 42, mrp: 52, discount: "19% OFF" },
      "100g": { price: 80, mrp: 100, discount: "20% OFF" },
      "200g": { price: 155, mrp: 195, discount: "21% OFF" },
      "500g": { price: 370, mrp: 470, discount: "21% OFF" },
      "1kg": { price: 720, mrp: 920, discount: "22% OFF" }
    }
  },
  {
    id: "kitchen-king",
    name: "Raseshwari Kitchen King Masala (किचन किंग)",
    subTitle: "All-in-One Culinary Curry Enhancer",
    category: "blend",
    image: "https://lh3.googleusercontent.com/d/10McMh8AfjhgCRo9lhbTJ2VMfA113QCs8",
    driveLink: "https://drive.google.com/file/d/10McMh8AfjhgCRo9lhbTJ2VMfA113QCs8/view",
    rating: 4.8,
    reviews: 110,
    isBestseller: false,
    desc: "The universal curry enhancer. Makes all paneer gravies, dry vegetables, dal and gourmet feasts extraordinary.",
    sizes: {
      "50g": { price: 40, mrp: 50, discount: "20% OFF" },
      "100g": { price: 78, mrp: 98, discount: "20% OFF" },
      "200g": { price: 150, mrp: 190, discount: "21% OFF" },
      "500g": { price: 360, mrp: 460, discount: "22% OFF" },
      "1kg": { price: 690, mrp: 890, discount: "22% OFF" }
    }
  }
];

// App State
const state = {
  cart: [],
  selectedWeights: {}, // { productId: '50g' }
  currentFilter: 'all',
  searchQuery: ''
};

// Initialize State: Always start fresh & clear cart on every open/refresh
function initApp() {
  // Always clear cart and delivery address on every page refresh / new load as requested
  state.cart = [];
  try {
    localStorage.removeItem('raseshwari_cart');
    sessionStorage.removeItem('raseshwari_cart');
    localStorage.removeItem('raseshwari_delivery_details');
    sessionStorage.removeItem('raseshwari_delivery_details');
    localStorage.removeItem('raseshwari_last_invoice');
    sessionStorage.removeItem('raseshwari_last_invoice');
  } catch (e) {
    console.error('Storage clear error', e);
  }

  // Clear any delivery address inputs in the DOM on load/refresh
  const deliveryForm = document.getElementById('delivery-details-form');
  if (deliveryForm) {
    deliveryForm.reset();
  }

  // Set default selected weight for each product
  PRODUCTS.forEach(p => {
    state.selectedWeights[p.id] = Object.keys(p.sizes)[0];
  });

  renderCatalog();
  updateCartUI();
  setupEventListeners();
  if (typeof initBulkCustomizer === 'function') {
    initBulkCustomizer();
  }
}

function saveCart() {
  // Cart stays in memory (state.cart) during active view only.
  // Not saved to localStorage so every page refresh/reopen starts completely clean and empty.
}

// Clear all cart helper
function clearAllCart() {
  state.cart = [];
  try {
    localStorage.removeItem('raseshwari_cart');
    sessionStorage.removeItem('raseshwari_cart');
  } catch (e) {}
  renderCatalog();
  updateCartUI();
  showToast('Cart cleared', { button: false, duration: 700 });
}

// Find item in cart
function findCartItem(id, weight) {
  return state.cart.find(item => item.id === id && item.weight === weight);
}

// Render Product Card
function createProductCardHTML(p) {
  const defaultSize = Object.keys(p.sizes)[0];
  const selectedWeight = state.selectedWeights[p.id] || defaultSize;
  const sizeData = p.sizes[selectedWeight] || p.sizes[defaultSize];
  const inCartItem = findCartItem(p.id, selectedWeight);

  const weightChipsHTML = Object.keys(p.sizes).map(w => {
    const isActive = w === selectedWeight ? 'active' : '';
    return `<button type="button" class="weight-chip ${isActive}" onclick="handleWeightSelect('${p.id}', '${w}')">${w}</button>`;
  }).join('');

  let actionButtonHTML = '';
  if (inCartItem && inCartItem.qty > 0) {
    actionButtonHTML = `
      <div class="card-qty-ctrl-active">
        <button type="button" class="card-qty-btn minus" onclick="handleQtyChange('${p.id}', '${selectedWeight}', -1)" title="Decrease quantity">−</button>
        <div class="card-qty-val">${inCartItem.qty} in cart</div>
        <button type="button" class="card-qty-btn plus" onclick="handleQtyChange('${p.id}', '${selectedWeight}', 1)" title="Increase quantity">+</button>
      </div>
    `;
  } else {
    actionButtonHTML = `
      <button type="button" class="btn-card-add" onclick="handleAddToCart('${p.id}')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        Add to Cart
      </button>
    `;
  }

  return `
    <div class="product-card" id="card-${p.id}">
      <div class="card-thumb-wrap">
        <span class="card-discount-badge">${sizeData.discount}</span>
        <span class="card-fssai-chip"><span class="veg-icon"></span> 100% Pure</span>
        <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer" />
      </div>
      <div class="card-body">
        <span class="card-category-tag">${
  p.category === 'pure' ? 'Pure Spice' : 
  (p.category === 'blend' ? 'Royal Blend' : 
  (p.category === 'staples' ? 'Premium Staples' : 'Specialty'))
}</span>
        <h3 class="card-title">${p.name}</h3>
        <p class="card-hindi-sub">${p.subTitle}</p>
        
        <div class="card-rating-strip">
          <span class="star-badge">★ ${p.rating}</span>
          <span class="rating-count">(${p.reviews} reviews)</span>
        </div>

        <div class="weight-selector-wrap">
          <div class="weight-selector-label">Select Pack Size:</div>
          <div class="weight-chips-row">
            ${weightChipsHTML}
          </div>
        </div>

        <div class="card-price-row">
          <span class="card-selling-price">₹${sizeData.price}</span>
          <span class="card-mrp-price">₹${sizeData.mrp}</span>
          <span class="card-discount-pill">${sizeData.discount}</span>
        </div>

        <div class="card-action-container" id="action-box-${p.id}">
          ${actionButtonHTML}
        </div>
      </div>
    </div>
  `;
}

// Render Products into DOM
function renderCatalog() {
  const featuredContainer = document.getElementById('featured-products-grid');
  const allContainer = document.getElementById('all-products-grid');

  let filtered = PRODUCTS.filter(p => {
    const matchesFilter = state.currentFilter === 'all' || p.category === state.currentFilter;
    const matchesSearch = !state.searchQuery || 
      p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
      p.subTitle.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (featuredContainer) {
    // Show strictly 8 items on home page per user requirement
    const featuredItems = PRODUCTS.filter(p => p.isBestseller).slice(0, 8);
    featuredContainer.innerHTML = featuredItems.map(createProductCardHTML).join('');
  }

  if (allContainer) {
    if (filtered.length === 0) {
      allContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748B;">No spices found matching your search. Try another keyword.</div>`;
    } else {
      allContainer.innerHTML = filtered.map(createProductCardHTML).join('');
    }
  }
}

// Handle pack size selection
function handleWeightSelect(productId, weight) {
  state.selectedWeights[productId] = weight;
  renderCatalog();
}

// Handle Add to Cart
function handleAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = Object.keys(product.sizes)[0];
  const weight = state.selectedWeights[productId] || defaultSize;
  const sizeData = product.sizes[weight] || product.sizes[defaultSize];
  const existing = findCartItem(productId, weight);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      subTitle: product.subTitle,
      weight: weight,
      price: sizeData.price,
      mrp: sizeData.mrp,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  renderCatalog();
  updateCartUI();
  showToast('Added to cart', { button: true, btnText: 'Cart ➔', duration: 700 });
}

// Handle Qty changes
function handleQtyChange(productId, weight, delta) {
  const itemIndex = state.cart.findIndex(i => i.id === productId && i.weight === weight);
  if (itemIndex > -1) {
    state.cart[itemIndex].qty += delta;
    if (state.cart[itemIndex].qty <= 0) {
      state.cart.splice(itemIndex, 1);
      showToast('Item removed', { button: false, duration: 700 });
    }
    saveCart();
    renderCatalog();
    updateCartUI();
  }
}

// Remove item directly from cart drawer
function handleRemoveItem(productId, weight) {
  state.cart = state.cart.filter(i => !(i.id === productId && i.weight === weight));
  saveCart();
  renderCatalog();
  updateCartUI();
  showToast('Item removed', { button: false, duration: 700 });
}

// Update Cart Drawer UI & Counter Badges
function updateCartUI() {
  const countBadges = document.querySelectorAll('.cart-badge-count, .mobile-cart-badge');
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  countBadges.forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartFooter = document.getElementById('cart-footer');
  const cartDrawerCount = document.getElementById('cart-drawer-count');

  if (cartDrawerCount) {
    cartDrawerCount.textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'items'}`;
  }

  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.style.display = 'none';
    if (cartEmptyState) cartEmptyState.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  cartItemsContainer.style.display = 'flex';
  if (cartEmptyState) cartEmptyState.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';

  let itemsSubtotal = 0;
  let itemsMrpTotal = 0;

  cartItemsContainer.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * item.qty;
    const itemMrpTotal = item.mrp * item.qty;
    itemsSubtotal += itemTotal;
    itemsMrpTotal += itemMrpTotal;

    return `
      <div class="cart-item-card">
        <img class="cart-item-thumb" src="${item.image}" alt="${item.name}" referrerpolicy="no-referrer">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-weight">Weight: ${item.weight}</span>
          <div class="cart-item-price-row">
            <span class="cart-item-price">₹${itemTotal}</span>
            <span class="cart-item-mrp">₹${itemMrpTotal}</span>
          </div>
        </div>
        <div class="cart-item-qty-ctrl">
          <button type="button" class="cart-qty-mini-btn" onclick="handleQtyChange('${item.id}', '${item.weight}', -1)" title="Decrease">−</button>
          <span class="cart-qty-mini-val">${item.qty}</span>
          <button type="button" class="cart-qty-mini-btn" onclick="handleQtyChange('${item.id}', '${item.weight}', 1)" title="Increase">+</button>
        </div>
        <button type="button" class="btn-remove-item" onclick="handleRemoveItem('${item.id}', '${item.weight}')" title="Remove item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;
  }).join('');

  // Bill calculations
  const savings = itemsMrpTotal - itemsSubtotal;
  const deliveryFee = itemsSubtotal >= 499 ? 0 : 40;
  const grandTotal = itemsSubtotal + deliveryFee;

  const subtotalEl = document.getElementById('bill-subtotal');
  const savingsEl = document.getElementById('bill-savings');
  const deliveryEl = document.getElementById('bill-delivery');
  const grandTotalEl = document.getElementById('bill-grandtotal');

  if (subtotalEl) subtotalEl.textContent = `₹${itemsSubtotal}`;
  if (savingsEl) savingsEl.textContent = `- ₹${savings}`;
  if (deliveryEl) {
    deliveryEl.textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
    deliveryEl.style.color = deliveryFee === 0 ? '#15803D' : '#334155';
  }
  if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal}`;
  const btnTotalEl = document.getElementById('btn-place-order-total');
  if (btnTotalEl) btnTotalEl.textContent = `₹${grandTotal}`;
}

// Toggle Cart Drawer
function toggleCartDrawer(open) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (!drawer || !overlay) return;

  if (open) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Order via WhatsApp (Direct Invoice generator)

// ==========================================================================
// DELIVERY ADDRESS & MULTI-CHANNEL ORDER SYSTEM
// ==========================================================================
window.activeOrderChannel = 'whatsapp';

// Open Detailed Delivery Modal
function openDeliveryModal(channel = 'whatsapp') {
  if (state.cart.length === 0) {
    showToast('Your cart is empty! Please select spices first.');
    return;
  }

  // Set the selected channel (whatsapp, email, sms)
  selectOrderChannel(channel);

  // Update live bill summary inside modal
  let itemsCount = 0;
  let itemsSubtotal = 0;
  state.cart.forEach(item => {
    itemsCount += item.qty;
    itemsSubtotal += (item.price * item.qty);
  });
  const deliveryFee = itemsSubtotal >= 499 ? 0 : 40;
  const grandTotal = itemsSubtotal + deliveryFee;

  const countEl = document.getElementById('modal-bill-count');
  const totalEl = document.getElementById('modal-bill-grandtotal');
  if (countEl) countEl.textContent = `${itemsCount} item${itemsCount > 1 ? 's' : ''} in cart`;
  if (totalEl) totalEl.textContent = `₹${grandTotal}`;

  // Address is not prefilled from localStorage on refresh/new load
  try {
    localStorage.removeItem('raseshwari_delivery_details');
  } catch (err) {}

  // Reset all validation states upon opening delivery modal
  ['cust-name', 'cust-phone', 'cust-flat', 'cust-landmark', 'cust-city', 'cust-state', 'cust-pin'].forEach(fieldId => {
    const inp = document.getElementById(`${fieldId}-input`);
    const err = document.getElementById(`${fieldId}-error`);
    const grp = fieldId === 'cust-phone' ? document.getElementById('cust-phone-group') : null;
    if (typeof resetFieldValidation === 'function') {
      resetFieldValidation(inp, err, grp);
    }
  });

  // Pre-fill City & State as valid
  ['cust-city', 'cust-state'].forEach(fieldId => {
    const inp = document.getElementById(`${fieldId}-input`);
    const err = document.getElementById(`${fieldId}-error`);
    if (inp && inp.value.trim().length >= 2 && typeof setFieldValid === 'function') {
      setFieldValid(inp, err);
    }
  });

  const modal = document.getElementById('delivery-modal-overlay');
  if (modal) {
    modal.classList.add('active');
    attachFormValidations();
    document.body.style.overflow = 'hidden';
  }
}

// Close Delivery Modal
function closeDeliveryModal(e) {
  if (e && e.target && e.target.id !== 'delivery-modal-overlay' && !e.target.classList.contains('btn-close-modal')) {
    return;
  }
  const modal = document.getElementById('delivery-modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    // Only restore body overflow if cart drawer is also closed
    const drawer = document.getElementById('cart-drawer');
    if (!drawer || !drawer.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }
}

// Select Order Channel (WhatsApp, Email, SMS)
function selectOrderChannel(channel) {
  window.activeOrderChannel = channel;

  const btnWhatsapp = document.getElementById('channel-btn-whatsapp');
  const btnEmail = document.getElementById('channel-btn-email');
  const btnSms = document.getElementById('channel-btn-sms');

  if (btnWhatsapp) btnWhatsapp.classList.toggle('active', channel === 'whatsapp');
  if (btnEmail) btnEmail.classList.toggle('active', channel === 'email');
  if (btnSms) btnSms.classList.toggle('active', channel === 'sms');

  const submitBtn = document.getElementById('btn-modal-submit');
  const submitText = document.getElementById('btn-submit-text');
  const submitIcon = document.getElementById('btn-submit-icon');

  if (!submitBtn || !submitText || !submitIcon) return;

  submitBtn.className = 'btn-modal-submit';

  if (channel === 'whatsapp') {
    submitBtn.classList.add('btn-modal-whatsapp');
    submitIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.077-2.127-.514-1.825-.757-3.003-2.613-3.094-2.735-.091-.122-.74-1.026-.74-1.956 0-.93.488-1.385.661-1.577.173-.192.38-.24.507-.24.126 0 .253.001.364.007.118.006.276-.045.431.328.158.381.543 1.328.591 1.425.048.096.08.209.016.335-.064.126-.096.205-.192.318-.096.113-.203.253-.29.34-.096.096-.197.201-.085.393.112.192.5 1.155 1.074 1.666.738.658 1.36.862 1.552.958.192.096.304.08.416-.048.113-.128.483-.561.611-.753.128-.192.257-.16.432-.096.176.064 1.116.526 1.309.622.192.096.321.144.369.224.048.08.048.465-.096.87zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.436 5.176L2 22l4.982-1.308A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>`;
    submitText.textContent = 'Confirm & Order on WhatsApp';
  } else if (channel === 'email') {
    submitBtn.classList.add('btn-modal-email');
    submitIcon.innerHTML = `✉️`;
    submitText.textContent = 'Confirm & Send Order via Email';
  } else if (channel === 'sms') {
    submitBtn.classList.add('btn-modal-sms');
    submitIcon.innerHTML = `📱`;
    submitText.textContent = 'Confirm & Send via SMS / Call';
  }
}

// Payment Method - Cash on Delivery (COD) Only (Active)
window.selectedPaymentMode = 'cod';

function selectPaymentMode(mode) {
  window.selectedPaymentMode = 'cod';
}


// Handle Order Confirmation from Modal

// ==========================================================================
// OFFICIAL PDF INVOICE GENERATION SYSTEM (Raseshwari Foods Pvt. Ltd.)
// ==========================================================================
window.lastOrderInvoiceData = null;

// Generate structured invoice data
function createInvoiceData(name, phone, flat, landmark, city, stateVal, pincode, channel) {
  let subtotal = 0;
  let savings = 0;
  const items = state.cart.map(item => {
    const itemSub = item.price * item.qty;
    subtotal += itemSub;
    savings += (item.mrp - item.price) * item.qty;
    return {
      name: item.name,
      weight: item.weight,
      qty: item.qty,
      mrp: item.mrp,
      price: item.price,
      total: itemSub
    };
  });

  const deliveryFee = subtotal >= 499 ? 0 : 40;
  const grandTotal = subtotal + deliveryFee;
  const invoiceNo = 'RS-' + Date.now().toString().slice(-6);
  const now = new Date();
  const dateFormatted = now.toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric'
  }) + ', ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const paymentMode = 'cod';
  const paymentLabel = 'Cash on Delivery (COD)';

  return {
    invoiceNo,
    date: dateFormatted,
    gstin: '10REAPK9623A1ZS',
    fssai: '20426093000164',
    proprietor: 'Vishal Kumar',
    tradeName: 'RASESHWARI',
    plantAddress: 'Bhoopbhairo (Ward No. 06), Bhairo Bhup, Dumra, Sitamarhi, Bihar - 843302',
    phone1: '+91 99055 61443',
    phone2: '+91 98356 54983',
    channel: channel === 'whatsapp' ? 'WhatsApp Direct' : (channel === 'email' ? 'Email Direct' : 'Phone / SMS'),
    paymentMode,
    paymentLabel,
    name,
    phone,
    flat,
    landmark,
    city,
    state: stateVal,
    pincode,
    fullAddress: `${flat}, ${landmark}, ${city}, ${stateVal} - ${pincode}`,
    items,
    subtotal,
    savings,
    deliveryFee,
    grandTotal
  };
}

// Build Official HTML Invoice Template
// Build Clean, Professional Self-Contained Invoice HTML (Used for Preview, Single-Page PDF & Print)
function buildInvoiceHTML(data) {
  return `
  <div id="invoice-printable" class="invoice-paper">
    <!-- Header -->
    <div class="inv-head">
      <div class="inv-brand">
        <img src="https://lh3.googleusercontent.com/d/17_ILxbUAwr-_-HqExmbNXJlEyY3REHZR" alt="Raseshwari Spices Logo" class="inv-logo-img" referrerpolicy="no-referrer" />
        <div class="inv-brand-info">
          <h2>RASESHWARI FOODS PVT. LTD.</h2>
          <div class="inv-brand-sub">Raseshwari Spices (Pure & Traditional Spices)</div>
          <div class="inv-plant-addr">
            Bhoopbhairo (Ward No. 06), Bhairo Bhup, Dumra, Sitamarhi, Bihar - 843302, India (GSTIN: 10REAPK9623A1ZS • FSSAI: 20426093000164)<br>
            <strong>Line 1:</strong> +91 99055 61443 | <strong>Line 2:</strong> +91 98356 54983 | <strong>Email:</strong> raseshwarimasala@gmail.com
          </div>
        </div>
      </div>
      <div class="inv-meta">
        <div class="inv-badge-official">OFFICIAL RETAIL INVOICE</div>
        <div class="inv-meta-row"><span>Invoice No:</span> <strong>${data.invoiceNo}</strong></div>
        <div class="inv-meta-row"><span>Date & Time:</span> <span>${data.date}</span></div>
        <div class="inv-meta-row"><span>GSTIN:</span> <strong>10REAPK9623A1ZS</strong></div>
        <div class="inv-meta-row"><span>FSSAI Lic:</span> <strong>20426093000164</strong></div>
        <div class="inv-meta-row"><span>Order Channel:</span> <span>${data.channel || 'Direct Order'}</span></div>
        <div class="inv-meta-row"><span>Payment Mode:</span> <strong style="color: #15803D;">${data.paymentLabel || 'Cash on Delivery (COD)'}</strong></div>
      </div>
    </div>

    <div class="inv-divider"></div>

    <!-- Special Thanks Banner -->
    <div class="inv-special-thanks">
      <div class="inv-thanks-icon">❤️ 🙏</div>
      <div class="inv-thanks-body">
        <h4>Special Thanks for Choosing Raseshwari Spices!</h4>
        <p>Dear <strong>${data.name}</strong>, thank you for placing your trust in our authentic cold stone-ground spices. Your purchase directly supports traditional spice millers in Sitamarhi, Bihar. May our 100% pure spices bring divine aroma, vibrant health, and delicious taste to your kitchen!</p>
      </div>
    </div>

    <!-- Address Grid -->
    <div class="inv-addr-grid">
      <div class="inv-addr-box">
        <span class="inv-box-label">Dispatched From (Spice Plant):</span>
        <div class="inv-box-content">
          <strong>Raseshwari Foods Pvt. Ltd. (Spice Plant)</strong><br>
          Near Gandhi Chowk, Station Road<br>
          District Sitamarhi, Bihar - 843302<br>
          Plant Helpline: +91 99055 61443
        </div>
      </div>
      <div class="inv-addr-box customer">
        <span class="inv-box-label">Delivered & Billed To:</span>
        <div class="inv-box-content">
          <strong class="inv-cust-name">${data.name}</strong><br>
          <strong>Phone / WhatsApp:</strong> ${data.phone}<br>
          <strong>Address:</strong> ${data.flat}, ${data.landmark}<br>
          ${data.city}, ${data.state} - <strong>${data.pincode}</strong>
        </div>
      </div>
    </div>

    <!-- Items Table -->
    <table class="inv-table">
      <thead>
        <tr>
          <th style="width: 32px; text-align: center;">#</th>
          <th>Spice Product Description</th>
          <th style="width: 80px; text-align: center;">Pack Size</th>
          <th style="width: 45px; text-align: center;">Qty</th>
          <th style="width: 70px; text-align: right;">MRP (₹)</th>
          <th style="width: 70px; text-align: right;">Rate (₹)</th>
          <th style="width: 85px; text-align: right;">Total (₹)</th>
        </tr>
      </thead>
      <tbody>
        ${data.items.map((it, idx) => `
          <tr>
            <td style="text-align: center;">${idx + 1}</td>
            <td>
              <strong>${it.name}</strong>
              <div class="inv-item-tag">100% Pure Cold Stone-Ground Spices</div>
            </td>
            <td style="text-align: center;">${it.weight}</td>
            <td style="text-align: center;">${it.qty}</td>
            <td style="text-align: right; color: #94A3B8; text-decoration: line-through;">₹${it.mrp}</td>
            <td style="text-align: right; font-weight: 600;">₹${it.price}</td>
            <td style="text-align: right; font-weight: 700; color: #991B1B;">₹${it.total}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <!-- Totals & Notes -->
    <div class="inv-summary-grid">
      <div class="inv-notes">
        <h5>Quality & Purity Assurance:</h5>
        <ul>
          <li>✔ 100% Zero Adulteration & Chemical-free Guarantee.</li>
          <li>✔ Cold stone-ground to preserve natural essential oils and aroma.</li>
          <li>✔ FSSAI Registered manufacturing unit (Lic No. 20426093000164).</li>
          <li>✔ Farm-direct sourcing from Sitamarhi, Bihar farmers.</li>
        </ul>
      </div>
      <div class="inv-totals">
        <div class="inv-tot-row"><span>Items Subtotal:</span> <span>₹${data.subtotal}</span></div>
        <div class="inv-tot-row savings"><span>Total Savings (Discount):</span> <span>- ₹${data.savings}</span></div>
        <div class="inv-tot-row"><span>Delivery Charges:</span> <span style="color: #16A34A; font-weight: 700;">${data.deliveryFee === 0 ? 'FREE Express Delivery' : '₹' + data.deliveryFee}</span></div>
        <div class="inv-tot-row grand-total"><span>Final Total Payable:</span> <span>₹${data.grandTotal}</span></div>
      </div>
    </div>

    <!-- Signatory & Stamp -->
    <div class="inv-footer-strip">
      <div class="inv-decl">
        <p>This is a computer-generated official retail sales invoice issued by Raseshwari Foods Pvt. Ltd., Sitamarhi, Bihar.</p>
        <p>For any queries or bulk wholesale orders, contact <strong>+91 99055 61443</strong> or email <strong>raseshwarimasala@gmail.com</strong>.</p>
        <p style="margin-top: 4px; font-size: 0.74rem; color: #64748B;">&copy; 2026 <strong>Raseshwarimasala.com</strong> &bull; <strong>Raseshwari Foods Pvt. Ltd.</strong> &bull; All Rights Reserved</p>
      </div>
      <div class="inv-sign-col">
        <div class="inv-stamp">
          <span>RASESHWARI FOODS</span>
          <small>SITAMARHI, BIHAR</small>
          <span>★ VERIFIED ★</span>
        </div>
        <div class="inv-sign-label">Authorized Signatory</div>
      </div>
    </div>
  </div>
  `;
}

// Build Dedicated Clean Printable Invoice HTML (Full Width 100%, Perfect A4 Proportions, No Awkward Splits)
// ==========================================================================
// 100% VECTOR HIGH-PRECISION INVOICE & PRINT-TO-PDF SYSTEM
// ==========================================================================

function buildCleanPrintableInvoiceHTML(data) {
  const RASESHWARI_LOGO_DATA_URI = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAQABAADASIAAhEBAxEB/8QAHgABAAIBBQEBAAAAAAAAAAAAAAgJBwECBAUGCgP/xABxEAABAwMCAwUEBAcHDAoNBw0BAAIDBAUGBxEIEiEJMUFRYRMicYEUMpGSFSNCUlOCoTNicqKxs9MWFxkkNjhDc3R1lbIYRGOTlKPB0dLwJSg0N1RVVmSDhbTCwyYnRUZHV2WExNTxZuI1dpakpbXh/8QAHAEBAAICAwEAAAAAAAAAAAAAAAUGBAcBAwgC/8QASxEAAgEDAQQFCQQHBgUDBQEAAAECAwQFEQYSITEHQVFhcRMUIjKBkaGx0RVCUsEjMzRicuHwFhdTgpKiJDVDssI2VPElRGNz0uL/2gAMAwEAAhEDEQA/AIZIiLWh7jCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCI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AREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARb/AGM36J/3SnsZfGJ/3Sh86mxFv9jL+ik+6U9jN+if90oc6mxFv9jN+if90p7Gb9E/7pQ41NiLf7Gb9E/7pT2M36J/3Sg1NiLf7Gb9E/7pT2M36J/3Sg1NiLf7Gb9E/wC6U9jN+if90oNTYi3+xm/RP+6U9jN+if8AdKDU2It/sZv0T/ulPYzfon/dKDU2It/sZv0T/ulPYzfon/dKDU2It/sZv0T/ALpT2M36J/3Sg1NiLf7Gb9E/7pT2M36J/wB0oNTYi3+xm/RP+6U9jN+if90oNTYi3+xm/RP+6U9jN+if90oNTYi3+xm/RP8AulPYzfon/dKDU2It/sZv0T/ulPYzfon/AHSg1NiLf7Gb9E/7pT2M36J/3Sg1NiLf7Gb9E/7pT2M36J/3Sg1NiLf7Gb9E/wC6U9jN+if90oNTYi3+xm/RP+6U9jN+if8AdKDU2It/sZv0T/ulPYzfon/dKDU2It/sZv0T/ulPYzfon/dKDU2It/sZv0T/ALpT2M36J/3Sg1NiLf7Gb9E/7pT2M36J/wB0oNTYi3+xm/RP+6U9jN+if90oNTYi3+xm/RP+6U9jN+if90oNTYi3+xm/RP8AulPYzfon/dKDU2It/sZv0T/ulPYzfon/AHSg1NiLf7Gb9E/7pT2M36J/3Sg1NiLf7Gb9E/7pT2M36J/3Sg1NiLf7Gb9E/wC6U9jN+if90oNTYi3+xm/RP+6U9jN+if8AdKDU2It/sZv0T/ulPYzfon/dKDU2It/sZv0T/ulPYzfon/dKDU2It/sZv0T/ALpT2M36J/3Sg1NiLf7Gb9E/7pT2M36J/wB0oNTYi3+xm/RP+6U9jN+if90oNTYi3+xm/RP+6U9jN+if90oNTYi3+xm/RP8AulPYzfon/dKDU2It/sZv0T/ulPYzfon/AHSg1NiLf7Gb9E/7pT2M36J/3Sg1NiLf7Gb9E/7pT2M36J/3Sg1NiLf7Gb9E/wC6U9jN+if90oNTYi3+xm/RP+6U9jN+if8AdKDU2It/sZv0T/ulPYzfon/dKDU2It/sZv0T/ulPYzfon/dKDU2It/sZv0T/ALpT2M36J/3Sg1NiLf7Gb9E/7pT2M36J/wB0oNTYi3+xm/RP+6U9jN+if90oNTYi3+xm/RP+6U9jN+if90oNTYi3+xm/RP8AulPYzfon/dKDU2It/sZv0T/ulPYzfon/AHSg1NiLf7Gb9E/7pT2M36J/3Sg1NiLf7Gb9E/7pT2M36J/3Sg1NiLf7Gb9E/wC6U9jN+if90oNTYi3+xm/RP+6U9jN+if8AdKDU2It/sZv0T/ulPYzfon/dKDU2It/sZv0T/ulPYzfon/dKDU2It/sZv0T/ALpT2M36J/3Sg1NiLf7Gb9E/7pT2M36J/wB0oNTYi3+xm/RP+6U9jN+if90oNTYi3+xm/RP+6U9jN+if90oNTYi3+xm/RP8AulPYzfon/dKDU2It/sZv0T/ulPYzfon/AHSg1NiLf7Gb9E/7pT2M36J/3Sg1P//Z";
  const logoSrc = RASESHWARI_LOGO_DATA_URI || 'https://lh3.googleusercontent.com/d/17_ILxbUAwr-_-HqExmbNXJlEyY3REHZR';

  if (data && data.isB2B) {
    return `
    <div class="printable-invoice-wrapper" style="width: 100% !important; max-width: 100% !important; margin: 0 auto; background: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0F172A; line-height: 1.35; box-sizing: border-box;">
      
      <!-- Top Brand Header Block -->
      <div class="inv-avoid-split" style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2.5px solid #991B1B; padding-bottom: 10px; page-break-inside: avoid !important; break-inside: avoid !important;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <img src="${logoSrc}" alt="Logo" style="width: 52px; height: 52px; border-radius: 8px; object-fit: cover; border: 1.5px solid #E2E8F0;" />
          <div>
            <h2 style="margin: 0; color: #991B1B; font-size: 19px; font-weight: 800; letter-spacing: 0.5px;">RASESHWARI FOODS PVT. LTD.</h2>
            <div style="font-size: 11.5px; color: #D97706; font-weight: 700; margin-top: 1px;">Raseshwari Spices (Pure & Traditional Spices)</div>
            <div style="font-size: 9px; color: #475569; margin-top: 3px; line-height: 1.4;">
              Bhoopbhairo (Ward No. 06), Bhairo Bhup, Dumra, Sitamarhi, Bihar - 843302, India<br>
              <strong>Wholesale Desk:</strong> +91 98356 54983 | <strong>Plant Desk:</strong> +91 99055 61443 | <strong>GSTIN:</strong> 10REAPK9623A1ZS | <strong>FSSAI Lic:</strong> 20426093000164
            </div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="background: #15803D; color: #FFFFFF; font-size: 9px; font-weight: 800; padding: 4px 10px; border-radius: 4px; display: inline-block; letter-spacing: 0.5px;">OFFICIAL B2B PROFORMA TAX INVOICE</div>
          <div style="font-size: 11px; margin-top: 5px;"><strong>Proforma No:</strong> <span style="color: #991B1B; font-weight: 800;">${data.invoiceNo}</span></div>
          <div style="font-size: 9px; color: #64748B; margin-top: 2px;">Date: <strong>${data.date}</strong></div>
          <div style="font-size: 8.5px; color: #64748B;">Supplier GSTIN: <strong style="color: #0F172A;">10REAPK9623A1ZS</strong></div>
          <div style="font-size: 8.5px; color: #64748B;">Sourcing Mode: <strong>Direct Factory Bulk Milling</strong></div>
          <div style="font-size: 8.5px; color: #64748B;">Payment Terms: <strong style="color: #15803D;">${data.paymentLabel || 'Commercial Invoice'}</strong></div>
        </div>
      </div>

      <!-- B2B Entity / Customer Info Grid -->
      <div class="inv-avoid-split" style="margin-top: 8px; display: flex; justify-content: space-between; gap: 10px; font-size: 9px; page-break-inside: avoid !important; break-inside: avoid !important;">
        <div style="flex: 1; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px;">
          <div style="font-size: 8px; font-weight: 800; color: #64748B; text-transform: uppercase; margin-bottom: 2px;">Supplier Mill & Manufacturing Plant:</div>
          <strong style="color: #1E293B; font-size: 10.5px;">RASESHWARI (Spice Mill Unit)</strong><br>
          Bhoopbhairo (Ward No. 06), Bhairo Bhup, Dumra<br>
          District Sitamarhi, Bihar - 843302<br>
          <strong>Wholesale Desk:</strong> +91 98356 54983 | <strong>Plant Desk:</strong> +91 99055 61443<br>
          <strong>Proprietor:</strong> Vishal Kumar
        </div>
        <div style="flex: 1; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px;">
          <div style="font-size: 8px; font-weight: 800; color: #64748B; text-transform: uppercase; margin-bottom: 2px;">Billed & Dispatched To:</div>
          <strong style="color: #991B1B; font-size: 11px;">${data.buyerBusiness}</strong><br>
          <strong>Contact Person:</strong> ${data.name} | <strong>Mobile / WA:</strong> +91 ${data.phone}<br>
          <strong>Buyer GSTIN:</strong> <strong style="color: #0F172A;">${data.buyerGstin}</strong><br>
          <strong>Delivery Destination:</strong> ${data.fullAddress}<br>
          ${data.notes ? `<em>Milling Notes: ${data.notes}</em>` : ''}
        </div>
      </div>

      <!-- Items Table -->
      <table style="width: 100% !important; margin-top: 10px; border-collapse: collapse; font-size: 9px;">
        <thead>
          <tr style="background: #0F172A; color: #FFFFFF; border-top: 1.5px solid #0F172A; border-bottom: 1.5px solid #0F172A; page-break-inside: avoid !important;">
            <th style="padding: 6px 8px; text-align: center; width: 28px; color: #FFFFFF;">#</th>
            <th style="padding: 6px 8px; text-align: left; color: #FFFFFF;">Commercial Spice Description & Milling</th>
            <th style="padding: 6px 8px; text-align: center; width: 65px; color: #FFFFFF;">HSN</th>
            <th style="padding: 6px 8px; text-align: center; width: 100px; color: #FFFFFF;">Bag / Pack Size</th>
            <th style="padding: 6px 8px; text-align: center; width: 45px; color: #FFFFFF;">Bags</th>
            <th style="padding: 6px 8px; text-align: right; width: 65px; color: #FFFFFF;">Net Wt.</th>
            <th style="padding: 6px 8px; text-align: right; width: 75px; color: #FFFFFF;">Factory Rate</th>
            <th style="padding: 6px 8px; text-align: right; width: 80px; color: #FFFFFF;">Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${data.items.map((it, idx) => `
            <tr style="border-bottom: 1px solid #E2E8F0; ${idx % 2 === 1 ? 'background: #F8FAFC;' : 'background: #FFFFFF;'}; page-break-inside: avoid !important; break-inside: avoid !important;">
              <td style="padding: 5px 8px; text-align: center;">${idx + 1}</td>
              <td style="padding: 5px 8px;">
                <strong style="color: #0F172A;">${it.name}</strong>
                <div style="font-size: 8px; color: #64748B;">Milling: ${it.grind}</div>
              </td>
              <td style="padding: 5px 8px; text-align: center; color: #64748B;">${it.hsn}</td>
              <td style="padding: 5px 8px; text-align: center; color: #334155;">${it.pack}</td>
              <td style="padding: 5px 8px; text-align: center; font-weight: 700;">${it.qty}</td>
              <td style="padding: 5px 8px; text-align: right; font-weight: 600; color: #1E293B;">${it.weightKg} kg</td>
              <td style="padding: 5px 8px; text-align: right; color: #475569;">₹${it.price}/kg</td>
              <td style="padding: 5px 8px; text-align: right; font-weight: 700; color: #991B1B;">₹${it.total.toLocaleString('en-IN')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Summary & B2B Assurance Block -->
      <div class="inv-summary-section" style="margin-top: 10px; page-break-inside: avoid !important; break-inside: avoid !important;">
        <div style="display: flex; justify-content: space-between; align-items: stretch; gap: 12px;">
          <!-- Assurance & Bank Terms -->
          <div style="flex: 1; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; font-size: 8.5px; color: #475569; line-height: 1.4;">
            <strong style="color: #1E293B; font-size: 9px; text-transform: uppercase;">Commercial Terms & Purity Assurance:</strong><br>
            ✔ 100% Cold Stone-Ground Milling from Sitamarhi, Bihar.<br>
            ✔ Form GST REG-06 Registered Enterprise (GSTIN: 10REAPK9623A1ZS) for Input Tax Credit.<br>
            ✔ FSSAI Registered Food Unit (Registration No. 20426093000164).<br>
            ✔ Road Cargo Transport: Direct factory dispatch to destination cargo depot / door.
          </div>

          <!-- Totals Box -->
          <div style="width: 260px; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; font-size: 9px; box-sizing: border-box;">
            <div style="display: flex; justify-content: space-between; padding: 2px 0; color: #64748B;">
              <span>Total Net Weight:</span>
              <strong style="color: #0F172A;">${data.totalWeight} kg</strong>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 2px 0; color: #64748B;">
              <span>Base Factory Subtotal:</span>
              <span style="font-weight: 600; color: #1E293B;">₹${data.subtotal.toLocaleString('en-IN')}</span>
            </div>
            ${data.discountAmount > 0 ? `
              <div style="display: flex; justify-content: space-between; padding: 2px 0; color: #16A34A;">
                <span>Volume Tier Discount (${data.discountRate}%):</span>
                <span style="font-weight: 600;">- ₹${data.discountAmount.toLocaleString('en-IN')}</span>
              </div>
            ` : ''}
            <div style="display: flex; justify-content: space-between; padding: 2px 0; color: #16A34A; font-weight: 600;">
              <span>Road Cargo Booking:</span>
              <span>FREE</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 4px 0 2px; margin-top: 3px; border-top: 2px solid #991B1B; font-size: 13px; font-weight: 800; color: #991B1B;">
              <span>Net Payable Total:</span>
              <span>₹${data.grandTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        <!-- Footer & Official Seal -->
        <div style="margin-top: 10px; border-top: 1px dashed #CBD5E1; padding-top: 6px; display: flex; justify-content: space-between; align-items: center; font-size: 8.5px; color: #64748B;">
          <div>
            Official B2B Proforma Invoice issued by RASESHWARI (Raseshwari Foods Pvt. Ltd.), Sitamarhi, Bihar.<br>
            <strong>Wholesale Desk:</strong> +91 98356 54983 | <strong>Helpline:</strong> +91 99055 61443 | <strong>Email:</strong> raseshwarimasala@gmail.com
          </div>
          <div style="text-align: right; border: 1.5px dashed #15803D; padding: 3px 8px; border-radius: 6px; background: #F0FDF4; display: inline-block;">
            <div style="font-size: 7.5px; font-weight: 800; color: #15803D; text-transform: uppercase;">RASESHWARI • SITAMARHI</div>
            <div style="font-size: 9px; font-weight: 800; color: #15803D; letter-spacing: 0.5px;">★ B2B WHOLESALE VERIFIED ★</div>
            <div style="font-size: 7.5px; color: #64748B;">Authorized Signatory</div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  return `
    <div class="printable-invoice-wrapper" style="width: 100% !important; max-width: 100% !important; margin: 0 auto; background: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0F172A; line-height: 1.35; box-sizing: border-box;">
      
      <!-- Top Brand Header Block -->
      <div class="inv-avoid-split" style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2.5px solid #991B1B; padding-bottom: 10px; page-break-inside: avoid !important; break-inside: avoid !important;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <img src="${logoSrc}" alt="Logo" style="width: 52px; height: 52px; border-radius: 8px; object-fit: cover; border: 1.5px solid #E2E8F0;" />
          <div>
            <h2 style="margin: 0; color: #991B1B; font-size: 19px; font-weight: 800; letter-spacing: 0.5px;">RASESHWARI FOODS PVT. LTD.</h2>
            <div style="font-size: 11.5px; color: #D97706; font-weight: 700; margin-top: 1px;">Raseshwari Spices (Pure & Traditional Spices)</div>
            <div style="font-size: 9px; color: #475569; margin-top: 3px; line-height: 1.4;">
              Bhoopbhairo (Ward No. 06), Bhairo Bhup, Dumra, Sitamarhi, Bihar - 843302, India<br>
              <strong>Line 1 (Orders):</strong> +91 99055 61443 | <strong>Line 2 (Support):</strong> +91 98356 54983 | <strong>GSTIN:</strong> 10REAPK9623A1ZS | <strong>FSSAI Lic:</strong> 20426093000164
            </div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="background: #991B1B; color: #FFFFFF; font-size: 9px; font-weight: 800; padding: 4px 10px; border-radius: 4px; display: inline-block; letter-spacing: 0.5px;">OFFICIAL RETAIL INVOICE</div>
          <div style="font-size: 11px; margin-top: 5px;"><strong>Invoice No:</strong> <span style="color: #991B1B; font-weight: 800;">${data.invoiceNo}</span></div>
          <div style="font-size: 9px; color: #64748B; margin-top: 2px;">Date: <strong>${data.date}</strong></div>
          <div style="font-size: 8.5px; color: #64748B;">GSTIN: <strong style="color: #0F172A;">10REAPK9623A1ZS</strong></div>
          <div style="font-size: 8.5px; color: #64748B;">Order Channel: <strong>${data.channel || 'Direct Store Order'}</strong></div>
          <div style="font-size: 8.5px; color: #64748B;">Payment Mode: <strong style="color: #15803D;">${data.paymentLabel || 'Cash on Delivery (COD)'}</strong></div>
        </div>
      </div>

      <!-- Special Thanks Box -->
      <div class="inv-avoid-split" style="margin-top: 8px; padding: 8px 12px; background: #FFFBEB; border: 1px solid #FDE68A; border-left: 4px solid #D97706; border-radius: 6px; font-size: 9px; color: #92400E; line-height: 1.35; page-break-inside: avoid !important; break-inside: avoid !important;">
        <strong style="color: #B45309; font-size: 10px;">★ Special Thanks for Choosing Raseshwari Spices!</strong><br>
        Dear <strong>${data.name}</strong>, thank you for your purchase. Your order directly supports heritage cold stone-ground spice craftsmen in Sitamarhi, Bihar. May our pure spices bring divine aroma, vibrant health, and authentic taste to your family!
      </div>

      <!-- Address Grid -->
      <div class="inv-avoid-split" style="margin-top: 8px; display: flex; justify-content: space-between; gap: 10px; font-size: 9px; page-break-inside: avoid !important; break-inside: avoid !important;">
        <div style="flex: 1; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px;">
          <div style="font-size: 8px; font-weight: 800; color: #64748B; text-transform: uppercase; margin-bottom: 2px;">Dispatched From (Processing Plant):</div>
          <strong style="color: #1E293B;">RASESHWARI (Spice Mill Unit)</strong><br>
          Bhoopbhairo (Ward No. 06), Bhairo Bhup, Dumra<br>
          Sitamarhi, Bihar - 843302<br>
          Line 1: +91 99055 61443 | Line 2: +91 98356 54983
        </div>
        <div style="flex: 1; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px;">
          <div style="font-size: 8px; font-weight: 800; color: #64748B; text-transform: uppercase; margin-bottom: 2px;">Delivered & Billed To:</div>
          <strong style="color: #991B1B; font-size: 10.5px;">${data.name}</strong><br>
          <strong>Phone / WhatsApp:</strong> ${data.phone}<br>
          <strong>Address:</strong> ${data.flat}, ${data.landmark}<br>
          ${data.city}, ${data.state} - <strong>${data.pincode}</strong>
        </div>
      </div>

      <!-- Items Table (Full Width, Avoid Row Breaks) -->
      <table style="width: 100% !important; margin-top: 10px; border-collapse: collapse; font-size: 9px;">
        <thead>
          <tr style="background: #991B1B; color: #FFFFFF; border-top: 1.5px solid #991B1B; border-bottom: 1.5px solid #991B1B; page-break-inside: avoid !important;">
            <th style="padding: 6px 8px; text-align: center; width: 30px; color: #FFFFFF;">#</th>
            <th style="padding: 6px 8px; text-align: left; color: #FFFFFF;">Spice Product Description</th>
            <th style="padding: 6px 8px; text-align: center; width: 75px; color: #FFFFFF;">Pack Size</th>
            <th style="padding: 6px 8px; text-align: center; width: 40px; color: #FFFFFF;">Qty</th>
            <th style="padding: 6px 8px; text-align: right; width: 65px; color: #FFFFFF;">MRP (₹)</th>
            <th style="padding: 6px 8px; text-align: right; width: 65px; color: #FFFFFF;">Rate (₹)</th>
            <th style="padding: 6px 8px; text-align: right; width: 75px; color: #FFFFFF;">Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${data.items.map((it, idx) => `
            <tr style="border-bottom: 1px solid #E2E8F0; ${idx % 2 === 1 ? 'background: #F8FAFC;' : 'background: #FFFFFF;'}; page-break-inside: avoid !important; break-inside: avoid !important;">
              <td style="padding: 5px 8px; text-align: center;">${idx + 1}</td>
              <td style="padding: 5px 8px;">
                <strong style="color: #0F172A;">${it.name}</strong>
                <div style="font-size: 8px; color: #64748B;">100% Pure Cold Stone-Ground Spices</div>
              </td>
              <td style="padding: 5px 8px; text-align: center; color: #475569;">${it.weight}</td>
              <td style="padding: 5px 8px; text-align: center; font-weight: 600;">${it.qty}</td>
              <td style="padding: 5px 8px; text-align: right; color: #94A3B8; text-decoration: line-through;">₹${it.mrp}</td>
              <td style="padding: 5px 8px; text-align: right; font-weight: 600; color: #334155;">₹${it.price}</td>
              <td style="padding: 5px 8px; text-align: right; font-weight: 700; color: #991B1B;">₹${it.total}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Unified Summary, Quality Box & Official Stamp Block -->
      <div class="inv-summary-section" style="margin-top: 10px; page-break-inside: avoid !important; break-inside: avoid !important;">
        
        <div style="display: flex; justify-content: space-between; align-items: stretch; gap: 12px;">
          <!-- Quality Assurance -->
          <div style="flex: 1; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; font-size: 8.5px; color: #475569; line-height: 1.4;">
            <strong style="color: #1E293B; font-size: 9px; text-transform: uppercase;">Quality & Purity Assurance:</strong><br>
            ✔ 100% Zero Adulteration & Chemical-free Guarantee.<br>
            ✔ Cold stone-ground technology preserves natural essential oils & aroma.<br>
            ✔ FSSAI Registered manufacturing unit (Lic No. 20426093000164).<br>
            ✔ Farm-direct sourcing from Sitamarhi, Bihar spice growers.
          </div>

          <!-- Totals Box -->
          <div style="width: 250px; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; font-size: 9px; box-sizing: border-box;">
            <div style="display: flex; justify-content: space-between; padding: 2px 0; color: #64748B;">
              <span>Items Subtotal:</span>
              <span style="font-weight: 600; color: #1E293B;">₹${data.subtotal}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 2px 0; color: #16A34A;">
              <span>Total Savings (Discount):</span>
              <span style="font-weight: 600;">- ₹${data.savings}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 2px 0; color: #16A34A; font-weight: 600;">
              <span>Delivery Charges:</span>
              <span>FREE Express</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 4px 0 2px; margin-top: 3px; border-top: 2px solid #991B1B; font-size: 13px; font-weight: 800; color: #991B1B;">
              <span>Final Total Payable:</span>
              <span>₹${data.grandTotal}</span>
            </div>
          </div>
        </div>

        <!-- Footer & Stamp -->
        <div style="margin-top: 10px; border-top: 1px dashed #CBD5E1; padding-top: 6px; display: flex; justify-content: space-between; align-items: center; font-size: 8.5px; color: #64748B;">
          <div>
            This is an official computer-generated retail sales invoice issued by Raseshwari Foods Pvt. Ltd., Sitamarhi, Bihar.<br>
            <strong>Website:</strong> Raseshwarimasala.com | <strong>Line 1:</strong> +91 99055 61443 | <strong>Email:</strong> raseshwarimasala@gmail.com<br>
            <span style="font-size: 8px; color: #64748B;">&copy; 2026 <strong>Raseshwarimasala.com</strong> &bull; <strong>Raseshwari Foods Pvt. Ltd.</strong> &bull; All Rights Reserved</span>
          </div>
          <div style="text-align: right; border: 1.5px dashed #991B1B; padding: 3px 8px; border-radius: 6px; background: #FEF2F2; display: inline-block;">
            <div style="font-size: 7.5px; font-weight: 800; color: #991B1B; text-transform: uppercase;">RASESHWARI FOODS PVT. LTD.</div>
            <div style="font-size: 9px; font-weight: 800; color: #991B1B; letter-spacing: 0.5px;">★ VERIFIED OFFICIAL SEAL ★</div>
            <div style="font-size: 7.5px; color: #64748B;">Authorized Signatory</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Uniformly map buildInvoiceHTML to buildCleanPrintableInvoiceHTML
function buildInvoiceHTML(data) {
  return buildCleanPrintableInvoiceHTML(data);
}

// Show Invoice Modal
function showInvoiceModal(data) {
  window.lastOrderInvoiceData = data;
  try {
    localStorage.setItem('raseshwari_last_invoice', JSON.stringify(data));
  } catch (err) {}
  const container = document.getElementById('invoice-preview-container');
  if (container) {
    container.innerHTML = buildCleanPrintableInvoiceHTML(data);
    container.scrollTop = 0;
  }
  const modal = document.getElementById('invoice-modal-overlay');
  if (modal) {
    modal.classList.add('active');
    attachFormValidations();
    document.body.style.overflow = 'hidden';
  }
}

// Close Invoice Modal
function closeInvoiceModal(e) {
  if (e && e.target && e.target.id !== 'invoice-modal-overlay' && !e.target.classList.contains('btn-close-invoice-modal')) {
    return;
  }
  const modal = document.getElementById('invoice-modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Format WhatsApp Order Message Text
function buildWhatsAppOrderMessage(data) {
  const numEmojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
  let itemsLines = [];
  data.items.forEach((it, idx) => {
    const prefix = numEmojis[idx] || `*${idx + 1}.*`;
    itemsLines.push(`${prefix} *${it.name}*\n    ▫ Pack: *${it.weight}*  |  Qty: *${it.qty}*  |  Amount: *₹${it.total}*`);
  });
  const itemsSummary = itemsLines.join('\n');

  let invoiceUrl = '';
  if (typeof window !== 'undefined' && window.location && window.location.origin && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    invoiceUrl = `${window.location.origin}/invoice.html?id=${data.invoiceNo}`;
  }

  const deliveryStr = (data.deliveryFee === 0 || data.deliveryFee === '0') ? 'FREE Express' : `₹${data.deliveryFee}`;

  let formattedPhone = (data.phone || '').trim();
  const digitsOnly = formattedPhone.replace(/\D/g, '');
  if (!formattedPhone.startsWith('+') && digitsOnly.length === 10) {
    formattedPhone = `+91 ${digitsOnly}`;
  }

  let msg = `✨━━━━━━━━━━━━━━━━━━━━━━✨\n`;
  msg += `   🌿 *RASESHWARI FOODS* 🌿\n`;
  msg += `   _Taste of Tradition • Sitamarhi_\n`;
  msg += `✨━━━━━━━━━━━━━━━━━━━━━━✨\n`;
  msg += `📋 *OFFICIAL ORDER & BILL RECEIPT*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  msg += `🆔 *Invoice No:* *#${data.invoiceNo}*\n`;
  msg += `📅 *Date & Time:* ${data.date}\n`;
  msg += `🏛 *Govt. Approved:*\n`;
  msg += `   • GSTIN: *10REAPK9623A1ZS*\n`;
  msg += `   • FSSAI Lic: *20426093000164*\n\n`;

  msg += `🛒 *ORDERED SPICES & ITEMS*\n`;
  msg += `────────────────────────\n`;
  msg += `${itemsSummary}\n`;
  msg += `────────────────────────\n`;

  msg += `💵 *BILLING BREAKUP*\n`;
  msg += `• Items Subtotal: *₹${data.subtotal}*\n`;
  msg += `• Discount Savings: *-₹${data.savings}*\n`;
  msg += `• Delivery Charges: *${deliveryStr}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 *TOTAL AMOUNT PAYABLE:* *₹${data.grandTotal}*\n`;
  msg += `💳 *Payment Mode:* *${data.paymentLabel || 'Cash on Delivery (COD)'}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  msg += `📍 *DELIVERY DESTINATION*\n`;
  msg += `👤 *Customer Name:* *${data.name}*\n`;
  msg += `📱 *Mobile No:* *${formattedPhone}*\n`;
  msg += `🏠 *Delivery Address:* ${data.fullAddress}\n\n`;

  msg += `🏛 *REGISTERED FIRM & PLANT DETAILS:*\n`;
  msg += `• Trade Name: *RASESHWARI* (Proprietor: Vishal Kumar)\n`;
  msg += `• GSTIN: *10REAPK9623A1ZS* | FSSAI: *20426093000164*\n`;
  msg += `• Address: Bhoopbhairo (Ward-06), Bhairo Bhup, Dumra, Sitamarhi, Bihar - 843302\n\n`;

  msg += `────────────────────────\n`;
  msg += `🌿 *Direct From Cold Stone Mill (Sitamarhi, Bihar)*\n`;
  msg += `📞 *Helpline 1:* +91 99055 61443\n`;
  msg += `📞 *Helpline 2:* +91 98356 54983\n\n`;
  msg += `★ *Note:* Please confirm my order and share the dispatch timeline. Thank you!`;

  return msg;
}

function downloadCurrentInvoicePDF(customData = null) {
  const data = customData || window.lastOrderInvoiceData;
  if (!data) {
    showToast('No active invoice to print / download.');
    return;
  }
  window.lastOrderInvoiceData = data;
  printCurrentInvoice(data, true);
}

// Order Confirmation & Print Bill Action (Unified Print Engine at Both Places)
function confirmOrderAndDownloadReceipt() {
  const data = window.lastOrderInvoiceData;
  if (!data) {
    showToast('No active invoice data to print.');
    return;
  }

  // Clear cart since order is confirmed
  try {
    if (typeof state !== 'undefined' && state.cart) {
      state.cart = [];
      if (typeof saveCart === 'function') saveCart();
      if (typeof updateCartUI === 'function') updateCartUI();
    }
  } catch (e) {
    console.error('Error clearing cart:', e);
  }

  // Execute unified native print engine
  printCurrentInvoice(data, true);
}

function showSuccessDownloadBanner(invoiceNo) {
  let banner = document.getElementById('invoice-download-success-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'invoice-download-success-banner';
    banner.className = 'download-success-banner';
    const container = document.getElementById('invoice-preview-container');
    if (container && container.parentNode) {
      container.parentNode.insertBefore(banner, container);
    }
  }
  banner.innerHTML = `
    <div class="banner-inner">
      <span class="banner-tick">🖨️</span>
      <div class="banner-text">
        <strong>Official Invoice Ready to Print! (बिल तैयार है)</strong>
        <p>Official invoice <strong>#${invoiceNo}</strong> ready. You can print directly or save as PDF.</p>
      </div>
    </div>
  `;
  banner.style.display = 'block';
}

// Universal High-Precision Print & PDF Generator (Native Browser Vector Print - No Slicing, Full Crisp Quality)
function printCurrentInvoice(customData = null, isDownload = true) {
  const data = customData || window.lastOrderInvoiceData;
  if (!data) {
    showToast('No active invoice to print.');
    return;
  }

  const invoiceNo = data.invoiceNo || ('RS-' + Date.now().toString().slice(-6));
  const pdfTitle = `Raseshwari_Invoice_${invoiceNo}`;

  // 1. Show user toast: Opening print dialog
  showToast('✓ Opening Print Dialog... 🖨️📄', { duration: 3500 });

  // 2. Show dedicated prominent banner inside the invoice modal
  showSuccessDownloadBanner(invoiceNo);

  // 3. Update all confirm buttons to green print state
  const allConfirmBtns = document.querySelectorAll('.btn-order-confirm-success');
  allConfirmBtns.forEach(btn => {
    btn.innerHTML = `
      <span class="confirm-success-icon">🖨️</span>
      <span class="confirm-success-text">Order Confirmed — Print Invoice (बिल प्रिंट करें)</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 6 2 18 2 18 9"></polyline>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
        <rect x="6" y="14" width="12" height="8"></rect>
      </svg>
    `;
    btn.style.background = 'linear-gradient(135deg, #15803D, #16A34A)';
  });

  // Temporarily set document title for default browser PDF filename
  const originalTitle = document.title;
  document.title = pdfTitle;

  const invoiceHtml = buildCleanPrintableInvoiceHTML(data);

  // Clean printable standalone document with fixed 1024 viewport to prevent mobile 3-page split
  const fullPrintDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1024, initial-scale=1">
  <title>${pdfTitle}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 8mm 10mm;
    }
    * {
      box-sizing: border-box !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      background: #FFFFFF !important;
      color: #0F172A !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
      font-size: 9.5pt !important;
      line-height: 1.35 !important;
      width: 100% !important;
    }
    .printable-invoice-wrapper {
      width: 100% !important;
      max-width: 190mm !important;
      margin: 0 auto !important;
      padding: 0 !important;
    }
    table {
      width: 100% !important;
      border-collapse: collapse !important;
      page-break-inside: auto;
    }
    thead {
      display: table-header-group !important;
    }
    tr {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }
    .inv-avoid-split,
    .inv-summary-section {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }
    .no-print {
      display: none !important;
    }
  </style>
</head>
<body>
  ${invoiceHtml}
</body>
</html>`;

  // Check mobile device:
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || '');
  if (isMobile) {
    fallbackPrintExecution(fullPrintDoc, pdfTitle);
    return;
  }

  // Standard silent iframe printing for desktop:
  let iframe = document.getElementById('raseshwari-print-frame');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'raseshwari-print-frame';
    iframe.setAttribute('style', 'position: fixed; top: 0; left: 0; width: 210mm; height: 297mm; border: none; z-index: -9999; opacity: 0.01; pointer-events: none;');
    document.body.appendChild(iframe);
  }

  try {
    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(fullPrintDoc);
    iframeDoc.close();

    setTimeout(() => {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } catch (errIframe) {
        console.warn('Iframe print error, falling back to window.print():', errIframe);
        fallbackPrintExecution(fullPrintDoc, pdfTitle);
      } finally {
        setTimeout(() => {
          document.title = originalTitle;
        }, 5000);
      }
    }, 350);

  } catch (err) {
    console.warn('Iframe write error, falling back to window.print():', err);
    fallbackPrintExecution(fullPrintDoc, pdfTitle);
  }
}

function fallbackPrintExecution(fullPrintDoc, pdfTitle) {
  const originalTitle = document.title;
  let printWindow = null;
  try {
    printWindow = window.open('', '_blank', 'width=950,height=1000');
  } catch (e) {
    printWindow = null;
  }

  if (printWindow && printWindow.document) {
    printWindow.document.open();
    printWindow.document.write(fullPrintDoc);
    printWindow.document.close();
    printWindow.focus();
    printWindow.onafterprint = function() {
      try { printWindow.close(); } catch(e) {}
    };
    setTimeout(() => {
      try { printWindow.print(); } catch(e) {}
    }, 450);
  } else {
    document.title = pdfTitle;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 4000);
  }
}

// Show Interactive WhatsApp Attachment Helper Modal
function showWhatsAppAttachmentGuide(invoiceNo, targetPhone, waUrl) {
  let overlay = document.getElementById('whatsapp-guide-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'whatsapp-guide-overlay';
    overlay.className = 'whatsapp-guide-overlay';
    overlay.onclick = closeWhatsAppGuideModal;
    document.body.appendChild(overlay);
  }

  const filename = `Raseshwari_Invoice_${invoiceNo}.pdf`;
  overlay.innerHTML = `
    <div class="whatsapp-guide-card" onclick="event.stopPropagation()">
      <div class="whatsapp-guide-header">
        <div class="whatsapp-guide-icon-badge">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
        <div>
          <h4>Official PDF Invoice Downloaded!</h4>
          <p>${filename}</p>
        </div>
        <button type="button" class="btn-close-invoice-modal" onclick="closeWhatsAppGuideModal()">&times;</button>
      </div>

      <div class="whatsapp-guide-body">
        <div class="guide-alert-box">
          <span style="font-size: 1.1rem; color: #16A34A; font-weight: bold;">✔</span>
          <span><strong>1-Page Official PDF Invoice</strong> aapke Downloads folder me save ho gaya hai!</span>
        </div>
        <p class="guide-instruction-title">WhatsApp par PDF attach karke kaise bhejein:</p>
        <div class="guide-step-row">
          <div class="guide-step-badge">1</div>
          <div class="guide-step-text">WhatsApp Web / App chat khul chuki hai (Order details pre-filled hai).</div>
        </div>
        <div class="guide-step-row">
          <div class="guide-step-badge">2</div>
          <div class="guide-step-text">Chat box ke niche <strong>📎 (Paperclip / Attach)</strong> icon par click karein.</div>
        </div>
        <div class="guide-step-row">
          <div class="guide-step-badge">3</div>
          <div class="guide-step-text"><strong>📄 Document</strong> select karein aur Downloads folder se <strong>${filename}</strong> chun kar Send karein!</div>
        </div>
      </div>

      <div class="whatsapp-guide-actions">
        <button type="button" class="btn btn-whatsapp-direct" onclick="window.open('${waUrl}', '_blank')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.077-2.127-.514-1.825-.757-3.003-2.613-3.094-2.735-.091-.122-.74-1.026-.74-1.956 0-.93.488-1.385.661-1.577.173-.192.38-.24.507-.24.126 0 .253.001.364.007.118.006.276-.045.431.328.158.381.543 1.328.591 1.425.048.096.08.209.016.335-.064.126-.096.205-.192.318-.096.113-.203.253-.29.34-.096.096-.197.201-.085.393.112.192.5 1.155 1.074 1.666.738.658 1.36.862 1.552.958.192.096.304.08.416-.048.113-.128.483-.561.611-.753.128-.192.257-.16.432-.096.176.064 1.116.526 1.309.622.192.096.321.144.369.224.048.08.048.465-.096.87zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.436 5.176L2 22l4.982-1.308A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
          <span>Open WhatsApp Chat</span>
        </button>
        <button type="button" class="btn btn-secondary-guide" onclick="closeWhatsAppGuideModal()">Theek Hai (Close)</button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
}

function closeWhatsAppGuideModal(e) {
  if (e && e.target && e.target.id !== 'whatsapp-guide-overlay' && !e.target.classList.contains('btn-close-invoice-modal')) {
    return;
  }
  const overlay = document.getElementById('whatsapp-guide-overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

// WhatsApp Order Flow
function triggerWhatsAppOrderWithInvoice(data, targetPhone = "919905561443") {
  const textMsg = buildWhatsAppOrderMessage(data);
  const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(textMsg)}`;
  window.open(waUrl, '_blank');
  showToast('Order details sent to WhatsApp! 🌿', { duration: 2000 });
}

// Send Detailed Invoice & Order Copy to Factory
function sendInvoiceCopyToCompany(targetPhone = "919905561443") {
  if (!window.lastOrderInvoiceData) {
    showToast('No invoice data available.');
    return;
  }
  const data = window.lastOrderInvoiceData;
  const text = buildWhatsAppOrderMessage(data);
  const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  showToast('Order invoice copy sent to company WhatsApp!');
}

function copyInvoiceText() {
  if (!window.lastOrderInvoiceData) return;
  const data = window.lastOrderInvoiceData;
  const text = buildWhatsAppOrderMessage(data);
  navigator.clipboard.writeText(text).then(() => {
    showToast('Bill message copied to clipboard! 📋');
  }).catch(() => {
    showToast('Message copied!');
  });
}

// ==========================================================================
// ORDER REVIEW & MESSAGE EDIT MODAL FUNCTIONS
// ==========================================================================
function openReviewModal(invoiceData) {
  if (!invoiceData) {
    showToast('No active invoice data to review.');
    return;
  }
  window.activeReviewInvoiceData = invoiceData;
  window.lastOrderInvoiceData = invoiceData;

  const invNoEl = document.getElementById('review-inv-no');
  if (invNoEl) invNoEl.textContent = invoiceData.invoiceNo || 'RS-ORD';

  const payDispEl = document.getElementById('review-payment-disp');
  if (payDispEl) payDispEl.innerHTML = `💵 ${invoiceData.paymentLabel || 'Cash on Delivery (COD)'}`;

  const totalDispEl = document.getElementById('review-total-disp');
  if (totalDispEl) totalDispEl.textContent = `₹${invoiceData.grandTotal || 0}`;

  const messageText = buildWhatsAppOrderMessage(invoiceData);
  const msgEl = document.getElementById('review-editable-message');
  if (msgEl) {
    msgEl.value = messageText;
  }

  // Update send button according to selected channel
  const sendBtn = document.querySelector('.btn-review-send');
  if (sendBtn) {
    const btnSpan = sendBtn.querySelector('span');
    if (window.activeOrderChannel === 'email') {
      sendBtn.setAttribute('onclick', 'dispatchFinalOrder()');
      if (btnSpan) btnSpan.textContent = 'Send via Email ➔';
    } else if (window.activeOrderChannel === 'sms') {
      sendBtn.setAttribute('onclick', 'dispatchFinalOrder()');
      if (btnSpan) btnSpan.textContent = 'Send via SMS ➔';
    } else {
      sendBtn.setAttribute('onclick', "openLinePicker('order')");
      if (btnSpan) btnSpan.textContent = 'Send on WhatsApp ➔';
    }
  }

  const reviewModal = document.getElementById('order-review-modal');
  if (reviewModal) {
    reviewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    // Fallback if modal container is missing on current page
    openLinePicker('order');
  }
}

function closeReviewModal(e) {
  if (e && e.target && e.target.id !== 'order-review-modal' && !e.target.classList.contains('btn-close-modal')) {
    return;
  }
  const modal = document.getElementById('order-review-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = '';
}

function backToDeliveryForm() {
  const reviewModal = document.getElementById('order-review-modal');
  if (reviewModal) {
    reviewModal.classList.remove('active');
  }
  const invoiceData = window.activeReviewInvoiceData || window.lastOrderInvoiceData;
  if (invoiceData) {
    const nameEl = document.getElementById('cust-name-input');
    if (nameEl) nameEl.value = invoiceData.name || '';
    const phoneEl = document.getElementById('cust-phone-input');
    if (phoneEl) {
      phoneEl.value = (invoiceData.phone || '').replace(/^\+91\s*/, '');
    }
    const flatEl = document.getElementById('cust-flat-input');
    if (flatEl) flatEl.value = invoiceData.flat || '';
    const lmEl = document.getElementById('cust-landmark-input');
    if (lmEl) lmEl.value = invoiceData.landmark || '';
    const cityEl = document.getElementById('cust-city-input');
    if (cityEl) cityEl.value = invoiceData.city || 'Sitamarhi';
    const stateEl = document.getElementById('cust-state-input');
    if (stateEl) stateEl.value = invoiceData.state || 'Bihar';
    const pinEl = document.getElementById('cust-pin-input');
    if (pinEl) pinEl.value = invoiceData.pincode || '';
  }
  openDeliveryModal(window.activeOrderChannel || 'whatsapp');
}

function copyReviewMessageText() {
  const msgEl = document.getElementById('review-editable-message');
  const text = msgEl ? msgEl.value : (window.activeReviewInvoiceData ? buildWhatsAppOrderMessage(window.activeReviewInvoiceData) : '');
  if (!text) {
    showToast('No message text to copy.');
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Order message copied to clipboard! 📋', { duration: 1500 });
    }).catch(() => {
      showToast('Order message copied! 📋', { duration: 1500 });
    });
  } else {
    if (msgEl) {
      msgEl.select();
      document.execCommand('copy');
      showToast('Order message copied! 📋', { duration: 1500 });
    }
  }
}

function dispatchFinalOrder(targetPhone = null) {
  const invoiceData = window.activeReviewInvoiceData || window.lastOrderInvoiceData;
  if (!invoiceData) {
    showToast('No active order data.');
    return;
  }

  const phoneToSend = targetPhone || window.preferredOrderPhone || "919905561443";
  const txtArea = document.getElementById('review-editable-message');
  const finalText = txtArea ? txtArea.value.trim() : buildWhatsAppOrderMessage(invoiceData);
  const channel = window.activeOrderChannel || 'whatsapp';

  // Close review modal
  const reviewModal = document.getElementById('order-review-modal');
  if (reviewModal) {
    reviewModal.classList.remove('active');
  }

  // Clear delivery form
  const df = document.getElementById("delivery-details-form");
  if (df) df.reset();

  // Clear cart since order is confirmed & placed
  try {
    state.cart = [];
    saveCart();
    updateCartUI();
  } catch (e) {
    console.error('Error clearing cart:', e);
  }

  // Show Invoice Modal on screen with official retail bill
  showInvoiceModal(invoiceData);

  // Dispatch to selected channel
  if (channel === 'whatsapp') {
    const waUrl = `https://wa.me/${phoneToSend}?text=${encodeURIComponent(finalText)}`;
    window.open(waUrl, '_blank');
    const lineLabel = phoneToSend.includes('98356') ? 'Line 2' : 'Line 1';
    showToast(`Order sent to WhatsApp (${lineLabel})! 🛒`, { duration: 2500 });
  } else if (channel === 'email') {
    const subject = encodeURIComponent(`New Spice Order ${invoiceData.invoiceNo} from ${invoiceData.name}`);
    window.location.href = `mailto:raseshwarimasala@gmail.com?subject=${subject}&body=${encodeURIComponent(finalText)}`;
    showToast('Opening email client... ✉️', { duration: 2500 });
  } else if (channel === 'sms') {
    window.location.href = `sms:+919905561443?body=${encodeURIComponent(finalText)}`;
    showToast('Opening SMS app... 💬', { duration: 2500 });
  }
}

function sendPDFBillFromReview() {
  const invoiceData = window.activeReviewInvoiceData || window.lastOrderInvoiceData;
  if (!invoiceData) return;
  printCurrentInvoice(invoiceData, true);
}

function sendPDFBillFromModal() {
  const invoiceData = window.lastOrderInvoiceData;
  if (!invoiceData) return;
  printCurrentInvoice(invoiceData, true);
}

// ==========================================================================
// FORM VALIDATION & STRICT INPUT CONTROLS (+91 Prefix, 10 Digit Max, Red Mark)
// ==========================================================================

// ==========================================================================
// FORM VALIDATION HELPERS & REAL-TIME STATE CONTROLLERS
// ==========================================================================
function setFieldValid(inputEl, errorEl, groupEl = null) {
  const target = groupEl || inputEl;
  if (target) {
    target.classList.remove('is-invalid', 'shake-error');
    target.classList.add('is-valid');
  }
  const modalField = (inputEl || groupEl)?.closest('.modal-field');
  if (modalField) {
    modalField.classList.remove('is-field-invalid');
    modalField.classList.add('is-field-valid');
    const star = modalField.querySelector('.req-star');
    if (star) star.style.display = 'none';
    const check = modalField.querySelector('.valid-check');
    if (check) check.style.display = 'inline-flex';
  }
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.classList.remove('show');
    errorEl.style.display = 'none';
  }
}

function setFieldInvalid(inputEl, errorEl, message, groupEl = null) {
  const target = groupEl || inputEl;
  if (target) {
    target.classList.remove('is-valid');
    target.classList.add('is-invalid');
    // Re-trigger shake error effect
    target.classList.remove('shake-error');
    void target.offsetWidth; // Force DOM reflow
    target.classList.add('shake-error');
  }
  const modalField = (inputEl || groupEl)?.closest('.modal-field');
  if (modalField) {
    modalField.classList.remove('is-field-valid');
    modalField.classList.add('is-field-invalid');
    const star = modalField.querySelector('.req-star');
    if (star) star.style.display = 'inline-block';
    const check = modalField.querySelector('.valid-check');
    if (check) check.style.display = 'none';
  }
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add('show');
    errorEl.style.display = 'block';
  }
}

function resetFieldValidation(inputEl, errorEl, groupEl = null) {
  const target = groupEl || inputEl;
  if (target) {
    target.classList.remove('is-invalid', 'is-valid', 'shake-error');
  }
  const modalField = (inputEl || groupEl)?.closest('.modal-field');
  if (modalField) {
    modalField.classList.remove('is-field-valid', 'is-field-invalid');
    const star = modalField.querySelector('.req-star');
    if (star) star.style.display = 'inline-block';
    const check = modalField.querySelector('.valid-check');
    if (check) check.style.display = 'none';
  }
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.classList.remove('show');
    errorEl.style.display = 'none';
  }
}

function attachFormValidations() {
  // 1. Delivery Modal: Full Name
  const nameInput = document.getElementById('cust-name-input');
  const nameErr = document.getElementById('cust-name-error');
  if (nameInput && !nameInput.dataset.valAttached) {
    nameInput.dataset.valAttached = "true";
    nameInput.addEventListener('input', function(e) {
      let val = e.target.value.replace(/[^a-zA-Z\u0900-\u097F\s.]/g, '');
      e.target.value = val;
      const trimmed = val.trim();
      if (trimmed.length === 0) {
        resetFieldValidation(nameInput, nameErr);
      } else if (trimmed.length < 3) {
        setFieldInvalid(nameInput, nameErr, 'Name must be at least 3 letters');
      } else {
        setFieldValid(nameInput, nameErr);
      }
    });
    nameInput.addEventListener('blur', function() {
      const trimmed = nameInput.value.trim();
      if (trimmed.length > 0 && trimmed.length < 3) {
        setFieldInvalid(nameInput, nameErr, 'Please enter valid Full Name (min 3 letters)');
      }
    });
  }

  // 2. Delivery Modal: Phone (+91, exactly 10 digits starting with 6-9)
  const phoneInput = document.getElementById('cust-phone-input');
  const phoneGroup = document.getElementById('cust-phone-group');
  const phoneErr = document.getElementById('cust-phone-error');
  if (phoneInput && !phoneInput.dataset.valAttached) {
    phoneInput.dataset.valAttached = "true";
    phoneInput.addEventListener('input', function(e) {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 10) val = val.slice(0, 10);
      e.target.value = val;

      if (val.length === 0) {
        resetFieldValidation(phoneInput, phoneErr, phoneGroup);
      } else if (val.length < 10) {
        setFieldInvalid(phoneInput, phoneErr, `${val.length}/10 digits entered (10 digits required)`, phoneGroup);
      } else if (!/^[6-9]\d{9}$/.test(val)) {
        setFieldInvalid(phoneInput, phoneErr, 'Mobile number must start with 6, 7, 8, or 9', phoneGroup);
      } else {
        setFieldValid(phoneInput, phoneErr, phoneGroup);
      }
    });
    phoneInput.addEventListener('blur', function() {
      const val = phoneInput.value.trim();
      if (val.length > 0 && (val.length !== 10 || !/^[6-9]\d{9}$/.test(val))) {
        setFieldInvalid(phoneInput, phoneErr, 'Please enter a valid 10-digit mobile number', phoneGroup);
      }
    });
  }

  // 3. Delivery Modal: Flat / House No.
  const flatInput = document.getElementById('cust-flat-input');
  const flatErr = document.getElementById('cust-flat-error');
  if (flatInput && !flatInput.dataset.valAttached) {
    flatInput.dataset.valAttached = "true";
    flatInput.addEventListener('input', function(e) {
      const val = e.target.value.trim();
      if (val.length === 0) {
        resetFieldValidation(flatInput, flatErr);
      } else if (val.length < 4) {
        setFieldInvalid(flatInput, flatErr, 'Please enter complete house/flat details (min 4 characters)');
      } else {
        setFieldValid(flatInput, flatErr);
      }
    });
    flatInput.addEventListener('blur', function() {
      const val = flatInput.value.trim();
      if (val.length > 0 && val.length < 4) {
        setFieldInvalid(flatInput, flatErr, 'Please enter complete house/flat details (min 4 characters)');
      }
    });
  }

  // 4. Delivery Modal: Area / Landmark
  const lmInput = document.getElementById('cust-landmark-input');
  const lmErr = document.getElementById('cust-landmark-error');
  if (lmInput && !lmInput.dataset.valAttached) {
    lmInput.dataset.valAttached = "true";
    lmInput.addEventListener('input', function(e) {
      const val = e.target.value.trim();
      if (val.length === 0) {
        resetFieldValidation(lmInput, lmErr);
      } else if (val.length < 3) {
        setFieldInvalid(lmInput, lmErr, 'Please enter area / landmark (min 3 characters)');
      } else {
        setFieldValid(lmInput, lmErr);
      }
    });
    lmInput.addEventListener('blur', function() {
      const val = lmInput.value.trim();
      if (val.length > 0 && val.length < 3) {
        setFieldInvalid(lmInput, lmErr, 'Please enter area / landmark (min 3 characters)');
      }
    });
  }

  // 5. Delivery Modal: PIN Code (6 digits)
  const pinInput = document.getElementById('cust-pin-input');
  const pinErr = document.getElementById('cust-pin-error');
  if (pinInput && !pinInput.dataset.valAttached) {
    pinInput.dataset.valAttached = "true";
    pinInput.addEventListener('input', function(e) {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 6) val = val.slice(0, 6);
      e.target.value = val;

      if (val.length === 0) {
        resetFieldValidation(pinInput, pinErr);
      } else if (val.length < 6 || !/^[1-9]\d{5}$/.test(val)) {
        setFieldInvalid(pinInput, pinErr, 'Please enter a valid 6-digit PIN code');
      } else {
        setFieldValid(pinInput, pinErr);
      }
    });
    pinInput.addEventListener('blur', function() {
      const val = pinInput.value.trim();
      if (val.length > 0 && (val.length < 6 || !/^[1-9]\d{5}$/.test(val))) {
        setFieldInvalid(pinInput, pinErr, 'Please enter a valid 6-digit PIN code');
      }
    });
  }

  // 6. Delivery Modal: City / District & State
  const cityInput = document.getElementById('cust-city-input');
  const cityErr = document.getElementById('cust-city-error');
  if (cityInput && !cityInput.dataset.valAttached) {
    cityInput.dataset.valAttached = "true";
    cityInput.addEventListener('input', function(e) {
      const val = e.target.value.trim();
      if (val.length >= 2) {
        setFieldValid(cityInput, cityErr);
      } else if (val.length === 0) {
        resetFieldValidation(cityInput, cityErr);
      } else {
        setFieldInvalid(cityInput, cityErr, 'Please enter City / District');
      }
    });
  }

  const stateInput = document.getElementById('cust-state-input');
  const stateErr = document.getElementById('cust-state-error');
  if (stateInput && !stateInput.dataset.valAttached) {
    stateInput.dataset.valAttached = "true";
    stateInput.addEventListener('input', function(e) {
      const val = e.target.value.trim();
      if (val.length >= 2) {
        setFieldValid(stateInput, stateErr);
      } else if (val.length === 0) {
        resetFieldValidation(stateInput, stateErr);
      } else {
        setFieldInvalid(stateInput, stateErr, 'Please enter State');
      }
    });
  }

  // 7. Quick Inquiry Form (contact.html)
  const inqName = document.getElementById('inq-name');
  const inqNameErr = document.getElementById('inq-name-error');
  if (inqName && !inqName.dataset.valAttached) {
    inqName.dataset.valAttached = "true";
    inqName.addEventListener('input', function(e) {
      let val = e.target.value.replace(/[^a-zA-Z\u0900-\u097F\s.]/g, '');
      e.target.value = val;
      const trimmed = val.trim();
      if (trimmed.length === 0) {
        resetFieldValidation(inqName, inqNameErr);
      } else if (trimmed.length < 3) {
        setFieldInvalid(inqName, inqNameErr, 'Name must be at least 3 letters');
      } else {
        setFieldValid(inqName, inqNameErr);
      }
    });
  }

  const inqPhone = document.getElementById('inq-phone');
  const inqPhoneGroup = document.getElementById('inq-phone-group');
  const inqPhoneErr = document.getElementById('inq-phone-error');
  if (inqPhone && !inqPhone.dataset.valAttached) {
    inqPhone.dataset.valAttached = "true";
    inqPhone.addEventListener('input', function(e) {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 10) val = val.slice(0, 10);
      e.target.value = val;

      if (val.length === 0) {
        resetFieldValidation(inqPhone, inqPhoneErr, inqPhoneGroup);
      } else if (val.length < 10) {
        setFieldInvalid(inqPhone, inqPhoneErr, `${val.length}/10 digits entered (10 digits required)`, inqPhoneGroup);
      } else if (!/^[6-9]\d{9}$/.test(val)) {
        setFieldInvalid(inqPhone, inqPhoneErr, 'Mobile number must start with 6, 7, 8, or 9', inqPhoneGroup);
      } else {
        setFieldValid(inqPhone, inqPhoneErr, inqPhoneGroup);
      }
    });
  }

  const inqMsg = document.getElementById('inq-message');
  const inqMsgErr = document.getElementById('inq-message-error');
  if (inqMsg && !inqMsg.dataset.valAttached) {
    inqMsg.dataset.valAttached = "true";
    inqMsg.addEventListener('input', function(e) {
      const val = e.target.value.trim();
      if (val.length === 0) {
        resetFieldValidation(inqMsg, inqMsgErr);
      } else if (val.length < 5) {
        setFieldInvalid(inqMsg, inqMsgErr, 'Message must be at least 5 characters');
      } else {
        setFieldValid(inqMsg, inqMsgErr);
      }
    });
  }
}

function handleConfirmOrder(e) {
  e.preventDefault();

  if (state.cart.length === 0) {
    showToast('Your cart is empty!');
    closeDeliveryModal();
    return;
  }

  const nameEl = document.getElementById('cust-name-input');
  const nameErr = document.getElementById('cust-name-error');
  const nameVal = nameEl ? nameEl.value.trim() : '';

  const phoneEl = document.getElementById('cust-phone-input');
  const phoneGroup = document.getElementById('cust-phone-group');
  const phoneErr = document.getElementById('cust-phone-error');
  const phoneVal = phoneEl ? phoneEl.value.trim() : '';

  const flatEl = document.getElementById('cust-flat-input');
  const flatErr = document.getElementById('cust-flat-error');
  const flatVal = flatEl ? flatEl.value.trim() : '';

  const lmEl = document.getElementById('cust-landmark-input');
  const lmErr = document.getElementById('cust-landmark-error');
  const lmVal = lmEl ? lmEl.value.trim() : '';

  const cityEl = document.getElementById('cust-city-input');
  const cityErr = document.getElementById('cust-city-error');
  const cityVal = cityEl ? cityEl.value.trim() : 'Sitamarhi';

  const stateEl = document.getElementById('cust-state-input');
  const stateErr = document.getElementById('cust-state-error');
  const stateVal = stateEl ? stateEl.value.trim() : 'Bihar';

  const pinEl = document.getElementById('cust-pin-input');
  const pinErr = document.getElementById('cust-pin-error');
  const pinVal = pinEl ? pinEl.value.trim() : '';

  let isValid = true;
  let firstInvalid = null;

  // Name validation
  if (nameVal.length < 3) {
    setFieldInvalid(nameEl, nameErr, 'Please enter valid Full Name (min 3 letters)');
    isValid = false;
    if (!firstInvalid) firstInvalid = nameEl;
  } else {
    setFieldValid(nameEl, nameErr);
  }

  // Phone validation (+91 and exactly 10 digits starting with 6-9)
  if (!/^[6-9]\d{9}$/.test(phoneVal)) {
    setFieldInvalid(phoneEl, phoneErr, 'Please enter a valid 10-digit mobile number', phoneGroup);
    isValid = false;
    if (!firstInvalid) firstInvalid = phoneEl;
  } else {
    setFieldValid(phoneEl, phoneErr, phoneGroup);
  }

  // Flat / House validation
  if (flatVal.length < 4) {
    setFieldInvalid(flatEl, flatErr, 'Please enter complete house/flat details (min 4 characters)');
    isValid = false;
    if (!firstInvalid) firstInvalid = flatEl;
  } else {
    setFieldValid(flatEl, flatErr);
  }

  // Landmark validation
  if (lmVal.length < 3) {
    setFieldInvalid(lmEl, lmErr, 'Please enter area / landmark (min 3 characters)');
    isValid = false;
    if (!firstInvalid) firstInvalid = lmEl;
  } else {
    setFieldValid(lmEl, lmErr);
  }

  // City validation
  if (cityVal.length < 2) {
    setFieldInvalid(cityEl, cityErr, 'Please enter City / District');
    isValid = false;
    if (!firstInvalid) firstInvalid = cityEl;
  } else {
    setFieldValid(cityEl, cityErr);
  }

  // State validation
  if (stateVal.length < 2) {
    setFieldInvalid(stateEl, stateErr, 'Please enter State');
    isValid = false;
    if (!firstInvalid) firstInvalid = stateEl;
  } else {
    setFieldValid(stateEl, stateErr);
  }

  // PIN code validation
  if (!/^[1-9]\d{5}$/.test(pinVal)) {
    setFieldInvalid(pinEl, pinErr, 'Please enter a valid 6-digit PIN code');
    isValid = false;
    if (!firstInvalid) firstInvalid = pinEl;
  } else {
    setFieldValid(pinEl, pinErr);
  }

  if (!isValid) {
    if (firstInvalid) firstInvalid.focus();
    showToast('Please correct the highlighted fields in red.', { button: false, duration: 1500 });
    return;
  }

  // Combine with compulsory +91 country prefix
  const formattedPhone = `+91 ${phoneVal}`;

  // Address is not stored in localStorage so every refresh/new load remains clean and blank
  try {
    localStorage.removeItem('raseshwari_delivery_details');
  } catch (err) {}

  // Generate Official Invoice Data
  const invoiceData = createInvoiceData(nameVal, formattedPhone, flatVal, lmVal, cityVal, stateVal, pinVal, window.activeOrderChannel);

  // Close Delivery Modal & Cart Drawer
  closeDeliveryModal();
  toggleCartDrawer(false);

  // Open Message Review & Edit Modal (Step before final sending, per user requirement)
  openReviewModal(invoiceData);
}

function sendInquiryOnWhatsApp() {
  const nameEl = document.getElementById('inq-name');
  const nameErr = document.getElementById('inq-name-error');
  const phoneEl = document.getElementById('inq-phone');
  const phoneGroup = document.getElementById('inq-phone-group');
  const phoneErr = document.getElementById('inq-phone-error');
  const msgEl = document.getElementById('inq-message');
  const msgErr = document.getElementById('inq-message-error');

  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const query = msgEl ? msgEl.value.trim() : '';

  let isValid = true;
  let firstInvalid = null;

  if (name.length < 3) {
    setFieldInvalid(nameEl, nameErr, 'Please enter valid Full Name (min 3 letters)');
    isValid = false;
    if (!firstInvalid) firstInvalid = nameEl;
  } else {
    setFieldValid(nameEl, nameErr);
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    setFieldInvalid(phoneEl, phoneErr, 'Please enter a valid 10-digit mobile number', phoneGroup);
    isValid = false;
    if (!firstInvalid) firstInvalid = phoneEl;
  } else {
    setFieldValid(phoneEl, phoneErr, phoneGroup);
  }

  if (query.length < 5) {
    setFieldInvalid(msgEl, msgErr, 'Please describe your requirement (min 5 characters)');
    isValid = false;
    if (!firstInvalid) firstInvalid = msgEl;
  } else {
    setFieldValid(msgEl, msgErr);
  }

  if (!isValid) {
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  let text = `*New Inquiry from Raseshwari Spices Website:*\n\n`;
  text += `*Name:* ${name}\n`;
  text += `*Mobile:* +91 ${phone}\n`;
  text += `*Inquiry / Requirement:* ${query}\n\n`;
  text += `Location: Sitamarhi, Bihar`;

  window.open(`https://wa.me/919905561443?text=${encodeURIComponent(text)}`, '_blank');
}

// Toast notification - Ultra-Compact Design, 0.7s Duration, With Action Button
function showToast(msg, options = {}) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  const duration = (options && options.duration !== undefined) ? options.duration : 700; // 0.7s per user request
  const hasButton = options && options.button === true;
  const btnText = (options && options.btnText) || 'Cart ➔';
  const onClickAction = (options && options.onAction) || 'toggleCartDrawer(true)';

  toast.innerHTML = `
    <span class="toast-tick-icon">✓</span>
    <span class="toast-label">${msg}</span>
    ${hasButton ? `<button type="button" class="toast-action-btn" onclick="${onClickAction}; hideToast();">${btnText}</button>` : ''}
  `;

  toast.classList.add('show');
  clearTimeout(window._toastTimer);

  const startDismiss = () => {
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
      hideToast();
    }, duration);
  };

  toast.onmouseenter = () => clearTimeout(window._toastTimer);
  toast.onmouseleave = startDismiss;

  startDismiss();
}

function hideToast() {
  const toast = document.getElementById('site-toast');
  if (toast) {
    toast.classList.remove('show');
  }
}

// Event Listeners setup
function setupEventListeners() {
  attachFormValidations();
  const searchInputs = document.querySelectorAll('.header-search input');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderCatalog();
    });
  });

  const filterBtns = document.querySelectorAll('.tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.currentFilter = e.target.getAttribute('data-filter') || 'all';
      renderCatalog();
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ==========================================================================
// INTERACTIVE LINE PICKER MODAL (Line 1 / Line 2 for WhatsApp & Call)
// ==========================================================================
window.activeLinePickerContext = 'order';

function openLinePicker(context = 'order') {
  window.activeLinePickerContext = context;
  const modal = document.getElementById('line-picker-modal');
  const sub = document.getElementById('line-picker-subtitle');
  if (sub) {
    if (context === 'order') {
      sub.textContent = 'Select WhatsApp line to send your spice order:';
    } else {
      sub.textContent = 'Select WhatsApp line to send invoice copy to plant:';
    }
  }
  if (modal) {
    modal.classList.add('active');
    attachFormValidations();
  }
}

function closeLinePickerModal(e) {
  if (e && e.target && e.target.id !== 'line-picker-modal' && !e.target.classList.contains('btn-close-line-picker')) {
    return;
  }
  const modal = document.getElementById('line-picker-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function executeLineDispatch(phone) {
  closeLinePickerModal();
  if (window.activeLinePickerContext === 'invoice') {
    sendInvoiceCopyToCompany(phone);
  } else {
    dispatchFinalOrder(phone);
  }
}

// Global Window API bindings
window.confirmOrderAndDownloadReceipt = confirmOrderAndDownloadReceipt;
window.showSuccessDownloadBanner = showSuccessDownloadBanner;
window.downloadCurrentInvoicePDF = downloadCurrentInvoicePDF;
window.printCurrentInvoice = printCurrentInvoice;
window.closeInvoiceModal = closeInvoiceModal;
window.showInvoiceModal = showInvoiceModal;
window.toggleContactModal = toggleContactModal;
window.openLinePicker = openLinePicker;
window.closeLinePickerModal = closeLinePickerModal;
window.executeLineDispatch = executeLineDispatch;
window.handleAddToCart = handleAddToCart;
window.handleWeightSelect = handleWeightSelect;
window.handleQtyChange = handleQtyChange;
window.handleRemoveItem = handleRemoveItem;
window.toggleCartDrawer = toggleCartDrawer;
window.openDeliveryModal = openDeliveryModal;
window.closeDeliveryModal = closeDeliveryModal;
window.sendInvoiceCopyToCompany = sendInvoiceCopyToCompany;
window.copyInvoiceText = copyInvoiceText;
window.openReviewModal = openReviewModal;
window.closeReviewModal = closeReviewModal;
window.backToDeliveryForm = backToDeliveryForm;
window.copyReviewMessageText = copyReviewMessageText;
window.dispatchFinalOrder = dispatchFinalOrder;
window.sendPDFBillFromReview = sendPDFBillFromReview;
window.sendPDFBillFromModal = sendPDFBillFromModal;
window.handleConfirmOrder = handleConfirmOrder;
window.sendInquiryOnWhatsApp = sendInquiryOnWhatsApp;
window.showToast = showToast;
window.hideToast = hideToast;
window.PRODUCTS = PRODUCTS;
window.state = state;


// ==========================================================================
// SPECIAL VALUE COMBOS & WHOLESALE INQUIRY SYSTEM
// Direct Factory Stone-Ground Spices (Sitamarhi, Bihar)
// ==========================================================================

function scrollToBulkCustomizer() {
  const sec = document.getElementById('combos-section') || document.getElementById('wholesale-section');
  if (sec) {
    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function initBulkCustomizer() {
  // Gracefully handles any residual calls
}

// Interactive Special Value Combos -> Cart Adder
window.addSpecialComboToCart = function(comboType) {
  if (comboType === 'trio') {
    // Turmeric 200g, Red Chilli 200g, Coriander 200g
    const items = [
      { id: 'turmeric-powder', weight: '200g', price: 99, mrp: 125, name: 'Raseshwari Turmeric Powder (हल्दी)', subTitle: 'Trio Essentials Combo', image: 'https://lh3.googleusercontent.com/d/1xi-PXJp8ldhnOSVLTfF0TIo9lbTcxCRT' },
      { id: 'red-chilli-powder', weight: '200g', price: 115, mrp: 145, name: 'Raseshwari Red Chilli Powder (लाल मिर्च)', subTitle: 'Trio Essentials Combo', image: 'https://lh3.googleusercontent.com/d/1WcVmKbVW3BLv9rzZlV5CtJuHNCbxynxk' },
      { id: 'coriander-powder', weight: '200g', price: 92, mrp: 115, name: 'Raseshwari Coriander Powder (धनिया)', subTitle: 'Trio Essentials Combo', image: 'https://lh3.googleusercontent.com/d/16OWudiqQ7x-TeLgtuR7ZTGjMXJ3NXV6E' }
    ];
    items.forEach(it => {
      const existing = findCartItem(it.id, it.weight);
      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ ...it, qty: 1 });
      }
    });
    saveCart();
    renderCatalog();
    updateCartUI();
    toggleCartDrawer(true);
    showToast('✓ Triveni Kitchen Trio Combo added to Cart! 🎉', { duration: 3000 });
  } else if (comboType === 'royal') {
    // Garam 100g, Sabji 100g, Meat 100g
    const items = [
      { id: 'garam-masala', weight: '100g', price: 85, mrp: 105, name: 'Raseshwari Shahi Garam Masala', subTitle: 'Royal Curry Master', image: 'https://lh3.googleusercontent.com/d/1xi-PXJp8ldhnOSVLTfF0TIo9lbTcxCRT' },
      { id: 'sabji-masala', weight: '100g', price: 65, mrp: 80, name: 'Raseshwari Kitchen King Sabji Masala', subTitle: 'Royal Curry Master', image: 'https://lh3.googleusercontent.com/d/1xi-PXJp8ldhnOSVLTfF0TIo9lbTcxCRT' },
      { id: 'meat-masala', weight: '100g', price: 75, mrp: 95, name: 'Raseshwari Meat & Curry Masala', subTitle: 'Royal Curry Master', image: 'https://lh3.googleusercontent.com/d/1xi-PXJp8ldhnOSVLTfF0TIo9lbTcxCRT' }
    ];
    items.forEach(it => {
      const existing = findCartItem(it.id, it.weight);
      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ ...it, qty: 1 });
      }
    });
    saveCart();
    renderCatalog();
    updateCartUI();
    toggleCartDrawer(true);
    showToast('✓ Royal Curry Master Combo added to Cart! 👑', { duration: 3000 });
  } else if (comboType === 'family') {
    // 1kg Turmeric, 1kg Red Chilli, 1kg Coriander
    const items = [
      { id: 'turmeric-powder', weight: '1kg', price: 449, mrp: 580, name: 'Raseshwari Turmeric Powder (हल्दी)', subTitle: 'Family 1kg Pack', image: 'https://lh3.googleusercontent.com/d/1xi-PXJp8ldhnOSVLTfF0TIo9lbTcxCRT' },
      { id: 'red-chilli-powder', weight: '1kg', price: 520, mrp: 680, name: 'Raseshwari Red Chilli Powder (लाल मिर्च)', subTitle: 'Family 1kg Pack', image: 'https://lh3.googleusercontent.com/d/1WcVmKbVW3BLv9rzZlV5CtJuHNCbxynxk' },
      { id: 'coriander-powder', weight: '1kg', price: 420, mrp: 540, name: 'Raseshwari Coriander Powder (धनिया)', subTitle: 'Family 1kg Pack', image: 'https://lh3.googleusercontent.com/d/16OWudiqQ7x-TeLgtuR7ZTGjMXJ3NXV6E' }
    ];
    items.forEach(it => {
      const existing = findCartItem(it.id, it.weight);
      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ ...it, qty: 1 });
      }
    });
    saveCart();
    renderCatalog();
    updateCartUI();
    toggleCartDrawer(true);
    showToast('✓ Master Family 3kg Combo added to Cart! 🚚', { duration: 3000 });
  }
};

window.scrollToBulkCustomizer = scrollToBulkCustomizer;
window.initBulkCustomizer = initBulkCustomizer;
