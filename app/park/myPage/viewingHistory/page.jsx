// 마이페이지 - 시청 내역
"use client";

import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { useStores } from "@/stores/StoreContext";
import { MovieThumbnail, MovieTitle, OneMovieContainer, ViewingDate, ViewingHistoryContainer } from "@/styles/park/myPage/viewingHistoryCSS";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ViewingHistory = () => {
    const { loginStore, movieDetailStore, subNavStore } = useStores();
    const router = useRouter();

    // 영화 시청 내역
    const [watchHistory, setWatchHistory] = useState([]);

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        watchlist()
    }, []);

    const API_URL = "/mypage/"

    // 영화 시청 내역 가져오기
    async function watchlist() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.post(API_URL + "watchlist",
                {
                    profile_idx: loginStore.profile_idx
                },
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                });
            if (response.data) {
                setWatchHistory(response.data);
            }
        } catch (error) {
            console.error('시청내역 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    const onClickMovie = (movie_idx) => {
        movieDetailStore.setMoiveIdx(movie_idx)
        router.push("/park/detail/detailPage")
    }


    return (
        <ViewingHistoryContainer>
            {watchHistory.map((k) => (
                <OneMovieContainer key={k.movie_idx} onClick={() => onClickMovie(k.movie_idx)}>
                    <MovieThumbnail src={`https://image.tmdb.org/t/p/w780/${k.backdrop_url}`} />
                    <MovieTitle>{k.korea_title}</MovieTitle>
                    <ViewingDate>{k.watch_date.slice(0, 10)} 시청</ViewingDate>
                </OneMovieContainer>
            ))}
        </ViewingHistoryContainer>
    )
}

export default ViewingHistory;