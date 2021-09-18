<script lang="ts">
  import Translate from '$layout/translate/Translate.svelte';
  import {
    BackgroundColour,
    TranslateDirection,
  } from '$layout/translate/types.d';
  import { GradientColour } from '$layout/types.d';

  export let direction: TranslateDirection = TranslateDirection.BottomRight;
  export let bg: BackgroundColour = BackgroundColour.Green;
  export let fg: GradientColour = GradientColour.Green;
</script>

<Translate {direction} colour={bg}>
  <h1 class={fg}>
    <slot />
  </h1>
</Translate>

<style>
  @import './heading.css';
</style>
