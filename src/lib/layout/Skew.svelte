<script lang="ts">
  import type { Colour } from './Gradient.d';
  import type { Direction, Strength } from './Skew.d';

  export let direction: Direction;
  export let strength: Strength;
  export let colour: Colour;
</script>

<!--  -->
<div class="{direction} {strength} {colour}">
  <div class="column pad-y gaps-y">
    <slot />
  </div>
</div>
