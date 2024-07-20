// 문의 내역 (마이 페이지) - 다현
"use client";

import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { useStores } from "@/stores/StoreContext";
import { ColorOrange } from "@/styles/park/commons/commonsCSS";
import { DisplayFlex, MyQnAContainer, MyQnAContainerContent, MyQnAContent, MyQnATitle, QnAContent, QnAState, QnATitle, WrtieDate } from "@/styles/park/myPage/myQnACSS";
import axios from "axios";
import { useEffect, useState } from "react";

const MyQnA = () => {
    const { loginStore } = useStores();

    // 문의 내역
    const [question, seQquestion] = useState([]);

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        questionlist()
    }, []);

    const API_URL = "/mypage/"

    // 영화 시청 내역 가져오기
    async function questionlist() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.post(API_URL + "questionlist",
                {
                    profile_idx: loginStore.profile_idx
                });
            if (response.data) {
                seQquestion(response.data);
            }
        } catch (error) {
            console.error('문의내역 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <DisplayFlex>
            <MyQnAContainer>
                <MyQnAContainerContent>
                    <MyQnATitle>
                        <QnATitle>문의 제목</QnATitle>
                        <QnAContent>문의 내용</QnAContent>
                        <QnAState>상태</QnAState>
                        <WrtieDate>작성 날짜</WrtieDate>
                        <WrtieDate>답변 날짜</WrtieDate>
                    </MyQnATitle>
                    {question.map((k) => (
                        <MyQnAContent key={k.question_idx}>
                            <QnATitle>{k.title}</QnATitle>
                            <QnAContent>{k.content}</QnAContent>
                            <QnAState>{k.status === "1" ? "처리 중" : <ColorOrange>처리 완료</ColorOrange>}</QnAState>
                            <WrtieDate>{k.regdate.slice(0, 10)}</WrtieDate>
                            <WrtieDate>{!k.ansdate ? "" : k.ansdate.slice(0, 10)}</WrtieDate>
                        </MyQnAContent>
                    ))}
                </MyQnAContainerContent>
            </MyQnAContainer>
        </DisplayFlex>
    )
}

export default MyQnA;