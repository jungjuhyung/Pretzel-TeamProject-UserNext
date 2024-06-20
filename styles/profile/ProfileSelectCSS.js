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

export const Wrapper_box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 147px;
  width: 1150px;
  height: 616px;
  
`

export const Title = styled.div`
  width: 477px;
  height: 36px;
  font-size: 30px;
  font-weight: 600;
  color: #FFFFFF;
`

