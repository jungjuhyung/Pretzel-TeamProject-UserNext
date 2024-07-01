<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> origin/main
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import {
  globalStyles, VideoContainer, Video, Overlay, Background,
<<<<<<< HEAD
  Option_Box, Title, Option_Box_Left, Option_Box_Right, Volume, AgeIcon,
  PlayButton, Info_button, Week_Popular, Week_Title, Week_Poster_Box,
  Poster, PosterWrapper, PosterRank, PrevButton, NextButton , Contents,
  Contents_Title , Contents_Box , Contents_img , New_Contents
=======
  Option_Box, Title , Option_Box_Left , Option_Box_Right , Volume , AgeIcon,
  PlayButton , Info_button

>>>>>>> origin/main
} from '../../../styles/choi/main/MainHomeCSS';

const MainHome = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const videoElement = document.querySelector('video');

    if (isHovered) {
      setHoverTimeout(setTimeout(() => {
        videoElement.play();
<<<<<<< HEAD
      } else if (!isHovered || isMuted) {
        videoElement.pause();
=======
      }, 500));
    } else {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
>>>>>>> origin/main
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
<<<<<<< HEAD
              <Volume
                src={isMuted ? '/images/icons/VolumeOff.png' : '/images/icons/VolumeOn.png'}
                onClick={handleToggleMute}
              />
              <AgeIcon>15</AgeIcon>
              <PlayButton type='button' value={"재생"} />
              <Info_button type='button' value={"상세정보"} />
=======
              <Volume src='/images/icons/VolumeOn.png' />
              <AgeIcon>15</AgeIcon>
              <PlayButton type='button' value={"재생"}/>
              <Info_button type='button' value={"상세정보"}/>
>>>>>>> origin/main
            </Option_Box_Right>
          </Option_Box>
        </VideoContainer>
      </Background>
    </>
  );
}

export default MainHome;
