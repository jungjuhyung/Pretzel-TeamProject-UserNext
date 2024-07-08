// 아이디 찾기 성공 페이지

"use client";

import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/react';
import {
  globalStyles, Background, FindSuccessBox, IconBox, Title,
  Icon, Result, SubTitle, MoveLogin
} from '../../../../styles/choi/login/IdFindSuccessPageCSS';
import { useSearchParams, useRouter } from 'next/navigation';

const IdFindSuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [id, setId] = useState('');

  useEffect(() => {
    const idFromParams = searchParams.get('id');
    if (idFromParams) {
      setId(idFromParams);
    }
  }, [searchParams]);

  const goLogin = () =>{
    router.push("/choi/login/loginPage")
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <FindSuccessBox>
          <IconBox><Icon src='/images/icons/check.png' /></IconBox>
          <Title>입력한 정보와 일치하는 결과입니다.</Title>
          <Result>{id ? id : "아이디를 찾을 수 없습니다."}</Result>
          <SubTitle>※ SNS 회원은 해당 SNS의 이메일을 알려드립니다.</SubTitle>
          <MoveLogin value={"로그인 하러 가기"} type='button' onClick={goLogin} />
        </FindSuccessBox>
      </Background>
    </>
  );
}

export default IdFindSuccessPage;
