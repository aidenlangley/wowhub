<script lang="ts">
  export let to: string;
</script>

<a href={to} target="_blank" rel="noopener">
  <slot />
</a>
