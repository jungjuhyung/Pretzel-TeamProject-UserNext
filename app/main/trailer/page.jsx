'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import LoadingSpinner from "../../commons/loadingSpinner/page";

import {
  Video,
  Overlay,
  Option_Box,
  Option_Box_Left,
  Option_Box_Right,
  AgeIcon,
  PlayButton,
  Info_button,
  Title,
  MuteButton,
} from "@/styles/choi/main/mainTrailerCSS";
import { useStores } from "@/stores/StoreContext";
import { useRouter } from "next/navigation";

const Trailer = observer(() => {
  const { loginStore, movieDetailStore } = useStores();
  const [main_movie, setMain_movie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const router = useRouter();

  const API_URL = "/main/";
  const API_URL_3 = "/profile/";
  useEffect(() => {
    chart_data();
  }, []);

  // 트레일러 정보 가져오기
  async function chart_data() {
    try {
      const response = await axios.post(API_URL + "main_movie");
      if (response.data) {
        setMain_movie(response.data);
      }
    } catch (error) {
      console.error("상세 정보 가져오기 실패 : ", error);
    } finally {
      setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
    }
  }

  // 화면 로딩 페이지
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // 영화 등급 이미지 분류
  let imageSrc;

  if (main_movie.movie_grade === "") {
    imageSrc = "/images/movieGrade/grade_none.png";
  } else if (main_movie.movie_grade === "12") {
    imageSrc = "/images/movieGrade/grade_12.png";
  } else if (main_movie.movie_grade === "15") {
    imageSrc = "/images/movieGrade/grade_15.png";
  } else if (
    main_movie.movie_grade === "19" ||
    main_movie.movie_grade === "18"
  ) {
    imageSrc = "/images/movieGrade/grade_19.png";
  } else {
    imageSrc = "/images/movieGrade/grade_all.png";
  }

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleButtonClick = (movie_idx) => {
    movieDetailStore.setMoiveIdx(movie_idx);
    router.push("/park/detail/detailPage");
  };

  // 영화 재생 버튼 누르기
  async function onClickPlay() {
    try {
      const response = await axios.post(
        API_URL_3 + "profile_detail",
        {
          profile_idx: loginStore.profile_idx,
        },
        {
          headers: {
            Authorization: `Bearer ${loginStore.token}`,
          },
        }
      );

      if (!loginStore.isLogin) {
        alert("로그인 후 이용 가능합니다.");
        router.push("/choi/login/loginPage");
      } else if (response.data.subs === null) {
        alert("구독권 구매 후 이용 가능합니다.");
        router.push("/toss/subscriptionPage");
      } else {
        router.push("/park/detail/moviePlayPage");
      }
    } catch (error) {
      console.error("프로필 정보 가져오기 실패 : ", error);
    }
  }

  return (
    <>
      {/* 트레일러 보여주는 비디오 */}
      <Video
        width="100%"
        height="100vh"
        src={`https://www.youtube.com/embed/${
          main_movie.trailer_url
        }?autohide=1&autoplay=1&mute=${
          isMuted ? "1" : "0"
        }&controls=0&modestbranding=1&showinfo=0&rel=0&title=0&byline=0&portrait=0&loop=1&playlist=${
          main_movie.trailer_url
        }`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {/* 화면 명암 */}
      <Overlay />

      {/* 영화 정보 박스 */}
      <Option_Box>
        <Option_Box_Left>
          {/* 영화 제목 */}
          <Title>{main_movie.korea_title}</Title>
        </Option_Box_Left>

        <Option_Box_Right>
          {/* 영화 등급 , 재생 , 상세 정보 */}
          <AgeIcon src={imageSrc} />
          <PlayButton type="button" value={"재생"} onClick={onClickPlay} />
          <Info_button
            type="button"
            value={"상세정보"}
            onClick={() => handleButtonClick(main_movie.movie_idx)}
          />
          <MuteButton
            className={isMuted ? "muted" : ""}
            onClick={handleMuteToggle}
          />
        </Option_Box_Right>
      </Option_Box>
    </>
  );
});

export default Trailer;
