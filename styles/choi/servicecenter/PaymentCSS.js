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
  height: 1386px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Title = styled.div`
  margin-top: 182px;
  width: 129px;
  height: 36px;
  font-size: 30px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const Inquiry_Box = styled.div`
  margin-top: 68px;
  width: 1000px;
  height: auto;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
`;

export const Inquiry_Box_Top = styled.div`
  width: 100%;
  height: auto;
  background-color: #1e1e1e;
  border-bottom: 1px solid gray;
  font-size: 20px;
  color: #FFFFFF;
  padding-bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.isOpen ? '/images/icons/ArrowTop.png' : '/images/icons/ArrowDown2.png'});
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 40px; /* 이미지와 텍스트 간격 조정 */
`;

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 500px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

export const Inquiry_Box_Bottom = styled.div`
  width: 100%;
  height: auto;
  background-color: #1e1e1e;
  font-size: 20px;
  color: #FFFFFF;
  padding-top: 20px;
  max-height: ${props => (props.isOpen ? '500px' : '0')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  animation: ${props => (props.isOpen ? slideDown : slideUp)} 0.3s ease-out;
`;
