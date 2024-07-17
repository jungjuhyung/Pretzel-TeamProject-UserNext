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
    width: 200px; /* 포스터의 너비를 250px로 설정합니다 */
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
`;