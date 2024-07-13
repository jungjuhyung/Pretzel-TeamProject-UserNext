"use client"

import { useState } from "react";
import MovieWishList from "../movieWhishList/page";
import MyQnA from "../myQnA/page";
import MyReview from "../myReview/page";
import ViewingHistory from "../viewingHistory/page";
import MyProfile from "../myProfile/page";
import SubNav from "../subNav/page";

const MyPage = () => {
    const [selectedMenu, setSelectedMenu] = useState('watchHistory');

    // 함수를 통해 선택된 메뉴를 변경하는 예시
    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    }

    let content;
    switch (selectedMenu) {
        case 'MovieWishList':
            content = <MovieWishList />;
            break;
        case 'MyQnA':
            content = <MyQnA />;
            break;
        case 'MyReview':
            content = <MyReview />;
            break;
        case 'ViewingHistory':
            content = <ViewingHistory />;
            break;
        default:
            content = <ViewingHistory />;
    }

    return (
        <>
            <MyProfile />
            <SubNav onMenuClick={handleMenuClick} />
            {content}
        </>
    )
}

export default MyPage;