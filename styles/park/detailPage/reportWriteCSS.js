import styled from "@emotion/styled";

export const Background_layout = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
    position: fixed;
    display: ${({ reportView }) => (reportView ? 'block' : 'none')};
`;

export const ReportBox = styled.div`
    background-color: #252525;
    width: 300px;
    height: 400px;
    position: fixed;
    border-radius: 5px;
    left: 50%;
    top: 25%;
    z-index: 99;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ReportTitle = styled.p`
    font: 600 25px "Pretendard-Regular";
    color: #ffffff;
    margin-bottom: 10px;
`;

export const ReportSubTitle = styled.p`
    font-family: "Pretendard-Regular";
    color: #ffffff;
    margin-bottom: 20px;
`;

export const RadioBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

export const Report_Radio = styled.input`
    width: 20px;
    height: 15px;
`

export const Report_Type = styled.label`
    font-family: "Pretendard-Regular";
    color: #868686;
    margin-bottom: 15px;
`

export const ConfirmBtn = styled.button`
    margin-top: 20px;
    font: 600 18px "Pretendard-Regular";
    width: 130px;
    height: 50px;
    border-radius: 50px;
    color: #ffffff;
    background-color: #f29a2e;
    border: none;

    &:hover{
        background-color: #ad6e21;
        color: #868686;
    }
`