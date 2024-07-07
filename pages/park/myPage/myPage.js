"use client"

import Layout from "@/pages/commons/Layout"
import MyProfile from "./myProfile";
import SubNav from "./subNav";
import { useState } from "react";
import MovieWishList from "./movieWishList";
import MyQnA from "./myQnA";
import MyReview from "./myReview";
import ViewingHistory from "./viewingHistory";

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
            <Layout>
                <MyProfile />
                <SubNav onMenuClick={handleMenuClick} />
                {content}
            </Layout>
        </>
    )
}

export default MyPage;