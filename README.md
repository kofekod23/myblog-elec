# Myvolt — Blog Rexel (maquette locale)

Maquette HTML statique du blog Myvolt (sous-domaine `myvolt.rexel.fr`), inspirée de la charte graphique Rexel et du media Courant Positif.

## Contenu du projet

```
myvolt-blog/
├── index.html                              # Page d'accueil
├── audience-reseaux.html                   # Audience Réseaux Rexel
├── audience-integrateurs.html              # Audience Intégrateurs
├── audience-clients-finaux.html            # Audience Clients finaux
├── profil-electricien.html                 # Exemple page profil métier
├── article-electricien-auto-entrepreneur.html  # Exemple page article
├── assets/
│   ├── css/styles.css                      # Styles globaux (variables CSS)
│   ├── js/main.js                          # Header + footer partagés
│   └── img/                                # Illustrations SVG
│       ├── audience-reseaux.svg            # Tableau électrique stylisé
│       ├── audience-integrateurs.svg       # Armoire industrielle
│       ├── audience-clients.svg            # Bâtiment tertiaire + IRVE
│       ├── article-normes.svg              # Document NF C 15-100
│       ├── article-pac.svg                 # Pompe à chaleur R290
│       ├── article-irve.svg                # Borne de recharge VE
│       └── hero-illustration.svg           # Illustration hero générique
├── .gitignore
└── README.md
```

## Charte graphique

### Couleurs

- **Bleu Rexel** : `#003D7C` (couleur de marque, audience Réseaux)
- **Bleu clair** : `#0066B3` (audience Intégrateurs)
- **Bleu pâle** : `#4A90D9` (audience Clients finaux)
- **Crème hero** : `#F5F0E8`
- **Noir** : `#1A1A1A`
- **Gris texte** : `#6B7280`

### Typographie

**Open Sans** (Google Fonts) en principale, avec pile de fallback :
```css
"Open Sans", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif
```

Open Sans est la police utilisée par Rexel sur ses interfaces. Elle est gratuite et chargée via Google Fonts dans chaque page (préconnect optimisé).

### Variables CSS

Toutes les valeurs de design sont déclarées dans `:root` au début de `assets/css/styles.css`. Modifier une variable impacte tout le site.

## Lancer le blog en local sur Mac

### Méthode 1 — Le plus simple (double-clic)

Double-clic sur `index.html` → ouvre dans Safari/Chrome.
Inconvénient : certains navigateurs bloquent l'injection JS du header/footer en mode `file://`. Si l'affichage est cassé, passe à la méthode 2.

### Méthode 2 — Recommandée (serveur Python intégré au Mac)

Python 3 est déjà installé sur macOS. Ouvre le Terminal (Cmd+Espace, "Terminal") :

```bash
cd ~/Downloads/myvolt-blog
python3 -m http.server 8000
```

Ouvre `http://localhost:8000` dans ton navigateur. Pour arrêter le serveur : `Ctrl+C`.

Si le port 8000 est occupé : `python3 -m http.server 8080` puis `http://localhost:8080`.

### Méthode 3 — Live Server VS Code

Avec VS Code et l'extension `Live Server` de Ritwick Dey : clic droit sur `index.html` → `Open with Live Server`. Avantage : reload automatique à chaque modification.

## Pages disponibles

| URL | Description |
|-----|-------------|
| `/` ou `/index.html` | Page d'accueil avec hero crème, audiences, articles à la une |
| `/audience-reseaux.html` | Page audience Réseaux Rexel + 3 profils métiers |
| `/audience-integrateurs.html` | Page audience Intégrateurs + 5 profils |
| `/audience-clients-finaux.html` | Page audience Clients finaux + 3 profils |
| `/profil-electricien.html` | Exemple page profil avec les 4 catégories |
| `/article-electricien-auto-entrepreneur.html` | Exemple page article complète |

## Modifier le contenu

### Ajouter une page

1. Copier un fichier existant (ex. `profil-electricien.html`)
2. Modifier le titre, le breadcrumb et le contenu
3. Le header et le footer s'injectent automatiquement via `assets/js/main.js`

### Modifier le header / footer

Éditer `assets/js/main.js`. Les contenus sont définis comme constantes en haut du fichier.

### Changer une couleur ou une police

Éditer `assets/css/styles.css`, section `:root` au début.

### Remplacer une image

Soit éditer le SVG existant dans `assets/img/`, soit déposer une nouvelle image (jpg/png) dans le dossier et changer le `src` dans le HTML.

## Workflow local

```bash
# Se placer dans le dossier du projet
cd ~/Documents/projets/myvolt-blog

# Lancer le serveur local
python3 -m http.server 8000
```

## Étapes suivantes

- [ ] Créer les pages profil pour les 10 profils manquants (uniquement Électricien fait pour l'instant)
- [ ] Remplacer les SVG d'illustration par les vraies photos quand elles seront prêtes
- [ ] Intégrer les articles rédigés au fur et à mesure
- [ ] Ajouter une recherche / filtre par catégorie
- [ ] Version mobile responsive (optionnel selon priorité)
- [ ] Sitemap.xml et robots.txt pour le SEO
- [ ] Connecter à un CMS si besoin (WordPress, Strapi, Decap CMS)

## Notes techniques

- Pas de framework, pas de build : HTML + CSS + JS vanilla. Compatible avec n'importe quel hébergement statique (GitHub Pages, Netlify, Vercel, OVH, etc.)
- Les SVG inline dans `assets/img/` sont éditables dans n'importe quel éditeur de texte. Pratique pour ajuster les couleurs ou les détails
- Open Sans est chargée depuis Google Fonts (CDN). Pour un hébergement 100% offline, télécharger les fichiers `.woff2` et héberger localement
- Le header et footer sont injectés en JS pour éviter la duplication, ce qui nécessite un serveur HTTP (méthode 2 ou 3 ci-dessus)
