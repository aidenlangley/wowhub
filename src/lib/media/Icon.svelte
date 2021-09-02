<script lang="ts">
  /*
  import { Phone } from 'svelte-hero-icons';
  */
  export let src: any // eslint-disable-line @typescript-eslint/no-explicit-any
  export let solid = false
  export let size = '22'

  if (size !== '100%') {
    if (
      size.slice(-1) != 'x' &&
      size.slice(-1) != 'm' &&
      size.slice(-1) != '%'
    ) {
      try {
        size = parseInt(size) + 'px'
      } catch (error) {
        size = '100%'
      }
    }
  }

  const style = `heroicon ${!solid ? 'outline' : 'solid'}`
</script>

{#if !solid}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    class={style}
    height={size}
    width={size}
    aria-hidden="true"
  >
    {#each src[1] ?? [] as att}
      <path {...att} />
    {/each}
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    class={style}
    height={size}
    width={size}
    aria-hidden="true"
  >
    {#each src[0] ?? [] as att}
      <path {...att} />
    {/each}
  </svg>
{/if}
