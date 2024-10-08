import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import BackgroundVideo from "../assets/BackgroundVideo.mp4";
import GroovePaper from "../assets/GroovePaper.png";

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-family: "nanum_dahang";
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 65%;
`;

const WeddingInvitation = styled.p`
  font-size: 1.8rem;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 2.0rem;
  font-family: "mom_to_daughter";
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const Schedule = styled.p`

  text-align: center;
  font-family: "mom_to_daughter";
  font-weight: bold;
  font-size: 1.5rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;



const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          🤵🏻{GROOM_NAME} &#38; {BRIDE_NAME}👰🏻‍♀️
          <br />
        </GroomBride>
      </TitleWrapper>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVideo} type="video/mp4" />
      </VideoBackground>
    <TitleWrapper>
      <Schedule>
        {WEDDING_DATE}
        <br />
        {WEDDING_LOCATION}
      </Schedule>
    </TitleWrapper>
    </Layout>
  );
};

export default Title;
