import styled from "@emotion/styled";

export const DisplayFlex = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const MyQnAContainer = styled.table`
    max-width: 900px;
    width: 100%;
`

export const MyQnAContainerContent = styled.tbody`
    font: 16px/40px "Pretendard-Regular";
    color: #ffffff;
    height: 40px;
`

export const MyQnATitle = styled.tr`
    background-color: #343434;
    width: 100%;
    text-align: center;
`

export const MyQnAContent = styled.tr`
    background-color: #1E1E1E;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #343434;
`

export const QnATitle = styled.td`
    width: 30%;
    `

export const QnAContent = styled.td`
    width: 50%;
    `

export const QnAState = styled.td`
    width: 20%;
`