/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
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
