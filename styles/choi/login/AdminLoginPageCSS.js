// loginPageCSS.js

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = css`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular', sans-serif;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius : 5px;
`;

export const LoginBox = styled.div`
  background-color: #252525;
  width: 450px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  width: 100%;
  height: 36px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 65px 186px 0px 186px;
`;

export const BoxBottom = styled.div`
  width: 300px;
  height: 180px;
  margin: 15px 75px 0px 75px;
`;

export const Id = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 15px 0px 15px 15px;
  font-size: 17px;
  border: none;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border: none;
`;

const PasswordField = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 15px 15px 15px 15px; /* Adjusted padding for icon space */
  font-size: 17px;
  border: none;
`;

const Icon = styled.img`
  position: absolute;
  left: 260px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  cursor: pointer;
`;

export const PasswordInput = ({ placeholder, onChange, showPassword, togglePasswordVisibility }) => (
  <PasswordContainer>
    <Icon
      src={showPassword ? "/images/icons/eyeOn.png" : "/images/icons/eyeOff.png"}
      onClick={togglePasswordVisibility}
    />
    <PasswordField
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      onChange={onChange}
    />
  </PasswordContainer>
);

export const LoginButton = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 50px;
  background-color: #f29a2e;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  border: none;
`;

export const AccountOptions = styled.div`
  width: 197px;
  height: 16px;
  text-align: center;
  margin: 15px 0px 17px 0px;
`;

export const SelectOption = styled.span`
  font-size: 12px;
  font-weight: lighter;
  color: #ffffff;
`;

export const Move = styled.a`
  color: #ffffff;
  text-decoration: none;
`;

export const loginClick = (id, password) => {
  if (!id || !password) {
    alert("아이디와 비밀번호를 모두 입력하세요");
  } else {
    console.log("id : " + id)
    console.log("pw : "+ password)
  }
};
