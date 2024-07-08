// FAQ 페이지

"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import {
  globalStyles, Background, Wrapper, Title, Title_Input,
  Text_Input, Text_length_Box, Text_length, Button_Box, Ok_Button,
  Cencle_Button, Option
} from '../../../../styles/choi/servicecenter/ContactPageCSS';

const ContactPage = () => {
  const [profileIdx, setProfileIdx] = useState('16'); //profile_idx가 없어서 일단 기본값 줬어요
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionContent, setQuestionContent] = useState('');
  const [questionStatus , setQuestionStatus] = useState('0') // 기본값으로 0을 일단 줌
  const [result, setResult] = useState([]);

  const router = useRouter();

  // 일단 임시로 가져온 토큰값
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJwcm9maWxlX2lkeCI6IjEyIiwic3ViIjoia28iLCJpYXQiOjE3MTkwNjY4NjYsImV4cCI6MTcxOTA3MDQ2Nn0.PbZ6E9gKNmEWgIhzvu0GxeYOWscFL7Dc3NSZvEG8ZRM";

  const test = async () => {
    if (questionTitle.trim() !== '' && questionContent.trim() !== '') {
      try {
        const response = await axios.post(
          "http://localhost:8080/notice/add",
          {
            profile_idx: profileIdx,
            question_title: questionTitle,
            question_content: questionContent,
            question_status : questionStatus
          }
        );

        setResult(response.data);
        console.log(response.data);
        router.push("/choi/servicecenter/faqPage");
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

  const goReview = () => {
    router.push("/choi/servicecenter/faqPage");
  };

  const handleTextChange = (e) => {
    setQuestionContent(e.target.value);
    const textCount = e.target.value.length;
    document.getElementById('target').innerText = textCount;

    if (textCount > 300) {
      alert("300자 이상 작성이 불가능합니다.");
      setQuestionContent(e.target.value.substring(0, 300));
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
}

export default ContactPage;
