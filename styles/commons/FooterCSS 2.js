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
  height: 525px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Top_Line = styled.div`
  width: 1800px;
  height: 325px;
  border-top: 2px solid #3d3d3d;
  margin: 100px 60px 100px 60px;
  padding-top : 50px;
  display: flex;
  flex-direction: column;
`

export const Footer_Top = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
`

export const Logo = styled.span`
  width : 80px;
  height : 25px;
  font-size: 20px;
  font-family: 'Rubik One', sans-serif;
  color : #868686;
`

export const TermsOne = styled.span`
  width: 133px;
  height: 24px;
  font-size: 20px;
  color: #868686;
  margin-left : 8px;
`

export const TermsTwo = styled.span`
  width: 153px;
  height: 24px;
  font-size: 20px;
  color: #868686;
`

export const TermsThree = styled.span`
  width: 132px;
  height: 24px;
  font-size: 20px;
  color: #868686;
`

export const TermsFour = styled.span`
  width: 74px;
  height: 24px;
  font-size: 20px;
  color: #868686;
`
export const Bar = styled.span`
  height: 24px;
  color: #413939;
  font-size: 20px;
  margin: 0px 8.5px;
`

export const Footer_Middle = styled.div`
  width: 100%;
  height: 101px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`

export const Bottom_Box = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
`


export const Bottom_Title = styled.span`
  width: 180px;
  height: 24px;
  color: #868686;
`

export const Bottom_information= styled.span`
  width: 315px;
  height: 24px;
  color: #868686;
`

export const Social = styled.div`
  margin-top: 28px;
  width: 180px;
  height : 35px;
  display: flex;
  justify-content: space-between;
`

export const Social_Background = styled.span`
  width: 35px;
  height: 35px;
  background-color: #272424;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Youtube = styled.img`
  width: 22px;
  height: 17.59px;
`

export const Instagram = styled.img`
  width: 22px;
  height: 22px;
`

export const Twitter = styled.img`
  width: 22px;
  height: 22px;
`
export const FaceBook = styled.img`
  width: 22px;
  height: 22px;
`

export const Footer_Box = styled.div`
  margin-top: 22px;
  width: 100%;
  height: 24px;
  display: flex;
`


export const Footer_Title = styled.span`
  width: 180px;
  height: 24px;
  color: #868686;
`

export const Footer_information= styled.span`
  width: 315px;
  height: 24px;
  color: #868686;
`






