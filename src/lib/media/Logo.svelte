<script lang="ts">
  import logoWhite from '$images/logo-white.png';
  import logo from '$images/logo.png';

  export let white = false;
  const alt = 'wowhub logo';
</script>

<!-- CSS shows and hides so that both images can be rendered, and cached. -->
<img src={logo} {alt} class={!white ? 'show' : 'hide'} />
<img src={logoWhite} {alt} class={white ? 'show' : 'hide'} />

<style>
  @import './logo.css';
</style>
