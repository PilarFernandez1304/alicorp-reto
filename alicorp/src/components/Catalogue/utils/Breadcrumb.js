import React from 'react';

const Ruta = ({ category }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#home">Home</a></li>
        <li className="breadcrumb-item"><a href="#catalogue">Catálogo</a></li>
        <li className="breadcrumb-item active" aria-current="page">{category}</li>
      </ol>
    </nav>
  )
}

export default Ruta;