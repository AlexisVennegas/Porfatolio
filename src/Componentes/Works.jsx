import React, { useState } from "react";
import TrabajoUno from "../img/ConjutoTrabajosUno/TrabajoUno.png";
import TrabajoDos from "../img/ConjutoTrabajosUno/TrabajoDos.png";
import TrabajoTres from "../img/ConjutoTrabajosUno/TrabajoTres.png";

import TrabajoCuatro from "../img/ConjuntoTrabajosDos/TrabajoUno.png";
import TrabajoCinco from "../img/ConjuntoTrabajosDos/TrabajoDos.png";
import TrabajoSeis from "../img/ConjuntoTrabajosDos/TrabajoTres.png";
 


import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { HomeButton } from "./HomeButton";
import { BsFillCloudCheckFill } from "react-icons/bs";
import { BsTools } from "react-icons/bs";

// algunas funciones principales como el popoup, ylas ultimas tres almacenan los trabajos

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
      descrp: "Foro",
      imagen: TrabajoUno,
      link: "https://github.com/GhassanKY/foro_Repositorio",
      web: "https://afrodbook.000webhostapp.com/FRONTEND/index.html"
    },
    {
      titulo: "DogCat",
      clase: "work-uno",
      descrp: "Mascotas",
      imagen: TrabajoCuatro,
      link: "https://github.com/sudoBuda/Equipo18-HKTON",
    },
    {
      titulo: "GeekyGram",
      clase: "work-uno",
      descrp: "Red Social",
      imagen: TrabajoUno,
    },
  ];

  const trabajosDos = [
    {
      titulo: "TrailerPlanet",
      clase: "work-uno trabajoCuatro",
      imagen: TrabajoDos,
      descrp: "Web Trailers",
      link: "https://github.com/AlexisVennegas/movies-app"
    },
    {
      titulo: "SuperMarket",
      clase: "work-uno",
      descrp: "Shopping list",
      imagen: TrabajoCinco,
      link: "https://github.com/AlexisVennegas/SuperMarket",
      web: "https://alexisvennegas.github.io/SuperMarket/"
    },
    {
      titulo: "SuperMarket",
      clase: "work-uno",
      descrp: "Foro",
      imagen: TrabajoCinco,
    },
  ];

  const trabajosTres = [
    {
      titulo: "GeekyGram",
      clase: "work-uno trabajoCuatro",
      imagen: TrabajoTres,
      descrp: "Red Social",
      link: "https://github.com/rauledutorres/Proyecto-Mini-Red-Social"
    },
    {
      titulo: "Music-io",
      clase: "work-uno",
      descrp: "Web Music",
      imagen: TrabajoSeis,
    },
    {
      titulo: "SuperMarket",
      clase: "work-uno",
      descrp: "Foro",
      imagen: TrabajoCinco,
    },
  ];

  // contenedore de las cards

  const TrabajosMap = Trabajos.map((Trabajos) => (
    //   <img
    //     className={Trabajos.clase}
    //     alt={Trabajos.titulo}
    //     src={Trabajos.imagen}
    //   />
    // </div>  // <div className="work-one foro" key={Trabajos.titulo} onClick={Desplegable}>
  

    <div className="card" key={Trabajos.descrp}>
      <div className="card-img">
        <img
          className={Trabajos.clase}
          alt={Trabajos.titulo}
          src={Trabajos.imagen}
         
        />
      </div>
      <ul className="social-media">
       <a href={Trabajos.web}>
        <li>
         <BsFillCloudCheckFill className="iconWeb"/>
        </li>
        </a>
        <li>
        <BsTools className="iconWeb"   />
        </li>
        <a href={Trabajos.link}>
        <li>
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
          </svg>
        </li>
        </a>
      </ul>
      <div className="card-info">
        <p className="title">{Trabajos.titulo}</p>
        <p className="subtitle">{Trabajos.descrp}</p>
      </div>
    </div>
  ));

  const trabajosDosMap = trabajosDos.map((trabajosDos) => (
    <div className="card" key={Trabajos.titulo}>
      <div className="card-img">
        <img
          className={trabajosDos.clase}
          alt={trabajosDos.titulo}
          src={trabajosDos.imagen}
        />
      </div>
      <ul className="social-media">
      <a href={trabajosDos.web}>
        <li>
        <BsFillCloudCheckFill className="iconWeb"/>
        </li>
      </a>
        <li>
        <BsTools className="iconWeb"/>
        </li>
        <a href={trabajosDos.link}>
        <li>
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
          </svg>
        </li>
        </a>
      </ul>
      <div className="card-info">
        <p className="title">{trabajosDos.titulo}</p>
        <p className="subtitle">{trabajosDos.descrp}</p>
      </div>
    </div>
  ));

  const trabajosTresMap = trabajosTres.map((trabajosTres) => (
    <div className="card" key={Trabajos.titulo}>
      <div className="card-img">
        <img
          className={trabajosTres.clase}
          alt={trabajosTres.titulo}
          src={trabajosTres.imagen}
        />
      </div>
      <ul className="social-media">
        <li>
        <BsFillCloudCheckFill className="iconWeb"/>
        </li>
        <li>
        <BsTools className="iconWeb"/>
        </li>
        <a href={trabajosTres.link}>
        <li>
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
          </svg>
        </li>
        </a>
      </ul>
      <div className="card-info">
        <p className="title">{trabajosTres.titulo}</p>
        <p className="subtitle">{trabajosTres.descrp}</p>
      </div>
    </div>
  ));

  // termina los contenedores de las cards

  return (
    <div className="Works-page-container">
      <HomeButton />

      {/* comienza los divs con las cards que van a tener. */}
      <div className="containercards">
        <div
          className="containercards-first pruebaasd"
          
          data-aos-duration="500"
        >
          {TrabajosMap}
        </div>
        <div
          className="containercards-second pruebaasd"
        
          data-aos-duration="500"
        >
          {trabajosDosMap}
        </div>
        <div
          className="containercards-third pruebaasd"
        
          data-aos-duration="500"
        >
          {trabajosTresMap}
        </div>
      </div>

      {/* comienza popUp donde muestra informacion del proyecto */}
      <div
        className={
          showDiv ? "containerindiv containerindiv-v" : "containerindiv"
        }
      >
     
        <div className="container-trabajos">
          <div className="portal-container"></div>
          <div className="informacion-container">
          <AiFillHtml5 className="iconSkills"/>
          <DiCss3 className="iconSkills"/>
          <IoLogoJavascript className="iconSkills"/>
          <SiPhp className="iconSkills"/>
          <AiOutlineConsoleSql className="iconSkills"/>
          
          </div>
        </div>
      </div>
    </div>
  );
};
