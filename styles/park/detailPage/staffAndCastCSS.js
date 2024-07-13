import styled from "@emotion/styled";

export const Subtitle = styled.h2`
    color: #ffffff;
    font: 600 25px "Pretendard-Regular";
    margin: 50px 0 50px 5%;
`

export const All_Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px 30px;
    width: 90%;
    margin: 0 auto 50px auto;
`

export const Person_Container = styled.div`
    display: flex;
    align-items: center;
`

export const Proifle_Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`

export const PersonInfo_Container = styled.div`
    margin-left: 25px;
`

export const Person_Name = styled.p`
    color: #ffffff;
    font: 16px "Pretendard-Regular";
    margin-bottom: 5px;
`

export const Person_Role = styled.p`
    color: #868686;
    font: 16px "Pretendard-Regular";
`