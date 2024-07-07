"use client";
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';
import { HeaderContainer, HeaderLeft, HeaderRight, LoginBtn, Menus, SearchIcon, SignUpBtn, Title, Whitespace } from "@/styles/commons/headerCSS";

const Header = ({ isVideoHovered }) => {
    const [scrollY, setScrollY] = useState(0);
    const router = useRouter()

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    const goLogin = () => {
        router.push("/choi/login/loginPage/loginPage")
    }

    const goJoin = () => {
        router.push("/choi/login/JoinPage/JoinPage")
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <HeaderContainer scrollY={scrollY}>
                <HeaderLeft>
                    <Title>pretzel</Title>
                    <Menus>홈</Menus>
                    <Menus>영화</Menus>
                    <Menus>보고싶은 리스트</Menus>
                    <Menus>리뷰</Menus>
                </HeaderLeft>
                <HeaderRight>
                    <SearchIcon src="/images/icons/search.png"></SearchIcon>
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
