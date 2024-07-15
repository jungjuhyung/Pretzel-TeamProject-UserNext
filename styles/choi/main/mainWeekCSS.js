import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { style } from '@mui/system';

export const Week_Popular = styled.div`
    margin-top: 85vh;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 30px 40px 30px 40px;
`;

export const Week_Title = styled.div`
    width: auto;
    height: auto;
    font-size: 30px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 3vh;
`;

export const Week_Poster_Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    transition: transform 0.3s ease;
`;

export const PosterWrapper = styled.div`
    width: auto;
    position: relative;
    cursor: pointer;
    transform: scale(${props => props.isActive ? '1.1' : '1'});
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Poster = styled.img`
    width: 280px; /* 포스터의 너비를 250px로 설정합니다 */
    height: 38vh;
    object-fit: cover;
`;

export const RankNumber = styled.div`
    position: absolute;
    top: 300px;
    left: 10px;
    background-color: rgba(0, 0, 0, 1);
    color: orange;
    padding: 5px 10px;
    font-size: 2.5em;
    font-weight: bold;
`;
