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
  height: 1080px;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  box-sizing: border-box;
  background-color: black;
`;

export const Wrapper_box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 147px;
  width: 1150px;
  height: 616px;
  
`

export const Title = styled.div`
  width: auto;
  height: 36px;
  font-size: 30px;
  font-weight: 600;
  color: #FFFFFF;
`

export const Profile_All_Box = styled.div`
  margin-top: 112px;
  width: 1080px;
  height: 336px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
`

export const Profile_Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 336px;
  align-items: center;
  position: relative; /* 가상 요소를 포함하기 위해 위치 설정 추가 */
`;

export const Profile_Image = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease; /* hover 효과를 부드럽게 만들기 위한 transition */
  position: relative; /* 가상 요소를 포함하기 위해 위치 설정 추가 */

  &:hover {
    filter: brightness(50%); /* 이미지를 어둡게 만드는 효과 */
    transform: scale(0.8);
  }

  &:hover::after {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    background-image: url('/images/icons/update.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Profile_Name = styled.span`
  width: 130px;
  height: 36px;
  font-size: 30px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 30px;
`;

export const New_Profile_Create = styled.div`
  width: 250px;
  height: 250px;
  background-color: #252525;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

    &:hover {
        transform: scale(0.8);
    }
`

export const Plus = styled.img`

`


export const New_Profile_Info = styled.div`
  width: auto;
  height: 36px;
  font-size: 30px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 30px;
`

export const Ok_Button = styled.input`
  width: 180px;
  height: 50px;
  color:#FFFFFF;
  background-color: #F29A2E;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
  transition: transform 0.3s ease;
  &:hover {
        transform: scale(1.1);
    }
  cursor: pointer;
  
`





