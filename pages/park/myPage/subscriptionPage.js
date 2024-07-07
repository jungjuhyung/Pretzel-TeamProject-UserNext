"use client";

// 공통 css 적용
import '../../../styles/commons/reset.css'
import '../../../styles/commons/font.css'
import '../../../styles/commons/commons.css'

import { Icon30px } from "@/styles/park/commons/commonsCSS";
import { Check_Icon, Checkbox_Container, Container, Icon_Container, PlanContent_Container, Plan_Container, Plan_Content, Plan_Name, Plan_Price, Subscription_Btn, Subscription_Container, Subscription_Title } from "@/styles/park/myPage/subscriptionPageCSS";
import Footer from '@/pages/commons/Footer';
import { useState } from 'react';

const SubscriptionPage = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
    };

    const isSelected = (plan) => selectedPlan === plan;

    const onClickSub = () => {
        
    }

    return (
        <>
            <Container>
                <Subscription_Title>구독권을 선택해 주세요</Subscription_Title>
                <Checkbox_Container>
                    <Check_Icon
                        src={isSelected('basic') ? "/images/icons/check_checked.png" : "/images/icons/check_basic.png"}
                        onClick={() => handlePlanSelection('basic')} />
                    <Check_Icon
                        src={isSelected('premium') ? "/images/icons/check_checked.png" : "/images/icons/check_basic.png"}
                        onClick={() => handlePlanSelection('premium')} />
                </Checkbox_Container>
                <Subscription_Container>

                    <Plan_Container selected={selectedPlan === 'basic'}>
                        <Plan_Name selected={selectedPlan === 'basic'}>베이직<br /><Plan_Price>3,000원</Plan_Price></Plan_Name>
                        <PlanContent_Container>
                            <Icon30px
                                src={isSelected('basic') ? "/images/icons/movie_orange.png" : "/images/icons/movie.png"} />
                            <Plan_Content >콘텐츠 이용 가능</Plan_Content>
                        </PlanContent_Container>
                    </Plan_Container>

                    <Plan_Container selected={selectedPlan === 'premium'}>
                        <Plan_Name selected={selectedPlan === 'premium'}>프리미엄<br /><Plan_Price>6,000원</Plan_Price></Plan_Name>
                        <PlanContent_Container>
                            <Icon_Container>
                                <Icon30px
                                    src={isSelected('premium') ? "/images/icons/movie_orange.png" : "/images/icons/movie.png"} />
                                <Plan_Content>콘텐츠 이용 가능</Plan_Content>
                            </Icon_Container>
                            <Icon30px
                                src={isSelected('premium') ? "/images/icons/robot_orange.png" : "/images/icons/robot.png"} />
                            <Plan_Content>AI 기능 이용 가능</Plan_Content>
                        </PlanContent_Container>
                    </Plan_Container>

                </Subscription_Container>
                <Subscription_Btn onClick={onClickSub}>구독 시작하기</Subscription_Btn>
            </Container>
            <Footer />
        </>
    )
}

export default SubscriptionPage;