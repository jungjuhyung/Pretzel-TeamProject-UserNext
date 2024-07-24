"use client";

import React from 'react';
import { observer } from 'mobx-react-lite';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import passwordStore from '../../../../stores/passwordStore';
import { useStores } from '@/stores/StoreContext';

import {
  globalStyles, Background, PwResetBox, Title, SubTitle,
  NewPassWord, SubText, Re_NewPassWord, Error as StyledError,
  Ok as StyledOk, OkButton
} from '../../../../styles/choi/login/PwRestPageCSS';

const PwResetPage = observer(() => {
  const { loginStore } = useStores();
  const router = useRouter();
  const { newPassword, reNewPassword, passwordsMatch, setNewPassword, setReNewPassword } = passwordStore;

  // 로그인 상태에서 user_id 가져오기
  const userId = sessionStorage.getItem('userId');  // sessionStorage에서 userId 가져오기

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleReNewPasswordChange = (e) => {
    setReNewPassword(e.target.value);
  };

  const isPasswordValid = (password) => {
    // 영문, 숫자, 특수문자(~!@#$%^&*) 조합 8 ~ 15 자리의 비밀번호 검증
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,15}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = async () => {
    if (!isPasswordValid(newPassword)) {
      alert('비밀번호는 영문 , 숫자 , 특수문자 (~!@#$%^&*) 조합 8 ~ 15자리로 입력해주세요.');
      return;
    }

    if (!passwordsMatch || newPassword === '' || reNewPassword === '') {
      alert('비밀번호가 일치하지 않거나 입력되지 않았습니다.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user/new_pwd', {
        user_id: userId, // user_id와 pwd만 포함하여 요청
        pwd: newPassword,
      });

      if (response.status === 200) {
        alert('비밀번호가 성공적으로 변경되었습니다.');
        router.push('/choi/login/loginPage');
      } else {
        alert('비밀번호 변경에 실패하였습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('비밀번호 변경 중 오류 발생:', error);
      alert('비밀번호 변경 중 오류가 발생하였습니다. 다시 시도해주세요.');
    }
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
          <OkButton type='button' value='확인' onClick={handleSubmit} />
        </PwResetBox>
      </Background>
    </>
  );
});

export default PwResetPage;
