
import React, { useState } from "react";
import Card from '../../Home/Products/Card'

const Products = ({ allProducts, category, setOrders, orders }) => {

  return (
    <div className="mx-2 d-flex">
      <div className="flex-wrap d-flex justify-content-between">
        {allProducts &&
          allProducts.docs.filter((ele) => ele.data().category === category).map(ele =>
            (<Card el={ele} setOrders={setOrders} orders={orders} />
            )
          )}
      </div>

    </div>
  )
};
export default Products;
