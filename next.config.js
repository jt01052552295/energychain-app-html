const path = require('path')
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'robohash.org',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'scss')],
    },
    reactStrictMode: false,
}

module.exports = nextConfig
