<script lang="ts">
  import type { Employee } from './business-card';

  export let businessCard: Employee;
</script>

<div class="bg-black text-white">
  <span>{businessCard.name}</span>
</div>
