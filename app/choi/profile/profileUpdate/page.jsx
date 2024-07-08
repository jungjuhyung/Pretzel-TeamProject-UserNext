// 프로필 수정 페이지
"use client";
import React, { useContext, useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { observer } from 'mobx-react-lite';

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
  const [historypro, historyPro] = useState([])
  const [pvo, setPvo] = useState({
    profile_idx: '',
    name: '',
    birth: '',
    gender: '',
    img_file: null,
    like_thema: [],
    user_id: ''
  });

  const router = useRouter();


  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNDE5NzgyMjI2IiwiaWF0IjoxNzIwMDYxMjEzLCJleHAiOjE3MjAwNjQ4MTN9._mvXP_XKlUvzwT4jSz_-oPRHcReJObkSkQSPSgl_x-w';

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setPvo(prevPvo => ({
      ...prevPvo,
      img_file: file,
    }));
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
    console.log(genre)
    setSelectedGenres(prevSelectedGenres => {
      if (prevSelectedGenres.includes(genre)) {
          console.log(prevSelectedGenres)
          return prevSelectedGenres.filter(g => g !== genre);
        } else {
        console.log(prevSelectedGenres)
        return [...prevSelectedGenres, genre];
      }
    });
  };

    // 수정하러 올때 프로필 상세정보를 가져와야하고 mobx 에 저장해놔야함
    // profile_idx 가 필요하므로
  async function handleFormSubmit() {
    try {
      let response;
      if (pvo.img_file == null) {
        console.log("전송 데이터:", pvo);
        response = await axios.post('/profile/profile_insert2', pvo, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      } else {
    const formData = new FormData();
    formData.append('name', pvo.name); 
    formData.append('birth', pvo.birth); 
    formData.append('gender', pvo.gender);
    formData.append('img_file', pvo.img_file); 
    formData.append('like_thema', pvo.like_thema); 
    formData.append('profile_idx', pvo.profile_idx); 
    
    console.log("전송 데이터 : ", formData);
    response = await axios.post('/profile/profile_update', formData, {
    headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data', // 파일 업로드 시 필수로 설정해야 합니다.
    }
    });
    }
    
    console.log(response.data);
    
    if (response.data === 1) {
    console.log('프로필 수정 성공')
    router.push("/choi/profile/profileManagement")
    // 성공적인 응답 처리 (성공 시 프로필 리스트 페이지로 이동)
    }else {
    console.log('프로필 수정 실패')
    }
    } catch (error) {
    console.error('오류:', error);
    }
  }

  const genres = ["공포", "로맨스", "코믹", "범죄", "액션", "애니"];

  useEffect(() => {
    const historyProfile = async () => {
        try {
            const response = await axios.post("/profile/profile_list");
            setRealSearch(response.data); // 데이터를 받아와서 realSearch 상태 업데이트
        } catch (error) {
            console.error('Error fetching profile list:', error);
        }
    };

    historyProfile(); // 컴포넌트가 마운트될 때 데이터 가져오기

}, []);



  return(
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
            <NickName_Input type='text' name='name' placeholder='닉네임' onChange={(e) => setPvo({ ...pvo, name: e.target.value })} />
            <Profile_image_title>프로필 사진</Profile_image_title>

            <Profile_image_Upload id="file-upload" name='img_file' type='file' onChange={handleFileChange} />

            <CustomUploadButton htmlFor="file-upload">
              <img src='/images/icons/file.png' alt="Upload file" />
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
          <CancelButton type='button' value={'취소'} />
        </Button_box>
      </Background>
    </>
  )
})

export default ProfileUpdate;
