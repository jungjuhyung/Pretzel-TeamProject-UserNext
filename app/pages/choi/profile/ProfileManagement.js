// 프로필 관리 페이지

"use client";

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Global } from '@emotion/react';
import { observer } from "mobx-react-lite";
import axios from 'axios';
import {
  globalStyles , Background , Title ,Wrapper_box , Profile_All_Box , Profile_Box,
  Profile_Image, Profile_Name , New_Profile_Create , New_Profile_Info ,Plus , Ok_Button
} from '../../../styles/choi/profile/ProfileManagementCSS';
import { TokenContext } from '@/stores/StoreContext';

const ProfileManagement = observer(() => {
  const tokenStore = useContext(TokenContext);
  const router = useRouter();
  const [profile_list, setProfile_list] = useState([])

  useEffect(() => {

    // 서버 갈곳
    const API_URL = '/profile/profile_list'
    
    // 로그인 후 mobx 로 관리
  
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaG0xMTExIiwiaWF0IjoxNzIwMzQ1ODMwLCJleHAiOjE3MjAzNDk0MzB9.uOltyvL-8u8RxtNw7yqdWtmhqy43Cld7wuBJQU94q3w"
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

const UpdateProfile = () =>{
    router.push("/choi/profile/ProfileUpdate");
  }


  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Wrapper_box>
            <Title>프로필 관리</Title>
            <Profile_All_Box>
              {profile_list.map((item) => (
              <Profile_Box key={item.profile_idx}>
                <Profile_Image src={`https://image.tmdb.org/t/p/w500/${item.img_name}`} onClick={UpdateProfile}/>
                <Profile_Name>{item.name}</Profile_Name>
              </Profile_Box>
              ))} 

              <Profile_Box>
                <New_Profile_Create>
                  <Plus src='/images/icons/Plus.png'/>
                </New_Profile_Create>
                <New_Profile_Info></New_Profile_Info>
              </Profile_Box>

            </Profile_All_Box>
            <Ok_Button type='button' value={"완료"}/>
          </Wrapper_box>
        </Background>
    </>
  )
})

export default ProfileManagement;