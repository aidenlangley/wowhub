import type { Article } from 'src/lib/models/Article'

export async function get(): Promise<{
  body: { docs: Article[] }
}> {
  const modules = import.meta.glob('./*.svx')
  const docs: Article[] = []

  for (const slug in modules) {
    const { metadata } = await modules[slug]()
    if (!slug.includes('_')) {
      docs.push({
        ...metadata,
        slug: `docs/${slug}`.replace('./', '').replace('.svx', '')
      })
      console.log(docs);
    }
  }

  return {
    body: {
      docs: docs,
    },
  }
}
