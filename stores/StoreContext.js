import React from "react";
import SearchStore from "./SearchStore";
import TokenStore from "./TokenStore";
import myPageStore from "./park/myPageStore";

// React Context 생성

export const SearchContext = React.createContext(SearchStore);
export const TokenContext = React.createContext(TokenStore);
export const MyPageContext = React.createContext(myPageStore);

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
        </>
    )
}