<script lang="ts">
  export let label: string;
  export let date = '';
  export let required = false;
  export let id = label.toLowerCase().split(' ').join('-');
</script>

<div class="input">
  <label for={id}>{label}</label>
  <input type="date" name={id} {id} bind:value={date} {required} />
</div>
