<script lang="ts">
  import Link from '../link/Link.svelte';
</script>

<!--
  @component
  Serenity prayer in multicolour.
-->
<section id="serenity-prayer" class="space-y-2 sm:space-y-4" aria-hidden="true">
  <div
    class="
      font-serif font-light
      tracking-tighter leading-tight
      text-center text-20 sm:text-24 md:text-32 lg:text-36
    "
  >
    <p>
      <span>
        <span
          class="
            font-medium
            text-24 sm:text-32 md:text-40 lg:text-48
          "
        >
          God,
        </span>
        grant me the
        <span
          class="
            font-bold
            text-28 sm:text-36 md:text-44 lg:text-64
            text-blue-500
          "
        >
          serenity
        </span>
      </span>
    </p>
    <p>
      <span>
        To
        <span
          class="
            font-medium
            text-26 sm:text-34 md:text-42 lg:text-48
            text-green-500
          "
        >
          accept
        </span>
        the things I
        <span
          class="
            font-bold
            text-22 sm:text-30 md:text-38 lg:text-56
            text-orange-500
          "
        >
          cannot change
        </span>
      </span>
    </p>
    <p>
      <span>
        <span
          class="
            font-bold
            text-28 sm:text-36 md:text-44 lg:text-56
            text-red-500
          "
        >
          Courage
        </span>
        to
        <span
          class="
            font-bold
            text-26 sm:text-34 md:text-42 lg:text-56
            text-gray-600 dark:text-gray-400
          "
        >
          change
        </span>
        the things I can
      </span>
    </p>
    <p>
      <span>
        And the
        <span
          class="
            font-bold
            text-32 sm:text-40 md:text-48 lg:text-64
            text-purple-500
          "
        >
          wisdom
        </span>
        to know the
        <span
          class="
            font-medium
            text-28 sm:text-36 md:text-44 lg:text-56
            text-yellow-500
          "
        >
          difference
        </span>
      </span>
    </p>
  </div>
  <div class="text-right">
    <sub>
      <Link href="/docs/serenity-prayer" external={false}>
        <span
          class="
            text-base sm:text-18
            tracking-tighter font-medium
            text-gray-600 dark:text-gray-200
            hover:text-gray-400 dark:hover:text-gray-400
          "
        >
          - Serenity Prayer
        </span>
      </Link>
    </sub>
  </div>
</section>
