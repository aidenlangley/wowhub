import { Article } from '$types/Article';
import { SvelteComponentTyped } from 'svelte';

export interface ArticleCardProps {
  articles: Article[];
}

export default class ArticleCardProps extends SvelteComponentTyped<ArticleCardProps> {}
