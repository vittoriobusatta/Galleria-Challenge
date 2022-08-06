import React from "react";
import styled from "styled-components";
import Arrow from "./Arrow";
import PaintingPage from "./PaintingPage";

const Container = styled.section`
  height: calc(100vh - 129px);
  width: auto;
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  height: calc(100% - 96px);
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0;
`;

const SlideContent = styled.div`
height: 100%;
  width: 100%;
`;

const SlideFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 96px;
  width: 100%;
  background-color: #c1c1c1;
  padding: 25px 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  }
  & h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.75;
  }
`;

export const Buttons = styled.div`
  height: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
  column-gap: 30px;
`;

function Slideshow({ paintingsData }) {
  return (
    <Container>
      <Slide>
        <SlideContent>
          {paintingsData.map((items, index) => (
            <PaintingPage key={index} painting={items} />
          ))}
        </SlideContent>
        <SlideFooter>
          <Info>
            <h2>ADdzd</h2>
            <h3>cfcd</h3>
          </Info>
          <Buttons>
            <Arrow direction="left" />
            <Arrow direction="right" />
          </Buttons>
        </SlideFooter>
      </Slide>
    </Container>
  );
}

export default Slideshow;
