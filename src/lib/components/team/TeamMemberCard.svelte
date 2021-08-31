<script lang="ts">
  import type { Member } from '$lib/store/team.d';
  import Heading from '../heading/Heading.svelte';

  export let member: Member;
</script>

<section class="member">
  <img
    src={member.imgSrc}
    alt="image of {member.name}"
    class="
        rounded-2xl border border-gray-300 shadow
        max-h-24 sm:max-h-32 md:max-h-64
        object-contain cursor-help
      "
  />
  <div>
    <div class="p-4">
      <Heading>
        <span>
          {member.name}
        </span>
      </Heading>
    </div>
    <div class="pl-4">
      <h2>
        <span class="text-base sm:text-18">
          {member.tags.join(' | ')}
        </span>
      </h2>
    </div>

    {#each member.about as line}
      <p>{line}</p>
    {/each}
  </div>
</section>

<style lang="postcss">
  section.member {
    display: inline-grid;
    padding: theme('padding.2');
    row-gap: theme('gap.4');
  }
</style>
