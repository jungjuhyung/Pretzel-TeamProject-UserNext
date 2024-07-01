import { css, keyframes } from '@emotion/react';
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
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  width: 500px;
  height: 528px;
  background-color: #252525;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  margin-top: 74px;
  color: #FFFFFF;
  font-size: 30px;
  font-weight: bold;
`;

export const Title_Input = styled.input`
  margin-top: 31px;
  width: 430px;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
`

export const Text_Input = styled.textarea`
  margin-top: 10px;
  width: 430px;
  height: auto;
  min-height: 166px;
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  resize: none;
`

export const Text_length_Box= styled.div`
  width: 430px;
  height: 15px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`

export const Text_length = styled.div`
  width: 100px;
  height: 15px;
  color: #929292;
  font-size:15px;
  display: flex;
  justify-content: flex-end;
`

export const Button_Box = styled.div`
  margin-top: 28px;
  width: 430px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`

export const Ok_Button = styled.input`
  width: 210px;
  height: 50px;
  background-color: #F29A2E;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  border-radius: 50px;
  border: none;
  `

export const Cencle_Button = styled.input`
  width: 210px;
  height: 50px;
  background-color: #3d3d3d;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  border-radius: 50px;
  border: none;
  `
