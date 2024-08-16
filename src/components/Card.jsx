import React from 'react'
import "../css/card.css"

const Card = ({nombre, especie}) => {
  return (
    <div className='Card'>
      <h2>Hola {nombre}</h2>
      <h2>Tu especie es {especie}</h2>
    </div>
  )
}

export default Card
