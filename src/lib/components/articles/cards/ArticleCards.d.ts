import { Article } from 'src/lib/models/Article';
import { SvelteComponentTyped } from 'svelte';

export interface ArticleCardProps {
  articles: Article[];
}

export default class ArticleCardProps extends SvelteComponentTyped<ArticleCardProps> {}
