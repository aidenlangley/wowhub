<script lang="ts">
  import UnderConstruction from '$comp/error/Error.svelte';
  import Heading from '$comp/heading/Heading.svelte';
  import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
  title="Programmes"
  description={`Tātou hōtaka. These are the programmes we run and/or host
    - register here!`}
/>

<!--
  @component
  Our programmes.
-->
<article class="pad-y">
  <UnderConstruction />

  <article class="column pad-x gaps-y">
    <Heading>A preview of what's to come...</Heading>
    <ul>
      <li>🚣🏽 He Waka Eke Noa</li>
      <li>💖 Waipuna Ora</li>
      <li>🛖 Freedom Whare</li>
      <li>⚕️ Whakamanamai Charitable Trust</li>
      <li>💪 Influence Gym</li>
    </ul>
  </article>
</article>

<style lang="postcss">
  ul {
    font-family: theme('fontFamily.mono');
    font-weight: theme('fontWeight.medium');
    letter-spacing: theme('letterSpacing.tight');
  }

  :global(.dark) ul {
    color: theme('colors.white');
  }
</style>
