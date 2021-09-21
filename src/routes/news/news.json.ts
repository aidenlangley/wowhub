import type { Article } from '$types/Article';

export async function get(): Promise<{
  body: { news: Article[] };
}> {
  const modules = import.meta.glob('./*.svx');
  const news: Article[] = [];

  for (const slug in modules) {
    const { metadata } = await modules[slug]();
    if (!slug.includes('_')) {
      news.push({
        ...metadata,
        slug: `news/${slug}`.replace('./', '').replace('.svx', ''),
      });
    }
  }

  return {
    body: {
      news: news.sort((x, y) => y.date.getTime() - x.date.getTime()),
    },
  };
}
