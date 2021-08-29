<script lang="ts">
  import { assets } from '$app/paths';
  import Footer from '$lib/layout/footer/Footer.svelte';
  import Header from '$lib/layout/header/Header.svelte';
  import { state } from '$lib/store/dark';

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
<div id="root" class:dark>
  <Header />
  <main
    class="bg-top bg-white bg-blend-difference
      dark:bg-gray-900 dark:bg-blend-hard-light dark:text-white
      transition-colors duration-500"
    style="background-image: url({assets}/images/drawing.png)"
  >
    <div
      class="bg-white/80 dark:bg-black/70
        grid gap-4 sm:gap-8 md:gap-16
        pt-2 ty:pt-4 sm:pt-8 md:pt-16
        pb-2 ty:pb-4 sm:pb-8 md:pb-16"
    >
      <slot />
    </div>
  </main>
  <Footer />
</div>

<style lang="postcss">
  #root {
    min-width: 360px;
  }
</style>
