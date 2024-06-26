import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = css`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 4432px;
`;

export const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: -16px;
  height: 80vh;
  pointer-events: auto;
`;

export const Video = styled.video`
  margin-top: -84px;
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

export const Overlay = styled.div`
  margin-top: -84px;  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
  pointer-events: none;
`;

export const Option_Box = styled.div`
  bottom: 10vh;
  position: absolute;
  width: 100%;
  height: 154px;
  display: flex;
`;

export const Option_Box_Left = styled.div`
  width: 60%;
  padding: 0px 0px 1vh 1vw;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Option_Box_Right = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 6.7vh;
  
`;

export const Title = styled.div`
  font-size: 100px;
  color: #FFFFFF;
`;

export const Volume = styled.img`
  width: 30px;
  height: 30px;
`;

export const AgeIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DE7330;
  font-size: 15px;
  font-weight: bold;
  border-radius: 50%;
`;

export const PlayButton = styled.input`
  width: 100px;
  height: 40px;
  background-color: #454342;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 20px;
  text-align: center;
  padding-left: 35px; /* 여백을 주어 아이콘이나 이미지를 표시할 공간을 확보 */
  background-image: url('/images/icons/play.png'); /* 아이콘 이미지 경로 설정 */
  background-repeat: no-repeat;
  background-position: 15px center;
  background-size: 30px;
  border-radius: 5px;
`;

export const Info_button = styled.input`
  width: 130px;
  height: 45px;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  text-align: center;
  padding-left: 40px; /* 여백을 주어 아이콘이나 이미지를 표시할 공간을 확보 */
  background-image: url('/images/icons/error.png'); /* 아이콘 이미지 경로 설정 */
  background-repeat: no-repeat;
  background-position: 15px center;
  background-size: 25px;
  background-color: #454342;
  color: #FFFFFF;
`

