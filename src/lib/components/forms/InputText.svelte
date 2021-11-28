<script lang="ts">
  export let label: string;
  export let text: string;
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
    type="text"
    name={id}
    {id}
    bind:value={text}
    {placeholder}
    {required}
  />
</div>
