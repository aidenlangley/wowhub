<script lang="ts">
  export let label: string;
  export let text: string;
  export let placeholder: string = '';
  export let id = label.toLowerCase().split(' ').join('-');
</script>

<section>
  <label for={id}>{label}</label>
  <input type="text" name={id} {id} bind:value={text} {placeholder} />
</section>

<style lang="postcss">
  @import './form.css';
</style>
