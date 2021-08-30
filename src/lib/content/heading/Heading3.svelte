<script lang="ts">
  export let center = false;
</script>

<h3
  class="font-light tracking-tight text-18 sm:text-22 pb-2 pt-2"
  class:sm:text-center={center}
>
  <slot />
</h3>
