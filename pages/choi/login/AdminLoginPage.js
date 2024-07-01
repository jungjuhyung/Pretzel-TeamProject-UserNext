// 로그인 페이지

"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';
import {
    globalStyles, Background, LoginBox, Title, SubTitle,
    BoxBottom, Id, PasswordInput, LoginButton, AccountOptions,
    SelectOption, Move
} from '../../../styles/choi/login/AdminLoginPageCSS';
import axios from 'axios';

const LoginPage = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const API_URL = "/user/login"
    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // const handleLoginClick = () => {
    //     // oginClick(id, password);
    //     // axios 서버로 정보 보내기
    //     const response = axios.post("/user/login", {
    //         user_id : id, 
    //         pwd : password
    //     });
    //     console.log(response.data)
    // };

    async function login(){
        try {
            // axios 서버로 정보 보내기
            console.log(API_URL)
            const response = await axios.post(API_URL, {
                user_id : id, 
                pwd : password
                });
            console.log(response)
            console.log(response.data)
            
            // token 토큰을 로컬 스토리지에 저장
        } catch (error) {
            console.error('로그인 실패 : ', error)
            setId("error");
            setPassword("")
        }
    }
    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <>
            <Global styles={globalStyles} />
            <Background>
                <LoginBox>
                    <Title>관리자 로그인</Title>
                    <BoxBottom>
                        <Id type='text' placeholder="아이디" value={id} onChange={handleIdChange} />
                        <PasswordInput
                            placeholder="비밀번호"
                            onChange={handlePasswordChange}
                            showPassword={showPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                        />
                        <LoginButton value='로그인' type='button' onClick={login} />
                    </BoxBottom>
                    <AccountOptions>
                        <SelectOption><Move href=''>일반 회원 로그인</Move></SelectOption>
                    </AccountOptions>
                </LoginBox>
            </Background>
        </>
    );
}

export default LoginPage;
