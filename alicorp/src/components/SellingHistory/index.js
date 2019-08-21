
import React, { useState } from "react";
import Header from '../Header'
import Card from './Card'

const Purchase = (props) => {

  return (
    <>
      <Header props={props} />
      <main className="main-relative">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#home">Home</a></li>
            <li className="breadcrumb-item"><a href="#catalogue">Historial de ventas</a></li>
          </ol>
        </nav>
        <section className="container">
          <Card month="Julio" price="231.70" item1="FIDEO DON VITTORIO SPAGHE..." item2="SOLIDO ATUN PRIMOR 170GR ..." />
          <Card month="Junio" price="198.10" item1="FIDEO DON VITTORIO SPAGHE..." item2="SOLIDO ATUN PRIMOR 170GR ..." />
          <Card month="Mayo" price="435.50" item1="FIDEO DON VITTORIO SPAGHE..." item2="SOLIDO ATUN PRIMOR 170GR ..." />

        </section>
      </main>
    </>
  )
};
export default Purchase;
