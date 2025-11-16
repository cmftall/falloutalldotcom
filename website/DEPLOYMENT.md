# Guide de Déploiement en Production

Ce guide vous accompagne dans le déploiement du site web en production.

## Prérequis

- Node.js 18+ installé
- Compte sur une plateforme d'hébergement (Vercel, Netlify, etc.)
- Accès au dépôt Git du projet

## Configuration des Variables d'Environnement

### Variables Requises

Ces variables doivent être configurées pour que le site fonctionne correctement en production :

```bash
NEXT_PUBLIC_SITE_URL=https://falloutall.com
NEXT_PUBLIC_SITE_NAME="Fallou TALL"
```

**⚠️ IMPORTANT**: 
- Remplacez `https://falloutall.com` par votre domaine de production réel
- Ces variables sont utilisées pour le SEO, le sitemap, et les métadonnées
- Sans ces variables, le site fonctionnera mais avec des URLs incorrectes dans le sitemap

### Variables Optionnelles (Recommandées)

Ces variables améliorent les fonctionnalités mais ne sont pas strictement nécessaires :

#### Analytics
```bash
# Google Analytics 4
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX

# OU Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=falloutall.com
```

#### Monitoring d'Erreurs (Sentry)
```bash
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
SENTRY_ORG=your_org
SENTRY_PROJECT=your_project
SENTRY_AUTH_TOKEN=your_token
```

#### Google Search Console
```bash
GOOGLE_VERIFICATION_CODE=your_verification_code
```

## Déploiement sur Vercel

### 1. Préparation

1. Connectez votre dépôt Git à Vercel
2. Vercel détectera automatiquement Next.js

### 2. Configuration du Projet

Dans les paramètres du projet Vercel :

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Install Command**: `npm install`

### 3. Variables d'Environnement

1. Allez dans **Settings** > **Environment Variables**
2. Ajoutez toutes les variables requises et optionnelles
3. Assurez-vous qu'elles sont configurées pour **Production**, **Preview**, et **Development**

### 4. Déploiement

Vercel déploiera automatiquement à chaque push sur la branche principale.

## Déploiement sur Netlify

### 1. Préparation

1. Connectez votre dépôt Git à Netlify
2. Netlify détectera automatiquement Next.js

### 2. Configuration du Build

Dans **Site settings** > **Build & deploy** :

- **Build command**: `npm run build`
- **Publish directory**: `out`

### 3. Variables d'Environnement

1. Allez dans **Site settings** > **Environment variables**
2. Ajoutez toutes les variables requises et optionnelles

### 4. Déploiement

Netlify déploiera automatiquement à chaque push sur la branche principale.

## Déploiement sur Autres Plateformes (Static Hosting)

Ce site est configuré pour un export statique, donc il peut être déployé sur n'importe quel hébergeur statique.

### Étapes

1. **Build local** :
   ```bash
   cd website
   npm install
   npm run build
   ```

2. **Déployer le dossier `out/`** :
   - Le dossier `out/` contient tous les fichiers statiques
   - Uploadez son contenu sur votre hébergeur

3. **Configuration des headers** :
   - Copiez le fichier `public/_headers` sur votre hébergeur
   - Ou configurez les headers de sécurité dans les paramètres de votre plateforme

## Vérification Post-Déploiement

### Checklist

- [ ] Le site se charge correctement
- [ ] Les images s'affichent (notamment la photo de profil)
- [ ] La navigation fonctionne (EN/FR)
- [ ] La section FAQ s'affiche avec du contenu
- [ ] Les liens externes fonctionnent (LinkedIn, GitHub, email)
- [ ] Le formulaire de contact fonctionne
- [ ] Les métadonnées SEO sont correctes (vérifier avec un outil de preview)
- [ ] Les analytics fonctionnent (si configurés)
- [ ] Le monitoring d'erreurs fonctionne (si configuré)

### Tests à Effectuer

1. **Test de navigation** :
   - Vérifier que les liens de navigation fonctionnent
   - Tester le changement de langue (EN/FR)
   - Vérifier que les ancres (#home, #work, #faq, #contact) fonctionnent

2. **Test de contenu** :
   - Vérifier que toutes les sections s'affichent
   - Vérifier que les FAQ s'ouvrent et se ferment
   - Vérifier que les statistiques s'animent correctement

3. **Test de performance** :
   - Utiliser Lighthouse pour vérifier les scores
   - Vérifier que les images sont optimisées
   - Vérifier les temps de chargement

4. **Test de compatibilité** :
   - Tester sur différents navigateurs (Chrome, Firefox, Safari, Edge)
   - Tester sur mobile et tablette
   - Vérifier le responsive design

## Configuration DNS

Si vous utilisez un domaine personnalisé :

1. **Vercel** :
   - Allez dans **Settings** > **Domains**
   - Ajoutez votre domaine
   - Suivez les instructions pour configurer les DNS

2. **Netlify** :
   - Allez dans **Domain settings**
   - Ajoutez votre domaine personnalisé
   - Configurez les DNS selon les instructions

## Sécurité

Le site inclut déjà :

- ✅ Headers de sécurité configurés (`_headers` file)
- ✅ Content Security Policy
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ Referrer-Policy

Vérifiez que votre hébergeur applique bien ces headers.

## Monitoring et Maintenance

### Analytics

Si vous avez configuré Google Analytics ou Plausible :
- Vérifiez régulièrement les statistiques
- Surveillez les pages les plus visitées
- Identifiez les sources de trafic

### Monitoring d'Erreurs

Si vous avez configuré Sentry :
- Configurez des alertes pour les erreurs critiques
- Vérifiez régulièrement le dashboard Sentry
- Corrigez les erreurs récurrentes

### Mises à Jour

Pour mettre à jour le site :

1. Faites vos modifications localement
2. Testez en local avec `npm run dev`
3. Commitez et poussez vers Git
4. La plateforme déploiera automatiquement

## Dépannage

### Le site ne se charge pas

- Vérifiez les logs de build sur votre plateforme
- Vérifiez que toutes les variables d'environnement sont configurées
- Vérifiez que le build réussit localement

### Les images ne s'affichent pas

- Vérifiez que `fallou-tall-photo.jpg` existe dans `public/`
- Vérifiez que les chemins d'images sont corrects
- Vérifiez la console du navigateur pour les erreurs 404

### Les analytics ne fonctionnent pas

- Vérifiez que les variables d'environnement sont correctement configurées
- Vérifiez la console du navigateur pour les erreurs
- Vérifiez que les scripts analytics se chargent (onglet Network)

### Les erreurs ne sont pas trackées

- Vérifiez la configuration Sentry
- Vérifiez que `NEXT_PUBLIC_SENTRY_DSN` est correct
- Vérifiez les logs Sentry pour voir si les erreurs arrivent

## Support

Pour toute question ou problème :
- Consultez la documentation Next.js : https://nextjs.org/docs
- Consultez la documentation de votre plateforme d'hébergement
- Vérifiez les logs de build et de déploiement

