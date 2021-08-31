<script lang="ts">
  import DarkToggle from '$layout/header/DarkToggle.svelte';
  import Logo from '$media/Logo.svelte';
  import Routes from './Routes.svelte';
</script>

<!--
  @component
  Header consists of our logo, inlined navigation links and a toggle for dark
  mode.
-->
<header>
  <Logo white />
  <Routes />
  <DarkToggle />
</header>

<style lang="postcss">
  header {
    background-color: theme('colors.gray.900');
    border-bottom-width: theme('borderWidth.DEFAULT');
    border-color: theme('colors.gray.300');
    color: theme('colors.white');
    display: grid;
    grid-template-columns: 0 auto 0;
    max-height: theme('height.24');
    padding: theme('padding.4');
    place-content: center;
    place-items: center;
    transition-duration: 1000ms;

    @nest :global(.dark) & {
      background-color: theme('colors.black');
      border-color: theme('colors.gray.800');
    }

    @screen ty {
      /* 5% auto 5% */
      grid-template-columns: 1fr 18fr 1fr;
    }

    @screen sm {
      padding: theme('padding.5');
    }

    @screen lg {
      /* 4% auto 4% */
      grid-template-columns: 1fr 23fr 1fr;
      padding: theme('padding.6');
    }
  }
</style>
