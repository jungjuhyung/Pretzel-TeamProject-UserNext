"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';

// 스타일 import
import {
  globalStyles,
  Background,
  Title,
  Inquiry_Box,
  Inquiry_Box_Top,
  Inquiry_Box_Bottom
} from '../../../../styles/choi/servicecenter/PaymentCSS';

const PaymentPage = () => {
  // 상태 관리
  const [openIndexes, setOpenIndexes] = useState([]);

  // 아코디언 열고 닫기 함수
  const toggleOpen = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <>
      {/* 전역 스타일 적용 */}
      <Global styles={globalStyles} />
      {/* 배경 */}
      <Background>
        {/* 타이틀 */}
        <Title>결제 / 환불</Title>
        {/* 질문과 답변 매핑 */}
        {['결제한거 환불 가능한가요?', '환불 진짜 안되나요?', '결제 취소 진짜 안되나요??'].map((question, index) => (
          <Inquiry_Box key={index}>
            {/* 질문 상자 상단 */}
            <Inquiry_Box_Top onClick={() => toggleOpen(index)} isOpen={openIndexes.includes(index)}>
              {question}
            </Inquiry_Box_Top>
            {/* 질문 상자 하단 (답변) */}
            <Inquiry_Box_Bottom isOpen={openIndexes.includes(index)}>A.아니요</Inquiry_Box_Bottom>
          </Inquiry_Box>
        ))}
      </Background>
    </>
  );
};

export default PaymentPage;