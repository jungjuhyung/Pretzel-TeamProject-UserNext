
"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , Top_Line , Footer_Top, Logo ,
  TermsOne , TermsTwo , TermsThree, TermsFour , Bar ,Footer_Middle,
  Bottom_Box, Bottom_Title , Bottom_information , Social_Background, Social,
  Youtube , Instagram , Twitter , FaceBook , Footer_Box,
  Footer_Title, Footer_information
} from '../../../styles/commons/FooterCSS';


const Footer = () =>{

  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Top_Line>
            
            <Footer_Top>
              <Logo>Pretzel</Logo>
              <TermsOne>서비스 이용 약관</TermsOne>
              <Bar>|</Bar>
              <TermsTwo>개인정보 처리 방침</TermsTwo>
              <Bar>|</Bar>
              <TermsThree>서비스 이용 약관</TermsThree>
              <Bar>|</Bar>
              <TermsFour>고객센터</TermsFour>
            </Footer_Top>

            <Footer_Middle>
              <Bottom_Box>
                <Bottom_Title>고객센터 (이용 및 결제 문의)</Bottom_Title>
                <Bar>|</Bar>
                <Bottom_information>ict@pretzel.co.kr / 1:1 게시판 문의</Bottom_information>
              </Bottom_Box>

              <Bottom_Box>
                <Bottom_Title>대표이사</Bottom_Title>
                <Bar>|</Bar>
                <Bottom_information>정주형 / 사업자 등록 번호 : 100-100-100100</Bottom_information>
              </Bottom_Box>
              
              <Bottom_Box>
                <Bottom_Title>제휴 및 대외 협력</Bottom_Title>
                <Bar>|</Bar>
                <Bottom_information>https://pretzel.team/contact</Bottom_information>
              </Bottom_Box>

              <Bottom_Box>
                <Bottom_Title>구독권 구매 문의</Bottom_Title>
                <Bar>|</Bar>
                <Bottom_information>Pretzel 마케팅 (pretzel2024@naver.com)</Bottom_information>
              </Bottom_Box>
            </Footer_Middle>

            <Social>
              <Social_Background>
                <Youtube src='/images/icons/Youtube.png' />
              </Social_Background>
              <Social_Background>
                <Instagram src='/images/icons/Instagram.png' />
              </Social_Background>
              <Social_Background>
                <Twitter src='/images/icons/Twitter.png' />
              </Social_Background>
              <Social_Background>
                <FaceBook src='/images/icons/FaceBook.png' />
              </Social_Background>
            </Social>

            <Footer_Box>
                <Footer_Title>Copyright</Footer_Title>
                <Bar>|</Bar>
                <Footer_information>주식회사 한국 ICT 인재개발원</Footer_information>
            </Footer_Box>
          </Top_Line>
        </Background>
    </>
  )
}

export default Footer;