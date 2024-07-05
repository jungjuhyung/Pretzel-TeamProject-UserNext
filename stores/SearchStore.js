import { makeAutoObservable } from "mobx";

class SearchStore {
    // 관리자 정보
    adminInfo = {
        admin_id: '',
        name: '',
        pwd: '',
        role: '0',
        note: '',
        status: '1'
    };

    constructor() {
        makeAutoObservable(this);
    }

    

}

export default new SearchStore();