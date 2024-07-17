"use client";

// 공통 css 적용
import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '@/styles/commons/commons.css'

import { Icon30px } from "@/styles/park/commons/commonsCSS";
import { Check_Icon, Checkbox_Container, Container, Icon_Container, PlanContent_Container, Plan_Container, Plan_Content, Plan_Name, Plan_Price, Subscription_Btn, Subscription_Container, Subscription_Title } from "@/styles/park/myPage/subscriptionPageCSS";
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { useStores } from '@/stores/StoreContext';

const SubscriptionPage = observer(() => {
    const router = useRouter();
    const { paymentStore } = useStores();

    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
        paymentStore.setOrderName(plan);
        if (plan === '베이직') {
            paymentStore.setPrice("3000");
        } else if (plan === '프리미엄') {
            paymentStore.setPrice("6000");
        }
    };

    const isSelected = (plan) => {
        return selectedPlan === plan;
    };

    const onClickSub = () => {
        router.push("/toss/checkout");
    };

    return (
        <>
            <Container>
                <Subscription_Title>구독권을 선택해 주세요</Subscription_Title>
                <Checkbox_Container>
                    <Check_Icon
                        src={isSelected('베이직') ? "/images/icons/check_checked.png" : "/images/icons/check_basic.png"}
                        onClick={() => handlePlanSelection('베이직')} />
                    <Check_Icon
                        src={isSelected('프리미엄') ? "/images/icons/check_checked.png" : "/images/icons/check_basic.png"}
                        onClick={() => handlePlanSelection('프리미엄')} />
                </Checkbox_Container>
                <Subscription_Container>
                    <Plan_Container selected={selectedPlan === '베이직'}>
                        <Plan_Name selected={selectedPlan === '베이직'}>베이직<br /><Plan_Price>3,000원</Plan_Price></Plan_Name>
                        <PlanContent_Container>
                            <Icon30px
                                src={isSelected('베이직') ? "/images/icons/movie_orange.png" : "/images/icons/movie.png"} />
                            <Plan_Content>콘텐츠 이용 가능</Plan_Content>
                        </PlanContent_Container>
                    </Plan_Container>

                    <Plan_Container selected={selectedPlan === '프리미엄'}>
                        <Plan_Name selected={selectedPlan === '프리미엄'}>프리미엄<br /><Plan_Price>6,000원</Plan_Price></Plan_Name>
                        <PlanContent_Container>
                            <Icon_Container>
                                <Icon30px
                                    src={isSelected('프리미엄') ? "/images/icons/movie_orange.png" : "/images/icons/movie.png"} />
                                <Plan_Content>콘텐츠 이용 가능</Plan_Content>
                            </Icon_Container>
                            <Icon30px
                                src={isSelected('프리미엄') ? "/images/icons/robot_orange.png" : "/images/icons/robot.png"} />
                            <Plan_Content>AI 기능 이용 가능</Plan_Content>
                        </PlanContent_Container>
                    </Plan_Container>
                </Subscription_Container>
                <Subscription_Btn onClick={onClickSub}>구독 시작하기</Subscription_Btn>
            </Container>
        </>
    );
});

export default SubscriptionPage;