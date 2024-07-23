"use client";
import React, { useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores/StoreContext';
import axios from 'axios';

import {
  globalStyles, Background, Title, Profile_Box, Profile_Box_left,
  Profile_Image, Profile_Box_Right, NickName, NickName_Input, Profile_image_title,
  Profile_image_Upload, CustomUploadButton, OkButton, CancelButton, Button_box,
  OptionBox, GenderSelect, Gender_Title, Gender, BirthSelect,
  Birth_Title, Birth, GenreSelect, Genre_Title, Genre_Box,
  GenreCheckbox, DeleteButton
} from '../../../../styles/choi/profile/ProfileUpdateCSS';

const ProfileUpdate = observer(() => {
  const { loginStore } = useStores();
  const router = useRouter();
  const searchParams = useSearchParams();
  const profileId = searchParams.get('profileId');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [pvo, setPvo] = useState({
    profile_idx: '',
    name: '',
    birth: '',
    gender: '',
    img_file: null,
    like_thema: [],
    user_id: loginStore.user_id
  });

  const token = loginStore.token;

  useEffect(() => {
    const fetchProfileDetail = async () => {
      try {
        const response = await axios.post('/profile/profile_detail', { profile_idx: profileId }, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const profileDetail = response.data;

        setPvo({
          profile_idx: profileDetail.profile_idx,
          name: profileDetail.name || '',
          birth: profileDetail.birth || '',
          gender: profileDetail.gender !== undefined ? profileDetail.gender : '',
          img_file: null,
          like_thema: profileDetail.like_thema && (Array.isArray(profileDetail.like_thema) ? profileDetail.like_thema : profileDetail.like_thema.split(',')),
          user_id: loginStore.user_id
        });

        if (profileDetail.like_thema && Array.isArray(profileDetail.like_thema)) {
          setSelectedGenres(profileDetail.like_thema);
        } else if (profileDetail.like_thema && typeof profileDetail.like_thema === 'string') {
          setSelectedGenres(profileDetail.like_thema.split(','));
        }

        if (profileDetail.img_name) {
          setProfileImage(`http://localhost:8080/common/image?imageName=${profileDetail.img_name}`);
        }
        setFileName(profileDetail.img_name);
      } catch (error) {
        console.error('Error fetching profile detail:', error);
      }
    };

    fetchProfileDetail();
  }, [profileId, token]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(URL.createObjectURL(file));
    setPvo(prevPvo => ({
      ...prevPvo,
      img_file: file,
    }));
    setFileName(file.name);
  };

  const handleGenderChange = (e) => {
    const newGender = e.target.value === '1' ? 1 : 0;
    console.log('Selected Gender:', newGender);
    setPvo(prevPvo => ({
      ...prevPvo,
      gender: newGender
    }));
  };

  const handleBirthChange = (e) => {
    const newBirth = e.target.value;
    console.log('Selected Birth:', newBirth);
    setPvo(prevPvo => ({
      ...prevPvo,
      birth: newBirth
    }));
  };

  const handleCheckboxChange = (genre) => {
    setSelectedGenres(prevSelectedGenres => {
      if (prevSelectedGenres.includes(genre.value)) {
        return prevSelectedGenres.filter(g => g !== genre.value);
      } else {
        return [...prevSelectedGenres, genre.value];
      }
    });
  };

  const handleFormSubmit = async () => {
    try {
      const updatedPvo = {
        ...pvo,
        user_id: loginStore.user_id,
        like_thema: selectedGenres.join(','),
      };
  
      const formData = new FormData();
      formData.append('name', updatedPvo.name);
      if (updatedPvo.img_file) formData.append('img_file', updatedPvo.img_file);
      formData.append('birth', updatedPvo.birth);
      formData.append('gender', updatedPvo.gender);
      formData.append('like_thema', updatedPvo.like_thema);
      formData.append('user_id', updatedPvo.user_id);
      formData.append('profile_idx', updatedPvo.profile_idx);
  
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
  
      const response = await axios.post('/profile/profile_update', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });
  
      console.log('Response:', response.data);  // 서버 응답을 로그로 확인합니다.
  
      if (response.data === 1) {
        router.push("/choi/profile/profileSelect");
      } else {
        console.log('Profile update failed');  // 실패 시 메시지를 로그로 남깁니다.
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const genres = [
    { display: "공포", value: "공포" },
    { display: "로맨스", value: "로맨스" },
    { display: "코믹", value: "코믹" },
    { display: "범죄", value: "범죄" },
    { display: "액션", value: "액션" },
    { display: "애니", value: "애니메이션" }
  ];

  const goDelete = () => {
    router.push(`/choi/profile/profileDelete?profileId=${profileId}`);
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Title>프로필 수정</Title>
        <Profile_Box>
          <Profile_Box_left>
            <Profile_Image src={profileImage ? profileImage : '/images/icons/profile.jpg'} />
          </Profile_Box_left>

          <Profile_Box_Right>
            <NickName>닉네임</NickName>
            <NickName_Input
              type='text'
              name='name'
              placeholder="닉네임을 입력하세요"
              value={pvo.name}
              onChange={(e) => setPvo({ ...pvo, name: e.target.value })}
            />

            <Profile_image_title>프로필 사진</Profile_image_title>
            <Profile_image_Upload id="file-upload" name='img_file' type='file' onChange={handleFileChange} />
            <CustomUploadButton htmlFor="file-upload">
              <img src='/images/icons/file.png' alt="Upload file" />
              {fileName ? <span>{fileName}</span> : <span>파일 선택</span>}
            </CustomUploadButton>

            <OptionBox>
              <GenderSelect>
                <Gender_Title>성별</Gender_Title>
                <Gender value={pvo.gender} onChange={handleGenderChange}>
                  <option value="">성별 선택</option>
                  <option value="1">남성</option>
                  <option value="0">여성</option>
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
                  <GenreCheckbox key={genre.value}>
                    <input
                      type="checkbox"
                      id={genre.value}
                      value={genre.value}
                      checked={selectedGenres.includes(genre.value)}
                      onChange={() => handleCheckboxChange(genre)}
                    />
                    <label htmlFor={genre.value}>{genre.display}</label>
                  </GenreCheckbox>
                ))}
              </Genre_Box>
            </GenreSelect>
          </Profile_Box_Right>
        </Profile_Box>

        <Button_box>
          <OkButton type='button' value={'완료'} onClick={handleFormSubmit} />
          <CancelButton type='button' value={'취소'} onClick={() => router.back()} />
          <DeleteButton type='button' value={'프로필 삭제'} onClick={goDelete} />
        </Button_box>
      </Background>
    </>
  );
});

export default ProfileUpdate;
