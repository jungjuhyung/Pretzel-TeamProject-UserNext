"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {
  globalStyles, Background, PwFindBox, Title, SubTitle,
  Id, OkButton, Email
} from '../../../../styles/choi/login/PwFindPageCSS';

const PwFindPage = () => {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const API_URL = 'http://localhost:8080/user/find_pwd'; 

  const handleUserIdChange = (e) => setUserId(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async () => {
    if (!userId || !email) {
      alert('아이디와 이메일을 모두 입력해주세요.');
      return;
    }

    if (!email.includes('@')) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }
  
    try {
      const response = await axios.post(API_URL, {
        user_id: userId,
        email: email,
      });
      const data = response.data;
      if (data.number) { 
        
        sessionStorage.setItem('verificationCode', data.number);
        sessionStorage.setItem('userId', userId);  
        
        router.push('/choi/login/verificationPage');
      } else {
        alert('아이디와 이메일이 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('요청을 처리하는 동안 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <PwFindBox>
          <Title>비밀번호 찾기</Title>
          <SubTitle>
            아이디와 이메일을 확인 후 등록된 이메일 주소로<br /> 비밀번호
            재설정을 위한 인증 메일이 발송됩니다.
          </SubTitle>
          <Id type='text' placeholder={'아이디'} value={userId} onChange={handleUserIdChange} />
          <Email type='text' placeholder={'이메일'} value={email} onChange={handleEmailChange} />
          <OkButton type='button' value={'확인'} onClick={handleSubmit} />
        </PwFindBox>
      </Background>
    </>
  );
}

export default PwFindPage;
