# 🎯 Rompelímites — Tienda Digital de Libros

Plataforma premium para vender libros digitales con preview de 5 páginas antes de comprar.

## ✨ Características

- 📚 Catálogo de libros con búsqueda en tiempo real
- 👁️ Preview de 5 primeras páginas por libro
- 🛒 Carrito persistente con localStorage
- 💳 Cálculo automático de IVA (21%)
- 📱 Diseño responsive (mobile-first)
- 🎨 Estilo editorial premium — inspirado en Casa del Libro
- ⚡ Sin dependencias — HTML/CSS/vanilla JavaScript
- 🚀 Listo para producción en Hostinger, GitHub Pages, Netlify

## 🚀 Usar en GitHub Pages

### 1. Crear repo en GitHub

```bash
# Si no tienes git instalado, hazlo primero:
# macOS: brew install git
# Windows: https://git-scm.com/download/win
# Linux: sudo apt install git

cd rompelimites-bookstore

# Inicializar repo local
git init
git add .
git commit -m "Tienda digital Rompelímites v1"
```

### 2. Subirlo a GitHub

1. Ve a https://github.com/new
2. Crea un nuevo repositorio llamado `rompelimites` (o lo que prefieras)
3. **NO inicialices README** (ya tenemos uno)
4. Copia el comando que GitHub te da y ejecútalo:

```bash
git remote add origin https://github.com/TU_USUARIO/rompelimites.git
git branch -M main
git push -u origin main
```

### 3. Habilitar GitHub Pages

1. Ve a tu repo → **Settings** → **Pages**
2. En "Source", selecciona `main` (rama)
3. En "Folder", selecciona `/ (root)`
4. Click en **Save**

**Tu web estará en vivo en:**
```
https://TU_USUARIO.github.io/rompelimites
```

Espera 1-2 minutos a que GitHub construya la página.

---

## 🛠️ Usar localmente

### Con Python 3 (recomendado)
```bash
cd rompelimites-bookstore
python3 -m http.server 8765
```
Abre: `http://localhost:8765/`

### Con Node.js
```bash
npx http-server -p 8765
```

---

## 📝 Personalizar para tus libros

### 1. Editar datos de libros

Abre `assets/js/app.js` y reemplaza el array `booksData`:

```javascript
const booksData = [
  {
    id: 1,
    title: 'El Código del Discípulo',
    author: 'Rompelímites',
    genre: 'Crecimiento Cristiano',
    price: 9.99,
    description: 'Descubre las 9 verdades del discipulado...',
    preview: 'Página 1: Intro...' // Opcional
  },
  // Más libros...
];
```

### 2. Cambiar colores

Edita `assets/css/style.css`:

```css
:root {
  --accent: #b85c3a;      /* Color principal */
  --accent-2: #4a5d3a;    /* Color secundario */
  --bg: #f4efe6;          /* Fondo */
}
```

### 3. Subir portadas reales

1. Crea carpeta `assets/img/portadas/`
2. Sube tus imágenes (JPG o PNG)
3. En `app.js`, actualiza la función `createBookCard()` para usar las imágenes reales

---

## 💳 Integrar pagos reales

Actualmente el botón de compra es simulado. Para pagos reales:

### Opción 1: Stripe
```javascript
// En assets/js/app.js, reemplazar checkoutBtn.addEventListener:

checkoutBtn.addEventListener('click', async () => {
  const response = await fetch('/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cart: cart })
  });
  
  const session = await response.json();
  window.location.href = session.url; // Redirigir a Stripe
});
```

Necesitarás un backend (Node.js, Python, etc.) para manejar pagos.

### Opción 2: Usar plataforma de pago todo-en-uno
- **Gumroad** — Lo más fácil para ebooks
- **SendOwl** — Especializada en cursos/ebooks
- **Podia** — Todo-en-uno con community

---

## 📱 Responsive Design

La web se adapta automáticamente a:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktop (1200px+)

Prueba en DevTools: `F12` → Toggle Device Toolbar

---

## 🔧 Estructura de archivos

```
rompelimites-bookstore/
├── index.html          # Página principal (catálogo)
├── carrito.html        # Página del carrito
├── contacto.html       # Página de contacto + FAQ
├── .htaccess           # Configuración Apache (Hostinger)
├── README.md           # Este archivo
├── assets/
│   ├── css/
│   │   └── style.css   # Estilos (Archetype Editorial Light Cream)
│   ├── js/
│   │   └── app.js      # Lógica (carrito, búsqueda, modal)
│   └── img/
│       └── portadas/   # Carpeta para tus portadas
└── lib/                # Librerías JavaScript (vacío, lista para llenar)
```

---

## 🚀 Deploy en otros hosts

### Netlify (recomendado)
1. Conecta tu repo GitHub
2. Build command: `(dejar vacío)`
3. Publish directory: `.` (root)
4. Deploy

### Hostinger
1. Sube carpeta por FTP
2. El archivo `.htaccess` se encarga de cache busting
3. Configurar dominio en panel Hostinger

### Vercel
1. Conecta repo GitHub
2. Framework: `Other` (static)
3. Root directory: `.`

---

## 📧 Soporte

Para preguntas, contacta: **info@rompelimites.com**

---

## 📄 Licencia

© 2026 Rompelímites. Todos los derechos reservados.
