import { makeAutoObservable } from "mobx";
import { deleteState, loadState, saveState } from "./localStorage";

class PaymentStore {
    price = 0;
    orderName = "";

    constructor() {
        makeAutoObservable(this);
        this.loadLocal();
    }

    setPrice(price) {
        this.price = price;
        this.saveLocal();
    }

    setOrderName(orderName) {
        this.orderName = orderName;
        this.saveLocal();
    }

    saveLocal() {
        saveState('paymentStore', {
            price: this.price,
            orderName: this.orderName
        });
    }

    deleteLocal() {
        deleteState('paymentStore');
        this.price = 0;
        this.orderName = "";
    }

    loadLocal() {
        const savedState = loadState("paymentStore");
        if (savedState) {
            this.price = savedState.price || 0;
            this.orderName = savedState.orderName || "";
        }
    }
}

export default new PaymentStore();