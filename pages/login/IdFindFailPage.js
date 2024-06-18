// IdFindFailPage.js

"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , FindFailBox, Icon, Title,
  CheckButton
} from '../../styles/login/IdFindFailPageCSS';

const IdFindFailPage = () =>{
  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <FindFailBox>
          <Icon src='/images/error.png' />
          <Title>일치하는 결과가 없습니다.</Title>
          <CheckButton type='button' value={'확인'}/>
          </FindFailBox>
        </Background>
    </>
  )
}

export default IdFindFailPage;