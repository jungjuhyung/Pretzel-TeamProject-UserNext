"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import loginStore from '@/stores/loginStore'; // 수정된 import

import {
  globalStyles, Background, Wrapper, Title, Title_Input,
  Text_Input, Text_length_Box, Text_length, Button_Box, Ok_Button,
  Cencle_Button
} from '../../../../styles/choi/servicecenter/ContactPageCSS';

const ProfileCreate = observer(() => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionContent, setQuestionContent] = useState('');
  const [result, setResult] = useState([]);
  const profileIdx = loginStore.profile_idx;
  const router = useRouter();

  const test = async () => {
    if (questionTitle.trim() !== '' && questionContent.trim() !== '') {
      try {
        const response = await axios.post(
          "http://localhost:8080/notice/question_add",
          {
            profile_idx: profileIdx, 
            question_title: questionTitle,
            question_content: questionContent
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        setResult(response.data);
        console.log("응답 데이터:", response.data);
        router.push("/choi/servicecenter/faqPage");
      } catch (error) {
        console.error("서버 요청 오류:", error.response ? error.response.data : error.message);
      }
    } else {
      alert("제목과 내용을 입력해 주세요.");
    }
  };

  const goReview = () => {
    router.push("/choi/servicecenter/faqPage");
  };

  const handleTextChange = (e) => {
    const { value } = e.target;
    setQuestionContent(value);
    const textCount = value.length;
    document.getElementById('target').innerText = textCount;

    if (textCount > 300) {
      alert("300자 이상 작성이 불가능합니다.");
      setQuestionContent(value.substring(0, 300));
      document.getElementById('target').innerText = 300;
    }
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Wrapper>
          <Title>문의하기</Title>
          <Title_Input
            type='text'
            placeholder='제목을 작성해 주세요.'
            name='question_title'
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
          />
          <Text_Input
            type='text'
            placeholder='문의할 내용을 작성해 주세요.'
            id='myText'
            value={questionContent}
            onChange={handleTextChange}
            name='question_content'
          />
          <Text_length_Box>
            <Text_length>
              <span id='target'>0</span>/300
            </Text_length>
          </Text_length_Box>
          <Button_Box>
            <Ok_Button type='button' value={"확인"} onClick={test} />
            <Cencle_Button type='button' value={"취소"} onClick={goReview} />
          </Button_Box>
        </Wrapper>
      </Background>
    </>
  );
})

export default ProfileCreate;
