<script lang="ts">
  import { serenityPrayer } from '$lib/content/index/IndexSerenityPrayer.svelte';
  import Column from '$lib/layout/Column.svelte';
</script>

<Column>
  <div
    class="
      p-4 space-y-4
      ty:text-18 sm:text-20 md:text-22 lg:text-24 xl:text-26
      tracking-tighter font-light
    "
  >
    <div>
      {#each serenityPrayer.en as line}
        <p>{line}</p>
      {/each}
    </div>
    <div>
      {#each serenityPrayer.mi as line}
        <p>{line}</p>
      {/each}
    </div>
  </div>
</Column>
