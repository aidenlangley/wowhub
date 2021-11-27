<script lang="ts">
  export let label: string;
  export let options: string[];
  export let id = label.replace('?', '').toLowerCase().split(' ').join('-');
</script>

<div class="radio">
  <label for={id}>{label}</label>
  {#each options as option}
    <div class="option">
      <input
        type="radio"
        name={id}
        id={`${id}_${option}`}
        bind:value={option}
      />
      <label for={`${id}_${option}`}>{option}</label>
    </div>
  {/each}
</div>

<style lang="postcss">
  .radio {
    display: inline-grid;
    gap: theme('gap.2');
  }
</style>
