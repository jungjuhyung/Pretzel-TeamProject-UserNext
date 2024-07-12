// 장르 페이지

"use client";
import React, { useState , useEffect } from 'react';
import { Global } from '@emotion/react';
import axios from 'axios';

import {
  globalStyles , Background , Title , Genre_box , Contents_box , Contetns_Poster ,
  Contents_title
} from '../../../../styles/choi/genre/ThemeCSS';
const Action = () =>{

  const [content, setContent] = useState([]);


  useEffect(() => {
    const ContentData = async () => {
        try {
            const response = await axios.get("/search/select_thema?thema=액션");
            setContent(response.data); 
        } catch (error) {
            console.error('Error not Action list:', error);
        }
    };

    ContentData(); // 컴포넌트가 마운트될 때 데이터 가져오기

}, []);
  
  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Title>액션</Title>
          <Genre_box>
            {content.map((item) => (
            <Contents_box key={item.movie_idx}>
              <Contetns_Poster src={`https://image.tmdb.org/t/p/w500/${item.poster_url}`} />
              <Contents_title>{item.korea_title}</Contents_title>
            </Contents_box>
            ))} 
          </Genre_box>
        </Background>
    </>
  )
};

export default Action;