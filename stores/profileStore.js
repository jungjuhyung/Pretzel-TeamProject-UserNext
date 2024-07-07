import { makeAutoObservable } from "mobx";

class profileStore {
    // 관리자 정보
    profile_idx = '';

    constructor() {
        makeAutoObservable(this);
    }
    
    setProfile_idx(profile_idx){
        this.profile_idx = profile_idx;
    }
}

export default new profileStore();