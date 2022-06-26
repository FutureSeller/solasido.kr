const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com'],
  },
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
