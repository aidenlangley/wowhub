import { SvelteComponentTyped } from 'svelte';

export interface ArticleProps {
  title: string;
  description: string;
  date: string;
  author: string;
}

export default class Article extends SvelteComponentTyped<ArticleProps> {}
