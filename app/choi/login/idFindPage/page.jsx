// 아이디 찾기 페이지
"use client";
import React, { useState } from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';
import {
  globalStyles, Background, IdFindBox, Title, SubTitle,
  NameBox, EmailBox, OkButton
} from '../../../../styles/choi/login/IdFindPageCSS';
import axios from 'axios';

const IdFindPage = () => {
  const router = useRouter();
  const [uvo, setUvo] = useState({
    name: '',
    email: '',
  });

  function changUvo(e) {
    setUvo({
      ...uvo,
      [e.target.name]: e.target.value
    });
  }

  const API_URL = '/user/find_id';

  const test = async () => {
    if (uvo.name.trim() !== '' && uvo.email.trim() !== '') {
      try {
        const response = await axios.post(API_URL, {
          name: uvo.name,
          email: uvo.email
        });
        console.log(response.data); // 서버 응답을 출력하여 구조 확인
        const id = response.data;

        if (id) {
          router.push(`/choi/login/idFindSuccessPage?id=${id}`);
        } else {
          router.push(`/choi/login/idFindFailPage`);
        }
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <IdFindBox>
          <Title>아이디 찾기</Title>
          <SubTitle>가입 시 등록한 이름과 이메일을 입력해주세요.</SubTitle>
          <NameBox placeholder='이름' name='name' onChange={changUvo} />
          <EmailBox placeholder='이메일' name='email' onChange={changUvo} />
          <OkButton type='button' value={'확인'} onClick={test} />
        </IdFindBox>
      </Background>
    </>
  );
}

export default IdFindPage;
