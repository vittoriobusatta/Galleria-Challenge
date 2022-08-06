import React from "react";
import styled from "styled-components";
import '../Assets/Styles/Grid.css';
import { libreBaskervilleRegular, libreBaskervilleBold } from "../Common/Common";

const Container = styled.section`
  height: auto;
  width: 100%;
  padding: 40px;
`;
const Grid = styled.ul`
  height: 100%;
  width: 100%;
  display: grid;
  height: auto;
  width: auto;
  grid-gap: 40px;
  gap: 40px;
  & li {
    position: relative;
    cursor: pointer;
    & img {
      transition: all 0.3s ease-in-out;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  li:after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 17rem;
    max-height: 170px;
    width: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.841672) 100%
    );
  }

  li:hover img {
    opacity: 0.49;
  }
`;

const CardInfo = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  right: 32px;
  z-index: 10;
  color: #fff;

  & h2 {
    font-size: max(2.4rem, 18px);
    line-height: 2.9rem;
    margin-bottom: 0.7rem;
    font-family:${libreBaskervilleBold};
    font-weight: 700;
  }

  & h3 {
    opacity: 0.75;
    font-size: 13px;
    line-height: 17px;
    font-family:${libreBaskervilleRegular};
    font-weight: 400;
  }
`;

function Home({ paintingsData }) {
  return (
    <Container>
      <Grid>
        {paintingsData.map((info, index) => (
          <li key={index}>
            <img
              src={`${process.env.PUBLIC_URL}${info.images.thumbnail}`}
              alt={info.name}
            />
            <CardInfo>
              <h2>{info.name}</h2>
              <h3>{info.artist.name}</h3>
            </CardInfo>
          </li>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
