import domStringify from 'rehype-dom-stringify';
import externalLinks from 'rehype-external-links';
import footnotes from 'remark-footnotes';
import gfm from 'remark-gfm';

const config = {
  extensions: ['.svelte.md', '.md', '.svx'],
  smartypants: {
    dashes: 'oldschool',
  },
  remarkPlugins: [footnotes, gfm],
  rehypePlugins: [externalLinks, domStringify],
  layout: {
    _: './src/lib/content/articles/Article.svelte',
  },
};

export default config;
