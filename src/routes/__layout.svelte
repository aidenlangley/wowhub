<script lang="ts">
  import Footer from '$components/footer/Footer.svelte';
  import Header from '$components/header/Header.svelte';
  import drawing from '$images/drawing.png';
  import { state } from '$stores/dark';

  $: dark = $state.dark;
</script>

<!--
  @component
  Default layout.
  - Adds root element for controlling `dark` class.
  - Injects `Header` & `Footer`.
  - Grabs background image from assets and layers another div below to provide
    opacity.
-->
<div class="root" class:dark>
  <Header />
  <main style="background-image: url({drawing});">
    <!-- Primarily an opacity provider `div` -->
    <div class="opacity-provider">
      <slot />
    </div>
  </main>
  <Footer />
</div>

<style global>
  @import '../app.css';
  @import './__layout.css';
</style>
