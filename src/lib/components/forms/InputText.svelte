<script lang="ts">
  export let label: string;
  export let text: string;
  export let id = label.toLowerCase().split(' ').join('-');
</script>

<label for={id}>{label}</label>
<input type="text" name={id} {id} />

<style lang="postcss">
  @import './form.css';
</style>
