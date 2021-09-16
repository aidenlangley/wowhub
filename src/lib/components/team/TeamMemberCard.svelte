<script lang="ts">
  import Heading from '$components/heading/Heading.svelte';
  import Paragraph from '$components/Paragraph.svelte';
  import { TranslateDirection } from '$layout/translate/types.d';
  import Icon from '$media/Icon.svelte';
  import type { Member } from '$store/types.d';
  import { UserCircle } from 'svelte-hero-icons';
  import Tooltip from '../Tooltip.svelte';

  export let member: Member;
  export let right = false;

  const hasPepeha = member.pepeha && member.pepeha.length > 0;
  let showPepeha = false;
</script>

<article class="member" class:right>
  <header>
    <!-- Image, if applicable. -->
    <div class="img">
      {#if member.imgSrc}
        <img
          src={member.imgSrc}
          alt="image of {member.name}"
          class:tall={member.tallImg}
        />
      {:else}
        <Icon src={UserCircle} solid size="100%" />
      {/if}
    </div>

    <!-- Ingoa. -->
    <section class="name">
      <Heading
        direction={right
          ? TranslateDirection.BottomLeft
          : TranslateDirection.BottomRight}
      >
        {member.name}
      </Heading>
    </section>

    <!-- Basically titles. -->
    <h2 class="titles">
      {member.tags.join(', ')}
    </h2>

    <!-- A toggle to show pepeha. -->
    {#if hasPepeha}
      <button class="button" aria-label="show pepeha tooltip">
        <Tooltip text={member.pepeha.join('.\n') + '.'} click>Pepeha</Tooltip>
      </button>
    {/if}
  </header>

  <!-- Quick blurb in te reo English. -->
  <article class="blurb">
    {#each member.about as line}
      <Paragraph>{line}</Paragraph>
    {/each}
  </article>
</article>

<style lang="postcss">
  @import './team-member-card.css';
</style>
