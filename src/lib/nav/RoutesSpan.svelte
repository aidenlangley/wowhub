<script lang="ts">
  import { page } from '$app/stores';
  import { routes } from '$lib/store/routes';
  import RouteLink from './RouteLink.svelte';

  export let highlightActive: boolean = true;
</script>

<!--
	@component
	`NavSpan` is intended to be inlined in headers and/or footers. `NavLink` are
	inlined using `flex`.
-->
<span
  class="
    text-white
    space-x-1 sm:space-x-2 xl:space-x-3
    tyd:text-16 text-18 sm:text-20 md:text-22 lg:text-24 xl:text-26
    font-medium tracking-tight
  "
>
  {#each $routes as route (route.path)}
    <RouteLink
      route={route.path}
      tooltip={route.translation}
      active={highlightActive && $page.path == route.path}
    >
      {route.name}
    </RouteLink>
  {/each}
</span>
