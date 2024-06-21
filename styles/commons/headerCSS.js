import styled from "@emotion/styled";

export const HeadeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 40px 0 40px;
`;

export const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 574px;
`;

export const HeaderRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 210px;
`;

export const Title = styled.p`
    color: #f29a2e;
    font-family: rubik one;
    font-size: 40px;
    &:hover {
        color: #ad6e21;
    }
`;

export const Menus = styled.p`
    color: #ffffff;

    &:hover {
        color: #868686;
    }
`;

export const LoginBtn = styled.button`
    font-family: "Pretendard-Regular";
    background-color: #3d3d3d;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    width: 65px;
    height: 35px;
    font-size: 17px;
`;

export const SignUpBtn = styled.button`
    font-family: "Pretendard-Regular";
    background-color: #f29a2e;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    width: 80px;
    height: 35px;
    font-size: 17px;
`;
