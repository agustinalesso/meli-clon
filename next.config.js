/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
				pathname: '/**'
      },
    ],
  },
}

module.exports = nextConfig
