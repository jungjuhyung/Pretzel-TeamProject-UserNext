// 아이디 찾기 실패 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';

import {
  globalStyles , Background , FindFailBox, Icon, Title,
  CheckButton
} from '../../../../styles/choi/login/IdFindFailPageCSS';


const IdFindFailPage = () =>{

  const router = useRouter();

  const goBack = () =>{
    router.push("/choi/login/idFindPage")
  }

  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <FindFailBox>
          <Icon src='/images/icons/error.png' />
          <Title>일치하는 결과가 없습니다.</Title>
          <CheckButton type='button' value={'확인'} onClick={goBack}/>
          </FindFailBox>
        </Background>   
    </>
  )
}

export default IdFindFailPage;