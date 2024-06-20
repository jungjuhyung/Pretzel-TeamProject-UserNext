"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';
import DatePicker from 'react-datepicker';

import {
  globalStyles, Background, JoinBox, Title, Name,
  Id, IdCondition, PassWord, PwCondition, Re_PassWord,
  Error, Email_Box, Email, Icon, Email_select,
  BirthDay , NoticeAllBox, CheckBoxAll , NoticeBox_first ,NoticeBox , 
  Notice_Title_Main,CheckBox_Basic , Notice_Title_Basic , Notice_Icon,
  CheckBox_Choice, Notice_Title_Choice , JoinButton
} from '../../styles/login/JoinPageCSS';

const JoinPage = () => {
  const [startDate, setStartDate] = useState(null);

  return (
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
              <option>직접 입력</option>
              <option>naver.com</option>
              <option>daum.net</option>
              <option>gmail.com</option>
            </Email_select>
          </Email_Box>
          <BirthDay>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="생년월일"
            />
          </BirthDay>
          <NoticeAllBox>

            <NoticeBox_first>
              <CheckBoxAll type='checkbox'/>
              <Notice_Title_Main>필수 및 선택 항목을 모두 포함하여 동의합니다.</Notice_Title_Main>
            </NoticeBox_first>

            <NoticeBox>
              <CheckBox_Basic type='checkbox'/>
              <Notice_Title_Basic>[필수] 만 14세 이상입니다.</Notice_Title_Basic>
              <Notice_Icon src='/images/Arrow.png' />
            </NoticeBox>

            <NoticeBox>
              <CheckBox_Basic type='checkbox'/>
              <Notice_Title_Basic>[필수] 서비스 이용약관 동의</Notice_Title_Basic>
              <Notice_Icon src='/images/Arrow.png' />
            </NoticeBox>

            <NoticeBox>
              <CheckBox_Basic type='checkbox'/>
              <Notice_Title_Basic>[필수] 개인정보 수집 및 이용 동의</Notice_Title_Basic>
              <Notice_Icon src='/images/Arrow.png' />
            </NoticeBox>

            <NoticeBox>
              <CheckBox_Choice type='checkbox'/>
              <Notice_Title_Choice>[선택] 개인정보 수집 및 이용 동의</Notice_Title_Choice>
              <Notice_Icon src='/images/Arrow.png' />
            </NoticeBox>

            <NoticeBox>
              <CheckBox_Choice type='checkbox'/>
              <Notice_Title_Choice>[선택] 마케팅 정보 수신 동의 </Notice_Title_Choice>
              <Notice_Icon src='/images/Arrow.png' />
            </NoticeBox>

          </NoticeAllBox>
          <JoinButton type='button' value={'회원가입'}/>
        </JoinBox>
      </Background>
    </>
  );
}

export default JoinPage;
