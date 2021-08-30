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
<header
  class="grid p-4 lg:p-6
    place-items-center place-content-center justify-items-center
    text-white bg-gray-900 dark:bg-black
    border-b border-gray-300 dark:border-gray-800"
>
  <Logo white />
  <Routes />
  <DarkToggle />
</header>

<style lang="postcss">
  header {
    grid-template-columns: 0 auto 0;
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
    }
  }
</style>
