import styled from "@emotion/styled";

export const Backdrop = styled.img`
    width: 100%;
    height: 80vh;
    top: 0;
    object-fit: cover;
    filter: brightness(15%);
    position: absolute;
    z-index: -1;
`

export const MovieTitle = styled.h1`
    font: 800 50px "Pretendard-Regular";
    color: #ffffff;
    margin-bottom: 20px;
`

export const MovieInfo_Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
    margin-bottom: 10px;
`

export const MovieGrade = styled.img`
    width: 22px;
    height: 22px;
    line-height: 20px;
`

export const VerticalLine = styled.p`
    font: 20px "Pretendard-Regular";
    color: #ffffff;
`

export const ReleaseYear = styled.p`
    font: 20px "Pretendard-Regular";
    color: #ffffff;
`

export const RunTime = styled.p`
    font: 20px "Pretendard-Regular";
    color: #ffffff;
`

export const Genre = styled.p`
    font: 20px "Pretendard-Regular";
    color: #ffffff;
`

export const Buttons_Container = styled.div`
    display: flex;
    margin-bottom: 20px;
`

export const PlayBtn = styled.button`
    background-color: #3F3F3E;
    color: #ffffff;
    border: none;
    font: 20px "Pretendard-Regular";
    box-sizing: border-box;
    padding: 10px;
    width: 110px;
    height: 46px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    justify-content: space-evenly;
`

export const WishBtn = styled.button`
    background-color: #3F3F3E;
    color: #ffffff;
    border: none;
    font: 20px "Pretendard-Regular";
    box-sizing: border-box;
    padding: 10px;
    width: 160px;
    height: 46px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const MovieDiscription = styled.div`
    width: 800px;
    font: 17px "Pretendard-Regular";
    color: #ffffff;
    line-height: 30px;
`

export const MoviePoster = styled.img`
    width: 300px;
    height: 450px;
    border-radius: 5px;
`

export const MovieDetail_Container = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 40px 0 40px;
    height: calc(80vh - 100px);
`

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
`