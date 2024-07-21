"use client";
import React, { useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { useStores } from '@/stores/StoreContext'; // useStores 훅 추가
import axios from 'axios';

import { globalStyles, Background, Title, Wrapper_box, Profile_All_Box, Profile_Box,
  Profile_Image, Profile_Name, New_Profile_Create, New_Profile_Info, Plus, Ok_Button
} from '../../../../styles/choi/profile/ProfileManagementCSS';

const ProfileManagement = observer(() => {
  const { loginStore } = useStores();
  const router = useRouter();
  const [profile_list, setProfile_list] = useState([]);

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

    fetchData();
  }, [loginStore.token]); // 의존성 배열 추가

  const updateProfile = (profileId) => {
    router.push(`/choi/profile/profileUpdate?profileId=${profileId}`);
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Wrapper_box>
          <Title>프로필 관리</Title>
          <Profile_All_Box>
          {profile_list.map((item, index) => (
              <Profile_Box key={item.profile_idx} onClick={() => updateProfile(item.profile_idx)}>
                <Profile_Image imageUrl={item.img_name ? `http://localhost:8080/common/image?imageName=${item.img_name}` : '/images/samples/no_profile.png'} />
                <Profile_Name>{item.name}</Profile_Name>
              </Profile_Box>
            ))}
            <Profile_Box>
              <New_Profile_Create>
                <Plus src='/images/icons/Plus.png' />
              </New_Profile_Create>
              <New_Profile_Info>프로필 추가하기</New_Profile_Info>
            </Profile_Box>
          </Profile_All_Box>
          <Ok_Button type='button' value={"완료"} />
        </Wrapper_box>
      </Background>
    </>
  );
});

export default ProfileManagement;
