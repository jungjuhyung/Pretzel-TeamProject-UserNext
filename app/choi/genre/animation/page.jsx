// 장르 페이지

"use client";
import React, { useState, useContext, useEffect } from 'react';
import { Global } from '@emotion/react';
// import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import axios from 'axios';

import {
  globalStyles , Background , Title , Genre_box , Contents_box , Contetns_Poster ,
  Contents_title
} from '../../../../styles/choi/genre/ThemeCSS';
import { useStores } from '@/stores/StoreContext';

const Animation = () =>{
  const { movieDetailStore } = useStores();
  const router = useRouter();
  const [content, setContent] = useState([]);


  useEffect(() => {
    const ContentData = async () => {
        try {
            const response = await axios.get("/search/select_thema?thema=애니메이션");
            setContent(response.data); 
        } catch (error) {
            console.error('Error not Action list:', error);
        }
    };

    ContentData(); // 컴포넌트가 마운트될 때 데이터 가져오기

}, []);

  const handlePosterClick = (movie_idx) => {
    movieDetailStore.setMoiveIdx(movie_idx);
    router.push("/park/detail/detailPage");
  };
  
  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Title>애니메이션</Title>
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

export default Animation;