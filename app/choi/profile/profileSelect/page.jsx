// 프로필 선택 페이지
"use client";
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Global } from '@emotion/react';
import { observer } from "mobx-react-lite";
import axios from 'axios';
import {
  globalStyles , Background , Title ,Wrapper_box , Profile_All_Box , Profile_Box,
  Profile_Image, Profile_Name , New_Profile_Create , New_Profile_Info ,Plus , Management_Button
} from '@/styles/choi/profile/ProfileSelectCSS';
import { LoginContext, ProfileContext, TokenContext } from '@/stores/StoreContext';
import profileStore from '@/stores/profileStore';


const ProfileSelect = observer(() => {
  const loginStore = useContext(LoginContext);
  const profileStore = useContext(ProfileContext);

  const router = useRouter();
  const [profile_list, setProfile_list] = useState([])
  const goCreateProfile = () => {
    router.push("/choi/profile/profileCreate");
  };

    useEffect(() => {

      // 서버 갈곳
      const API_URL = '/profile/profile_list'
      
      // 로그인 후 mobx 로 관리
    
      const token = loginStore.token
      console.log(token);
      
      
      const ContentData = async () => {

          try {

            const response =
            await axios.post(API_URL, {}, {
            headers : { Authorization : `Bearer ${token}`}
            });
            console.log('결과 : ' , response.data)
            setProfile_list(response.data)
          } catch (error) {
              console.error('Error not Action list:', error);
          }
      };
  
      ContentData(); // 컴포넌트가 마운트될 때 데이터 가져오기
  
  }, []);

  const goManagement = () =>{
    router.push("/choi/profile/profileManagement")
  }

  const onClickProfile = (k) =>{
    console.log("test");
    loginStore.setToken(loginStore.token, k.profile_idx, k.name, k.img_name, k.regdate, k.user_id, k.like_thema, k.gender, k.birth)
    router.push("/")
  }



  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Wrapper_box>
            <Title>pretzel을 시청할 프로필을 선택하세요</Title>
            <Profile_All_Box>
                {profile_list.map((item) => (
                <Profile_Box key={item.profile_idx} onClick={()=> onClickProfile(item)}>
                  <Profile_Image src={`https://image.tmdb.org/t/p/w500/${item.img_name}`} />
                  <Profile_Name>{item.name}</Profile_Name>
                </Profile_Box>
                ))} 
              
              <Profile_Box>
                <New_Profile_Create>
                  <Plus src='/images/icons/Plus.png' onClick={goCreateProfile}/>
                </New_Profile_Create>
                <New_Profile_Info></New_Profile_Info>
              </Profile_Box>

            </Profile_All_Box>
            <Management_Button type='button' value={"프로필 관리"} onClick={goManagement} />
          </Wrapper_box>
        </Background>
    </>
  )
})

export default ProfileSelect;