<script lang="ts">
  import Icon from 'svelte-hero-icons';

  /*
  Since this is a passthrough to 3rd party code,
  it's difficult to know the type.
  */
  export let src: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  export let solid: boolean = null;
  export let size = '22';
  export let style: string = null;
</script>

<Icon {src} {solid} {size} class={style} aria-hidden="true" />
