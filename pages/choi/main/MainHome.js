"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles,
  VideoContainer,
  Video
} from '../../../styles/choi/main/MainHomeCSS';

const MainHome = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <VideoContainer>
        <Video controls>
          <source src="https://storage.googleapis.com/pretzel-movie/pretzel-action/Doctor_Strange.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
    </>
  );
}

export default MainHome;
