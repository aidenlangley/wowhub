import type { Article } from '$components/articles/Article.d';

export async function get(): Promise<{
  body: { docs: Article[] };
}> {
  const modules = import.meta.glob('./*.svx');
  const docs: Article[] = [];

  for (const slug in modules) {
    const { metadata } = await modules[slug]();
    docs.push({ ...metadata, slug: `docs/${slug}`.replace('.svx', '') });
  }

  return {
    body: {
      docs: docs,
    },
  };
}
