import React from "react";
import{ addOrder,decreasingQty} from '../../controller/Orders';
const Counter = ({
 order,qty,orders,setOrders
}) => (
  <div className="col-6 table">
    <button
      className="table-cell btn-img-plus btn-none"
      type="button"
      onClick={() => {
        setOrders(addOrder(order,orders));
      }}
    >
      <img src="https://i.postimg.cc/t4NLbJd9/mas.png"  />
    </button>
    <p className="table-cell">{qty}</p>
    <button
      className="table-cell btn-img-plus btn-none"
      type="button"
      onClick={() => {
        setOrders(decreasingQty(order,orders));
      }}
     
    >
      <img src="https://i.postimg.cc/XvNtYWxd/menos.png"  />
    </button>
    </div>
);
export default Counter;