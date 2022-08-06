import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowRight } from "../Assets/Icons/Icon-next-16.svg";
import { ReactComponent as ArrowLeft } from "../Assets/Icons/icon-back-button.svg";

const Container = styled.div`
  height: auto;
  width: auto;
  cursor: pointer;
  & svg {
    height: 24px;
    width: 25px;
  }
`;
const ArrowNext = styled(ArrowRight)`
  & g {
    transition: all 0.3s ease-in-out;
  }
`;
const ArrowBack = styled(ArrowLeft)`
  & g {
    transition: all 0.3s ease-in-out;
  }
`;

function Arrow({ direction, counter, setCounter, paintingsData }) {

  function handleClickBack() {
    if (counter > 0) {
      setCounter(counter - 1);
    };
  }

  function handleClickNext() {
    if (counter < paintingsData.length - 1)  {
      setCounter(counter + 1);

    }
  }

  function handleClick() {
    if (direction === "back") handleClickBack();
    if (direction === "next") handleClickNext();
  }

  return (

    <Container onClick={handleClick}>
      {direction === "next" ? <ArrowNext /> : <ArrowBack />}
    </Container>
  );
}

export default Arrow;
