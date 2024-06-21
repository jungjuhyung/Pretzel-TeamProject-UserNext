/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                //  /api/login 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/login 으로 리 라이트 됩니다.
                source: "/user/:path*",
                destination: "http://localhost:8080/user/:path*",
            },
        ];
    },
};

export default nextConfig;
