// components/Layout.jsimport React from 'react';

import React from 'react';

import '@/styles/commons/reset.css'
import '@/styles/commons/font.css'
import '../../styles/commons/commons.css'

import Header from "./header"; 
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;