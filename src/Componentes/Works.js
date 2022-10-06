import React from 'react'
import foro from '../img/Foro.png'
import novio from '../img/novio.png'



export const Works = () => {

  const Trabajos = [
    {
      titulo: "Foro",
      clase: "work-uno",
      imagen: foro
    },
    {
      titulo: "Trabajo Dos",
      clase: "work-Dos",
      imagen: novio
    }
  ];


  const TrabajosMap = Trabajos.map((Trabajos) => (
    <div className="work-one">
      <img 
        className={Trabajos.clase}
        alt={Trabajos.titulo}
        src={Trabajos.imagen}
      />
      <p className='text-work'>{Trabajos.titulo}</p>
    </div>
  ))

  return (
    <div className='Works-page-container'>
        {TrabajosMap}
    </div>
  )
}
