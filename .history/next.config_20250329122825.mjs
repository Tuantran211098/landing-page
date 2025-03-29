/** @type {import('next').NextConfig} */
export default {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "beta-api.bachlongmobile.com",
            },
        ],
    },
};

