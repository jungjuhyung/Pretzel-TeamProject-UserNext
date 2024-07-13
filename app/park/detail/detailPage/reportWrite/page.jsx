import { Background_layout, ConfirmBtn, RadioBox, ReportBox, ReportSubTitle, ReportTitle, Report_Radio, Report_Type } from "@/styles/park/detailPage/reportWriteCSS";

const ReportWrite = ({ reportView }) => {
    return (
        <>
            <Background_layout reportView={reportView}>
                <ReportBox>
                    <ReportTitle>신고하기</ReportTitle>
                    <ReportSubTitle>신고 사유를 선택해 주세요.</ReportSubTitle>
                    <RadioBox>
                        <Report_Type><Report_Radio name="d" type="radio" value="욕설" /> 심한 욕설</Report_Type>
                        <Report_Type><Report_Radio name="d" type="radio" value="스팸" /> 스팸</Report_Type>
                        <Report_Type><Report_Radio name="d" type="radio" value="스포일러" /> 과도한 스포일러</Report_Type>
                        <Report_Type><Report_Radio name="d" type="radio" value="갈등 조장" /> 혐오발언 및 갈등 조장</Report_Type>
                    </RadioBox>
                    <ConfirmBtn>확인</ConfirmBtn>
                </ReportBox>
            </Background_layout>
        </>
    )
}

export default ReportWrite;