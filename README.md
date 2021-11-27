# [https://wowhub.co.nz](https://wowhub.co.nz)

[![Netlify Status](https://api.netlify.com/api/v1/badges/03a7a633-299a-4f48-bc4e-eb931a035e4f/deploy-status)](https://app.netlify.com/sites/wowhub/deploys)

Written in [Svelte](https://svelte.dev/) with [SvelteKit](https://kit.svelte.dev/).
A static site for hosting information relating to Whakaoranga Whanau Recovery
Hub, Freedom Whare & Whakamanamai Charitable Trust.

## Planting the seed of hope... Sharing gifts of recovery

Learn more about the Whakaoranga Whanau & He Waka Eke Noa Te Tai Tokerau
[here](https://wowhub.co.nz).

## Development

A `.nvmrc` file is included to guarantee parity when it comes to node. Install
[`nvm`](https://github.com/nvm-sh/nvm) and run `nvm install` in this directory.

Afterwards, it's a typical node project. Run `npm/yarn/pnpm install`, scripts
can be found in `package.json`. We've got a pretty typical setup, `npm run dev`
to start the dev server, the rest are related to CI/CD & deployment.

`DNS` is managed over at [Netlify](https://app.netlify.com/sites/wowhub/overview).
`git push` to any branch will trigger a deployment - currently `main` and
`develop`. This is useful for sharing previews of a change that's going to be
made by providing people with `https://develop.wowhub.co.nz`.

**Careful not to run the free build minutes dry, and be conservative when pushing
commits to remote.**

We are primarily hosting w/ Netlify to take advantage of their `Forms` feature,
and other projects of mine utilise [Identity](https://docs.netlify.com/visitor-access/identity/),
and [NetlifyCMS](https://www.netlifycms.org/), so it's beneficial to have them
all in the same space for sanity's sake.

## Contact

 - `me@aidenlangley.com`
 - `aiden@nedia.dev`
 - `aiden@wowhub.co.nz`
