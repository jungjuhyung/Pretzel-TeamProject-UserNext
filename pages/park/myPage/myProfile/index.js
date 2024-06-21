"use client";

import { ProfileContainer, ProfileImg, ProfileManageButton, UserInfoContainer, UserName } from "@/styles/park/myPage/myProfile";

const MyProfile = () => {
    return (
        <ProfileContainer>
            <ProfileImg src='/images/profile/oing.png' />
            <UserInfoContainer>
                <UserName>오잉</UserName>
                <ProfileManageButton>프로필 관리</ProfileManageButton>
            </UserInfoContainer>
        </ProfileContainer>
    );
};

export default MyProfile;
