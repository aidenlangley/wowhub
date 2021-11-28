<script lang="ts">
  export let label: string;
  export let number: number;
  export let placeholder = '';
  export let hideLabel = false;
  export let required = false;
  export let id = label.toLowerCase().split(' ').join('-');
</script>

<div class="input">
  {#if !hideLabel}
    <label for={id}>{label}</label>
  {/if}
  <input
    type="number"
    name={id}
    {id}
    bind:value={number}
    {placeholder}
    {required}
  />
</div>
