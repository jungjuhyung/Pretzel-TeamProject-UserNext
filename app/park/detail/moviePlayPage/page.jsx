"use client"

import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '@/styles/commons/commons.css'

import { Actor_Name, DeepFace_Container, DeepFace_SubTitle, DeepFace_Title, Description, Emotion, Emotion_Container, Emotion_Select, Person_Container, Subtitle, Timeline_Button, TimeLine_Container, Video } from "@/styles/park/moviePlayPageCSS";
import axios from 'axios';
import { use, useEffect, useRef, useState } from 'react';
import LoadingSpinner from '@/app/commons/loadingSpinner/page';
import { useStores } from '@/stores/StoreContext';
import { All_Container, Person_Name, Person_Role, PersonInfo_Container, Proifle_Img } from '@/styles/park/detailPage/staffAndCastCSS';

const MoviePlayPage = () => {

    // 비디오 태그 영상 경로에 직접 참조하여 접근하는 hook
    const videoRef = useRef(null);
    const { loginStore, movieDetailStore } = useStores();

    // 재생 중인 시간 업데이트 상태변수
    const [currentTime, setCurrentTime] = useState(0);

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

    // 출연진 리스트
    const [castList, setCastList] = useState([])

    // 출연진 타임라인 리스트
    const [castTimeList, setCastTimeList] = useState([])

    // 특정 배우 이름
    const [actorName, setActorName] = useState("")

    // 감정 선택
    const [emotionType, setEmotionType] = useState("none")

    // 감정 타임라인 리스트
    const [emotionTimeList, setEmotionTimeList] = useState([])

    // 프로필 정보 - 구독권 정보보기 위함
    const [profileData, setProfileData] = useState({})

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

            if (response2.data) {
                setProfileData(response2.data);
            }

            // 영화 시청자 데이터 쌓기
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


            // 회원의 구독권이 프리미엄이라면 ai 기능 실행
            if (response2.data.subs === "프리미엄") {

                // 애니메이션은 deepface ai 없음
                if (!/^pretzel-ani\/.*$/.test(response.movie_url)) {

                    // 배우 리스트 가져오기
                    const response6 = await axios.get(API_URL + "cast_list", {
                        params: {
                            movie_idx: movieDetailStore.movie_idx
                        }
                    });

                    if (response6.data) {
                        setCastList(response6.data)
                    }
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
    async function checkSubtitles(name) {
        const chk = [];
        for (const k of country) {
            try {
                const response = await axios.head(`/storage/${name}_${k}.vtt`);
                if (response.status === 200) {
                    console.log("in", k);
                    chk.push(k);
                }
            } catch (error) {
            }
        }
        setCanSubtitles(chk);
    };

    // 배우 클릭 시
    const onClickActor = (cast_name) => {
        setCastTimeList(deepfaceData.filter(k => k.label === cast_name));
        setActorName(cast_name)
    }

    // 배우 클릭 시 나오는 타임라인 버튼
    const show_timeline = () => {
        return (
            <>
                <Actor_Name>{actorName} 출연 타임라인</Actor_Name>
                <Description>버튼을 클릭하면 해당 시간대로 이동합니다.</Description>
                <TimeLine_Container>
                    {castTimeList.map((deepface) => (
                        <Timeline_Button key={deepface.time} onClick={() => moveVideoTime(changeSecondTime(deepface.time))}>{deepface.time.slice(0, 8)}</Timeline_Button>
                    ))}
                </TimeLine_Container>
            </>
        )
    }

    // 시간 차이를 계산하는 함수
    const timeDifferenceInSeconds = (time1, time2) => {
        const [h1, m1, s1] = time1.split(':').map(Number);
        const [h2, m2, s2] = time2.split(':').map(Number);

        const totalSeconds1 = h1 * 3600 + m1 * 60 + s1;
        const totalSeconds2 = h2 * 3600 + m2 * 60 + s2;

        return Math.abs(totalSeconds1 - totalSeconds2);
    };

    // 감정 select 값 변경
    const onChangeEmotion = (e) => {
        if (e.target.value === "none") {
            setEmotionTimeList([]);
        } else {
            setEmotionType(e.target.value)

            // 감정 데이터 필터링 및 시간 차이에 따른 필터링 적용
            // reduce를 통해 이전 값과 현재 값을 비교하여 시간이 1분 이하로 차이나면 현재 값 제거
            const filteredEmotionData = emotionData
                .filter(k => k.label === e.target.value)
                .reduce((acc, current, index) => {
                    if (index === 0) {
                        acc.push(current);
                    } else {
                        const previous = acc[acc.length - 1];
                        if (timeDifferenceInSeconds(previous.time.slice(0, 8), current.time.slice(0, 8)) > 60) {
                            acc.push(current);
                        }
                    }
                    return acc;
                }, []);

            console.log("필터 결과")
            console.log(filteredEmotionData)

            setEmotionTimeList(filteredEmotionData);
        }
    }

    // 감정 선택 시 나오는 타임라인 버튼
    const show_timeline_emotion = () => {
        return (
            <>
                <Actor_Name>{emotionType === "hap" ? "기쁨" :
                    emotionType === "sad" ? "슬픔" :
                        emotionType === "ang" ? "분노" : "불안"} 타임라인</Actor_Name>
                <Description>버튼을 클릭하면 해당 시간대로 이동합니다.</Description>
                <TimeLine_Container>
                    {emotionTimeList.map((emotion) => (
                        <Timeline_Button key={emotion.time} onClick={() => moveVideoTime(changeSecondTime(emotion.time.slice(0, emotion.time.indexOf(' '))))}>{emotion.time.slice(0, 8)}</Timeline_Button>
                    ))}
                </TimeLine_Container>
            </>
        )
    }

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

            {deepfaceState ?
                <>
                    <DeepFace_Container>
                        <DeepFace_Title>원하는 배우를 클릭해 주세요.</DeepFace_Title>
                        <DeepFace_SubTitle>해당하는 배우의 시간대가 나옵니다.</DeepFace_SubTitle>
                        <All_Container>
                            {/* 배우 5명만 보여주기 */}
                            {castList.slice(0, 5).map((k) => (
                                <Person_Container key={k.cast_idx} onClick={() => onClickActor(k.cast_name)}>
                                    <Proifle_Img src={!k.cast_img ? "/images/samples/default_profile.png" : `https://image.tmdb.org/t/p/w185/${k.cast_img}`} />
                                    <PersonInfo_Container>
                                        <Person_Name>{k.cast_name}</Person_Name>
                                        <Person_Role>{k.role}</Person_Role>
                                    </PersonInfo_Container>
                                </Person_Container>
                            ))}
                        </All_Container>
                        {castTimeList.length > 0 ? show_timeline() : <></>}
                    </DeepFace_Container>
                </> : <></>}

            {emotionState && profileData.subs === "프리미엄" ?
                <>
                    <Emotion_Container>
                        <DeepFace_Title>원하는 감정을 클릭해 주세요.</DeepFace_Title>
                        <DeepFace_SubTitle>해당하는 감정과 관련된 장면의 시간대가 나옵니다.</DeepFace_SubTitle>
                        <Emotion_Select name="emotion" onChange={onChangeEmotion}>
                            <Emotion value="none">감정을 선택해 주세요</Emotion>
                            <Emotion value="hap">기쁨</Emotion>
                            <Emotion value="sad">슬픔</Emotion>
                            <Emotion value="ang">분노</Emotion>
                            <Emotion value="anx">불안</Emotion>
                        </Emotion_Select>
                        {emotionTimeList.length > 0 ? show_timeline_emotion() : <></>}
                    </Emotion_Container>
                </> : <></>}

            <div>현재 재생 시간: {currentTime}초</div>
        </>
    )
}

export default MoviePlayPage;