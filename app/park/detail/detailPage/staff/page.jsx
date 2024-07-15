"use client";

import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { useStores } from "@/stores/StoreContext";
import { HorizenLine } from "@/styles/park/commons/commonsCSS";
import { All_Container, PersonInfo_Container, Person_Container, Person_Name, Person_Role, Proifle_Img, Subtitle } from "@/styles/park/detailPage/staffAndCastCSS";
import axios from "axios";
import { useEffect, useState } from "react";

const Staff = () => {
    const { loginStore, movieDetailStore } = useStores();

    // 영화 스태프 정보
    const [staff, setStaff] = useState([]);

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        crew_list()
    }, []);

    const API_URL = "/movie/"

    // 영화 상세 정보 가져오기
    async function crew_list() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "crew_list", {
                params: {
                    movie_idx: movieDetailStore.movie_idx
                }
            });
            if (response.data) {
                setStaff(response.data);
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
            <Subtitle>스태프</Subtitle>
            <All_Container>
                {staff.map((k) => (
                    <Person_Container key={k.crew_idx}>
                        <Proifle_Img src={!k.crew_img ? "/images/samples/default_profile.png" : `https://image.tmdb.org/t/p/w185/${k.crew_img}`} />
                        <PersonInfo_Container>
                            <Person_Name>{k.crew_name}</Person_Name>
                            <Person_Role>{k.job === 'Director' ? '감독' : '프로듀서'}</Person_Role>
                        </PersonInfo_Container>
                    </Person_Container>
                ))}
            </All_Container>
        </>
    )
}

export default Staff;