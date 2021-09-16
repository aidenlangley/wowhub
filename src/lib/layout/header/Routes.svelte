<script lang="ts">
  import { page } from '$app/stores';
  import Tooltip from '$components/Tooltip.svelte';
  import { routes } from '$store/routes';
</script>

<!--
  @component
  Oredered list of `svelte:prefetch` `<a>` elements. Could be arranged
  vertically too.
-->
<nav>
  <ol>
    {#each $routes as { name, path, translation } (path)}
      <li>
        <Tooltip text={translation}>
          <a
            href={path}
            aria-label="{name} ({translation})"
            class:active={$page.path === path}
            sveltekit:prefetch
          >
            {name}
          </a>
        </Tooltip>
      </li>
    {/each}
  </ol>
</nav>

<style lang="postcss">
  @import './routes.css';
</style>
