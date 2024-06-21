// 아이디 찾기 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles, Background , IdFindBox ,Title ,SubTitle,
  NameBox , EmailBox , OkButton
} from '../../../styles/choi/login/IdFindPageCSS';

const IdFindPage = () => {
  return(
    <>
      <Global styles={globalStyles} />
      <Background>
        <IdFindBox>
          <Title>아이디 찾기</Title>
          <SubTitle>가입 시 등록한 이름과 이메일을 입력해주세요.</SubTitle>
          <NameBox placeholder='이름'/>
          <EmailBox placeholder='이메일'/>
          <OkButton type='button' value={'확인'}/>
        </IdFindBox>
      </Background>
    </>
  )
}

export default IdFindPage;
