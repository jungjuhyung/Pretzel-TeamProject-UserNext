import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import {
  globalStyles, VideoContainer, Video, Overlay, Background,
  Option_Box, Title , Option_Box_Left , Option_Box_Right , Volume , AgeIcon,
  PlayButton , Info_button

} from '../../../styles/choi/main/MainHomeCSS';

const MainHome = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const videoElement = document.querySelector('video');

    if (isHovered) {
      setHoverTimeout(setTimeout(() => {
        videoElement.play();
      }, 500));
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
          </Video>
          <Overlay />
          <Option_Box>
            <Option_Box_Left>
              <Title>캡틴</Title>
            </Option_Box_Left>
            <Option_Box_Right>
              <Volume src='/images/icons/VolumeOn.png' />
              <AgeIcon>15</AgeIcon>
              <PlayButton type='button' value={"재생"}/>
              <Info_button type='button' value={"상세정보"}/>
            </Option_Box_Right>
          </Option_Box>
        </VideoContainer>
      </Background>
    </>
  );
}

export default MainHome;
