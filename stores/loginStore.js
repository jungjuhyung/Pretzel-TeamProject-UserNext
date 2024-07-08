import { makeAutoObservable } from "mobx";

class LoginStore {
    // 관리자 정보
    profile_idx = ""
    name='';
    img_name='0';
    regdate=""
    user_id= '';
    like_thema=[]
    birth=""
    gender=""
    status=false
    // 토큰
    token = '';
    constructor() {
        makeAutoObservable(this);
    }

    setProfile_idx(profile_idx){
        this.profile_idx = profile_idx;
    }
    setName(name){
        this.name = name;
    }
    setImg_name(img_name){
        this.img_name = img_name;
    }
    setRegdate(regdate){
        this.regdate = regdate;
    }
    setUser_id(user_id){
        this.user_id = user_id;
    }
    setLike_thema(like_thema){
        this.like_thema = like_thema;
    }
    setBirth(birth){
        this.birth = birth;
    }
    setGender(gender){
        this.gender = gender;
    }

    // 로그인 - 토큰
    setToken(token,profile_idx, name, img_name,regdate,user_id,like_thema,gender,birth){
            this.token = token;
            this.profile_idx = profile_idx;
            this.name = name;
            this.img_name = img_name;
            this.regdate = regdate;
            this.user_id = user_id;
            this.like_thema = like_thema;
            this.gender = gender;
            this.birth = birth;
        if (token != "") {
            localStorage.setItem("token", token);
            localStorage.setItem("profile_idx", profile_idx);
            localStorage.setItem("name", name);
            localStorage.setItem("img_name", img_name);
            localStorage.setItem("regdate", regdate);
            localStorage.setItem("user_id", user_id);
            localStorage.setItem("like_thema", like_thema);
            localStorage.setItem("gender", gender);
            localStorage.setItem("birth", birth);
            this.status=true
        } else {
            localStorage.removeItem("token", token);
            localStorage.removeItem("profile_idx", profile_idx);
            localStorage.removeItem("name", name);
            localStorage.removeItem("img_name", img_name);
            localStorage.removeItem("regdate", regdate);
            localStorage.removeItem("user_id", user_id);
            localStorage.removeItem("like_thema", like_thema);
            localStorage.removeItem("gender", gender);
            localStorage.removeItem("birth", birth);
            this.status=false
        }
    }

}

export default new LoginStore();