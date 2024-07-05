"use client";


import { use, useContext, useEffect } from "react";
import React, { useState } from 'react';
import { Global } from '@emotion/react';
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import Layout from '@/pages/commons/Layout';
import axios from 'axios';


import {
    globalStyles , Background , KeywordBox , KeywordBox_Top , KeywordBox_Bottom,
    KeywordWrapper, Keyword, Icon, Bottom_left , Bottom_right ,
    Recent_title , Recent_Keyword_Box , Recent_Keyword, Recent_Keyword_Item, DeleteIcon,
    RealTime_title , RealTime_Keyword_Box, RealTime_Keyword , SuggestionsBox , SearchText
    ,SearchDetail , SearchPoster ,SearchActor , SearchNone , Real_Text
} from '../../../styles/choi/search/SearchPageCSS';
import { SearchContext } from "@/stores/StoreContext";


// 아이콘 이미지 파일 경로 (절대 경로로 변경)
const searchIcon = '/images/icons/search.png';
const deleteIcon = '/images/icons/delete.png'; // 삭제 아이콘 이미지 파일 경로

const SearchPage = observer(() => {

    const router = useRouter();
    const SearchStore = useContext(SearchContext)

    const [keywords, setKeywords] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showList , setShowList] = useState('');
    const [realSearch , setRealSearch] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [result, setResult] = useState([]);
    const [cast, setCast] = useState([]);
    const [page, setPage] = useState(1); // 현재 페이지
    const perPage = 5; // 페이지당 결과 수

    const handleAddKeyword = () => {
        if (inputValue.trim() !== '') {
            setKeywords([...keywords, inputValue]);
            setInputValue('');
            setShowSuggestions(true); // 검색어 추가 시 모달 창 표시
            setPage(1); // 검색어 추가 시 페이지 초기화
        }
    };

    const handleDeleteKeyword = (index) => {
        const newKeywords = keywords.filter((_, i) => i !== index);
        setKeywords(newKeywords);
        setShowSuggestions(false); // 검색어 삭제 시 모달 창 숨기기
    };

    const test = async (e) => {
        setInputValue(e.target.value);
        if (e.key === 'Enter') {
            if (inputValue.trim() !== '') {
                const response = await axios.get("/search/keyword_list", {
                    params: {
                        "keyword": inputValue
                    }
                });
                // console.log(response.data);
                setCast(response.data.cast);
                setResult(response.data.movie);
                setShowSuggestions(true); // 검색 시 모달 창 표시
                setPage(1); // 검색 시 페이지 초기화
            } else {
                setShowSuggestions(false); // 검색어가 비어 있을 때 모달 창 숨기기
            }
        }
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/search/realtime_list");
                setRealSearch(response.data); // 데이터를 받아와서 realSearch 상태 업데이트
            } catch (error) {
                console.error('Error fetching real time list:', error);
            }
        };
    
        fetchData(); // 컴포넌트가 마운트될 때 데이터 가져오기
    
    }, []);

    const handleClearInput = () => {
        setInputValue('');
        setShowSuggestions(false); // 입력 값 지우면 모달 창 숨기기
    };


    return (
        <>
            <Layout>
                <Global styles={globalStyles} />
                <Background>
                    <KeywordBox>
                        <KeywordBox_Top>
                            <KeywordWrapper>
                                <Keyword
                                    placeholder='영화의 제목, 배우를 검색해보세요.'
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={test} // Enter 키 이벤트 처리
                                />
                                <Icon src={searchIcon} alt="Search Icon" onClick={handleAddKeyword} />
                            </KeywordWrapper>
                                {inputValue && ( 
                                    <DeleteIcon src={deleteIcon} alt="Delete Icon" onClick={handleClearInput} />
                                )}
                        </KeywordBox_Top>
                        {/* 모달 창 */}
                        {showSuggestions && (
                            <SuggestionsBox>
                                {(result.length > 0 || cast.length > 0) ? (
                                    <>
                                        {result.slice((page - 1) * perPage, page * perPage).map(item => (
                                            <SearchDetail key={item.movie_id}>
                                                <div>
                                                    <SearchPoster src={`https://image.tmdb.org/t/p/w500/${item.poster_url}`} />
                                                    <SearchText>{item.korea_title}</SearchText>
                                                </div>
                                            </SearchDetail>
                                        ))}
                                        {cast.slice((page - 1) * perPage, page * perPage).map(item => (
                                            <SearchDetail key={item.cast_idx}>
                                                <div>
                                                    <SearchPoster src={`https://image.tmdb.org/t/p/w500/${item.poster_url}`} />
                                                    <SearchText>{item.korea_title}</SearchText>
                                                    <SearchText>{item.cast_name}</SearchText>
                                                </div>
                                            </SearchDetail>
                                        ))}
                                    </>
                                ) : (
                                    <SearchNone>일치하는 결과가 없습니다.</SearchNone>
                                )}
                            </SuggestionsBox>
                        )}
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
                                {realSearch.map(item => (
                                    <RealTime_Keyword key={item.movie_idx}>
                                        <div>
                                            <Real_Text>{item.korea_title}</Real_Text>
                                            {/* 기타 필요한 데이터 표시 */}
                                        </div>
                                    </RealTime_Keyword>
                                ))}
                                </RealTime_Keyword_Box>
                            </Bottom_right>
                        </KeywordBox_Bottom>
                    </KeywordBox>
                </Background>
            </Layout>
        </>
    );
});

export default SearchPage;
