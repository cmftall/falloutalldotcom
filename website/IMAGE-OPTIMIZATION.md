# Image Optimization Guide

## 🎯 Objectif

Optimiser l'image Hero (`fallou-tall-photo.jpg`) pour améliorer les performances :
- **Réduire la taille** : 164KB → ~80KB (JPEG optimisé)
- **Formats modernes** : WebP (~50KB) et AVIF (~40KB)
- **Impact** : LCP amélioré de 5-6s → 2-3s

---

## 📋 Prérequis

### Option 1 : ImageMagick + WebP (Recommandé)

```bash
# macOS
brew install imagemagick webp

# Ubuntu/Debian
sudo apt-get install imagemagick webp

# Vérifier l'installation
convert --version
cwebp -version
```

### Option 2 : Sharp (Node.js - Alternative)

```bash
npm install --save-dev sharp
```

---

## 🚀 Méthode 1 : Script Automatique (ImageMagick)

```bash
cd website
./scripts/optimize-image.sh
```

Le script va :
1. Créer `public/optimized/` directory
2. Générer `fallou-tall-photo-optimized.jpg` (~80KB)
3. Générer `fallou-tall-photo.webp` (~50KB)
4. Générer `fallou-tall-photo.avif` (~40KB)

**Ensuite** :
```bash
# Remplacer l'image originale par la version optimisée
cp public/optimized/fallou-tall-photo-optimized.jpg public/fallou-tall-photo.jpg

# Copier les versions modernes
cp public/optimized/fallou-tall-photo.webp public/
cp public/optimized/fallou-tall-photo.avif public/
```

---

## 🚀 Méthode 2 : Sharp (Node.js)

Créez `scripts/optimize-image-sharp.js` :

```javascript
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputPath = path.join(__dirname, '../public/fallou-tall-photo.jpg')
const outputDir = path.join(__dirname, '../public')

async function optimize() {
  // JPEG optimisé
  await sharp(inputPath)
    .resize(1000, 1250, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(path.join(outputDir, 'fallou-tall-photo.jpg'))

  // WebP
  await sharp(inputPath)
    .resize(1000, 1250, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(outputDir, 'fallou-tall-photo.webp'))

  // AVIF
  await sharp(inputPath)
    .resize(1000, 1250, { fit: 'inside', withoutEnlargement: true })
    .avif({ quality: 80 })
    .toFile(path.join(outputDir, 'fallou-tall-photo.avif'))

  console.log('✅ Images optimisées avec succès!')
}

optimize().catch(console.error)
```

Exécuter :
```bash
node scripts/optimize-image-sharp.js
```

---

## 🚀 Méthode 3 : Outil en ligne (Rapide)

1. **Squoosh** (Google) : https://squoosh.app/
   - Upload `fallou-tall-photo.jpg`
   - Export en WebP (qualité 85) et AVIF (qualité 80)
   - Télécharger les fichiers

2. **TinyPNG** : https://tinypng.com/
   - Upload l'image
   - Télécharger la version optimisée

**Ensuite** :
- Renommer en `fallou-tall-photo.webp` et `fallou-tall-photo.avif`
- Placer dans `public/`

---

## ✅ Vérification

Après optimisation, vérifiez les tailles :

```bash
cd website/public
ls -lh fallou-tall-photo.*
```

**Résultats attendus** :
- `fallou-tall-photo.jpg` : ~80-100KB (au lieu de 164KB)
- `fallou-tall-photo.webp` : ~50-60KB
- `fallou-tall-photo.avif` : ~40-50KB

---

## 🔧 Intégration

Le code est déjà prêt ! Le composant `Hero.tsx` utilise automatiquement :
1. **AVIF** si supporté (navigateurs modernes)
2. **WebP** sinon (Chrome, Firefox, Edge)
3. **JPEG** en fallback (tous navigateurs)

Le preload dans `layout.tsx` charge AVIF en priorité.

---

## 📊 Impact Performance

| Format | Taille | Support | LCP Impact |
|--------|--------|---------|------------|
| JPEG (actuel) | 164KB | 100% | 5-6s |
| JPEG optimisé | ~80KB | 100% | 3-4s |
| WebP | ~50KB | ~95% | 2-3s |
| AVIF | ~40KB | ~85% | 2-3s |

**Gain estimé** : **-50% à -75% de taille** → **-40% à -60% sur LCP**

---

## 🐛 Dépannage

### Les images ne se chargent pas
- Vérifiez que les fichiers sont dans `public/`
- Vérifiez les noms exacts : `fallou-tall-photo.webp`, `fallou-tall-photo.avif`
- Vérifiez les permissions : `chmod 644 public/fallou-tall-photo.*`

### Le script échoue
- Vérifiez que ImageMagick/WebP sont installés : `which convert cwebp`
- Sur macOS, utilisez `brew install imagemagick webp`
- Alternative : Utilisez Squoosh.app (méthode 3)

---

## 📝 Notes

- Les formats modernes sont **optionnels** : si absents, le JPEG sera utilisé
- Le code gère automatiquement le fallback
- Pas besoin de redémarrer le serveur après ajout des fichiers

