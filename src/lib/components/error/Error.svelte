<script lang="ts">
  import { GradientColour } from '$models/Gradient';
  import { BackgroundColour } from '$models/Translate';
  import Heading from '../heading/Heading.svelte';
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

<style>
  @import './error.css';
</style>
