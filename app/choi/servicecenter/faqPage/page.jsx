// FAQ 페이지
"use client";
import React from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';

import {
  globalStyles , Background , Title , Genre_box , Payment ,
  Error , Rate_Plan , Inquiry , Inquiry_Button,
  Notice

} from '../../../../styles/choi/servicecenter/FAQPageCSS';

const FAQPage = () =>{

  const router = useRouter()

  const goPayment = () => {
    router.push("/choi/servicecenter/paymentPage")
  }

  const goContactPage = () => {
    router.push("/choi/servicecenter/contactPage")
  }

  const goPayinfo = () => {
    router.push("/choi/servicecenter/payinfoPage")
  }

  const goAnnouncenter = () => {
    router.push("/choi/servicecenter/announcementPage")
  }
  const goNotice = () => {
    router.push("/choi/servicecenter/noticePage")
  }

  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Title>FAQ</Title>
          <Genre_box>
            <Payment onClick={goPayment} >결제 / 환불</Payment>
            <Rate_Plan onClick={goPayinfo} >구독권</Rate_Plan>
            <Inquiry onClick={goAnnouncenter} >계 정 문 의</Inquiry>
            <Notice onClick={goNotice} >공 지 사 항</Notice>
          </Genre_box>
          <Inquiry_Button type='button' value={"1:1문의하기"} onClick={goContactPage} />
        </Background>
    </>
  )
}

export default FAQPage;