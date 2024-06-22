"use client";

// 공통 css 적용
import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '../../styles/commons/commons.css'

import Header from '../../pages/commons/header';
import MyProfile from '../../pages/park/myPage/myProfile';
import SubNav from '../../pages/park/myPage/subNav';
import Footer from '../../pages/commons/Footer';
import ViewingHistory from '@/pages/park/myPage/viewingHistory';
import MovieWishList from '@/pages/park/myPage/movieWishList';

export default function ChoiWork() {
    return (
        <>
            <Header />
            <MyProfile />
            <SubNav />
            <MovieWishList />
            <Footer />
        </>
            //<ViewingHistory />
    )
}