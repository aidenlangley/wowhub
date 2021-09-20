import externalLinks from 'rehype-external-links';
import footnotes from 'remark-footnotes';
import gfm from 'remark-gfm';
import images from 'remark-images';

const config = {
  extensions: ['.svelte.md', '.md', '.svx'],
  smartypants: {
    dashes: 'oldschool',
  },
  remarkPlugins: [gfm, images, footnotes],
  rehypePlugins: [externalLinks],
  layout: {
    _: './src/lib/components/articles/Article.svelte',
  },
};

export default config;
