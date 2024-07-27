"use client";

import React, { useState } from "react";
import { Global } from "@emotion/react";
import { useRouter } from "next/navigation";
import {
  globalStyles,
  Background,
  VerificationBox,
  Title,
  SubTitle,
  Verification,
  ButtonBox,
  OkButton,
} from "../../../../styles/choi/login/VerificationPageCSS";

const VerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const router = useRouter();
  const storedCode = sessionStorage.getItem("verificationCode"); // sessionStorage에서 인증번호 가져오기
  const userId = sessionStorage.getItem("userId"); // sessionStorage에서 user_id 가져오기

  const handleVerificationCodeChange = (e) =>
    setVerificationCode(e.target.value);

  const handleVerify = () => {
    if (!verificationCode) {
      alert("인증번호를 입력해주세요.");
      return;
    }

    if (verificationCode === storedCode) {
      // 인증 성공시 비밀번호 재설정 페이지로 이동
      router.push("/choi/login/pwResetPage");
    } else {
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <VerificationBox>
          <Title>인증번호 입력</Title>
          <SubTitle>메일로 발송된 인증번호를 입력해주세요.</SubTitle>
          <Verification
            type="text"
            placeholder="인증번호"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
          />
          <ButtonBox>
            <OkButton type="button" value={"확인"} onClick={handleVerify} />
          </ButtonBox>
        </VerificationBox>
      </Background>
    </>
  );
};

export default VerificationPage;
