# L'autre Terre Libérée

Site de l'association « L'autre terre libérée » (Luynes) : programme des événements, balade sonore à la rencontre de Louis Rimbault, rucher école, bibliographie.

Construit avec SvelteKit (Svelte 4), Vite, Tailwind CSS et Sass. Le site est servi par Node grâce à `@sveltejs/adapter-node`.

## Développer

Prérequis : Node.js 20 ou plus récent (testé avec Node 22 et 24).

```bash
npm ci
npm run dev                # serveur de développement
npm run dev -- --open      # idem, et ouvre un onglet
```

Le serveur de développement est réservé à la machine locale : ne l'expose pas sur Internet.

## Vérifier et construire

```bash
npm run check              # types et accessibilité (svelte-check)
npm run build              # version de production, générée dans build/
npm run preview            # prévisualiser le build
```

Pour lancer le build tel qu'il tourne en production :

```bash
HOST=127.0.0.1 PORT=3000 node build/index.js
```

Le déploiement sur un serveur est décrit dans [DEPLOY.md](DEPLOY.md).

## Organisation du dépôt

| Chemin | Contenu |
|---|---|
| `src/routes/(app)/` | Les pages du site (accueil, association, balade sonore, rucher, bibliographie, mentions légales…) |
| `src/routes/(app)/data.ts` | Les textes des 8 ardoises de la balade sonore |
| `src/lib/components/` | Composants Svelte réutilisables |
| `src/lib/images/` | Images et PDF importés dans les pages (renommés avec un hash au build) |
| `static/` | Fichiers servis tels quels : audio (`static/audio/`), favicons, images de la bibliographie |

## Modifier le contenu

### Événements (page d'accueil)

Les événements sont écrits directement en HTML dans `src/routes/(app)/+page.svelte`, du plus récent au plus ancien. Les PDF et les affiches se placent dans `src/lib/images/` et s'importent en tête du fichier.

### Balade sonore

Les textes des ardoises sont dans `src/routes/(app)/data.ts` ; l'audio de l'ardoise `n` est le fichier `static/audio/n.mp3`.

Du balisage HTML est accepté dans les textes de `data.ts` :

- Utiliser `’` (apostrophe typographique) pour les apostrophes.
- `<i>mon texte en italique</i>` pour l'*italique*.
- `<strong>mon texte en gras</strong>` pour le **gras**.
- `<a href="adresse complète" target="_blank" rel="noopener noreferrer">texte du lien</a>` pour un [lien](https://lautreterreliberee.fr).
