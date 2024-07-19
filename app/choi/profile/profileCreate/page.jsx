"use client";
import React, { useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores/StoreContext';

import {
  globalStyles, Background, Title, Profile_Box, Profile_Box_left,
  Profile_Image, Profile_Box_Right, NickName, NickName_Input, Profile_image_title,
  Profile_image_Upload, CustomUploadButton, OkButton, CancelButton, Button_box,
  OptionBox, GenderSelect, Gender_Title, Gender, BirthSelect,
  Birth_Title, Birth, GenreSelect, Genre_Title, Genre_Box,
  GenreCheckbox
} from '../../../../styles/choi/profile/ProfileCreateCSS';

const ProfileCreate = observer(() => {
  const { loginStore } = useStores();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [fileName, setFileName] = useState(''); // State to store the file name
  const [pvo, setPvo] = useState({
    profile_idx: '',
    name: '',
    birth: '',
    gender: '',
    img_file: null,
    like_thema: [],
    user_id: loginStore.user_id
  });

  const router = useRouter();
  const token = loginStore.token;

  useEffect(() => {
    setPvo(prevPvo => ({
      ...prevPvo,
      user_id: loginStore.user_id
    }));
  }, [loginStore.user_id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setPvo(prevPvo => ({
      ...prevPvo,
      img_file: file,
    }));
    setFileName(file.name); // Set the file name
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
      if (prevSelectedGenres.includes(genre.value)) {
        return prevSelectedGenres.filter(g => g !== genre.value);
      } else {
        return [...prevSelectedGenres, genre.value];
      }
    });
  };

  const handleFormSubmit = async () => {
    try {
      let response;
      const updatedPvo = {
        ...pvo,
        user_id: loginStore.user_id,
        like_thema: selectedGenres.join(','), // Convert array to comma-separated string
      };

      // Use formData if img_file is not null
      if (updatedPvo.img_file == null) {
        response = await axios.post('/profile/profile_insert2', updatedPvo, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      } else {
        const formData = new FormData();
        formData.append('name', updatedPvo.name);
        formData.append('birth', updatedPvo.birth);
        formData.append('gender', updatedPvo.gender);
        formData.append('img_file', updatedPvo.img_file);
        formData.append('like_thema', updatedPvo.like_thema); // Already a comma-separated string
        formData.append('user_id', updatedPvo.user_id);

        response = await axios.post('/profile/profile_insert', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          }
        });
      }

      if (response.data === 1) {
        router.push("/choi/profile/profileSelect");
      } else {
        console.log('프로필 추가 실패');
      }
    } catch (error) {
      console.error('오류:', error);
    }
  };

  const genres = [
    { display: "공포", value: "공포" },
    { display: "로맨스", value: "로맨스" },
    { display: "코믹", value: "코믹" },
    { display: "범죄", value: "범죄" },
    { display: "액션", value: "액션" },
    { display: "애니", value: "애니메이션" } // Display as 애니 but value is 애니메이션
  ];

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Title>프로필 생성</Title>
        <Profile_Box>
          <Profile_Box_left>
            <Profile_Image src={profileImage ? URL.createObjectURL(profileImage) : '/images/icons/profile.jpg'} />
          </Profile_Box_left>

          <Profile_Box_Right>
            <NickName>닉네임</NickName>
            <NickName_Input type='text' name='name' placeholder='닉네임' onChange={(e) => setPvo({ ...pvo, name: e.target.value })} />
            <Profile_image_title>프로필 사진</Profile_image_title>

            <Profile_image_Upload id="file-upload" name='img_file' type='file' onChange={handleFileChange} />
            <CustomUploadButton htmlFor="file-upload">
              <img src='/images/icons/file.png' alt="Upload file" />
              {fileName ? <span>{fileName}</span> : <span>파일 선택</span>}
            </CustomUploadButton>
            <OptionBox>
              <GenderSelect>
                <Gender_Title>성별</Gender_Title>
                <Gender onChange={handleGenderChange}>
                  <option>성별 선택</option>
                  <option value="남자">남성</option>
                  <option value="여자">여성</option>
                </Gender>
              </GenderSelect>
              <BirthSelect>
                <Birth_Title>생년월일</Birth_Title>
                <Birth type='date' name='birth' onChange={handleBirthChange} />
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
          <OkButton type='button' value={'완료'} disabled={selectedGenres.length === 0} onClick={handleFormSubmit} />
          <CancelButton type='button' value={'취소'} />
        </Button_box>
      </Background>
    </>
  )
});

export default ProfileCreate;
