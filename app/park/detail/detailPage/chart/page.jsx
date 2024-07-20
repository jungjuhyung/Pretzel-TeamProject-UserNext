import LoadingSpinner from "@/app/commons/loadingSpinner/page";
import { HorizenLine } from "@/styles/park/commons/commonsCSS";
import { Chart_Container, Subtitle } from "@/styles/park/detailPage/chartCSS";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import axios from "axios";
import { useEffect, useState } from "react";

const Chart = () => {
    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        chart_data();
    }, []);

    // 차트 정보 가져오기
    async function chart_data() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(
                "/storage/pretzel-emotionCountAI/탑건_ 매버릭_emotion_count.json");
            console.log(response.data)
        } catch (error) {
            console.error('차트 실패 : ', error);
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
            <HorizenLine />
            <Subtitle>감정의 빈도수</Subtitle>
            <Chart_Container>
                <PieChart
                    colors={['#FFE674', '#84D5F5', '#F56C6E', '#AF6EF5']}
                    series={[
                        {
                            arcLabel: (item) => `${item.label}`,
                            arcLabelMinAngle: 45,
                            data: [
                                { id: 0, value: 1, label: '기쁨', color: '#FFE674' },
                                { id: 1, value: 2, label: '슬픔', color: '#84D5F5' },
                                { id: 2, value: 3, label: '분노', color: '#F56C6E' },
                                { id: 3, value: 3, label: '공포', color: '#AF6EF5' },
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
    )
}

export default Chart;