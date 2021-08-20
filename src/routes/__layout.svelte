<script>
	import '../app.postcss';
	import Seo from '$lib/Seo.svelte';
	import Header from '$lib/layout/header/Header.svelte';
</script>

<!-- `svelte:head` with `title` & `meta` tags. -->
<Seo />

<!-- Actual content below. -->
<Header />
<slot />
