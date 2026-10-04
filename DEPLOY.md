# Déploiement

Le site est une application SvelteKit construite avec `@sveltejs/adapter-node` : après `npm run build`, elle se lance avec `node build/index.js`. En production, on place généralement devant elle un reverse proxy HTTPS (Apache ou nginx).

> Ce dépôt est public : n'y consigne ni identifiants, ni adresses ou noms de machines, ni détails d'infrastructure. Garde ces informations dans un endroit privé.

## Prérequis

- Node.js 20 ou plus récent (testé avec Node 22 et 24), npm
- Un gestionnaire de processus, par exemple [PM2](https://pm2.keymetrics.io/)
- Un reverse proxy HTTPS

Utilise un utilisateur système dédié, non privilégié, pour faire tourner l'application, et place les sources hors du dossier servi par défaut par le serveur web.

## Variables d'environnement

| Variable | Rôle | Valeur conseillée |
|---|---|---|
| `HOST` | Interface d'écoute | `127.0.0.1` (le reverse proxy est sur la même machine) |
| `PORT` | Port d'écoute | `3000` |
| `NODE_ENV` | Mode | `production` |

Le site n'a pas de formulaire ni de secret : aucun fichier `.env` n'est nécessaire.

## Installer et lancer

```bash
git clone <adresse du dépôt> <dossier>
cd <dossier>
npm ci
npm run build
```

Avec PM2, un fichier `ecosystem.config.cjs` à la racine :

```js
module.exports = {
  apps: [{
    name: 'lautreterreliberee',
    script: 'build/index.js',
    cwd: '/chemin/vers/le/dossier',
    env: {
      NODE_ENV: 'production',
      HOST: '127.0.0.1',
      PORT: 3000
    }
  }]
}
```

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup systemd -u <utilisateur> --hp <home de l'utilisateur>   # puis exécuter en root la commande affichée
```

Vérification locale : `curl -I http://127.0.0.1:3000/` doit répondre `200`.

## Reverse proxy (exemple Apache)

Modules nécessaires : `proxy`, `proxy_http`, `ssl`, `rewrite`, `headers`.

```apache
<VirtualHost *:443>
  ServerName example.org

  ProxyPreserveHost On
  RequestHeader set X-Forwarded-Proto "https"
  ProxyPass / http://127.0.0.1:3000/
  ProxyPassReverse / http://127.0.0.1:3000/

  # certificat HTTPS (par exemple Let's Encrypt avec certbot)
  SSLCertificateFile    /chemin/vers/fullchain.pem
  SSLCertificateKeyFile /chemin/vers/privkey.pem
</VirtualHost>
```

Ajoute un vhost sur le port 80 qui redirige vers HTTPS. Active le vhost HTTPS seulement après l'obtention du certificat.

## Mettre à jour le site

Depuis la racine du dépôt, avec l'utilisateur qui fait tourner l'application :

```bash
./deploy.sh
```

Le script exécute `git pull --ff-only`, `npm ci`, `npm run build`, puis `pm2 restart` (le nom de l'application PM2 est `lautreterreliberee` ; change-le avec la variable `APP_NAME` si besoin).

`npm ci` est indispensable à chaque mise à jour : les dépendances d'exécution (`svelte-awesome`) sont lues depuis `node_modules`, et le build a besoin des dépendances de développement. Une courte interruption est possible pendant l'installation.

Depuis un compte administrateur, on peut l'appeler ainsi :

```bash
sudo -u <utilisateur> -H /chemin/vers/le/dossier/deploy.sh
```

## Retour arrière

```bash
git log --oneline -5                  # repérer le commit à restaurer
git checkout <commit>
npm ci && npm run build && pm2 restart lautreterreliberee
```
