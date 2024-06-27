"use client";

import { Icon30px } from "@/styles/park/commons/commonsCSS";
import { AddIcon, Check_Icon, Checkbox_Container, PlanContent_Container, Plan_Container, Plan_Content, Plan_Name, Plan_Price, Subscription_Btn, Subscription_Container, Subscription_Title } from "@/styles/park/myPage/subscriptionPageCSS";

const SubscriptionPage = () => {
    return (
        <>
            <Subscription_Title>구독권을 선택해 주세요</Subscription_Title>
            <Checkbox_Container>
                <Check_Icon src="/images/icons/check_basic.png" />
                <Check_Icon src="/images/icons/check_basic.png" />
            </Checkbox_Container>
            <Subscription_Container>
                <Plan_Container>
                    <Plan_Name>베이직<br /><Plan_Price>3,000원</Plan_Price></Plan_Name>
                    <PlanContent_Container>
                        <Icon30px src="/images/icons/movie.png" />
                        <Plan_Content>콘텐츠 이용 가능</Plan_Content>
                    </PlanContent_Container>
                </Plan_Container>
                <Plan_Container>
                    <Plan_Name>프리미엄<br /><Plan_Price>6,000원</Plan_Price></Plan_Name>
                    <PlanContent_Container>
                        <Icon30px src="/images/icons/movie.png" />
                        <Plan_Content>콘텐츠 이용 가능</Plan_Content>
                        <AddIcon src="/images/icons/add.png" />
                        <Icon30px src="/images/icons/robot.png" />
                        <Plan_Content>AI 기능 이용 가능</Plan_Content>
                    </PlanContent_Container>
                </Plan_Container>
            </Subscription_Container>
            <Subscription_Btn>구독 시작하기</Subscription_Btn>
        </>
    )
}

export default SubscriptionPage;