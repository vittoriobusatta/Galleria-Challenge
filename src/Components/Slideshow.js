import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { libreBaskervilleBold } from "../Common/Common";
import Arrow from "./Arrow";
import PaintingPage from "./PaintingPage";
import { useLocation } from "react-router-dom";

const Container = styled.section`
  height: calc(100% - 129px);
  /* overflow: hidden; */
`;

const Slide = styled.div`
  height: calc(100% - 96px);
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0;

  @media screen and (max-width: 1224px) {
    padding: 35px 35px 0;
  }
  @media screen and (max-width: 992px) {
    height: auto;
    margin-bottom: 120px;
    padding: 30px 30px 0;
  }
  @media screen and (max-width: 576px) {
    padding: 24px 24px 0;
  }
`;

const SlideContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const SlideFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 96px;
  width: 100%;
  padding: 25px 41px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px #c1c1c1;
  user-select: none;

  @media screen and (max-width: 576px) {
    padding: 24px 24px;
    column-gap: 5px;
  }
`;

const Info = styled.div`
  height: auto;
  width: auto;
  & h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 8px;
    font-family: ${libreBaskervilleBold};
    @media screen and (max-width: 576px) {
      font-size: 14px;
    }
  }
  & h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.75;
    font-family: ${libreBaskervilleBold};
    @media screen and (max-width: 576px) {
      font-size: 10px;
    }
  }
`;

export const Buttons = styled.div`
  height: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
  column-gap: 30px;
`;
export const Bar = styled.div`
  position: absolute;
  height: 2px;
  background: #000;
  top: -1px;
  left: 0;
`;

const ShowGallery = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GalleryContent = styled.div`
  position: relative;
  height: auto;
  width: fit-content;
  z-index: 20;
  margin: 4.9rem;
  @media screen and (max-width: 576px) {
    margin: 24px;
  }
  & img {
    max-height: 770px;
    height: auto;
    width: 100%;
    max-width: fit-content;
    object-fit: cover;
  }
`;
const CloseButton = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: flex-end;

  & button {
    height: auto;
    width: auto;
    margin-bottom: 4.1rem;
    background-color: transparent;
    border: none;
    font-family: ${libreBaskervilleBold};
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #ffffff;

    &:hover {
      mix-blend-mode: normal;
      opacity: 0.25;
    }

  }
`;

const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.85);
`;

function Slideshow({ paintingsData }) {
  let numberSlide = Number(window.location.search.replace("?=number", ""));
  const [counter, setCounter] = useState(numberSlide);
  const [currentPainting, setCurrentPainting] = useState(
    paintingsData[counter]
  );
  const [showGallery, setShowGallery] = useState(false);
  const routePath = useLocation();

  const onTop = () => {
    window.scrollTo(0, 0, "smooth");
  };

  useEffect(() => {
    setCurrentPainting(paintingsData[counter]);
    setTimeout(() => {
      onTop();
    }, 400);
  }, [counter, paintingsData, routePath]);

  const ProgressBar = () => {
    return (
      <Bar
        style={{
          width: `${((counter + 1) * 100) / paintingsData.length}%`,
        }}
      />
    );
  };

  return (
    <Container>
      <Slide>
        <SlideContent>
          {paintingsData.map((items, index) => (
            <PaintingPage
              id={`painting${index}`}
              key={index}
              painting={items}
              counter={counter}
              currentPainting={currentPainting}
              setShowGallery={setShowGallery}
            />
          ))}
        </SlideContent>
        <SlideFooter>
          <ProgressBar />
          <Info>
            <h2>{currentPainting.name}</h2>
            <h3>{currentPainting.artist.name}</h3>
          </Info>
          <Buttons>
            <Arrow
              counter={counter}
              setCounter={setCounter}
              paintingsData={paintingsData}
              direction="back"
            />
            <Arrow
              counter={counter}
              setCounter={setCounter}
              paintingsData={paintingsData}
              direction="next"
            />
          </Buttons>
        </SlideFooter>
        {showGallery && (
          <ShowGallery>
            <GalleryContent>
              <CloseButton>
                <button onClick={() => setShowGallery(false)}>Close</button>
              </CloseButton>
              {currentPainting && (
                <img
                  src={currentPainting.images.gallery}
                  alt={currentPainting.name}
                />
              )}
            </GalleryContent>
            <Overlay
              isOpen={showGallery}
              onClick={() => setShowGallery(false)}
            />
          </ShowGallery>
        )}
      </Slide>
    </Container>
  );
}

export default Slideshow;
