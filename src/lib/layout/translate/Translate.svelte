<script lang="ts">
  import type { TranslateDirection } from './types.d';

  export let direction: TranslateDirection;
</script>

<div class={direction}>
  <slot />
</div>
