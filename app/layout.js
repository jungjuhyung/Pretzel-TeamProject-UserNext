// 공통 css 적용
"use client"
import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '@/styles/commons/commons.css'

import Header from './commons/header/page';
import Footer from './commons/Footer/page';
import { LoginContext, StoresProvider } from '@/stores/StoreContext';
import { useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {

  // 현재 경로 가져오기
  const currentPath = usePathname();

  function layout_state() {
    if (currentPath === '/park/detail/moviePlayPage') {
      return (
        <body>
          {children}
        </body>
      )
    } else {
      return (
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      )
    }
  }

  return (
    <StoresProvider>
      <html lang="ko">
          {layout_state()}
      </html>
    </StoresProvider>
  );
}
