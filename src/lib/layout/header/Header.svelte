<script lang="ts">
  import DarkToggle from '$lib/layout/header/DarkToggle.svelte';
  import Logo from '$lib/media/Logo.svelte';
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
    border-bottom-width: 1px;
    border-color: theme('colors.gray.300');
    color: theme('colors.white');
    display: grid;
    grid-template-columns: 0 auto 0;
    max-height: 96px;
    padding: 1rem; /* 16px */
    place-content: center;
    place-items: center;
    transition-duration: 1000ms;
  }

  :global(.dark) header {
    @apply bg-black border-gray-800;
  }

  @screen ty {
    header {
      /* 5% auto 5% */
      grid-template-columns: 1fr 18fr 1fr;
    }
  }

  @screen sm {
    header {
      padding: 1.25rem; /* 20 px */
    }
  }

  @screen lg {
    header {
      /* 4% auto 4% */
      grid-template-columns: 1fr 23fr 1fr;
      padding: 1.5rem; /* 24px */
    }
  }
</style>
