// 인증번호 입력 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles, Background, VerificationBox ,Title ,SubTitle,
  Verification ,ButtonBox, OkButton ,Re_send
} from '../../../../styles/choi/login/VerificationPageCSS';


const VerificationPage = () =>{

  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <VerificationBox>
            <Title>인증번호 입력</Title>
            <SubTitle>메일로 발송된 인증번호를 입력해주세요.</SubTitle>
            <Verification type='text' placeholder='인증번호'/>
            <ButtonBox>
              <OkButton type='button' value={'확인'}/>
              <Re_send type='button' value={'인증번호 재전송'}/>
            </ButtonBox>
            
          </VerificationBox>
        </Background>
    </>
  )
}

export default VerificationPage;