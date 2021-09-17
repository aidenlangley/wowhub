<script lang="ts">
  import Logo from '$media/Logo.svelte';
  import DarkToggle from './DarkToggle.svelte';
  import Routes from './routes/Routes.svelte';
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
