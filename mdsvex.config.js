import domStringify from 'rehype-dom-stringify';
import externalLinks from 'rehype-external-links';
import footnotes from 'remark-footnotes';
import gfm from 'remark-gfm';

const config = {
  extensions: ['.svelte.md', '.md', '.svx'],
  smartypants: {
    dashes: 'oldschool',
  },
  remarkPlugins: [[footnotes, { inlineNotes: true }], gfm],
  rehypePlugins: [externalLinks, domStringify],
  layout: {
    _: './src/lib/content/articles/_Layout.svelte',
  },
};

export default config;
