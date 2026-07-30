// ========================================
// DATOS DE LIBROS (Reemplazar con tus libros)
// ========================================
const booksData = [
  {
    id: 1,
    title: 'El Código del Discípulo',
    author: 'Rompelímites',
    genre: 'Crecimiento Cristiano',
    price: 9.99,
    description: 'Descubre las 9 verdades fundamentales del discipulado auténtico. Un viaje transformador hacia una fe práctica y profunda.',
    preview: 'Página 1: Introducción\nPágina 2: Capítulo 1\nPágina 3: Reflexiones\nPágina 4: Preguntas\nPágina 5: Conclusiones iniciales'
  },
  {
    id: 2,
    title: 'Vencedor: 40 días',
    author: 'Rompelímites',
    genre: 'Superación Personal',
    price: 12.99,
    description: '40 días de transformación personal basado en la Palabra. Un plan de reconstrucción espiritual día a día.'
  },
  {
    id: 3,
    title: 'El Arquitecto de tu Vida',
    author: 'Rompelímites',
    genre: 'Desarrollo Personal',
    price: 10.99,
    description: 'Diseña tu vida con intención. 12 capítulos de autoconocimiento y planificación estratégica de tu futuro.'
  },
  {
    id: 4,
    title: 'Toma el Control de tu Mente',
    author: 'Rompelímites',
    genre: 'Mindfulness',
    price: 11.99,
    description: 'Resetea tu mente en 21 días. Técnicas prácticas de meditación y control mental para transformar tu vida.'
  },
  {
    id: 5,
    title: 'El Código de la Manifestación',
    author: 'Rompelímites',
    genre: 'Espiritualidad',
    price: 13.99,
    description: 'Desbloquea el poder de la manifestación bíblica. Aprende cómo tus palabras crean tu realidad.'
  },
  {
    id: 6,
    title: 'La Auditoría de tu Vida',
    author: 'Rompelímites',
    genre: 'Rediseño Personal',
    price: 10.99,
    description: 'Renegocia tu contrato con la vida. Una auditoría profunda para rediseñar tu camino con propósito.'
  },
  {
    id: 7,
    title: 'El Futuro que Dios Ya Escribió',
    author: 'Rompelímites',
    genre: 'Esperanza',
    price: 11.99,
    description: 'De la incertidumbre a la esperanza. Un viaje a través de Jeremías hacia la transformación espiritual.'
  },
  {
    id: 8,
    title: 'Los Códigos Energéticos',
    author: 'Rompelímites',
    genre: 'Desarrollo Espiritual',
    price: 12.99,
    description: 'Alinea tu energía con tu propósito. Respuesta desde la perspectiva del desarrollo personal cristiano.'
  },
  {
    id: 9,
    title: 'Trigo y Cizaña',
    author: 'Rompelímites',
    genre: 'Parábolas',
    price: 9.99,
    description: 'Interpreta la parábola clásica en contexto moderno. Leyes de desarrollo personal desde la enseñanza divina.'
  },
  {
    id: 10,
    title: 'El Principito Moderno',
    author: 'Rompelímites',
    genre: 'Filosofía',
    price: 8.99,
    description: 'Reflexiones contemporáneas sobre la vida, el amor y el sentido. Inspirado en clásicos, escrito para hoy.'
  },
  {
    id: 11,
    title: '30 Metáforas del Crecimiento',
    author: 'Rompelímites',
    genre: 'Autoayuda',
    price: 10.99,
    description: 'Historias metafóricas que transforman tu perspectiva. Herramientas prácticas para el crecimiento integral.'
  },
  {
    id: 12,
    title: 'La Brújula del Alma',
    author: 'Rompelímites',
    genre: 'Navegación Personal',
    price: 11.99,
    description: 'Encuentra tu norte y vive con dirección. Brújula espiritual para tiempos de incertidumbre.'
  }
];

// ========================================
// STATE & DOM ELEMENTS
// ========================================
let cart = JSON.parse(localStorage.getItem('rompelimites-cart')) || [];
let currentBook = null;

const cartCountEl = document.getElementById('cart-count');
const booksGridEl = document.getElementById('books-grid');
const modalEl = document.getElementById('book-modal');
const modalCloseBtn = document.getElementById('modal-close');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  renderBooks(booksData);
  updateCartCount();
  setupEventListeners();
});

// ========================================
// RENDER BOOKS
// ========================================
function renderBooks(books) {
  booksGridEl.innerHTML = '';
  
  if (books.length === 0) {
    booksGridEl.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b6b6b; padding: 3rem;">No se encontraron libros.</p>';
    return;
  }

  books.forEach(book => {
    const bookCard = createBookCard(book);
    booksGridEl.appendChild(bookCard);
  });
}

function createBookCard(book) {
  const card = document.createElement('div');
  card.className = 'book-card';
  card.innerHTML = `
    <div class="book-cover" style="background: linear-gradient(135deg, ${getGradient(book.id)[0]} 0%, ${getGradient(book.id)[1]} 100%);">
      ${book.title}
    </div>
    <div class="book-info">
      <div class="book-genre">${book.genre}</div>
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">por ${book.author}</p>
      <p class="book-description">${book.description}</p>
      <div class="book-footer">
        <span class="book-price">€${book.price.toFixed(2)}</span>
        <button class="book-preview-btn" data-id="${book.id}">Ver preview</button>
      </div>
    </div>
  `;

  card.querySelector('.book-preview-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openPreview(book);
  });

  card.addEventListener('click', () => {
    openPreview(book);
  });

  return card;
}

function getGradient(id) {
  const gradients = [
    ['#b85c3a', '#8b6f47'],
    ['#4a5d3a', '#8b6f47'],
    ['#b85c3a', '#4a5d3a'],
    ['#8b6f47', '#b85c3a'],
    ['#4a5d3a', '#b85c3a'],
    ['#b85c3a', '#6b6b6b'],
    ['#8b6f47', '#4a5d3a'],
    ['#b85c3a', '#8b6f47'],
    ['#4a5d3a', '#6b6b6b'],
    ['#8b6f47', '#b85c3a'],
    ['#b85c3a', '#4a5d3a'],
    ['#6b6b6b', '#b85c3a']
  ];
  return gradients[(id - 1) % gradients.length];
}

// ========================================
// MODAL / PREVIEW
// ========================================
function openPreview(book) {
  currentBook = book;
  document.getElementById('modal-title').textContent = book.title;
  document.getElementById('modal-author').textContent = `Por ${book.author}`;
  document.getElementById('modal-description').textContent = book.description;
  document.getElementById('modal-price').textContent = `€${book.price.toFixed(2)}`;
  
  // Generar simulación de 5 páginas
  const previewPagesEl = document.getElementById('preview-pages');
  previewPagesEl.innerHTML = '';
  
  for (let i = 1; i <= 5; i++) {
    const pageBg = getGradient(book.id + i);
    const pageEl = document.createElement('div');
    pageEl.className = 'preview-page';
    pageEl.style.background = `linear-gradient(135deg, ${pageBg[0]} 0%, ${pageBg[1]} 100%)`;
    pageEl.innerHTML = `<strong>Página ${i}</strong>`;
    previewPagesEl.appendChild(pageEl);
  }

  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalEl.classList.remove('active');
  document.body.style.overflow = 'auto';
  currentBook = null;
}

// ========================================
// CART
// ========================================
function addToCart(book) {
  const existingItem = cart.find(item => item.id === book.id);
  
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: book.id,
      title: book.title,
      price: book.price,
      qty: 1
    });
  }
  
  saveCart();
  updateCartCount();
  closeModal();
  
  // Feedback visual
  addToCartBtn.textContent = '✓ Añadido al carrito';
  setTimeout(() => {
    if (currentBook?.id === book.id) {
      addToCartBtn.textContent = 'Comprar ahora';
    }
  }, 1500);
}

function saveCart() {
  localStorage.setItem('rompelimites-cart', JSON.stringify(cart));
}

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountEl.textContent = total;
}

// ========================================
// SEARCH
// ========================================
function searchBooks(query) {
  if (!query.trim()) {
    renderBooks(booksData);
    return;
  }

  const filtered = booksData.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase()) ||
    book.genre.toLowerCase().includes(query.toLowerCase()) ||
    book.description.toLowerCase().includes(query.toLowerCase())
  );

  renderBooks(filtered);
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
  modalCloseBtn.addEventListener('click', closeModal);
  
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeModal();
  });

  addToCartBtn.addEventListener('click', () => {
    if (currentBook) {
      addToCart(currentBook);
    }
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchBooks(searchInput.value);
  });

  searchInput.addEventListener('input', (e) => {
    searchBooks(e.target.value);
  });

  // Cerrar modal con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl.classList.contains('active')) {
      closeModal();
    }
  });
}

// ========================================
// SCROLL REVEAL (FADE IN)
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.book-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});
