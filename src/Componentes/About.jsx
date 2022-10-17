import React from "react";
import { HomeButton } from "./HomeButton";
import { Frame } from "./Frame";

export const About = () => {
  const Skills = [
    {
      lenguaje: "HTML",
      lvl: "90%",
      clase: "skill-per html",
    },
    {
      lenguaje: "Css",
      lvl: "80%",
      clase: "skill-per css",
    },
    {
      lenguaje: "Bootstrap",
      lvl: "80%",
      clase: "skill-per bootstrap",
    },

    {
      lenguaje: "Javascript",
      lvl: "70%",
      clase: "skill-per javascript",
    },
    {
      lenguaje: "PHP",
      lvl: "70%",
      clase: "skill-per php",
    },
    {
      lenguaje: "SQL",
      lvl: "80%",
      clase: "skill-per sql",
    },
    {
      lenguaje: "GitHub",
      lvl: "80%",
      clase: "skill-per github",
    },
  ];

  const SkillsMap = Skills.map((Skills) => (
    <div className="skill-box" key={Skills.lenguaje}>
      <span className="title-progress">{Skills.lenguaje}</span>
      <div className="skill-bar">
        <span className={Skills.clase}>
          <span className="tooltip">{Skills.lvl}</span>
        </span>
      </div>
    </div>
  ));


  return (
    <div>
      <HomeButton />

      <div className="title-container-about">
        <h1>A passionate for Full Stack developer.</h1>
      </div>
      <div className="text-container-about">
        <p>
          Resolute professional with a great capacity for adaptation, I have
          learned to develop my Skills as a Full Stack developer, my passion is
          the back end. In addition, I have experience working as a team and
          knowledge in agile methodologies.
        </p>
      </div>
      <h1 className="title-text-progress"> Technologies </h1>

      <div className="container-progress" data-aos="zoom-in">
        {SkillsMap}
      </div>
      <h1 className="title-text-progress"> FrameWorks </h1>
      <div className="frameworks-container" data-aos="zoom-in">
        <Frame libreria="Laravel" imagen="laravelimg" li1='Composer' li2='Blade' li3='Artisan' li4='Json' li5='POO' li6='Routes'/>
        <Frame libreria="React" imagen="reactimg" li1='ReactDOM' li2='npm' li3='Components' li4='props' li5='Events' li6='Json'/>
      </div>
    </div>
  );
};