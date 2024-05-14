/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/test',

    async rewrites() {
        return [
          {
            source: '/test/manage-rest/:path*',
            destination: 'https://merchant-stage.uniwebpay.com/test/manage-rest/:path*', // 这里的 example.com 是 API 的域名
          },
        ];
      },
};

export default nextConfig;
