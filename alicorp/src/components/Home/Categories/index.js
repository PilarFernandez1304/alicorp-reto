import React from 'react';
import Item from './Item';

const Category = ({props}) => {

  return (
    // <!--Carousel Wrapper-->
    <section className="boxes">
      <div className="container">
        <div className="row">
          <Item img="https://i.postimg.cc/k5XSYNyZ/ACEITES.png" route="/aceites" props={props} />
          <Item img="https://i.postimg.cc/hjQfN2QC/CONSERVAS.png" route="/conservas" props={props} />
          <Item img="https://i.postimg.cc/Fs47ngrZ/PASTAS.png" route="/pastas" props={props}  />
          <Item img="https://i.postimg.cc/rFjFnBYV/DETER.png" route="/detergentes" props={props}  />
          <Item img="https://i.postimg.cc/NG7gLht6/JABONES.png" route="/jabones" props={props} />
          <Item img="https://i.postimg.cc/8zsDyj64/COMBOS.png" route="/combos" props={props} />
        </div>
      </div>
    </section>

  )
}

export default Category;