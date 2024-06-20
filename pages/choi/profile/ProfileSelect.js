"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , Title ,Wrapper_box
} from '../../../styles/choi/profile/ProfileSelectCSS';

const ProfileSelect = () =>{

  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Wrapper_box>
            <Title>pretzel을 시청할 프로필을 선택하세요</Title>
          </Wrapper_box>
        </Background>
    </>
  )
}

export default ProfileSelect;