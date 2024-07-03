import React, { useState } from 'react';
import { Global } from '@emotion/react';
import DatePicker from 'react-datepicker';
import axios from 'axios';

import {
  globalStyles, Background, JoinBox, Title, Name,
  IdContainer, IdInput, IdCondition, PassWord, PwCondition, Re_PassWord,
  Error, Email_Box, Email, Icon, Email_select,
  BirthDay, NoticeAllBox, CheckBoxAll, NoticeBox_first, NoticeBox,
  Notice_Title_Main, CheckBox_Basic, Notice_Title_Basic, Notice_Icon,
  CheckBox_Choice, Notice_Title_Choice, JoinButton, GreenText , Wrapper_All
} from '../../../../styles/choi/login/JoinPageCSS';

const JoinPage = () => {
  const [startDate, setStartDate] = useState(null);
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

  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    rePassword: '',
    email: '',
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateUsername = (username) => {
    const usernameRegex = /^[a-z][a-z0-9]{5,11}$/;
    return usernameRegex.test(username);
  };

  const handleIdCheck = () => {
    // 여기에 중복 확인 로직을 추가합니다.
    axios.get(`http://localhost:8080/user/checkId/${formData.id}`)
      .then(response => {
        if (response.data.available) {
          alert('사용 가능한 아이디입니다.');
        } else {
          alert('이미 사용 중인 아이디입니다. 다른 아이디를 입력해주세요.');
        }
      })
      .catch(error => {
        console.error('중복 확인 에러:', error);
        alert('중복 확인 과정에서 오류가 발생했습니다.');
      });
  };

  const handleSubmit = () => {
    const { name, id, password, rePassword, email } = formData;
    const allRequiredChecked = Object.values(requiredChecks).every(Boolean);

    if (!name || !id || !password || !rePassword || !email || !startDate) {
      alert("모든 칸을 작성해주세요.");
    } else if (!validateUsername(id)) {
      alert("아이디는 영문 소문자 또는 영문 소문자, 숫자 조합 6~12자리로 입력해야 합니다.");
    } else if (!allRequiredChecked) {
      alert("모든 필수 항목에 동의해야 합니다.");
    } else if (password !== rePassword) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      // 회원가입 로직 실행
      alert("회원가입이 완료되었습니다.");
    }
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <JoinBox>
          <Wrapper_All>
          <Title>회원가입</Title>
          <Name type='text' placeholder='이름' name='name' value={formData.name} onChange={handleInputChange} />
          <IdContainer>
            <IdInput type='text' placeholder='아이디' name='id' value={formData.id} onChange={handleInputChange} />
            <button type='button' onClick={handleIdCheck}>중복확인</button>
          </IdContainer>
          <IdCondition>영문 소문자 또는 영문 소문자 , 숫자 조합 6~12자리</IdCondition>
          <PassWord type='password' placeholder='비밀번호' name='password' value={formData.password} onChange={handleInputChange} />
          <PwCondition>영문 , 숫자 , 특수문자(~!@#$%^&*)조합 8~15자리 </PwCondition>
          <Re_PassWord type='password' placeholder='비밀번호 재입력' name='rePassword' value={formData.rePassword} onChange={handleInputChange} />
          <Error>
            {formData.password !== formData.rePassword && formData.rePassword && (
              <>비밀번호 불일치!</>
            )}
            {formData.password === formData.rePassword && formData.rePassword && (
              <GreenText>비밀번호 일치!</GreenText>
            )}
          </Error>
          <Email_Box>
            <Email type='text' placeholder='이메일' name='email' value={formData.email} onChange={handleInputChange} />
            <Icon>@</Icon>
            <Email_select>
              <option>이메일 선택</option>
              <option>naver.com</option>
              <option>daum.net</option>
              <option>gmail.com</option>
            </Email_select>
          </Email_Box>
          <BirthDay>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="생년월일"
            />
          </BirthDay>
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
