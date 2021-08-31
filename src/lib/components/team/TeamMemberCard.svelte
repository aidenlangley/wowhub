<script lang="ts">
  import type { Member } from '$lib/store/team.d';
  import Heading from '../heading/Heading.svelte';

  export let member: Member;
</script>

<div class="p-2 space-y-4">
  <div class="flex space-x-4 items-center">
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
  </div>
</div>
