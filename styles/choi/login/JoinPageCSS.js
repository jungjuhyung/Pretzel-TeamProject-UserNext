import { css } from '@emotion/react';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';

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
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Wrapper_All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 450px;
  height: auto;
  padding-left: 1vw;
`

export const JoinBox = styled.div`
  width: 450px;
  height: auto;
  background-color: #252525;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const Title = styled.div`
  width: 104px;
  height: 36px;
  color: #FFFFFF;
  font-size: 30px;
  font-weight: 600;
  margin-top: 65px;
`;

export const Name = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  padding: 15px 0px 15px 15px;
  margin-top: 58px;
  border: none;
  outline: none;
  font-family: 'Pretendard-Regular', sans-serif;
`;

export const IdContainer = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  position: relative;
  margin-top: 20px;
`;

export const IdInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 15px;
  border: none;
  box-sizing: border-box;
  outline: none;
  font-family: 'Pretendard-Regular', sans-serif;
`;

export const IdCheckButton = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  border-radius: 0 5px 5px 0;
  background-color: #F29A2E;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  font-family: 'Pretendard-Regular', sans-serif;
`;

export const IdCondition = styled.span`
  width: 265px;
  height: 16px;
  font-size: 13px;
  color: #929292;
  margin-top: 5px;
  margin-left: -15px;
`;

export const PassWord = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  padding: 15px 0px 15px 15px;
  margin-top: 20px;
  border: none;
  outline: none;
  font-family: 'Pretendard-Regular', sans-serif;
`;

export const PwCondition = styled.div`
  width: 276px;
  height: 16px;
  color: #929292;
  font-size: 13px;
  margin-top: 5px;
`;

export const Re_PassWord = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  padding: 15px 0px 15px 15px;
  margin-top: 20px;
  border: none;
  outline: none;
  font-family: 'Pretendard-Regular', sans-serif;
`;

export const Error = styled.div`
  width: 88px;
  height: 16px;
  font-size: 13px;
  color: red;
  margin-top: 5px;
`;

export const GreenText = styled.span`
  color: green;
`;

export const Email_Box = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
`;

export const Email = styled.input`
  width: 110px;
  height: 50px;
  padding: 15px 0px 15px 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Pretendard-Regular', sans-serif;
`;

export const Icon = styled.div`
  width: 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #FFFFFF;
`;

export const Email_select = styled.select`
  width: 130px;
  height: 50px;
  padding: 15px 0px 15px 15px;
  border-radius: 5px;
  outline: none;
  font-family: 'Pretendard-Regular', sans-serif;
`;

export const BirthDay = styled.div`
  width: 300px;
  height: 50px;
  margin-top: 20px;
  position: relative;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #fff;
  font-size: 17px;
  padding-left: 30px;
  box-sizing: border-box;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 10px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    width: 20px;
    height: 20px;
    background: url('/images/icons/date.png') no-repeat center center;
    background-size: cover;
    pointer-events: none;
  }

  input::placeholder {
    color: #aaa;
  }
`;

export const NoticeAllBox = styled.div`
  margin-top: 45px;
  width: 300px;
  height: 207px;
  display: flex;
  flex-direction: column;
`;

export const NoticeBox_first = styled.div`
  width: 300px;
  height: 18px;
  display: flex;
`;

export const NoticeBox = styled.div`
  width: 300px;
  height: 18px;
  display: flex;
  margin-top: 20px;
`;

export const CheckBoxAll = styled.input`
  width: 15px;
  height: 15px;
  margin: 0;
  border: none;
`;

export const Notice_Title_Main = styled.span`
  width: 275px;
  height: 18px;
  font-size: 15px;
  font-weight: 400;
  color: #FFFFFF;
  margin-left: 10px;
`;

export const CheckBox_Basic = styled.input`
  width: 15px;
  height: 15px;
  margin: 0;
  border: 1px solid #929292;
  border: none;
`;

export const Notice_Title_Basic = styled.span`
  width: 275px;
  height: 18px;
  font-size: 15px;
  color: #929292;
  margin-left: 10px;
`;

export const Notice_Icon = styled.img`
  width: 20px;
  height: 18px;
`;

export const CheckBox_Choice = styled.input`
  width: 15px;
  height: 15px;
  margin: 0;
  border: 1px solid #929292;
  border: none;
`;

export const Notice_Title_Choice = styled.span`
  width: 275px;
  height: 18px;
  font-size: 15px;
  color: #929292;
  margin-left: 10px;
`;

export const JoinButton = styled.input`
  background-color: #F29A2E;
  width: 300px;
  height: 50px;
  border-radius: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: 45px;
  color: #FFFFFF;
  border: none;
  margin-bottom: 65px;
  font-family: 'Pretendard-Regular', sans-serif;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  
`;
