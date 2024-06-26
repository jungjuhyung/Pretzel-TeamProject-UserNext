// 마이페이지 - 문의 내역
"use client";

import { DisplayFlex, MyQnAContainer, MyQnAContainerContent, MyQnAContent, MyQnATitle, QnAContent, QnAState, QnATitle } from "@/styles/park/myPage/myQnACSS";

const MyQnA = () => {
    return (
        <DisplayFlex>
            <MyQnAContainer>
                <MyQnAContainerContent>
                    <MyQnATitle>
                        <QnATitle>문의 제목</QnATitle>
                        <QnAContent>문의 내용</QnAContent>
                        <QnAState>상태</QnAState>
                    </MyQnATitle>
                    <MyQnAContent>
                        <QnATitle>뭘보세여</QnATitle>
                        <QnAContent>뭘봐여뭘봐여뭘봐여뭘봐여</QnAContent>
                        <QnAState>굿</QnAState>
                    </MyQnAContent>
                </MyQnAContainerContent>
            </MyQnAContainer>
        </DisplayFlex>
    )
}

export default MyQnA;