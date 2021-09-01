<script lang="ts">
  import type { TranslateDirection, TranslateStrength } from './types.d';
  import { TranslateStrength as tranStr } from './types.d';

  export let direction: TranslateDirection;
  export let strength: TranslateStrength = tranStr.Default;
</script>

<div class="bg {direction} {strength}">
  <slot />
</div>

<style lang="postcss">
  @import './translate.postcss';
</style>
