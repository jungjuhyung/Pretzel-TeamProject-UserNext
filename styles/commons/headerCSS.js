import styled from "@emotion/styled";

export const HeadeContainer = styled.div`
    position: fixed; /* 고정된 위치 */
    background-color: transparent;
    width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 30px 40px 0 40px;
`;

export const HeaderLeft = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 550px;
`;

export const HeaderRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 200px;
`;

export const Title = styled.li`
    color: #f29a2e;
    font-family: rubik one;
    font-size: 35px;
    &:hover {
        color: #ad6e21;
    }
`;

export const Menus = styled.li`
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
    font-size: 16px;
`;

export const SignUpBtn = styled.button`
    font-family: "Pretendard-Regular";
    background-color: #f29a2e;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    width: 80px;
    height: 35px;
    font-size: 16px;
`;
