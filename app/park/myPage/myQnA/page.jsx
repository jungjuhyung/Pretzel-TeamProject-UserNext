// 문의 내역 (마이 페이지) - 다현
"use client";

import { DisplayFlex, MyQnAContainer, MyQnAContainerContent, MyQnAContent, MyQnATitle, QnAContent, QnAState, QnATitle, WrtieDate } from "@/styles/park/myPage/myQnACSS";

const MyQnA = () => {
    return (
        <DisplayFlex>
            <MyQnAContainer>
                <MyQnAContainerContent>
                    <MyQnATitle>
                        <QnATitle>문의 제목</QnATitle>
                        <QnAContent>문의 내용</QnAContent>
                        <WrtieDate>작성 날짜</WrtieDate>
                        <QnAState>상태</QnAState>
                    </MyQnATitle>
                    <MyQnAContent>
                        <QnATitle>뭘보세여</QnATitle>
                        <QnAContent>뭘봐여뭘봐여뭘봐여뭘봐여</QnAContent>
                        <WrtieDate>2001-11-11</WrtieDate>
                        <QnAState>답변완료</QnAState>
                    </MyQnAContent>
                </MyQnAContainerContent>
            </MyQnAContainer>
        </DisplayFlex>
    )
}

export default MyQnA;