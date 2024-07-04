// 장르 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , Title , Genre_box , Horror_box ,
  Crime_box , Action_box , Romance_box , Comic_box , Animation_box 
} from '../../../styles/choi/genre/GenreSelectCSS';

const genreSelect = () =>{
  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Title>장르를 선택해주세요</Title>
          <Genre_box>
            <Horror_box>공포</Horror_box>
            <Crime_box>범죄/스릴러</Crime_box>
            <Action_box>액션</Action_box>
            <Romance_box>로맨스</Romance_box>
            <Comic_box>코믹</Comic_box>
            <Animation_box>애니메이션</Animation_box>
          </Genre_box>
        </Background>
        
    </>
  )
}

export default genreSelect;