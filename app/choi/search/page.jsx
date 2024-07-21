"use client";
import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/react';
import axios from 'axios';
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";

import {
    globalStyles, Background, KeywordBox, KeywordBox_Top, KeywordWrapper, Keyword, Icon,
    Bottom_left, Bottom_right, Recent_title, Recent_Keyword_Box, Recent_Keyword, Recent_Keyword_Item, DeleteIcon,
    RealTime_title, RealTime_Keyword_Box, RealTime_Keyword, SuggestionsBox, SearchText, SearchDetail, SearchPoster,
    SearchNone, RealText, SuggestionsBoxHeader, CloseIcon , KeywordBox_Bottom ,SuggestionsBoxContent , SuggBox, SearchTitle
} from '../../../styles/choi/search/SearchPageCSS';

import { useStores } from "@/stores/StoreContext";
import { ColorOrange } from '@/styles/park/commons/commonsCSS';

const searchIcon = '/images/icons/search.png';
const deleteIcon = '/images/icons/delete.png';

const Search = observer(() => {
    const { movieDetailStore } = useStores();
    const router = useRouter();
    const { SearchStore } = useStores();

    const [keywords, setKeywords] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showList , setShowList] = useState('');
    const [realSearch , setRealSearch] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [result, setResult] = useState([]);
    const [cast, setCast] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 5;

    const handleAddKeyword = (value) => {
        if (value.trim() !== '') {
            setKeywords([...keywords, value]);
            setShowSuggestions(true);
            setPage(1);
        }
    };

    const handleDeleteKeyword = (index) => {
        const newKeywords = keywords.filter((_, i) => i !== index);
        setKeywords(newKeywords);
        setShowSuggestions(false);
    };

    const handleKeywordClick = (movie_idx) => {
        movieDetailStore.setMoiveIdx(movie_idx);
        router.push("/park/detail/detailPage");
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
                setCast(response.data.cast);
                setResult(response.data.movie);
                setShowSuggestions(true);
                setPage(1);
    
                handleAddKeyword(inputValue);
            } else {
                setShowSuggestions(false);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/search/realtime_list");
                setRealSearch(response.data);
            } catch (error) {
                console.error('Error fetching real time list:', error);
            }
        };

        fetchData();

    }, []);

    const handleClearInput = () => {
        setInputValue('');
        setShowSuggestions(false);
    };

    return (
        <>
            <Global styles={globalStyles} />
            <Background>
                <KeywordBox>
                    <KeywordBox_Top>
                        <KeywordWrapper>
                            <Keyword
                                placeholder='영화의 제목, 배우를 검색해보세요.'
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={test}
                            />
                            <Icon src={searchIcon} alt="Search Icon" onClick={handleAddKeyword} />
                        </KeywordWrapper>
                            {inputValue && ( 
                                <DeleteIcon src={deleteIcon} alt="Delete Icon" onClick={handleClearInput} />
                            )}
                    </KeywordBox_Top>
                    {showSuggestions && (
                        <SuggestionsBox>
                        <SuggestionsBoxHeader>
                            <CloseIcon src={deleteIcon} alt="Close Icon" onClick={() => setShowSuggestions(false)} />
                        </SuggestionsBoxHeader>
                        {(result.length > 0 || cast.length > 0) ? (
                            <SuggestionsBoxContent>
                                {result.slice((page - 1) * perPage, page * perPage).map(item => (
                                    <SearchDetail key={item.movie_id}>
                                        <SuggBox onClick={() => handleKeywordClick(item.movie_idx)}>
                                            <SearchPoster src={`https://image.tmdb.org/t/p/w500/${item.poster_url}`} />
                                            <SearchTitle>{item.korea_title}</SearchTitle>
                                        </SuggBox>
                                    </SearchDetail>
                                ))}
                                {cast.slice((page - 1) * perPage, page * perPage).map(item => (
                                    <SearchDetail key={item.cast_idx}>
                                        <SuggBox onClick={() => handleKeywordClick(item.movie_idx)}>
                                            <SearchPoster src={`https://image.tmdb.org/t/p/w500/${item.poster_url}`} />
                                            <SearchTitle>{item.korea_title}</SearchTitle>
                                            <SearchText>{item.cast_name}</SearchText>
                                        </SuggBox>
                                    </SearchDetail>
                                ))}
                            </SuggestionsBoxContent>
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
                                {realSearch.map((item, index) => (
                                    <RealTime_Keyword key={item.movie_idx}>
                                        <RealText onClick={() => handleKeywordClick(item.movie_idx)}><ColorOrange>{index + 1}</ColorOrange> &#160;&#160; {item.korea_title}</RealText>
                                    </RealTime_Keyword>
                                ))}
                            </RealTime_Keyword_Box>
                        </Bottom_right>
                    </KeywordBox_Bottom>
                </KeywordBox>
            </Background>
        </>
    );
});

export default Search;
