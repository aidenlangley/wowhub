<script lang="ts">
  import DarkToggle from '../DarkToggle.svelte';
  import Logo from '../logo/Logo.svelte';
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

<style>
  @import './header.css';
</style>
