/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "beta-api.bachlongmobile.com",
            },
        ],
    },
};

module.exports = nextConfig;
