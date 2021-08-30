<script lang="ts">
  export let justify = false;
</script>

<p
  class="pt-1 pb-1 lg:pt-2 lg:pb-2 md:text-18 xl:text-20 xl:leading-relaxed
    tracking-tighter md:tracking-tight"
  class:text-justify={justify}
>
  <slot />
</p>
