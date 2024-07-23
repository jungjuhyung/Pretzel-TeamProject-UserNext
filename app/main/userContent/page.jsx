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
    const [isLoading, setIsLoading] = useState(true);
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [thema, setThema] = useState([]);
    const [selectKeywords, setSelectKeywords] = useState([]);
    const [selectValues, setSelectValues] = useState([]);
    const [selectValueText, setSelectValueText] = useState('');
    const postersPerPage = 5;
    const { loginStore } = useStores();
    const { movieDetailStore } = useStores();
    const router = useRouter();

    useEffect(() => {
        statistics_list();
    }, []);

    async function statistics_list() {
        setIsLoading(true);
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

                setSelectKeywords(response.data.select_keyword || []);
                setSelectValues(response.data.select_value || []);
                
                const selectValue = response.data.select_value || [];
                let selectValueText = '';

                if (selectValue.length === 2) {
                    const [first, second] = selectValue;
                    if (!isNaN(first)) {
                        selectValueText = `현재 ${first}대 ${second === 'man' ? '남성' : second === 'woman' ? '여성' : second}에게 인기있는 영화`;
                    } else if (second === 'man' || second === 'woman') {
                        selectValueText = `현재 ${second === 'man' ? '남성' : '여성'}에게 인기있는 ${first}`;
                    } else {
                        selectValueText = `현재 ${second}대에게 인기있는 ${first}`;
                    }
                }

                setSelectValueText(selectValueText);

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
            setIsLoading(false);
        }
    }

    const handlePosterClick = (movie_idx) => {
        movieDetailStore.setMoiveIdx(movie_idx);
        router.push("/park/detail/detailPage");
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <User_Popular>
            <User_Title>{selectValueText} </User_Title>
                {selectKeywords.map((keyword, index) => (
                    <li key={index}>{keyword}: {selectValues[index]}</li>
                ))}
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
