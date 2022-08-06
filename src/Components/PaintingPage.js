import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  libreBaskervilleRegular,
  libreBaskervilleBold,
} from "../Common/Common";

const Container = styled.div`
  transition: transform 0.5s;
  width: auto;
  height: 100%;
  min-width: calc(${(props) => props.width}px - 80px);

  @media screen and (max-width: 1224px) {
    min-width: calc(${(props) => props.width}px - 70px);
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  height: 100%;
  width: 55%;
  max-height: 624px;
  max-width: 855px;
  display: grid;
  grid-template-columns: repeat(6, 1fr) 0.8fr repeat(5, 1fr);
  grid-template-rows: repeat(8, 1fr);
  @media screen and (max-width: 1224px) {
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr) repeat(2, 0.5fr);
    grid-template-rows: repeat(4, 1fr);
    max-width: none;
  }
`;

const ArtistImage = styled.div`
  grid-area: 7 / 8 / 9 / 10;
  margin-left: 30px;
  height: 128px;
  width: 128px;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 992px) {
    /* margin-left: 0; */
    padding-left: 0;
    grid-area: 3 / 4 / 4 / 5;
  }
`;
const Hero = styled.div`
  grid-area: 1 / 1 / 8 / 8;
  & img {
    height: 100%;
    width: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 992px) {
    /* min-width: 650px; */
    max-width: 600px;
    min-height: 560px;
    grid-area: 1 / 1 / 5 / 4;
  }
`;
const Title = styled.div`
  height: fit-content;
  width: auto;
  grid-area: 1 / 7 / 4 / 13;
  background: #fff;
  padding-left: 6.5rem;
  padding-bottom: 6.7rem;
  max-width: 445px;
  & h1 {
    font-style: normal;
    font-weight: 700;
    margin-bottom: 24px;
    font-size: max(5.6rem, 24px);
    line-height: 64px;
    font-family: ${libreBaskervilleBold};
    @media screen and (max-width: 992px) {
      line-height: 56px;
    }
  }
  & h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    font-family: ${libreBaskervilleRegular};
    mix-blend-mode: normal;
    opacity: 0.75;
  }
  @media screen and (max-width: 1224px) {
    padding-left: 3.5rem;
  }
  @media screen and (max-width: 992px) {
    grid-area: 1 / 2 / 3 / 5;
    padding-left: 6.5rem;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 45%;
  max-height: 571px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1224px) {
    justify-content: flex-end;
  }
`;
const RightContent = styled.div`
  height: 100%;
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr) 1.5fr repeat(10, 1fr);

  & h1 {
    grid-area: 1 / 1 / 4 / 2;
    font-style: normal;
    font-weight: 700;
    font-size: max(20rem, 100px);
    color: #f3f3f3;
    font-family: ${libreBaskervilleBold};
  }
  & p {
    grid-area: 5 / 1 / 13 / 2;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    color: #7d7d7d;
    max-width: 350px;
    font-family: ${libreBaskervilleBold};
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    height: fit-content;
    display: block;
  }
`;

const Source = styled.a`
  grid-area: 14 / 1 / 15 / 2;
  height: auto;
  width: auto;
  font-family: ${libreBaskervilleBold};
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.92857px;
  text-decoration-line: underline;
  color: #7d7d7d;
  text-transform: uppercase;
`;

function PaintingPage({ painting, counter }) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function ResizeImage(images, windowSize) {
    return windowSize.width >= 992 ? images.large : images.small;
  }

  return (
    <Container
      width={windowSize.width}
      style={{ transform: `translateX(${counter * -100}%)` }}
    >
      <Content>
        <Left>
          <Hero>
            <img
              src={ResizeImage(painting.images.hero, windowSize)}
              alt={painting.name}
            />
          </Hero>
          <ArtistImage>
            <img src={painting.artist.image} alt={painting.name} />
          </ArtistImage>
          <Title>
            <h1>{painting.name}</h1>
            <h3>{painting.artist.name}</h3>
          </Title>
        </Left>
        <Right>
          <RightContent>
            <h1>{painting.year}</h1>
            <p>{painting.description}</p>
            <Source href={painting.source}>Go To Source</Source>
          </RightContent>
        </Right>
      </Content>
    </Container>
  );
}

export default PaintingPage;
