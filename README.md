# Step 1
$ pnpm create vite
$ pnpm i


# Step 2

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