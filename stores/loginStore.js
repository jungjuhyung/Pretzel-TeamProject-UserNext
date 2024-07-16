import { makeAutoObservable } from "mobx";
import { deleteState, loadState, saveState } from "./localStorage";

class LoginStore {
    token = "";
    user_id = "";
    profile_idx = "";
    isLogin = false;

    constructor() {
        makeAutoObservable(this);
        this.loadLocal();
    }

    setToken(token) {
        this.token = token;
    }

    setUser_id(user_id) {
        this.user_id = user_id;
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
        this.token = "";
        this.profile_idx = "";
        this.isLogin = false;
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