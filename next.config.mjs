/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
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
                //  /api/user 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/user 으로 리 라이트 됩니다.
                source: "/profile/:path*",
                destination: "http://localhost:8080/profile/:path*",
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
            },
            {
                //  /api/toss 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/toss 으로 리 라이트 됩니다.
                source: "/main/:path*",
                destination: "http://localhost:8080/main/:path*",
            },
            {
                //  /api/movie 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/movie 으로 리 라이트 됩니다.
                source: "/movie/:path*",
                destination: "http://localhost:8080/movie/:path*",
            }
        ];
    },
};

nextConfig.transpilePackages = ['@mui/x-charts'];

export default nextConfig;
