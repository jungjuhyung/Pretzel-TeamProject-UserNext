"use client";
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';
import { HeaderContainer, HeaderLeft, HeaderRight, LoginBtn, LogoutBtn, Menus, SearchIcon, SignUpBtn, Title, Whitespace } from "@/styles/commons/headerCSS";

const Header = ({ isVideoHovered }) => {
    const [scrollY, setScrollY] = useState(0);
    const router = useRouter()

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    // 로그인
    const goLogin = () => {
        router.push("/choi/login/loginPage")
    }

    // 회원가입
    const goJoin = () => {
        router.push("/choi/login/joinPage")
    }

    // 검색
    const goSearch = () => {
        router.push("/choi/search")
    }

    // 홈
    const goHome = () => {
        router.push("/main")
    }

    // 영화(장르별)
    const goThema = () => {
        router.push("/choi/genre/generSelect")
    }

    // 고객센터
    const goService = () => {
        router.push("/choi/servicecenter/faqPage")
    }

    // 테스트용
    const test = () => {
        router.push("/park/detail/detailPage")
    }

    // 마이페이지
    const goMyPage = () => {
        router.push("/park/myPage/myPage")
    }

    // 로그아웃
    const goLogout = () => {
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function login_state() {

        if (localStorage.getItem("profile_idx") === '') {
            return (
                <>
                    <HeaderContainer scrollY={scrollY}>
                        <HeaderLeft>
                            <Title onClick={test}>pretzel</Title>
                            <Menus onClick={goHome}>홈</Menus>
                            <Menus onClick={goThema}>영화</Menus>
                            <Menus onClick={goService}>고객센터</Menus>
                        </HeaderLeft>
                        <HeaderRight>
                            <SearchIcon src="/images/icons/search.png" onClick={goSearch}></SearchIcon>
                            <LoginBtn onClick={goLogin}>로그인</LoginBtn>
                            <SignUpBtn onClick={goJoin}>회원가입</SignUpBtn>
                        </HeaderRight>
                    </HeaderContainer>
                    <Whitespace />
                </>
            )

        } else {
            return (
                <>
                    <HeaderContainer scrollY={scrollY}>
                        <HeaderLeft>
                            <Title onClick={test}>pretzel</Title>
                            <Menus onClick={goHome}>홈</Menus>
                            <Menus onClick={goThema}>영화</Menus>
                            <Menus onClick={goMyPage}>마이페이지</Menus>
                            <Menus onClick={goService}>고객센터</Menus>
                        </HeaderLeft>
                        <HeaderRight>
                            <SearchIcon src="/images/icons/search.png" onClick={goSearch}></SearchIcon>
                            <LogoutBtn onClick={goLogout}>로그아웃</LogoutBtn>
                        </HeaderRight>
                    </HeaderContainer>
                    <Whitespace />
                </>
            )
        }
    }

    return (
        <>
            {login_state()}
        </>
    );
};

export default Header;
