import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../Tools/Utils";
import {
  libreBaskervilleRegular,
  libreBaskervilleBold,
} from "../Common/Common";

const Container = styled.section`
  display: inline-block;
  width: 100%;
  transition: transform 0.5s;
`;


const Content = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
`;
const Left = styled.div`
  height: 100%;
  width: auto;
  max-height: 624px;
  max-width: 855px;
  display: grid;
  grid-template-columns: repeat(5, 1fr) 0.5fr repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const ArtistImage = styled.div`
  grid-area: 7 / 7 / 9 / 10;
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
  grid-area: 1 / 1 / 8 / 7;
  /* min-width: 475px; */
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const Title = styled.div`
  height: fit-content;
  width: auto;
  grid-area: 1 / 6 / 4 / 13;
  background: #fff;
  padding-left: 65px;
  padding-bottom: 67px;
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

function PaintingPage({ painting, counter }) {
  function ResizeImage(images, windowSize) {
    return windowSize.width >= 992 ? images.large : images.small;
  }

  return (
    <Container style={{transform: `translateX(${counter  * -100}%)`}}>
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
