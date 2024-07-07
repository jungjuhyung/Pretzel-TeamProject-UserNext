// 장르 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';


import {
  globalStyles , Background , Title , Genre_box , Horror_box ,
  Crime_box , Action_box , Romance_box , Comic_box , Animation_box 
} from '../../../styles/choi/genre/GenreSelectCSS';

const genreSelect = () =>{

  const router = useRouter()

  const goHorror = () => {
    router.push("/choi/genre/Horror")
  }

  const goCrime = () => {
    router.push("/choi/genre/Crime")
  }

  const goAction = () => {
    router.push("/choi/genre/Action")
  }
  
  const goRomence = () => {
    router.push("/choi/genre/Romence")
  }

  const goComic = () => {
    router.push("/choi/genre/Comic")
  }

  const goAnimation = () => {
    router.push("/choi/genre/Animation")
  }

  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Title>장르를 선택해주세요</Title>
          <Genre_box>
            <Horror_box onClick={goHorror} >공포</Horror_box>
            <Crime_box onClick={goCrime} >범죄/스릴러</Crime_box>
            <Action_box onClick={goAction} >액션</Action_box>
            <Romance_box onClick={goRomence} >로맨스</Romance_box>
            <Comic_box onClick={goComic} >코믹</Comic_box>
            <Animation_box onClick={goAnimation} >애니메이션</Animation_box>
          </Genre_box>
        </Background>
    </>
  )
}

export default genreSelect;