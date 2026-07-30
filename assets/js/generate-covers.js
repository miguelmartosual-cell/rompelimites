/**
 * Generador de portadas profesionales en SVG
 * Solución temporal mientras obtienes las portadas reales de Amazon
 */

const coverConfig = [
  { title: "Hábito Atómico\nRompelímites", gradient: ["#b85c3a", "#8b6f47"], icon: "⚛️" },
  { title: "El Futuro que\nDios Ya Escribió", gradient: ["#8b6f47", "#4a5d3a"], icon: "🚀" },
  { title: "Empiece Bien\nsu Día", gradient: ["#f59e0b", "#8b6f47"], icon: "🌅" },
  { title: "El Código\nEspiritual", gradient: ["#4a5d3a", "#6b6b6b"], icon: "🔐" },
  { title: "Campo\nInterior", gradient: ["#b85c3a", "#6b6b6b"], icon: "🌱" },
  { title: "Código de la\nManifestación", gradient: ["#8b6f47", "#b85c3a"], icon: "✨" },
  { title: "Según la\nEsencia", gradient: ["#4a5d3a", "#8b6f47"], icon: "💎" },
  { title: "La Magia de\nSí Mismo", gradient: ["#b85c3a", "#4a5d3a"], icon: "🪄" },
  { title: "Sal Fuera", gradient: ["#6b6b6b", "#4a5d3a"], icon: "🌍" },
  { title: "50 Reflexiones\npara tu Alma", gradient: ["#8b6f47", "#b85c3a"], icon: "🧘" },
  { title: "El Circuito de\ntu Destino", gradient: ["#4a5d3a", "#6b6b6b"], icon: "⚡" },
  { title: "Crea tu\nFuturo", gradient: ["#b85c3a", "#8b6f47"], icon: "🎯" }
];

// Generar SVG para cada portada
function generateCoverSVG(index, title, gradientColors, icon) {
  const [color1, color2] = gradientColors;
  
  return `
    <svg width="220" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 300">
      <defs>
        <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
        <filter id="noise${index}">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0.3" />
        </filter>
      </defs>
      
      <!-- Background gradient -->
      <rect width="220" height="300" fill="url(#grad${index})"/>
      
      <!-- Noise texture -->
      <rect width="220" height="300" fill="white" filter="url(#noise${index})" opacity="0.08"/>
      
      <!-- Top accent line -->
      <line x1="0" y1="40" x2="220" y2="40" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      
      <!-- Icon -->
      <text x="110" y="100" font-size="48" text-anchor="middle" dominant-baseline="middle">
        ${icon}
      </text>
      
      <!-- Title -->
      <text x="110" y="170" font-size="16" font-weight="600" text-anchor="middle" 
            fill="white" font-family="'Fraunces', serif" line-height="1.3" letter-spacing="-0.01em">
        ${title}
      </text>
      
      <!-- Author -->
      <text x="110" y="260" font-size="11" text-anchor="middle" fill="rgba(255,255,255,0.8)" 
            font-family="Inter, sans-serif" font-style="italic">
        Rompelímites
      </text>
      
      <!-- Bottom accent -->
      <rect x="40" y="280" width="140" height="2" fill="rgba(255,255,255,0.5)"/>
    </svg>
  `;
}

// Crear carpeta de portadas en HTML (instrucciones)
function showCoverInstructions() {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Descargar Portadas Reales</title>
      <style>
        body {
          font-family: 'Inter', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background: #f4efe6;
        }
        h1 { color: #b85c3a; font-family: 'Fraunces', serif; }
        .instructions {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(26, 26, 26, 0.08);
          margin-top: 2rem;
        }
        .book-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .book-item {
          background: #f4efe6;
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #b85c3a;
        }
        .book-title { font-weight: 600; color: #b85c3a; margin-bottom: 0.5rem; }
        .book-url { font-size: 0.85rem; color: #6b6b6b; word-break: break-all; }
        code {
          background: #e8ddf0;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-family: monospace;
        }
        .step {
          background: white;
          padding: 1.5rem;
          margin-top: 1.5rem;
          border-radius: 8px;
          border: 1px solid #e8ddf0;
        }
      </style>
    </head>
    <body>
      <h1>📚 Descargar Portadas Reales</h1>
      
      <div class="instructions">
        <h2>Cómo agregar las portadas reales a tu tienda</h2>
        
        <div class="step">
          <h3>Paso 1: Descargar portadas de Amazon</h3>
          <p>Haz clic derecho en cada portada y selecciona "Guardar imagen como..."</p>
          <p>O copia la URL de la imagen y descárgala manualmente.</p>
        </div>
        
        <div class="step">
          <h3>Paso 2: Crear carpeta de portadas</h3>
          <p>En tu servidor, crea la carpeta: <code>assets/img/portadas/</code></p>
        </div>
        
        <div class="step">
          <h3>Paso 3: Renombrar imágenes</h3>
          <p>Guarda las imágenes con estos nombres:</p>
          <ul>
            <li><code>1-habito-atomico.jpg</code></li>
            <li><code>2-futuro-dios.jpg</code></li>
            <li><code>3-empiece-bien-dia.jpg</code></li>
            <li><code>4-codigo-espiritual.jpg</code></li>
            <li><code>5-campo-interior.jpg</code></li>
            <li><code>6-manifestacion.jpg</code></li>
            <li><code>7-segun-esencia.jpg</code></li>
            <li><code>8-magia-si-mismo.jpg</code></li>
            <li><code>9-sal-fuera.jpg</code></li>
            <li><code>10-50-reflexiones.jpg</code></li>
            <li><code>11-circuito-destino.jpg</code></li>
            <li><code>12-crea-futuro.jpg</code></li>
          </ul>
        </div>
        
        <div class="step">
          <h3>Paso 4: Actualizar HTML</h3>
          <p>Después de subir las imágenes, actualiza <code>index-v2.html</code> para usar las portadas reales en lugar de gradientes.</p>
        </div>
      </div>
      
      <h2 style="margin-top: 3rem;">Mis libros en Amazon</h2>
      <div class="book-list">
        <div class="book-item">
          <div class="book-title">Hábito Atómico Rompelímites</div>
          <p>Busca en: amazon.es/Rompelímites</p>
        </div>
        <div class="book-item">
          <div class="book-title">El Futuro que Dios Ya Escribió</div>
          <p>Busca en: amazon.es/Rompelímites</p>
        </div>
        <div class="book-item">
          <div class="book-title">Empiece Bien su Día</div>
          <p>Busca en: amazon.es/Rompelímites</p>
        </div>
        <!-- Agregar más según sea necesario -->
      </div>
    </body>
    </html>
  `;
  return html;
}

// Exportar funciones
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateCoverSVG, coverConfig, showCoverInstructions };
}
