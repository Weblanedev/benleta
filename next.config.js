/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_PROPERTY_ID: process.env.NEXT_PUBLIC_PROPERTY_ID,
        NEXT_PUBLIC_WIDGET_ID: process.env.NEXT_PUBLIC_WIDGET_ID
    },
    images: {
        domains: ["res.cloudinary.com", "firebasestorage.googleapis.com", "example.com", "itaja-bucket.s3.us-west-2.amazonaws.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com"
            }
        ]       
    }
}

module.exports = nextConfig
