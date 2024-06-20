"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , Title , Profile_Box , Profile_Box_left,
  Profile_Image , Profile_Box_Right , NickName , NickName_Input , Profile_image_title,
  Profile_image_Upload, CustomUploadButton , OkButton , CancelButton , Button_box
} from '../../../styles/choi/profile/ProfileCreateCSS';

const ProfileCreate = () =>{

  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Title>프로필 생성</Title>
          <Profile_Box>

            <Profile_Box_left>
              <Profile_Image src='/images/profile.jpg'/>
            </Profile_Box_left>

            <Profile_Box_Right>
              <NickName>닉네임</NickName>
              <NickName_Input type='text' placeholder='닉네임'/>
              <Profile_image_title>프로필 사진</Profile_image_title>
              <Profile_image_Upload id="file-upload" type='file'/>
              <CustomUploadButton htmlFor="file-upload">
                <img src='/images/file.png' alt="Upload file"/>
              </CustomUploadButton>
            </Profile_Box_Right>
          </Profile_Box>
          <Button_box>
            <OkButton type='button' value={'완료'}/>
            <CancelButton type='button' value={'취소'}/>
          </Button_box> 
        </Background>
    </>
  )
}

export default ProfileCreate;
