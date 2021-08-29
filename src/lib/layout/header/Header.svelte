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
  class="grid place-items-center p-4 lg:p-6
    text-white bg-gray-900 dark:bg-black shadow-lg
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

  header:last-child {
    @apply justify-self-end;
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
