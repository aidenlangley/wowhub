<script lang="ts" context="module">
  import { browser } from '$app/env';
  import { prefetch } from '$app/navigation';
  import Link from '../Link.svelte';

  export const serenityPrayer = {
    mi: [
      'E te Atua, tukua mai he ngākau mahaki ki ahau',
      'Kia tou tonu te rangimarie i roto i ngā uauatanga',
      'Me te kaha ki te whakatika i ngā marotanga kia matou',
      'Kia marama hokingā rereketanga',
    ],
    en: [
      'God, grant me the serenity',
      'To accept the things I cannot change',
      'Courage to change the things I can',
      'And the wisdom to know the difference',
    ],
  };

  if (browser) prefetch('/serenity-prayer');
</script>

<div class="space-y-2 sm:space-y-4">
  <div
    class="
      font-serif font-light
      tracking-tighter leading-tight
      text-center text-20 sm:text-24 md:text-32 lg:text-36
    "
  >
    <p
      class="
        bg-white bg-opacity-50
        dark:bg-black dark:bg-opacity-50
      "
    >
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
    </p>
    <p
      class="
        bg-white bg-opacity-50
        dark:bg-black dark:bg-opacity-50
      "
    >
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
    </p>
    <p
      class="
        bg-white bg-opacity-50
        dark:bg-black dark:bg-opacity-50
      "
    >
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
    </p>
    <p
      class="
        bg-white bg-opacity-50
        dark:bg-black dark:bg-opacity-50
      "
    >
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
    </p>
  </div>
  <div class="text-right">
    <sub
      class="
        
      "
    >
      <Link href="/serenity-prayer" external={false}>
        <span
          class="
            text-18 lg:text-28
            tracking-tighter font-medium dark:font-normal
            text-gray-600 dark:text-gray-200
            hover:text-blue-500 dark:hover:text-blue-500
          "
        >
          - Serenity Prayer
        </span>
      </Link>
    </sub>
  </div>
</div>
