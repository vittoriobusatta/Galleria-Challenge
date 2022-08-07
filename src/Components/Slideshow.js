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
    margin-bottom: 96px;
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

const SlideFooter = styled.div`
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

function Slideshow({ paintingsData }) {
  let numberSlide = Number(window.location.search.replace("?=number", ""));
  const [counter, setCounter] = useState(numberSlide);
  const [currentPainting, setCurrentPainting] = useState(
    paintingsData[counter]
  );
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
            <PaintingPage key={index} painting={items} counter={counter} />
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
      </Slide>
    </Container>
  );
}

export default Slideshow;
