"use client";

import { AdminPageTitle } from "@/styles/park/adminPage/adminCommonCSS";
import { HorizontalLine, UserInfo, UserInfoAllContainer, UserInfoContainer, UserInfoTitle } from "@/styles/park/adminPage/userDetailCSS";

const UserDetail = () => {
    return (
        <>
            <AdminPageTitle>회원 상세</AdminPageTitle>
            <UserInfoAllContainer>
                <UserInfoContainer>
                    <UserInfoTitle>이름</UserInfoTitle>
                    <UserInfo>박다현</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>아이디</UserInfoTitle>
                    <UserInfo>oing_0ing</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>이메일</UserInfoTitle>
                    <UserInfo>oing_0ing@naver.com</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>생년월일</UserInfoTitle>
                    <UserInfo>2001-11-14</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>최근 접속일</UserInfoTitle>
                    <UserInfo>2024-06-24</UserInfo>
                </UserInfoContainer>
            </UserInfoAllContainer>
            <HorizontalLine />
        </>
    )
}

export default UserDetail;