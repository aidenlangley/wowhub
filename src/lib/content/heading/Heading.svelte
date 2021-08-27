<script lang="ts" context="module">
  import { bgStyle } from '../Span.svelte';

  export const style =
    'font-bold font-serif tracking-tighter text-shadow text-28 md:text-42 lg:text-64';
</script>

<h1 class={style}>
  <span class="{bgStyle} border-b-4 border-green-300">
    <slot />
  </span>
</h1>
