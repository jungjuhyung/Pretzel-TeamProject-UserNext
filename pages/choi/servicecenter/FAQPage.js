// FAQ 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , Title , Genre_box , Payment ,
  Error , Rate_Plan , Inquiry , Inquiry_Button

} from '../../../styles/choi/servicecenter/PaymentCSS';

const FAQPage = () =>{
  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Title>FAQ</Title>
          <Genre_box>
            <Payment>결제 / 환불</Payment>
            <Error>영상 오류</Error>
            <Rate_Plan>요금제</Rate_Plan>
            <Inquiry>계정 문의</Inquiry>
          </Genre_box>
          <Inquiry_Button type='button' value={"1:1문의하기"}/>
        </Background>
    </>
  )
}

export default FAQPage;