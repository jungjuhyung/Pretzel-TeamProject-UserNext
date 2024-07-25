import styled from "@emotion/styled";

export const Video = styled.video`
    width: 100%;
    height: 100vh;
`

export const Subtitle = styled.track`
`

export const DeepFace_Container = styled.div`
    margin: 50px 0;
`

export const Emotion_Container = styled.div`
    margin: 50px 0 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DeepFace_Title = styled.h1`
    color: #ffffff;
    text-align: center;
    font: 600 20px "Pretendard-Regular";
    margin-bottom: 10px;
`

export const DeepFace_SubTitle = styled.h2`
    color: #868686;
    text-align: center;
    font: 17px "Pretendard-Regular";
    margin-bottom: 30px;
`

export const Person_Container = styled.div`
    display: flex;
    align-items: center;

    &:hover {
        filter: brightness(50%);
        transition: filter linear 0.2s;
        cursor: pointer;
    }
`

export const Timeline_Button = styled.button`
    border: none;
    width: 100px;
    height: 40px;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    font: 15px "Pretendard-Regular";

    &:hover {
        background-color: #868686;
        color: #f29a2e;
        cursor: pointer;
    }
`

export const TimeLine_Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 20px;
`

export const Actor_Name = styled.p`
    color: #ffffff;
    font: 600 20px "Pretendard-Regular";
    width: 90%;
    margin: 0 auto 10px auto;
`

export const Description = styled.p`
    color: #868686;
    width: 90%;
    font: 17px "Pretendard-Regular";
    margin: 0 auto 30px auto;
`

export const Emotion_Select = styled.select`
    background-color: #252525;
    color: #ffffff;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 10px;
    border: none;
    font: 16px/50px "Pretendard-Regular";
    cursor: pointer;
`

export const Emotion = styled.option`
`

export const AnxCaption = styled.div`
    position: fixed;
    top: 100px;
    left: calc(50% - 65px);
    width: 130px;
    box-sizing: border-box;
    padding: 10px;
    color: #ffffff;
    font: 30px "Pretendard-Regular";
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
`