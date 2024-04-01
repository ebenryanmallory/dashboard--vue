const fs = require('fs')

require('dotenv').config()

const snowpack = './snowpack.config.mjs';

const fileText = `
/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-vue',
    '@snowpack/plugin-postcss'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  env: {
    TMDB_TOKEN: ${process.env.TMDB_TOKEN},
  },
  buildOptions: {
    /* ... */
  }
};
`
fs.writeFile(snowpack, fileText, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Config file complete')
})