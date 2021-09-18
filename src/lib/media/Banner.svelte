<script lang="ts">
  import bannerWhite from '$images/banner-white.png';
  import banner from '$images/banner.png';

  export let white = false;
  const alt = 'wowhub banner';
</script>

<!-- CSS shows and hides so that both images can be rendered, and cached. -->
<img src={banner} {alt} class={!white ? 'show' : 'hide'} />
<img src={bannerWhite} {alt} class={white ? 'show' : 'hide'} />

<style>
  @import './banner.css';
</style>
