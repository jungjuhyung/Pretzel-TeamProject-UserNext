import TopBtn from "@/pages/commons/topBtn";
import styled from "@emotion/styled";

export const Icon20px = styled.img`
    width: 20px;
    height: 20px;
`;

export const Icon24px = styled.img`
    width: 24px;
    height: 24px;
`;

export const ColorOrange = styled.span`
    color: #f29a2e;
`;

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