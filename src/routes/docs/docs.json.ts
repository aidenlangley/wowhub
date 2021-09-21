import type { Article } from '$types/Article'

export async function get(): Promise<{
  body: { docs: Article[] }
}> {
  const modules = import.meta.glob('./*.svx')
  const docs: Article[] = []

  for (const slug in modules) {
    const { metadata } = await modules[slug]()
    docs.push({
      ...metadata,
      slug: `docs/${slug}`.replace('./', '').replace('.svx', '')
    })
  }

  return {
    body: {
      docs: docs,
    },
  }
}
