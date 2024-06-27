// 마이페이지 - 리뷰
"use client";

import { OneMovieContainer } from "@/styles/park/myPage/movieWishListCSS";
import { Background, Cards, Inactive, MovieTitle, MyReviewContainer, StarRating } from "@/styles/park/myPage/myReviewCSS";

const MyReview = () => {
    return (
        <>
            <MyReviewContainer>
                <OneMovieContainer>
                    <Cards>
                        <Background src='/images/samples/moviePoster.jpg'></Background>
                    </Cards>
                    <MovieTitle>불량공주 모모코</MovieTitle>
                    <StarRating>★★★★<Inactive>★</Inactive></StarRating>
                </OneMovieContainer>
                <OneMovieContainer>
                    <Cards>
                        <Background src='/images/samples/moviePoster.jpg'></Background>
                    </Cards>
                    <MovieTitle>불량공주 모모코</MovieTitle>
                    <StarRating>★★★<Inactive>★★</Inactive></StarRating>
                </OneMovieContainer>
                <OneMovieContainer>
                    <Cards>
                        <Background src='/images/samples/moviePoster.jpg'></Background>
                    </Cards>
                    <MovieTitle>불량공주 모모코</MovieTitle>
                    <StarRating>★★★★★</StarRating>
                </OneMovieContainer>
            </MyReviewContainer>
        </>
    )
}

export default MyReview;