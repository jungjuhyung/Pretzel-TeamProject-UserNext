"use client";
import React, { useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation'; // useRouter를 이 곳으로 이동

import {
  globalStyles, Background, Title, Profile_Box, Profile_Box_left,
  Profile_Image, Profile_Box_Right, NickName, NickName_Input, Profile_image_title,
  Profile_image_Upload, CustomUploadButton, OkButton, CancelButton, Button_box,
  OptionBox, GenderSelect, Gender_Title, Gender, BirthSelect,
  Birth_Title, Birth, GenreSelect, Genre_Title, Genre_Box,
  GenreCheckbox
} from '../../../../styles/choi/profile/ProfileUpdateCSS';

const ProfileUpdate = observer(() => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [pvo, setPvo] = useState({
    profile_idx: '',
    name: '',
    birth: '',
    gender: '',
    img_file: null,
    like_thema: [],
    user_id: ''
  });

  const router = useRouter(); // 이제 이 곳에서 useRouter()를 사용

  useEffect(() => {
    const fetchProfile = async () => {
      const { profile_idx } = router.query; // URL 쿼리 매개변수에서 profile_idx 가져오기
      try {
        const response = await axios.get(`/profile/profile_detail/${profile_idx}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        const profileData = response.data;
        setPvo({
          profile_idx: profileData.profile_idx,
          name: profileData.name,
          birth: profileData.birth,
          gender: profileData.gender,
          like_thema: profileData.like_thema,
          user_id: profileData.user_id
        });
        // 이미지 처리를 위해 profileData에서 필요한 필드를 설정
        // setProfileImage(...);
      } catch (error) {
        console.error('프로필 정보 불러오기 에러:', error);
      }
    };

    if (typeof window !== 'undefined') {
      fetchProfile(); // 클라이언트 사이드에서만 프로필 정보 가져오기
    }
  }, [router.query]); // router.query가 변경될 때마다 호출되도록 설정

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPvo(prevPvo => ({
      ...prevPvo,
      img_file: file,
    }));
    // 프로필 이미지를 미리보기로 설정하기 위한 코드
    setProfileImage(file);
  };

  const handleGenderChange = (e) => {
    const genderValue = e.target.value === '남자' ? 1 : 0;
    setPvo(prevPvo => ({
      ...prevPvo,
      gender: genderValue
    }));
  };

  const handleBirthChange = (e) => {
    const { name, value } = e.target;
    setPvo(prevPvo => ({
      ...prevPvo,
      [name]: value
    }));
  };

  const handleCheckboxChange = (genre) => {
    setSelectedGenres(prevSelectedGenres => {
      if (prevSelectedGenres.includes(genre)) {
        return prevSelectedGenres.filter(g => g !== genre);
      } else {
        return [...prevSelectedGenres, genre];
      }
    });
  };

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('name', pvo.name);
      formData.append('birth', pvo.birth);
      formData.append('gender', pvo.gender);
      formData.append('like_thema', pvo.like_thema);
      formData.append('profile_idx', pvo.profile_idx);
      if (pvo.img_file) {
        formData.append('img_file', pvo.img_file);
      }

      const response = await axios.post('/profile/profile_update', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });

      console.log(response.data);

      if (response.data === 1) {
        console.log('프로필 수정 성공');
        router.push("/choi/profile/profileManagement");
      } else {
        console.log('프로필 수정 실패');
      }
    } catch (error) {
      console.error('프로필 수정 오류:', error);
    }
  };

  const genres = ["공포", "로맨스", "코믹", "범죄", "액션", "애니"];

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Title>프로필 수정</Title>
        <Profile_Box>
          <Profile_Box_left>
            <Profile_Image src={profileImage ? URL.createObjectURL(profileImage) : '/images/icons/profile.jpg'} />
          </Profile_Box_left>

          <Profile_Box_Right>
            <NickName>닉네임</NickName>
            <NickName_Input type='text' name='name' value={pvo.name} onChange={(e) => setPvo({ ...pvo, name: e.target.value })} />
            <Profile_image_title>프로필 사진</Profile_image_title>

            <Profile_image_Upload id="file-upload" name='img_file' type='file' onChange={handleFileChange} />

            <CustomUploadButton htmlFor="file-upload">
              <img src='/images/icons/file.png' alt="Upload file" />
            </CustomUploadButton>
            <OptionBox>
              <GenderSelect>
                <Gender_Title>성별</Gender_Title>
                <Gender value={pvo.gender === 1 ? '남자' : '여자'} onChange={handleGenderChange}>
                  <option value="남자">남성</option>
                  <option value="여자">여성</option>
                </Gender>
              </GenderSelect>
              <BirthSelect>
                <Birth_Title>생년월일</Birth_Title>
                <Birth type='date' name='birth' value={pvo.birth} onChange={handleBirthChange} />
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
                      onChange={() => handleCheckboxChange(genre)}
                    />
                    <label htmlFor={genre}>{genre}</label>
                  </GenreCheckbox>
                ))}
              </Genre_Box>
            </GenreSelect>
          </Profile_Box_Right>
        </Profile_Box>
        <Button_box>
          <OkButton type='button' value={'완료'} disabled={selectedGenres.length === 0} onClick={handleFormSubmit} />
          <CancelButton type='button' value={'취소'} onClick={() => router.push("/choi/profile/profileManagement")} />
        </Button_box>
      </Background>
    </>
  );
});

export default ProfileUpdate;
