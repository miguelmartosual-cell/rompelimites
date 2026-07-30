// Datos de libros reales de Rompelímites
const booksData = [
  {
    id: 1,
    title: "Hábito Atómico Rompelímites",
    author: "Rompelímites",
    description: "Pequeñas disciplinas espirituales que producen una gran transformación. Construye hábitos que cambian tu vida desde la raíz.",
    price: 4.99,
    genre: "Autoayuda",
    rating: 4.9,
    pages: 220,
    reviews: 542,
    preview: "Introducción: El poder del cambio | Capítulo 1: Hábitos atómicos | Capítulo 2: Disciplinas espirituales | Capítulo 3: Transformación | Capítulo 4: Sostenimiento"
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
    title: "El Código del Espíritu",
    author: "Rompelímites",
    description: "Lo que la energía no puede sanar, pero Dios sí. Descodifica los principios espirituales que transforman tu vida.",
    price: 4.99,
    genre: "Espiritualidad",
    rating: 4.9,
    pages: 189,
    reviews: 534,
    preview: "Prólogo: El poder espiritual | Código 1: Fe | Código 2: Poder | Código 3: Transformación | Código 4: Integración"
  },
  {
    id: 5,
    title: "El Campo Interior",
    author: "Rompelímites",
    description: "11 leyes espirituales y personales para una cosecha de vida plena. Transforma tu interior, y tu vida dará fruto.",
    price: 4.99,
    genre: "Desarrollo Personal",
    rating: 4.8,
    pages: 176,
    reviews: 387,
    preview: "Introducción al campo | Ley 1: Siembra | Ley 2: Riego | Ley 3: Crecimiento | Ley 4-11: Cosecha de vida plena"
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
    title: "Volver a lo Esencial",
    author: "Rompelímites",
    description: "Lecciones del Principito para un mundo acelerado. Descubre la sabiduría oculta en este clásico reinterpretado.",
    price: 4.99,
    genre: "Literatura",
    rating: 4.7,
    pages: 147,
    reviews: 298,
    preview: "Prólogo moderno | Lección 1: Lo esencial | Lección 2: La rosa | Lección 3: El viaje | Lección 4: La amistad"
  },
  {
    id: 8,
    title: "La Magia de Ser Tú Mismo",
    author: "Rompelímites",
    description: "Despierta a tu verdadera naturaleza. Libérate del ego religioso para vivir la libertad que Cristo ofrece.",
    price: 4.99,
    genre: "Autoayuda",
    rating: 4.8,
    pages: 184,
    reviews: 445,
    preview: "Tu verdadera naturaleza | Capítulo 1: Despertar | Capítulo 2: Identificar máscaras | Capítulo 3: Autenticidad | Capítulo 4: Libertad"
  },
  {
    id: 9,
    title: "Sal Fuera",
    author: "Rompelímites",
    description: "El llamado que despierta tu Propósito. Rompe las cadenas de la prisión interior y vive con libertad verdadera.",
    price: 4.99,
    genre: "Motivación",
    rating: 4.9,
    pages: 168,
    reviews: 521,
    preview: "Tu llamado | Capítulo 1: Despierta | Capítulo 2: Rompe cadenas | Capítulo 3: Tu propósito | Capítulo 4: Libertad"
  },
  {
    id: 10,
    title: "50 Verdades que Despertarán tu Alma",
    author: "Rompelímites",
    description: "50 verdades del cielo para un corazón que busca propósito. Frases transformadoras que alimentan tu espíritu.",
    price: 3.99,
    genre: "Espiritualidad",
    rating: 4.8,
    pages: 156,
    reviews: 389,
    preview: "Verdad 1-10: Despertar | Verdad 11-25: Transformación | Verdad 26-40: Sabiduría | Verdad 41-50: Integración"
  },
  {
    id: 11,
    title: "El Código de la Abundancia",
    author: "Rompelímites",
    description: "Un estudio bíblico sobre conciencia, creencias y prosperidad verdadera. Basado en Jeremías 17:7-8 para una vida de bendición.",
    price: 4.99,
    genre: "Espiritualidad",
    rating: 4.8,
    pages: 195,
    reviews: 467,
    preview: "Introducción a la abundancia | Clave 1: Conciencia | Clave 2: Creencia | Clave 3: Prosperidad | Clave 4: Testimonio"
  },
  {
    id: 12,
    title: "Sana lo que Nadie Vio",
    author: "Rompelímites",
    description: "Cómo Dios restaura las heridas que cargas en silencio. Un camino bíblico para sanar el rechazo, abandono y heridas del pasado.",
    price: 4.99,
    genre: "Sanidad Interior",
    rating: 4.9,
    pages: 212,
    reviews: 598,
    preview: "Reconociendo las heridas | Capítulo 1: Rechazo | Capítulo 2: Abandono | Capítulo 3: Sanidad | Capítulo 4: Libertad"
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
      <div class="book-cover-v2" style="background-image: url('assets/img/portadas/${String(book.id).padStart(2, '0')}-${slugifyTitle(book.title)}.jpg'); background-size: cover; background-position: center;">
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

// Convertir títulos a slug para nombres de archivo
function slugifyTitle(title) {
  const slugMap = {
    'Hábito Atómico Rompelímites': 'habitos-atomicos',
    'El Futuro que Dios Ya Escribió': 'futuro-dios',
    'Empiece Bien su Día': 'empiece-bien-dia',
    'El Código del Espíritu': 'codigo-espiritual',
    'El Campo Interior': 'campo-interior',
    'Código de la Manifestación': 'manifestacion',
    'Volver a lo Esencial': 'segun-esencia',
    'La Magia de Ser Tú Mismo': 'magia-si-mismo',
    'Sal Fuera': 'sal-fuera',
    '50 Verdades que Despertarán tu Alma': '50-reflexiones',
    'El Código de la Abundancia': 'codigo-abundancia',
    'Sana lo que Nadie Vio': 'sana-lo-que-nadie-vio'
  };
  return slugMap[title] || title.toLowerCase().replace(/\s+/g, '-');
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
