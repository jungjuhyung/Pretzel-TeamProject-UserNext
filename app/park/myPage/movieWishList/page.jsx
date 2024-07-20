// 마이페이지 - 보고싶은 리스트
"use client";

import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { useStores } from "@/stores/StoreContext";
import { MoviePoster, MovieTitle, MovieWishListContainer, OneMovieContainer } from "@/styles/park/myPage/movieWishListCSS";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MovieWishList = () => {
    const { loginStore, movieDetailStore, subNavStore } = useStores();
    const router = useRouter();

    // 영화 위시리스트
    const [wishMovies, setWishMovies] = useState([]);

    // 로딩 상태 
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        wishlist()
    }, []);

    const API_URL = "/mypage/"

    // 영화 시청 내역 가져오기
    async function wishlist() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.post(API_URL + "wishlist",
                {
                    profile_idx: loginStore.profile_idx
                },
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                });
            if (response.data) {
                setWishMovies(response.data);
            }
        } catch (error) {
            console.error('위시리스트 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    const onClickWish = (movie_idx) => {
        movieDetailStore.setMoiveIdx(movie_idx)
        router.push("/park/detail/detailPage")
    }

    return (
        <MovieWishListContainer>
            {wishMovies.map((k) => (
                <OneMovieContainer key={k.movie_idx} onClick={() => onClickWish(k.movie_idx)}>
                    <MoviePoster src={`https://image.tmdb.org/t/p/w500/${k.poster_url}`} />
                    <MovieTitle>{k.korea_title}</MovieTitle>
                </OneMovieContainer>
            ))}
        </MovieWishListContainer>
    )
}

export default MovieWishList;