<script lang="ts">
  import { assets } from '$app/paths';
  import Footer from '$lib/layout/Footer.svelte';
  import Header from '$lib/layout/header/Header.svelte';
  import Seo from '$lib/Seo.svelte';
  import { state } from '$lib/store/dark';
  import '../app.postcss';

  $: dark = $state.dark;
</script>

<!--
  @component
  Default layout.
  - Inject Seo component.
  - Adds root element for controlling `dark` class.
  - Injects `Header` & `Footer`.
  - Grabs background image from assets and layers another div below to provide
    opacity.
-->

<!-- `svelte:head` with `title` & `meta` tags. -->
<Seo />

<div class="root" class:dark>
  <Header />
  <main style="background-image: url({assets}/images/drawing.png);">
    <!-- Opacity provider `div`. -->
    <div class="padding">
      <slot />
    </div>
  </main>
  <Footer />
</div>

<style lang="postcss">
  :global(body) {
    min-width: 360px;
  }

  div.root > main {
    background-blend-mode: difference;
    background-color: theme('backgroundColor.white');

    /* Background */
    background-position: top;
    transition-duration: 1000ms;

    /* Animations */
    transition-property: background-color;
    transition-timing-function: theme('transitionTimingFunction.in-out');
  }

  div.root > main > div {
    @apply bg-white/80;
  }

  div.root.dark > main {
    background-blend-mode: hard-light;
    background-color: theme('colors.gray.900');
    color: theme('colors.white');
  }

  div.root.dark > main > div {
    @apply bg-black/70;
  }
</style>
