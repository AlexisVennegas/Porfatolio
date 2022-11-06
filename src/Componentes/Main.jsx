import React, { useState } from "react";
import { Link } from "react-router-dom";
import imagenPOrtada from "../img/alexis.png";
import Animation from "./Animation";

export const Main = () => {
  const [showText, setShowText] = useState(false);
  const [showTextDos, setShowTextDos] = useState(false);
  const [showTextTres, setShowTextTres] = useState(false);

  const titleShow = () => {
    setShowText(true);
  };
  const titleHIdden = () => {
    setShowText(false);
  };

  const titleShowDos = () => {
    setShowTextDos(true);
  };
  const titleHiddenDos = () => {
    setShowTextDos(false);
  };
  const titleShowtres = () => {
    setShowTextTres(true);
  };
  const titleHiddenTres = () => {
    setShowTextTres(false);
  };

  return (
    <section className="container-principal">
      <div className="opciones-container">
        {/* comienza el primer item */}

        <div
          className="container-titleUno"
          onMouseEnter={titleShow}
          onMouseLeave={titleHIdden}
        >
          <Link to="Works" className="container-titleUno">
          <h2 className={showText ? "titulo-v" : "tituloCuatro"}>Works</h2>
            {showText ? (
              <h1 className="tituloCuatro">Works</h1>
            ) : (
              <h1 className={showText ? "titulo-v" : "tituloUno"}>Hello</h1>
            )}
          </Link>
        </div>

        {/* comienza el segundo item */}
        <div
          onMouseEnter={titleShowDos}
          onMouseLeave={titleHiddenDos}
          className="container-titleDos"
        >
          <Link to="About" className="container-titleUno">
          <h2 className={showText ? "titulo-v" : "titlecinco"}>About</h2>
            {showTextDos ? (
              <h1 className="titlecinco">About</h1>
            ) : (
              <h1 className={showTextDos ? "titulo-v" : "tituloDos"}>I am</h1>
            )}
          </Link>
        </div>
        {/* comienza el tercer item */}
        <div
          className="container-titleTres"
          onMouseEnter={titleShowtres}
          onMouseLeave={titleHiddenTres}
        >
          <Link to="Contact" className="container-titleUno">
          <h2 className={showText ? "titulo-v" : "titleseis"}>Contact</h2>
            {showTextTres ? (
              <h1 className="titleseis">Contact</h1>
            ) : (
              <h1 className="tituloTres">Alexis</h1>
            )}
          </Link>
        </div>
      </div>
      <div className="imagen-container" data-aos="zoom-out"  data-aos-duration="3000">
        <img
          src={imagenPOrtada}
          alt="perfil-imagen"
          className="imagePerfil"
        />
      </div>
    </section>
  );
};
