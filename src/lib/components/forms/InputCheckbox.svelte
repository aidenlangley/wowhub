<script lang="ts">
  export let label: string;
  export let group: string[];
  export let id = label.toLowerCase().split(' ').join('-');
  export let checked = false;
</script>

<div class="checkbox">
  <input type="checkbox" name={id} {id} bind:group bind:checked />
  <label for={id}>{label}</label>
</div>
