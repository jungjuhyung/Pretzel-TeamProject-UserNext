"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { HeaderContainer, HeaderLeft, HeaderRight, LoginBtn, LogoutBtn, Menus, SearchIcon, SignUpBtn, Title, Whitespace, Profile_Img, UserName, UserImage, UserName_Box } from "@/styles/commons/headerCSS";
import { useStores } from '@/stores/StoreContext';
import { ColorOrange } from '@/styles/park/commons/commonsCSS';
import axios from 'axios';

const Header = observer(() => {
    const [scrollY, setScrollY] = useState(0);
    const { loginStore } = useStores();
    const router = useRouter();

    // 프로필 정보
    const [myProfile, setMyProfile] = useState({});

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

    const goMyPage = () => {
        router.push("/park/myPage");
    };

    const goLogout = () => {
        if (confirm("로그아웃 하시겠습니까?")) {
            loginStore.deleteLocal();
            alert("로그아웃이 완료되었습니다.")
            router.push("/main")
        } else {
            alert("로그아웃이 취소되었습니다.")
        }
    };

    const goProfileSelect = () => {
        router.push("/choi/profile/profileSelect")
    }

    useEffect(() => {
        if (loginStore.isLogin) {
            profile_detail();
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loginStore.isLogin, loginStore.profile_idx]);

    const API_URL = "/profile/"

    // 프로필 정보 가져오기
    async function profile_detail() {
        try {
            const response = await axios.post(API_URL + "profile_detail",
                {
                    profile_idx: loginStore.profile_idx
                },
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                }
            );

            if (response.data) {
                setMyProfile(response.data)
            }
        } catch (error) {
            console.error('프로필 정보 가져오기 실패 : ', error);
        }
    }

    function login_state() {
        if (loginStore.isLogin) {
            return (
                <>
                    <HeaderContainer scrollY={scrollY}>
                        <HeaderLeft>
                            <Title onClick={goHome}>pretzel</Title>
                            <Menus onClick={goHome}>홈</Menus>
                            <Menus onClick={goThema}>영화</Menus>
                            <Menus onClick={goMyPage}>마이페이지</Menus>
                            <Menus onClick={goService}>고객센터</Menus>
                        </HeaderLeft>
                        <HeaderRight>
                            <SearchIcon src="/images/icons/search.png" onClick={goSearch}></SearchIcon>
                            <UserName_Box>
                                <UserName onClick={goProfileSelect}><ColorOrange>{myProfile.name}</ColorOrange> 님</UserName>
                            </UserName_Box>
                            <UserImage src={`http://localhost:8080/common/image?imageName=${myProfile.img_name}`} />
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
                            <Title onClick={goHome}>pretzel</Title>
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
