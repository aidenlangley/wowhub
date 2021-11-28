<script lang="ts" context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Heading from '$comp/heading/Heading.svelte';
  import Heading3 from '$comp/heading/Heading3.svelte';
  import Link from '$comp/link/Link.svelte';
</script>

<div class="column pad-y">
  <Heading>Thank you!</Heading>
  <Heading3>We'll be in touch</Heading3>
  <Link href="/" internal>Return to home</Link>
</div>
