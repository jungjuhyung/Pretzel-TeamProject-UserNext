"use client";
import MyProfile from "./myProfile/page";
import SubNav from "./subNav/page";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Layout = observer(({ children }) => {

    const[subMenu, setSubMenu] = useState("ViewingHistory")

    const path = usePathname();

    useEffect(() => {
        // 현재 경로에 따라 subMenu 값을 설정합니다.
        if (path.includes("movieWishList")) {
            setSubMenu("MovieWishList");
        } else if (path.includes("myQnA")) {
            setSubMenu("MyQnA");
        } else if (path.includes("myReview")) {
            setSubMenu("MyReview");
        } else if (path.includes("viewingHistory")) {
            setSubMenu("ViewingHistory");
        }
    }, []);
    
    return (
        <>
            <MyProfile />
            <SubNav subMenu={subMenu} setSubMenu={setSubMenu} />
            {children}
        </>
    );
})
export default Layout
