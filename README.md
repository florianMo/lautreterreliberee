# L'autre Terre Libérée

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

```shell
sudo su lautreterreliberee
cd /var/www/lautreterreliberee
git pull
npm run build
pm2 restart lautreterreliberee
```

Reset PM2

```shell
pm2 start --name lautreterreliberee ./build/index.js 

## Restart server

 ```shell
pm2 list
# get id of app
pm2 restart [id]
```

## Editing data.js

HTML markup can be used in data.js :

- Use `’` for quotes
- Use `<i>my italic text</i>` for *italic*
- Use `<strong>my bold text</strong>` for **bold**
- Use `<a href="insert full url" target="_blank">insert link text</a>` for [links](https://lautreterreliberee.fr)