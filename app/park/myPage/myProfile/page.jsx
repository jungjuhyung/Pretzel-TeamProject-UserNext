// 마이페이지 - 프로필
"use client";

import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { useStores } from "@/stores/StoreContext";
import { ColorOrange, Icon20px } from "@/styles/park/commons/commonsCSS";
import { Container, EditSubscriptionBtn, ProfileContainer, ProfileImg, ProfileManageBtn, SubscriptionInfo, UserInfoContainer, UserName } from "@/styles/park/myPage/myProfileCSS";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MyProfile = () => {
    const { loginStore } = useStores();
    const router = useRouter();

    // 프로필 정보
    const [myProfile, setMyProfile] = useState({});

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        profile_detail()
    }, []);

    const API_URL = "/profile/"

    // 프로필 정보 가져오기
    async function profile_detail() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.post(API_URL + "profile_detail",
                {
                    profile_idx: loginStore.profile_idx
                },
                {
                    header: {
                        Authorization: loginStore.token
                    }
                }
            );

            if (response.data) {
                setMyProfile(response.data)
            }
        } catch (error) {
            console.error('프로필 정보 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    const change_sub = () => {
        router.push("/park/myPage/subscriptionPage")
    }

    const onClickManageBtn = () => {
        router.push("/choi/profile/profileManagement")
    }

    return (
        <ProfileContainer> {/* 프로필 감싸는 container */}

            <ProfileImg src={`http://localhost:8080/common/image?imageName=${myProfile.img_name}`} /> {/* 프로필 사진 */}

            <UserInfoContainer> {/* 회원정보 container */}

                <Container>
                    <UserName>{myProfile.name}</UserName> {/* 회원의 프로필 이름 */}
                    <ProfileManageBtn onClick={onClickManageBtn}>프로필 관리</ProfileManageBtn> {/* 프로필 관리 버튼 */}
                </Container>

                <Container>
                    <Icon20px src='/images/icons/ticket.png' />
                    <SubscriptionInfo>현재 사용중인 구독권 &#160;<ColorOrange>{myProfile.subs}</ColorOrange></SubscriptionInfo>
                    <EditSubscriptionBtn onClick={change_sub}>구독권 변경하기</EditSubscriptionBtn> {/* 구독권 변경 및 결제 버튼 */}
                </Container>

            </UserInfoContainer>

        </ProfileContainer>
    );
};

export default MyProfile;
