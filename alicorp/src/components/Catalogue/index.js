
import React, { useState } from "react";
import firebase from "../../controller/firebase";
import Header from '../Header'
import Ruta from './utils/Breadcrumb'
import Item from './utils/Item'

const Catalogue = (props) => {

  return (
    <>
      <Header props={props} />
      <main className="main-relative">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#home">Home</a></li>
            <li className="breadcrumb-item"><a href="#catalogue">Catálogo</a></li>
          </ol>
        </nav>
        <section className="boxes">
          <div className="container">
            <div className="row">
              <Item img="https://i.postimg.cc/k5XSYNyZ/ACEITES.png" route="/aceites" props={props} />
              <Item img="https://i.postimg.cc/hjQfN2QC/CONSERVAS.png" route="/conservas" props={props} />
              <Item img="https://i.postimg.cc/Fs47ngrZ/PASTAS.png" route="/pastas" props={props} />
              <Item img="https://i.postimg.cc/rFjFnBYV/DETER.png" route="/detergentes" props={props} />
              <Item img="https://i.postimg.cc/NG7gLht6/JABONES.png" route="/jabones" props={props} />
              <Item img="https://i.postimg.cc/8zsDyj64/COMBOS.png" route="/combos" props={props} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
};
export default Catalogue;
