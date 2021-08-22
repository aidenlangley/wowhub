<script>
  import Link from '../Link.svelte';
</script>

<!--
  @component
  Short mission statement and about us.
-->
<div
  class="
    space-y-2 md:space-y-4 lg:space-y-8 xl:space-y-12
    dark:text-white
    transition duration-500
  "
>
  <h1 class="text-left">
    <span
      class="
        text-shadow font-medium tracking-tighter
        text-28 md:text-48 lg:text-64
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
        text-shadow-md
        text-48 md:text-72 lg:text-96 xl:text-128
      "
    >
      Sharing gifts of recovery.
    </span>
  </h1>
  <div
    class="
      p-2 md:p-4 space-y-2 md:space-y-4
      text-justify
      md:text-18 xl:text-20
      tracking-tighter xl:leading-relaxed
      bg-white bg-opacity-95 rounded-lg border border-gray-100 shadow
      dark:bg-black dark:bg-opacity-50 dark:border-gray-800
    "
  >
    <p>
      <Link to="https://goo.gl/maps/WrvBZvvEy1SKGqVS7">
        <span
          class="
            font-mono font-medium
            text-green-700 hover:text-green-500 focus:text-green-500
            dark:text-green-300 dark:hover:text-green-500 dark:focus:text-green-500
            transition duration-500
          "
        >
          Whakaoranga Whanau Recovery Hub
        </span>
      </Link>
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
