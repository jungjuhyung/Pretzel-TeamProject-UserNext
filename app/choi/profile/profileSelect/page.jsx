"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Global } from '@emotion/react';
import { observer } from "mobx-react-lite";
import axios from 'axios';
import {
  globalStyles, Background, Title, Wrapper_box, Profile_All_Box, Profile_Box,
  Profile_Image, Profile_Name, New_Profile_Create, New_Profile_Info, Plus, Management_Button
} from '@/styles/choi/profile/ProfileSelectCSS';
import { useStores } from '@/stores/StoreContext';

const ProfileSelect = observer(() => {
  const { loginStore } = useStores();
  const router = useRouter();
  const [profile_list, setProfile_list] = useState([]);

  const goCreateProfile = () => {
    router.push("/choi/profile/profileCreate");
  };

  useEffect(() => {
    const API_URL = '/profile/profile_list';
    
    const ContentData = async () => {
      try {
        const response = await axios.post(API_URL, {}, {
          headers: { Authorization: `Bearer ${loginStore.token}` }
        });
        console.log('결과 : ', response.data);
        setProfile_list(response.data);
      } catch (error) {
        console.error('Error fetching profile list:', error);
      }
    };
    if (loginStore.token != "") {
      ContentData(); // 컴포넌트가 마운트될 때 데이터 가져오기
    }else{
      router.push("/choi/login/loginPage")
    }
  }, []);

  const goManagement = () => {
    router.push("/choi/profile/profileManagement");
  };

  const onClickProfile = (profile) => {
    console.log("test");
    loginStore.setProfile_idx(profile.profile_idx); // loginStore에 profile_idx 설정
    router.push("/");
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Wrapper_box>
          <Title>pretzel을 시청할 프로필을 선택하세요</Title>
          <Profile_All_Box>
            {profile_list.map((item) => (
              <Profile_Box key={item.profile_idx} onClick={() => onClickProfile(item)}>
                <Profile_Image src={`http://localhost:8080/common/image?imageName=${item.img_name}`} />
                <Profile_Name>{item.name}</Profile_Name>
              </Profile_Box>
            ))}
            <Profile_Box>
              <New_Profile_Create>
                <Plus src='/images/icons/Plus.png' onClick={goCreateProfile} />
              </New_Profile_Create>
              <New_Profile_Info></New_Profile_Info>
            </Profile_Box>
          </Profile_All_Box>
          <Management_Button type='button' value={"프로필 관리"} onClick={goManagement} />
        </Wrapper_box>
      </Background>
    </>
  );
});

export default ProfileSelect;