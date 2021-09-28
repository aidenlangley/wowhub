import links from 'rehype-external-links';
import footnotes from 'remark-footnotes';
import gfm from 'remark-gfm';
import images from 'remark-images';

const config = {
  extensions: ['.svx'],
  smartypants: {
    dashes: 'oldschool',
  },
  layout: {
    _: './src/lib/components/articles/Article.svelte',
  },
  remarkPlugins: [gfm, images, footnotes],
  rehypePlugins: [links],
};

export default config;
