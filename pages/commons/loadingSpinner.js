"use client";

import { Loading } from '@/styles/park/commons/commonsCSS';
import '../../styles/commons/commons.css';

const LoadingSpinner = () => {
    return (
        <Loading>
            <span className="loader"></span>
        </Loading>
    );
}

export default LoadingSpinner;
