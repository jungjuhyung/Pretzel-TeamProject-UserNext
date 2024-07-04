/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                //  /api/user 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/user 으로 리 라이트 됩니다.
                source: "/user/:path*",
                destination: "http://localhost:8080/user/:path*",
            },
            {
                //  /api/toss 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/toss 으로 리 라이트 됩니다.
                source: "/toss/:path*",
                destination: "http://localhost:8080/toss/:path*",
            },
            {
                //  /api/toss 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/toss 으로 리 라이트 됩니다.
                source: "/search/:path*",
                destination: "http://localhost:8080/search/:path*",
            }
        ];
    },
};

export default nextConfig;
