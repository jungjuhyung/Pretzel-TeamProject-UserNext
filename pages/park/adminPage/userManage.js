"use client";

import { AllContainer, SearchField, UserBirth, UserContainer, UserContainerContent, UserDetail, UserEmail, UserID, UserInfo, UserInfoTitle, UserManageContainer, UserNum, Whitespace, WithdrawalDate, WithdrawalStatus } from "@/styles/park/adminPage/UserManageCSS";
import { AdminPageTitle, Icon24px } from "@/styles/park/commons/commonsCSS";

const UserManage = () => {
    return (
        <AllContainer>
            <Whitespace />
            <UserManageContainer>
                <AdminPageTitle>회원 관리</AdminPageTitle>
                <Icon24px src='/images/icons/search.png' />
                <SearchField type="text" />
                <UserNum></UserNum>
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
                            <UserID></UserID>
                            <UserEmail></UserEmail>
                            <UserBirth></UserBirth>
                            <WithdrawalStatus></WithdrawalStatus>
                            <WithdrawalDate></WithdrawalDate>
                            <UserDetail></UserDetail>
                        </UserInfo>
                    </UserContainerContent>
                </UserContainer>
            </UserManageContainer>
        </AllContainer >
    )
}

export default UserManage;