import IdFindFailPage from "@/pages/choi/login/IdFindFailPage";
import IdFindPage from "@/pages/choi/login/IdFindPage";
import IdFindSuccessPage from "@/pages/choi/login/IdFindSuccessPage";
import PwFindPage from "@/pages/choi/login/PwFindPage";
import PwResetPage from "@/pages/choi/login/PwResetPage";
import VerificationPage from "@/pages/choi/login/VerificationPage";
import Login from "@/pages/choi/login/loginPage";
import ProfileCreate from "@/pages/choi/profile/ProfileCreate";
import JoinPage from "@/pages/choi/login/JoinPage";
import Image from "next/image";
import ProfileSelect from "@/pages/choi/profile/ProfileSelect";

import Header from "@/pages/commons/header";
import MyProfile from "@/pages/park/myPage/myProfile";
import SubNav from "@/pages/park/myPage/subNav";
import Footer from "@/pages/commons/Footer";

// 공통 css 적용
import "@/styles/commons/reset.css";
import "@/styles/commons/font.css";
import "../styles/commons/commons.css";

export default function Home() {
    return (
        //<IdFindPage/>
        //<IdFindSuccessPage/>
        //<IdFindFailPage/>
        //<PwFindPage/>
        //<VerificationPage/>
        //<PwResetPage/>
        //<JoinPage/>
        //<ProfileCreate/>
        //<ProfileSelect/>
        //<MyProfile/>
        //<SubNav/>
        <>
            <Header />
            <Login />
            <Footer />
        </>
    );
}
