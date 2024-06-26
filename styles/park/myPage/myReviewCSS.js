import styled from "@emotion/styled";

export const MyReviewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 30px 10px;
    margin: 0 5%;
`

export const Cards = styled.div`
    overflow: hidden; 
    transform: scale(1.0); 
    transition: transform .5s;

    &:hover {
        transform: scale(1.2);
        transition: transform .5s ease;
        z-index: 2;
    }
`

export const Background = styled.img` 
    max-width: 200px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    border-radius: 5px;

    &:hover {
        filter: brightness(50%);
        transition: filter .5s;
    }
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
`

export const Inactive = styled.span`
    color: #3d3d3d;
`