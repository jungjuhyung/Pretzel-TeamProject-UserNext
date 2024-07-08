// FAQ 페이지
"use client";
import React from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';

import {
  globalStyles , Background , Title , Genre_box , Payment ,
  Error , Rate_Plan , Inquiry , Inquiry_Button

} from '../../../../styles/choi/servicecenter/FAQPageCSS';

const FAQPage = () =>{

  const router = useRouter()

  const goPayment = () => {
    router.push("/choi/servicecenter/paymentPage")
  }

  const goContactPage = () => {
    router.push("/choi/servicecenter/contactPage")
  }


  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Title>FAQ</Title>
          <Genre_box>
            <Payment onClick={goPayment} >결제 / 환불</Payment>
            <Error onClick={goPayment} >공 지 사 항</Error>
            <Rate_Plan onClick={goPayment} >요 금 제</Rate_Plan>
            <Inquiry onClick={goPayment} >계 정 문 의</Inquiry>
          </Genre_box>
          <Inquiry_Button type='button' value={"1:1문의하기"} onClick={goContactPage} />
        </Background>
    </>
  )
}

export default FAQPage;