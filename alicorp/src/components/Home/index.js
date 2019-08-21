import React, { useState } from 'react';

import Header from "../Header/index.js";
import firebase from "../../controller/firebase";
import Categories from './Categories/';
import Products from './Products/';
import Orders from '../Orders/index';
import Option from '../Option'
import Principal from './Principal/Principal';
const Home = (props) => {

  const [allProducts] = firebase.getProducts();
  const [allOrders] = firebase.getOrders();
  const [orders,setOrders]= useState([]);
  const [searProd, setsearchProd]=useState('');

 // const [allSearch]=firebase.searchProduct(searProd);
 
  console.log(allProducts);
  console.log(allOrders);
  //console.log(searProd);
  
 
  return (
    <main>
       
      <Header  props={props}/>
      <Principal />
      <section className="container-fluid">
        {/* slider imgs */}
        <div>
        </div>
        <div>
          <Categories props={props} />
        </div>
      </section>
      <section className="container-fluid">
        <div>
          <Option name="Jabones" aClass="nav-link active" route="/jabones" props={props} />
          <Products allProducts={allProducts} category="Jabones"  allOrders={allOrders} orders={orders} setOrders={setOrders}/>
        </div>
        <div>
          <Option name="Pastas" aClass="nav-link active" route="pastas" props={props}/>
          <Products allProducts={allProducts} category="Pastas" allOrders={allOrders} orders={orders} setOrders={setOrders}/>
        </div>
        <div>
          <Option name="Conservas" aClass="nav-link active" route="/conservas" props={props} />
          <Products allProducts={allProducts} category="Conservas" allOrders={allOrders} orders={orders} setOrders={setOrders}/>
        </div>
        <div>
          <Option name="Aceites" aClass="nav-link active" route="/aceites" props={props}/>
          <Products allProducts={allProducts} category="Aceites" allOrders={allOrders} orders={orders} setOrders={setOrders}/>
        </div>
        <div>
          <Option name="Detergentes" aClass="nav-link active" route="/detergentes" props={props}/>
          <Products allProducts={allProducts} category="Detergentes" allOrders={allOrders} orders={orders} setOrders={setOrders}/>
        </div>
      </section>
     <Orders allProducts={allProducts} orders={orders} setOrders={setOrders}/>
    </main>
  )
}

export default Home;