import React, { useState, useRef, useEffect } from 'react';
import { Global } from '@emotion/react';
import axios from 'axios';

// Importing styled components from external file
import {
  globalStyles, VideoContainer, Video, Overlay, Background,
  Option_Box, Title, Option_Box_Left, Option_Box_Right, Volume, AgeIcon,
  PlayButton, Info_button, Week_Popular, Week_Title, Week_Poster_Box,
  Poster, PosterWrapper, PosterRank, PrevButton, NextButton , Contents,
  Contents_Title , Contents_Box , Contents_img , New_Contents
} from '@/styles/choi/main/MainHomeCSS';
import { observer } from 'mobx-react-lite';

const Main =observer(() => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Changed: Initially muted
  const [activePoster, setActivePoster] = useState(null);
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const postersPerPage = 5;
  const posters = [
    '/images/Poster/Poster1.webp', '/images/Poster/Poster2.webp', '/images/Poster/Poster3.webp',
    '/images/Poster/Poster4.webp', '/images/Poster/Poster5.webp', '/images/Poster/Poster6.webp',
    '/images/Poster/Poster7.webp', '/images/Poster/Poster8.webp', '/images/Poster/Poster9.webp',
    '/images/Poster/Poster10.webp'
  ];
  const [content , setContent] = useState([]);

  useEffect(() => {
    const ContentData = async () => {
        try {
            const response = await axios.post("/main/thema_list");
            setContent(response.data); 
            console.log(setContent);
        } catch (error) {
            console.error('Error fetching Main-thema list:', error);
        }
    };

    ContentData(); // 컴포넌트가 마운트될 때 데이터 가져오기

  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
  
    if (videoElement) {
      if (isHovered && !isMuted && videoElement.paused) {
        videoElement.play();
      } else if (!isHovered || isMuted) {
        videoElement.pause();
      }
    }
  }, [isHovered, isMuted]);

  const handleToggleMute = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const newMutedState = !videoElement.muted;
      videoElement.muted = newMutedState;

      // 비디오가 현재 재생 중이고, 음소거를 해제하면 재생
      if (!videoElement.paused && !newMutedState) {
        videoElement.play();
      }

      setIsMuted(newMutedState);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => Math.max(prevIndex - postersPerPage, 0));
    }
  };

  const handleNextClick = () => {
    if (currentIndex + postersPerPage < posters.length) {
      setCurrentIndex(prevIndex => prevIndex + postersPerPage);
    }
  };

  const handlePosterClick = (index) => {
    setActivePoster(prevActive => (prevActive === index ? null : index));
  };

  return (
    <>
        <Global styles={globalStyles} />
        <Background>
          <VideoContainer 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            key="36"
          >
            <Video
            src="https://www.youtube.com/watch?v=MYruHOXRoZ8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
            <Overlay />
            <Option_Box>
              <Option_Box_Left>
                <Title>{content.title}</Title>
              </Option_Box_Left>
              <Option_Box_Right>
                <Volume
                  src={isMuted ? '/images/icons/VolumeOff.png' : '/images/icons/VolumeOn.png'}
                  onClick={handleToggleMute}
                />
                <AgeIcon>{content.age}</AgeIcon>
                <PlayButton type='button' value={"재생"} />
                <Info_button type='button' value={"상세정보"} />
              </Option_Box_Right>
            </Option_Box>
          </VideoContainer>
          {/* 인기 순위 TOP 10 */}
          <Week_Popular>
            <Week_Title>이 주의 인기 순위 TOP 10</Week_Title>
            <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
              {currentIndex > 0 && (
                <PrevButton onClick={handlePrevClick} style={{ zIndex: 1 }}>
                  Prev
                </PrevButton>
              )}
              <div style={{ overflow: 'hidden', width: `${postersPerPage * (250 + 20)}px` }}>
                <Week_Poster_Box
                  style={{
                    display: 'flex',
                    transition: 'transform 0.3s ease',
                    transform: `translateX(-${currentIndex * (250 + 20)}px)`,
                  }}
                >
                  {posters.slice(currentIndex, currentIndex + postersPerPage).map((poster, index) => (
                    <PosterWrapper
                      key={index}
                      onClick={() => handlePosterClick(currentIndex + index)}
                      isActive={activePoster === currentIndex + index}
                      className={activePoster === currentIndex + index ? 'active' : ''}
                    >
                      <Poster src={poster} />
                      <PosterRank className={activePoster === currentIndex + index ? 'active' : ''}>{currentIndex + index + 1}</PosterRank>
                    </PosterWrapper>
                  ))}
                </Week_Poster_Box>
              </div>
              {currentIndex + postersPerPage < posters.length && (
                <NextButton onClick={handleNextClick} style={{ zIndex: 1 }}>
                  Next
                </NextButton>
              )}
            </div>
          </Week_Popular>
          
          {/* 새로 올라온 콘텐츠 */}
          <New_Contents>
            <Contents_Title>
                새로 올라온 콘텐츠
            </Contents_Title>
            <Contents_Box>
              {Array.from({ length: 5 }).map((_, index) => (
                <Contents_img key={index} src='/images/contents/content.jpeg'/>
              ))}
            </Contents_Box>
          </New_Contents>

          {/* 장르별 콘텐츠 */}
          {['공포', '로맨스', '범죄/스릴러', '액션', '애니메이션'].map((genre, index) => (
            <Contents key={index}>
              <Contents_Title>
                {genre}
              </Contents_Title>
              <Contents_Box>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Contents_img key={index} src='/images/contents/content.jpeg'/>
                ))}
              </Contents_Box>
            </Contents>
          ))}
        </Background>
    </>
  );
})

export default Main;
