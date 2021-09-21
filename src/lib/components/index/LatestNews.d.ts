import type { Article } from '$types/Article';
import { SvelteComponentTyped } from 'svelte';

export interface LatestNewsProps {
  news: Article[];
}

export default class LatestNews extends SvelteComponentTyped<LatestNewsProps> {}
