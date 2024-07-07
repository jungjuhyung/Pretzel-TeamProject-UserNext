"use client";

import { useState } from "react";
import { Background_layout, ReviewTitle, StarTitle, StarRating, Star, ReviewBox, Review_Content, SubmitBtn } from "@/styles/park/detailPage/reviewWriteCSS";

const ReviewWrite = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <>
            <Background_layout>
                <ReviewBox>
                    <ReviewTitle>리뷰쓰기</ReviewTitle>
                    <StarTitle>별점을 선택해 주세요</StarTitle>
                    <StarRating>
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                                <Star
                                    key={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(0)}
                                    selected={ratingValue <= (hover || rating)}
                                >
                                    &#9733;
                                </Star>
                            );
                        })}
                    </StarRating>
                    <Review_Content
                        placeholder="리뷰 내용을 입력해 주세요." />
                    <SubmitBtn>등록</SubmitBtn>
                </ReviewBox>
            </Background_layout>
        </>
    )
}

export default ReviewWrite;