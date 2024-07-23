import styled from '@emotion/styled';

export const User_Popular = styled.div`
    margin-top: 100px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 30px 40px 30px 40px;
`;

export const User_Title = styled.div`
    width: auto;
    height: auto;
    font-size: 30px;
    font-family: 'Pretendard-Regular', sans-serif;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 3vh;
`;

export const User_Poster_Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1vw;
`;

export const PosterWrapper = styled.div`
    position: relative;
    width: auto;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover .poster-title {
        opacity: 1;
    }

    &:hover .poster-image {
        filter: brightness(50%);
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export const Poster = styled.img`
    width: 280px; 
    height: 38vh;
    object-fit: cover;
    border-radius: 5px;
    transition: filter 0.3s ease;
`;

export const Movie_Title = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Pretendard-Regular', sans-serif;
`;
