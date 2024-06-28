// FAQ 페이지

"use client";

import React from 'react';
import { Global } from '@emotion/react';

import {
  globalStyles , Background , Wrapper , Title , Title_Input,
  Text_Input, Text_length_Box , Text_length, Button_Box , Ok_Button,
  Cencle_Button

} from '../../../styles/choi/servicecenter/ContactPageCSS';

const ContactPage = () =>{

  function myText() {
    let textInput = document.getElementById('myText');
    let textCount = textInput.value;
    let totalCount = textCount.length;
    document.getElementById('target').innerText = totalCount;

    if(totalCount > 500){
        alert("500자 이상 작성이 불가능합니다.");
        textInput.value = textCount.substring(0, 500);
        document.getElementById('target').innerText = 500;
    }
}
  return(
    <>
      <Global styles={globalStyles} />
        <Background>
          <Wrapper>
            <Title>문의하기</Title>
            <Title_Input type='text' placeholder='제목을 작성해 주세요.' />
            <Text_Input type='text' placeholder='문의할 내용을 작성해 주세요.' id='myText' onChange={myText}/>
            <Text_length_Box>
              <Text_length>
                <span id='target'>0</span>/500
              </Text_length>
            </Text_length_Box>
            <Button_Box>
              <Ok_Button type='button' value={"확인"}/>
              <Cencle_Button type='button' value={"취소"} />
              
            </Button_Box>
          </Wrapper>
        </Background>
    </>
  )
}

export default ContactPage;