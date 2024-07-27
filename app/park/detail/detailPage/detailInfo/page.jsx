"use client";

import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { useStores } from "@/stores/StoreContext";
import { Icon24px } from "@/styles/park/commons/commonsCSS";
import { Backdrop, Buttons_Container, Genre, MovieContainer, MovieDetail_Container, MovieDiscription, MovieGrade, MovieInfo_Container, MoviePoster, MovieTitle, PlayBtn, ReleaseYear, RunTime, VerticalLine, WishBtn } from "@/styles/park/detailPage/detailInfoCSS";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReviewWrite from "../reviewWrite/page";

const DetailInfo = () => {
    const router = useRouter();
    const { loginStore, movieDetailStore } = useStores();

    // 영화 상세 정보
    const [movieDetail, setMovieDetail] = useState({});

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 위시리스트 여부
    const [isAdd, setIsAdd] = useState(0);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        movie_detail();
        wish_check();
    }, []);


    const API_URL = "/movie/"
    const API_URL_2 = "/moviedetail/"
    const API_URL_3 = "/profile/"

    // 영화 상세 정보 가져오기
    async function movie_detail() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "movie_detail", {
                params: {
                    movie_idx: movieDetailStore.movie_idx
                }
            });
            if (response.data) {
                setMovieDetail(response.data);
            }
        } catch (error) {
            console.error('상세 정보 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 위시리스트 여부 확인
    async function wish_check() {
        try {
            const response = await axios.post(API_URL_2 + "wish/wishChk", {
                profile_idx: loginStore.profile_idx,
                movie_idx: movieDetailStore.movie_idx
            });

            // 1 = 위시리스트에 존재
            if (response.data === 0) {
                setIsAdd(0)
            } else {
                setIsAdd(1)
            }
        } catch (error) {
            console.error('정보 가져오기 실패 : ', error);
        }
    }

    // 위시리스트 추가하기
    async function onClickWish() {
        try {
            const response = await axios.post(API_URL_2 + "wish/add",
                {
                    profile_idx: loginStore.profile_idx
                },
                {
                    params: {
                        movie_idx: movieDetailStore.movie_idx
                    }
                });
            if (response.data === 1) {
                alert("보고싶은 리스트에 추가가 완료되었습니다.")
                setIsAdd(1);
            } else {
                alert("리스트 추가에 실패했습니다..\n다시 시도해 주세요.")
            }
        } catch (error) {
            console.error('리스트 추가 실패 : ', error);
        }
    }

    // 위시리스트 삭제하기
    async function onClickDeleteWish() {
        try {
            const response = await axios.post(API_URL_2 + "wish/delete",
                {
                    profile_idx: loginStore.profile_idx
                },
                {
                    params: {
                        movie_idx: movieDetailStore.movie_idx
                    }
                });
            if (response.data === 1) {
                alert("보고싶은 리스트에서 제거되었습니다.")
                setIsAdd(0);
            } else {
                alert("리스트 삭제에 실패했습니다.\n다시 시도해 주세요.")
            }
        } catch (error) {
            console.error('리스트 삭제 실패 : ', error);
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    // 영화 재생 버튼 누르기
    async function onClickPlay() {
        try {
            const response = await axios.post(API_URL_3 + "profile_detail",
                {
                    profile_idx: loginStore.profile_idx
                },
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                }
            );

            if (!loginStore.isLogin) {
                alert("로그인 후 이용 가능합니다.")
                router.push("/choi/login/loginPage")
            } else if (response.data.subs === null) {
                alert("구독권 구매 후 이용 가능합니다.")
                router.push("/toss/subscriptionPage")
            } else {
                router.push("/park/detail/moviePlayPage")
            }
        } catch (error) {
            console.error('프로필 정보 가져오기 실패 : ', error);
        }
    }

    // 위시리스트 여부 확인에 따른 버튼
    const wish_state = () => {
        if (isAdd === 1) {
            return (
                <WishBtn onClick={onClickDeleteWish}><Icon24px src="/images/icons/check_orange.png" /> 보고싶어요</WishBtn>
            )
        } else {
            // 로그인 여부에 따라서 alert창 띄우기
            if (loginStore.isLogin) {
                return (
                    <WishBtn onClick={onClickWish}><Icon24px src="/images/icons/add_white.png" /> 보고싶어요</WishBtn>
                )
            } else {
                return (
                    <WishBtn onClick={onClickWish_notLogin}><Icon24px src="/images/icons/add_white.png" /> 보고싶어요</WishBtn>
                )
            }
        }
    }

    const onClickWish_notLogin = () => {
        alert("로그인 후 이용 가능합니다.")
        router.push("/choi/login/loginPage")
    }

    return (
        <>
            <Backdrop src={`https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_url}`} />
            <MovieDetail_Container>
                <MovieContainer>
                    <MovieTitle>{movieDetail.korea_title}</MovieTitle>

                    <MovieInfo_Container>
                        <MovieGrade
                            src={movieDetail.movie_grade === '18' || movieDetail.movie_grade === '19'
                                ? '/images/movieGrade/grade_19.png'
                                : movieDetail.movie_grade === '15'
                                    ? '/images/movieGrade/grade_15.png'
                                    : movieDetail.movie_grade === '12'
                                        ? '/images/movieGrade/grade_12.png'
                                        : movieDetail.movie_grade === ''
                                            ? '/images/movieGrade/grade_none.png'
                                            : '/images/movieGrade/grade_all.png'} />
                        <VerticalLine>|</VerticalLine>
                        <ReleaseYear>{movieDetail.release_date.slice(0, 4)}</ReleaseYear>
                        <VerticalLine>|</VerticalLine>
                        <RunTime>{movieDetail.runtime}분</RunTime>
                        <VerticalLine>|</VerticalLine>
                        <Genre>{movieDetail.thema}</Genre>
                    </MovieInfo_Container>

                    <Buttons_Container>
                        <PlayBtn onClick={onClickPlay}><Icon24px src="/images/icons/play.png" /> 재생</PlayBtn>
                        {wish_state()}
                    </Buttons_Container>

                    <MovieDiscription>
                        {movieDetail.synopsis}
                    </MovieDiscription>
                </MovieContainer>

                <MoviePoster src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_url}`} />
            </MovieDetail_Container>
        </>
    )
}

export default DetailInfo;