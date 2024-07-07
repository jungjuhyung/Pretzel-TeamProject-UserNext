"use client";

// 공통 css 적용
import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '../../styles/commons/commons.css'

import Header from '../../pages/commons/header';
import SubNav from '../../pages/park/myPage/subNav';
import Footer from '../../pages/commons/Footer';

// 로그인
import LoginPage from '@/pages/choi/login/loginPage/loginPage';
import IdFindFailPage from '@/pages/choi/login/IdFindFailPage/IdFindFailPage';
import IdFindPage from '@/pages/choi/login/IdFindPage/IdFindPage';
import JoinPage from '@/pages/choi/login/JoinPage/JoinPage';
import IdFindSuccessPage from '@/pages/choi/login/IdFindSuccessPage/IdFindSuccessPage';
import PwFindPage from '@/pages/choi/login/PwFindPage/PwFindPage';
import PwResetPage from '@/pages/choi/login/PwResetPage/PwResetPage';
import VerificationPage from '@/pages/choi/login/VerificationPage/VerificationPage';
import AdminLoginPage from '@/pages/choi/login/AdminLoginPage/AdminLoginPage';

// 프로필
import ProfileCreate from '@/pages/choi/profile/ProfileCreate';
import ProfileManagement from '@/pages/choi/profile/ProfileManagement';
import ProfileSelect from '@/pages/choi/profile/ProfileSelect';
import ProfileUpdate from '@/pages/choi/profile/ProfileUpdate';
import ProfileDelete from '@/pages/choi/profile/ProfileDelete';

// 장르
import GenreSelect from '@/pages/choi/genre/GenreSelect';
import Action from '@/pages/choi/genre/Action';
import Animation from '@/pages/choi/genre/Animation';
import Comic from '@/pages/choi/genre/Comic';
import Crime from '@/pages/choi/genre/Crime';
import Horror from '@/pages/choi/genre/Horror';
import Romence from '@/pages/choi/genre/Romence';

// 메인
import MainHome from '@/pages/choi/main/MainHome';
import AnnouncementPage from '@/pages/choi/servicecenter/AnnouncementPage';
import ContactPage from '@/pages/choi/servicecenter/ContactPage';
import FAQPage from '@/pages/choi/servicecenter/FAQPage';
import PaymentPage from '@/pages/choi/servicecenter/PaymentPage';

// FAQ


// 검색
import SearchPage from '@/pages/choi/search/SerchPage';



export default function ChoiWork() {
    return (
        <>
            {/* <Header /> */}
            {/* <SubNav /> */}

            {/* 임시 내용 보는 공간 */}

            {/* 로그인 관련 페이지 */}
            {/* <LoginPage/> */}
            {/* <IdFindFailPage/> */}
            {/* <IdFindPage/> */}
            {/* <JoinPage/> */}
            {/* <IdFindSuccessPage/> */}
            <PwFindPage/>
            {/* <PwResetPage/> */}
            {/* <VerificationPage/> */}
            {/* <AdminLoginPage/> */}


            {/* 프로필 관련 페이지 */}

            {/* <ProfileCreate/> */}
            {/* <ProfileManagement/> */}
            {/* <ProfileSelect/> */}
            {/* <ProfileUpdate/> */}
            {/* <ProfileDelete/> */}

            {/* 장르 선택 */}
            {/* <GenreSelect/> */}
            <Action/>
            {/* <Animation/> */}
            {/* <Comic/> */}
            {/* <Crime/> */}
            {/* <Horror/> */}
            {/* <Romence/> */}


            {/* 메인 */}
            {/* <MainHome/> */}

            {/* FAQ */}
            {/* <AnnouncementPage/> */}
            {/* <ContactPage/> */}
            {/* <FAQPage/> */}
            {/* <PaymentPage/> */}
            {/* <SearchPage/> */}
            {/* <Footer /> */}
        </>
    )
}