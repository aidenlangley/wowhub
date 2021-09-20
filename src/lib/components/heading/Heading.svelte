<script lang="ts">
  import Translate from '$layout/translate/Translate.svelte';
  import type {
    BackgroundColour,
    TranslateDirection,
  } from '$layout/translate/types.d';
  import {
    BackgroundColour as backgroundColour,
    TranslateDirection as translateColour,
  } from '$layout/translate/types.d';
  import { GradientColour } from '$layout/types.d';

  export let direction: TranslateDirection = translateColour.BottomRight;
  export let bg: BackgroundColour = backgroundColour.Green;
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
