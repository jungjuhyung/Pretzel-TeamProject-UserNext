"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import LoadingSpinner from '../../commons/loadingSpinner/page';

import {
    Week_Popular, Week_Title, Week_Poster_Box, PosterWrapper, Poster, RankNumber
} from '@/styles/choi/main/mainWeekCSS';
import { useStores } from '@/stores/StoreContext';
import { useRouter } from 'next/navigation';

const WeekTop = observer(() => {
    const [day_list, setDay_list] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태 추가
    const { movieDetailStore } = useStores();
    const postersPerPage = 5; // 페이지당 포스터 수
    const router = useRouter()

    const API_URL = "/main/";

    useEffect(() => {
        chart_data();
    }, []);

    // 데이터 가져오기
    async function chart_data() {
        setIsLoading(true); // 데이터 로딩 상태로 설정
        try {
            const response = await axios.post(API_URL + "day_list");
            if (response.data) {
                setDay_list(response.data);
                console.log("Top5", response.data);
            }
        } catch (error) {
            console.error('상세 정보 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터 로드 후 로딩 상태 해제
        }
    }

    // 나중에 디테일 페이지 갈때 들고갈 movie_idx
    const handlePosterClick = (movie_idx) => {
        movieDetailStore.setMoiveIdx(movie_idx)
        router.push("/park/detail/detailPage")
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <Week_Popular>
            <Week_Title>오늘의 인기 순위 TOP 5</Week_Title>
            <Week_Poster_Box>
                {day_list.slice(0, postersPerPage).map((k, index) => (
                    <PosterWrapper key={k.movie_idx} onClick={() => handlePosterClick(k.movie_idx)}>
                        {/* 순위 */}
                        <RankNumber>{index + 1}</RankNumber>
                        <Poster src={`https://image.tmdb.org/t/p/w500${k.poster_url}`} />
                    </PosterWrapper>
                ))}
            </Week_Poster_Box>
        </Week_Popular>
    );
});

export default WeekTop;
