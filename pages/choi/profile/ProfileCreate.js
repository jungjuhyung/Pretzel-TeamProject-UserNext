"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , Title , Profile_Box , Profile_Box_left,
  Profile_Image , Profile_Box_Right , NickName , NickName_Input , Profile_image_title,
  Profile_image_Upload, CustomUploadButton , OkButton , CancelButton , Button_box,
  OptionBox , GenderSelect , Gender_Title , Gender, BirthSelect, 
  Birth_Title , Birth , GenreSelect , Genre_Title , Genre_Box,
  GenreCheckbox
} from '../../../styles/choi/profile/ProfileCreateCSS';

const ProfileCreate = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (genre) => {
    setSelectedGenres(prevSelectedGenres => {
      if (prevSelectedGenres.includes(genre)) {
        return prevSelectedGenres.filter(g => g !== genre);
      } else {
        return [...prevSelectedGenres, genre];
      }
    });
  };

  const genres = ["공포", "로맨스", "코믹", "범죄", "액션", "애니"];

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Title>프로필 생성</Title>
        <Profile_Box>
          <Profile_Box_left>
            <Profile_Image src='/images/icons/profile.jpg' />
          </Profile_Box_left>

          <Profile_Box_Right>
            <NickName>닉네임</NickName>
            <NickName_Input type='text' placeholder='닉네임' />
            <Profile_image_title>프로필 사진</Profile_image_title>

            <Profile_image_Upload id="file-upload" type='file' />

            <CustomUploadButton htmlFor="file-upload">
              <img src='/images/icons/file.png' alt="Upload file" />
            </CustomUploadButton>
            <OptionBox>
              <GenderSelect>
                <Gender_Title>성별</Gender_Title>
                <Gender>
                  <option>성별 선택</option>
                  <option>남성</option>
                  <option>여성</option>
                </Gender>
              </GenderSelect>
              <BirthSelect>
                <Birth_Title>생년월일</Birth_Title>
                <Birth type='date' />
              </BirthSelect>
            </OptionBox>
            <GenreSelect>
              <Genre_Title>선호 장르</Genre_Title>
              <Genre_Box>
                {genres.map(genre => (
                  <GenreCheckbox key={genre}>
                    <input 
                      type="checkbox" 
                      id={genre} 
                      value={genre} 
                      checked={selectedGenres.includes(genre)} 
                      onChange={() => handleGenreChange(genre)} 
                    />
                    <label htmlFor={genre}>{genre}</label>
                  </GenreCheckbox>
                ))}
              </Genre_Box>
            </GenreSelect>
          </Profile_Box_Right>
        </Profile_Box>
        <Button_box>
          <OkButton type='button' value={'완료'} disabled={selectedGenres.length === 0} />
          <CancelButton type='button' value={'취소'} />
        </Button_box>
      </Background>
    </>
  )
}

export default ProfileCreate;
