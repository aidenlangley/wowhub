<script lang="ts">
  export let underline = false;
</script>

<span class="bg-white/50 dark:bg-black/50" class:under-line={underline}>
  <slot />
</span>

<style lang="postcss">
  .under-line {
    @apply border-b-4 border-green-300;
  }
</style>
