import React from "react";
import SearchStore from "./SearchStore";
import TokenStore from "./TokenStore";
import myPageStore from "./park/myPageStore";
import profileStore from "./profileStore";
import loginStore from "./loginStore";

// React Context 생성

export const SearchContext = React.createContext(SearchStore);
export const TokenContext = React.createContext(TokenStore);
export const MyPageContext = React.createContext(myPageStore);
export const ProfileContext = React.createContext(profileStore);
export const LoginContext = React.createContext(loginStore);

// Context Provider 컴포넌트 생성 
export const StoreProvider = ({children}) =>{
    return (
        <>
            <SearchContext.Provider value={SearchStore} >
                {children}
            </SearchContext.Provider>
            <TokenContext.Provider value={TokenStore} >
                {children}
            </TokenContext.Provider>
            <MyPageContext.Provider value={myPageStore} >
                {children}
            </MyPageContext.Provider>
            <ProfileContext.Provider value={profileStore} >
                {children}
            </ProfileContext.Provider>
            <LoginContext.Provider value={loginStore} >
                {children}
            </LoginContext.Provider>
        </>
    )
}