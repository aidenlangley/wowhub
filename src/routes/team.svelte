<script lang="ts" context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { seo } from '$lib/store/seo';

  $seo = {
    title: 'Ngā kaimahi',
    description: 'Meet the staff; those in front and behind the scenes',
    robots: 'none',
  };
</script>
