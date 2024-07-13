// 마이페이지 - 중간에 들어가는 메뉴바
"use client";

import { Menus, SubNavContainer } from "@/styles/park/myPage/subNavCSS";
import { useState } from "react";

const SubNav = ({ onMenuClick }) => {
    const [currentMenu, setCurrentMenu] = useState('ViewingHistory');

    const handleMenuClick = (menu) => {
        setCurrentMenu(menu);
        onMenuClick(menu);
    }

    return (
        <>
            <SubNavContainer>
                <Menus active={currentMenu === 'ViewingHistory'} onClick={() => handleMenuClick('ViewingHistory')}>시청 내역</Menus>
                <Menus active={currentMenu === 'MovieWishList'} onClick={() => handleMenuClick('MovieWishList')}>보고싶은 리스트</Menus>
                <Menus active={currentMenu === 'MyQnA'} onClick={() => handleMenuClick('MyQnA')}>문의 내역</Menus>
                <Menus active={currentMenu === 'MyReview'} onClick={() => handleMenuClick('MyReview')}>리뷰</Menus>
            </SubNavContainer>
        </>
    )
}

export default SubNav;