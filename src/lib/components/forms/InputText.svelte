<script lang="ts">
  export let label: string;
  export let text: string;
  export let placeholder = '';
  export let id = label.toLowerCase().split(' ').join('-');
</script>

<div class="input">
  <label for={id}>{label}</label>
  <input type="text" name={id} {id} bind:value={text} {placeholder} />
</div>

<style lang="postcss">
  .input {
    display: grid;
    gap: theme('gap.1');
  }

  .input label {
    padding: theme('padding.1');
    color: theme('colors.gray.900');

    @apply text-14;
  }

  :global(.dark) .input label {
    color: theme('colors.gray.100');
  }

  .input input {
    opacity: 0.8;
    background-color: theme('colors.gray.50');
    border-radius: theme('borderRadius.md');
    border-color: theme('colors.gray.300');
  }

  :global(.dark) .input input {
    background-color: theme('colors.gray.800');
    color: theme('colors.gray.100');
    border-color: theme('colors.gray.700');
  }
</style>
