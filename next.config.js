module.exports = {
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com'],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
