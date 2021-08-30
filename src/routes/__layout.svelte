<script lang="ts">
  import { assets } from '$app/paths';
  import Footer from '$lib/layout/footer/Footer.svelte';
  import Header from '$lib/layout/header/Header.svelte';
  import Seo from '$lib/Seo.svelte';
  import { state } from '$lib/store/dark';
  import '../layout.postcss';
  import '../tailwind.postcss';

  $: dark = $state.dark;
</script>

<!--
  @component
  Default layout.
  - Adds root element for controlling `dark` class.
  - Injects `Header` & `Footer`.
  - Grabs background image from assets and layers another div below to achieve
    opacity.
  - Applies `grid`, top & bottom padding and defines gaps between grid items.
  - Defines some `global` CSS styling.
-->

<!-- `svelte:head` with `title` & `meta` tags. -->
<Seo />

<div id="root" class:dark>
  <Header />
  <main style="background-image: url({assets}/images/drawing.png)">
    <div class="bg-opaque padding">
      <slot />
    </div>
  </main>
  <Footer />
</div>

<style lang="postcss">
  #root {
    min-width: 360px;
  }

  main {
    @apply bg-top bg-white bg-blend-difference duration-500;
  }

  .dark main {
    @apply bg-gray-900 bg-blend-hard-light text-white;
  }

  .bg-opaque {
    @apply bg-white/80 dark:bg-black/70;
  }
</style>
