# 🚀 Subir Rompelímites a GitHub en 5 minutos

## Opción 1: RÁPIDA (Línea de comandos)

### Paso 1: Verificar que tienes Git instalado

Abre terminal/cmd y ejecuta:
```bash
git --version
```

Si no sale nada, descarga: https://git-scm.com

### Paso 2: Ir a la carpeta del proyecto

```bash
cd rompelimites-bookstore
```

### Paso 3: Ejecutar el script de deploy

Reemplaza `TU_USUARIO` con tu usuario de GitHub:

```bash
bash deploy.sh TU_USUARIO
```

**Ejemplo:**
```bash
bash deploy.sh miguelmartosrompelimites
```

Cuando pida contraseña, pega un **Personal Access Token** (no tu password):

1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token (classic)"
3. Nombre: `GitHub Pages Deploy`
4. Selecciona: ✅ `repo` y ✅ `workflow`
5. Copia el token
6. Pégalo en la terminal (no verás caracteres, es normal)

### Paso 4: Activar GitHub Pages

1. Ve a: `https://github.com/TU_USUARIO/rompelimites`
2. Click en **Settings** (esquina superior derecha)
3. En el menú izquierdo, click en **Pages**
4. En "Source", selecciona **main**
5. En "Folder", selecciona **/ (root)**
6. Click en **Save**

### Paso 5: Esperar 2-3 minutos

Verás un mensaje verde: "Your site is published at..."

**¡Listo! Tu web está en vivo en:**
```
https://TU_USUARIO.github.io/rompelimites
```

---

## Opción 2: MANUAL (Interfaz GitHub)

Si no quieres usar terminal:

### Paso 1: Crear repo en GitHub

1. Ve a: https://github.com/new
2. Nombre: `rompelimites`
3. Descripción: `Tienda digital de libros`
4. Selecciona: ⚪ Public
5. **NO marques** "Initialize with README"
6. Click en **Create repository**

### Paso 2: Subir archivos (Drag & Drop)

1. En la página del repo que acabas de crear, verás un área gris que dice:
   > "...or upload existing file"
2. Arrastra **todos los archivos** de tu carpeta `rompelimites-bookstore` al área gris
3. En la caja "Commit message", escribe:
   ```
   Tienda digital Rompelímites v1.0
   ```
4. Click en **Commit changes**

### Paso 3: Activar GitHub Pages

1. Click en **Settings** (esquina superior derecha)
2. En el menú izquierdo, click en **Pages**
3. En "Source", selecciona **main** (rama)
4. En "Folder", selecciona **/ (root)**
5. Click en **Save**

### Paso 4: Esperar

GitHub construye tu página (1-3 minutos).

Verás un mensaje como:
> "Your site is published at `https://TU_USUARIO.github.io/rompelimites`"

---

## Opción 3: Usando GitHub Desktop (GUI)

Si prefieres interfaz gráfica:

### Paso 1: Descargar GitHub Desktop

https://desktop.github.com

### Paso 2: Inicializar repo

1. Abre GitHub Desktop
2. Click en **File** → **Add Local Repository**
3. Selecciona la carpeta `rompelimites-bookstore`
4. Click en **Create Repository**

### Paso 3: Publicar a GitHub

1. Click en **Publish repository**
2. Nombre: `rompelimites`
3. Descripción: `Tienda digital de libros`
4. Selecciona: ⚪ Public
5. Click en **Publish Repository**

### Paso 4: Activar Pages (en web)

1. Ve a: `https://github.com/TU_USUARIO/rompelimites`
2. Settings → Pages
3. Source: **main**, Folder: **/ (root)**
4. Save

**¡Hecho!**

---

## Verificar que funciona

Una vez que ves el mensaje verde en Pages, abre en navegador:
```
https://TU_USUARIO.github.io/rompelimites
```

Si ves:
✅ La página carga  
✅ Los libros aparecen en un grid  
✅ Puedes hacer clic en preview  
✅ El carrito funciona  

**¡Tu tienda está viva!** 🎉

---

## Hacer cambios después

Si quieres editar libros, precios, etc.:

### Opción 1: En GitHub (web)

1. Ve a tu repo en GitHub
2. Click en un archivo (ej: `assets/js/app.js`)
3. Click en el ✏️ (edit)
4. Cambia lo que quieras
5. Scroll al final
6. Message: "Actualizar precios" (o lo que hagas)
7. Click en **Commit changes**
8. Espera 1-2 minutos a que se actualice

### Opción 2: En tu computadora

1. Edita los archivos localmente
2. Terminal:
   ```bash
   cd rompelimites-bookstore
   git add .
   git commit -m "Actualizar libros"
   git push origin main
   ```
3. Espera a que GitHub construya

---

## Si algo no funciona

### "Error: Permission denied"

**Solución:** Usa Personal Access Token en lugar de password

1. https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Selecciona ✅ `repo` y ✅ `workflow`
4. Copy token
5. En terminal, cuando pida contraseña, pégalo

### "Error: Repository not found"

**Solución:** Verifica que:
- Tu usuario sea correcto: `echo $USER` (macOS/Linux)
- Hayas creado el repo en GitHub
- Estés en la carpeta correcta

### "Página en blanco o error 404"

**Solución:**
1. Ve a: GitHub repo → Settings → Pages
2. Verifica que Source esté en **main** y Folder en **/ (root)**
3. Espera 5 minutos más
4. Limpia caché: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)

### "Los estilos no cargan"

**Solución:**
- Ve a la consola (F12)
- Si ves rutas como `/assets/css/style.css`
- Cámbialo a `./assets/css/style.css` (punto y barra)

Nota: En GitHub Pages, el proyecto va en subcarpeta, así que rutas relativas con `./` funcionan mejor.

---

## Próximos pasos

Una vez que tu web esté en vivo:

1. ✅ **Personaliza libros:**  
   Edita `assets/js/app.js` con tus datos reales

2. ✅ **Sube portadas reales:**  
   Crea carpeta `/assets/img/portadas/`, sube fotos

3. ✅ **Integra pagos:**  
   Stripe, PayPal o Redsys (requiere backend)

4. ✅ **Compra dominio:**  
   `rompelimites.com` → apunta a GitHub Pages

5. ✅ **Monitoriza:** 
   Google Analytics

---

## Contacto

Dudas: **info@rompelimites.com**

¡Que disfrutes tu tienda digital! 🚀📚
