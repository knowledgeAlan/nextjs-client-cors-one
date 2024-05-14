/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
          {
            source: '/manage-rest/:path*',
            destination: 'http://example.com/manage-rest/:path*', // 这里的 example.com 是 API 的域名
          },
        ];
      },
};

export default nextConfig;
