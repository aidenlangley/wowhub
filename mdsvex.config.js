import rehypeDomStringify from 'rehype-dom-stringify';
import rehypeExternalLinks from 'rehype-external-links';
import remarkFootnotes from 'remark-footnotes';
import remarkGfm from 'remark-gfm';

const config = {
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [[remarkFootnotes, { inlineNotes: true }], remarkGfm],
  rehypePlugins: [rehypeExternalLinks, rehypeDomStringify],

  layout: {
    _: './src/lib/layout/Typography.svelte',
  },
};

export default config;
