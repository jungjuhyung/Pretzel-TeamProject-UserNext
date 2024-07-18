import styled from "@emotion/styled";

export const DisplayFlex = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const MyQnAContainer = styled.table`
    max-width: 75%;
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

    &:hover {
        background-color: #141414;
        color: #868686;
        cursor: pointer;
    }
`

export const QnATitle = styled.td`
    box-sizing: border-box;
    padding: 0 15px;
    max-width: 0; /* max-width 추가 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 30%;
`

export const QnAContent = styled.td`
    box-sizing: border-box;
    padding: 0 15px;
    max-width: 0; /* max-width 추가 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 38%;
`

export const WrtieDate = styled.td`
    width: 11%;
`

export const QnAState = styled.td`
    width: 10%;
`