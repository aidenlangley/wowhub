<script lang="ts">
	import { seo } from '$lib/store/seo';
</script>

<!--
	@component
	`Seo` component for routes. Set values via `$lib/store/seo`.
	
	- Usage:
	```tsx
	<script>
		import { seo } from "$lib/store.js"

		$seo = {
			title: 'Home',
			description: 'This is a homepage',
			robots: 'index, follow',
		}
	</script>
	```
-->
<svelte:head>
	<title>{$seo.title}</title>
	<meta name="description" content={$seo.description} />
	<meta name="robots" content={$seo.robots} />
</svelte:head>
