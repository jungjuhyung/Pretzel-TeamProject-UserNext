// 마이페이지 - 중간에 들어가는 메뉴바
"use client";

import { Menus, SubNavContainer } from "@/styles/park/myPage/subNavCSS";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";

const SubNav = observer(({ subMenu, setSubMenu }) => {
    const router = useRouter();

    const handleMenuClick = (menu) => {
        setSubMenu(menu)
        switch (menu) {
            case 'MovieWishList':
                router.push("/park/myPage/movieWishList")
            break;
            case 'MyQnA':
                router.push("/park/myPage/myQnA")
            break;
            case 'MyReview':
                router.push("/park/myPage/myReview")
            break;
            case 'ViewingHistory':
                router.push("/park/myPage/viewingHistory")
            break;
        }
    }

    return (
        <>
            <SubNavContainer>
                <Menus active={subMenu === 'ViewingHistory'} onClick={() => handleMenuClick('ViewingHistory')}>시청 내역</Menus>
                <Menus active={subMenu === 'MovieWishList'} onClick={() => handleMenuClick('MovieWishList')}>보고싶은 리스트</Menus>
                <Menus active={subMenu === 'MyQnA'} onClick={() => handleMenuClick('MyQnA')}>문의 내역</Menus>
                <Menus active={subMenu === 'MyReview'} onClick={() => handleMenuClick('MyReview')}>리뷰</Menus>
            </SubNavContainer>
        </>
    )
})

export default SubNav;