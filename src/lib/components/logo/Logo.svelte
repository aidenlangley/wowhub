<script lang="ts">
  import logo from '$img/logo/logo-64.png';
  import logoWhite from '$img/logo/logo-white-64.png';
  // import logoWhiteLarge from '$img/logo/logo-white-512.png';

  // export let large = false;
  export let white = false;
  const alt = 'wowhub logo';
</script>

<!--
  @component
  Whakaoranga Whanau Recovery Hub logo.
  On site, size only reaches about h45px w45px.
  Regularly we use h64px w64px.
-->

<!-- CSS shows and hides so that both images can be rendered, and cached. -->
<!-- <img src={logoLarge} {alt} class={!white ? 'show' : 'hide'} class:large /> -->
<!-- <img src={logoWhiteLarge} {alt} class={white ? 'show' : 'hide'} class:large /> -->
<img src={logo} {alt} class={!white ? 'show' : 'hide'} />
<img src={logoWhite} {alt} class={white ? 'show' : 'hide'} />

<style>
  @import './logo.css';
</style>
