import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Global Styles
export const globalStyles = css`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

// e6VTGJ9BH2XNAJUm

// Styled Components
export const Background = styled.div`
  width: 100%;
  height: 320vh; /* 배경의 전체 높이 */
`;

export const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: -16px; 
  height: 70vh;
  pointer-events: auto; 
`;

export const Video = styled.iframe`
  width: 100%;
  height: 70vh; 
  object-fit: cover; 
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent); /* 그라데이션 배경 */
  pointer-events: none; 
`;

export const Option_Box = styled.div`
  bottom: 0.1vh; 
  position: absolute;
  width: 100%;
  height: 154px;
  display: flex;
`;

export const Option_Box_Left = styled.div`
  width: 70%;
  padding: 0px 0px 1vh 1vw;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Option_Box_Right = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 6.7vh; 
`;

export const Title = styled.div`
  font-size: 80px; 
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
  height: 45px; 
  background-color: #454342; 
  border: none; 
  border-radius: 5px; 
  color: #FFFFFF; 
  font-size: 20px; 
  text-align: center; 
  padding-left: 35px; 
  background-image: url('/images/icons/play.png'); 
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
  padding-left: 40px; 
  background-image: url('/images/icons/error.png'); 
  background-repeat: no-repeat; 
  background-position: 15px center;
  background-size: 25px; 
  background-color: #454342; 
  color: #FFFFFF; 
`;

export const Week_Popular = styled.div`
  padding: 30px 40px 30px 40px;
  width: 100%; 
  height: 47vh; 
`;

export const Week_Title = styled.div`
  width: 309px; 
  height: 36px;
  font-size: 30px; 
  font-weight: bold; 
  color: #FFFFFF; 
`;

export const Week_Poster_Box = styled.div`
  margin-top: 30px;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3.5vw;
  transition: transform 0.3s ease; /* 이 부분이 필요합니다 */
`;

export const PosterWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transform: scale(${props => props.isActive ? '1.1' : '1'}); /* 클릭 시 확대/축소 효과 */
  transition: transform 0.3s ease; /* 부드러운 전환 효과 */

  &:hover {
    transform: scale(1.1); /* 마우스 호버 시 조금 더 확대 */
  }
`;

export const Poster = styled.img`
  width:15.3vw; 
  height: 35vh;
  object-fit: fill; 
`;

export const PosterRank = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 60px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  &.active {
    color: #DE7330;
  }
`;

export const PrevButton = styled.button`
  position: absolute; 
  top: 50%; 
  left: 0; 
  transform: translateY(-50%); 
  background-color: rgba(0, 0, 0, 0.3); 
  color: white; 
  border: none; 
  padding: 10px; 
  cursor: pointer; 
`;

export const NextButton = styled.button`
  position: absolute; 
  top: 50%; 
  right: 0; 
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3); 
  color: white; 
  border: none; 
  padding: 10px; 
  cursor: pointer; 
`;

export const Contents = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 262px;
  padding: 30px 40px 30px 40px;
`

export const New_Contents = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 262px;
  padding: 30px 40px 30px 40px;
`



export const Contents_Title = styled.div`
  width: 222px;
  height: 36px;
  font-size: 29px;
  color: #FFFFFF;
` 

export const Contents_Box = styled.div`
  width: 100%;
  height: 19vh;
  display: flex;
  gap: 1vw;
  justify-content: space-between;
  align-items: center;
`

export const Contents_img = styled.img`
  width: 18vw;
  height: 19vh;
  object-fit: fill;
  border-radius: 5px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05); 
  }

  &.zoomed {
    transform: scale(1.1);
  }
`;