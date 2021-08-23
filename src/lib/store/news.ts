import { readable } from 'svelte/store';

export const news = readable([
  // TODO: Programmatically read $lib/content/news .svx files
  // TODO: Extract pubDate, path, title & a summary
  // TODO: Expose here as an array of objects
]);
