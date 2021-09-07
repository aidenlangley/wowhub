<script lang="ts" context="module">
  import type { Article } from '$components/articles/types.d'
  import IndexBlurb from '$components/index/IndexBlurb.svelte'
  import IndexLatestNews from '$components/index/IndexLatestNews.svelte'
  import IndexQuickLinks from '$components/index/IndexQuickLinks.svelte'
  import IndexSerenityPrayer from '$components/index/IndexSerenityPrayer.svelte'
  import IndexWhakatauki from '$components/index/IndexWhakatauki.svelte'
  import IndexServices from '$components/index/services/IndexServices.svelte'
  import Banner from '$media/Banner.svelte'
  import { state } from '$store/dark'
  import { seo } from '$store/seo'
  import { fade } from 'svelte/transition'
  import { loadNews as load } from './news.svelte'

  export { load }
</script>

<script lang="ts">
  $seo = {
    title: 'Whakaoranga Whanau Recovery Hub',
    description:
      'He Waka Eke Noa te Tai Tokerau. Learn about our community AOD & recovery services',
    robots: 'none',
  }

  export let news: Article[]
</script>

<!--
  @component
  Landing page. Has to catch the users attention and give them information as
  quickly as possible.
-->
<div class="root column gaps-y sm">
  <section id="banner" class="pad-y">
    <Banner white={$state.dark} />
  </section>

  <!-- Visual break after banner via dotted border. -->
  <section id="quick-links">
    <IndexQuickLinks />
  </section>

  <section id="video" class="video">
    <iframe
      title="Beating Addiction Together"
      src="https://tehiku.nz/embed/11829"
      allowfullscreen
    />
  </section>

  {#if news}
    <section id="news" in:fade>
      <IndexLatestNews {news} />
    </section>
  {/if}
</div>

<section id="blurb" class="pad-y pad-x">
  <IndexBlurb />
</section>

<section id="serenity-prayer" class="column" aria-hidden="true">
  <IndexSerenityPrayer />
</section>

<section id="whakatauki" class="pad-y pad-x">
  <IndexWhakatauki />
</section>

<section id="services" aria-hidden="true">
  <IndexServices />
</section>

<style lang="postcss">
  section.video {
    place-self: center;

    & > iframe {
      border-color: theme('colors.gray.300');
      border-radius: theme('borderRadius.lg');
      border-width: theme('borderWidth.DEFAULT');
      box-shadow: theme('boxShadow.lg');

      @nest :global(.dark) & {
        border-color: theme('colors.gray.700');
      }

      width: 20rem;
      height: 11.25rem;

      @media screen(sm) {
        width: 40rem;
        height: 22.5rem;
      }

      @media screen(lg) {
        width: 60rem;
        height: 33.75rem;
      }
    }
  }
</style>
