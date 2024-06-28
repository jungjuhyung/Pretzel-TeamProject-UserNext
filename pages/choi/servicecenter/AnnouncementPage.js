// 결제 / 환불 문의 페이지

"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles, Background, Title, Inquiry_Box, Inquiry_Box_Top, Inquiry_Box_Bottom
} from '../../../styles/choi/servicecenter/AnnouncemnetCSS';

const AnnouncementPage = () => {
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
        <Title>공지사항</Title>
        {['새로운 영화 3편이 들어왔습니다!', '신고당한 회원분들입니다.', '00월 00일 부터 00월 00일까지 이용권을 할인합니다!'].map((question, index) => (
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

export default AnnouncementPage;
