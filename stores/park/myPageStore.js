import { makeAutoObservable } from "mobx";

class MyPageStore {
    price = ''; // 구독권 가격
    orderName = ''; // 구독권 이름

    constructor() {
        makeAutoObservable(this);
    }

    // 구독권 가격
    setPrice(price) {
        this.price = price;
    }

    // 구독권 가격
    setOrderName(orderName) {
        this.orderName = orderName;
    }
}

export default new MyPageStore();