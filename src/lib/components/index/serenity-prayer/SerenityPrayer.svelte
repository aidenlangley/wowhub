<script lang="ts">
  import Link from '../../link/Link.svelte';
</script>

<!--
  @component
  Serenity prayer in multicolour.
-->

<article>
  <section class="passage">
    <p>
      <span class="god">God,</span>
      grant me the
      <span class="serenity">serenity</span>
    </p>
    <p>
      To
      <span class="accept">accept</span>
      the things I
      <span class="cannot-change">cannot change</span>
    </p>
    <p>
      <span class="courage">Courage</span>
      to
      <span class="change">change</span>
      the things I can
    </p>
    <p>
      And the
      <span class="wisdom">wisdom</span>
      to know the
      <span class="difference">difference</span>
    </p>
  </section>
  <section class="source">
    <Link href="/docs/serenity-prayer" internal>- Serenity Prayer</Link>
  </section>
</article>

<style>
  @import './serenity-prayer.css';
</style>
