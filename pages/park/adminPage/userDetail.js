"use client";

import { AdminPageTitle } from "@/styles/park/adminPage/adminCommonCSS";
import { HorizontalLine, ProfileContainer, Profile_Birth, Profile_Gender, Profile_Img, Profile_Info, Profile_Nickname, UserInfo, UserInfoAllContainer, UserInfoContainer, UserInfoTitle } from "@/styles/park/adminPage/userDetailCSS";

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
                    <UserInfoTitle>최근 접속일</UserInfoTitle>
                    <UserInfo>2024-06-24</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>구독 상태</UserInfoTitle>
                    <UserInfo>베이직</UserInfo>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoTitle>탈퇴 여부</UserInfoTitle>
                    <UserInfo>X</UserInfo>
                </UserInfoContainer>
            </UserInfoAllContainer>
            <HorizontalLine />

            <ProfileContainer>
                <Profile_Img src="/images/samples/oing.png" />
                <Profile_Info>
                    <Profile_Nickname>오잉</Profile_Nickname>
                    <Profile_Birth>2001-11-14</Profile_Birth>
                    <Profile_Gender>여성</Profile_Gender>
                </Profile_Info>
            </ProfileContainer>
        </>
    )
}

export default UserDetail;