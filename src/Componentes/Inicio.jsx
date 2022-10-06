import React, { useState } from "react";
import nv from "../img/novio.png";
import { Link } from "react-router-dom";
import imagenPOrtada from '../img/alexis.png'


export const Inicio = () => {
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
          className="container-titleUno focus-in-contract"
          onMouseEnter={titleShow}
          onMouseLeave={titleHIdden}
        >
          <Link to="Works" className="container-titleUno">
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
          className="container-titleDos focus-in-contract_two"
        >
        <Link to="About" className="container-titleUno">
          {showTextDos ? (
            <h1 className="titlecinco">About</h1>
          ) : (
            <h1 className={showTextDos ? "titulo-v" : "tituloDos"}>I am</h1>
          )}
          </Link>
        </div>
        {/* comienza el tercer item */}
        <div
          className="container-titleTres focus-in-contract_three"
          onMouseEnter={titleShowtres}
          onMouseLeave={titleHiddenTres}
        >
          <Link to="Contact" className="container-titleUno">
          {showTextTres ? (
            <h1 className="titleseis">Contact</h1>
          ) : (
            <h1 className="tituloTres">Alexis</h1>
          )}
          </Link>
        </div>
      </div>
      <div className="imagen-container">
        <img src={imagenPOrtada} alt="perfil imagen" className="imagePerfil" />
      </div>
    </section>
  );
};
