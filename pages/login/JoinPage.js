// JoinPage.js

"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , JoinBox , Title , Name,
  Id , IdCondition , PassWord , PwCondition , Re_PassWord , 
  Error , Email_Box , Email , Icon , Email_select
} from '../../styles/login/JoinPageCSS';

const JoinPage = () =>{
  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <JoinBox>
            <Title>회원가입</Title>
            <Name type='text' placeholder='이름' />
            <Id type='text' placeholder='아이디' />
            <IdCondition>영문 소문자 또는 영문 소문자 , 숫자 조합 6~12자리</IdCondition>
            <PassWord type='password' placeholder='비밀번호' />
            <PwCondition>영문 , 숫자 , 특수문자(~!@#$%^&*)조합 8~15자리 </PwCondition>
            <Re_PassWord type='password' placeholder='비밀번호 재입력' />
            <Error>비밀번호 불일치</Error>
            <Email_Box>
              <Email type='text' placeholder='이메일' />
              <Icon>@</Icon>
              <Email_select>
                <option></option>
              </Email_select>
            </Email_Box>
          </JoinBox>
        </Background>
    </>
  )
}
export default JoinPage;