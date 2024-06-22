// 마이페이지
"use client";

import { ColorOrange, Icon20px } from "@/styles/park/commons/commonsCSS";
import { Container, EditSubscriptionBtn, EditUserInfoBtn, ProfileContainer, ProfileImg, ProfileManageBtn, SubscriptionInfo, UserInfoContainer, UserName } from "@/styles/park/myPage/myProfileCSS";

const MyProfile = () => {
    return (
        <ProfileContainer> {/* 프로필 감싸는 container */}

            <ProfileImg src='/images/samples/oing.png' /> {/* 프로필 사진 */}

            <UserInfoContainer> {/* 회원정보 container */}

                <Container>
                    <UserName>오잉</UserName> {/* 회원의 프로필 이름 */}
                    <ProfileManageBtn>프로필 관리</ProfileManageBtn> {/* 프로필 관리 버튼 */}
                </Container>

                <Container>
                    <Icon20px src='/images/icons/ticket.png' />
                    <SubscriptionInfo>현재 사용중인 구독권 &#160;<ColorOrange>베이직</ColorOrange></SubscriptionInfo>
                    <EditSubscriptionBtn>구독권 변경하기</EditSubscriptionBtn> {/* 구독권 변경 및 결제 버튼 */}
                </Container>

                <Container>
                    <Icon20px src='/images/icons/setting.png' />
                    <EditUserInfoBtn>회원정보 수정</EditUserInfoBtn> {/* 회원정보 수정 버튼 */}
                </Container>

            </UserInfoContainer>

        </ProfileContainer>
    );
};

export default MyProfile;
