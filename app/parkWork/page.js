"use client";

// 공통 css 적용
import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '../../styles/commons/commons.css'
import Header from '@/pages/commons/header';
import MyProfile from '@/pages/park/myPage/myProfile';
import SubNav from '@/pages/park/myPage/subNav';
import ViewingHistory from '@/pages/park/myPage/viewingHistory';
import Footer from '@/pages/commons/Footer';
import MyPage from '@/pages/park/myPage/myPage';

export default function ParkWork() {
    return (
        <>
            {/* <Header />
            <DetailInfo />
            <Cast />
            <Staff />
            <Review />
            <Footer /> */}
            {/* <Header />
            <MyProfile />
            <SubNav />
            <ViewingHistory />
            <Footer /> */}
            <MyPage />
        </>
    )
}