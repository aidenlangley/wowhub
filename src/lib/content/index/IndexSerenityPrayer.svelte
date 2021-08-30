<script lang="ts">
  import Link from '../Link.svelte';
</script>

<!--
  @component
  Serenity prayer in multicolour.
-->

<p>
  <span class="font-medium text-24 sm:text-32 md:text-40 lg:text-48">
    God,
  </span>
  grant me the
  <span
    class="font-bold text-28 sm:text-36 md:text-44 lg:text-64 text-blue-500"
  >
    serenity
  </span>
</p>
<p>
  To
  <span
    class="font-medium text-26 sm:text-34 md:text-42 lg:text-48 text-green-500"
  >
    accept
  </span>
  the things I
  <span
    class="font-bold text-22 sm:text-30 md:text-38 lg:text-56 text-orange-500"
  >
    cannot change
  </span>
</p>
<p>
  <span class="font-bold text-28 sm:text-36 md:text-44 lg:text-56 text-red-500">
    Courage
  </span>
  to
  <span
    class="font-bold text-26 sm:text-34 md:text-42 lg:text-56
        text-gray-600 dark:text-gray-400"
  >
    change
  </span>
  the things I can
</p>
<p>
  And the
  <span
    class="font-bold text-32 sm:text-40 md:text-48 lg:text-64 text-purple-500"
  >
    wisdom
  </span>
  to know the
  <span
    class="font-medium text-28 sm:text-36 md:text-44 lg:text-56 text-yellow-500"
  >
    difference
  </span>
</p>
<span>
  <Link href="/docs/serenity-prayer" internal>Serenity Prayer</Link>
</span>

<style lang="postcss">
  p {
    @apply font-serif font-light tracking-tighter leading-tight;
    @apply text-20 sm:text-24 md:text-32 lg:text-36;
  }
</style>
