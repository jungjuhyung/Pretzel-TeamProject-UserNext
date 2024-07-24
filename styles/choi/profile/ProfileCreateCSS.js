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
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.div`
  margin-top: 147px;
  width: auto;
  height: auto;
  font-size: 30px;
  font-weight: 600;
  color: #FFFFFF;
`;

export const Profile_Box = styled.div`
  margin-top: 102px;
  width: 692px;
  height: 378px;
  display: flex;
`;

export const Profile_Box_left = styled.div`
  width: 300px;
  height: 100%;
  margin-right: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Profile_Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const Profile_Box_Right = styled.div`
  width:  300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NickName = styled.div`
  width: auto;
  height: 24px;
  font-size: 20px;
  font-weight: 400;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

export const NickName_Input = styled.input`
  width: 300px;
  height : 50px;
  border-radius: 5px;
  padding:  13px 0px 13px 17px;
  font-size: 20px;
  background-color: #252525;
  color: #FFFFFF;
  border: none;
`;

export const Profile_image_title = styled.div`
  margin-top: 15px;
  width: auto;
  height: 24px;
  font-size: 20px;
  color: #FFFFFF;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Profile_image_Upload = styled.input`
  display: none;
`;

export const CustomUploadButton = styled.label`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 17px;
  border-radius: 5px;
  background-color: #252525;
  cursor: pointer;
  
  img {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 16px;
    color: white;
    margin-left: 10px;
  }
`;

export const Button_box = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  margin-top: 128px;
`;

export const OkButton = styled.input`
  width: 101px;
  height: 50px;
  text-align: center;
  background-color: #f29a2e;
  border-radius: 50px;
  color: #FFFFFF;
  font-size: 20px;
  margin-right: 30px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.input`
  width: 101px;
  height: 50px;
  border-radius: 50px;
  text-align: center;
  background-color: #3d3d3d;
  color: #FFFFFF;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

export const OptionBox = styled.div`
  margin-top: 15px;
  width: 300px;
  height: 82px;
  display: flex;
  justify-content: space-between;
`;

export const GenderSelect = styled.div`
  width: 130px;
  height: 50px;
`;

export const Gender_Title = styled.div`
  font-size: 20px;
  width: auto;
  height: 24px;
  font-weight: 400;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

export const Gender = styled.select`
  width: 130px;
  height: 50px;
  padding: 15px 0px 15px 15px;
  border-radius: 5px;
  background-color: #252525;
  color: #FFFFFF;
  border: none;
`;

export const BirthSelect = styled.div`
  width: 130px;
  height: 50px;
`;

export const Birth_Title = styled.div`
  font-size: 20px;
  width: 80px;
  height: 24px;
  font-weight: 400;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

export const Birth = styled.input`
  width: 130px;
  height: 50px;
  padding: 15px 0px 15px 15px;
  border-radius: 5px;
  background-color: #252525;
  color: #FFFFFF;
  border: none;
`;

export const GenreSelect = styled.div`
  margin-top: 21px;
  width: 100%;
  height: 82px;
  display: flex;
  flex-direction: column;
`;

export const Genre_Title = styled.div`
  width: auto;
  height: 24px;
  font-weight: 400;
  font-size: 20px;
  color:#FFFFFF;
  margin-bottom: 10px;
`;

export const Genre_Box = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
`;

export const GenreCheckbox = styled.div`
  display: flex;
  align-items: center;

  input {
    display: none;
  }

  input + label {
    width: 45px;
    height: 45px;
    color: #868686;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #252525;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  input:checked + label {
    background-color: #f29a2e;
    color: #FFFFFF;
  }
`;
