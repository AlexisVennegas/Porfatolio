import React, { useState } from "react";
import { HomeButton } from "./HomeButton";
import { AiFillLinkedin } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { HiMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";




export const Contact = () => {


  const [showText, setShowText] = useState(false);

  const titleHIdden = () => {
    setShowText(false);
  };
  const titleShow = () => {
    setShowText(true);
  };

const socialNetworks = [
  {
    logo: AiFillLinkedin,
    link: 'https://www.linkedin.com/in/alexis-venegas-gonzalez/',
    name: 'Linkedin'
  },
  {
    logo: GrInstagram,
    link: 'https://www.instagram.com/alex.vennegas/',
    name:'Instagram'
  },
  {
    logo: HiMail,
    link: 'erick.alexis.venegas@gmail.com',
    name: 'Mail'
  },
  {
    logo: BsGithub,
    link: 'https://github.com/AlexisVennegas',
    name: 'Github'
  }
  
]

const socialNetworksMap = socialNetworks.map((socialNetworks) => (
    <a href={socialNetworks.link} key={socialNetworks.name} Target="_blank" className={showText ? "contact-v" : "contact"}>
    <li className="list-socialNetworks">
       {<socialNetworks.logo/>}
      <p className="text-socialNetworks">{socialNetworks.name}</p>
    </li>
    </a>
))

  return (
    <div>
      <HomeButton />
      <div className="titleContact-container">
        <h1 className="titleContact">Contact</h1>
      </div>

      <div className="containter-social"
      onMouseEnter={titleShow}
      onMouseLeave={titleHIdden}>
        <ol>
          {socialNetworksMap}
        </ol>
      </div>
    </div>
  );
};
