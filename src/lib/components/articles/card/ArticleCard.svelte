<script lang="ts">
  import type { Article } from '$types/Article';
  import Link from '../../link/Link.svelte';

  export let article: Article;
  const { slug, title, description, date } = article;
</script>

<li>
  <Link href={slug} internal>
    <span>
      {title}
    </span>
  </Link>
  <p>{description}</p>
  {#if date}
    <small>
      posted {new Date(date).toLocaleString()}
    </small>
  {/if}
</li>

<style>
  @import './article-card.css';
</style>
