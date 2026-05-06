# myblog-elec — Myvolt blog (Rexel)

Blog éditorial professionnel pour Rexel, inspiré de entreprise.rexel.fr/courant-positif/.
Stack : HTML/CSS/JS vanilla, sans framework ni bundler.

## DÉMARRAGE DE SESSION

1. **Mémoire claude-mem** — appeler `mcp__plugin_claude-mem_mcp-search__smart_search` avec la requête : `"myblog-elec myvolt blog Rexel electricien article"`
2. Lire `tasks/todo.md` — état des tâches en cours
3. Lire `tasks/lessons.md` — leçons apprises, appliquer avant de toucher quoi que ce soit
4. Optionnel : `/sessions list` pour voir les sessions récentes

## ARCHITECTURE

```
myblog-elec/
├── index.html                              # Homepage
├── profil-electricien.html                 # Hub Électriciens
├── audience-reseaux.html                   # Hub Plombiers-chauffagistes
├── audience-integrateurs.html              # Hub Intégrateurs
├── audience-clients-finaux.html            # Hub Vos partenaires
├── article-electricien-auto-entrepreneur.html
└── assets/
    ├── css/styles.css                      # Design system v2 (Rexel)
    ├── js/main.js                          # Header/footer injection, TOC, progress bar
    └── img/*.svg                           # Illustrations cartes
```

### Navigation racine (data-nav)
| Page | data-nav | Nav label |
|------|----------|-----------|
| profil-electricien.html | electriciens | Électriciens |
| audience-reseaux.html | plombiers | Plombiers-chauffagistes |
| audience-integrateurs.html | integrateurs | Intégrateurs |
| audience-clients-finaux.html | partenaires | Vos partenaires |

## CHARTE GRAPHIQUE

- **Couleurs** : `--rexel-navy: #002855`, `--rexel-blue: #003D7C`, accent `#F5A623`
- **Audiences** : electriciens `#002855`, plombiers `#006B5E`, integrateurs `#5B4A99`, partenaires `#4A90D9`
- **Polices** : Inter (préféré) + Open Sans, fallback système
- **Logo** : SVG bolt inline dans main.js

## RÈGLES TECHNIQUES

- Pas de framework JS, pas de bundler — HTML/CSS/JS vanilla uniquement
- Header et footer injectés par JS dans `#site-header` / `#site-footer`
- TOC générée automatiquement depuis les `<h2>` via IntersectionObserver
- Barre de lecture : `#reading-progress` sticky (3px, gradient bleu)
- Liens internes : fichiers `.html` racine (pas de routing)
- Branche de travail : `feat/redesign-v2` (hook bloque l'écriture sur main)

## ROUTING MODÈLES (économie de tokens)

| Tâche | Modèle |
|-------|--------|
| Édition CSS/HTML mécanique | haiku |
| Ajout d'article, refonte page | sonnet |
| Décision archi, nouveau composant | opus |

## SKILLS À UTILISER

- `superpowers:writing-plans` — avant toute tâche multi-étapes
- `superpowers:executing-plans` — pour exécuter un plan existant
- `superpowers:brainstorming` — pour nouvelles sections ou features
- `context7` — docs de bibliothèques si besoin
- `model-route` — choisir le bon modèle avant d'implémenter

## SERVEUR LOCAL

```bash
cd "/Users/julien/Library/Mobile Documents/.Trash/myvolt-blog 18.24.53/myblog-elec"
python3 -m http.server 8765
# → http://localhost:8765/
```

## GIT

```bash
# Branche active
git checkout feat/redesign-v2

# Commit type : feat/fix/chore/docs(scope): message
# Auteur : kofekod23 — pas de mention IA
```
