// 마이페이지 중간에 들어가는 메뉴바
"use client";

const { SubNavContainer, Menus } = require("@/styles/park/myPage/subNavCSS");

const SubNav = () => {
    return(
        <SubNavContainer>
            <Menus>시청 내역</Menus>
            <Menus>보고싶은 리스트</Menus>
            <Menus>문의 내역</Menus>
            <Menus>리뷰</Menus>
        </SubNavContainer>
    )
}

export default SubNav;