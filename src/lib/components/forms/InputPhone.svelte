<script lang="ts">
  export let label: string;
  export let number: string;
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
    type="tel"
    name={id}
    {id}
    bind:value={number}
    {placeholder}
    {required}
  />
</div>
