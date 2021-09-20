<script lang="ts">
  import Translate from '../translate/Translate.svelte';
  import type {
    BackgroundColour,
    TranslateDirection,
  } from '../translate/types';
  import {
    BackgroundColour as backgroundColour,
    TranslateDirection as translateColour,
  } from '../translate/types';
  import { GradientColour } from '../types';

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
