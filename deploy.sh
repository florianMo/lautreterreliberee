#!/usr/bin/env bash
# Met à jour et redémarre le site.
# À lancer avec l'utilisateur qui fait tourner l'application (voir DEPLOY.md).
set -euo pipefail

cd "$(dirname "$0")"

git pull --ff-only
npm ci
npm run build
pm2 restart "${APP_NAME:-lautreterreliberee}"
