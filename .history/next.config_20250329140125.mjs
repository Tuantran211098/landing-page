const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "beta-api.bachlongmobile.com",
            },
            {
                protocol: "https",
                hostname: "bachlongmobile.com",
            },
        ],
    },
};

export default nextConfig;
