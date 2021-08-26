<script lang="ts">
  import Column from './Column.svelte';
  import type { Skew, SkewColour } from './Skewed.d';
  import { SkewColour as skewColour } from './Skewed.d';

  export let colour: SkewColour = skewColour.Default;
  export let gradient: string;
  export let skew: Skew;
</script>

<div
  class="
    {colour} {gradient} {skew.outer}
    border-t border-b border-gray-300 dark:border-gray-800
    shadow-xl
  "
>
  <Column>
    <div
      class="
        {skew.inner}  
        pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24
        pb-12 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24
        p-2 
      "
    >
      <slot />
    </div>
  </Column>
</div>
