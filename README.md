<h1 align="center">
   <a href="https://anu-vue.netlify.app/" target="_blank" align="center">
      Anu
   </a>
</h1>

<p align="center"><b>DX focused utility based vue component library</b></p>

<p align="center">
   <a href="https://github.com/jd-solanki/anu/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/jd-solanki/anu" alt="license">
   </a>
   <a href="https://github.com/jd-solanki/anu/releases">
    <img src="https://img.shields.io/github/release/jd-solanki/anu.svg" alt="GitHub release">
  </a>
   <a href="https://twitter.com/me_jd_solanki" target="_blank">
      <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/me_jd_solanki">
   </a>
</p>

## Installation 🛠️

1. Add anu-vue and its supporting libraries

   ```shell
   # pnpm
   pnpm add anu-vue && pnpm add -D unocss @iconify-json/bx

   # yarn
   yarn add anu-vue && yarn add -D unocss @iconify-json/bx

   # npm
   npm install anu-vue && npm install -D unocss @iconify-json/bx
   ```

2. Add UnoCSS to vite.config.js

   ```js
   import Unocss from 'unocss/vite'

   export default {
     plugins: [
       Unocss(),
     ],
   }
   ```

3. Create UnoCSS Config file uno.config.js in the root of the project with the below content:

   ```ts
   import { presetCore, presetThemeDefault } from 'anu-vue'
   import {
     defineConfig,
     presetIcons,
     presetUno,
   } from 'unocss'

   export default defineConfig({
     presets: [
       presetUno(),
       presetIcons({
         scale: 1.2,
         extraProperties: {
           'height': '1.5em',
           'flex-shrink': '0',
         },
       }),

       // anu-vue presets
       presetCore(),
       presetThemeDefault(),
     ],
     include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
   })
   ```
   
   <details>
   <summary>Icon height alignment</summary>
   
   <br>

   Update presentIcon's `height` property according line height in your app using em unit.

   e.g. For VitePress line height of paragraph is 24px. Hence, we have height of 1.5em in docs.

   </details>

4. Update your main.js file like below

   ```ts
   import { createApp } from 'vue'
   import { anu } from 'anu-vue'
   import App from './App.vue'

   // UnoCSS import
   import 'uno.css'

   // import styles
   import 'anu-vue/dist/style.css'

   // Using `app.use(anu)` will register all the components globally
   createApp(App)
     .use(anu)
     .mount('#app')
   ```
   
It's done! 🥳

Now, Just refer to the component in your vue files:

```vue
<template>
  <ABtn>Button</ABtn>
</template>
```

---

Probably you might not want to globally register the components. You can also follow below approaches:

### Tree shaking

You can also follow À la carte fashion if you don't want to register all the components globally

1. Remove anu plugin use in `main.js` file.

   ```diff
   -  import { anu } from 'anu-vue'

     createApp(App)
   -   .use(anu)
       .mount('#app')
   ```

2. Now, import components individually from anu-vue

   ```vue
   <script setup>
   import { ABtn } from 'anu-vue'
   </script>

   <template>
     <ABtn>Primary</ABtn>
   </template>
   ```

### Auto importing components

[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) lets you auto import components on demand. With this, you can omit import statement and still get the benefits of tree shaking.

1. Remove anu plugin use in `main.js` file if you haven't

   ```diff
   -  import { anu } from 'anu-vue'

     createApp(App)
   -   .use(anu)
       .mount('#app')
   ```

2. Install unplugin-vue-components:

   ```shell
   # pnpm
   pnpm add -D unplugin-vue-components

   # yarn
   pnpm add -D unplugin-vue-components

   # npm
   npm i -D unplugin-vue-components
   ```

3. Add following in `vite.config.js`:

   ```js
   // other imports
   import Components from 'unplugin-vue-components/vite'

   export default defineConfig({
     plugins: [
       // other plugins
       Components({
         resolvers: [
           {
             type: 'component',
             resolve: name => {
               if (name.match(/^A[A-Z]/))
                 return { name, from: 'anu-vue' }
             },
           }
         ]
       }),
     ],

     // other config
   })
   ```
   
4. Now, just use components the component and it will be auto imported on demand 🤯

   ```vue
   <template>
     <ABtn>Primary</ABtn>
   </template>
   ```

## Future 🔮

I will continue to develop this project if I get a positive response. I will introduce more components and amazing things like configurable array if I will be able to spend more time on OSS development.

When I will have:

### At least one sponsor

- [ ] I will start sponsoring one of the contributors of UnoCSS/VueUse.

### 5 non-doc contribution

- [ ] Write contribution guide

### Github stars

- [ ] 100+
  - [ ] More components like avatar, progressbar
- [ ] 500+
  - [ ] Write tests using [vitest](https://vitest.dev/)

Help me do full-time Open source by sponsoring me.

If you like this lib do give it a star or spread some words on Twitter.

Thanks 🙏

## Credits

- [UnoCSS](https://github.com/unocss/unocss) - Anu depends on it
- [VueUse](https://github.com/vueuse/vueuse) - Anu depends on it
- [Floating UI](https://github.com/floating-ui/floating-ui) - Anu depends on it
- [Quasar](https://github.com/quasarframework/quasar) - Inspiration
- [Vuetify](https://github.com/vuetifyjs/vuetify) - Inspiration
- [Bootstrap](https://github.com/twbs/bootstrap) - Inspiration
