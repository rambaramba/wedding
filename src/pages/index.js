import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";

import AOS from "aos";
import "aos/dist/aos.css";

const { Footer } = Layout;

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
`;

const Buttons = styled.button`
  background-color:  rgba(227, 161, 161, 0.6); /* 연핑크 색상에 투명도 추가 */
  color: #777; /* 회색 텍스트 */
  font-family: "nanum_dahang";
  border: none;
  border-radius: 50px; /* 타원형으로 만들기 */
  padding: 5px 15px; /* 패딩 조정하여 버튼 크기 줄이기 */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 20px; /* 버튼을 아래로 내리기 */
  margin-left: 10px; /* 왼쪽에서 띄우기 */

  &:hover {
    background-color: rgba(227, 161, 161, 1);  /* 호버 시 조금 더 진한 핑크색 */
  }

  &:active {
    background-color: rgba(227, 161, 161, 1); /* 클릭 시 핑크색 */
    transform: scale(0.95); /* 클릭 효과 */
  }
`;

const IndexPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <Wrapper>
      <audio
        ref={audioRef}
        src={Song}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <Buttons onClick={togglePlay}>
        {isPlaying ?  "🎧 OFF" : "🎧 ON" }
      </Buttons>
      <Title />
      <Greeting />
      <Gallery />
      <Location />
      <CongratulatoryMoney />
      <Quote />
      <Share />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Copyright © 2024 Jeong Baraem
      </Footer>
    </Wrapper>
  );
};

export default IndexPage;
