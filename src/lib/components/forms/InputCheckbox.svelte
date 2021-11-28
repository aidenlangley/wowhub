<script lang="ts">
  export let label: string;
  export let checked = false;
  export let required = false;
  export let id = label.toLowerCase().split(' ').join('-');
</script>

<div class="checkbox">
  <input type="checkbox" name={id} {id} bind:checked />
  <label for={id}>{label}</label>
</div>
