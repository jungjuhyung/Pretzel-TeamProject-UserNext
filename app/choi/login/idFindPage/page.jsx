// 아이디 찾기 페이지
"use client";
import React, { useState } from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles, Background , IdFindBox ,Title ,SubTitle,
  NameBox , EmailBox , OkButton
} from '../../../../styles/choi/login/IdFindPageCSS';
import axios from 'axios';

const IdFindPage = () => {

  const [uvo, setUvo] = useState({
    name : '' ,
    user_id : '',
    pwd : '',
    email : '',
  })

  function changUvo(e){
    setUvo({
        // 기존 uvo 복사
        ...uvo,
        [e.target.name] : e.target.value
    })
  }

  // 서버 갈곳
  const API_URL = '/user/find_id'

  async function id_find(){
      console.log('보내는 데이터 : ', uvo)
      try {
          // axios 서버로 정보 보내기
          const response = 
              await axios.post(API_URL, uvo);
          console.log('결과 : ' , response.data)
          // 성공시 유저 아이디 반환
          if (response.data === 0) {
              console.log('가입해주세요')
              alert('가입해주세요')
            }else if (response.data === 1) {
              console.log('sns 로그인해주세요')
              alert('sns 로그인해주세요')
            }else{
              console.log('유저아이디 : ', response.data)
              alert(`유저아이디 : ${response.data}`)
              setUvo({
                user_id : response.data
              })
            }
      } catch (error) {
          console.error('실패 : ', error)
      }
  }

  return(
    <>
      <Global styles={globalStyles} />
      <Background>
        <IdFindBox>
          <Title>아이디 찾기</Title>
          <SubTitle>가입 시 등록한 이름과 이메일을 입력해주세요.</SubTitle>
          <NameBox placeholder='이름' name='name' onChange={changUvo}/>
          <EmailBox placeholder='이메일' name='email' onChange={changUvo} />
          <OkButton type='button' value={'확인'} onClick={id_find}/>
        </IdFindBox>
      </Background>
    </>
  )
}

export default IdFindPage;
