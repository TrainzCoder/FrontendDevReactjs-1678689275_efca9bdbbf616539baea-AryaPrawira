/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.tripadvisor.com',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
