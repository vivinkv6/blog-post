/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'kilton-dashboard.spider.ws',
                port:'',
            }
        ]
    }
};

export default nextConfig;
