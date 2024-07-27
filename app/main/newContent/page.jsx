"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import LoadingSpinner from "../../commons/loadingSpinner/page";

import {
  New_Contents,
  Contents_Title,
  Contents_Box,
  PosterWrapper,
  Poster,
  Movie_Title,
} from "@/styles/choi/main/mainNewCotentCSS";

const NewContent = observer(() => {
  const [recent_list, setRecent_list] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // isLoading 상태 추가
  const postersPerPage = 5; // 페이지당 포스터 수

  const API_URL = "/main/";

  useEffect(() => {
    chart_data();
  }, []);

  // 새로 올라온 콘텐츠 리스트 가져오기
  async function chart_data() {
    setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정
    try {
      const response = await axios.post(API_URL + "recent_list");
      if (response.data) {
        setRecent_list(response.data);
      }
    } catch (error) {
    } finally {
      setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
    }
  }

  // 로딩
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handlePosterClick = (movie_idx) => {
    // Your handlePosterClick function logic here
  };

  return (
    <New_Contents>
      <Contents_Title>새로 올라온 콘텐츠</Contents_Title>
      <Contents_Box>
        {recent_list.slice(0, postersPerPage).map(
          (
            k // 첫 5개의 포스터만 렌더링
          ) => (
            <PosterWrapper
              key={k.movie_idx}
              onClick={() => handlePosterClick(k.movie_idx)}
            >
              <Poster
                src={`https://image.tmdb.org/t/p/w500${k.poster_url}`}
                className="poster-image"
              />
              <Movie_Title className="poster-title">
                {k.korea_title}
              </Movie_Title>
            </PosterWrapper>
          )
        )}
      </Contents_Box>
    </New_Contents>
  );
});

export default NewContent;
