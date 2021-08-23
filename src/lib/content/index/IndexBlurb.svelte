<script lang="ts" context="module">
  export const paragraphStyle =
    'p-2 md:p-4 space-y-2 md:space-y-4 ' +
    'text-justify ' +
    'md:text-18 xl:text-20 ' +
    'tracking-tighter xl:leading-relaxed';
</script>

<script lang="ts">
  import Link from '../Link.svelte';
</script>

<!--
  @component
  Short mission statement and about us.
-->
<div class="space-y-2 md:space-y-4 lg:space-y-8 xl:space-y-12">
  <h1 class="text-left">
    <span
      class="
        text-shadow font-medium tracking-tighter
        text-28 md:text-42 lg:text-64
        md:font-light
      "
    >
      Planting the seed of hope...
    </span>
  </h1>
  <h1 class="text-center">
    <span
      class="
        font-display font-medium tracking-tight
        text-48 sm:text-64 md:text-72 lg:text-96 xl:text-128
      "
    >
      Sharing gifts of recovery.
    </span>
  </h1>
  <div class={paragraphStyle}>
    <p>
      <span class="dark">
        <Link href="https://goo.gl/maps/WrvBZvvEy1SKGqVS7">
          Whakaoranga Whanau Recovery Hub
        </Link>
      </span>
      is a kaupapa Māori AOD community support service in Kaikohe. We're a team of
      passionate individuals who have lived experience.
    </p>
    <p>
      We work together and collaborate with other health providers to
      strengthen, educate and empower individuals to reach their full potential.
    </p>
    <p>
      You can find us at <b>135 Broadway, Kaikohe</b>, Monday to Friday, 10am
      until 3pm.
    </p>
  </div>
</div>
