import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 ;
  font-size: 1.3rem;
  font-family: "mom_to_daughter" !important;
  text-align: center;
  font-weight: bold;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        <br />
        사랑한다는 말은 설레고 
        <br />
        포옹은 따뜻하고
        <br />
        하늘은 파랗고
        <br />
        당신은 소중하다
        <br />
        <br />
        - 김은주, (기분을 만지다) -
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Quote;
