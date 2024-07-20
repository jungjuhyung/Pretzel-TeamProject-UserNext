"use client";

import { useState } from "react";
import { Background_layout, ReviewTitle, StarTitle, StarRating, Star, ReviewBox, Review_Content, SubmitBtn, Textlength } from "@/styles/park/detailPage/reviewWriteCSS";
import { useStores } from "@/stores/StoreContext";
import axios from "axios";

const ReviewWrite = ({ setReview, handleAddReview }) => {
    const { loginStore, movieDetailStore } = useStores();

    // 리뷰 내용
    const [reviewContent, setReviewContent] = useState("");

    // 별점
    const [rating, setRating] = useState(0);

    const [hover, setHover] = useState(0);

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            setReview(false);
        }
    };

    // 리뷰 내용 작성 onChange
    const onChangeContent = (e) => {
        setReviewContent(e.target.value)
        const textCount = e.target.value.length;
        document.getElementById('target').innerText = textCount;

        if (textCount > 200) {
            alert("200자 이상 작성이 불가능합니다.");
            setQuestionContent(e.target.value.substring(0, 200));
            document.getElementById('target').innerText = 200;
        }
    }

    const API_URL = "/moviedetail/"

    // 리뷰 추가하기
    async function review_add() {
        if (reviewContent === "" && rating === 0) {
            alert("리뷰 내용과 별점을 입력해 주세요.")
            return
        } else if (rating === 0) {
            alert("별점을 입력해 주세요.")
            return
        } else if (reviewContent === "") {
            alert("리뷰의 내용을 작성해 주세요.")
            return
        } else {
            try {
                const response = await axios.post(API_URL + "review/add",
                    {
                        profile_idx: loginStore.profile_idx,
                        movie_idx: movieDetailStore.movie_idx,
                        rating: rating,
                        content: reviewContent
                    });
                if (response.data === 1) {
                    alert("리뷰 작성이 완료되었습니다.")
                    handleAddReview()
                    setReview(false);
                } else {
                    alert("리뷰 작성을 다시 시도해 주세요.")
                }
            } catch (error) {
                console.error('리뷰 작성 실패 : ', error);
            }
        }
    }

    return (
        <>
            <Background_layout onClick={handleBackgroundClick}>
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
                        placeholder="리뷰 내용을 입력해 주세요."
                        onChange={onChangeContent}
                        maxLength={200} />
                    <Textlength>
                        <span id='target'>0</span>/200
                    </Textlength>
                    <SubmitBtn onClick={review_add}>등록</SubmitBtn>
                </ReviewBox>
            </Background_layout>
        </>
    )
}

export default ReviewWrite;