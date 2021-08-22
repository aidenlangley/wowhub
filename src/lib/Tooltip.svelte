<script lang="ts">
  import { fade } from 'svelte/transition';

  export let text: string;

  // Position flags in case it's going off screen.
  export let top = false; // Spawns top, grows right.
  export let topLeft = false; // Spawns top, grows left.
  export let left = false; // Spawns bottom, grows left.
  export let right = false; // default. Spawns bottom, grows right.

  let hidden = true;

  const show = () => (hidden = false);
  const hide = () => (hidden = true);
</script>

<!--
  @component
  `Tooltip` that shows on mouseover. Takes `text` and `top|topLeft|left|right`
  as parameters. The direction parameter is growth direction, passing `left`
  will cause `Tooltip` to spawn bottom, grow left.

  ```tsx
  <Tooltip {text} {left} />
  ```
-->
<div
  on:focus={show}
  on:blur={hide}
  on:pointerover={show}
  on:pointerleave={hide}
>
  <slot />
  {#if !hidden}
    <div
      class={`
        relative
        ${top ? '-top-' : ''}
        ${topLeft ? '-top-14 -left-40' : ''}
        ${left ? '-bottom-1 -left-40' : ''}
        ${right ? '-bottom-1' : ''}
      `}
      transition:fade={{ duration: 100 }}
      aria-haspopup="true"
    >
      <span
        class="
          p-1 w-max max-w-xs
          bg-gray-900 bg-opacity-90
          border rounded border-gray-700 shadow
          text-base lg:text-18 text-gray-100 text-center
          font-mono font-normal tracking-tighter leading-tight
          absolute
        "
      >
        {text}
      </span>
    </div>
  {/if}
</div>
