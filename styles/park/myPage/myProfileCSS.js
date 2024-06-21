import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
    max-width: 850px;
    max-height: 350px;
    border-radius: 5px;
    background-color: #1e1e1e;
    margin: 57px auto 0 auto;
    display: flex;
`;

export const ProfileImg = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin: 50px 0 50px 73px;
`;

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    margin: auto 0 auto 46px;
`;

export const UserName = styled.p`
    font-size: 50px;
    color: #ffffff;
    font-family: "Pretendard-Regular";
    font-weight: 600;
`;

export const ProfileManageBtn = styled.button`
    font-family: "Pretendard-Regular";
    font-size: 17px;
    width: 109px;
    height: 35px;
    background-color: #3d3d3d;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
`;

export const EditSubscriptionBtn = styled.button`
    font-family: "Pretendard-Regular";
    font-size: 17px;
    width: 139px;
    height: 35px;
    background-color: #3d3d3d;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
`;

export const SubscriptionInfo = styled.p`
    font-family: "Pretendard-Regular";
    font-size: 20px;
    color: #868686;
    margin-left: 10px;
`;

export const EditUserInfoBtn = styled.p`
    font-family: "Pretendard-Regular";
    font-size: 20px;
    color: #ffffff;
    margin-left: 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 0;
`;