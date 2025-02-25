// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-cloudflare';
import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-vercel';



/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            out: 'build', // Ensure the output directory is set correctly
            precompress: false,
            env: {
                port: process.env.PORT || 3000,
                host: process.env.HOST || '0.0.0.0'
            }
        }),
        csrf: {
            checkOrigin: false,
          }
    }
};

export default config;
