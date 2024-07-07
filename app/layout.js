// 공통 css 적용
import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '@/styles/commons/commons.css'
import Header from './commons/header/page';
import Footer from './commons/Footer/page';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
