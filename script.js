// ==========================================
// EL.BOSHO - RESTAURANT MENU
// ==========================================

// MENU DATA

const menu = [

  {
    id: 'chicken-crepe',
    name: 'كريبات الفراخ',
    items: [
      ['استربس', 130],
      ['بانينه', 130],
      ['زنجر سبايسي', 140],
      ['فاهيتا', 140],
      ['فراخ حارّي', 150],
      ['شيش طاووق مشوي', 150],
      ['مشوي صدور', 160],
      ['تشيكن رانش', 140],
      ['تشيكن باربيكيو', 140],
      ['كوردن بلو', 140],
      ['بيكاتا فراخ', 160]
    ]
  },

  {
    id: 'cheese-crepe',
    name: 'كريبات الجبن',
    items: [
      ['ميكس جبن', 110],
      ['ميكس جبن بسطرمة', 130],
      ['بسطرمة وتركي وسلامي', 140],
      ['مرجريتا', 110],
      ['شيدر ورومي', 110],
      ['موزاريلا ورومي', 110],
      ['كيري بسطرمة', 130]
    ]
  },

  {
    id: 'meat-crepe',
    name: 'كريبات اللحوم',
    items: [
      ['كفتة مشوية', 140],
      ['سجق مشوي', 140],
      ['برجر مشوي', 140],
      ['هوت دوج', 130],
      ['ميكس لحوم', 130],
      ['فاهيتا لحم', 150],
      ['بسطرمة سوسيس', 130],
      ['سجق بسطرمة', 140],
      ['بيكاتا لحمة', 170]
    ]
  },

  {
    id: 'mixed-crepe',
    name: 'كريبات الميكسات',
    items: [
      ['ميكس فراخ', 160],
      ['ميكس لحوم', 160],
      ['ميكس مشاوي', 180],
      ['تشيكن رانش', 190],
      ['فاير تشيكن', 190],
      ['فريند ميكس', 190],
      ['دونر كباب', 200],
      ['الفخامة', 190],
      ['دايناميت', 190],
      ['فري ميكس', 190],
      ['قنبلة فراخ', 220],
      ['قنبلة لحوم', 220],
      ['قنبلة البوشو', 240],
      ['كريب بيتزا ميكس', 190],
      ['كريب كباب وكفتة', 180],
      ['كريب خضروات', 190]
    ]
  },

  {
    id: 'potato',
    name: 'البطاطس',
    items: [
      ['بطاطس باربيكيو', 50],
      ['بطاطس ميكس هوت دوج', 60],
      ['بطاطس شيدر', 60],
      ['بطاطس شيدر هالبينو', 70],
      ['بطاطس مفروم', 80],
      ['بطاطس استربس', 90],
      ['بطاطس هوت دوج', 80],
      ['بطاطس سجق', 80],
      ['بطاطس شيش', 90],
      ['بطاطس صدور مشوية', 90],
      ['بطاطس ميكس جبن', 80]
    ]
  },

  {
    id: 'extras',
    name: 'الإضافات',
    items: [
      ['كاتشب', 25],
      ['موزاريلا استيكس', 20],
      ['تركي أو سلامي', 20],
      ['بسطرمة', 20],
      ['مشروم', 15],
      ['هالبينو', 15],
      ['موزاريلا', 15]
    ]
  },

  {
    id: 'meals',
    name: 'الوجبات',
    items: [
      ['وجبة مشوية على الفحم', 340],
      ['نص فرخة مشوية على الفحم', 190],
      ['وجبة استربس', 180],
      ['وجبة كفتة مشوية على الفحم', 180],
      ['وجبة شيش مشوي على الفحم', 180],
      ['وجبة ميكس مشاوي', 230],
      ['وجبة ميكس الأكيل', 280]
    ]
  },

  {
    id: 'sandwich-chicken',
    name: 'سندوتشات مارين فراخ',
    items: [
      ['استربس', 110],
      ['بانينه', 110],
      ['زنجر سبايسي', 120],
      ['فاهيتا', 120],
      ['فراخ حارّي', 120],
      ['شيش طاووق مشوي', 110],
      ['صدور مشوية', 120],
      ['تشيكن رانش', 110],
      ['كوردن بلو', 110]
    ]
  },

  {
    id: 'sandwich-meat',
    name: 'سندوتشات مارين لحوم',
    items: [
      ['كفتة على الفحم', 110],
      ['سجق مشوي', 110],
      ['هوت دوج', 110],
      ['ميكس', 110],
      ['فاهيتا لحم', 110],
      ['لحوم مدخنة', 110]
    ]
  },

  {
    id: 'quesadilla-chicken',
    name: 'كاساديا فراخ',
    items: [
      ['كاساديا استربس', 120],
      ['كاساديا شيش', 120],
      ['كاساديا زنجر', 120],
      ['كاساديا فاهيتا', 120],
      ['كاساديا صدور', 120],
      ['كاساديا كوردن بلو', 120]
    ]
  },

  {
    id: 'quesadilla-meat',
    name: 'كاساديا لحوم',
    items: [
      ['كاساديا كفتة', 110],
      ['كاساديا سجق', 110],
      ['كاساديا برجر', 110],
      ['كاساديا هوت دوج', 110],
      ['كاساديا ميلانو', 110],
      ['كاساديا سجق بسطرمة', 110]
    ]
  },

  {
    id: 'quesadilla-mixed',
    name: 'كاساديا ميكسات',
    items: [
      ['كاساديا ميكس لحوم', 140],
      ['كاساديا ميكس فراخ', 140],
      ['كاساديا ميكس مشاوي', 140],
      ['كاساديا ميكس لحوم مدخنة', 140]
    ]
  },

  {
    id: 'quesadilla',
    name: 'كساديا',
    items: [
      ['كساديا ميكس جبن', 90],
      ['كساديا ميكس جبن بسطرمة', 110],
      ['كساديا مارجريتا', 100],
      ['كساديا تركي مدخن', 100],
      ['كساديا سلامي مدخن', 100],
      ['كساديا كيري بسطرمة', 110]
    ]
  }

];


// ==========================================
// SETTINGS
// ==========================================

// Restaurant WhatsApp number
// International format without + or leading zero.

const WHATSAPP_NUMBER = '201030304499';


// ==========================================
// STATE
// ==========================================

const state = {
  category: 'all',
  query: '',
  cart: []
};


// Load saved cart safely

try {
  state.cart = JSON.parse(
    localStorage.getItem('elbosho-cart') || '[]'
  );

  if (!Array.isArray(state.cart)) {
    state.cart = [];
  }

} catch {
  state.cart = [];
}


// ==========================================
// HELPERS
// ==========================================

const $ = selector => document.querySelector(selector);

const money = amount => `${amount} ج.م`;


// Convert menu categories into products

function allProducts() {

  return menu.flatMap(category =>

    category.items.map((item, index) => ({

      id: `${category.id}-${index}`,

      category: category.id,

      categoryName: category.name,

      name: item[0],

      price: item[1]

    }))

  );

}

const products = allProducts();


// ==========================================
// CATEGORY RENDERING
// ==========================================

function renderCategories() {

  const root = $('#categories');

  root.innerHTML = '';

  const categories = [
    ['all', 'الكل'],
    ...menu.map(category => [
      category.id,
      category.name
    ])
  ];

  categories.forEach(([id, name]) => {

    const button = document.createElement('button');

    button.className =
      'cat-btn' +
      (state.category === id ? ' active' : '');

    button.textContent = name;

    button.onclick = () => {

      state.category = id;

      render();

    };

    root.append(button);

  });

}


// ==========================================
// SEARCH AND PRODUCT DISPLAY
// ==========================================

function renderProducts() {

  const filtered = products.filter(product => {

    const matchesCategory =
      state.category === 'all' ||
      product.category === state.category;

    const searchText =
      `${product.name} ${product.categoryName}`.toLowerCase();

    const matchesSearch =
      searchText.includes(state.query);

    return matchesCategory && matchesSearch;

  });


  const grid = $('#productsGrid');

  grid.innerHTML = '';


  filtered.forEach(product => {

    const card = document.createElement('article');

    card.className = 'product-card';


    const top = document.createElement('div');

    top.className = 'product-top';


    const title = document.createElement('h3');

    title.textContent = product.name;


    const price = document.createElement('span');

    price.className = 'price';

    price.textContent = money(product.price);


    top.append(title, price);


    const description = document.createElement('p');

    description.textContent = product.categoryName;


    const addButton = document.createElement('button');

    addButton.className = 'add-btn';

    addButton.textContent = '+ أضف للسلة';

    addButton.onclick = () => addToCart(product.id);


    card.append(top, description, addButton);

    grid.append(card);

  });


  $('#resultCount').textContent =
    `${filtered.length} صنف`;

  $('#emptyState').classList.toggle(
    'hidden',
    filtered.length !== 0
  );

}


// ==========================================
// MAIN RENDER
// ==========================================

function render() {

  renderCategories();

  renderProducts();

}


// ==========================================
// CART FUNCTIONS
// ==========================================

function saveCart() {

  localStorage.setItem(
    'elbosho-cart',
    JSON.stringify(state.cart)
  );

}


function addToCart(id) {

  const found = state.cart.find(
    item => item.id === id
  );

  if (found) {

    found.qty++;

  } else {

    state.cart.push({
      id: id,
      qty: 1
    });

  }

  renderCart();

}


function changeQty(id, delta) {

  const item = state.cart.find(
    product => product.id === id
  );

  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {

    state.cart = state.cart.filter(
      product => product.id !== id
    );

  }

  renderCart();

}


// ==========================================
// CART DISPLAY
// ==========================================

function renderCart() {

  saveCart();

  const root = $('#cartItems');

  root.innerHTML = '';

  let total = 0;

  let count = 0;


  state.cart.forEach(cartItem => {

    const product = products.find(
      item => item.id === cartItem.id
    );

    if (!product) return;

    total += product.price * cartItem.qty;

    count += cartItem.qty;


    const row = document.createElement('div');

    row.className = 'cart-row';


    const info = document.createElement('div');


    const title = document.createElement('h4');

    title.textContent = product.name;


    const price = document.createElement('small');

    price.textContent =
      money(product.price * cartItem.qty);


    info.append(title, price);


    const quantity = document.createElement('div');

    quantity.className = 'qty';


    const minus = document.createElement('button');

    minus.textContent = '−';

    minus.onclick = () =>
      changeQty(cartItem.id, -1);


    const number = document.createElement('b');

    number.textContent = cartItem.qty;


    const plus = document.createElement('button');

    plus.textContent = '+';

    plus.onclick = () =>
      changeQty(cartItem.id, 1);


    quantity.append(minus, number, plus);

    row.append(info, quantity);

    root.append(row);

  });


  $('#cartCount').textContent = count;

  $('#cartTotal').textContent = money(total);


  $('#cartEmpty').classList.toggle(
    'hidden',
    count > 0
  );


  $('#checkoutBtn').disabled = count === 0;

  $('#checkoutBtn').style.opacity =
    count === 0 ? '.45' : '1';

}


// ==========================================
// OPEN AND CLOSE CART
// ==========================================

function openCart() {

  $('#cartDrawer').classList.add('open');

  $('#overlay').classList.add('show');

}


function closeCart() {

  $('#cartDrawer').classList.remove('open');

  $('#overlay').classList.remove('show');

}


// ==========================================
// CHECKOUT
// ==========================================

function openCheckout() {

  if (!state.cart.length) return;

  $('#checkoutModal').classList.add('show');

}


function closeCheckout() {

  $('#checkoutModal').classList.remove('show');

}


// ==========================================
// SEARCH EVENT
// ==========================================

$('#searchInput').addEventListener('input', event => {

  state.query = event.target.value
    .trim()
    .toLowerCase();

  renderProducts();

});


// ==========================================
// BUTTON EVENTS
// ==========================================

$('#openCart').onclick = openCart;

$('#closeCart').onclick = closeCart;

$('#overlay').onclick = closeCart;

$('#checkoutBtn').onclick = openCheckout;

$('#closeCheckout').onclick = closeCheckout;


// ==========================================
// SEND ORDER TO WHATSAPP
// ==========================================

$('#checkoutForm').addEventListener('submit', event => {

  event.preventDefault();

  if (!state.cart.length) return;


  const formData = new FormData(event.currentTarget);


  const lines = state.cart.map(cartItem => {

    const product = products.find(
      item => item.id === cartItem.id
    );

    if (!product) return '';

    return (
      `• ${product.name} × ${cartItem.qty}` +
      ` = ${money(product.price * cartItem.qty)}`
    );

  }).filter(Boolean);


  const total = state.cart.reduce((sum, cartItem) => {

    const product = products.find(
      item => item.id === cartItem.id
    );

    return sum + (
      product ? product.price * cartItem.qty : 0
    );

  }, 0);


  const message = `طلب جديد من منيو EL.BOSHO

الاسم: ${formData.get('name')}

الموبايل: ${formData.get('phone')}

طريقة الاستلام: ${formData.get('method')}

العنوان / ملاحظات:
${formData.get('address') || 'لا يوجد'}

تفاصيل الطلب:

${lines.join('\n')}

الإجمالي: ${money(total)}

شكراً لاختيار EL.BOSHO ❤️`;


  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


  window.open(
    whatsappURL,
    '_blank',
    'noopener,noreferrer'
  );

});


// ==========================================
// INITIALIZE WEBSITE
// ==========================================

$('#year').textContent = new Date().getFullYear();

render();

renderCart();
