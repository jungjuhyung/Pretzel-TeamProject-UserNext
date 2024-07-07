// 로그인 페이지

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Global } from '@emotion/react';
import {
    globalStyles, Background, LoginBox, Title, SubTitle,
    BoxBottom, Id, PasswordInput, LoginButton, AccountOptions,
    SelectOption, Bar, BoxFooter, Move, SubText,
    Link, NaverLogin, KaKaoLogin, loginClick
} from '../../../../styles/choi/login/loginPageCSS';
import axios from 'axios';
import Layout from '@/pages/commons/Layout';

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const router = useRouter()

    const goIdFind = () => {
        router.push("/choi/login/IdFindPage/IdFindPage")
    }

    const goPwFind = () =>{
        router.push("/choi/login/PwFindPage/PwFindPage")
    }

    const goJoin = () => {
        router.push("/choi/login/JoinPage/JoinPage")
    }

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const API_URL = '/user/login'

    async function login(){
        console.log('보내는 데이터 : ', id , password)
        try {
            // axios 서버로 정보 보내기
            const response = 
                await axios.post(API_URL, {
                    user_id : id,
                    pwd : password,
                });
            console.log('결과 : ' , response.data)

            const token = response.data.token

        } catch (error) {
            console.error('실패 : ', error)
        }
    }

    return (
        <>
        <Layout>
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
                            <Move href=''><NaverLogin src='/images/icons/NaverLogin.png'/></Move>
                            <Move href=''><KaKaoLogin src='/images/icons/KakaoLogin.png'/></Move>
                        </Link>
                    </BoxFooter>
                </LoginBox>
            </Background>
        </Layout>
        </>

    );
}

export default LoginPage;
