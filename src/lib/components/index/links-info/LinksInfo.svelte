<script lang="ts">
  import Facebook from '$media/Facebook.svelte';
  import GoogleMaps from '$media/GoogleMaps.svelte';
  import { info } from '$store/info';
  import Icon, { Mail, Phone } from 'svelte-hero-icons';
</script>

<!--
  @component
  Quick links to external sites, buttons to email & phone on mobile, and text to
  copy & paste for larger screens.
-->
<article class="wrapper">
  <div class="buttons">
    <a
      href="mailto:{$info.email}"
      target="_blank"
      rel="noopener external"
      aria-label="email {$info.email}"
    >
      <Icon src={Mail} />
    </a>
    <a
      href="tel:{$info.phone}"
      target="_blank"
      rel="noopener external"
      aria-label="phone {$info.phone}"
    >
      <Icon src={Phone} />
    </a>
    <a
      href={$info.facebookGroup}
      target="_blank"
      rel="noopener external"
      aria-label="link to Facebook"
    >
      <Facebook />
    </a>
    <a
      href={$info.google}
      target="_blank"
      rel="noopener external"
      aria-label="link to Google Maps"
    >
      <GoogleMaps />
    </a>
  </div>
  <div class="info">
    <p>
      <span>{$info.email}</span> |
      <span>{$info.phone.replace('+64', '0')}</span>
      <span>or register below</span>
    </p>
  </div>
</article>

<style>
  @import './links-info.css';
</style>
