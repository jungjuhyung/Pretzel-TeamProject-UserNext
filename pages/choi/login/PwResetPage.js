// 새로운 비밀번호 설정 페이지

// @jsxImportSource @emotion/react
"use client";

import React from 'react';
import { observer } from 'mobx-react-lite';
import { Global } from '@emotion/react';
import passwordStore from '../../../stores/passwordStore';

import {
  globalStyles, Background, PwResetBox, Title, SubTitle,
  NewPassWord, SubText, Re_NewPassWord, Error as StyledError,
  Ok as StyledOk, OkButton
} from '../../../styles/choi/login/PwRestPageCSS';

const PwResetPage = observer(() => {
  const { newPassword, reNewPassword, passwordsMatch, setNewPassword, setReNewPassword } = passwordStore;

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleReNewPasswordChange = (e) => {
    setReNewPassword(e.target.value);
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <PwResetBox>
          <Title>비밀번호 재설정</Title>
          <SubTitle>새로운 비밀번호를 입력해주세요.</SubTitle>
          <NewPassWord
            type='password'
            placeholder='신규 비밀번호'
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <SubText>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8 ~ 15 자리</SubText>
          <Re_NewPassWord
            type='password'
            placeholder='신규 비밀번호 재입력'
            value={reNewPassword}
            onChange={handleReNewPasswordChange}
          />
          {!passwordsMatch && <StyledError>비밀번호 불일치</StyledError>}
          {passwordsMatch && newPassword !== '' && reNewPassword !== '' && (
            <StyledOk>비밀번호 일치!</StyledOk>
          )}
          <OkButton type='button' value='확인' />
        </PwResetBox>
      </Background>
    </>
  );
});

export default PwResetPage;
