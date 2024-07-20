"use client";
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores/StoreContext';
import Trailer from './trailer/page';
import WeekTop from './weekTop/page';
import NewContent from './newContent/page';
import ThemaList from './themaList/page';
import UserContent from './userContent/page';
import LoadingSpinner from '../commons/loadingSpinner/page';

const Main = observer(() => {
    const { loginStore } = useStores();

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <LoadingSpinner />;
    }

    return (
        <>
            {/* 트레일러 */}
            <Trailer />

            {/* 이 주의 인기 순위 TOP5 */}
            <WeekTop />

            {/* 유저 추천 리스트 */}
            {loginStore.isLogin && <UserContent />}

            {/* 새로 올라온 콘텐츠 */}
            <NewContent />

            {/* 공포 , 로맨스 , 범죄/스릴러 , 액션 , 애니메이션의 테마 리스트 */}
            <ThemaList />
        </>
    );
});

export default Main;