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
    display: grid;
    grid-template-columns: 0 auto 0;

    place-items: center;
    place-content: center;
    justify-items: center;

    padding: 1rem; /* 16px */
    border-bottom-width: 1px;

    @apply text-white bg-gray-900 border-gray-300;

    @apply transition-colors;
    transition-duration: 1000ms;
  }

  :global(.dark) header {
    @apply bg-black border-gray-800;
  }

  @screen ty {
    header {
      grid-template-columns: 1fr 18fr 1fr;
    }
  }

  @screen sm {
    header {
      grid-template-columns: 1fr 18fr 1fr;
    }
  }

  @screen lg {
    header {
      grid-template-columns: 1fr 23fr 1fr;
      padding: 1.5rem; /* 24px */
    }
  }
</style>
