// 시청 내역
"use client";

import { MovieThumbnail, MovieTitle, OneMovieContainer, ViewingDate, ViewingHistoryContainer } from "@/styles/park/myPage/viewingHistoryCSS";

const ViewingHistory = () => {
    return (
        <ViewingHistoryContainer>
            <OneMovieContainer>
                <MovieThumbnail src='/images/samples/movieThumbnail.jpg' />
                <MovieTitle>괴물</MovieTitle>
                <ViewingDate>2024.06.22 시청</ViewingDate>
            </OneMovieContainer>
            <OneMovieContainer>
                <MovieThumbnail src='/images/samples/movieThumbnail.jpg' />
                <MovieTitle>괴물</MovieTitle>
                <ViewingDate>2024.06.22 시청</ViewingDate>
            </OneMovieContainer>
            <OneMovieContainer>
                <MovieThumbnail src='/images/samples/movieThumbnail.jpg' />
                <MovieTitle>괴물</MovieTitle>
                <ViewingDate>2024.06.22 시청</ViewingDate>
            </OneMovieContainer>
            <OneMovieContainer>
                <MovieThumbnail src='/images/samples/movieThumbnail.jpg' />
                <MovieTitle>괴물</MovieTitle>
                <ViewingDate>2024.06.22 시청</ViewingDate>
            </OneMovieContainer>
            <OneMovieContainer>
                <MovieThumbnail src='/images/samples/movieThumbnail.jpg' />
                <MovieTitle>괴물</MovieTitle>
                <ViewingDate>2024.06.22 시청</ViewingDate>
            </OneMovieContainer>
            <OneMovieContainer>
                <MovieThumbnail src='/images/samples/movieThumbnail.jpg' />
                <MovieTitle>괴물</MovieTitle>
                <ViewingDate>2024.06.22 시청</ViewingDate>
            </OneMovieContainer>
        </ViewingHistoryContainer>
    )
}

export default ViewingHistory;