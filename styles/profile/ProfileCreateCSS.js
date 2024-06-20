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
  background-color: black;
  width: 100%;
  height: 1080px;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.div`
  margin-top: 147px;
  width: 137px;
  height: 36px;
  font-size: 30px;
  font-weight: 600;
  color: #FFFFFF;
`

export const Profile_Box = styled.div`
  margin-top: 102px;
  width: 692px;
  height: 300px;
  display: flex;
`

export const Profile_Box_left = styled.div`
  width: 300px;
  height: 300px;
  margin-right: 92px;
`

export const Profile_Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  
`

export const Profile_Box_Right = styled.div`
  width:  300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NickName = styled.div`
  width: 52px;
  height: 24px;
  font-size: 20px;
  font-weight: 400;
  color: #FFFFFF;
  margin-bottom: 16px;
`

export const NickName_Input = styled.input`
  width: 300px;
  height : 50px;
  border-radius: 5px;
  padding:  13px 0px 13px 17px;
  font-size: 20px;
  background-color: #252525;
  color: #FFFFFF;
`

export const Profile_image_title = styled.div`
  margin-top: 24px;
  width: 92px;
  height: 24px;
  font-size: 20px;
  color: #FFFFFF;
  font-weight: 400;
`

export const Profile_image_Upload = styled.input`
  display: none;
`

export const CustomUploadButton = styled.label`
  margin-top: 16px;
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
`

export const Button_box = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  margin-top: 128px;
`

export const OkButton = styled.input`
  width: 101px;
  height: 50px;
  text-align: center;
  background-color: #f29a2e;
  border-radius: 50px;
  color: #FFFFFF;
  font-size: 20px;
  margin-right:30px;
`

export const CancelButton = styled.input`
  width: 101px;
  height: 50px;
  border-radius: 50px;
  text-align: center;
  background-color: #3d3d3d;
  color: #FFFFFF;
  font-size: 20px;
`



