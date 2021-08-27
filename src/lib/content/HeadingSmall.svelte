<script lang="ts" context="module">
  import Span from './Span.svelte';

  export const style = 'tracking-tight font-light text-20';
</script>

<h2 class={style}>
  <Span>
    <slot />
  </Span>
</h2>
