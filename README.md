# Getting Started

Almost all the instructions you need can be found here: https://kit.svelte.dev/.

## Dev

Super simple! Clone me, `npm install && npm run dev`. Very little else needs to be done before you can start writing, hands off compiling and previewing code changes.

Relative paths for images are tricky, so this is how they generally need to be handled:

```ts
import { assets } from '$app/paths';
export const src = `${assets}/path.png`;
```

### mdsvex

Svelte Markdown, allows writing .md files AND .svelte code in the same files. Neat, huh? Adder can be found [here](https://github.com/svelte-add/mdsvex).

#### 23/08/2021

I have installed but not used this at the time of writing.

### Tailwind CSS

Tailwind works wonderfully with Svelte, and the set-up is all handled by [this](https://github.com/svelte-add/tailwindcss) `svelte-adder`.

### VS Code

Recommended IDE. An extension can be found [here](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

### Builds

We are using a [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) and hosting with GitHub pages.

Hosting alongside this repo in the `docs/` folder, so `svelte.config.js` needs to reflect that.

Commands for building and deploying are in `package.json`.

```sh
npm run build && npm run deploy
```

The website is not hosted underneath the GitHub domain, it's hosted at https://wowhub.co.nz, so there is no need to change the base path in `svelte.config.js`. We will need a `CNAME` instead, pointing to the domain where the app will be hosted.

We do want to prevent Jekyll from doing its' thing however, so there must be a .nojekyll file in our `static/` directory.
