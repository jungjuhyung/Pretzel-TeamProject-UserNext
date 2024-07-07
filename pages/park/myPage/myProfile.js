// 마이페이지 - 프로필
"use client";

import { ColorOrange, Icon20px } from "@/styles/park/commons/commonsCSS";
import { Container, EditSubscriptionBtn, ProfileContainer, ProfileImg, ProfileManageBtn, SubscriptionInfo, UserInfoContainer, UserName } from "@/styles/park/myPage/myProfileCSS";
import { useRouter } from "next/navigation";

const MyProfile = () => {
    const router = useRouter();

    const change_sub = () => {
        router.push("/park/myPage/subscriptionPage")
    }

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
                    <EditSubscriptionBtn onClick={change_sub}>구독권 변경하기</EditSubscriptionBtn> {/* 구독권 변경 및 결제 버튼 */}
                </Container>

            </UserInfoContainer>

        </ProfileContainer>
    );
};

export default MyProfile;
