<script lang="ts">
  export let center = false;
</script>

<h4 class:sm:text-center={center}>
  <span>
    <slot />
  </span>
</h4>

<style>
  @import './heading4.css';
</style>
