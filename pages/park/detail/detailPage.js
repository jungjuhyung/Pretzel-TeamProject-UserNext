import Layout from "@/pages/commons/Layout";
import DetailInfo from "./detailInfo";
import Staff from "./staff";
import Cast from "./cast";
import Review from "./review";
import Chart from "./chart";
import ReviewWrite from "./reviewWrite";
import ReportWrite from "./reportWrite";

const DetailPage = () => {
    return (
        <>
            <Layout>
                <ReviewWrite />
                <ReportWrite />
                <DetailInfo />
                <Chart />
                <Staff />
                <Cast />
                <Review />
            </Layout>
        </>
    )
}

export default DetailPage;