<script lang="ts">
  export let route: string;
  export let tooltip: string = null;
  export let active = false;
</script>

<!--
  @component
  `NavLink` simply takes a `route`, an optional `tooltip` and an optional
  `activeClass` to apply css if the route is active. All logic is decided in the
  parent. The `slot` is intended to just take a `name` to be displayed.
-->
<!-- Tooltip will likely wrap this in the future. -->
<a
  sveltekit:prefetch
  href={route}
  aria-label={tooltip}
  class={active
    ? 'bg-white text-black text-20 sm:text-22 md:text-24 lg:text-26' +
      'xl:text-28 font-bold tracking-tighter pointer-events-none'
    : 'hover:text-gray-300 focus:text-gray-300'}
>
  <slot />
</a>
