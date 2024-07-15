import { makeAutoObservable } from "mobx";
import { deleteState, loadState, saveState } from "./localStorage";

class MovieDetailStore {
    movie_idx = "";

    constructor() {
        makeAutoObservable(this);
        this.loadLocal();
    }

    setMoiveIdx(movie_idx) {
        this.movie_idx = movie_idx;
        this.saveLocal();
    }

    saveLocal() {
        saveState('movieDetailStore', {
            movie_idx: this.movie_idx
        });
    }

    deleteLocal() {
        deleteState('movieDetailStore');
        this.movie_idx = "";
    }

    loadLocal() {
        const savedState = loadState("movieDetailStore");
        if (savedState) {
            this.movie_idx = savedState.movie_idx || "";
        }
    }
}

export default new MovieDetailStore();