/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true, // Indicates a permanent redirect
        },
      ];
    },
    
  };
  
  export default nextConfig;
  