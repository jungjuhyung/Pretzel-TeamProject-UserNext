import styled from "@emotion/styled";

export const MovieWishListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 30px 20px;
    margin: 0 5%;
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

export const MoviePoster = styled.img`
    max-width: 200px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
`

export const MovieTitle = styled.h1`
    font-family: "Pretendard-Regular";
    font-size: 15px;
    color: #FFFFFF;
    margin: 10px 0;
`