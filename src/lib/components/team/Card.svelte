<script lang="ts">
  import Heading from '$components/heading/Heading.svelte';
  import Paragraph from '$components/paragraph/Paragraph.svelte';
  import Tooltip from '$components/tooltip/Tooltip.svelte';
  import { TranslateDirection } from '$layout/translate/types.d';
  import Icon from '$media/Icon.svelte';
  import type { Member } from '$store/types.d';
  import { UserCircle } from 'svelte-hero-icons';

  export let member: Member;
  export let right = false;

  const hasPepeha = member.pepeha && member.pepeha.length > 0;
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
        {#if right}
          <Tooltip text={member.pepeha.join('.\n') + '.'} toggles right>
            Pepeha
          </Tooltip>
        {:else}
          <Tooltip text={member.pepeha.join('.\n') + '.'} toggles left>
            Pepeha
          </Tooltip>
        {/if}
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
  @import './card.css';
</style>
