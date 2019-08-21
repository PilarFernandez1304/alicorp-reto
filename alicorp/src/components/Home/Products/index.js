
import React,{useState} from "react";
import Card from './Card'
import ctrl from '../../../controller/products';

const Products = ({ allProducts, category,allOrders,orders,setOrders }) => {
 
  const mapFunc = (fn) => (id) => {
    setOrders(fn(orders, id))
  };
  console.log(orders);
  const increase = mapFunc(ctrl.increase)
  const decrease = mapFunc(ctrl.decrease)
  const remove = mapFunc(ctrl.delete)
  return (
    <div className="mx-2 d-flex">
      <div className="flex-wrap d-flex justify-content-around">
        {allProducts &&
          allProducts.docs.filter((ele) => ele.data().category === category).map(ele =>
            (<Card el={ele}  setOrders={setOrders} orders={orders} />
            )
          )}
      </div>

    </div>
  )
};
export default Products;
