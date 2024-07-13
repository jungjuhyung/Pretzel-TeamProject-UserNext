"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Global } from '@emotion/react';
import axios from 'axios';

// Importing styled components from external file
import {
  globalStyles, VideoContainer, Video, Overlay, Background,
  Option_Box, Title, Option_Box_Left, Option_Box_Right, Volume, AgeIcon,
  PlayButton, Info_button, Week_Popular, Week_Title, Week_Poster_Box,
  Poster, PosterWrapper, Contents, Contents_Title, Contents_Box, New_Contents
} from '@/styles/choi/main/MainHomeCSS';
import { observer } from 'mobx-react-lite';
import LoadingSpinner from '../commons/loadingSpinner/page';

const Main = observer(() => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Changed: Initially muted
  const [activePoster, setActivePoster] = useState(null);
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const postersPerPage = 5;
  const [isLoading, setIsLoading] = useState(true);
  // 메인 리스트 들
  const [main_movie, setMain_movie] = useState({});
  const [day_list, setDay_list] = useState([]);
  const [thema_list, setThema_list] = useState([]);
  const [statistics_list, setStatistics_list] = useState([]);
  const [recent_list, setRecent_list] = useState([]);

  const API_URL = "/main/"
  useEffect(() => {
    chart_data()
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
      setIsMuted(newMutedState);
    }
  };

  const handlePosterClick = (index) => {
    setActivePoster(prevActive => (prevActive === index ? null : index));
  };


  async function chart_data() {
    setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정
    console.log(API_URL);
    try {
      const response = await axios.post(API_URL + "main_movie");
      const response2 = await axios.post(API_URL + "day_list");
      const response3 = await axios.post(API_URL + "thema_list");
      const response4 = await axios.post(API_URL + "recent_list");
      if (false) {
        const response5 = await axios.post(API_URL + "statistics_list",
          {
            headers: {
              Authorization: `Bearer ${adminStore.token}`
            }
          });
      }
      if (response.data && response2.data && response3.data && response4.data) {
        console.log(response4.data)
        setMain_movie(response.data);
        setDay_list(response2.data);
        setThema_list(response3.data);
        setRecent_list(response4.data);
        //setStatistics_list(response5.data);
        console.log(recent_list);
      }
      console.log(recent_list);
    } catch (error) {
      console.error('상세 정보 가져오기 실패 : ', error)
    } finally {
      setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
    }
  }
  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <>
      <Global styles={globalStyles} />
      {/* {content.map((item) => ( */}
      <Background >
        <VideoContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          key="36"
        >
          <Video
            width="100%"
            height="100vh"
            src={`https://www.youtube.com/embed/${main_movie.trailer_url}?autohide=1&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&title=0&byline=0&portrait=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></Video>
          <Overlay />
          <Option_Box>
            <Option_Box_Left>
              <Title>{main_movie.korea_title}</Title>
            </Option_Box_Left>
            <Option_Box_Right>
              <Volume
                src={isMuted ? '/images/icons/VolumeOff.png' : '/images/icons/VolumeOn.png'}
                onClick={handleToggleMute}
              />
              <AgeIcon>{main_movie.movie_grade}</AgeIcon>
              <PlayButton type='button' value={"재생"} />
              <Info_button type='button' value={"상세정보"} />
            </Option_Box_Right>
          </Option_Box>
        </VideoContainer>
        {/* 인기 순위 TOP 10 */}
        <Week_Popular>
          <Week_Title>이 주의 인기 순위 TOP 5</Week_Title>
          <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

            <div style={{ overflow: 'hidden', width: 'auto' }}>
              <Week_Poster_Box
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${postersPerPage}, 1fr)`,
                  gap: '144px',
                  transition: 'transform 0.3s ease',
                  transform: `translateX(-${currentIndex * (250 + 20)}px)`,
                }}
              >
                {day_list.slice(currentIndex, currentIndex + postersPerPage).map((k, index) => (
                  <PosterWrapper
                    key={k.movie_idx}
                    onClick={() => handlePosterClick(k.movie_idx)}
                  >
                    <div style={{ position: 'relative' }}>
                      <Poster src={`https://image.tmdb.org/t/p/w500${k.poster_url}`} />
                      <div
                        style={{
                          position: 'absolute',
                          top: '275px',
                          left: '5px',
                          backgroundColor: 'rgba(0, 0, 0, 1)',
                          color: 'orange',
                          fontSize: '40px',
                          padding: '5px',
                          borderRadius: '5px',
                        }}
                      >
                        {currentIndex + index + 1}
                      </div>
                    </div>
                  </PosterWrapper>
                ))}
              </Week_Poster_Box>
            </div>

          </div>
        </Week_Popular>

        {/* 새로 올라온 콘텐츠 */}
        <New_Contents>
          <Contents_Title>
            새로 올라온 콘텐츠
          </Contents_Title>
          <Contents_Box>
            {recent_list.slice(0, postersPerPage).map((k) => (  // 첫 5개의 포스터만 렌더링
              <PosterWrapper
                key={k.movie_idx}
                onClick={() => handlePosterClick(k.movie_idx)}
              >
                <Poster src={`https://image.tmdb.org/t/p/w500${k.poster_url}`} />
              </PosterWrapper>
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
              {thema_list[genre].slice(0, postersPerPage).map((k) => (  // 첫 5개의 포스터만 렌더링
                <PosterWrapper
                  key={k.movie_idx}
                  onClick={() => handlePosterClick(k.movie_idx)}
                >
                  <Poster src={`https://image.tmdb.org/t/p/w500${k.poster_url}`} />
                </PosterWrapper>
              ))}
            </Contents_Box>
          </Contents>
        ))}
      </Background>
      {/* ))}  */}
    </>
  );
})

export default Main;
