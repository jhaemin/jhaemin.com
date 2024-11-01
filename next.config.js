/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/interop',
        destination: 'https://interop.design',
        permanent: false,
      },
    ]
  },
}
