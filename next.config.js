/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'domkimazurskie.com.pl',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
