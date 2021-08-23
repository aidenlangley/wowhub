<script lang="ts">
  // CSS
  import '../app.postcss';

  // SEO
  import Seo from '$lib/_Seo.svelte';

  // Dark mode
  import { state } from '$lib/store/dark';
  $: dark = $state.dark;

  // Componenets
  import Header from '$lib/layout/header/Header.svelte';
  import Footer from '$lib/layout/footer/Footer.svelte';
</script>

<!-- `svelte:head` with `title` & `meta` tags. -->
<Seo />
<!-- Content here. -->
<div class:dark>
  <Header />
  <slot />
  <Footer />
</div>
