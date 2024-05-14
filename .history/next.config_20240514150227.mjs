/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/test',

    async rewrites() {
        return [
          {
            source: '/manage-rest/:path*',
            destination: 'https://merchant-stage.uniwebpay.com/manage-rest/:path*', 
            basePath: false,// 这里的 example.com 是 API 的域名
          },
        ];
      },
};

export default nextConfig;
