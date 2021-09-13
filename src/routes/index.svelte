<script lang="ts" context="module">
  import type { Article } from '$components/articles/types.d';
  import IndexBlurb from '$components/index/IndexBlurb.svelte';
  import IndexLatestNews from '$components/index/IndexLatestNews.svelte';
  import IndexQuickLinks from '$components/index/IndexQuickLinks.svelte';
  import IndexSerenityPrayer from '$components/index/IndexSerenityPrayer.svelte';
  import IndexWhakatauki from '$components/index/IndexWhakatauki.svelte';
  import Banner from '$media/Banner.svelte';
  import { state } from '$store/dark';
  import { seo } from '$store/seo';
  import { fade } from 'svelte/transition';
  import { loadNews as load } from './news.svelte';

  export { load };
</script>

<script lang="ts">
  $seo = {
    title: 'Whakaoranga Whanau Recovery Hub',
    description:
      'He Waka Eke Noa te Tai Tokerau. Learn about our community AOD & recovery services',
    robots: 'none',
  };

  export let news: Article[];
</script>

<!--
  @component
  Landing page. Has to catch the users attention and give them information as
  quickly as possible.
-->
<div class="column gaps-y">
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
  <!-- <IndexServices /> -->
</section>

<style lang="postcss">
  .video {
    /* Place & size */
    place-self: center;
    height: max-content;
    width: 100%;
    aspect-ratio: 16 / 9;

    /* Styles */
    border-radius: theme('borderRadius.lg');
    border-width: theme('borderWidth.2');
    border-color: theme('colors.green.300');
    box-shadow: theme('boxShadow.lg');
  }

  :global(.dark) .video {
    border-color: theme('colors.green.900');
  }

  .video iframe {
    /* Hides the original square border */
    border-radius: theme('borderRadius.md');
    width: 100%;
    aspect-ratio: 16 / 9;
  }
</style>
