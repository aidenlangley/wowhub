<script lang="ts">
  import type { GradientColour } from '../types.d';
  import type { SkewDirection, SkewStrength } from './types.d';

  export let direction: SkewDirection;
  export let strength: SkewStrength;
  export let colour: GradientColour;
</script>

<!--  -->
<div class="{direction} {strength} {colour}">
  <div class="column pad-y gaps-y">
    <slot />
  </div>
</div>
