import { makeAutoObservable } from "mobx";

class TokenStore {

   // 사용자 토큰
token = null

constructor(){
    // MobX 스토어를 자동으로 관찰 가능하게 설정
    makeAutoObservable(this)
}

   // 1. 토큰 설정 후 인증 상태 설정
    setToken(token){
        this.token = token
        if (token) {
            localStorage.setItem('token', token)
            
        }else {
            localStorage.removeItem('token')
        
        }
    }
    
    // 2. 로컬 스토리지에서 토큰 가져오기
    loadToken(){
        const token = localStorage.getItem('token')
        this.setToken(token)
    }
}

// 스토어 인스턴스 생성
const tokenStore = new TokenStore() 

export default tokenStore