<script lang="ts">
  import { page } from '$app/stores';
  import Tooltip from '../../tooltip/Tooltip.svelte';

  const routes = [
    {
      name: 'kainga',
      path: '/',
      translation: 'home'
    },
    {
      name: 'ngā kaimahi',
      path: '/team',
      translation: 'the team'
    },
    {
      name: 'tātou hōtaka',
      path: '/programmes',
      translation: 'programmes'
    },
    {
      name: 'panui',
      path: '/news',
      translation: 'news'
    }
  ];
</script>

<!--
  @component
  Oredered list of `svelte:prefetch` `<a>` elements. Could be arranged
  vertically too.
-->
<nav>
  <ol>
    {#each routes as { name, path, translation } (path)}
      <li>
        <Tooltip text={translation}>
          <a
            href={path}
            aria-label="link to {translation} page"
            class:active={$page.path === path}
          >
            {name}
          </a>
        </Tooltip>
      </li>
    {/each}
  </ol>
</nav>

<style>
  @import './routes.css';
</style>
