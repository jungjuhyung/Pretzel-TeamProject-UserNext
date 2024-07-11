import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Video = styled.iframe`
    position: relative;
    width: 100%;
    height: 630px; 
    object-fit: cover; 
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
    pointer-events: none; 
`;

export const Option_Box = styled.div`
    position: absolute;
    bottom: 220px;
    width: 100%;
    height: 154px;
    display: flex;
    
`;

export const Option_Box_Left = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding-left: 20px;
    `;

export const Option_Box_Right = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const Title = styled.div`
    font-size: 80px; 
    color: #FFFFFF; 
`;


export const AgeIcon = styled.img`
    width: 45px; 
    height: 45px; 
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
    margin-left: 20px;
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
    margin-left: 20px;
    margin-right: 10px;
`;