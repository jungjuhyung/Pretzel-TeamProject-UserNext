// 장르 페이지

"use client";
import React, { useState, useContext, useEffect } from 'react';
import { Global } from '@emotion/react';
// import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import Layout from '@/pages/commons/Layout';
import axios from 'axios';

import {
  globalStyles , Background , Title , Genre_box , Contents_box , Contetns_Poster
} from '../../../styles/choi/genre/ActionCSS';
const Action = () =>{


  const router = useRouter();
  
  const [content, setContent] = useState([]);


  useEffect(() => {
    const ContentData = async () => {
        try {
            const response = await axios.get("/search/select_thema?thema=액션");
            setContent(response.data); 
            console.log(response.data)
        } catch (error) {
            console.error('Error not Action list:', error);
        }
    };

    ContentData(); // 컴포넌트가 마운트될 때 데이터 가져오기

}, []);
  
  return(
    <>
    <Layout>
      <Global styles={globalStyles} />
        <Background>
          <Title>액션</Title>
          <Genre_box>
            {content.map((item, index) => (
            <Contents_box key={item.movie_idx}>
              <Contetns_Poster>{item.korea_title}</Contetns_Poster>
            </Contents_box>
            ))} 
          </Genre_box>
        </Background>
      </Layout>
    </>
  )
};

export default Action;