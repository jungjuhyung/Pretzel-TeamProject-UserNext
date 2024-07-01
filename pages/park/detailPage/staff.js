"use client";

import { HorizenLine } from "@/styles/park/commons/commonsCSS";
import { All_Container, PersonInfo_Container, Person_Container, Person_Name, Person_Role, Proifle_Img, Subtitle } from "@/styles/park/detailPage/staffAndCastCSS";

const Staff = () => {
    return (
        <>
            <HorizenLine />
            <Subtitle>스태프</Subtitle>
            <All_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나감독</Person_Name>
                        <Person_Role>감독</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나감독</Person_Name>
                        <Person_Role>감독</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나감독</Person_Name>
                        <Person_Role>감독</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나감독</Person_Name>
                        <Person_Role>감독</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나감독</Person_Name>
                        <Person_Role>감독</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
                <Person_Container>
                    <Proifle_Img src="/images/samples/oing.png" />
                    <PersonInfo_Container>
                        <Person_Name>나감독</Person_Name>
                        <Person_Role>감독</Person_Role>
                    </PersonInfo_Container>
                </Person_Container>
            </All_Container>
        </>
    )
}

export default Staff;