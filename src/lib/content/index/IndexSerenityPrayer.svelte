<script lang="ts">
  import Link from '../Link.svelte';
  import Span from '../Span.svelte';
</script>

<!--
  @component
  Serenity prayer in multicolour.
-->
<section id="serenity-prayer" class="space-y-2 sm:space-y-4">
  <div
    class="
      font-serif font-light
      tracking-tighter leading-tight
      text-center text-20 sm:text-24 md:text-32 lg:text-36
    "
  >
    <p>
      <Span>
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
      </Span>
    </p>
    <p>
      <Span>
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
      </Span>
    </p>
    <p>
      <Span>
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
            text-gray-600
          "
        >
          change
        </span>
        the things I can
      </Span>
    </p>
    <p>
      <Span>
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
      </Span>
    </p>
  </div>
  <div class="text-right">
    <sub>
      <Link href="/docs/serenity-prayer" external={false}>
        <span
          class="
            text-18 lg:text-28
            tracking-tighter font-medium dark:font-normal
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
