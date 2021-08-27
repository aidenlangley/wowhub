import type { Article } from '$lib/content/articles/Article';

export async function get(): Promise<{
  body: { news: Article[] };
}> {
  const modules = import.meta.glob('./*.svx');
  const news: Article[] = [];

  for (const slug in modules) {
    const { metadata } = await modules[slug]();
    news.push({ ...metadata, slug: `news/${slug}`.replace('.svx', '') });
  }

  return {
    body: {
      news: news.sort((x, y) => y.date.getTime() - x.date.getTime()),
    },
  };
}
