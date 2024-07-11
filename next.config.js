const isVercel = process.env.VERCEL === '1';

module.exports = {
  reactStrictMode: true,
  ...(isVercel ? {} : {
    basePath: '/FWD',
    assetPrefix: '/FWD/',
    trailingSlash: true,
  }),
  images: {
    domains: ['imgs.xkcd.com'], 
  },
};
