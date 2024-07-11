const isVercel = process.env.VERCEL === '1';

module.exports = {
  reactStrictMode: true,
  ...(isVercel ? {} : {
    basePath: '/FWD',
    assetPrefix: '/FWD/',
    trailingSlash: true,
    images: {
      images: {
        unoptimized: true, 
        domains: ['imgs.xkcd.com'], 
      },
    },
  }),
};
