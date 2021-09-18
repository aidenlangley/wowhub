<script lang="ts">
  import Logo from '$lib/media/Logo.svelte';
  import { state } from '$store/dark';

  export let white = true;
  const classes = 'headings' + (white ? ' white' : '');
</script>

<div class={classes}>
  <h1>
    <div class="mobile">
      {#if white || $state.dark}
        <Logo white />
      {:else}
        <Logo />
      {/if}
    </div>
    <span>Planting the seed of hope...</span>
  </h1>
  <h2>Sharing gifts of recovery.</h2>
</div>

<style>
  @import './mission-statement.css';
</style>
