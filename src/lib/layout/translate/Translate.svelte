<script lang="ts">
  import type { BackgroundColour, TranslateDirection } from './types.d';

  export let direction: TranslateDirection;
  export let colour: BackgroundColour;
</script>

<div class="{direction} {colour}">
  <slot />
</div>
