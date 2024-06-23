/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/interop',
        destination: 'https://github.com/jhaemin/Interop',
        permanent: false,
      },
    ]
  },
}
