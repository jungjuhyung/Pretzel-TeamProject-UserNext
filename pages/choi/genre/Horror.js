// 장르 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';
import Layout from '@/pages/commons/Layout';

import {
  globalStyles , Background , Title , Genre_box , Contents_box 
} from '../../../styles/choi/genre/ActionCSS';

const Action = () =>{
  return(
    <>
    <Layout>
      <Global styles={globalStyles} />
        <Background>
          <Title>공포</Title>
          <Genre_box>
            <Contents_box></Contents_box>
          </Genre_box>
        </Background>
        </Layout>  
    </>
  )
}

export default Action;