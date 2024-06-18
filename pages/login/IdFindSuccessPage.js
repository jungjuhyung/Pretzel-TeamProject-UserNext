// IdFindSuccessPage.js

"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , FindSuccessBox , IconBox , Title,
  Icon , Result , SubTitle , MoveLogin
} from '../../styles/login/IdFindSuccessPageCSS';

const IdFindSuccessPage = () =>{
  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <FindSuccessBox>
            <IconBox><Icon src='/images/check.png'/></IconBox>
            <Title>입력한 정보와 일치하는 결과입니다.</Title>
            <Result>oing_****</Result>
            <SubTitle>※ SNS 회원은 해당 SNS의 이메일을 알려드립니다.</SubTitle>
            <MoveLogin value={'로그인 하러 가기'} type='button'/>
          </FindSuccessBox>
        </Background>
    </>
  )
}

export default IdFindSuccessPage;