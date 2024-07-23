"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import LoadingSpinner from '../../commons/loadingSpinner/page';

import { User_Popular, User_Title, User_Poster_Box, PosterWrapper, Poster, Movie_Title } from '@/styles/choi/main/mainUserContent';
import { useStores } from '@/stores/StoreContext';
import { useRouter } from 'next/navigation';

const UserContent = observer(() => {
    const [user_list, setUser_list] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태 추가
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [thema, setThema] = useState([]);
    const postersPerPage = 5; // 페이지당 포스터 수
    const { loginStore } = useStores();
    const { movieDetailStore } = useStores();
    const router = useRouter();

    useEffect(() => {
        statistics_list();
    }, []);

    // 데이터 가져오기
    async function statistics_list() {
        setIsLoading(true); // 데이터 로딩 상태로 설정
        try {
            const profileInfo = await axios.post("/profile/profile_detail", {
                "profile_idx": loginStore.profile_idx
            });
            const response = await axios.post("/main/statistics_list", {
                "age": profileInfo.data.age,
                "gender": profileInfo.data.gender,
                "like_thema": profileInfo.data.like_thema
            });
            if (response.data) {
                setUser_list(response.data.movie_result);
                console.log(profileInfo.data.age);
                console.log(profileInfo.data.gender);
                console.log(profileInfo.data.like_thema);

                const age = profileInfo.data.age;
                const gender = profileInfo.data.gender;
                const thema = profileInfo.data.like_thema;
                let userAge = '';
                let userGender = '';

                if (age >= 10 && age <= 19) {
                    userAge = '10';
                } else if (age >= 20 && age <= 29) {
                    userAge = '20';
                } else if (age >= 30 && age <= 39) {
                    userAge = '30';
                } else if (age >= 40 && age <= 49) {
                    userAge = '40';
                } else if (age >= 50 && age <= 59) {
                    userAge = '50';
                } else if (age >= 60 && age <= 69) {
                    userAge = '60';
                } else if (age >= 70 && age <= 79) {
                    userAge = '70';
                } else if (age >= 80 && age <= 89) {
                    userAge = '80';
                } else if (age >= 90 && age <= 99) {
                    userAge = '90';
                }

                if (gender === '0') {
                    userGender = '여성';
                } else {
                    userGender = '남성';
                }

                setAge(userAge);
                setGender(userGender);
                setThema(thema);
            }
        } catch (error) {
            console.error('정보 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터 로드 후 로딩 상태 해제
        }
    }

    // 나중에 디테일 페이지 갈때 들고갈 movie_idx
    const handlePosterClick = (movie_idx) => {
        movieDetailStore.setMoiveIdx(movie_idx);
        router.push("/park/detail/detailPage");
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <User_Popular>
            <User_Title>현재 {age}대 {gender}에게 인기있는 {thema.join(',')} </User_Title>
            <User_Poster_Box>
                {user_list.slice(0, postersPerPage).map((k) => (
                    <PosterWrapper key={k.movie_idx} onClick={() => handlePosterClick(k.movie_idx)}>
                        <Poster src={`https://image.tmdb.org/t/p/w500${k.poster_url}`} className="poster-image" />
                        <Movie_Title className="poster-title">
                            {k.korea_title}
                        </Movie_Title>
                    </PosterWrapper>
                ))}
            </User_Poster_Box>
        </User_Popular>
    );
});

export default UserContent;
