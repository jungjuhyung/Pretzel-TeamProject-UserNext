// FAQ 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/navigation';

import {
  globalStyles , Background , Wrapper , Title , Title_Input,
  Text_Input, Text_length_Box , Text_length, Button_Box , Ok_Button,
  Cencle_Button , Option

} from '../../../../styles/choi/servicecenter/ContactPageCSS';


const ContactPage = () =>{

  const router = useRouter()

    const goReview = () =>{
      router.push("/choi/servicecenter/faqPage")
    }

    const goFAQ = () => {
      alert("문의글 등록이 완료되었습니다.")
      router.push("/choi/servicecenter/faqPage")
    }

  function myText() {
    let textInput = document.getElementById('myText');
    let textCount = textInput.value;
    let totalCount = textCount.length;
    document.getElementById('target').innerText = totalCount;

    if(totalCount > 300){
        alert("300자 이상 작성이 불가능합니다.");
        textInput.value = textCount.substring(0, 300);
        document.getElementById('target').innerText = 300;
    }

}
  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Wrapper>
            <Title>문의하기</Title>
            <Option>
              <option disabled selected>문의 내용을 선택해주세요</option>
              <option name="">결제 / 환불</option>
              <option name="">요금제</option>
              <option name="">계정문의</option>
            </Option>
            <Title_Input type='text' placeholder='제목을 작성해 주세요.' />
            <Text_Input type='text' placeholder='문의할 내용을 작성해 주세요.' id='myText' onChange={myText}/>
            <Text_length_Box>
              <Text_length>
                <span id='target'>0</span>/300
              </Text_length>
            </Text_length_Box>
            <Button_Box>
              <Ok_Button type='button' value={"확인"} onClick={goFAQ} />
              <Cencle_Button type='button' value={"취소"} onClick={goReview} />
              
            </Button_Box>
          </Wrapper>
        </Background>
    </>
  )
}

export default ContactPage;