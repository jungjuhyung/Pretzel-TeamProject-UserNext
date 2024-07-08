"use client";

import { ColorOrange, HorizenLine, Icon24px } from "@/styles/park/commons/commonsCSS";
import { Inactive, MoreBtn, Profile_Image, Report_Btn, ReviewContent_Container, ReviewWriteBtn, Review_Container, Review_Content, Review_TopContent, StarAvg, StarRating, Subtitle, User_Name, Vertical } from "@/styles/park/detailPage/reviewCSS";

const Review = () => {
    return (
        <>
            <HorizenLine />
            <Subtitle>리뷰 (204)</Subtitle>
            <StarAvg>평균 별점 : <ColorOrange>4.7</ColorOrange> <ReviewWriteBtn>리뷰 작성</ReviewWriteBtn></StarAvg>

            <Review_Container>
                <Profile_Image src="/images/samples/oing.png" />
                <ReviewContent_Container>
                    <Review_TopContent>
                        <User_Name>오잉</User_Name>
                        <StarRating>★★★★<Inactive>★</Inactive></StarRating>
                        <Vertical>|</Vertical>
                        <Report_Btn>신고하기</Report_Btn>
                    </Review_TopContent>
                    <Review_Content>이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ</Review_Content>
                </ReviewContent_Container>
            </Review_Container>

            <Review_Container>
                <Profile_Image src="/images/samples/oing.png" />
                <ReviewContent_Container>
                    <Review_TopContent>
                        <User_Name>오잉</User_Name>
                        <StarRating>★★★★<Inactive>★</Inactive></StarRating>
                        <Vertical>|</Vertical>
                        <Report_Btn>신고하기</Report_Btn>
                    </Review_TopContent>
                    <Review_Content>이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ</Review_Content>
                </ReviewContent_Container>
            </Review_Container>

            <Review_Container>
                <Profile_Image src="/images/samples/oing.png" />
                <ReviewContent_Container>
                    <Review_TopContent>
                        <User_Name>오잉</User_Name>
                        <StarRating>★★★★<Inactive>★</Inactive></StarRating>
                        <Vertical>|</Vertical>
                        <Report_Btn>신고하기</Report_Btn>
                    </Review_TopContent>
                    <Review_Content>이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ</Review_Content>
                </ReviewContent_Container>
            </Review_Container>

            <Review_Container>
                <Profile_Image src="/images/samples/oing.png" />
                <ReviewContent_Container>
                    <Review_TopContent>
                        <User_Name>오잉</User_Name>
                        <StarRating>★★★★<Inactive>★</Inactive></StarRating>
                        <Vertical>|</Vertical>
                        <Report_Btn>신고하기</Report_Btn>
                    </Review_TopContent>
                    <Review_Content>이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ</Review_Content>
                </ReviewContent_Container>
            </Review_Container>

            <Review_Container>
                <Profile_Image src="/images/samples/oing.png" />
                <ReviewContent_Container>
                    <Review_TopContent>
                        <User_Name>오잉</User_Name>
                        <StarRating>★★★★<Inactive>★</Inactive></StarRating>
                        <Vertical>|</Vertical>
                        <Report_Btn>신고하기</Report_Btn>
                    </Review_TopContent>
                    <Review_Content>이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ</Review_Content>
                </ReviewContent_Container>
            </Review_Container>

            <Review_Container>
                <Profile_Image src="/images/samples/oing.png" />
                <ReviewContent_Container>
                    <Review_TopContent>
                        <User_Name>오잉</User_Name>
                        <StarRating>★★★★<Inactive>★</Inactive></StarRating>
                        <Vertical>|</Vertical>
                        <Report_Btn>신고하기</Report_Btn>
                    </Review_TopContent>
                    <Review_Content>이 영화 넘 재밌어여 짱이다~ 짱짜아ㅉㅇ</Review_Content>
                </ReviewContent_Container>
            </Review_Container>

            <MoreBtn><Icon24px src="/images/icons/add_white.png" />더보기</MoreBtn>
        </>
    )
}

export default Review;