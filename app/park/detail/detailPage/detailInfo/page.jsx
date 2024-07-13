"use client";

import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { Icon24px } from "@/styles/park/commons/commonsCSS";
import { Backdrop, Buttons_Container, Genre, MovieContainer, MovieDetail_Container, MovieDiscription, MovieGrade, MovieInfo_Container, MoviePoster, MovieTitle, PlayBtn, ReleaseYear, RunTime, VerticalLine, WishBtn } from "@/styles/park/detailPage/detailInfoCSS";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DetailInfo = () => {
    const router = useRouter();

    // 영화 상세 정보
    const [movieDetail, setMovieDetail] = useState({});

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        movie_detail()
    }, []);

    const API_URL = "/movie/"

    // 영화 상세 정보 가져오기
    async function movie_detail() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "movie_detail", {
                params: {
                    movie_idx: 22
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

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    // 영화 재생 버튼 누르기
    const onClickPlay = () => {
        router.push("/park/detail/moviePlayPage")
    }

    // 위시리스트 추가
    const onClickWish = () => {
    }

    return (
        <>
            <Backdrop src={`https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_url}`} />
            <MovieDetail_Container>
                <MovieContainer>
                    <MovieTitle>{movieDetail.korea_title}</MovieTitle>

                    <MovieInfo_Container>
                        <MovieGrade
                            src={movieDetail.grade === '18'
                                ? '/images/movieGrade/grade_12.png'
                                : movieDetail.grade === '15'
                                    ? '/images/movieGrade/grade_15.png'
                                    : movieDetail.grade === '12'
                                        ? '/images/movieGrade/grade_18.png'
                                        : movieDetail.grade === ''
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
                        <WishBtn onClick={onClickWish}><Icon24px src="/images/icons/add_white.png" /> 보고싶어요</WishBtn>
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