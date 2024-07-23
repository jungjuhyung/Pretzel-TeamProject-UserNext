import styled from '@emotion/styled';

export const Video = styled.iframe`
    position: absolute;
    width: 100%;
    height: 85vh; 
    top: 0;
    object-fit: contain; 
    pointer-events: none; /* Prevent the video from reacting to clicks */
`;

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 85vh;
    top: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
    pointer-events: none; 
`;

export const Option_Box = styled.div`
    position: absolute;
    top: calc(85vh - 190px);
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
    padding-right: 20px;
`;

export const Title = styled.div`
    font-size: 60px; 
    color: #FFFFFF;
    font-family: 'Freesentation-9Black';
    margin-left: 30px;
`;

export const AgeIcon = styled.img`
    width: 45px; 
    height: 45px; 
`;

export const PlayButton = styled.input`
    width: 100px; 
    height: 45px; 
    background-color: rgba(255, 255, 255, 0.2);
    border: none; 
    border-radius: 5px; 
    color: #FFFFFF; 
    font-size: 20px; 
    text-align: center;
    font-family: "Pretendard-Regular";
    padding-left: 30px; 
    background-image: url('/images/icons/play.png'); 
    background-repeat: no-repeat; 
    background-position: 10px center;
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
    padding-left: 35px; 
    font-family: "Pretendard-Regular";
    background-image: url('/images/icons/error.png'); 
    background-repeat: no-repeat; 
    background-position: 12px center;
    background-size: 25px; 
    background-color: rgba(255, 255, 255, 0.2);
    color: #FFFFFF; 
    margin-left: 20px;
    margin-right: 30px;
`;

export const MuteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: none;
    width: 30px;
    height: 30px;
    background-image: url('/images/icons/VolumeOff.png'); /* 기본 상태 이미지 */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &:focus {
        outline: none;
    }

    &.muted {
        background-image: url('/images/icons/VolumeOn.png'); /* 음소거 상태 이미지 */
    }
`;
