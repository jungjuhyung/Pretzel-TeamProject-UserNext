"use client";

import { HorizenLine } from "@/styles/park/commons/commonsCSS";
import { All_Container, PersonInfo_Container, Person_Container, Person_Name, Person_Role, Proifle_Img, Subtitle } from "@/styles/park/detailPage/staffAndCastCSS";

const Cast = () => {
    return (
        <>
            <HorizenLine />
            <Subtitle>출연진</Subtitle>
            <All_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나배우</Person_Name>
                        <Person_Role>주연</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나배우</Person_Name>
                        <Person_Role>주연</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나배우</Person_Name>
                        <Person_Role>조연</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나배우</Person_Name>
                        <Person_Role>조연</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나배우</Person_Name>
                        <Person_Role>조연</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나배우</Person_Name>
                        <Person_Role>조연</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
            </All_Container>
        </>
    )
}

export default Cast;