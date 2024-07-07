import { makeAutoObservable } from "mobx";

class MyPageStore {

    constructor() {
        makeAutoObservable(this);
    }

    // 관리자 정보 변경
    setAdminInfo(k, v) {
        this.adminInfo[k] = v;
    }

    // 로그인 - 아이디
    setAdminId(admin_id) {
        this.admin_id = admin_id;
    }

}

export default new MyPageStore();