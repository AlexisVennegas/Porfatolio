import React, { useState } from "react";
import TrabajoUno from "../img/TrabajoUno.png";
import TrabajoDos from "../img/TrabajoDos.png";
import TrabajoTres from "../img/TrabajoTres.png";
import TrabajoCuatro from "../img/TrabajoCuatro.png";
import TrabajoCinco from "../img/TrabajoCinco.png";
import { FcDownRight } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import { HomeButton } from "./HomeButton";

export const Works = () => {
  const [showDiv, setShowDiv] = useState(false);
  const Desplegable = () => {
    setShowDiv(true);
  };
  const Ocultar = () => {
    setShowDiv(false);
  };

  const Trabajos = [
    {
      titulo: "AfroBook",
      clase: "work-uno",
      imagen: TrabajoUno,
    },
    {
      titulo: "DogCat",
      clase: "work-uno",
      imagen: TrabajoDos,
    },
    {
      titulo: "GeekyGram",
      clase: "work-uno",
      imagen: TrabajoTres,
    },
    {
      titulo: "music-io",
      clase: "work-uno trabajoCuatro",
      imagen: TrabajoCuatro,
    },
    {
      titulo: "SuperMarket",
      clase: "work-uno",
      imagen: TrabajoCinco,
    },
  ];

  const TrabajosMap = Trabajos.map((Trabajos) => (
    <div className="work-one foro" key={Trabajos.titulo} onClick={Desplegable}>
      <img
        className={Trabajos.clase}
        alt={Trabajos.titulo}
        src={Trabajos.imagen}
      />
      {/* <p className={Trabajos.titulo}>
        {" "}
        <FcDownRight className="emoji-flecha" /> {Trabajos.titulo}
      </p> */}
    </div>
  ));

  return (
    <div className="Works-page-container">
      <HomeButton />
      {TrabajosMap}

      {/* comienza popUp donde muestra informacion del proyecto */}
      <div
        className={
          showDiv ? "containerindiv containerindiv-v" : "containerindiv-v"
        }
      >
        <div className="button-close-container">
          <AiFillCloseCircle className="close-button" onClick={Ocultar} />
        </div>
        <div className="container-trabajos">
          <div className="portal-container"></div>
          <div className="informacion-container">
            <h1>informacion</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
