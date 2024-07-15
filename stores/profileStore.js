import { makeAutoObservable } from "mobx";

class profileStore {
    profileDetail={
        profile_idx: "",
        name: "",
        img_name: "",
        regdate: "",
        user_id: "",
        subs: "",
        birth: "",
        gender: null,
        age: 0,
        like_thema: []
    }
    
    constructor() {
        makeAutoObservable(this);
    }
    
    setProfileDetail(profileDetail) {
        this.profileDetail = profileDetail;
    }
}

export default new profileStore();