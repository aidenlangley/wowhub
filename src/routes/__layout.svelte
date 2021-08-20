<script lang="ts">
  // CSS
  import '../app.postcss';

  // SEO
  import Seo from '$lib/Seo.svelte';

  // Dark mode
  import { state } from '$lib/store/dark';
  $: dark = $state.dark;

  // Componenets
  import Header from '$lib/layout/Header.svelte';

  // Transitions
  import { fly } from 'svelte/transition';
</script>

<!-- `svelte:head` with `title` & `meta` tags. -->
<Seo />
<!-- Content here. -->
<div class:dark>
  <Header />
  <slot />
</div>
