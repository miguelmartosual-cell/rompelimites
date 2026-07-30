#!/bin/bash

# Script para subir Rompelímites a GitHub rápidamente
# Uso: bash deploy.sh tu-usuario

set -e

echo "🚀 Rompelímites — Deploy a GitHub"
echo "===================================="
echo ""

if [ -z "$1" ]; then
  echo "❌ Uso: bash deploy.sh <tu-usuario-github>"
  echo ""
  echo "Ejemplo:"
  echo "  bash deploy.sh miguelmartosrompelimites"
  echo ""
  exit 1
fi

GITHUB_USER="$1"
REPO_NAME="rompelimites"

# Verificar si git está instalado
if ! command -v git &> /dev/null; then
  echo "❌ Git no está instalado. Instálalo desde: https://git-scm.com"
  exit 1
fi

echo "📝 GitHub user: $GITHUB_USER"
echo "📦 Nombre repo: $REPO_NAME"
echo ""

# Inicializar git si no existe
if [ ! -d .git ]; then
  echo "🔧 Inicializando repositorio git..."
  git init
  git config user.email "info@rompelimites.com"
  git config user.name "Rompelímites"
else
  echo "✓ Repositorio git ya existe"
fi

echo ""
echo "📤 Añadiendo archivos..."
git add .
git commit -m "Tienda digital Rompelímites v1.0 — Catálogo + Carrito + Contacto" || echo "✓ Cambios ya commiteados"

echo ""
echo "🌐 Conectando a GitHub..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"

echo ""
echo "📤 Subiendo a rama main..."
git branch -M main
git push -u origin main 2>&1 || {
  echo ""
  echo "⚠️  Error de autenticación."
  echo ""
  echo "Opciones:"
  echo "1. Usar Personal Access Token:"
  echo "   - Ve a: https://github.com/settings/tokens"
  echo "   - Crea token con permisos: repo, workflow"
  echo "   - Cuando pida password, pega el token"
  echo ""
  echo "2. Usar SSH:"
  echo "   - Configura SSH: https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
  echo "   - Cambia URL: git remote set-url origin git@github.com:$GITHUB_USER/$REPO_NAME.git"
  exit 1
}

echo ""
echo "✅ ¡Listo!"
echo ""
echo "Tu web estará en vivo en:"
echo "  🌐 https://$GITHUB_USER.github.io/$REPO_NAME"
echo ""
echo "📋 Siguientes pasos:"
echo "1. Ve a: https://github.com/settings/tokens (crea token si no tienes)"
echo "2. Ve a: https://github.com/$GITHUB_USER/$REPO_NAME"
echo "3. Settings → Pages → Source: main / (root) → Save"
echo "4. Espera 2-3 minutos a que GitHub construya"
echo ""
echo "✨ ¡Disfruta tu tienda!"
echo ""
