import React from "react";
import SearchStore from "./SearchStore";

// React Context 생성

export const SearchContext = React.createContext(SearchStore);

// Context Provider 컴포넌트 생성 
export const StoreProvider = ({children}) =>{
    return (
        <>
            <SearchContext.Provider value={SearchStore} >
                {children}
            </SearchContext.Provider>
        </>
    )
}