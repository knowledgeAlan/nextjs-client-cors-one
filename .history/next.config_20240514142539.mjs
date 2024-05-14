/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://example.com/api/:path*', // 这里的 example.com 是 API 的域名
          },
        ];
      },
};

export default nextConfig;
