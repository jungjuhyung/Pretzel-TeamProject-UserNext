"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import LoadingSpinner from '../../commons/loadingSpinner/page';
import { useStores } from '@/stores/StoreContext';

import {
    User_Popular, User_Title, User_Poster_Box, PosterWrapper, Poster, RankNumber
} from '@/styles/choi/main/mainUserContent';

const UserContent = observer(() => {
    const [user_list, setUser_list] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태 추가
    const postersPerPage = 5; // 페이지당 포스터 수
    const { loginStore, profileStore } = useStores([]);

    const API_URL = "/main/";

    useEffect(() => {
        chart_data();
    }, []);

    // 데이터 가져오기
    async function chart_data() {
        console.log("프로필 생년월일 : " + profileStore.profileDetail.birth);
        console.log("프로필 성별 : " + profileStore.profileDetail.gender);
        console.log("프로필 선호 장르 : " + profileStore.profileDetail.like_thema);
        setIsLoading(true); // 데이터 로딩 상태로 설정
        try {
            const profileInfo = await axios.post("/profile/profile_detail",{
                "profile_idx":loginStore.profile_idx
            });
            const response = await axios.post("/main/statistics_list",{
                "age":profileInfo.data.age,
                "gender":profileInfo.data.gender,
                "like_thema":profileInfo.data.like_thema
            });

            if (response.data) {
                setUser_list(response.data.movie_result);
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
        console.log('Clicked poster index:', movie_idx);
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <User_Popular>
            <User_Title>유저 추천 리스트</User_Title>
            <User_Poster_Box>
                {user_list.slice(0, postersPerPage).map((k, index) => (
                    <PosterWrapper key={k.movie_idx} onClick={() => handlePosterClick(k.movie_idx)}>
                        {/* 순위 */}
                        <RankNumber>{index + 1}</RankNumber>
                        <Poster src={`https://image.tmdb.org/t/p/w500${k.poster_url}`} />
                    </PosterWrapper>
                ))}
            </User_Poster_Box>
        </User_Popular>
    );
});

export default UserContent;
