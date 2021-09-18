<script lang="ts">
  import Link from '$components/link/Link.svelte';
  import Facebook from '$media/Facebook.svelte';
  import GoogleMaps from '$media/GoogleMaps.svelte';
  import Icon from '$media/Icon.svelte';
  import { info } from '$store/info';
  import { Mail, Phone } from 'svelte-hero-icons';
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
    <ul>
      <li>
        <span>{$info.email}</span> |
        <span>{$info.phone.replace('+64', '0')}</span>
      </li>
      <li>
        <Link href="https://forms.gle/DgHAF9GvwVhKPzjA6">
          Whakaoranga Whanau Registration Form
        </Link>
      </li>
      <li>
        <Link href="https://forms.gle/MT22azTPYCyum3St9">
          Freedom Whare Registration Form
        </Link>
      </li>
    </ul>
  </div>
</article>

<style>
  @import './links-info.css';
</style>
