<script lang="ts">
  export let route: string;
  export let tooltip: string = null;
  export let active = false;
</script>

<!--
  @component
  `NavLink` simply takes a `route`, an optional `tooltip` and an optional
  `active` flag to apply css if the route is active. All logic is decided in the
  parent. The `slot` is intended to just take a `name` to be displayed.
-->
<!-- Tooltip will likely wrap this in the future. -->
<a
  sveltekit:prefetch
  href={route}
  aria-label={tooltip}
  class={active
    ? 'bg-white text-black ' +
      'tyd:text-20 text-24 sm:text-30 md:text-32 lg:text-34 xl:text-42 ' +
      'font-bold tracking-tighter pointer-events-none border-b-4 ' +
      'border-green-300'
    : 'hover:text-gray-300 focus:text-gray-300'}
>
  <slot />
</a>
