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
    rewrites: async () => {
      return [
        {
          source: '/api/:path*',
          destination:
            process.env.NODE_ENV === 'development'
              ? 'http://127.0.0.1:5328/api/:path*'
              : '/api/',
        },
      ]
    },
    
  };
  
  export default nextConfig;
  