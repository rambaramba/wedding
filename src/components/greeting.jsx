import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-family: "nanum_hipi" !important;
  font-size: 1.3rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-family: "nanum_lefthand"  !important;
  font-size: 1.1 rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
  color: #777;
`;

const GroomBride = styled.p`
  font-family: "mom_to_daughter" !important;
  font-size: 1.5rem;
  line-height: 1.75;
  opacity: 0.95;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
  font-weight: bold ;  
  color: #777;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        함께하면 모든 것이 즐거워지는 사람과
        <br />
        <br />
        하나 되어 미래를 같이하기로 약속했습니다.
        <br />
        <br />
        각자의 일상을 존중하고
        <br />
        <br />
        보듬어주며 살아가겠습니다.
        <br />
        <br />        
        곁에서 늘 아껴주신 여러분들이,
        <br />
        <br />
        저희의 새로운 시작을 축복해 주시면
        <br />
        <br />
        더 할 나위 없는 기쁨이겠습니다.
        <br />
        <br />
        <br />        
      </Content>
      <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 차남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
