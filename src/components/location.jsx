import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-family: "nanum_hipi";
  font-size: 1.5rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-family: "nanum_hipi";
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
      "timestamp" : "1727627480215",
      "key" : "2krum",
      "mapWidth" : "640",
      "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };



  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1652464367301"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
      <Title>  💒 상세 주소</Title>
        <br />
        <br />
           서울 송파구 법원로9길 26 H비지니스파크 D동 그레이스홀
        <br />
        <br />
        <br />
        <br />

        <Title> 🚍 셔틀버스 이용시</Title>
        <br />
        <br />
           8호선 문정역 4번출구 앞 셔틀버스 10분 배차 운행
        <br />
        <br />
        <br />
        <br />

        <Title> 🚌 버스 이용시(문정로데오 거리 하차)</Title>
        <br />
        <br />
          • 일반버스(초록) : 30, 31, 32, 331, 100, 119
        <br />
          • 간선버스(파랑) : 302, 303, 320, 333, 343, 345, 350, 360
        <br />
          • 지선버스(초록) : 3420 • 광역버스(빨강) : 9403
        <br />
          • 직행좌석버스(빨강) : 500-1, 1009, 1112, 1117, 1650, 3302, G2100
        <br />
        <br />
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Location;



