import styled from "@emotion/styled";

export const SubNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 30px auto 47px auto;
`;

export const Menus = styled.p`
    font-family: "Pretendard-Regular";
    font-weight: 600;
    font-size: 17px;
    height: 51px;
    line-height: 51px;
    color: #868686;

    &:hover {
        color: #ffffff;
        border-bottom: 2px solid #ffffff;
    }
`;
