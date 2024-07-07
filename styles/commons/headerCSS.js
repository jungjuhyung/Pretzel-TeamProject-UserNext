import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    padding: 30px 40px 30px 40px;
    background-color: #0D0D0D;
    z-index: 99;
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
        cursor: pointer;
    }
`;

export const Menus = styled.li`
    color: #ffffff;
    
    &:hover {
        color: #868686;
        cursor: pointer;
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

    &:hover {
        background-color: #1D1D1D;
        color: #868686;
        cursor: pointer;
    }
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

    &:hover {
        background-color: #ad6e21;
        color: #868686;
        cursor: pointer;
    }
`;

export const Whitespace = styled.div`
    width: 100%;
    height: 100px;
`;

export const SearchIcon = styled.img`
    width: 24px;
    height: 24px;

    &:hover {
        cursor: pointer;
    }
`