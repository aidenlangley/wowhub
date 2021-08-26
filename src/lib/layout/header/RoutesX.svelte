<script lang="ts">
  import { page } from '$app/stores';
  import { routes } from '$lib/store/routes';
  import RouteLink from './RouteLink.svelte';

  export let highlightActive: boolean = true;
</script>

<!--
	@component
	`NavSpan` is intended to be inlined in headers and/or footers. `NavLink` are
	inlined using `flex`. Named `RouteX` as this is a horizontal component.
-->
<nav
  class="
    flex space-x-1 md:space-x-2
    items-center sm:justify-center
    tyd:text-base text-22 sm:text-28 md:text-30 lg:text-32 xl:text-40
    font-medium tracking-tighter
  "
>
  {#each $routes as { name, path, translation } (path)}
    <RouteLink
      {name}
      {path}
      tooltip={translation}
      active={highlightActive && $page.path === path}
    />
  {/each}
</nav>
