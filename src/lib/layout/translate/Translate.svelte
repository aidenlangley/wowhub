<script lang="ts">
  import type { TranslateDirection, TranslateStrength } from './types.d';

  export let direction: TranslateDirection;
  export let strength: TranslateStrength;
</script>

<div class="{direction} {strength}">
  <slot />
</div>
