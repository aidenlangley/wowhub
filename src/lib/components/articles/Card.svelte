<script lang="ts">
  import type { Article } from '$types/Article';
  import Link from '../link/Link.svelte';

  export let article: Article;
</script>

<li>
  <Link href={article.slug} internal>
    <span>
      {article.title}
    </span>
  </Link>
  <p>{article.description}</p>
  {#if article.date}
    <small>
      posted {new Date(article.date).toLocaleString()}
    </small>
  {/if}
</li>

<style>
  @import './card.css';
</style>
