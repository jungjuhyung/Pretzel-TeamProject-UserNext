// 프로필 삭제 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , Title , Profile_Delete_Box , SubTitle,
  Delete_Info ,Password , Button_Box , Delete_button, Cancle_button
  
} from '../../../styles/choi/profile/ProfileDeleteCSS';

const ProfileDelete = () =>{

  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Title>프로필 삭제</Title>

          <Profile_Delete_Box>
            <SubTitle>비밀번호 입력</SubTitle>
            <Delete_Info>삭제를 위해서 비밀번호를 입력해주세요.</Delete_Info>
            <Password type='password' placeholder="비밀번호" />
            <Button_Box>
              <Delete_button value="삭제" />
              <Cancle_button value="취소" />
            </Button_Box>
          </Profile_Delete_Box>
        </Background>
    </>
  )
}

export default ProfileDelete;
