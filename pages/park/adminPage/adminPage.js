"use client";

import { AdminContentContainer, AllAdminContainer, Whitespace } from "@/styles/park/adminPage/adminCommonCSS";
import UserManage from "./userManage";
import UserDetail from "./userDetail";

const AdminPage = () => {
    return (
        <AllAdminContainer>
            <Whitespace />
            <AdminContentContainer>
                {/* <UserManage /> */}
                <UserDetail />
            </AdminContentContainer>
        </AllAdminContainer >
    )
}

export default AdminPage;