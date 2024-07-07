"use client"

import { useContext, useEffect, useRef } from "react";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { Button } from '@mui/material';
import { observer } from "mobx-react-lite";
import { MyPageContext } from "@/stores/StoreContext";

const Checkout = observer(() => {
    const myPageStore = useContext(MyPageContext);

    console.log(myPageStore.price)
    console.log(myPageStore.orderName)

    // 상태값에 저장되고 여기 페이지로 와서 가격/구독권 넣어주기
    const price = myPageStore.price // 가격
    const orderName = myPageStore.orderName // 구독권

    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);
    const agreementWidgetRef = useRef(null);
    const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;

    useEffect(() => {
        (async () => {
            const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS);
            if (paymentWidgetRef.current == null) {
                paymentWidgetRef.current = paymentWidget;
            }
            const paymentMethodsWidget = paymentWidgetRef.current.renderPaymentMethods(
                '#payment-method',
                { value: price },
                { variantKey: 'DEFAULT' }
            );
            agreementWidgetRef.current = paymentWidgetRef.current.renderAgreement('#agreement', {
                variantKey: 'DEFAULT',
            });
            paymentMethodsWidgetRef.current = paymentMethodsWidget;
        })();
    }, []);

    async function tosspay() {
        const paymentWidget = paymentWidgetRef.current;
        try {
            await paymentWidget?.requestPayment({
                orderId: nanoid(),
                orderName: orderName,
                successUrl: window.location.origin + '/toss/success' + window.location.search,
                failUrl: window.location.origin + '/toss/fail' + window.location.search,
            });
        } catch (error) {
            console.log('토스 결제 오류 : ', error)
        }
    }

    return (
        <>
            <div id="payment-method" />
            <div id="agreement" />
            <div style={{ textAlign: "center" }}>
                <Button variant='contained' onClick={tosspay}>결제하기</Button>
            </div>
        </>
    );
})

export default Checkout;
