import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../Tools/Utils";
import {
  libreBaskervilleRegular,
  libreBaskervilleBold,
} from "../Common/Common";

const Container = styled.section`
  width: 100vw;
  transition: transform 0.5s;
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

  @media screen and (max-width: 992px) {
    grid-template-columns: 1.4fr repeat(3, 1fr) 0.2fr;
    grid-template-rows: repeat(4, 1fr);
    width: fit-content;
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
`;
const Hero = styled.div`
  grid-area: 1 / 1 / 8 / 8;
  /* min-width: 300px; */
  & img {
    height: 100%;
    width: 100%;
    width: 100%;
    object-fit: cover;
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
`;

const Right = styled.div`
  height: 100%;
  width: 45%;
  max-height: 571px;
  min-width: 476px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
const RightContent = styled.div`
  height: 100%;
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr) 1.5fr repeat(10, 1fr);
  padding-right: 80px;

  & h1 {
    grid-area: 1 / 1 / 5 / 2;
    font-style: normal;
    font-weight: 700;
    font-size: max(20rem, 100px);
    line-height: max(15rem, 100px);
    color: #f3f3f3;
    font-family: ${libreBaskervilleBold};
  }
  & p {
    grid-area: 4 / 1 / 13 / 2;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    color: #7d7d7d;
    max-width: 350px;
    font-family: ${libreBaskervilleBold};
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
  function ResizeImage(images, windowSize) {
    return windowSize.width >= 992 ? images.large : images.small;
  }

  return (
    <Container style={{ transform: `translateX(${counter * -100}%)` }}>
      <Content>
        <Left>
          <Hero>
            <img
              src={ResizeImage(painting.images.hero, useWindowSize())}
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

      {/* <div className="painting-page__wrapper">
        <div className="painting-page__image">
          <Hero
            src={ResizeImage(painting.images.hero, useWindowSize())}
            alt={painting.name}
          />
          <button>VIEW IMAGE</button>
        </div>
        <section className="painting-page__label">
          <header className="painting-info">
            <h1>{painting.name}</h1>
            <h2>{painting.artist.name}</h2>
          </header>
          <div className="artist-image">
            <img src={painting.artist.image} alt={painting.name} />
          </div>
        </section>
        <section className="painting-page__description">
          <span className="painting-year">{painting.year}</span>
          <div className="wrapper-info">
            <p className="painting-description">{painting.description}</p>
            <a className="painting-link-go-to-source" href={painting.source}>
              GO TO SOURCE
            </a>
          </div>
        </section>
      </div> */}
    </Container>
  );
}

export default PaintingPage;
