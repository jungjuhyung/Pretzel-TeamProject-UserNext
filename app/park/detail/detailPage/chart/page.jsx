'use client'
import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { useStores } from "@/stores/StoreContext";
import { HorizenLine } from "@/styles/park/commons/commonsCSS";
import { Chart_Container, Subtitle } from "@/styles/park/detailPage/chartCSS";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import axios from "axios";
import { useEffect, useState } from "react";

const Chart = () => {
    const { movieDetailStore } = useStores();

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 차트 데이터 유무
    const [dataState, setDataState] = useState(true);

    // 차트 데이터
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        chart_data();
    }, []);

    const API_URL = "/movie/"

    // 차트 정보 가져오기
    async function chart_data() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "movie_detail", {
                params: {
                    movie_idx: movieDetailStore.movie_idx
                }
            });
            // 차트 데이터가 없으면
            if (response.data.ai_emotion_syc === null) {
                setDataState(false)
            } else {
                try {
                    const response2 = await axios.get(
                        `/storage/pretzel-emotionCountAI/${response.data.storage_name}_emotion_count.json`);
                    if (response2.data) {
                        setChartData(response2.data)
                    }
                } catch (error) {
                    console.error('차트 실패 : ', error);
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

    return (
        <>
            {dataState ?
                <>
                    <HorizenLine />
                    <Subtitle>감정의 빈도수</Subtitle>
                    <Chart_Container>
                        <PieChart
                            colors={['#fdde63', '#7bbed8', '#ed5457', '#a368e3']}
                            series={[
                                {
                                    arcLabel: (item) => `${item.label}`,
                                    arcLabelMinAngle: 45,
                                    data: [
                                        { id: 0, value: chartData.hap, label: '기쁨', color: '#fdde63' },
                                        { id: 1, value: chartData.sad, label: '슬픔', color: '#7bbed8' },
                                        { id: 2, value: chartData.ang, label: '분노', color: '#ed5457' },
                                        { id: 3, value: chartData.anx, label: '공포', color: '#a368e3' },
                                    ],
                                },
                            ]}
                            sx={{
                                [`& .${pieArcLabelClasses.root}`]: {
                                    fill: 'white',
                                    fontSize: 16,
                                    fontFamily: 'Pretendard-Regular',
                                },
                            }}
                            slotProps={{
                                legend: {
                                    labelStyle: {
                                        fontSize: 16,
                                        fill: 'white',
                                        fontFamily: 'Pretendard-Regular',
                                    },
                                }
                            }}
                            width={500}
                            height={300}
                        />
                    </Chart_Container>
                </>
                : <></>}
        </>
    )
}

export default Chart;