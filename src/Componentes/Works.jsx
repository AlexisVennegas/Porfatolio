import React, { useState } from "react";
import styled from "styled-components";
import TrabajoUno from "../img/ConjutoTrabajosUno/TrabajoUno.png";
import TrabajoDos from "../img/ConjutoTrabajosUno/TrabajoDos.png";
import TrabajoTres from "../img/ConjutoTrabajosUno/TrabajoTres.png";
import TrabajoCuatro from "../img/ConjuntoTrabajosDos/TrabajoUno.png";
import TrabajoCinco from "../img/ConjuntoTrabajosDos/TrabajoDos.png";
import TrabajoSeis from "../img/ConjuntoTrabajosDos/TrabajoTres.png";
import  Modal  from "./Modal";
import GifUno from '../Assets/Gif/GifUno.gif'
import { TbCloudFog } from "react-icons/tb"; 
import { FcInfo } from "react-icons/fc"; 
import { HomeButton } from "./HomeButton";
import { AiFillHtml5 } from "react-icons/ai"; 
import { DiCss3 } from "react-icons/di"; 
import { IoLogoJavascript } from "react-icons/io"; 
import { DiPhp } from "react-icons/di"; 
import { DiJqueryLogo } from "react-icons/di"; 
import { BsGithub } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import GifTres from '../Assets/Gif/giftDogcat.gif'
import GifDos from '../Assets/Gif/GifDos.gif'
import GiftPortafolio from '../Assets/Gif/GifPortafolio.gif'
import imgPortafolio from '../img/capPortafolio.png'
import GiftLista from '../Assets/Gif/GiftLista.gif'
import GiftMusica from '../Assets/Gif/Giftmusica.gif'

// algunas funciones principales como el popoup, ylas ultimas tres almacenan los trabajos

export const Works = () => {
  const [estadoModal1,  cambiarEstadoModal1] = useState(false);
  const [estadoModal2,  cambiarEstadoModal2] = useState(false);
  const [estadoModal3,  cambiarEstadoModal3] = useState(false);
  const [estadoModal4,  cambiarEstadoModal4] = useState(false);
  const [estadoModal5,  cambiarEstadoModal5] = useState(false);
  const [estadoModal6,  cambiarEstadoModal6] = useState(false);
  const [estadoModal7,  cambiarEstadoModal7] = useState(false);
  const [estadoModal8,  cambiarEstadoModal8] = useState(false);
  const [estadoModal9,  cambiarEstadoModal9] = useState(false);


  const Showmodal1 = () => {
    cambiarEstadoModal1(true);
  };
  const ShowModal2 = () => {
    cambiarEstadoModal2(true);
  };
  const Showmodal3 = () => {
    cambiarEstadoModal3(true);
  };
  const Showmodal4 = () => {
    cambiarEstadoModal4(true);
  };
  const ShowModal5 = () => {
    cambiarEstadoModal5(true);
  };
  const Showmodal6 = () => {
    cambiarEstadoModal6(true);
  };
  const Showmodal7 = () => {
    cambiarEstadoModal7(true);
  };
  const ShowModal8 = () => {
    cambiarEstadoModal8(true);
  };
  const Showmodal9 = () => {
    cambiarEstadoModal9(true);
  };
  const Trabajos = [
    {
      titulo: "AfroBook",
      clase: "work-uno",
      descrp: "Foro",
      imagen: TrabajoUno,
      link: "https://github.com/GhassanKY/foro_Repositorio",
      web: "https://afrodbook.000webhostapp.com/FRONTEND/index.html",
      funcion: Showmodal1,
      modal: "estadomodal1"
    },
    {
      titulo: "DogCat",
      clase: "work-uno",
      descrp: "Mascotas",
      imagen: TrabajoCuatro,
      link: "https://github.com/sudoBuda/Equipo18-HKTON",
      funcion: ShowModal2,
      modal: "estadomodal2",
    },
    {
      titulo: "Portafolio",
      clase: "work-uno",
      descrp: "portafolio",
      imagen: imgPortafolio,
      funcion: Showmodal3,
      modal: "estadomodal3"
    },
  ];
  const trabajosDos = [
    {
      titulo: "TrailerPlanet",
      clase: "work-uno trabajoCuatro",
      imagen: TrabajoDos,
      descrp: "Web Trailers",
      link: "https://github.com/AlexisVennegas/movies-app",
      funcion: Showmodal4,
      modal: "estadomodal4"
    },
    {
      titulo: "SuperMarket",
      clase: "work-uno",
      descrp: "Shopping list",
      imagen: TrabajoCinco,
      link: "https://github.com/AlexisVennegas/SuperMarket",
      web: "https://alexisvennegas.github.io/SuperMarket/",
      funcion: ShowModal5,
      modal: "estadomodal5"
    },
    {
      titulo: "",
      clase: "work-uno",
      descrp: "",
      imagen: "",
      funcion: Showmodal6,
      modal: "estadomodal6"
    },
  ];
  const trabajosTres = [
    {
      titulo: "GeekyGram",
      clase: "work-uno trabajoCuatro",
      imagen: TrabajoTres,
      descrp: "Red Social",
      link: "https://github.com/rauledutorres/Proyecto-Mini-Red-Social",
      funcion: Showmodal7,
      modal: "estadomodal7"
    },
    {
      titulo: "Music-io",
      clase: "work-uno",
      descrp: "Web Music",
      imagen: TrabajoSeis,
      funcion: ShowModal8,
      modal: "estadomodal8"
    },
    {
      titulo: "",
      clase: "work-uno",
      descrp: "",
      imagen: "",
      funcion: Showmodal9,
      modal: "estadomodal9"
    },
  ];

  // contenedore de las cards

  const TrabajosMap = Trabajos.map((Trabajos) => (
    <div className="card" key={Trabajos.descrp}>
      <div className="contentiner-img-card">
        <img
          src={Trabajos.imagen}
          alt="future..."
          className={Trabajos.clase}
        />
      </div>
      <div className="content-title-project">
        <div className="title">
          <p className="titleasd">{Trabajos.titulo}</p>
        </div>
        <div className="button-content-info">
          
            <FcInfo
              className="button-despl-info"
              onClick={Trabajos.funcion}
            />
         
        </div>
      </div>
      <div
        className={
         "content-info-project"
        }
      >
        <p className="title-project">{Trabajos.titulo}</p>
      </div>
    </div>

  ));

  const trabajosDosMap = trabajosDos.map((trabajosDos) => (
    <div className="card" key={trabajosDos.descrp}>
      <div className="contentiner-img-card">
        <img
          src={trabajosDos.imagen}
          alt="future"
          className={trabajosDos.clase}
        />
      </div>
      <div className="content-title-project">
        <div className="title">
          <p className="titleasd">{trabajosDos.titulo}</p>
        </div>
        <div className="button-content-info">
          
            <FcInfo
              className="button-despl-info"
              onClick={trabajosDos.funcion}
            />
         
        </div>
      </div>
      <div
        className={
         "content-info-project"
        }
      >
        <p className="title-project">{Trabajos.titulo}</p>
      </div>
    </div>
  ));

  const trabajosTresMap = trabajosTres.map((trabajosTres) => (
    <div className="card" key={trabajosTres.descrp}>
      <div className="contentiner-img-card">
        <img
          src={trabajosTres.imagen}
          alt="future"
          className={trabajosTres.clase}
        />
      </div>
      <div className="content-title-project">
        <div className="title">
          <p className="titleasd">{trabajosTres.titulo}</p>
        </div>
        <div className="button-content-info">
          
            <FcInfo
              className="button-despl-info"
              onClick={trabajosTres.funcion}
            />
         
        </div>
      </div>
      <div
        className={
         "content-info-project"
        }
      >
        <p className="title-project">{trabajosTres.titulo}</p>
      </div>
    </div>
  ));


// contenedor de los modales

  return (
    <div className="Works-page-container">
      <div className="workspage-children1">
        <HomeButton />
        <h1 className="Fathertitle">Works</h1>
        <p className="textContact">
          The creation of a forum, mini Social Network, shopping list, app of
          music, movie trailers, to adopt pets, among others are some of my
          projects that I carried out in my practices during my training.
        </p>

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
        {/* Modal 1 */}
        <Modal
          estado={estadoModal1}
          cambiarEstado={cambiarEstadoModal1}
          titulo="Foro: AfroBook"
          mostrarOverlay={true}
        >
          <Contenido>
            <div className="contenido-info-proyecto">
              <div className="descripcion-proyecto">
                <p>
                  This task seeks to develop an application that simulates the
                  basic operation of a forum, in which users can create
                  categories of conversations, and write messages on a certain
                  topic.
                </p>
                <h2 className="tecnologies-title">Technologies</h2>
                <div className="tecnologias">
                  <AiFillHtml5 className="icon-html5" title="html5" />
                  <DiCss3 className="icon-css3" title="css3" />
                  <IoLogoJavascript
                    className="icon-javascript"
                    title="Javascript"
                  />
                  <DiPhp className="icon-php" title="Php" />
                  <DiJqueryLogo className="icon-jquery" title="Jquery" />
                </div>
                <h2 className="tecnologies-title">Links</h2>

                <div className="links-proyectos">
                  <a
                    href="https://github.com/GhassanKY/foro_Repositorio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub
                      className="links-proyect-icon icon-github"
                      title="View Github"
                    />
                  </a>
                  <a
                    href="https://afrodbook.000webhostapp.com/FRONTEND/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TbCloudFog
                      className="links-proyect-icon icon-web"
                      title="visit WebSite"
                    />
                  </a>
                </div>
              </div>
              <div className="contenido-imagen-proyecto">
                <img
                  src={GifUno}
                  alt="proyectoForo"
                  className="proyecto-img img-foro"
                />
              </div>
            </div>
          </Contenido>
        </Modal>
        {/* Modal 2 */}
        <Modal
          estado={estadoModal2}
          cambiarEstado={cambiarEstadoModal2}
          titulo="Dog Cat"
        >
          <Contenido>
            <div className="contenido-info-proyecto">
              <div className="descripcion-proyecto">
                <p>
                  Project proposed in "Hackaton" event, about pet adoption,
                  created mainly with php, and javascript, seeks the basic
                  operation of displaying a list of pets ready to be adopted
                </p>
                <h2 className="tecnologies-title">Technologies</h2>
                <div className="tecnologias">
                  <AiFillHtml5 className="icon-html5" />
                  <DiCss3 className="icon-css3" />
                  <IoLogoJavascript className="icon-javascript" />
                  <DiPhp className="icon-php" />
                </div>
                <h2 className="tecnologies-title">Links</h2>

                <div className="links-proyectos">
                  <a
                    href="https://github.com/sudoBuda/Equipo18-HKTON"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="links-proyect-icon icon-github" />
                  </a>
                  <a
                    href="https://github.com/sudoBuda/Equipo18-HKTON"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TbCloudFog className="links-proyect-icon icon-web" />
                  </a>
                </div>
              </div>
              <div className="contenido-imagen-proyecto">
                <img
                  src={GifTres}
                  alt="proyectoForo"
                  className="proyecto-img img-foro"
                />
              </div>
            </div>
          </Contenido>
        </Modal>

        {/* Modal 3 */}
        <Modal
          estado={estadoModal3}
          cambiarEstado={cambiarEstadoModal3}
          titulo="Portafolio"
        >
          <Contenido>
            <div className="contenido-info-proyecto">
              <div className="descripcion-proyecto">
                <p>
                Created with much love and care, my portfolio. where I recount some of my most important projects, and at the same time I show my skills as a developer
                </p>
                <h2 className="tecnologies-title">Technologies</h2>
                <div className="tecnologias">
                  <AiFillHtml5 className="icon-html5" />
                  <DiCss3 className="icon-css3" />
                  <IoLogoJavascript className="icon-javascript" />
                  <DiReact className="icon-react" />
                </div>
                <h2 className="tecnologies-title">Links</h2>

                <div className="links-proyectos">
                  <a
                    href="https://github.com/AlexisVennegas/portafolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="links-proyect-icon icon-github" />
                  </a>
                </div>
              </div>
              <div className="contenido-imagen-proyecto">
                <img
                  src={GiftPortafolio}
                  alt="proyectoForo"
                  className="proyecto-img img-foro"
                />
              </div>
            </div>
          </Contenido>
        </Modal>
      </div>
      {/* Modal 4 */}
      <Modal
        estado={estadoModal4}
        cambiarEstado={cambiarEstadoModal4}
        titulo="TrailerPlanet"
      >
        <Contenido>
          <div className="contenido-info-proyecto">
            <div className="descripcion-proyecto">
              <p>
                The main objective of this work is to consume an "API" where it
                will show us all the information of the movies, and also to
                implement libraries to show a small trailer or a fragment of it.
              </p>
              <h2 className="tecnologies-title">Technologies</h2>

              <div className="tecnologias">
                <AiFillHtml5 className="icon-html5" />
                <DiCss3 className="icon-css3" />
                <IoLogoJavascript className="icon-javascript" />
                <DiReact className="icon-react" />
              </div>
              <h2 className="tecnologies-title">Links</h2>
              <div className="links-proyectos">
                <a
                  href="https://github.com/AlexisVennegas/moviesApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="links-proyect-icon icon-github" />
                </a>
                <a
                  href="https://github.com/AlexisVennegas/moviesApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbCloudFog className="links-proyect-icon icon-web" />
                </a>
              </div>
            </div>
            <div className="contenido-imagen-proyecto">
              <img
                src={GifDos}
                alt="proyectoForo"
                className="proyecto-img img-foro"
              />
            </div>
          </div>
        </Contenido>
      </Modal>
      {/* Modal 5 */}
      <Modal
        estado={estadoModal5}
        cambiarEstado={cambiarEstadoModal5}
        titulo="ShoppingList: Supermarket"
      >
        <Contenido>
          <div className="contenido-info-proyecto">
            <div className="descripcion-proyecto">
              <p>
              The intention with this application is to make this process easier for us, allowing us to make a more organized shopping list.
 Using HTML, CSS and JavaScript with local storage.
              </p>
              <h2 className="tecnologies-title">Technologies</h2>

              <div className="tecnologias">
                <AiFillHtml5 className="icon-html5" />
                <DiCss3 className="icon-css3" />
                <FaBootstrap className="icon-bots" />
                <IoLogoJavascript className="icon-javascript" />
              </div>
              <h2 className="tecnologies-title">Links</h2>
              <div className="links-proyectos">
                <a
                  href="https://github.com/AlexisVennegas/SuperMarket"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="links-proyect-icon icon-github" />
                </a>
                <a
                  href="https://alexisvennegas.github.io/SuperMarket/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbCloudFog className="links-proyect-icon icon-web" />
                </a>
              </div>
            </div>
            <div className="contenido-imagen-proyecto">
              <img
                src={GiftLista}
                alt="proyectoForo"
                className="proyecto-img img-foro"
              />
            </div>
          </div>
        </Contenido>
      </Modal>
      {/* Modal 6 */}
      <Modal
        estado={estadoModal6}
        cambiarEstado={cambiarEstadoModal6}
        titulo="future..."
      >
        <Contenido>
          <h1>trabajo3</h1>
          <p>Lorem, ipsum dolor.</p>
        </Contenido>
      </Modal>
      {/* Modal 7 */}
      <Modal
        estado={estadoModal7}
        cambiarEstado={cambiarEstadoModal7}
        titulo="Red Social: GeeckyGram"
      >
        <Contenido>
          <div className="contenido-info-proyecto">
            <div className="descripcion-proyecto">
              <p>
                The objective is to develop a social network type application
                that is used to gossip the profiles and photos of other people.
              </p>
              <h2 className="tecnologies-title">Technologies</h2>

              <div className="tecnologias">
                <AiFillHtml5 className="icon-html5" />
                <DiCss3 className="icon-css3" />
                <IoLogoJavascript className="icon-javascript" />
                <DiPhp className="icon-php" />
                <DiJqueryLogo className="icon-jquery" />
              </div>
              <h2 className="tecnologies-title">Links</h2>
              <div className="links-proyectos">
                <a href="github.com" target="_blank" rel="noreferrer">
                  <BsGithub className="links-proyect-icon" />
                </a>
                <a href="links.com" target="_blank" rel="noreferrer">
                  <TbCloudFog className="links-proyect-icon" />
                </a>
              </div>
            </div>
            <div className="contenido-imagen-proyecto">
              <img
                src={TrabajoTres}
                alt="proyectoForo"
                className="proyecto-img img-foro"
              />
            </div>
          </div>
        </Contenido>
      </Modal>
      {/* Modal 8 */}
      <Modal
        estado={estadoModal8}
        cambiarEstado={cambiarEstadoModal8}
        titulo="Music-App"
      >
        <Contenido>
          <div className="contenido-info-proyecto">
            <div className="descripcion-proyecto">
              <p>
              Application to practice, designed to facilitate the reproduction of music when you study or work
              </p>
              <h2 className="tecnologies-title">Technologies</h2>

              <div className="tecnologias">
                <AiFillHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
                <DiPhp />
                <DiJqueryLogo />
              </div>
              <h2 className="tecnologies-title">Links</h2>
              <div className="links-proyectos">
                <a href="github.com">
                  <BsGithub className="links-proyect-icon" />
                </a>
                <a href="links.com">
                  <TbCloudFog className="links-proyect-icon" />
                </a>
              </div>
            </div>
            <div className="contenido-imagen-proyecto">
              <img
                src={GiftMusica}
                alt="proyectoForo"
                className="proyecto-img img-foro"
              />
            </div>
          </div>
        </Contenido>
      </Modal>
      {/* Modal 9 */}
      <Modal
        estado={estadoModal9}
        cambiarEstado={cambiarEstadoModal9}
        titulo="trabajo3"
      >
        <Contenido>
          <h1>trabajo3</h1>
          <p>Lorem, ipsum dolor.</p>
        </Contenido>
      </Modal>
    </div>
  );
};

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`
