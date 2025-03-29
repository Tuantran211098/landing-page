const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: ["beta-api.bachlongmobile.com", "https://bachlongmobile.com"],
            },
        ],
    },
};

export default nextConfig;
