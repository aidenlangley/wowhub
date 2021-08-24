import remarkFootnotes from 'remark-footnotes';

const config = {
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [remarkFootnotes],
  rehypePlugins: [],

  layout: {
    _: './src/lib/layout/Typography.svelte',
  },
};

export default config;
