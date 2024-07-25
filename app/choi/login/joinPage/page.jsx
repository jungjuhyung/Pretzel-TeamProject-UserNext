"use client";

import React, { useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { useRouter } from "next/navigation";

import {
  globalStyles, Background, JoinBox, Title, Name,
  IdContainer, IdInput, IdCondition, PassWord, PwCondition, Re_PassWord,
  Error, Email_Box, Email, Icon, Email_select,
  BirthDay, NoticeAllBox, CheckBoxAll, NoticeBox_first, NoticeBox,
  Notice_Title_Main, CheckBox_Basic, Notice_Title_Basic, Notice_Icon,
  CheckBox_Choice, Notice_Title_Choice, JoinButton, GreenText , Wrapper_All,
  IdCheckButton
} from '../../../../styles/choi/login/JoinPageCSS';

const JoinPage = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [requiredChecks, setRequiredChecks] = useState({
    age: false,
    terms: false,
    privacy: false,
  });
  const [optionalChecks, setOptionalChecks] = useState({
    privacyOptional: false,
    marketing: false,
  });

  const [uvo, setUvo] = useState({
    name: '',
    user_id: '',
    pwd: '',
    repwd: '',
    email: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    if (name === 'name') {
      const koreanOnly = /^[^a-zA-Z]*$/;
      if (!koreanOnly.test(value)) {
        alert('이름은 한글만 입력 가능합니다.');
        return;
      }
    }

    setUvo({
      ...uvo,
      [name]: value
    });
  }

  const handleAllCheck = () => {
    const newCheckState = !allChecked;
    setAllChecked(newCheckState);
    setRequiredChecks({
      age: newCheckState,
      terms: newCheckState,
      privacy: newCheckState,
    });
    setOptionalChecks({
      privacyOptional: newCheckState,
      marketing: newCheckState,
    });
  };

  const handleRequiredCheckChange = (name) => {
    setRequiredChecks(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleOptionalCheckChange = (name) => {
    setOptionalChecks(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const [emailId, setEmailId] = useState('');
  const [domain, setDomain] = useState('');

  const handleEmailId = (e) => {
    setEmailId(e.target.value);
  };

  const handleDomain = (e) => {
    setDomain(e.target.value);
  };

  useEffect(() => {
    setUvo((prevUvo) => ({
      ...prevUvo,
      email: `${emailId}@${domain}`,
    }));
  }, [emailId, domain]);

  async function handleIdCheck() {
    const idPattern = /^[a-z0-9]{6,12}$/;
    if (!idPattern.test(uvo.user_id)) {
      alert('아이디는 영문 소문자와 숫자의 조합으로 6~12자리여야 합니다.');
      return;
    } else {
      console.log('보내는 데이터 : ', uvo);
      try {
        const response = await axios.post('/user/id_check', { user_id: uvo.user_id });
        if (response.data === 1) {
          alert("중복아이디 있음");
        } else {
          alert("사용가능");
        }
      } catch (error) {
        console.error('실패 : ', error);
      }
    }
  }

  const handleEmailCheck = async () => {
    if (!emailId || domain === '이메일 선택') {
      alert("이메일 주소를 선택해주세요.");
      return;
    }

    const fullEmail = `${emailId}@${domain}`;
    console.log('보내는 데이터 : ', { email: fullEmail });

    try {
      const response = await axios.post('/user/email_check', { email: fullEmail });
      console.log('결과 : ', response.data);
      if (response.data === 1) {
        alert("중복이메일 있음");
      } else {
        alert("사용가능");
      }
    } catch (error) {
      console.error('실패 : ', error);
    }
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]{8,15}$/;
    return passwordPattern.test(password);
  };

  const router = useRouter();
  const handleSubmit = async () => {
    const { name, user_id, pwd, repwd, email } = uvo;
    const allRequiredChecked = Object.values(requiredChecks).every(Boolean);

    if (!name || !user_id || !pwd || !email) {
      alert("모든 칸을 작성해주세요.");
    } else if (!allRequiredChecked) {
      alert("모든 필수 항목에 동의해야 합니다.");
    } else if (pwd !== repwd) {
      alert("비밀번호가 일치하지 않습니다.");
    } else if (!validatePassword(pwd)) {
      alert('비밀번호는 영문, 숫자, 특수문자(~!@#$%^&*)를 포함하여 8~15자리여야 합니다.');
    } else {
      const API_URL = '/user/join';
      try {
        const response = await axios.post(API_URL, uvo);
        if (response.data === 1) {
          alert("회원가입이 완료되었습니다.");
          router.push("/choi/login/loginPage");
        }
      } catch (error) {
        console.log('error');
      }
    }
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <JoinBox>
          <Wrapper_All>
            <Title>회원가입</Title>
            <Name type='text' placeholder='이름' name='name' onChange={handleInputChange} />
            <IdContainer>
              <IdInput type='text' placeholder='아이디' name='user_id' onChange={handleInputChange} />
              <IdCheckButton type='button' onClick={handleIdCheck}>중복확인</IdCheckButton>
            </IdContainer>
            <IdCondition>영문 소문자 ,숫자 조합 6~12자리</IdCondition>
            <PassWord type='password' placeholder='비밀번호' name='pwd' onChange={handleInputChange} />
            <PwCondition>영문 , 숫자 , 특수문자(~!@#$%^&*)조합 8~15자리 </PwCondition>
            <Re_PassWord type='password' placeholder='비밀번호 재입력' name='repwd' onChange={handleInputChange} />
            <Error>
              {uvo.pwd !== uvo.repwd && uvo.repwd && (
                <>비밀번호 불일치!</>
              )}
              {uvo.pwd === uvo.repwd && uvo.repwd && (
                <GreenText>비밀번호 일치!</GreenText>
              )}
            </Error>
            <IdContainer>
              <Email_Box>
                <Email type='text' placeholder='이메일' name='email' onChange={handleEmailId} />
                <Icon>@</Icon>
                <Email_select onChange={handleDomain} defaultValue="">
                  <option value="">이메일 선택</option>
                  <option value="naver.com">naver.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="nate.com">nate.com</option>
                </Email_select>
                <IdCheckButton type='button' onClick={handleEmailCheck}>중복확인</IdCheckButton>
              </Email_Box>
            </IdContainer>
            <NoticeAllBox>
              <NoticeBox_first>
                <CheckBoxAll type='checkbox' checked={allChecked} onChange={handleAllCheck} />
                <Notice_Title_Main>필수 및 선택 항목을 모두 포함하여 동의합니다.</Notice_Title_Main>
              </NoticeBox_first>

              <NoticeBox>
                <CheckBox_Basic type='checkbox' checked={requiredChecks.age} onChange={() => handleRequiredCheckChange('age')} />
                <Notice_Title_Basic>[필수] 만 14세 이상입니다.</Notice_Title_Basic>
                <Notice_Icon src='/images/icons/ArrowDown.png' />
              </NoticeBox>

              <NoticeBox>
                <CheckBox_Basic type='checkbox' checked={requiredChecks.terms} onChange={() => handleRequiredCheckChange('terms')} />
                <Notice_Title_Basic>[필수] 서비스 이용약관 동의</Notice_Title_Basic>
                <Notice_Icon src='/images/icons/ArrowDown.png' />
              </NoticeBox>

              <NoticeBox>
                <CheckBox_Basic type='checkbox' checked={requiredChecks.privacy} onChange={() => handleRequiredCheckChange('privacy')} />
                <Notice_Title_Basic>[필수] 개인정보 수집 및 이용 동의</Notice_Title_Basic>
                <Notice_Icon src='/images/icons/ArrowDown.png' />
              </NoticeBox>

              <NoticeBox>
                <CheckBox_Choice type='checkbox' checked={optionalChecks.privacyOptional} onChange={() => handleOptionalCheckChange('privacyOptional')} />
                <Notice_Title_Choice>[선택] 개인정보 수집 및 이용 동의</Notice_Title_Choice>
                <Notice_Icon src='/images/icons/ArrowDown.png' />
              </NoticeBox>

              <NoticeBox>
                <CheckBox_Choice type='checkbox' checked={optionalChecks.marketing} onChange={() => handleOptionalCheckChange('marketing')} />
                <Notice_Title_Choice>[선택] 마케팅 정보 수신 동의 </Notice_Title_Choice>
                <Notice_Icon src='/images/icons/ArrowDown.png' />
              </NoticeBox>
            </NoticeAllBox>
            <JoinButton type='button' value={'회원가입'} onClick={handleSubmit} />
          </Wrapper_All>
        </JoinBox>
      </Background>
    </>
  );
}

export default JoinPage;
