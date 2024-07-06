import styled from '@emotion/styled';

export const globalStyles = `
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular', sans-serif;
  }
`;

export const Background = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

export const KeywordBox = styled.div`
    width: 80%;
    height: 80vh;
    display: flex;
    margin-top: 60px;
    flex-direction: column;
`;

export const KeywordBox_Top = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid white;
    padding: 14px;
    display: flex;
    align-items: center;
`;

export const KeywordWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Keyword = styled.input`
    width: 100%;
    height: 100%;
    background-color: #0d0d0d;
    border: none;
    color: #FFFFFF;
    padding-right: 40px; /* Make space for the icon */
    outline: none;
    font: 600 30px 'Pretendard-Regular', sans-serif;
    letter-spacing: 1px;
`;

export const Icon = styled.img`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px; 
    cursor: pointer;
`;

export const KeywordBox_Bottom = styled.div`
    width: 100%;
    height: 90%;
    padding-top: 50px;
    display: flex;
`;

export const Bottom_left = styled.div`
    width: 50%;
    height: 100%;
    padding: 0px 47px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Recent_title = styled.div`
    width: 140px;
    height: 36px;
    font-weight: bold;
    color: #FFFFFF;
    font-size: 30px;
    margin-bottom: 10px;
`;

export const Recent_Keyword_Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Recent_Keyword_Item = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const Recent_Keyword = styled.div`
    color: #FFFFFF;
    font-size: 20px;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const DeleteIcon = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

export const Bottom_right = styled.div`
    width: 50%;
    height: 100%;
    padding: 0px 47px;
    border-left: 1px solid #3d3d3d; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const RealTime_title = styled.div`
    width: 230px;
    height: 36px;
    font-weight: bold;
    color: #FFFFFF;
    font-size: 30px;
    margin-bottom: 30px;
`;

export const RealTime_Keyword_Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`;

export const RealTime_Keyword = styled.div`
    width: 100%;
    height: 50px;
    color: #FFFFFF;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


export const SuggestionsBox = styled.div`
    padding-top: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(29, 29, 29, 0.9);
    border: none;
    max-height: 80%;
    width: 80%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: 1000;
    overflow-y: auto;
    scrollbar-width: none;
`;

export const SuggBox = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

// Firefox에서 스크롤바 숨기기 위한 스타일
SuggestionsBox.defaultProps = {
    ...SuggestionsBox.defaultProps,
    css: `
        &::-webkit-scrollbar {
            display: none;
        }
    `,
};

export const SuggestionsBoxHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    position: sticky;
    top: 0;
    background-color: rgba(29, 29, 29, 0.9);
    z-index: 1001; /* 모달 내부 콘텐츠보다 위에 표시되도록 설정 */
    transition: background-color 0.3s ease; /* 배경 색상 전환 효과 추가 */
`;

// 스크롤 시 배경 색상을 투명하게 변경하는 스타일 추가
export const TransparentBackground = styled.div`
    ${SuggestionsBoxHeader}:not(:hover) {
        background-color: rgba(29, 29, 29, 0); /* 스크롤 시 배경 투명하게 설정 */
    }
`;
export const CloseIcon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 10px; /* 오른쪽 여백 추가 */
    align-self: center; /* 세로 중앙 정렬 */
`;

export const SuggestionsBoxContent = styled.div`
    padding: 10px;
    width: auto;
    height: auto;
    display: grid;
    grid-template-rows: repeat(2, 1fr); 
    grid-template-columns: repeat(6, 1fr); 
    gap: 10px;
`;

export const SearchDetail = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const SearchPoster = styled.img`
    width: 200px;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
    margin-right: 10px;
    margin-bottom: 2px;
`;

export const SearchTitle = styled.div`
    color: #FFFFFF;
    font-size: 17px;
    margin-bottom: 3px;
    
`;
export const SearchText = styled.div`
    color: #FFFFFF;
    font-size: 17px;
    margin-bottom: 3px;
    color: silver;
`;

export const SearchNone = styled.div`
    font-size: 30px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
`;
export const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
`;

export const PaginationButton = styled.button`
    background-color: #0d0d0d;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #333333;
    }
`;

export const RealText = styled.div`
    width: auto;
    height: auto;
    color: ${props => props.highlighted ? '#FFFF00' : '#FFFFFF'}; /* 조건에 따라 색상 변경 */
    font-weight: 300;
`
