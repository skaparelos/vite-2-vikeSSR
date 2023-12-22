
starting from vite, adding Vike, and deploying to vercel using `pnpm run build` & `vercel deploy --prebuilt`
# Step 1: Init Vite
* $ pnpm create vite
* $ pnpm i


# Step 2: Vite to vike SSR

## vike.dev/vercel
* pnpm i vike
* pnpm i @vercel/node
* add vercel.json
* add api/ssr.js


## vike.dev/add from 3 & 4 (React examples)

* add pages/ -> https://github.com/vikejs/vike/tree/main/boilerplates/boilerplate-react/renderer/
* add renderer/ -> https://github.com/vikejs/vike/blob/main/boilerplates/boilerplate-react/pages/index/+Page.jsx


## resolve alias
* pnpm i path
* add resolve in vite.config.js
* pnpm i prop-types
* enable ssr({ prerender: true })


## Step 3: Vercel plugin for `pnpm run build`
* pnpm i @vite-plugin-vercel/vike
* pnpm i vite-plugin-vercel
* rename api/ to _api/
* pnpm run build
* vercel deploy --prebuilt
? What's your Build Command? pnpm run build
? What's your Development Command? pnpm run dev
? What's your Output Directory? dist/client