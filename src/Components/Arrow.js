import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowNext } from "../Assets/Icons/next.svg";
import { ReactComponent as ArrowBack } from "../Assets/Icons/back.svg";

const Container = styled.div`
  height: auto;
  width: auto;
  height: 24px;
  width: 26px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    height: 16px;
    width: 17px;
  }
  & svg {
    height: 100%;
    width: 100%;
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
  }, [counter, setCounter, paintingsData]);

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
