"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { HeaderContainer, HeaderLeft, HeaderRight, LoginBtn, LogoutBtn, Menus, SearchIcon, SignUpBtn, Title, Whitespace, UserName, UserImage, UserName_Box } from "@/styles/commons/headerCSS";
import { useStores } from '@/stores/StoreContext';
import { ColorOrange } from '@/styles/park/commons/commonsCSS';
import axios from 'axios';
import LoadingSpinner from '../loadingSpinner/page';

const Header = observer(() => {
    const [scrollY, setScrollY] = useState(0);
    const { loginStore } = useStores();
    const router = useRouter();

    // 프로필 정보
    const [myProfile, setMyProfile] = useState({});

    // 클라이언트 측에서만 렌더링하기 위한 상태
    const [clientRendered, setClientRendered] = useState(false);

    // 스크롤 감지
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        setClientRendered(true); // 컴포넌트가 클라이언트에서 렌더링 됨

        // 로그인이 되어있으면 profile_detail 함수 실행
        if (loginStore.isLogin) {
            profile_detail();
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loginStore.isLogin, loginStore.profile_idx]);

    // 로그인 페이지 이동
    const goLogin = () => {
        router.push("/choi/login/loginPage");
    };

    // 회원가입 페이지 이동
    const goJoin = () => {
        router.push("/choi/login/joinPage");
    };

    // 검색 페이지 이동
    const goSearch = () => {
        router.push("/choi/search");
    };

    // 홈으로 이동
    const goHome = () => {
        router.push("/");
    };

    // 장르 선택 페이지 이동
    const goThema = () => {
        router.push("/choi/genre/generSelect");
    };

    // 고객센터 페이지 이동
    const goService = () => {
        router.push("/choi/servicecenter/faqPage");
    };

    // 마이페이지 이동
    const goMyPage = () => {
        router.push("/park/myPage");
    };

    // 로그아웃 버튼 눌렀을 때
    const goLogout = () => {
        if (confirm("로그아웃 하시겠습니까?")) {
            loginStore.deleteLocal();
            alert("로그아웃이 완료되었습니다.")
            router.push("/main")
        } else {
            alert("로그아웃이 취소되었습니다.")
        }
    };

    // 프로필 이름 누르면 프로필 선택창으로 이동
    const goProfileSelect = () => {
        router.push("/choi/profile/profileSelect")
    }

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
            return(
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
            )
        }
    }

    return (
        <>
            {clientRendered ? login_state() : (
                // 클라이언트 렌더링 전에 기본적인 렌더링을 제공
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
            )}
        </>
    );
});

export default Header;
