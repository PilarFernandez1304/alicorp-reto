import React, { useState } from 'react';
import Header from '../Header'
import Ruta from './utils/Breadcrumb.js'
import Products from './utils/Products.js'
import firebase from "../../controller/firebase";

const Aceites = (props) => {
  const [allProducts] = firebase.getProducts();
  const [allOrders] = firebase.getOrders();
  const [orders, setOrders] = useState([]);
  return (
    <>
      <Header props={props} />
      <main className="main-relative">
        <Ruta category="Aceites" />
        <Products allProducts={allProducts} category="Aceites" orders={orders} setOrders={setOrders} />
      </main>
    </>
  )
};

export default Aceites;