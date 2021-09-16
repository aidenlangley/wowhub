<script lang="ts">
  import { BackgroundColour } from '$lib/layout/translate/types.d';
  import { GradientColour } from '$lib/layout/types.d';
  import Heading from './heading/Heading.svelte';
</script>

<section id="under-construction-notice" class="column pad-x">
  <Heading bg={BackgroundColour.Yellow} fg={GradientColour.Yellow}>
    <slot>
      <span class="message">
        <h1>Under construction...</h1>
        <small>Check back later. Contact details are in the footer.</small>
      </span>
    </slot>
  </Heading>
</section>

<style lang="postcss">
  @import './error.css';
</style>
