import { createContext, useContext } from "react";
import loginStore from "./loginStore";
import passwordStore from "./passwordStore";
import profileStore from "./profileStore";
import SearchStore from "./SearchStore";
import tokenStore from "./TokenStore";
import movieDetailStore from "./movieDetailStore";
import paymentStore from "./paymentStore";
import subNavStore from "./subNavStore";

const stores = {
  loginStore,
  passwordStore,
  profileStore,
  SearchStore,
  tokenStore,
  movieDetailStore,
  paymentStore,
  subNavStore,
};

const StoresContext = createContext(stores);

export const StoresProvider = ({ children }) => {
  return (
    <StoresContext.Provider value={stores}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = () => {
  return useContext(StoresContext);
};