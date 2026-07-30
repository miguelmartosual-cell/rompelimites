// Datos de libros ampliados
const booksData = [
  {
    id: 1,
    title: "El Código de la Manifestación",
    author: "Rompelímites",
    description: "Descubre las leyes universales de la manifestación basadas en Salmo 29. Una guía práctica para convertir tus palabras en realidad.",
    price: 4.99,
    genre: "Espiritualidad",
    rating: 4.9,
    pages: 180,
    reviews: 342,
    preview: "Introducción a los códigos de manifestación | Capítulo 1: El poder de la palabra | Capítulo 2: Las 7 leyes | Capítulo 3: Práctica diaria | Capítulo 4: Testimonios"
  },
  {
    id: 2,
    title: "El Futuro que Dios Ya Escribió",
    author: "Rompelímites",
    description: "Basado en Jeremías 29:11-14. Transforma tu incertidumbre en esperanza con esta poderosa guía espiritual.",
    price: 3.99,
    genre: "Espiritualidad",
    rating: 4.8,
    pages: 156,
    reviews: 287,
    preview: "Prólogo: Tu futuro comienza hoy | Capítulo 1: El plan de Dios | Capítulo 2: Dejando ir el miedo | Capítulo 3: Visión clara | Capítulo 4: Acción divina"
  },
  {
    id: 3,
    title: "Vencedor: 40 días para Reconstruir tu Vida",
    author: "Rompelímites",
    description: "Un reto transformador de 40 días basado en la Biblia para reconstruir tu vida desde los cimientos.",
    price: 5.99,
    genre: "Autoayuda",
    rating: 4.9,
    pages: 220,
    reviews: 456,
    preview: "Semana 1: Fundamentos | Semana 2: Renovación mental | Semana 3: Fortaleza emocional | Semana 4: Acción | Semana 5: Consolidación"
  },
  {
    id: 4,
    title: "El Arquitecto de tu Vida",
    author: "Rompelímites",
    description: "12 capítulos sobre cómo diseñar la vida que deseas. Herramientas prácticas de desarrollo personal integral.",
    price: 4.99,
    genre: "Desarrollo Personal",
    rating: 4.7,
    pages: 195,
    reviews: 324,
    preview: "Introducción: Eres el arquitecto | Capítulo 1: Visión | Capítulo 2: Diseño | Capítulo 3: Construcción | Capítulo 4: Mantenimiento"
  },
  {
    id: 5,
    title: "El Código del Discípulo",
    author: "Rompelímites",
    description: "9 verdades fundamentales sobre el discipulado cristiano auténtico. Una llamada a la transformación profunda.",
    price: 4.99,
    genre: "Espiritualidad",
    rating: 4.8,
    pages: 178,
    reviews: 198,
    preview: "Verdad 1: El llamado | Verdad 2: La rendición | Verdad 3: La disciplina | Verdad 4: La comunidad | Verdad 5: La misión"
  },
  {
    id: 6,
    title: "Toma el Control de tu Mente",
    author: "Rompelímites",
    description: "21 días para resetear tu mente y crear nuevos patrones de pensamiento. Método comprobado de transformación mental.",
    price: 3.99,
    genre: "Mindfulness",
    rating: 4.9,
    pages: 142,
    reviews: 567,
    preview: "Semana 1: Detección | Semana 2: Transformación | Semana 3: Integración | Día 21: Celebración | Bonus: Meditaciones guiadas"
  },
  {
    id: 7,
    title: "La Auditoría de tu Vida",
    author: "Rompelímites",
    description: "Rediseña tu vida a través de una auditoría profunda. Renegocia tu contrato personal con un nuevo propósito.",
    price: 4.99,
    genre: "Autoayuda",
    rating: 4.8,
    pages: 167,
    reviews: 276,
    preview: "Fase 1: Análisis | Fase 2: Evaluación | Fase 3: Rediseño | Fase 4: Implementación | Fase 5: Evaluación continua"
  },
  {
    id: 8,
    title: "Los Códigos Energéticos del Éxito",
    author: "Rompelímites",
    description: "Respuesta y complemento a 'Los Códigos Energéticos' de Sue Morter. Una perspectiva cristiana del desarrollo espiritual.",
    price: 5.99,
    genre: "Espiritualidad",
    rating: 4.7,
    pages: 208,
    reviews: 189,
    preview: "Código 1: Presencia | Código 2: Claridad | Código 3: Intención | Código 4: Acción | Código 5: Integración"
  },
  {
    id: 9,
    title: "El Trigo y la Cizaña",
    author: "Rompelímites",
    description: "Una exploración moderna de la parábola del trigo y la cizaña. Leyes de desarrollo personal y espiritual.",
    price: 4.99,
    genre: "Espiritualidad",
    rating: 4.8,
    pages: 171,
    reviews: 203,
    preview: "Introducción a la parábola | Lección 1: Discernimiento | Lección 2: Paciencia | Lección 3: Cosecha | Lección 4: Aplicación práctica"
  },
  {
    id: 10,
    title: "Plan de Desarrollo Personal: 90 Días",
    author: "Rompelímites",
    description: "Un plan probado en ciclos de 90 días para transformar 3 áreas clave de tu vida. Módulos prácticos e inmediatos.",
    price: 3.99,
    genre: "Desarrollo Personal",
    rating: 4.9,
    pages: 134,
    reviews: 445,
    preview: "Mes 1: Mindset | Mes 2: Hábitos | Mes 3: Consolidación | Plantillas: Planificación | Bonus: Cuestionarios de evaluación"
  },
  {
    id: 11,
    title: "El Principito: Una Lectura para Adultos",
    author: "Rompelímites",
    description: "Una reinterpretación moderna del clásico para público contemporáneo buscando significado y transformación.",
    price: 3.99,
    genre: "Literatura",
    rating: 4.6,
    pages: 95,
    reviews: 128,
    preview: "Prefacio moderno | Reinterpretación del viaje | Lecciones de vida | Reflexiones personales | Aplicación a tu vida"
  },
  {
    id: 12,
    title: "30 Metáforas para tu Transformación",
    author: "Rompelímites",
    description: "30 metáforas poderosas sobre crecimiento personal. Una joya para jóvenes y adultos en busca de sentido.",
    price: 4.99,
    genre: "Autoayuda",
    rating: 4.8,
    pages: 156,
    reviews: 312,
    preview: "Metáfora 1: El árbol | Metáfora 2: El río | Metáfora 3: La montaña | Metáfora 4: El fuego | Metáfora 5: La semilla"
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
