
"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , PwFindBox ,Title ,SubTitle,
  Id ,OkButton
} from '../../../styles/choi/login/PwFindPageCSS';


const PwFindPage = () =>{

  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <PwFindBox>
            <Title>비밀번호 찾기</Title>
            <SubTitle>아이디 확인 후 등록된 이메일 주소로 비밀번호<br/>
              재설정을 위한 인증 메일이 발송됩니다.
            <Id type='text' placeholder={'아이디'} />
            <OkButton type='button' value={'확인'}/>
            </SubTitle>
          </PwFindBox>
        </Background>
    </>
  )
}

export default PwFindPage;