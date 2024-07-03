"use client";
import { useRouter } from 'next/navigation';

import React from 'react';
import { HeaderContainer, HeaderLeft, HeaderRight, LoginBtn, Menus, SignUpBtn, Title, Whitespace } from "@/styles/commons/headerCSS";
import { Icon24px } from "@/styles/park/commons/commonsCSS";

const Header = ({ isVideoHovered }) => {
    const router = useRouter()

    const goLogin = () => {
        router.push("/choi/login/loginPage/loginPage")
    }

    const goJoin = () => {
        router.push("/choi/login/JoinPage/JoinPage")
    }

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
                    <LoginBtn onClick={goLogin}>로그인</LoginBtn>
                    <SignUpBtn onClick={goJoin}>회원가입</SignUpBtn>
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
