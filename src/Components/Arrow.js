import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowNext } from "../Assets/Icons/Icon-next-16.svg";
import { ReactComponent as ArrowBack } from "../Assets/Icons/icon-back-button.svg";

const Container = styled.div`
  height: auto;
  width: auto;
  cursor: pointer;
  & svg {
    height: 24px;
    width: 25px;
    & g {
      transition: all 0.3s ease-in-out;
    }
  }
`;


function Arrow({ direction, counter, setCounter, paintingsData }) {

  useEffect(() => {
    function checkKey(e) {
      document.onkeydown = checkKey;
      e = e || window.event;
      if (e.keyCode === 37 && counter > 0) {
        setCounter(counter - 1);
      } else if (e.keyCode === 39 && counter < paintingsData.length - 1) {
        setCounter(counter + 1);
      }
    }
    document.onkeydown = checkKey;
  }
  , [counter, setCounter, paintingsData]);

  function handleClickBack() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function handleClickNext() {
    if (counter < paintingsData.length - 1) {
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
