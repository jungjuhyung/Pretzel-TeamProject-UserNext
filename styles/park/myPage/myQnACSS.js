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

/* 리뷰 모달창 */

export const Modal_Container = styled.div`
    background-color: #252525;
    width: 650px;
    height: auto;
    max-height: calc(100vh - 150px);
    position: fixed;
    border-radius: 5px;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    overflow: auto;

    /* WebKit 기반 브라우저용 스크롤바 스타일링 */
    &::-webkit-scrollbar {
        width: 10px; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
        background: #444; /* 트랙 배경색 */
    }

    &::-webkit-scrollbar-thumb {
        background: #888; /* 스크롤바 색상 */
        border-radius: 5px; /* 스크롤바 둥근 모서리 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555; /* 스크롤바 호버 색상 */
    }
`

export const QnA_Title = styled.h1`
    color: #ffffff;
    font: 600 20px "Pretendard-Regular";
    margin: 50px auto;
    text-align: center;
`

export const Question_Title__Containter = styled.div`
    display: flex;
    justify-content: center;
`

export const Question_Title__Title = styled.p`
    color: #ffffff;
    font: 16px/50px "Pretendard-Regular";
    width: 80px;
`

export const Question_Title__Content = styled.p`
    color: #ffffff;
    font: 16px/50px "Pretendard-Regular";
    background-color: #1E1E1E;
    width: 400px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const Question_Content__Containter = styled.div`
    margin: 30px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Question_Content__Title = styled.p`
    color: #ffffff;
    font: 16px "Pretendard-Regular";
    width: 480px;
`

export const Question_Content__Content = styled.p`
    color: #ffffff;
    font: 16px "Pretendard-Regular";
    width: 480px;
    height: 230px;
    background-color: #1E1E1E;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px;
    margin-top: 15px;
`

export const Question_Regdate = styled.p`
    color: #868686;
    font: 16px "Pretendard-Regular";
    width: 480px;
    text-align: right;
    margin-top: 15px;
`

export const Answer_Content__Containter = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Answer_Content__Title = styled.p`
    color: #ffffff;
    font: 16px "Pretendard-Regular";
    width: 480px;
`

export const Answer_Content__Content = styled.p`
    color: #ffffff;
    font: 16px "Pretendard-Regular";
    width: 480px;
    height: 230px;
    background-color: #1E1E1E;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px;
    margin-top: 15px;
`

export const Answer_Regdate = styled.p`
    color: #868686;
    font: 16px "Pretendard-Regular";
    width: 480px;
    text-align: right;
    margin-top: 15px;
`

export const Horizen_Line = styled.hr`
    width: 480px;
    border: 1px solid #868686;
`