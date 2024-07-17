"use client"

import { useEffect, useRef } from "react";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { Button } from '@mui/material';
import { observer } from "mobx-react-lite";
import { useStores } from "@/stores/StoreContext";

const Checkout = observer(() => {
    const { paymentStore } = useStores();

    // 상태값에 저장되고 여기 페이지로 와서 가격/구독권 넣어주기
    const price = paymentStore.price // 가격
    const orderName = paymentStore.orderName // 구독권

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
            <div style={{ 
                height: "calc(100vh - 150px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <div id="payment-method" style={{ width: "800px" }} />
                <div id="agreement" style={{ width: "800px" }} />
                <div style={{ textAlign: "center", backgroundColor: "white", width: "800px", paddingBottom: "30px" }}>
                    <Button variant='contained' onClick={tosspay} style={{ width: "750px", height: "50px", fontFamily: "Pretendard-Regular" }}>결제하기</Button>
                </div>
            </div>
        </>
    );
})

export default Checkout;
