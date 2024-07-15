import styled from "@emotion/styled";

export const Subtitle = styled.h2`
    color: #ffffff;
    font: 600 25px "Pretendard-Regular";
    margin: 50px 0 10px 5%;
`

export const StarAvg = styled.div`
    color: #ffffff;
    font: 16px "Pretendard-Regular";
    margin: 0 0 30px 5%;
`

export const ReviewWriteBtn = styled.button`
    border: none;
    border-radius: 50px;
    color: #ffffff;
    font: 16px "Pretendard-Regular";
    background-color: #f29a2e;
    margin-left: 15px;
    width: 90px;
    height: 30px;

    &:hover {
        cursor: pointer;
    }
`

export const Review_Container = styled.div`
    display: flex;
    margin: 0 0 20px 5%;
    align-items: center;
    font: 17px "Pretendard-Regular";
`

export const Profile_Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`

export const ReviewContent_Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 80vw
`

export const Review_TopContent = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`

export const User_Name = styled.p`
    color: #ffffff;
    margin-right: 7px;
`

export const StarRating = styled.p`
    font: 20px '116angduk_honesty15';
    color: #f29a2e;
    margin-right: 7px;
    letter-spacing: 2px;
`

export const Vertical = styled.p`
    color: #ffffff;
`

export const Report_Btn = styled.button`
    border: none;
    color: #ffffff;
    font: 16px "Pretendard-Regular";
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`

export const Review_Content = styled.p`
    color: #868686;
    max-width: 1700px;
    width: 100%;
`

export const MoreBtn = styled.button`
    border: none;
    color: #ffffff;
    font: 16px "Pretendard-Regular";
    background-color: #3d3d3d;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    margin: 0 auto;

    &:hover {
        background-color: #1e1e1e;
        cursor: pointer;
    }
`