// Datos de libros reales de Rompelímites
const booksData = [
  {
    id: 1,
    title: "Hábito Atómico Rompelímites",
    author: "Rompelímites",
    description: "La guía definitiva para construir hábitos que transforman tu vida. Basado en la metodología atómica aplicada al desarrollo personal cristiano.",
    price: 4.99,
    genre: "Autoayuda",
    rating: 4.9,
    pages: 220,
    reviews: 542,
    preview: "Introducción: El poder del cambio | Capítulo 1: Hábitos atómicos | Capítulo 2: Construcción diaria | Capítulo 3: Transformación | Capítulo 4: Sostén"
  },
  {
    id: 2,
    title: "El Futuro que Dios Ya Escribió",
    author: "Rompelímites",
    description: "Descubre el plan divino para tu vida. Una guía poderosa basada en Jeremías 29:11-14 para transformar tu incertidumbre en esperanza.",
    price: 4.99,
    genre: "Espiritualidad",
    rating: 4.9,
    pages: 198,
    reviews: 678,
    preview: "Tu futuro comienza ahora | Capítulo 1: El plan de Dios | Capítulo 2: Fe en la incertidumbre | Capítulo 3: Acción divina | Capítulo 4: Tu legado"
  },
  {
    id: 3,
    title: "Empiece Bien su Día",
    author: "Rompelímites",
    description: "Rutinas matutinas transformadoras. Cómo estructurar tus primeras horas para que el resto del día sea de victoria y propósito.",
    price: 3.99,
    genre: "Desarrollo Personal",
    rating: 4.8,
    pages: 156,
    reviews: 423,
    preview: "La importancia del amanecer | Capítulo 1: Ritual matutino | Capítulo 2: Meditación | Capítulo 3: Intención diaria | Capítulo 4: Práctica"
  },
  {
    id: 4,
    title: "El Código Espiritual",
    author: "Rompelímites",
    description: "Descodifica los principios espirituales que rigen tu vida. Leyes invisibles que cambian tu destino cuando las comprendes y aplicas.",
    price: 4.99,
    genre: "Espiritualidad",
    rating: 4.9,
    pages: 189,
    reviews: 534,
    preview: "Prólogo: Las leyes ocultas | Código 1: Vibración | Código 2: Atracción | Código 3: Manifestación | Código 4: Integración"
  },
  {
    id: 5,
    title: "Campo Interior",
    author: "Rompelímites",
    description: "El viaje hacia tu mundo interior. Descubre los territorios inexplorados de tu ser y transforma desde adentro hacia afuera.",
    price: 4.99,
    genre: "Autoayuda",
    rating: 4.8,
    pages: 176,
    reviews: 387,
    preview: "Bienvenida al campo | Capítulo 1: Autoconocimiento | Capítulo 2: Sombras y luces | Capítulo 3: Reconciliación | Capítulo 4: Integración"
  },
  {
    id: 6,
    title: "Código de la Manifestación",
    author: "Rompelímites",
    description: "Aprende los códigos secretos para manifestar la vida que deseas. Basado en Salmo 29 y principios de manifestación bíblica.",
    price: 4.99,
    genre: "Espiritualidad",
    rating: 4.9,
    pages: 201,
    reviews: 612,
    preview: "El poder de la palabra | Código 1: Intención | Código 2: Creencia | Código 3: Emoción | Código 4: Acción divina"
  },
  {
    id: 7,
    title: "Según la Esencia",
    author: "Rompelímites",
    description: "Vive de acuerdo a tu esencia más profunda. Despójate de las máscaras y sé auténtico en cada aspecto de tu vida.",
    price: 3.99,
    genre: "Desarrollo Personal",
    rating: 4.7,
    pages: 147,
    reviews: 298,
    preview: "¿Quién eres realmente? | Capítulo 1: Descubrimiento | Capítulo 2: Autenticidad | Capítulo 3: Expresión | Capítulo 4: Libertad"
  },
  {
    id: 8,
    title: "La Magia de Sí Mismo",
    author: "Rompelímites",
    description: "Despierta el poder mágico que habita en ti. Una jornada de automagia para convertirte en el protagonista de tu propia historia.",
    price: 4.99,
    genre: "Autoayuda",
    rating: 4.8,
    pages: 184,
    reviews: 445,
    preview: "Tu magia existe | Capítulo 1: Despertar | Capítulo 2: Poderes dormidos | Capítulo 3: Encantamientos | Capítulo 4: Reencuentro"
  },
  {
    id: 9,
    title: "Sal Fuera",
    author: "Rompelímites",
    description: "Rompe los límites de tu zona de confort. Una invitación radical a vivir la vida que siempre quisiste.",
    price: 3.99,
    genre: "Motivación",
    rating: 4.9,
    pages: 168,
    reviews: 521,
    preview: "Más allá del miedo | Capítulo 1: Límites ilusorios | Capítulo 2: El primer paso | Capítulo 3: Valentía | Capítulo 4: Libertad"
  },
  {
    id: 10,
    title: "50 Reflexiones para tu Alma",
    author: "Rompelímites",
    description: "50 meditaciones profundas para alimentar tu espíritu. Reflexiones diarias que transforman tu perspectiva de la vida.",
    price: 3.99,
    genre: "Espiritualidad",
    rating: 4.8,
    pages: 156,
    reviews: 389,
    preview: "Reflexión 1-10: Despertar | Reflexión 11-25: Transformación | Reflexión 26-40: Sabiduría | Reflexión 41-50: Integración"
  },
  {
    id: 11,
    title: "El Circuito de tu Destino",
    author: "Rompelímites",
    description: "Comprende el circuito energético que define tu destino. Una guía para reconectar con tu propósito original.",
    price: 4.99,
    genre: "Espiritualidad",
    rating: 4.8,
    pages: 195,
    reviews: 467,
    preview: "Tu circuito personal | Capítulo 1: Frecuencia | Capítulo 2: Resonancia | Capítulo 3: Sincronía | Capítulo 4: Destino"
  },
  {
    id: 12,
    title: "Crea tu Futuro",
    author: "Rompelímites",
    description: "Tú eres el creador de tu futuro. Una guía práctica para diseñar y construir la vida extraordinaria que mereces.",
    price: 4.99,
    genre: "Autoayuda",
    rating: 4.9,
    pages: 212,
    reviews: 598,
    preview: "Eres el arquitecto | Capítulo 1: Visión | Capítulo 2: Diseño | Capítulo 3: Construcción | Capítulo 4: Celebración"
  }
];

// Carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const booksGrid = document.getElementById('books-grid');
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('book-modal');
const modalClose = document.getElementById('modal-close');
const cartCountElement = document.getElementById('cart-count');
const newsletterForm = document.getElementById('newsletter-form');

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  renderBooks(booksData);
  updateCartCount();
  setupEventListeners();
  setupScrollAnimations();
});

// Renderizar libros
function renderBooks(books) {
  booksGrid.innerHTML = books.map(book => `
    <div class="book-card-v2" data-id="${book.id}">
      <div class="book-cover-v2" style="background: linear-gradient(135deg, ${getGradient(book.id)});">
        ${book.title}
      </div>
      <div class="book-info-v2">
        <span class="book-genre-v2">${book.genre}</span>
        <h3 class="book-title-v2">${book.title}</h3>
        <p class="book-author-v2">por ${book.author}</p>
        <p class="book-description-v2">${book.description.substring(0, 60)}...</p>
        <div class="book-footer-v2">
          <div>
            <span class="book-price-v2">€${book.price.toFixed(2)}</span>
          </div>
          <button class="book-preview-btn-v2" onclick="openPreview(${book.id})">
            👁 Ver preview
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Gradientes para portadas
function getGradient(id) {
  const gradients = [
    '#b85c3a, #8b6f47',
    '#8b6f47, #4a5d3a',
    '#4a5d3a, #6b6b6b',
    '#b85c3a, #6b6b6b',
    '#8b6f47, #6b6b6b',
    '#4a5d3a, #8b6f47',
    '#b85c3a, #4a5d3a',
    '#6b6b6b, #8b6f47',
    '#4a5d3a, #b85c3a',
    '#8b6f47, #b85c3a',
    '#6b6b6b, #4a5d3a',
    '#b85c3a, #4a5d3a'
  ];
  return gradients[id - 1] || gradients[0];
}

// Abrir preview
function openPreview(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  document.getElementById('modal-title').textContent = book.title;
  document.getElementById('modal-author').textContent = `por ${book.author}`;
  document.getElementById('modal-description').textContent = book.description;
  document.getElementById('modal-price').textContent = `€${book.price.toFixed(2)}`;

  // Preview pages
  const previewText = book.preview.split(' | ');
  document.getElementById('preview-pages').innerHTML = previewText
    .map((page, idx) => `
      <div class="preview-page">
        <div style="font-weight: 600;">Página ${idx + 1}</div>
        <div style="font-size: 0.7rem; margin-top: 0.5rem;">${page}</div>
      </div>
    `).join('');

  // Update button
  document.getElementById('add-to-cart-btn').onclick = () => addToCart(bookId);

  modal.classList.add('active');
}

// Cerrar modal
modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

// Agregar al carrito
function addToCart(bookId) {
  const book = booksData.find(b => b.id === bookId);
  const existingItem = cart.find(item => item.id === bookId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  // Feedback
  const btn = document.getElementById('add-to-cart-btn');
  const originalText = btn.textContent;
  btn.textContent = '✓ Agregado al carrito';
  btn.style.background = '#4a5d3a';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    modal.classList.remove('active');
  }, 1500);
}

// Actualizar contador del carrito
function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountElement.textContent = total;
}

// Búsqueda
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = booksData.filter(book => 
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query) ||
    book.genre.toLowerCase().includes(query) ||
    book.description.toLowerCase().includes(query)
  );
  renderBooks(filtered.length > 0 ? filtered : booksData);
});

// Newsletter
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  
  // Simulación
  alert(`¡Gracias! Te hemos suscrito con ${email}`);
  e.target.reset();
});

// Animaciones al scroll
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.book-card-v2, .blog-card, .value-card, .testimonial-card-v2').forEach(el => {
    observer.observe(el);
  });
}

// Evento de carrito en navegación
document.querySelector('.nav-cart').addEventListener('click', () => {
  window.location.href = 'carrito.html';
});

// Animación de entrada suave para elementos
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

console.log('✓ App v2 cargada correctamente');
