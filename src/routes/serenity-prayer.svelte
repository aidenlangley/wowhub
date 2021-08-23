<script lang="ts">
  import { serenityPrayer } from '$lib/content/index/IndexSerenityPrayer.svelte';
  import Column from '$lib/layout/Column.svelte';
</script>

<Column>
  <div class="p-4 space-y-4 text-28 tracking-tighter">
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
