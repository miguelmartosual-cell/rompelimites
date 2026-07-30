# 📱 Carrusel Móvil - Rompelímites

## ¿Qué es?

Tu tienda ahora tiene un **carrusel profesional optimizado para móviles** que permite ver múltiples libros simultáneamente, proporcionando una mejor experiencia de compra en dispositivos pequeños.

---

## 🎯 Características

### ✨ Experiencia Táctil Premium
- **Smooth scroll** con momentum (inercial)
- **Snap scrolling** para alineación perfecta
- **Cursor grab** que indica interactividad
- **Indicadores visuales** de página actual

### 📊 Múltiples Vistas por Dispositivo
- **Móviles (< 480px)**: Ver 1.5-2 libros a la vez
- **Móviles medianos (480-768px)**: Ver 2 libros completos
- **Tablets (768-1024px)**: Mostrar grid de 3 columnas
- **Desktop (> 1024px)**: Grid responsivo normal

### 🎨 Indicadores Interactivos
- **Puntos de navegación** que muestran página actual
- **Click para navegar** directamente a cualquier página
- **Animación suave** al cambiar de página
- **Hover effect** en indicadores

---

## 🚀 Cómo Funciona

### Desktop
```
Muestra el grid tradicional de libros
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Libro 1 │ │ Libro 2 │ │ Libro 3 │
└─────────┘ └─────────┘ └─────────┘
```

### Móvil
```
Carrusel horizontal con snap scroll
┌──────────────────────────────────┐
│ Libro 1 │ Libro 2 (parcial)      │ ← Scroll horizontal
└──────────────────────────────────┘
  ●  ○  ○  ○  ○  ○
```

---

## 💡 Casos de Uso Móvil

### 1️⃣ Exploración Rápida
El usuario puede deslizar rápidamente a través de los libros sin necesidad de desplazarse verticalmente constantemente.

### 2️⃣ Comparación Visual
Ver dos libros uno al lado del otro ayuda a comparar portadas y precios.

### 3️⃣ Enganche
El movimiento horizontal mantiene el engagement y la navegación se siente más natural.

---

## 🛠️ Personalización

### Cambiar número de libros visibles
Edita `style-v2.css`:
```css
.books-carousel-item {
  flex: 0 0 calc(50% - 0.75rem); /* Cambiar 50% por 60%, 40%, etc */
}
```

### Cambiar espacio entre libros
```css
.books-carousel {
  gap: 1.5rem; /* Ajusta el espacio */
}
```

### Cambiar color de indicadores
```css
.carousel-dot.active {
  background: var(--primary); /* Cambiar a otro color */
}
```

---

## 📊 Responsive Breakpoints

| Dispositivo | Ancho | Libros Visibles | Tipo |
|-------------|-------|-----------------|------|
| iPhone SE | < 375px | 1.5 | Carrusel |
| iPhone 12 | 390px | 1.5 | Carrusel |
| Tablet Pequeña | 480-600px | 2 | Carrusel |
| Tablet | 600-768px | 2 | Carrusel |
| Tablet Grande | 768-1024px | 3 | Grid |
| Desktop | > 1024px | 4-5 | Grid |

---

## ✅ Características Técnicas

✓ **Scroll Snap** - Alineación automática de items  
✓ **Touch Optimized** - Momentum scrolling (-webkit-overflow-scrolling)  
✓ **Smooth Scroll** - Transiciones suaves  
✓ **Accessible** - Indicadores con click interactivo  
✓ **Performance** - Sin JavaScript pesado, solo CSS nativo  
✓ **Cross-browser** - Compatible con todos los navegadores modernos  

---

## 🎮 Interacciones del Usuario

### En Móvil
1. **Deslizar horizontalmente** → Carrusel se mueve
2. **Soltar rápido** → Scroll inercial
3. **Click en indicador** → Va a esa página
4. **Click en libro** → Abre preview

### En Desktop
1. **Scroll vertical** → Baja página
2. **Click en libro** → Abre preview
3. **Búsqueda** → Filtra ambos (grid y carrusel)

---

## 📈 Beneficios

### Para el Usuario
- Experiencia móvil fluida y natural
- Descubrimiento más fácil de libros
- Mayor engagement y tiempo en sitio

### Para la Conversión
- Mejor visibilidad de portadas en móvil
- Navegación intuitiva
- Reduce friction en el journey de compra

---

## 🔍 Debugging

Si el carrusel no funciona:

1. **Verificar en DevTools**: F12 → Resize → Modo móvil
2. **Comprobar que aparece el carrusel**: Debe estar debajo del grid (oculto en desktop)
3. **Revisar console**: Buscar errores de JavaScript
4. **Limpiar cache**: Ctrl+Shift+R (hard refresh)

---

## 🚀 Versiones Futuras

Posibles mejoras:
- [ ] Autoplay con pausa en hover/touch
- [ ] Swipe gestures personalizadas
- [ ] Paginación numérica (1/6, 2/6, etc)
- [ ] Animaciones de entrada
- [ ] Lazy loading de imágenes

---

## 📱 Prueba en tu Móvil

**URL:** https://miguelmartosual-cell.github.io/rompelimites/index-v2.html

Abre en tu teléfono y:
1. Desplázate hasta "Biblioteca de Transformación"
2. Desliza horizontalmente los libros
3. Prueba los indicadores

---

**Actualizado:** 30 julio 2026  
**Autor:** Claude  
**Estado:** ✅ Producción
