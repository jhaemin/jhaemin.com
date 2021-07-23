module.exports = {
  async redirects() {
    return [
      {
        source: '/design',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
