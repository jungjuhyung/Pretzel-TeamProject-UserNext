"use client";

import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/react';
import axios from 'axios';

// 스타일 import
import {
  globalStyles,
  Background,
  Title,
  Notice_Box,
  Notice_Box_Top,
  Notice_Box_Bottom
} from '../../../../styles/choi/servicecenter/NoticePageCSS';
import { ColorGray } from '@/styles/park/commons/commonsCSS';

const NoticePage = () => {

  // 상태 관리
  const [openIndexes, setOpenIndexes] = useState([]);
  const [content, setContent] = useState([]);

  // 컴포넌트가 마운트될 때 데이터 가져오기
  useEffect(() => {
  const ContentData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/notice/notice_list");
      console.log(response.data); // 응답 데이터 구조 확인
      setContent(response.data.body);  // 응답 데이터 형식에 맞게 수정
    } catch (error) {
      console.error('데이터 가져오기 오류 :', error);
    }
  };

  ContentData(); 
}, []);

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
        <Title>공 지 사 항</Title>

        {/* 질문과 답변 */}
        {content.map((k, index) => (
          <Notice_Box key={k.notice_idx}>
            <Notice_Box_Top onClick={() => toggleOpen(index)} isOpen={openIndexes.includes(index)}>
              {k.title}&nbsp;&nbsp;&nbsp;&nbsp;<ColorGray>({k.regdate.slice(0,10)})</ColorGray>
            </Notice_Box_Top>
            <Notice_Box_Bottom isOpen={openIndexes.includes(index)}>{k.content}</Notice_Box_Bottom>
          </Notice_Box>
        ))}
      </Background>
    </>
  );
};

export default NoticePage;
