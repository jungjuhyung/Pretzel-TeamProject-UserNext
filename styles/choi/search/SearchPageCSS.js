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
`;

export const KeywordBox = styled.div`
    width: 80%;
    height: 800px;
    display: flex;
    margin-top: 60px;
    flex-direction: column;
`

export const KeywordBox_Top = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid white;
    padding: 14px;
    display: flex;
    align-items: center;
`

export const KeywordWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Keyword = styled.input`
    width: 100%;
    height: 100%;
    background-color: #0d0d0d;
    border: none;
    font-size: 30px;
    color: #FFFFFF;
    padding-right: 40px; /* Make space for the icon */
    outline: none;
`

export const Icon = styled.img`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px; 
    cursor: pointer;
    pointer-events: auto; 
`

export const KeywordBox_Bottom = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 78px;
    display: flex;
`

export const Bottom_left = styled.div`
    width: 50%;
    height: 100%;
    padding: 0px 47px;
    border-right: 1px solid #3d3d3d; 
`

export const Recent_title = styled.div`
    width: 140px;
    height: 36px;
    font-weight: bold;
    color: #FFFFFF;
    font-size: 30px;
`

export const Recent_Keyword_Box = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Recent_Keyword_Item = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

export const Recent_Keyword = styled.div`
    color: #FFFFFF;
    font-size: 20px;
    flex: 1;
`

export const DeleteIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const Bottom_right = styled.div`
    width: 50%;
    height: 100%;
    padding: 0px 47px;
    border-left: 1px solid #3d3d3d; 
`

export const RealTime_title = styled.div`
    width: 230px;
    height: 36px;
    font-weight: bold;
    color: #FFFFFF;
    font-size: 30px;
`

export const RealTime_Keyword_Box = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const RealTime_Keyword = styled.div`
    width: 100%;
    height: 22px;
    color: #FFFFFF;
    font-size: 20px;
`