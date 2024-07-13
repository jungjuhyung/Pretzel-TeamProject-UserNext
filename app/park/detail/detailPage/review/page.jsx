"use client";

import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { ColorOrange, HorizenLine } from "@/styles/park/commons/commonsCSS";
import { Inactive, Profile_Image, Report_Btn, ReviewContent_Container, ReviewWriteBtn, Review_Container, Review_Content, Review_TopContent, StarAvg, StarRating, Subtitle, User_Name, Vertical } from "@/styles/park/detailPage/reviewCSS";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReportWrite from "../reportWrite/page";

const Review = () => {
    const router = useRouter();

    // 영화 상세 정보
    const [movieReview, setMovieReview] = useState({ result: [], average: 0 });

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        movie_review_list()
    }, []);

    const API_URL = "/movie/"

    // 영화 리뷰 정보 가져오기
    async function movie_review_list() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "movie_review_list", {
                params: {
                    movie_idx: 22
                }
            });
            if (response.data) {
                setMovieReview(response.data);
            }
        } catch (error) {
            console.error('리뷰 정보 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    // 별점 색상
    const Inactive = ({ children }) => {
        return <span style={{ color: '#3d3d3d' }}>{children}</span>;
    };

    /* // 신고 모달 보이는 여부
    const [reportView, setReportView] = useState(); */

    // 신고 버튼 누르면
    const onClickReport = (review_idx) => {
        /* setReportView(!reportView);
        return (
            <>
                <ReportWrite reportView={!reportView} />
            </>
        ) */
    }

    return (
        <>
            <HorizenLine />
            <Subtitle>리뷰 ({movieReview.result.length})</Subtitle>
            <StarAvg>평균 별점 : <ColorOrange>{movieReview.average}</ColorOrange> <ReviewWriteBtn>리뷰 작성</ReviewWriteBtn></StarAvg>
            {movieReview.result.map((k) => (
                <Review_Container key={k.review_idx}>
                    {/* 이미지 경로 변경하기 */}
                    <Profile_Image src={`https://image.tmdb.org/t/p/w185/${k.img_name}`} />
                    <ReviewContent_Container>
                        <Review_TopContent>
                            <User_Name>{k.name}</User_Name>
                            <StarRating>
                                {k.rating === '5' ? (
                                    '★★★★★'
                                ) : k.rating === '4' ? (
                                    <>
                                        {'★★★★'}<Inactive>★</Inactive>
                                    </>
                                ) : k.rating === '3' ? (
                                    <>
                                        {'★★★'}<Inactive>★★</Inactive>
                                    </>
                                ) : k.rating === '2' ? (
                                    <>
                                        {'★★'}<Inactive>★★★</Inactive>
                                    </>
                                ) : (
                                    <>
                                        {'★'}<Inactive>★★★★</Inactive>
                                    </>
                                )}
                            </StarRating>
                            <Vertical>|</Vertical>
                            <Report_Btn onClick={() => onClickReport(k.review_idx)}>신고하기</Report_Btn>
                        </Review_TopContent>
                        <Review_Content>{k.content}</Review_Content>
                    </ReviewContent_Container>
                </Review_Container>
            ))}
        </>
    )
}

export default Review;