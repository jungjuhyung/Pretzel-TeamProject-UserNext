"use client"
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import '@/styles/park/payment.css'
import { ColorOrange } from '@/styles/park/commons/commonsCSS';

export default function Success() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const searchParams = useSearchParams();
    const paymentKey = searchParams.get('paymentKey');
    const orderId = searchParams.get('orderId');
    const amount = searchParams.get('amount');
    const router = useRouter();

    // 상태값에서 관리해야함
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrbzIiLCJpYXQiOjE3MTk0NTcxODMsImV4cCI6MTcxOTQ2MDc4M30.rhRDrpa9idYilOxH3CsY1KyUb98J4WfYBhVzU8aCvyg"

    const [toss, setToss] = useState({
        approvedAt: '',
        orderName: '',
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

            console.log("응답받은 데이터 : ", response.data);
            setToss({
                approvedAt: response.data.approvedAt,
                orderName: response.data.orderName,
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

    const onClickConfirm = () => {
        router.push("/park/myPage")
    }

    return (
        <div>
            {isConfirmed ? (
                <div className='sucess_box'>
                    <h1 className='success_title'>결제가 완료되었습니다.</h1>
                    <div className='sucess_box_inner'>
                        <p className='sucess_content'>구독권 : <ColorOrange>{toss.orderName}</ColorOrange></p>
                        <p className='sucess_content'>결제 금액 : {amount}원</p>
                        <p>결제 시각 : {toss.approvedAt}</p>
                    </div>
                    <button className='confirm_button' onClick={onClickConfirm}>확인</button>
                </div>
            ) : (
                <div className='authorization_box'>
                    <h1 className='authorization_title'>아래의 결제 승인 버튼을 눌러주세요.</h1>
                    <button className='authorization_button' onClick={toss_confirm}>결제 승인</button>
                </div>
            )}
        </div>
    );
}