<script lang="ts">
  import { seo } from '$lib/store/seo';
</script>

<!--
	@component
	`Seo` component for routes. Set values via `$lib/store/seo`.

	```tsx
	<script lang="ts">
		import { seo } from "$lib/store.js"

		$seo = {
			title: 'Home',
			description: 'This is a homepage',
		}
	</script>
	```
-->
<svelte:head>
  <title>{$seo.title}</title>
  <meta name="description" content={$seo.description} />
</svelte:head>
