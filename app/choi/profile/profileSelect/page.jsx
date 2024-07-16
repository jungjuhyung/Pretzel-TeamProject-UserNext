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
import profileStore from '@/stores/profileStore';

const ProfileSelect = observer(() => {
  const { loginStore } = useStores();
  const router = useRouter();
  const [profile_list, setProfile_list] = useState([]);

  const goCreateProfile = () => {
    router.push("/choi/profile/profileCreate");
  };

  useEffect(() => {
    const API_URL = '/profile/profile_list';
    
    const fetchData = async () => {
      try {
        const response = await axios.post(API_URL, {}, {
          headers: { Authorization: `Bearer ${loginStore.token}` }
        });
        console.log('결과 : ', response.data);
        setProfile_list(response.data);
      } catch (error) {
        console.error('프로필 목록 가져오기 에러:', error);
      }
    };

    // 로그인 토큰이 있을 경우에만 데이터를 가져오도록 처리
    if (loginStore.token !== "") {
      fetchData(); // 컴포넌트가 마운트될 때 데이터 가져오기
    } else {
      router.push("/choi/login/loginPage"); // 로그인 페이지로 이동
    }
  }, []);

  const goManagement = () => {
    router.push("/choi/profile/profileManagement");
  };

  const onClickProfile = (profile) => {
    console.log("프로필 클릭 테스트");
    loginStore.setProfile_idx(profile.profile_idx); // 선택한 프로필의 인덱스를 loginStore에 설정
    profileStore.setProfileDetail(profile); // 선택한 프로필의 정보를 profileStore에 설정
    router.push("/");
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Wrapper_box>
          <Title>pretzel을 시청할 프로필을 선택하세요{loginStore.user_id}</Title>
          <Profile_All_Box>
            {profile_list.map((item, index) => (
              <Profile_Box key={item.profile_idx} onClick={() => onClickProfile(item)}>
                <Profile_Image src={item.img_name ? `http://localhost:8080/common/image?imageName=${item.img_name}` : '/images/samples/no_profile.png'} />
                <Profile_Name>{item.name}</Profile_Name>
              </Profile_Box>
            ))}
            
            {profile_list.length < 4 && (
              <Profile_Box>
                <New_Profile_Create>
                  <Plus src='/images/icons/Plus.png' onClick={goCreateProfile} />
                </New_Profile_Create>
                <New_Profile_Info></New_Profile_Info>
              </Profile_Box>
            )}
          </Profile_All_Box>
          <Management_Button type='button' value={"프로필 관리"} onClick={goManagement} />
        </Wrapper_box>
      </Background>
    </>
  );
});

export default ProfileSelect;
