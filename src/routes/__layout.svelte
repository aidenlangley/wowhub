<script lang="ts">
  import { assets } from '$app/paths';
  import Header from '$layout/header/Header.svelte';
  import Footer from '$lib/layout/footer/Footer.svelte';
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
    <!-- Primarily an opacity provider `div` -->
    <div class="opacity-provider pad-y gaps-y">
      <slot />
    </div>
  </main>
  <Footer />
</div>

<style lang="postcss" global>
  @import '../app.css';
  @import './__layout.css';
</style>
