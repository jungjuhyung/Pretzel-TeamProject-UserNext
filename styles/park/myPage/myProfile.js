import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
    max-width: 850px;
    max-height: 350px;
    border-radius: 5px;
    background-color: #1e1e1e;
    margin: 0 auto;
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
    flex-direction: row;
`;

export const UserName = styled.p`
    font-size: 50px;
    color: #ffffff;
    font-family: "Pretendard-Regular";
    font-weight: 600;
`;

export const ProfileManageButton = styled.button`
    font-family: "Pretendard-Regular";
    font-size: 17px;
    width: 109px;
    height: 35px;
    background-color: #3d3d3d;
    color: #ffffff;
    border-radius: 5px;
`;
