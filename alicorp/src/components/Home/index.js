import React, { useState } from 'react';

import Header from "../Header";
import firebase from "../../controller/firebase";
import Categories from './Categories/';
import Products from './Products/';
import Orders from '../Orders/index';
import Option from './Option'
import Principal from './Principal/Principal';

const Home = () => {

  const [allProducts] = firebase.getProducts();
  const [allOrders] = firebase.getOrders();
  const [orders,setOrders]= useState([]);
  const [allSearch]=firebase.searchProduct();
  const [searProd, setsearchProd]=useState('');
  
  console.log(allProducts);
  console.log(allOrders);
  console.log('mis prod'+ allSearch);
  
 
  return (
    <main>
      <Header 
       setsearchProd={setsearchProd}
      />
      <Principal />
      <section className="container-fluid">
        {/* slider imgs */}
        <div>
        </div>
        <div>
          <Option name="Categorías" aClass="nav-link active" />
          <Categories />
        </div>
      </section>
      <section className="container-fluid">
        <div>
          <Option name="Jabones" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Jabones"  allOrders={allOrders} orders={orders} setOrders={setOrders}/>
        </div>
        <div>
          <Option name="Pastas" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Pastas" allOrders={allOrders} orders={orders} setOrders={setOrders}/>
        </div>
        <div>
          <Option name="Conservas" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Conservas" allOrders={allOrders} orders={orders} setOrders={setOrders}/>
        </div>
        <div>
          <Option name="Aceites" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Aceites" allOrders={allOrders} orders={orders} setOrders={setOrders}/>
        </div>
        <div>
          <Option name="Detergentes" aClass="nav-link active" />
          <Products allProducts={allProducts} category="Detergentes" allOrders={allOrders} orders={orders} setOrders={setOrders}/>
        </div>
      </section>
     <Orders allProducts={allProducts} orders={orders} setOrders={setOrders}/>
    </main>
  )
}

export default Home;