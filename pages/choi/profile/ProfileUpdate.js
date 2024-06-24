// 프로필 수정 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , Title , Profile_Box , Profile_img,
  Profile_Info , Profile_name , Profile_name_input , Profile_Image , Profile_image_Upload,
  CustomUploadButton
} from '../../../styles/choi/profile/ProfileUpdateCSS';

const ProfileUpdate = () =>{

  return(
    <>
      <Global styles={globalStyles} />
        <Background>

          <Title>프로필 수정</Title>

          <Profile_Box>

            <Profile_img src='/images/icons/profile.jpg' />

            <Profile_Info>

              <Profile_name>닉네임</Profile_name>
              <Profile_name_input type='text' placeholder='오잉'  />

              <Profile_Image>프로필 사진</Profile_Image>
              <Profile_image_Upload id="file-upload" type='file' />
              <CustomUploadButton htmlFor="file-upload">
                <img src='/images/icons/file.png' alt="Upload file"/>
              </CustomUploadButton>
              
            </Profile_Info>
          </Profile_Box>
        </Background>
    </>
  )
}

export default ProfileUpdate;
