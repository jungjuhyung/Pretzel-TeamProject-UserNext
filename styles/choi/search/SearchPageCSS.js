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
    margin-bottom: 10px;
`;

export const RealTime_Keyword_Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const RealTime_Keyword = styled.div`
    width: 100%;
    height: 22px;
    color: #FFFFFF;
    font-size: 20px;
`;

export const SuggestionsBox = styled.div`
    padding-top: 10px;
    position: relative;
    background-color: #1D1D1D;
    border: none;
    max-height: 500px; /* 최대 높이 설정 */
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    border-radius: 5px;
    z-index: 99;
    overflow-y: auto;
    scrollbar-width: none; 
`;
export const SearchDetail = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const SearchPoster = styled.img`
    width: 200px;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
    margin-bottom: 10px;
`;

export const SearchText = styled.div`
    width: 200px;
    color: #FFFFFF;
    font-size: 17px;
    text-align: center;
    margin-bottom: 10px;
`;

export const SearchNone = styled.div`
    width: 1500px;
    min-height: 360px;
    font-size: 30px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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

export const Real_Text = styled.div`
    width: auto;
    height: auto;
    color: #FFFFFF;
`
