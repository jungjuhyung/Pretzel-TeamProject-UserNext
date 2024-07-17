import styled from "@emotion/styled";

export const ViewingHistoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px 20px;
    margin: 0 3%;
`

export const OneMovieContainer = styled.div`
    display: flex;
    flex-direction: column;

    &:hover {
        filter: brightness(60%);
        transition: filter ease 0.5s;
        cursor: pointer;
    }
`

export const MovieThumbnail = styled.img`
    max-width: 350px;
    width: 100%;
    max-height: 197px;
    height: 100%;
    border-radius: 5px;
`

export const MovieTitle = styled.h1`
    font-family: "Pretendard-Regular";
    font-size: 15px;
    color: #FFFFFF;
    margin: 10px 0;
`

export const ViewingDate = styled.p`
    font-family: "Pretendard-Regular";
    font-size: 15px;
    color: #868686;
`