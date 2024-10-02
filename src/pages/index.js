import React, { useState, useEffect }  from "react";
import {  Layout } from "antd";
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


const buttons = styled.p`
  font-size: 2rem;
  cursor: pointer;
  padding: 10px 20px;
`;


const IndexPage = () => {
  const effectButton = document.getElementById("effectButton");
  const audio = document.getElementById("audio");


  effectButton.addEventListener("click", ( ) => {
      effectButton.style.backgroundColor = "red" ;
      effectButton.style.backgroundColor = "white" ;
      audio.play()
  });

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    <Wrapper>
      <buttons id="effectButton"> song </buttons>
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
     
      <Title />
      <Greeting />
      <Gallery />
      <Location />
      <Quote />
      <CongratulatoryMoney />
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
