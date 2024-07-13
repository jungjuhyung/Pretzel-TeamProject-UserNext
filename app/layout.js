// 공통 css 적용
"use client"
import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '@/styles/commons/commons.css'

import Header from './commons/header/page';
import Footer from './commons/Footer/page';
import { LoginContext } from '@/stores/StoreContext';
import { useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {

  const loginStore = useContext(LoginContext)
  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log("메인 렌더링1", token)
    console.log("메인 렌더랑2", localStorage.getItem('name'))
    if (token) {
      console.log("로그인 성공");
      loginStore.setToken(
        localStorage.setItem("token", token),
        localStorage.setItem("profile_idx", localStorage.getItem('profile_idx')),
        localStorage.setItem("name", localStorage.getItem('name')),
        localStorage.setItem("img_name", localStorage.getItem('img_name')),
        localStorage.setItem("regdate", localStorage.getItem('regdate')),
        localStorage.setItem("user_id", localStorage.getItem('user_id')),
        localStorage.setItem("like_thema", localStorage.getItem('like_thema')),
        localStorage.setItem("gender", localStorage.getItem('gender')),
        localStorage.setItem("birth", localStorage.getItem('birth'))
      )
    } else {
      console.log("로그인 실패");
      loginStore.setToken("", "", "", "", "", "", "", "", "")
    }
  }, [])

  // 현재 경로 가져오기
  const currentPath = usePathname();

  function layout_state() {
    if (currentPath === '/park/detail/moviePlayPage') {
      return (
        <>
          {children}
        </>
      )
    } else {
      return (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )
    }
  }

  return (
    <html lang="ko">
      <body>
        {layout_state()}
      </body>
    </html>
  );
}
