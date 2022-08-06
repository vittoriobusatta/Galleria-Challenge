import React from 'react'
import { useWindowSize } from "../Tools/Utils";

function PaintingPage({painting}) {

  function ResizeImage(images, windowSize) {
    return windowSize.width >= 992 ? images.large : images.small
  }

  return (
    <div className="painting-page">
      <div className="painting-page__wrapper">
        <div className="painting-page__image">
          <img src={ ResizeImage(painting.images.hero, useWindowSize()) } alt={painting.name} />
          <button>
            VIEW IMAGE
          </button>
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
          <span className="painting-year" >{painting.year}</span>
          <div className="wrapper-info">
            <p className="painting-description">{painting.description}</p>
            <a className="painting-link-go-to-source" href={painting.source}>GO TO SOURCE</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PaintingPage