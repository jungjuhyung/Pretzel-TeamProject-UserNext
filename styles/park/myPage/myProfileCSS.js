import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
    max-width: 600px;
    max-height: 250px;
    border-radius: 5px;
    background-color: #1e1e1e;
    margin: 0 auto;
    display: flex;
`;

export const ProfileImg = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    margin: 40px 0 40px 42px;
    object-fit: cover;
`;

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    margin: auto 0 auto 20px;
`;

export const UserName = styled.p`
    font-size: 35px;
    color: #ffffff;
    font-family: "Pretendard-Regular";
    font-weight: 600;
`;

export const ProfileManageBtn = styled.button`
    font-family: "Pretendard-Regular";
    font-size: 15px;
    width: 90px;
    height: 30px;
    background-color: #3d3d3d;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    margin-left: 10px;

    &:hover{
        background-color: black;
        color: #868686;
        cursor: pointer;
    }
`;

export const EditSubscriptionBtn = styled.button`
    font-family: "Pretendard-Regular";
    font-size: 15px;
    width: 115px;
    height: 30px;
    background-color: #3d3d3d;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    margin-left: 10px;

    &:hover{
        background-color: black;
        color: #868686;
        cursor: pointer;
    }
`;

export const SubscriptionInfo = styled.p`
    font-family: "Pretendard-Regular";
    font-size: 15px;
    color: #868686;
    margin-left: 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 0;
`;