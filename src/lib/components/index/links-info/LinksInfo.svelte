<script lang="ts">
  import { forms } from '$stores/forms';
  import { info } from '$stores/info';
  import Facebook from '../../Facebook.svelte';
  import Link from '../../link/Link.svelte';
  import GoogleMaps from '../../Maps.svelte';
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </a>
    <a
      href="tel:{$info.phone}"
      target="_blank"
      rel="noopener external"
      aria-label="phone {$info.phone}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
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
      {#each $forms as form}
        <li>
          <Link href={form.url}>{form.title}</Link>
        </li>
      {/each}
    </ul>
  </div>
</article>

<style>
  @import './links-info.css';
</style>
