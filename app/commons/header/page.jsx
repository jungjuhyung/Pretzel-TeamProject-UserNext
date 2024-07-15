"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { HeaderContainer, HeaderLeft, HeaderRight, LoginBtn, LogoutBtn, Menus, SearchIcon, SignUpBtn, Title, Whitespace , Profile_Img } from "@/styles/commons/headerCSS";
import { useStores } from '@/stores/StoreContext';

const Header = observer(({ isVideoHovered }) => {
    const [scrollY, setScrollY] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const { loginStore } = useStores();
    const router = useRouter();

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    const goLogin = () => {
        router.push("/choi/login/loginPage");
    };

    const goJoin = () => {
        router.push("/choi/login/joinPage");
    };

    const goSearch = () => {
        router.push("/choi/search");
    };

    const goHome = () => {
        router.push("/");
    };

    const goThema = () => {
        router.push("/choi/genre/generSelect");
    };

    const goService = () => {
        router.push("/choi/servicecenter/faqPage");
    };

    const test = () => {
        router.push("/park/detail/detailPage");
    };

    const goMyPage = () => {
        router.push("/park/myPage/myPage");
    };

    const goLogout = () => {
        console.log("로그아웃 누름");
        loginStore.logout();
    };

    const goProfile = () => {
        router.push("/choi/profile/profileSelect");
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log("token : ", loginStore.token);
    }, [loginStore.token]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        console.log("loginStore.profile", loginStore.profile);
    }, [loginStore.profile]);

    if (!isMounted) {
        return null; // 초기 렌더링 동안 아무것도 렌더링하지 않음
    }

    function login_state() {
        if (loginStore.isToken()) {
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
                            {loginStore.profile && (
                                <Profile_Img src={`http://localhost:8080/common/image?imageName=${loginStore.profile}`} alt="Profile" onClick={goProfile}/>
                            )}
                            <LogoutBtn onClick={goLogout}>로그아웃</LogoutBtn>
                        </HeaderRight>
                    </HeaderContainer>
                    <Whitespace />
                </>
            );
        } else {
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
            );
        }
    }

    return (
        <>
            {login_state()}
        </>
    );
});

export default Header;
