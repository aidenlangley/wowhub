<script lang="ts">
  import Footer from '$comp/footer/Footer.svelte';
  import Header from '$comp/header/Header.svelte';
  import { state } from '$stores/dark';
  import SvelteSeo from 'svelte-seo';

  $: dark = $state.dark;
</script>

<!--
  @component
  Default layout.
  - Inject default Seo.
  - Adds root element for controlling `dark` class.
  - Injects `Header` & `Footer`.
  - Grabs background image from assets and layers another div below to provide
    opacity.
  - Background image scales at breakpoints to avoid large network payloads. No
    use loading w2560px background for a w360px display.
-->
<SvelteSeo
  title="Whakaoranga Whanau Recovery Hub"
  description={`Planting the seed of hope... Sharing gifts of recovery. Learn
    more about the Whakaoranga Whanau & He Waka Eke Noa Te Tai Tokerau here.`}
/>

<div class="root" class:dark>
  <Header />
  <main>
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
