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
  @import './header.css';
</style>
