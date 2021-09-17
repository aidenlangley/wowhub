<script lang="ts">
  import { browser } from '$app/env';
  import { prefetch } from '$app/navigation';

  export let href: string;
  export let internal = false;
  export let label: string = null;
  export let button = false;
  export let colour: string = null;

  if (internal && browser) {
    prefetch(href);
  }

  const target = !internal ? '_blank' : null;
  const rel = `noopener ${!internal ? 'external' : ''}`;

  let classes = '';
  classes += button ? 'button' : 'link';
  classes += button && colour ? ` ${colour}` : '';
</script>

<!--
  @component
  `Link` for internal and external links, with uniform styles. Can be styled as
  a button also. `Button` styles are exposed by `Button.svelte` so that they are
  always identical.
-->
<a {href} {target} {rel} aria-label={label} class={classes}>
  <slot>
    {href}
  </slot>
</a>

<style lang="postcss">
  @import './link.css';
</style>
