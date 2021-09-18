<script lang="ts">
  import type { GradientColour } from '../types.d';
  import type { SkewDirection } from './types.d';

  export let id: string;
  export let direction: SkewDirection;
  export let colour: GradientColour;
</script>

<!--
  @component
  Defines a grid, the `Skewed` div will be placed behind the content `slot`
  via `z-index`.
-->
<div id="{id}-skewed-bg" class="skewed-grid">
  <div class="skewed-bg {direction} {colour}" />
  <div class="content column">
    <slot />
  </div>
</div>

<style>
  @import './skew.css';
</style>
