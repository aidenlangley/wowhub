import type { Article } from 'src/lib/models/Article';
import { SvelteComponentTyped } from 'svelte';

export interface LatestNewsProps {
  news: Article[];
}

export default class LatestNews extends SvelteComponentTyped<LatestNewsProps> {}
