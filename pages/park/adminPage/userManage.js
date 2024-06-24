"use client";

import { AllContainer, DetailBtn, PaginationNum, Pagings, SearchField, UserBirth, UserContainer, UserContainerContent, UserDetail, UserEmail, UserID, UserInfo, UserInfoTitle, UserManageContainer, UserNum, Whitespace, WithdrawalDate, WithdrawalStatus, ContentContainer, PaginationPrev, PaginationNext } from "@/styles/park/adminPage/UserManageCSS";
import { AdminPageTitle, ColorOrange } from "@/styles/park/commons/commonsCSS";

const UserManage = () => {
    return (
        <AllContainer>
            <Whitespace />
            <UserManageContainer>
                <AdminPageTitle>회원 관리</AdminPageTitle>
                <SearchField type="text" placeholder="이름 또는 이메일을 입력해 주세요." />
                <UserNum>회원 <ColorOrange>437</ColorOrange>명</UserNum>
                <UserContainer>
                    <UserContainerContent>
                        <UserInfoTitle>
                            <UserID>아이디</UserID>
                            <UserEmail>이메일</UserEmail>
                            <UserBirth>생년월일</UserBirth>
                            <WithdrawalStatus>탈퇴 여부</WithdrawalStatus>
                            <WithdrawalDate>탈퇴 일시</WithdrawalDate>
                            <UserDetail>상세 정보</UserDetail>
                        </UserInfoTitle>
                        <UserInfo>
                            <UserID>oing_0ing</UserID>
                            <UserEmail>oing_0ing@naver.com</UserEmail>
                            <UserBirth>2001-11-14</UserBirth>
                            <WithdrawalStatus>X</WithdrawalStatus>
                            <WithdrawalDate></WithdrawalDate>
                            <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                        </UserInfo>
                        <UserInfo>
                            <UserID>oing_0ing</UserID>
                            <UserEmail>oing_0ing@naver.com</UserEmail>
                            <UserBirth>2001-11-14</UserBirth>
                            <WithdrawalStatus><ColorOrange>O</ColorOrange></WithdrawalStatus>
                            <WithdrawalDate>2024-06-24</WithdrawalDate>
                            <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                        </UserInfo>
                        <UserInfo>
                            <UserID>oing_0ing</UserID>
                            <UserEmail>oing_0ing@naver.com</UserEmail>
                            <UserBirth>2001-11-14</UserBirth>
                            <WithdrawalStatus>X</WithdrawalStatus>
                            <WithdrawalDate></WithdrawalDate>
                            <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                        </UserInfo>
                        <UserInfo>
                            <UserID>oing_0ing</UserID>
                            <UserEmail>oing_0ing@naver.com</UserEmail>
                            <UserBirth>2001-11-14</UserBirth>
                            <WithdrawalStatus>X</WithdrawalStatus>
                            <WithdrawalDate></WithdrawalDate>
                            <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                        </UserInfo>
                        <UserInfo>
                            <UserID>oing_0ing</UserID>
                            <UserEmail>oing_0ing@naver.com</UserEmail>
                            <UserBirth>2001-11-14</UserBirth>
                            <WithdrawalStatus>X</WithdrawalStatus>
                            <WithdrawalDate></WithdrawalDate>
                            <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                        </UserInfo>
                        <UserInfo>
                            <UserID>oing_0ing</UserID>
                            <UserEmail>oing_0ing@naver.com</UserEmail>
                            <UserBirth>2001-11-14</UserBirth>
                            <WithdrawalStatus>X</WithdrawalStatus>
                            <WithdrawalDate></WithdrawalDate>
                            <UserDetail><DetailBtn>상세</DetailBtn></UserDetail>
                        </UserInfo>
                    </UserContainerContent>
                </UserContainer>
                <Pagings>
                    <PaginationPrev>이전</PaginationPrev>
                    <PaginationNum>1 &#160;&#160;2 &#160;&#160;3 &#160;&#160;4 &#160;&#160;5</PaginationNum>
                    <PaginationNext>다음</PaginationNext>
                </Pagings>
            </UserManageContainer>
        </AllContainer >
    )
}

export default UserManage;