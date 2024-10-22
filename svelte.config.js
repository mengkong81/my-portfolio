import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: dev ? '' : '/my-portfolio',  // Update with your repo name
    },
    prerender: {
      default: true
    }
  }
};
