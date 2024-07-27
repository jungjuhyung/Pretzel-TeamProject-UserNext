import styled from "@emotion/styled";

export const Icon20px = styled.img`
    width: 20px;
    height: 20px;
`;

export const Icon24px = styled.img`
    width: 24px;
    height: 24px;
`;

export const Icon30px = styled.img`
    width: 30px;
    height: 30px;
`;

export const ColorOrange = styled.span`
    color: #f29a2e;
`;

export const ColorGray = styled.span`
    color: #868686;
`;

export const ColorGreen = styled.span`
    color: green;
`;

export const ColorRed = styled.span`
    color: red;
`;

export const HorizenLine = styled.hr`
    width: 90%;
    border: 1px solid #363636;
    box-sizing: border-box;
    margin: 0 auto;
`

export const TopButton = styled.button`
    display: block; /* 처음에는 숨겨둔다. */
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    background-color: #3d3d3d;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    line-height: 60px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

    &:hover{
        background-color: #868686;
    }
`

export const LogoutButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    font: 16px "Pretendard-Regular";
    background-color: #f29a2e;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    width: 80px;
    height: 35px;

    &:hover {
        background-color: #ad6e21;
    }
`;

export const Loading = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Empty_Data = styled.div`
    color: #ffffff;
    font: 600 20px "Pretendard-Regular";
    text-align: center;
    margin-top: 100px;
`

export const Pagings = styled.ol`
    font-family: "Pretendard-Regular";
    color: #ffffff;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: center;
`

export const Page = styled.span`
    margin: 0 15px;

    &:hover {
        color: #868686;
        cursor: pointer;
    }
`

export const NoPage = styled.span`
    color: #868686;
    margin: 0 15px;
`