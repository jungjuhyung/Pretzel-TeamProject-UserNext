import { makeAutoObservable } from "mobx";
import { deleteState, loadState, saveState } from "./localStorage";

class LoginStore {
    token = "";
    profile_idx = "";
    isLogin = false;

    constructor() {
        makeAutoObservable(this);
        this.loadLocal()
    }

    // 토큰 설정 
    setToken(token) {
        this.token = token;
        this.saveLocal();
    }

    setProfile_idx(profile_idx) {
        this.profile_idx = profile_idx;
        this.isLogin = true;
        this.saveLocal();
    }

    saveLocal() {
        saveState('loginStore', {
            token: this.token,
            profile_idx: this.profile_idx,
            isLogin: this.isLogin
        });
    }

    deleteLocal() {
        deleteState('loginStore');
    }

    loadLocal() {
        const savedState = loadState("loginStore");
        if (savedState) {
          this.token = savedState.token || "";
          this.profile_idx = savedState.profile_idx || "";
          this.isLogin = savedState.isLogin || false;
        }
      }
}

export default new LoginStore();