import styled from "@emotion/styled";
import { Menu } from "antd";

export const SubNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 909px;
    margin: 50px auto;
`;

export const Menus = styled.p`
    font-family: "Pretendard-Regular";
    font-weight: 600;
    font-size: 20px;
    height: 40px;
    color: #868686;

    &:hover {
        color: #ffffff;
        border-bottom: 2px solid #ffffff;
    }
`;
