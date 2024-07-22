"use client"

import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '@/styles/commons/commons.css'

import { Subtitle, Video } from "@/styles/park/moviePlayPageCSS";
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import LoadingSpinner from '@/app/commons/loadingSpinner/page';
import { useStores } from '@/stores/StoreContext';

const MoviePlayPage = () => {

    // 비디오 태그 영상 경로에 직접 참조하여 접근하는 hook
    const videoRef = useRef(null);
    
    // 재생 중인 시간 업데이트 상태변수
    const [currentTime, setCurrentTime] = useState(0);

    const { loginStore, movieDetailStore } = useStores();

    // 감정분석 데이터 유무
    const [emotionState, setEmotionState] = useState(true);

    // 감정분석 데이터
    const [emotionData, setEmotionData] = useState({})

    // 딥페이스 데이터 유무
    const [deepfaceState, setDeepfaceState] = useState(true);
    
    // 딥페이스 데이터
    const [deepfaceData, setDeepfaceData] = useState({})
    
    // Storage에 존재하는 자막 배열
    const [canSubtitles, setCanSubtitles] = useState([]);

    // 영화 재생 정보
    const [moviePlay, setMoviePlay] = useState({});

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);
    
    // 번역 코드 및 명칭
    const country = ["ko", "ja", "zh", "en", "fr", "de", "es", "it", "pt", "ru", "hi"];
    const labels = {
        ko: "한국어",
        ja: "日本語",
        zh: "中文",
        en: "English",
        fr: "Français",
        de: "Deutsch",
        es: "Español",
        it: "Italiano",
        pt: "Português",
        ru: "Русский",
        hi: "हिन्दी"
    };
    
    // json으로 온 문자열 시간값을 정수형 초단위로 변환 함수
    const changeSecondTime = (timeString) => {
        const [hours, minutes, seconds] = timeString.split(':');
        const [secs, millis] = seconds.split('.');
         return (parseInt(hours, 10) * 3600)
            + (parseInt(minutes, 10) * 60)
            + parseInt(secs, 10)
            + (parseInt(millis, 10) / 1000);
    };

    // 비디오의 특정 시간대로 이동하는 함수
    const moveVideoTime = (videoTime) => {
        if (videoRef.current) {
            videoRef.current.currentTime = videoTime;
        }
    };

    // 현재 재생 시간 업데이트 함수
    const updateCurrentTime = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        movie_detail()
    }, []);

    const API_URL = "/movie/"
    const API_URL_2 = "/profile/"

    // 영화 재생 정보 가져오기
    async function movie_detail() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "movie_detail", {
                params: {
                    movie_idx: movieDetailStore.movie_idx
                }
            });

            if (response.data) {
                setMoviePlay(response.data);
            }

            // 영화 시청자 프로필 가져오기
            const response2 = await axios.post(API_URL_2 + "profile_detail",
                {
                    profile_idx: loginStore.profile_idx
                },
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                }
            );

            // 영화 시청자 데이터
            const response3 = await axios.get(API_URL + "watch_movie", {
                params: {
                    gender: response2.data.gender,
                    age: response2.data.age,
                    movie_idx: movieDetailStore.movie_idx,
                    profile_idx: loginStore.profile_idx
                }
            });

            // 스토리지 번역 파일 유무 체크
            checkSubtitles(response.data.movie_url)

            // 감정분석 데이터가 없으면
            if (response.data.ai_emotion_syc === null) {
                setEmotionState(false)
            } else {
                try {
                    const response4 = await axios.get(
                        `/storage/pretzel-emotionResAI/${response.data.storage_name}_emotion_res.json`);
                    if (response4.data) {
                        console.log(response4.data)
                        setEmotionData(response4.data)
                    }
                } catch (error) {
                    console.error('감정분석 가져오기 실패 : ', error);
                }
            }
            // 딥페이스 데이터가 없으면
            if (response.data.ai_deep_syc === null) {
                setDeepfaceState(false)
            } else {
                try {
                    const response5 = await axios.get(
                        `/storage/pretzel-deepfaceAI/${response.data.storage_name}_deepface.json`);
                    if (response5.data) {
                        console.log(response5.data)
                        setDeepfaceData(response5.data)
                    }
                } catch (error) {
                    console.error('딥페이스 가져오기 실패 : ', error);
                }
            }
        } catch (error) {
            console.error('상세 정보 가져오기 실패 : ', error);
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }

    // 로딩중일 때
    if (isLoading) {
        return <LoadingSpinner />
    }

    // 스토리지에 번역 파일이 있는지 체크하는 함수
    async function checkSubtitles(name){
        const chk = [];
        for (const k of country) {
          try {
            const response = await axios.head(`/storage/${name}_${k}.vtt`);
            if (response.status === 200) {
                console.log("in",k);
                chk.push(k);
            }
        } catch (error) {
        }
        }
        setCanSubtitles(chk);
    };
    return (
        <>
            <Video
                ref={videoRef}
                onTimeUpdate={updateCurrentTime}
                controls
                autoPlay
                muted
                controlsList="nodownload"
                >
                <source src={`/storage/${moviePlay.movie_url}.mp4`} />
                {canSubtitles.map((k) => (
                    <Subtitle
                      key={k}
                      kind="subtitles"
                      src={`/storage/${moviePlay.movie_url}_${k}.vtt`}
                      srcLang={k}
                      label={labels[k] || k}
                      default={k === "ko"}
                    />
                ))
                }
            </Video>
            <button onClick={() => moveVideoTime("30")}>Go to 30 seconds</button>
            <div>현재 재생 시간: {currentTime}초</div>
        </>
    )
}

export default MoviePlayPage;