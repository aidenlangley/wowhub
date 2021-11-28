<script lang="ts">
  export let label: string;
  export let options: string[];
  export let selected = options[0];
  export let required = false;
  export let id = label.toLowerCase().split(' ').join('-');
</script>

<div class="input">
  <label for={id}>{label}</label>
  <select name={id} {id} bind:value={selected} {required}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>
