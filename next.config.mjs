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
                //  /api/profile 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/profile 으로 리 라이트 됩니다.
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
                //  /api/search 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/search 으로 리 라이트 됩니다.
                source: "/search/:path*",
                destination: "http://localhost:8080/search/:path*",
            },
            {
                //  /api/main 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/main 으로 리 라이트 됩니다.
                source: "/main/:path*",
                destination: "http://localhost:8080/main/:path*",
            },
            {
                //  /api/movie 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/movie 으로 리 라이트 됩니다.
                source: "/movie/:path*",
                destination: "http://localhost:8080/movie/:path*",
            },
            {
                //  /api/moviedetail 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/moviedetail 으로 리 라이트 됩니다.
                source: "/moviedetail/:path*",
                destination: "http://localhost:8080/moviedetail/:path*",
            },
            {
                //  /api/mypage 으로 시작되는 모든 요청
                //  SpringBoot 의 /api/mypage 으로 리 라이트 됩니다.
                source: "/mypage/:path*",
                destination: "http://localhost:8080/mypage/:path*",
            }
        ];
    },
    transpilePackages: ['@mui/x-charts'],
    env: {
        GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    },
};

export default nextConfig;
