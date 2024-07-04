"use client";

import React, { useState } from 'react';
import { Global } from '@emotion/react';

import {
    globalStyles , Background , KeywordBox , KeywordBox_Top , KeywordBox_Bottom,
    KeywordWrapper, Keyword, Icon, Bottom_left , Bottom_right ,
    Recent_title , Recent_Keyword_Box , Recent_Keyword, Recent_Keyword_Item, DeleteIcon,
    RealTime_title , RealTime_Keyword_Box,
    RealTime_Keyword
} from '../../../styles/choi/search/SearchPageCSS';
import Layout from '@/pages/commons/Layout';
import axios from 'axios';

// 아이콘 이미지 파일 경로 (절대 경로로 변경)
const searchIcon = '/images/icons/search.png';
const deleteIcon = '/images/icons/delete.png'; // 삭제 아이콘 이미지 파일 경로

const SearchPage = () => {
    const [keywords, setKeywords] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddKeyword = () => {
        if (inputValue.trim() !== '') {
            setKeywords([...keywords, inputValue]);
            setInputValue('');
        }
    };

    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         handleAddKeyword();
    //     }
    // };

    const handleDeleteKeyword = (index) => {
        const newKeywords = keywords.filter((_, i) => i !== index);
        setKeywords(newKeywords);
    };

    // axios 사용법
    async function test(e){
        setInputValue(e.target.value)
        if (e.key === 'Enter') {
        }else{

            // 주소
            const response = await axios.get("/search/keyword_list",{
                // 파라미터
                params:{
                    // key와 value
                    "keyword":e.target.value
                }
            })
            console.log(response.data);
        }
    }

    return(
        <>
        <Layout>
            <Global styles={globalStyles} />
            <Background>
                <KeywordBox>
                    <KeywordBox_Top>
                        <KeywordWrapper>
                            <Keyword 
                                placeholder='제목 , 배우 , 장르를 입력해주세요.'
                                value={inputValue}
                                onChange={test}
                            />
                            <Icon src={searchIcon} alt="Search Icon" onClick={handleAddKeyword} />
                        </KeywordWrapper>
                    </KeywordBox_Top>
                    <KeywordBox_Bottom>
                        <Bottom_left>
                            <Recent_title>최근 검색어</Recent_title>
                            <Recent_Keyword_Box>
                                {keywords.map((keyword, index) => (
                                    <Recent_Keyword_Item key={index}>
                                        <Recent_Keyword>{keyword}</Recent_Keyword>
                                        <DeleteIcon src={deleteIcon} alt="Delete Icon" onClick={() => handleDeleteKeyword(index)} />
                                    </Recent_Keyword_Item>
                                ))}
                            </Recent_Keyword_Box>
                        </Bottom_left>
                        <Bottom_right>
                            <RealTime_title>실시간 인기 검색어</RealTime_title> 
                            <RealTime_Keyword_Box>
                                <RealTime_Keyword>웡카</RealTime_Keyword>
                            </RealTime_Keyword_Box>
                        </Bottom_right>
                    </KeywordBox_Bottom>
                </KeywordBox>
            </Background>
            </Layout>
        </>
    )
}

export default SearchPage;