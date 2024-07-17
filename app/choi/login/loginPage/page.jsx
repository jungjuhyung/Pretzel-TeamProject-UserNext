"use client";

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Global } from '@emotion/react';
import { observer } from "mobx-react-lite";
import { LoginContext, useStores } from '@/stores/StoreContext';

import {
    globalStyles, Background, LoginBox, Title, SubTitle,
    BoxBottom, Id, PasswordInput, LoginButton, AccountOptions,
    SelectOption, Bar, BoxFooter, Move, SubText,
    Link, NaverLogin, KaKaoLogin
} from '../../../../styles/choi/login/loginPageCSS';

import axios from 'axios';

const LoginPage = observer(() => {
    const{loginStore} = useStores();
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const router = useRouter();

    const goIdFind = () => {
        router.push("idFindPage");
    };

    const goPwFind = () => {
        router.push("pwFindPage");
    };

    const goJoin = () => {
        router.push("joinPage");
    };

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const API_URL = '/user/login';

    async function login() {
        console.log('보내는 데이터 : ', id, password);
        try {
            const response = await axios.post(API_URL, {
                user_id: id,
                pwd: password,
            });
            console.log('*** 결과 : ', response.data);
            
            if (response.data.token) {
                const token = response.data.token;
                loginStore.setToken(token)
                loginStore.setUser_id(id)
                console.log(loginStore.token)
                router.push("/choi/profile/profileSelect");
            } else {
                alert('아이디나 비밀번호를 다시 확인해주세요.');
            }
        } catch (error) {
            console.error('실패 : ', error);
            alert('로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        }
    }

    return (
        <>
    
            <Global styles={globalStyles} />
            <Background>
                <LoginBox>
                    <Title>로그인</Title>
                    <SubTitle>pretzel 계정으로 로그인</SubTitle>
                    <BoxBottom>
                        <Id type='text' placeholder="아이디" onChange={handleIdChange} />
                        <PasswordInput
                            placeholder="비밀번호"
                            onChange={handlePasswordChange}
                            showPassword={showPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                        />
                        <LoginButton value='로그인' type='button' onClick={login} />
                    </BoxBottom>
                    <AccountOptions>
                        <SelectOption><Move onClick={goIdFind} >아이디 찾기</Move></SelectOption><Bar>ㅣ</Bar>
                        <SelectOption><Move onClick={goPwFind}>비밀번호 찾기</Move></SelectOption><Bar>ㅣ</Bar>
                        <SelectOption><Move onClick={goJoin}>회원가입</Move></SelectOption>
                    </AccountOptions>
                    <BoxFooter>
                        <SubText>다른 방법으로 로그인하기</SubText>
                        <Link>
                            <Move href='http://localhost:8080/oauth2/authorization/naver'>
                            <NaverLogin src='/images/icons/NaverLogin.png'/></Move>
                            <Move href='http://localhost:8080/oauth2/authorization/kakao'>
                            <KaKaoLogin src='/images/icons/KakaoLogin.png'/></Move>
                        </Link>
                    </BoxFooter>
                </LoginBox>
            </Background>
        
        </>
    );
});

export default LoginPage;
