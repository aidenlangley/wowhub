<script lang="ts">
  import type { GradientColour } from '$models/Gradient';
  import { GradientColour as gradientColour } from '$models/Gradient';
  import type { BackgroundColour, TranslateDirection } from '$models/Translate';
  import {
    BackgroundColour as backgroundColour,
    TranslateDirection as translateColour,
  } from '$models/Translate';
  import Translate from '../translate/Translate.svelte';

  export let direction: TranslateDirection = translateColour.BottomRight;
  export let bg: BackgroundColour = backgroundColour.Green;
  export let fg: GradientColour = gradientColour.Green;
</script>

<Translate {direction} colour={bg}>
  <h1 class={fg}>
    <slot />
  </h1>
</Translate>

<style>
  @import './heading.css';
</style>
