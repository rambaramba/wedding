import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1  from "../assets/GalleryPhoto1.jpg";
import GalleryPhoto2  from "../assets/GalleryPhoto2.jpg";
import GalleryPhoto3  from "../assets/GalleryPhoto3.jpg";
import GalleryPhoto4  from "../assets/GalleryPhoto4.jpg";
import GalleryPhoto5  from "../assets/GalleryPhoto5.jpg";
import GalleryPhoto6  from "../assets/GalleryPhoto6.jpg";
import GalleryPhoto7  from "../assets/GalleryPhoto7.jpg";
import GalleryPhoto8  from "../assets/GalleryPhoto8.jpg";
import GalleryPhoto9  from "../assets/GalleryPhoto9.jpg";
import GalleryPhoto10 from "../assets/GalleryPhoto10.jpg";
import GalleryPhoto11 from "../assets/GalleryPhoto11.jpg";
import GalleryPhoto12 from "../assets/GalleryPhoto12.jpg";
import GalleryPhoto13 from "../assets/GalleryPhoto13.jpg";
import GalleryPhoto14 from "../assets/GalleryPhoto14.jpg";
import GalleryPhoto15 from "../assets/GalleryPhoto15.jpg";
import GalleryPhoto16 from "../assets/GalleryPhoto16.jpg";
import GalleryPhoto17 from "../assets/GalleryPhoto17.jpg";
import GalleryPhoto18 from "../assets/GalleryPhoto18.jpg";
import GalleryPhoto19 from "../assets/GalleryPhoto19.jpg";
import GalleryPhoto20 from "../assets/GalleryPhoto20.jpg";
import GalleryPhoto21 from "../assets/GalleryPhoto21.jpg";


const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-family: "nanum_hipi";
  font-size: 1.3rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Title2 = styled.p`
  font-family: "nanum_hipi";
  font-size: 1.5rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 26px;
  text-align: center;
`;
const images = [
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },  
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16,
  },
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17,
  },
  {
    original: GalleryPhoto18,
    thumbnail: GalleryPhoto18,
  },
  {
    original: GalleryPhoto19,
    thumbnail: GalleryPhoto19,
  },
  {
    original: GalleryPhoto20,
    thumbnail: GalleryPhoto20,
  },
  {
    original: GalleryPhoto21,
    thumbnail: GalleryPhoto21,
  },  
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title> 순간의 기록 </Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
        <Title2>   </Title2>
    </Wrapper>
  );
};

export default Gallery;
