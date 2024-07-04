"use client"
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function Success() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const searchParams = useSearchParams();
    const paymentKey = searchParams.get('paymentKey');
    const orderId = searchParams.get('orderId');
    const amount = searchParams.get('amount');

    // 상태값에서 관리해야함
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrbzIiLCJpYXQiOjE3MTk0NTcxODMsImV4cCI6MTcxOTQ2MDc4M30.rhRDrpa9idYilOxH3CsY1KyUb98J4WfYBhVzU8aCvyg"

    const [toss, setToss] = useState({
        approvedAt : '',
        orderName : '',
    })

    const toss_confirm = async () => {
        try {
            const response = await axios.post(
                '/toss/confirm',
                {
                    paymentKey,
                    orderId,
                    amount,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("응답받은 데이터 : " , response.data);
            setToss({
                approvedAt : response.data.approvedAt,
                orderName : response.data.orderName,
            })

            if (response.status === 200) {
                setIsConfirmed(true);
            } else {
                console.error('결제 실패 : ', response.statusText);
            }
        } catch (error) {
            console.error('에러 : ', error);
        }
    };

    return (
        <div>
            {isConfirmed ? (
                <div>
                    <h2>결제 완료</h2>
                    <p>구독권 : {toss.orderName}</p>
                    <p>결제금액 : {amount}</p>
                    <p>결제날짜시간 : {toss.approvedAt}</p>
                </div>
                ) : (
                <div>
                    <button onClick={toss_confirm}>결제 승인</button>
                </div>
                )}
        </div>
    );
}