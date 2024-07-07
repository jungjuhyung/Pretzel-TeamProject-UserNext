import styled from "@emotion/styled";

export const Background_layout = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
    position: fixed;
    display: none; /* 처음에는 숨겨두기 */
`;

export const ReviewBox = styled.div`
    background-color: #252525;
    width: 500px;
    height: 460px;
    position: fixed;
    border-radius: 5px;
    left: 50%;
    top: 25%;
    z-index: 99;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ReviewTitle = styled.p`
    font: 600 25px "Pretendard-Regular";
    color: #ffffff;
    margin-bottom: 10px;
`;

export const StarTitle = styled.p`
    font-family: "Pretendard-Regular";
    color: #ffffff;
`;

export const StarRating = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
`;

export const Star = styled.span`
    font-family: '116angduk_honesty15';
    font-size: 50px;
    color: ${props => props.selected ? "#f29a2e" : "#868686"};
    cursor: pointer;
    transition: color 0.1s;
    letter-spacing: 5px;

    &:hover,
    &:hover ~ & {
        color: #f29a2e;
    }
`;

export const Review_Content = styled.textarea`
    font: 17px "Pretendard-Regular";
    margin-top: 7px;
    width: 400px;
    height: 170px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
`

export const SubmitBtn = styled.button`
    margin-top: 20px;
    font: 600 18px "Pretendard-Regular";
    width: 130px;
    height: 50px;
    border-radius: 50px;
    color: #ffffff;
    background-color: #f29a2e;
    border: none;

    &:hover{
        background-color: #ad6e21;
        color: #868686;
    }
`
