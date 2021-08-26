import type { NewsMetadata } from './news';

export async function get(): Promise<{
  body: { newsList: NewsMetadata[] };
}> {
  const modules = import.meta.glob('./*.svx');
  const news: NewsMetadata[] = [];

  for (const slug in modules) {
    const { metadata } = await modules[slug]();
    news.push({ ...metadata, slug: `news/${slug}`.replace('.svx', '') });
  }

  return {
    body: {
      newsList: news.sort((x, y) => y.date.getTime() - x.date.getTime()),
    },
  };
}
