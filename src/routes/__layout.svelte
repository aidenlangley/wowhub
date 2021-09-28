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

<style lang="postcss" global>
  @import '../app.css';

  .root main {
    background-image: url('../images/bg/drawing-1080p.webp');
    background-blend-mode: difference;
    background-color: theme('backgroundColor.white');
    background-position: top;
    transition: background-color 300ms;
  }

  .root main .opacity-provider {
    @apply bg-white/80;
  }

  .root main .opacity-provider > * {
    transition-duration: 500ms;
    transition-timing-function: theme('transitionTimingFunction.in-out');
  }

  .root.dark main {
    background-blend-mode: hard-light;
    background-color: theme('colors.gray.900');
  }

  .root.dark main .opacity-provider {
    @apply bg-black/70;
  }

  @media screen(lg) {
    .root main {
      background-image: url('../images/bg/drawing-1440p.webp');
    }
  }

  @media screen(wide) {
    .root main {
      background-image: url('../images/bg/drawing-2160p.webp');
    }
  }

  @media screen(xwide) {
    .root main {
      background-image: url('../images/bg/drawing.webp');
    }
  }
</style>
