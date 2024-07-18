import MyProfile from "./myProfile/page";
import SubNav from "./subNav/page";

export default function RootLayout({ children }) {

    return (
        <>
            <MyProfile />
            <SubNav />
            {children}
        </>
    );
  }
  