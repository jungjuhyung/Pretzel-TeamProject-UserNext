"use client";

import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import {
  globalStyles, VideoContainer, Video , Overlay , Background
} from '../../../styles/choi/main/MainHomeCSS';

const MainHome = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const videoElement = document.querySelector('video');

    if (isHovered) {
      setHoverTimeout(setTimeout(() => {
        videoElement.play();
      }, 3000));
    } else {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      videoElement.pause();
    }

    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [isHovered]);

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <VideoContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Video muted>
            <source src="https://storage.googleapis.com/pretzel-movie/pretzel-action/Doctor_Strange.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
          <Overlay isHovered={isHovered} />
        </VideoContainer>
      </Background>
    </>
  );
}

export default MainHome;
