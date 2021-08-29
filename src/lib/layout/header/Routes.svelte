<script lang="ts">
  import { page } from '$app/stores';
  import Tooltip from '$lib/content/Tooltip.svelte';
  import { routes } from '$lib/store/routes';
</script>

<!--
  @component
  Oredered list of `svelte:prefetch` `<a>` elements. Could be arranged
  vertically too.
-->
<nav>
  <ol
    class="inline-grid grid-flow-col gap-x-1 ty:gap-x-2
      place-items-center text-center
      font-medium tracking-tighter
      tyd:text-base text-22 sm:text-26
      md:text-28 lg:text-30 xl:text-38
      transition duration-100"
  >
    {#each $routes as { name, path, translation } (path)}
      <li class="hover:text-green-300 focus:text-green-300 focus:underline">
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
  .active {
    @apply bg-white text-black font-bold tracking-tighter pointer-events-none;
    @apply tyd:text-18 text-24 sm:text-28 md:text-30 lg:text-32 xl:text-40;
    @apply tyd:border-b-2 border-b-4 border-green-300;
  }
</style>
