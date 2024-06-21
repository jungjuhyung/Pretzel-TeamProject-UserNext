"use client";

import { ColorOrange, Icon20px } from "@/styles/park/commons/commonsCSS";
import { Container, EditSubscriptionBtn, EditUserInfoBtn, ProfileContainer, ProfileImg, ProfileManageBtn, SubscriptionInfo, UserInfoContainer, UserName } from "@/styles/park/myPage/myProfileCSS";

const MyProfile = () => {
    return (
        <ProfileContainer>
            <ProfileImg src='/images/profile/oing.png' />
            <UserInfoContainer>
                <Container>
                <UserName>오잉</UserName>
                <ProfileManageBtn>프로필 관리</ProfileManageBtn>
                </Container>

                <Container>
                <Icon20px src='/images/icons/ticket.png' />
                <SubscriptionInfo>현재 사용중인 구독권 &#160;<ColorOrange>베이직</ColorOrange></SubscriptionInfo>
                <EditSubscriptionBtn>구독권 변경하기</EditSubscriptionBtn>
                </Container>
                
                <Container>
                <Icon20px src='/images/icons/setting.png' />
                <EditUserInfoBtn>회원정보 수정</EditUserInfoBtn>
                </Container>
            </UserInfoContainer>
        </ProfileContainer>
    );
};

export default MyProfile;
