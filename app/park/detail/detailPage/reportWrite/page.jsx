import { useStores } from "@/stores/StoreContext";
import { Background_layout, ConfirmBtn, RadioBox, ReportBox, ReportSubTitle, ReportTitle, Report_Radio, Report_Type } from "@/styles/park/detailPage/reportWriteCSS";
import axios from "axios";
import { useState } from "react";

const ReportWrite = ({ setReport, reviewIdx }) => {
    const { loginStore } = useStores();

    // 신고 유형
    const [reportType, setReportType] = useState("");

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            setReport(false);
        }
    };

    // 신고 유형 onChange
    const handleRadioChange = (e) => {
        setReportType(e.target.value);
    };

    const API_URL = "/moviedetail/"

    // 리뷰 추가하기
    async function report_add() {
        try {
            const response = await axios.post(API_URL + "report/add",
                {
                    profile_idx: loginStore.profile_idx,
                    review_idx: reviewIdx,
                    type: reportType
                });
            if (response.data === 1) {
                alert("신고가 완료되었습니다.")
                setReport(false);
            } else {
                alert("신고에 실패했습니다.\n다시 시도해 주세요.")
            }
        } catch (error) {
            console.error('신고 작성 실패 : ', error);
        }
    }

    return (
        <>
            <Background_layout onClick={handleBackgroundClick}>
                <ReportBox>
                    <ReportTitle>신고하기</ReportTitle>
                    <ReportSubTitle>신고 사유를 선택해 주세요.</ReportSubTitle>
                    <RadioBox>
                        <Report_Type><Report_Radio name="report_type" type="radio" value="욕설"
                            checked={reportType === '욕설'} onChange={handleRadioChange} /> 심한 욕설</Report_Type>
                        <Report_Type><Report_Radio name="report_type" type="radio" value="스팸"
                            checked={reportType === '스팸'} onChange={handleRadioChange} /> 스팸</Report_Type>
                        <Report_Type><Report_Radio name="report_type" type="radio" value="스포일러"
                            checked={reportType === '스포일러'} onChange={handleRadioChange} /> 과도한 스포일러</Report_Type>
                        <Report_Type><Report_Radio name="report_type" type="radio" value="갈등 조장"
                            checked={reportType === '갈등 조장'} onChange={handleRadioChange} /> 혐오발언 및 갈등 조장</Report_Type>
                    </RadioBox>
                    <ConfirmBtn onClick={report_add}>확인</ConfirmBtn>
                </ReportBox>
            </Background_layout>
        </>
    )
}

export default ReportWrite;