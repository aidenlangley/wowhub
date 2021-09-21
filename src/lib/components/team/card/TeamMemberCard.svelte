<script lang="ts">
  import type { TeamMember } from '$types/TeamMember';
  import { TranslateDirection } from '$types/Translate';
  import Heading from '../../heading/Heading.svelte';
  import Paragraph from '../../paragraph/Paragraph.svelte';
  import Tooltip from '../../tooltip/Tooltip.svelte';

  export let member: TeamMember;
  const { name, tags, about, pepeha, imgSrc } = member;
  export let right = false;

  const hasPepeha = pepeha && pepeha.length > 0;
</script>

<!--
  @component
  Card with photo, shortish description & pepeha for kaimahi.
-->
<article class="member" class:right>
  <header>
    <!-- Image, if applicable. -->
    <div class="img">
      {#if imgSrc}
        <!--
          Height depends on info next to imgSrc.
          Usual size is w384px h240px however.
          I have optmised these myself in Krita. Files in Google Drive, if you
          have the know how.
        -->
        <img src={imgSrc} alt="image of {name}" />
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          />
        </svg>
      {/if}
    </div>

    <!-- Ingoa. -->
    <section class="name">
      <Heading
        direction={right
          ? TranslateDirection.BottomLeft
          : TranslateDirection.BottomRight}
      >
        {name}
      </Heading>
    </section>

    <!-- Basically titles. -->
    <h2 class="titles">
      {tags.join(', ')}
    </h2>

    <!-- A toggle to show pepeha. -->
    {#if hasPepeha}
      <button class="button" aria-label="show pepeha tooltip">
        {#if right}
          <Tooltip text={pepeha.join('.\n') + '.'} toggles right>
            Pepeha
          </Tooltip>
        {:else}
          <Tooltip text={pepeha.join('.\n') + '.'} toggles left>Pepeha</Tooltip>
        {/if}
      </button>
    {/if}
  </header>

  <!-- Quick blurb in te reo English. -->
  <article class="blurb">
    {#each about as line}
      <Paragraph>{line}</Paragraph>
    {/each}
  </article>
</article>

<style>
  @import './team-member-card.css';
</style>
