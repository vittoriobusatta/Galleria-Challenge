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
  @media screen and (max-width: 992px) {
    min-width: calc(${(props) => props.width}px - 60px);
  }
  @media screen and (max-width: 576px) {
    min-width: calc(${(props) => props.width}px - 48px);
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

  @media screen and (max-width: 576px) {
    grid-template-columns: 0.5fr repeat(2, 1fr) 0.6fr;
    grid-template-rows: repeat(5, 1fr);
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
    max-width: 600px;
    min-height: 560px;
    grid-area: 1 / 1 / 5 / 4;
  }
  @media screen and (max-width: 576px) {
    grid-area: 1 / 1 / 5 / 5;
    max-width: auto;
    min-height: auto;
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
    @media screen and (max-width: 576px) {
      margin-bottom: 8px;
      font-size: 24px;
      line-height: 29px;
      text-align: left;
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
  @media screen and (max-width: 576px) {
    grid-area: 4 / 1 / 5 / 4;
    padding: 24px;
    height: auto;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
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
    padding-left: 0;
    grid-area: 3 / 4 / 4 / 5;
  }
  @media screen and (max-width: 576px) {
    grid-area: 5 / 1 / 6 / 2;
    margin-left: 0;
  }
`;
const ViewButton = styled.div`
  grid-area: 7 / 1 / 8 / 3;
  background: rgba(0, 0, 0, 0.75);
  mix-blend-mode: normal;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  height: 40px;
  width: 152px;
  column-gap: 14px;
  padding: 16px 14px;
  cursor: pointer;

  &:hover {
    mix-blend-mode: normal;
  background: rgba(255, 255, 255, 0.25)
  }

  @media screen and (max-width: 992px) {
    grid-area: 4 / 1 / 8 / 3;
  }
  @media screen and (max-width: 576px) {
    grid-area: 1/ 1 / 1 /2;
  }
`;
const Button = styled.h3`
  width: auto;
  font-family: ${libreBaskervilleBold};
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  text-align: right;
  letter-spacing: 2.14286px;
  color: #ffffff;
`;
const Icone = styled.svg`
  height: 12px;
  width: 12px;
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
  @media screen and (max-width: 992px) {
    max-height: fit-content;
    width: 100%;
  }
`;
const RightContent = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr) 1.5fr repeat(10, 1fr);

  @media screen and (max-width: 992px) {
    width: 100%;
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    margin-top: 64px;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 0.3fr 1fr;
    grid-template-rows: 0.6fr 0.5fr repeat(4, 1fr);
    margin-top: 0;
  }

  & h1 {
    grid-area: 1 / 1 / 4 / 2;
    font-style: normal;
    font-weight: 700;
    font-size: max(20rem, 100px);
    color: #f3f3f3;
    font-family: ${libreBaskervilleBold};
    @media screen and (max-width: 992px) {
      grid-area: 1 / 1 / 3 / 3;
    }
    @media screen and (max-width: 576px) {
      grid-area: 1 / 2 / 3 / 3;
      font-size: max(14rem, 56px);
      text-align: center;
    }
  }
  & p {
    grid-area: 5 / 1 / 13 / 2;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    color: #7d7d7d;
    max-width: 450px;
    font-family: ${libreBaskervilleBold};
    @media screen and (max-width: 992px) {
      grid-area: 2 / 2 / 5 / 3;
    }
    @media screen and (max-width: 576px) {
      grid-area: 2 / 1 / 6 / 3;
      max-width: 100%;
    }
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
  white-space: nowrap;
  @media screen and (max-width: 992px) {
    grid-area: 5 / 2 / 6 / 3;
    margin-top: 68px;
  }
  @media screen and (max-width: 576px) {
    grid-area: 6 / 1 / 7 / 2;
  }
`;

function PaintingPage({ painting, counter, id, setShowGallery }) {
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
          <Title>
            <h1>{painting.name}</h1>
            <h3>{painting.artist.name}</h3>
          </Title>
          <ArtistImage>
            <img src={painting.artist.image} alt={painting.name} />
          </ArtistImage>
          <ViewButton onClick={() => setShowGallery(true)}>
            <Icone
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.71431 0L9.21432 1.5L6.85718 3.85714L8.14288 5.14285L10.5 2.78571L12 4.28571V0H7.71431Z"
                fill="white"
              />
              <path
                d="M3.85714 6.85715L1.5 9.21429L0 7.71428V12H4.28571L2.78571 10.5L5.14285 8.14285L3.85714 6.85715Z"
                fill="white"
              />
              <path
                d="M8.14288 6.85715L6.85718 8.14285L9.21432 10.5L7.71431 12H12V7.71428L10.5 9.21429L8.14288 6.85715Z"
                fill="white"
              />
              <path
                d="M4.28571 0H0V4.28571L1.5 2.78571L3.85714 5.14285L5.14285 3.85714L2.78571 1.5L4.28571 0Z"
                fill="white"
              />
            </Icone>
            <Button>View image</Button>
          </ViewButton>
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
