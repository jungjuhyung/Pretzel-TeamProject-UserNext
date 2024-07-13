"use client";

import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { HorizenLine } from "@/styles/park/commons/commonsCSS";
import { All_Container, PersonInfo_Container, Person_Container, Person_Name, Person_Role, Proifle_Img, Subtitle } from "@/styles/park/detailPage/staffAndCastCSS";
import axios from "axios";
import { useEffect, useState } from "react";

const Cast = () => {
    // 영화 출연진 정보
    const [cast, setCast] = useState([]);

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        cast_list()
    }, []);

    const API_URL = "/movie/"

    // 영화 상세 정보 가져오기
    async function cast_list() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "cast_list", {
                params: {
                    movie_idx: 22
                }
            });
            if (response.data) {
                setCast(response.data);
            }
        } catch (error) {
            console.error('스태프 정보 가져오기 실패 : ', error);
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
            <HorizenLine />
            <Subtitle>출연진</Subtitle>
            <All_Container>
                {cast.map((k) => (
                    <Person_Container key={k.cast_idx}>
                        <Proifle_Img src={`https://image.tmdb.org/t/p/w185/${k.cast_img}`} />
                        <PersonInfo_Container>
                            <Person_Name>{k.cast_name}</Person_Name>
                            <Person_Role>{k.role}</Person_Role>
                        </PersonInfo_Container>
                    </Person_Container>
                ))}
            </All_Container>
        </>
    )
}

export default Cast;