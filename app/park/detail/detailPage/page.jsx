"use client"

import Cast from "./cast/page";
import Chart from "./chart/page";
import DetailInfo from "./detailInfo/page";
import ReportWrite from "./reportWrite/page";
import Review from "./review/page";
import ReviewWrite from "./reviewWrite/page";
import Staff from "./staff/page";

const DetailPage = () => {
    return (
        <>
            <DetailInfo />
            <Chart />
            <Staff />
            <Cast />
            <Review />
        </>
    )
}

export default DetailPage;