// 로그인 페이지

"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';
import {
    globalStyles, Background, LoginBox, Title, SubTitle,
    BoxBottom, Id, PasswordInput, LoginButton, AccountOptions,
    SelectOption, Bar, BoxFooter, Move, SubText,
    Link, NaverLogin, KaKaoLogin, loginClick
} from '../../../styles/choi/login/loginPageCSS';

const LoginPage = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginClick = () => {
        loginClick(id, password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <>
            <Global styles={globalStyles} />
            <Background>
                <LoginBox>
                    <Title>로그인</Title>
                    <SubTitle>pretzel 계정으로 로그인</SubTitle>
                    <BoxBottom>
                        <Id type='text' placeholder="아이디" value={id} onChange={handleIdChange} />
                        <PasswordInput
                            placeholder="비밀번호"
                            onChange={handlePasswordChange}
                            showPassword={showPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                        />
                        <LoginButton value='로그인' type='button' onClick={handleLoginClick} />
                    </BoxBottom>
                    <AccountOptions>
                        <SelectOption><Move href=''>아이디 찾기</Move></SelectOption><Bar>ㅣ</Bar>
                        <SelectOption><Move href=''>비밀번호 찾기</Move></SelectOption><Bar>ㅣ</Bar>
                        <SelectOption><Move href=''>회원가입</Move></SelectOption>
                    </AccountOptions>
                    <BoxFooter>
                        <SubText>다른 방법으로 로그인하기</SubText>
                        <Link>
                            <Move href=''><NaverLogin src='/images/icons/NaverLogin.png'/></Move>
                            <Move href=''><KaKaoLogin src='/images/icons/KakaoLogin.png'/></Move>
                        </Link>
                    </BoxFooter>
                </LoginBox>
            </Background>
        </>
    );
}

export default LoginPage;
