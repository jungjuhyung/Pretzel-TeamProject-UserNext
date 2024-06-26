"use client";

import React from 'react';
import { HeaderContainer, HeaderLeft, HeaderRight, LoginBtn, Menus, SignUpBtn, Title, Whitespace } from "@/styles/commons/headerCSS";
import { Icon24px } from "@/styles/park/commons/commonsCSS";

const Header = ({ isVideoHovered }) => {
    return (
        <>
            <HeaderContainer>
                <HeaderLeft>
                    <Title>pretzel</Title>
                    <Menus>홈</Menus>
                    <Menus>영화</Menus>
                    <Menus>보고싶은 리스트</Menus>
                    <Menus>리뷰</Menus>
                </HeaderLeft>
                <HeaderRight>
                    <Icon24px src="/images/icons/search.png"></Icon24px>
                    <LoginBtn>로그인</LoginBtn>
                    <SignUpBtn>회원가입</SignUpBtn>
                </HeaderRight>
            </HeaderContainer>
            <Whitespace />
            {/* <HeadeContainer isVideoHovered={isVideoHovered}>
                <HeaderLeft>
                    <Title>pretzel</Title>
                    <Menus>홈</Menus>
                    <Menus>영화</Menus>
                    <Menus>보고싶은 리스트</Menus>
                    <Menus>리뷰</Menus>
                </HeaderLeft>
                <HeaderRight>
                    <Icon24px src="/images/icons/search.png"></Icon24px>
                    <LoginBtn>로그인</LoginBtn>
                    <SignUpBtn>회원가입</SignUpBtn>
                </HeaderRight>
            </HeadeContainer> */}
        </>
    );
};

export default Header;
