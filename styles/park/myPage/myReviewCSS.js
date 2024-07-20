import styled from "@emotion/styled";

export const MyReviewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 30px 20px;
    margin: 0 5%;
    position: relative;
`

export const Cards = styled.div`
    position: relative;
`

export const ReviewContent = styled.p`
    font: 13px "Pretendard-Regular";
    color: #ffffff;
    z-index: 2;
    position: absolute;
    top: 35px;
    left: 20px;
    right: 20px;
    bottom: 35px;
    line-height: 1.5;
    max-width: 160px;
    height: 230px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 12; /* 최대 줄 수를 설정 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Background = styled.img` 
    max-width: 200px;
    width: 100%;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
    z-index: 1;
    filter: brightness(40%);
`

export const MovieTitle = styled.p`
    font-family: "Pretendard-Regular";
    font-size: 15px;
    color: #FFFFFF;
    margin: 10px 0 5px 0;
`

export const StarRating = styled.div`
    font-family: '116angduk_honesty15';
    font-size: 20px;
    color: #f29a2e;
    margin-bottom: 10px;
    letter-spacing: 2px;
`