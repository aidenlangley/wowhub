<script lang="ts">
  import Layout from '$lib/layout/Layout.svelte';
  import Seo from '$lib/Seo.svelte';
  import '../global.postcss';
  import '../tailwind.postcss';
</script>

<!-- `svelte:head` with `title` & `meta` tags. -->
<Seo />

<!-- Content here. -->
<Layout>
  <slot />
</Layout>
