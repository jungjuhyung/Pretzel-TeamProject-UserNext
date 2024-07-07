import React from "react";
import SearchStore from "./SearchStore";
import TokenStore from "./TokenStore";

// React Context 생성

export const SearchContext = React.createContext(SearchStore);
export const TokenContext = React.createContext(TokenStore);

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
        </>
    )
}