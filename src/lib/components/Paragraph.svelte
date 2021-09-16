<script lang="ts">
  export let justify = false;
</script>

<p class:text-justify={justify}>
  <slot />
</p>

<style lang="postcss">
  @import './paragraph.css';
</style>
