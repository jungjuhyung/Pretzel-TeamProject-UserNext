import IdFindFailPage from "@/pages/choi/login/IdFindFailPage";
import IdFindPage from "@/pages/choi/login/IdFindPage";
import IdFindSuccessPage from "@/pages/choi/login/IdFindSuccessPage";
import PwFindPage from "@/pages/choi/login/PwFindPage";
import PwResetPage from "@/pages/choi/login/PwResetPage";
import VerificationPage from "@/pages/choi/login/VerificationPage";
import Login from "@/pages/choi/login/loginPage";
import Footer from "@/pages/commons/Footer";
import ProfileCreate from "@/pages/choi/profile/ProfileCreate";
import JoinPage from "@/pages/choi/login/JoinPage";

import Image from "next/image";
import ProfileSelect from "@/pages/choi/profile/ProfileSelect";
import MyProfile from "@/pages/park/myPage/myProfile";

// reset.css 적용
import '@/styles/commons/reset.css'

export default function Home() {
  return (
    //<Login/>
    //<IdFindPage/>
    //<IdFindSuccessPage/>
    //<IdFindFailPage/>
    //<PwFindPage/>
    //<VerificationPage/>
    //<PwResetPage/>
    //<JoinPage/>
    //<Footer/>
    //<ProfileCreate/>
    //<ProfileSelect/>
    <MyProfile/>
  );
}
