<script lang="ts">
  export let center = false;
</script>

<h3 class:sm:text-center={center}>
  <span>
    <slot />
  </span>
</h3>

<style>
  @import './heading3.css';
</style>
