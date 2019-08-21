import React from 'react';
import Item from './Item';

const Category = () => {

  return (
    // <!--Carousel Wrapper-->
    <section className="boxes">
    <div className="container">
      <div className="row">
        <Item img="https://i.postimg.cc/k5XSYNyZ/ACEITES.png"/>
        <Item img="https://i.postimg.cc/hjQfN2QC/CONSERVAS.png"/>
        <Item img="https://i.postimg.cc/Fs47ngrZ/PASTAS.png"/>
        <Item img="https://i.postimg.cc/rFjFnBYV/DETER.png"/>
        <Item img="https://i.postimg.cc/NG7gLht6/JABONES.png"/>
        <Item img="https://i.postimg.cc/8zsDyj64/COMBOS.png"/>
      </div>
    </div>
  </section>

  )
}

export default Category;