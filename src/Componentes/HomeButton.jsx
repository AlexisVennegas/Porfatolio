import React from 'react'
import {TiArrowLeftThick} from "react-icons/ti";
import { Link } from "react-router-dom";

export const HomeButton = () => {
  return (
    <div className='container-button-home'>
      <Link to="/" className="linkhomeasd">
      <TiArrowLeftThick  className='icon-button-home'/><p>Home</p>
      </Link>
    </div>
  )
}
