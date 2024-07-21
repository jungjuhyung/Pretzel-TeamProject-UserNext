"use client";

import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { Background_layout } from "@/styles/park/detailPage/reportWriteCSS";
import { Answer_Content__Containter, Answer_Content__Content, Answer_Content__Title, Answer_Regdate, Horizen_Line, Modal_Container, QnA_Title, Question_Content__Containter, Question_Content__Content, Question_Content__Title, Question_Regdate, Question_Title__Containter, Question_Title__Content, Question_Title__Title } from "@/styles/park/myPage/myQnACSS";
import axios from "axios";
import { useEffect, useState } from "react";

const MyQnAModal = ({ setQuestionModal, questionIdx }) => {

    // 리뷰 상세내역
    const [qnAContent, setQnAContent] = useState({})

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            setQuestionModal(false);
        }
    };

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        questionDetail()
    }, [questionIdx]);

    const API_URL = "/mypage/"

    // 문의 상세 내역 가져오기
    async function questionDetail() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "questionDetail",
                {
                    params: {
                        question_idx: questionIdx
                    }
                });
            if (response.data) {
                setQnAContent(response.data);
            }
        } catch (error) {
            console.error('문의 상세내역 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <>
            <Background_layout onClick={handleBackgroundClick}>
                <Modal_Container>
                    <QnA_Title>문의 내역</QnA_Title>

                    <Question_Title__Containter>
                        <Question_Title__Title>문의 제목</Question_Title__Title>
                        <Question_Title__Content>{qnAContent.title}</Question_Title__Content>
                    </Question_Title__Containter>

                    <Question_Content__Containter>
                        <Question_Content__Title>문의 내용</Question_Content__Title>
                        <Question_Content__Content>{qnAContent.content}</Question_Content__Content>
                        <Question_Regdate>{qnAContent.regdate.slice(0, 10)}</Question_Regdate>
                    </Question_Content__Containter>

                    {qnAContent.answer === null ? <></> :
                        <>
                            <Horizen_Line />

                            <Answer_Content__Containter>
                                <Answer_Content__Title>답변 내용</Answer_Content__Title>
                                <Answer_Content__Content>{qnAContent.answer}</Answer_Content__Content>
                                <Answer_Regdate>{qnAContent.ansdate.slice(0, 10)}</Answer_Regdate>
                            </Answer_Content__Containter>
                        </>
                    }

                </Modal_Container>
            </Background_layout>
        </>
    )
}

export default MyQnAModal;