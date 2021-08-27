<script lang="ts">
  import Footer from '$lib/layout/footer/Footer.svelte';
  import Header from '$lib/layout/header/Header.svelte';
  import Page from '$lib/layout/Page.svelte';
  import { state } from '$lib/store/dark';
  import Seo from '$lib/_Seo.svelte';
  import '../app.postcss';

  $: dark = $state.dark;
</script>

<!-- `svelte:head` with `title` & `meta` tags. -->
<Seo />

<!-- Content here. -->
<div id="dark" class:dark>
  <Header />
  <Page>
    <slot />
  </Page>
  <Footer />
</div>
