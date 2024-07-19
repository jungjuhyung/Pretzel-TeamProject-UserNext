"use client"

import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '@/styles/commons/commons.css'

import { Subtitle, Video } from "@/styles/park/moviePlayPageCSS";
import axios from 'axios';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/app/commons/loadingSpinner/page';
import { useStores } from '@/stores/StoreContext';

const MoviePlayPage = () => {
    const { loginStore, movieDetailStore, profileStore } = useStores();

    // 영화 재생 정보
    const [moviePlay, setMoviePlay] = useState({});

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        movie_detail()
    }, []);

    const API_URL = "/movie/"
    const API_URL_2 = "/profile/"

    // 영화 재생 정보 가져오기
    async function movie_detail() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "movie_detail", {
                params: {
                    movie_idx: movieDetailStore.movie_idx
                }
            });

            if (response.data) {
                setMoviePlay(response.data);
            }

            // 영화 시청자 프로필 가져오기
            const response2 = await axios.post(API_URL_2 + "profile_detail",
                {
                    profile_idx: loginStore.profile_idx
                },
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                }
            );

            // 영화 시청자 데이터
            const response3 = await axios.get(API_URL + "watch_movie", {
                params: {
                    gender: response2.data.gender,
                    age: response2.data.age,
                    movie_idx: movieDetailStore.movie_idx,
                    profile_idx: loginStore.profile_idx
                }
            });
        } catch (error) {
            console.error('상세 정보 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <>
            <Video
                src={`https://storage.googleapis.com/pretzel-movie/${moviePlay.movie_url}`}
                controls
                autoPlay
                muted>
                <Subtitle kind="subtitles" src={`https://storage.googleapis.com/pretzel-movie/${moviePlay.subtitle_url}`} srclang="ko" label="한국어" default></Subtitle>
            </Video>
        </>
    )
}

export default MoviePlayPage;