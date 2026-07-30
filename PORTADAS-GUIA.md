# 📚 Guía: Agregar Portadas Reales de Amazon

## Tus libros en Amazon

Aquí está tu tienda actual de Rompelímites:
👉 https://www.amazon.es/stores/Rompelimites-Rompelimites/author/B0H4BP15KC

---

## Los 12 libros actuales

1. **Hábito Atómico Rompelímites**
2. **El Futuro que Dios Ya Escribió**
3. **Empiece Bien su Día**
4. **El Código Espiritual**
5. **Campo Interior**
6. **Código de la Manifestación**
7. **Según la Esencia**
8. **La Magia de Sí Mismo**
9. **Sal Fuera**
10. **50 Reflexiones para tu Alma**
11. **El Circuito de tu Destino**
12. **Crea tu Futuro**

---

## Pasos para agregar portadas reales

### 1️⃣ Descargar las portadas

#### Opción A: Manualmente desde Amazon
- Ve a: https://www.amazon.es/stores/Rompelimites-Rompelimites/author/B0H4BP15KC
- Haz clic derecho en cada portada
- Selecciona: "Guardar imagen como..."
- Elige la carpeta de destino

#### Opción B: Script automático (Chrome DevTools)
```javascript
// Ejecuta esto en Console de Amazon
const covers = document.querySelectorAll('img[src*="images.amazon"]');
covers.forEach((img, i) => {
  const link = document.createElement('a');
  link.href = img.src;
  link.download = `portada-${i+1}.jpg`;
  link.click();
});
```

---

### 2️⃣ Crear carpeta en el servidor

En GitHub o tu servidor, crea esta estructura:
```
rompelimites-bookstore/
├── assets/
│   ├── img/
│   │   ├── portadas/
│   │   │   ├── 1-habito-atomico.jpg
│   │   │   ├── 2-futuro-dios.jpg
│   │   │   ├── 3-empiece-bien-dia.jpg
│   │   │   ├── ...
│   │   │   └── 12-crea-futuro.jpg
```

---

### 3️⃣ Renombrar archivos

Descarga las imágenes y renómbra las así (importante para que se vinculen correctamente):

```
1-habito-atomico.jpg
2-futuro-dios.jpg
3-empiece-bien-dia.jpg
4-codigo-espiritual.jpg
5-campo-interior.jpg
6-manifestacion.jpg
7-segun-esencia.jpg
8-magia-si-mismo.jpg
9-sal-fuera.jpg
10-50-reflexiones.jpg
11-circuito-destino.jpg
12-crea-futuro.jpg
```

---

### 4️⃣ Subir a GitHub

```bash
cd rompelimites-bookstore/
mkdir -p assets/img/portadas/
# Copia aquí todas las imágenes renombradas

git add assets/img/portadas/
git commit -m "✨ Agregar portadas reales de Amazon"
git push
```

---

### 5️⃣ Actualizar el HTML

Una vez subidas las imágenes, actualiza `index-v2.html`:

Reemplaza esta línea en el archivo (búscalo):
```html
<div class="book-cover-v2" style="background: linear-gradient(135deg, ${getGradient(book.id)});">
  ${book.title}
</div>
```

Por esto:
```html
<div class="book-cover-v2" style="background-image: url('assets/img/portadas/${book.id}-${slugify(book.title)}.jpg'); background-size: cover; background-position: center;">
</div>
```

---

## Alternativa: URLs directas de Amazon

Si prefieres usar URLs de imagen directas (sin descargar):

1. Inspecciona cada portada en Amazon (Click derecho → Inspeccionar)
2. Busca la URL en `<img src="...">`
3. Usa esa URL directamente en el HTML

**Ejemplo:**
```html
<div class="book-cover-v2">
  <img src="https://m.media-amazon.com/images/P/[ASIN].01.jpg" alt="Portada">
</div>
```

⚠️ **Nota:** Las URLs de Amazon pueden cambiar. Lo ideal es descargar las imágenes.

---

## Optimización de imágenes

Antes de subir, optimiza las portadas:

### Con ImageMagick:
```bash
convert portada.jpg -quality 80 -resize 220x300 portada-optimizada.jpg
```

### Con FFmpeg:
```bash
ffmpeg -i portada.jpg -vf scale=220:300 portada-optimizada.jpg
```

### Online gratuito:
- https://tinypng.com
- https://imagecompressor.com
- https://tools.10web.io/image-compress

---

## Validar que funcionan

Después de subir las imágenes:

1. Ve a tu sitio: `https://miguelmartosual-cell.github.io/rompelimites/index-v2.html`
2. Abre DevTools (F12)
3. Ve a "Red" → filtra por imagen (img)
4. Verifica que todas las portadas cargan sin errores 404

---

## Estructura final esperada

```
Tu tienda se verá así:

┌─────────────────────┐
│ Portada real 📖      │
│ (Descargada de      │
│  Amazon)            │
├─────────────────────┤
│ Título              │
│ Autor               │
│ Descripción...      │
├─────────────────────┤
│ €4.99  [Ver preview]│
└─────────────────────┘
```

---

## Soporte técnico

Si las imágenes no carga:

1. **Error 404**: Verifica el nombre del archivo y la ruta
2. **CORS**: Si usas URLs externas, Amazon podría bloquearlas
3. **Tamaño**: Las imágenes muy grandes ralentizan la carga
4. **Formato**: Usa JPG u PNG, no WebP con navegadores antiguos

---

## Resumen rápido

```bash
# 1. Descargar portadas de Amazon
# 2. Crear carpeta assets/img/portadas/
# 3. Renombrar como: 1-..., 2-..., etc.
# 4. Subir a GitHub
# 5. Actualizar HTML si es necesario
# 6. ¡Listo! 🎉
```

---

**Última actualización:** 30 julio 2026  
**Autor:** Asistente de Claude  
**Estado:** Listo para implementar
