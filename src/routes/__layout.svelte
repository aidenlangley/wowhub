<script lang="ts">
  import { assets } from '$app/paths';
  import Footer from '$lib/layout/footer/Footer.svelte';
  import Header from '$layout/header/Header.svelte';
  import Seo from '$lib/Seo.svelte';
  import { state } from '$store/dark';

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

<style lang="postcss" global>
  @import '../app.postcss';

  body {
    min-width: 360px;

    @apply transform-gpu;
  }

  div.root {
    & > main {
      background-blend-mode: difference;
      background-color: theme('backgroundColor.white');
      background-position: top;
      transition-duration: 1000ms;
      transition-property: background-color;
      transition-timing-function: theme('transitionTimingFunction.in-out');

      & > div {
        @apply bg-white/80;
      }
    }

    &.dark > main {
      background-blend-mode: hard-light;
      background-color: theme('colors.gray.900');
      color: theme('colors.white');

      & > div {
        @apply bg-black/70;
      }
    }
  }
</style>
