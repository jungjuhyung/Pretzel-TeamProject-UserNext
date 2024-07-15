import { makeAutoObservable } from "mobx";
import { deleteState, loadState, saveState } from "./localStorage";

class LoginStore {
    token = "";
    profile_idx = "";
    isLogin = false;
    profile = "";

    constructor() {
        makeAutoObservable(this);
        this.loadLocal();
    }

    setProfile(value) {
        this.profile = value;
        this.saveLocal();
    }

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
            isLogin: this.isLogin,
            profile: this.profile
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
            this.profile = savedState.profile || "";
        }
    }

    isToken() {
        return this.token !== "";
    }

    logout() {
        this.token = "";
        this.profile_idx = "";
        this.isLogin = false;
        this.profile = "";
        this.deleteLocal();
    }
}

export default new LoginStore();