// 마이페이지 - 중간에 들어가는 메뉴바
"use client";

import { useStores } from "@/stores/StoreContext";
import { Menus, SubNavContainer } from "@/styles/park/myPage/subNavCSS";
import { useRouter } from "next/navigation";

const SubNav = ({ onMenuClick }) => {
    const { subNavStore } = useStores();
    const router = useRouter();

    const handleMenuClick = (menu) => {
        switch (menu) {
            case 'MovieWishList':
                subNavStore.setCurrentMenu("MovieWishList")
                router.push("/park/myPage/movieWishList")
                break;
            case 'MyQnA':
                subNavStore.setCurrentMenu("MyQnA")
                router.push("/park/myPage/myQnA")
                break;
            case 'MyReview':
                subNavStore.setCurrentMenu("MyReview")
                router.push("/park/myPage/myReview")
                break;
            case 'ViewingHistory':
                subNavStore.setCurrentMenu("ViewingHistory")
                router.push("/park/myPage/viewingHistory")
                break;
            default:
                subNavStore.setCurrentMenu("ViewingHistory")
                router.push("/park/myPage/viewingHistory")
        }
    }

    return (
        <>
            <SubNavContainer>
                <Menus active={subNavStore.currentMenu === 'ViewingHistory'} onClick={() => handleMenuClick('ViewingHistory')}>시청 내역</Menus>
                <Menus active={subNavStore.currentMenu === 'MovieWishList'} onClick={() => handleMenuClick('MovieWishList')}>보고싶은 리스트</Menus>
                <Menus active={subNavStore.currentMenu === 'MyQnA'} onClick={() => handleMenuClick('MyQnA')}>문의 내역</Menus>
                <Menus active={subNavStore.currentMenu === 'MyReview'} onClick={() => handleMenuClick('MyReview')}>리뷰</Menus>
            </SubNavContainer>
        </>
    )
}

export default SubNav;