import React from "react";

export const Frame = (props) => {
  return (
    <div className="skill-card">
      <header className="skill-card__header">
        <img
          className="skill-card__icon"
          src={require(`../img/Frameworks/${props.imagen}.png`)}
          alt="HTML5 Logo"
        />
      </header>
      <section className="skill-card__body">
        <h2 className="skill-card__title">{props.libreria}</h2>
        <span className="skill-card__duration"> </span>
        <ul className="skill-card__knowledge">
          <li>{props.li1}</li>
          <li>{props.li2}</li>
          <li>{props.li3}</li>
          <li>{props.li4}</li>
          <li>{props.li5}</li>
          <li>{props.li6}</li>
        </ul>
      </section>
    </div>
  );
};
