
import React,{useState} from "react";
import Card from './Card'
import ctrl from '../../../controller/products';

const Products = ({ allProducts, category,allOrders,orders,setOrders }) => {
 
  const mapFunc = (fn) => (id) => {
    setOrders(fn(orders, id))
  };
  console.log(orders);
  return (
    <div className="mx-2 d-flex">
      <div className="flex-wrap d-flex justify-content-between">
        {allProducts &&
          allProducts.docs.filter((ele) => ele.data().category === category).slice(0,4).map(ele =>
            (<Card el={ele}  setOrders={setOrders} orders={orders} />
            )
          )}
      </div>

    </div>
  )
};
export default Products;
