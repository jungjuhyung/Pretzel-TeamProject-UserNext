// 범죄/스릴러

"use client";
import React, { useState, useContext, useEffect } from 'react';
import { Global } from '@emotion/react';
import { useRouter } from "next/navigation";
import { useStores } from '@/stores/StoreContext';
import axios from 'axios';

// CSS-IN-JS Import
import {
  globalStyles , Background , Title , Genre_box , Contents_box , Contetns_Poster ,
  Contents_title
} from '../../../../styles/choi/genre/ThemeCSS';
const Crime = () =>{

  const { movieDetailStore } = useStores();
  const [content, setContent] = useState([]);
  const router = useRouter();
  
  // 컴포넌트가 마운트될 때 데이터 가져오기
  useEffect(() => {
    const ContentData = async () => {
        try {
            const response = await axios.get("/search/select_thema?thema=범죄/스릴러");
            setContent(response.data); 
        } catch (error) {
            console.error('Error not Action list:', error);
        }
    };

    ContentData(); 

}, []);

  // 포스터 클릭시 movie_idx를 가지고 디테일 페이지 이동
  const handlePosterClick = (movie_idx) => {
    movieDetailStore.setMoiveIdx(movie_idx);
    router.push("/park/detail/detailPage");
  };
  
  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Title>범죄/스릴러</Title>
          <Genre_box>
          {content.map((k, index) => (
            <Contents_box key={k.movie_idx} onClick={() => handlePosterClick(k.movie_idx)}>
              <Contetns_Poster src={`https://image.tmdb.org/t/p/w500/${k.poster_url}`} />
              <Contents_title>{k.korea_title}</Contents_title>
            </Contents_box>
          ))}
          </Genre_box>
        </Background>
    </>
  )
};

export default Crime;