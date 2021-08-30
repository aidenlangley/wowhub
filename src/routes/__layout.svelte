<script lang="ts">
  import { assets } from '$app/paths';
  import '$css/layout.postcss';
  import '$css/tailwind.postcss';
  import Footer from '$lib/layout/Footer.svelte';
  import Header from '$lib/layout/header/Header.svelte';
  import Seo from '$lib/Seo.svelte';
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

<!-- `svelte:head` with `title` & `meta` tags. -->
<Seo />

<div class="root" class:dark>
  <Header />
  <main style="background-image: url({assets}/images/drawing.png)">
    <!-- Opacity provider `div`. -->
    <div class="padding">
      <slot />
    </div>
  </main>
  <Footer />
</div>

<style lang="postcss">
  div.root {
    min-width: 360px;
  }

  div.root > main {
    background-position: top;
    background-blend-mode: difference;
    @apply bg-white;

    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 1000ms;
  }

  div.root > main > div {
    @apply bg-white/80;
  }

  div.root.dark > main {
    background-blend-mode: hard-light;
    @apply bg-gray-900 text-white;
  }

  div.root.dark > main > div {
    @apply bg-black/70;
  }
</style>
