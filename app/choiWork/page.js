"use client";

// 공통 css 적용
import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '../../styles/commons/commons.css'

import Header from '../../pages/commons/header';
import SubNav from '../../pages/park/myPage/subNav';
import Footer from '../../pages/commons/Footer';

// 로그인
import LoginPage from '@/pages/choi/login/loginPage';
import IdFindFailPage from '@/pages/choi/login/IdFindFailPage';
import IdFindPage from '@/pages/choi/login/IdFindPage';
import JoinPage from '@/pages/choi/login/JoinPage';
import IdFindSuccessPage from '@/pages/choi/login/IdFindSuccessPage';
import PwFindPage from '@/pages/choi/login/PwFindPage';
import PwResetPage from '@/pages/choi/login/PwResetPage';
import VerificationPage from '@/pages/choi/login/VerificationPage';

// 프로필
import ProfileCreate from '@/pages/choi/profile/ProfileCreate';
import ProfileManagement from '@/pages/choi/profile/ProfileManagement';
import ProfileSelect from '@/pages/choi/profile/ProfileSelect';
import ProfileUpdate from '@/pages/choi/profile/ProfileUpdate';
import ProfileDelete from '@/pages/choi/profile/ProfileDelete';

// 장르
import GenreSelect from '@/pages/choi/genre/GenreSelect';

// 메인
import MainHome from '@/pages/choi/main/MainHome';
import FAQPage from '@/pages/choi/servicecenter/FAQPage';

export default function ChoiWork() {
    return (
        <>
            <Header />
            {/* <SubNav /> */}

            {/* 임시 내용 보는 공간 */}

            {/* 로그인 관련 페이지 */}
            {/* <LoginPage/> */}
            {/* <IdFindFailPage/> */}
            {/* <IdFindPage/> */}
            {/* <JoinPage/> */}
            {/* <IdFindSuccessPage/> */}
            {/* <PwFindPage/> */}
            {/* <PwResetPage/> */}
            {/* <VerificationPage/> */}


            {/* 프로필 관련 페이지 */}

            {/* <ProfileCreate/> */}
            {/* <ProfileManagement/> */}
            {/* <ProfileSelect/> */}
            {/* <ProfileUpdate/> */}
            {/* <ProfileDelete/> */}

            {/* 장르 선택 */}
            {/* <GenreSelect/> */}

            {/* 메인 */}
            {/* <MainHome/> */}

            {/* 고객센터 */}
            <FAQPage/>
            <Footer />
        </>
    )
}