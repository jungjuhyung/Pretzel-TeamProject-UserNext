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
import ProfileManagement from "@/pages/choi/profile/ProfileManagement";

import Image from "next/image";
import ProfileSelect from "@/pages/choi/profile/ProfileSelect";
import MyProfile from "@/pages/park/myPage/myProfile";

// 공통 css 적용
import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '../../project/styles/commons/backgound-color_black.css'



export default function Home() {
  return (
    //<Login/>                  // 로그인 페이지
    //<IdFindPage/>             // 아이디 찾기 페이지
    //<IdFindSuccessPage/>      // 아이디 찾기 성공 페이지
    //<IdFindFailPage/>         // 아이디 찾기 실패 페이지
    //<PwFindPage/>             // 비밀번호 찾기 페이지
    //<VerificationPage/>       // 인증번호 입력 페이지
    //<PwResetPage/>            // 새로운 비밀번호 입력 페이지
    //<JoinPage/>               // 회원가입 페이지
    //<Footer/>                 // 공용 Footer 페이지
    //<ProfileCreate/>          // 프로필 생성 페이지
    //<ProfileSelect/>          // 프로필 선택 페이지
    <ProfileManagement/>      // 프로필 관리 페이지 
    //<MyProfile/>
  );
}
