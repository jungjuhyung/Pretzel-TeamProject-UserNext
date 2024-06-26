import styled from "@emotion/styled";

export const Subscription_Title = styled.h1`
    font-family: "Pretendard-Regular";
    font-size: 25px;
    font-weight: 800;
    color: #FFFFFF;
    text-align: center;
    margin: 30px 0;
`

export const Subscription_Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    `

export const Checkbox_Container = styled.div`
    width: 560px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`

export const Plan_Container = styled.div`
    font-family: "Pretendard-Regular";
    border: 1px solid #3d3d3d;
    border-radius: 7px;
    width: 220px;
    height: 300px;
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PlanContent_Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 230px;
`

export const Check_Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-bottom: 15px;
`

export const Plan_Name = styled.div`
    box-sizing: border-box;
    padding-top: 8px;
    font-size: 17px;
    width: 100%;
    text-align: center;
    background-color: #3d3d3d;
    border-radius: 3px 3px 0 0 ;
    height: 70px;
    color: #868686;
    line-height: 25px;
`

export const Plan_Content = styled.div`
    color: #868686;
    font-size: 17px;
    margin: 5px 0 10px 0;
`

export const Subscription_Btn = styled.button`
    display: block;
    font-family: "Pretendard-Regular";
    font-size: 20px;
    width: 150px;
    height: 50px;
    border-radius: 50px;
    margin: 50px auto 0 auto;
    background-color: #f29a2e;
    color: #ffffff;
    border: none;

    &:hover {
        background-color: #ad6e21;
    }
`

export const AddIcon = styled.img`
    width: 30px;
    height: 30px;
    margin: 3px 0;
`

export const Plan_Price = styled.span`
    font-size: 20px;
    font-weight: 600;
`