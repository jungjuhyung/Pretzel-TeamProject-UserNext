import { makeAutoObservable } from "mobx";
import { deleteState, loadState, saveState } from "./localStorage";

class SubNavStore {
    currentMenu = "ViewingHistory";

    constructor() {
        makeAutoObservable(this);
        this.loadLocal();
    }

    setCurrentMenu(currentMenu) {
        this.currentMenu = currentMenu;
        this.saveLocal();
    }

    saveLocal() {
        saveState('subNavStore', {
            currentMenu: this.currentMenu
        });
    }

    deleteLocal() {
        deleteState('subNavStore');
        this.currentMenu = "";
    }

    loadLocal() {
        const savedState = loadState("subNavStore");
        if (savedState) {
            this.currentMenu = savedState.currentMenu || "";
        }
    }
}

export default new SubNavStore();