"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useStores } from '@/stores/StoreContext';
import axios from 'axios';

import {
  globalStyles, Background, Title, Profile_Delete_Box, SubTitle,
  Delete_Info, Password, Button_Box, DeleteButton, CancelButton
} from '../../../../styles/choi/profile/ProfileDeleteCSS';

const ProfileDelete = () => {
  const { loginStore } = useStores();
  const router = useRouter();
  const searchParams = useSearchParams();
  const profileId = searchParams.get('profileId');
  const token = loginStore.token;

  const [confirmationText, setConfirmationText] = useState('');
  const [error, setError] = useState('');

  const handleConfirmationTextChange = (e) => {
    setConfirmationText(e.target.value);
  };

  const handleDeleteProfile = async () => {
    if (confirmationText !== '지금삭제') {
      setError('입력한 텍스트가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.post('/profile/profile_delete', { profile_idx: profileId }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.data === 1) {
        alert("프로필이 삭제되었습니다.")
        router.push('/choi/profile/profileSelect');
      } else {
        console.error('Profile deletion failed');
        setError('프로필 삭제 실패');
      }
    } catch (error) {
      console.error('Error deleting profile:', error);
      setError('프로필 삭제 중 오류가 발생했습니다.');
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Title>프로필 삭제</Title>

        <Profile_Delete_Box>
          <SubTitle>확인 텍스트 입력</SubTitle>
          <Delete_Info>삭제를 위해 &quot;지금삭제&quot;를 입력해주세요.</Delete_Info>
          <Password 
            type='text' 
            placeholder="지금삭제" 
            value={confirmationText} 
            onChange={handleConfirmationTextChange} 
          />
          {error && <Delete_Info>{error}</Delete_Info>}
          <Button_Box>
            <DeleteButton onClick={handleDeleteProfile}>삭제</DeleteButton>
            <CancelButton onClick={handleCancel}>취소</CancelButton>
          </Button_Box>
        </Profile_Delete_Box>
      </Background>
    </>
  );
};

export default ProfileDelete;
