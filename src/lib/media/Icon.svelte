<script lang="ts">
  import Icon from 'svelte-hero-icons';

  export let src: any;
  export let solid: boolean = null;
  export let size = '22';
  export let style: string = null;
</script>

<Icon {src} {solid} {size} class={style} />
