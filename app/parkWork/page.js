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
import TopBtn from '@/pages/commons/topBtn';
import MyQnA from '@/pages/park/myPage/myQnA';
import MyReview from '@/pages/park/myPage/myReview';
import SubscriptionPage from '@/pages/park/myPage/subscriptionPage';
import DetailInfo from '@/pages/park/detailPage/detailInfo';
import Director from '@/pages/park/detailPage/director';

export default function ParkWork() {
    return (
        <>
            <Header />
            <DetailInfo />
            <Director />
            <Footer />
        </>
    )
}