import styled from '@emotion/styled';

export const New_Contents = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 262px;
    padding: 30px 40px 30px 40px;
`;

export const Contents_Title = styled.div`
    width: auto;
    height: 36px;
    font-size: 29px;
    font-family: 'Pretendard-Regular', sans-serif;
    color: #FFFFFF;
    margin-bottom: 100px;
`;

export const Contents_Box = styled.div`
    width: 100%;
    height: 19vh;
    display: flex;
    gap: 1vw;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
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
    width: 200px; /* 포스터의 너비를 200px로 설정합니다 */
    height: 300px;
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
