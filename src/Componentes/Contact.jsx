import React, { useState } from "react";
import { HomeButton } from "./HomeButton";
import { AiFillLinkedin } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { HiMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";
import { HiDocumentDownload } from "react-icons/hi";
import Documento from '../Assets/AlexisVenegas.pdf'
import { MailJs } from "../Componentes/MailJs";

export const Contact = () => {
  const [showText, setShowText] = useState(false);
  const [viewText, setViewText] = useState(false);
  const [viewGithubText, setGithubText] = useState(false);
  const [viewInstaText, setViewInstaText] = useState(false);
  const [viewCvText, setViewCvText] = useState(false);


  const titleShow = () => {
    setShowText(true);
  };
  const titleHIdden = () => {
    setShowText(false);
  };

  const ShowTextMail = () => {
    setViewText(true);
  };
  const HiddenTextMail = () => {
    setViewText(false);
  };
  const ShowTextGithub = () => {
    setGithubText(true);
  };
  const HiddenTextGithub = () => {
    setGithubText(false);
  };
  const ShowTextInsta = () => {
    setViewInstaText(true);
  };
  const HiddenTextInsta = () => {
    setViewInstaText(false);
  };
  const ShowTextCv = () => {
    setViewCvText(true);
  };
  const HiddenTextCv = () => {
    setViewCvText(false);
  };

  return (
    <section className="container-contact">
      <HomeButton />
      <h1>Contact</h1>
      <div className="seccionContainer-contacOne" data-aos="fade-right">
        <div>
          <p className="textContact">
            I am looking for opportunities to collaborate with
            companies/agencies/people, contributing my knowledge in programming
            logic that facilitates the development and the right solutions for
            each project, I also have a proactive attitude of team
            collaboration, and the vision of achieving growth in each project
            that I am developing.
          </p>
      <a href={Documento} download>
          <div
              className={viewCvText ? "contactFive-v" : "contactFive"}
              onMouseEnter={ShowTextCv}
              onMouseLeave={HiddenTextCv}
            >
              <HiDocumentDownload className="AiFill Instagram" />
              {viewCvText ? (
                <p className="NameContact">Download my Cv</p>
              ) : (
                <p className="NameContact">Cv</p>
              )}
            </div>
            </a>

          <div
            className={viewText ? "contactOne-v" : "contactOne"}
            onMouseEnter={ShowTextMail}
            onMouseLeave={HiddenTextMail}
          >
            <HiMail className="AiFill Mail" />
            <CopyToClipboard text="erick.alexis.venegas@gmail.com">
              {viewText ? (
                <p
                  onClick={() =>
                    toast("Email Copied", { position: "bottom-right" })
                  }
                  className="NameContact"
                >
                  Copy Mail
                </p>
              ) : (
                <p
                  onClick={() =>
                    toast("Email Copied", { position: "bottom-right" })
                  }
                  className="NameContact"
                >
                  erick.alexis.venegas@gmail.com
                </p>
              )}
            </CopyToClipboard>
            <Toaster />
          </div>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/alexis-venegas-gonzalez/"
            target="_blank" rel="noreferrer"
          >
            <div
              className={showText ? "contactTwo-v" : "contactTwo"}
              onMouseEnter={titleShow}
              onMouseLeave={titleHIdden}
            >
              <AiFillLinkedin className="AiFill Linkedin" />
              {showText ? (
                <p className="NameContact">View Linkedin</p>
              ) : (
                <p className="NameContact">Linkedin</p>
              )}
            </div>
          </a>
          <a href="https://github.com/AlexisVennegas" target="_blank" rel="noreferrer" >
            <div
              className={viewGithubText ? "contactThre-v" : "contactThre"}
              onMouseEnter={ShowTextGithub}
              onMouseLeave={HiddenTextGithub}
            >
              <BsGithub className="AiFill Github" />
              {viewGithubText ? (
                <p className="NameContact">View Github</p>
              ) : (
                <p className="NameContact">Github</p>
              )}
            </div>
          </a>
          <a href="https://www.instagram.com/alex.vennegas/" target="_blank" rel="noreferrer">
            <div
              className={viewInstaText ? "contactFour-v" : "contactFour"}
              onMouseEnter={ShowTextInsta}
              onMouseLeave={HiddenTextInsta}
            >
              <GrInstagram className="AiFill Instagram" />
              {viewInstaText ? (
                <p className="NameContact">View Instagram</p>
              ) : (
                <p className="NameContact">Instagram</p>
              )}
            </div>
          </a>
        </div>
        <MailJs />
      </div>
    </section>
  );
};
