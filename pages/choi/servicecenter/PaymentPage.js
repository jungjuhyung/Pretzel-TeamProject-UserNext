// 결제 / 환불 문의 페이지

"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles, Background, Title, Inquiry_Box, Inquiry_Box_Top, Inquiry_Box_Bottom
} from '../../../styles/choi/servicecenter/PaymentCSS';

const PaymentPage = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleOpen = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Title>결제 / 환불</Title>
        {['결제한거 환불 가능한가요?', '환불 진짜 안되나요?', '결제 취소 진짜 안되나요??'].map((question, index) => (
          <Inquiry_Box key={index}>
            <Inquiry_Box_Top onClick={() => toggleOpen(index)} isOpen={openIndexes.includes(index)}>
              {question}
            </Inquiry_Box_Top>
            <Inquiry_Box_Bottom isOpen={openIndexes.includes(index)}>A. 아니요</Inquiry_Box_Bottom>
          </Inquiry_Box>
        ))}
      </Background>
    </>
  );
};

export default PaymentPage;
